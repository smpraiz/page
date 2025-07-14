import styles from "@/components/Product.module.css";
import Popup from 'reactjs-popup';
import Link from "next/link";
import { useEffect, useState } from 'react';

/**
 * Traduz o status do pagamento
 * @param {String} status - Status do pagamento 
 * @returns {String} Status traduzido
 */
function translateStatus(status) {
    const map = {
        approved: 'Aprovado',
        pending: 'Pendente',
        rejected: 'Rejeitado',
        cancelled: 'Cancelado',
    };
    return map[status] || status;
}

/**
 * Produtos disponíveis na loja
 */
export const PRODUCTS = {
    'Principais': [
        {
            name: 'Home',
            id: 'home',
            price: 2.00,
            description: 'Cansado(a) de ter que escolher entre sua casa, sua farm ou sua base secreta? Adicione ainda mais um ponto de /home no seu jogo e facilite sua vida no SMP!',
            expanded_description: 'Cansado(a) de ter que escolher entre sua casa, sua farm ou sua base secreta? Com esse produto, você ganha mais um slot de /home permanente! Assim, pode se teletransportar com facilidade para mais lugares importantes no seu mundo. Prático, rápido e perfeito pra quem joga sério.',
            icon: 'https://minecraft.wiki/images/Ender_Pearl_JE3_BE2.png?829a7',
            fields: [
                {
                    name: 'quantity',
                    type: 'number',
                    placeholder: 'Quantidade de homes (1-10)',
                    required: true,
                    min: 1,
                    max: 10,
                    value: 1,
                },
            ],
        },
        {
            name: 'Apoiador',
            id: 'apoiador',
            price: 5.00,
            description: 'Mostre que você é um verdadeiro apoiador do SMP Raiz com o rank Apoiador! Com ele, você ganha um prefixo exclusivo, possibilidade de falar colorido, comando /chapéu e a satisfação de ajudar o servidor a crescer e melhorar cada vez mais.',
            expanded_description: 'Mostre que você é um verdadeiro apoiador do SMP Raiz com o rank Apoiador! Com ele, você ganha um prefixo exclusivo, possibilidade de falar colorido, comando /chapéu e a satisfação de ajudar o servidor a crescer e melhorar cada vez mais. O rank Apoiador é vitalício, ou seja, você não precisa se preocupar em renovar ou perder suas vantagens. Além disso, você estará contribuindo para manter o servidor ativo, com novidades e eventos para toda a comunidade. Seja um Apoiador e faça parte dessa jornada!',
            icon: 'https://minecraft.wiki/images/Golden_Apple_JE2_BE2.png?aa827',
        },
        {
            name: 'VIP (30 dias)',
            id: 'vip1',
            price: 7.99,
            description: 'O VIP é o rank mais popular do servidor, com várias vantagens legais como redução no tempo de espera do /home e do /tpa, kits semanais (kit VIP), e 3 homes a mais de brinde!',
            expanded_description: 'O VIP é o rank mais popular do servidor, com várias vantagens legais como redução no tempo de espera do /home e do /tpa, kits semanais (kit VIP), e 3 homes a mais de brinde! Além disso, você ajuda a manter o servidor ativo e em crescimento. O VIP dura 30 dias e é renovável.',
            icon: 'https://minecraft.wiki/images/Nether_Star.gif?fb01f',
        }
    ]
}

/**
 * Função para renderizar campos dinâmicos
 * @param {{}} field - Objeto do field dos produtos
 * @param {String} productName - Nome do produto
 * @returns {JSX.Element} Campo renderizado
 */
function renderField(field, productName) {
    const fieldId = `${productName}-${field.name}`;

    if (field.type === "select") {
        return (
            <select
                key={field.name}
                name={field.name}
                id={fieldId}
                required={field.required || false}
                defaultValue=""
            >
                <option value="" disabled>{field.placeholder}</option>
                {field.options?.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        );
    } else {
        return (
            <input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                id={fieldId}
                required={field.required || false}
                min={field.min}
                max={field.max}
                defaultValue={field.value || ''}
            />
        );
    }
}

/**
 * Popup de compra do produto
 * @param {Object} properties
 * @param {{}} properties.product 
 * @returns {JSX.Element} Popup de compra do produto
 */
function ProductPopup({ product }) {
    const [currentStep, setCurrentStep] = useState('form');
    const [loading, setLoading] = useState(false);
    const [paymentData, setPaymentData] = useState(null);
    const [paymentStatus, setPaymentStatus] = useState(null);
    const [error, setError] = useState(null);
    const [pollingId, setPollingId] = useState(null);

    const [playerName, setPlayerName] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());

            const response = await fetch('/api/sell', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setPaymentData(result);
                setCurrentStep('payment');
                startPaymentPolling(result.paymentId);
            } else {
                setError(result.message || 'Erro ao processar compra');
            }
        } catch (err) {
            setError('Erro de conexão. Tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    const startPaymentPolling = (paymentId) => {
        const interval = setInterval(async () => {
            try {
                const response = await fetch(`/api/payment-status/${paymentId}`);
                const result = await response.json();
                setPaymentStatus(result.status);
            } catch (err) {
                console.warn("Erro ao verificar pagamento", err);
            }
        }, 5000);

        setPollingId(interval);
        setTimeout(() => clearInterval(interval), 10 * 60 * 1000);
    };

    // useEffect para entrega automática quando aprovado
    useEffect(() => {
        if (paymentStatus === 'approved' && paymentData) {
            // Para o polling
            if (pollingId) clearInterval(pollingId);

            setCurrentStep('success');

            // Entrega o item
            fetch('/api/deliver', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    player: paymentData.player,
                    product: paymentData.product,
                    productName: paymentData.productName,
                    amount: paymentData.amount,
                    quantity: paymentData.quantity,
                    extra: {
                        color: paymentData.color,
                        custom_color: paymentData.custom_color,
                    }
                }),
            });
        }
    }, [paymentStatus, paymentData, pollingId]);

    const resetPopup = () => {
        setCurrentStep('form');
        setPaymentData(null);
        setError(null);
        setLoading(false);
        setPaymentStatus(null);
    };

    return (
        <Popup
            trigger={<button className="button"> COMPRAR! </button>}
            modal
            nested
            onClose={resetPopup}
        >
            {close => (
                <div className="modal">
                    <header className="header">
                        <img src={product.icon} alt={`Ícone de ${product.name}`} />
                        {product.name}
                    </header>

                    <main className="content">
                        {currentStep === 'form' && (
                            <>
                                <p>{product.expanded_description}</p>

                                {error && (
                                    <div className="error-message" style={{ color: 'red', fontWeight: 'bold' }}>
                                        {error}
                                    </div>
                                )}

                                <form onSubmit={handleFormSubmit}>
                                    <input type="hidden" name="product" value={product.id} />
                                    <input type="hidden" name="productName" value={product.name} />

                                    <div id={styles.playerInput}>
                                        <img 
                                            src={playerName.startsWith('_') ? 
                                                `https://api.creepernation.net/avatar/${playerName.slice(1)}/bedrock`
                                                : `https://mc-heads.net/avatar/${playerName}`} 
                                            width={160}
                                            height={160}
                                            onError={(e) => e.target.src = 'https://mc-heads.net/avatar/MHF_Steve'}
                                        />
                                        
                                        <input
                                            type="text"
                                            name="player"
                                            placeholder={'Nick do jogador...'}
                                            id={`${product.id}-player`}
                                            required={true}
                                            value={playerName}
                                            onChange={(e) => setPlayerName(e.target.value.replace(/[^a-zA-Z0-9_]/g, '').slice(0, 16))}
                                        />
                                    </div>

                                    {product.fields?.map(field => renderField(field, product.id))}

                                    <p className={styles.terms}>Ao comprar este produto você concorda com nossos <Link href={'/terms'}>Termos de Uso</Link> e <Link href={'/privacy'}>Política de privacidade</Link>.</p>

                                    <div className="actions">
                                        <a onClick={close} disabled={loading}>Cancelar</a>
                                        <button type="submit" disabled={loading}>
                                            {loading ? 'Processando...' : 'Comprar!'}
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}

                        {currentStep === 'payment' && paymentData && (
                            <div className={styles.paymentStep}>
                                <p>Escaneie o QR Code abaixo para efetuar o pagamento:</p>

                                <img
                                    src={`data:image/png;base64,${paymentData.qrCodeBase64}`}
                                    alt="QR Code PIX"
                                    style={{ maxWidth: '300px' }}
                                />

                                <div className="actions">
                                    <div className={styles.pixCopyPaste}>
                                        <p>Ou copie o código PIX:</p>
                                        <input
                                            type="text"
                                            value={paymentData.pixCode}
                                            readOnly
                                            onClick={(e) => e.target.select()}
                                        />
                                        <button
                                            onClick={() => navigator.clipboard.writeText(paymentData.pixCode)}
                                            className="copy-button"
                                        >
                                            Copiar
                                        </button>
                                    </div>

                                    <div className={styles.paymentInfo}>
                                        <p><strong>Valor:</strong> R$ {product.price.toFixed(2)}</p>
                                        <p><strong>Status:</strong> {translateStatus(paymentStatus)}</p>
                                        <button onClick={close}>Fechar</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {currentStep === 'success' && (
                            <div className={styles.successStep}>
                                <h3>🎉 Pagamento Confirmado!</h3>
                                <p>Sua compra foi processada com sucesso!</p>
                                <p>O produto {product.name} será entregue em breve no servidor.</p>

                                <div className="actions">
                                    <button onClick={close}>Fechar</button>
                                </div>
                            </div>
                        )}
                    </main>
                </div>
            )}
        </Popup>
    );
}

/**
 * Componente de produto
 * @param {Object} properties - Propriedades do componente
 * @param {{}} properties.product - Produto a ser exibido
 * @returns {JSX.Element} Componente de produto
 */
export default function Product({ product }) {
    return (
        <div className={styles.product}>
            <section>
                <h3>{product.name} <span>R${product.price}</span></h3>
                <img src={product.icon} alt={`Ícone de ${product.name}`} />
            </section>

            <p>{product.description}</p>

            <ProductPopup product={product} />
        </div>
    );
}