import styles from "@/components/Product.module.css";
import Popup from 'reactjs-popup';

export const PRODUCTS = {
    // categorias
    'Principais': [
        // produtos
        {
            name: 'Baú',
            id: 'bau',
            price: 5.00,
            description: 'Receba um baú personalizado com itens exclusivos para dar aquele boost na sua jornada!',
            expanded_description: 'O Kit Baú é perfeito para quem quer começar com o pé direito ou dar uma turbinada no seu progresso. Você recebe um baú cheio de itens úteis como ferramentas, blocos de construção, comida e alguns recursos raros. É como ganhar um presente surpresa que vai te ajudar muito no servidor!',
            icon: 'https://minecraft.wiki/images/thumb/Chest.gif/150px-Chest.gif?ca959',
            fields: [
                {
                    type: "text",
                    name: "player",
                    placeholder: "Nick do jogador...",
                    required: true,
                },
            ],
        },
        {
            name: 'Home',
            id: 'home',
            price: 2.00,
            description: 'Adicione ainda mais um ponto de /home no seu jogo e facilite sua vida no SMP!',
            expanded_description: 'Cansado de ter que escolher entre sua casa, sua farm ou sua base secreta? Com esse produto, você ganha mais um slot de /home permanente! Assim, pode se teletransportar com facilidade para mais lugares importantes no seu mundo. Prático, rápido e perfeito pra quem joga sério.',
            icon: 'https://minecraft.wiki/images/Ender_Pearl_JE3_BE2.png?829a7',
            fields: [
                {
                    type: "text",
                    name: "player",
                    placeholder: "Nick do jogador...",
                    required: true,
                },
            ],
        },
        {
            name: 'Unban',
            id: 'unban',
            price: 5.00,
            description: 'Segunda chance no SMP Raiz! Remova seu ban e volte a jogar com a comunidade.',
            expanded_description: 'Todo mundo merece uma segunda chance. Se você foi banido e quer voltar a fazer parte da comunidade do SMP Raiz, este produto remove seu ban permanentemente. Mostre que mudou e que está pronto para contribuir positivamente com o servidor. Uma nova oportunidade de ser raiz de verdade!',
            icon: 'https://media.forgecdn.net/avatars/thumbnails/307/486/256/256/637388451783712242.png',
            fields: [
                {
                    type: "text",
                    name: "player",
                    placeholder: "Nick do jogador banido...",
                    required: true,
                },
            ],
        },
    ],
    'Gemas': [
        {
            name: '100 Gemas',
            id: 'gemas_1',
            price: 2.00,
            description: 'Pacote básico de gemas para suas primeiras compras no servidor!',
            expanded_description: 'Comece sua jornada no SMP Raiz com este pacote básico de 100 gemas. Perfeito para quem está começando e quer experimentar o sistema de economia do servidor. Use para comprar itens básicos, participar de leilões ou trocar com outros jogadores.',
            icon: 'https://minecraft.wiki/images/Emerald_JE3_BE3.png?4c5f3',
            fields: [
                {
                    type: "text",
                    name: "player",
                    placeholder: "Nick do jogador...",
                    required: true,
                },
            ],
        },
        {
            name: '500 Gemas',
            id: 'gemas_2',
            price: 8.00,
            description: 'Pacote intermediário de gemas para investimentos maiores e compras especiais!',
            expanded_description: 'O pacote intermediário é ideal para jogadores que querem fazer investimentos maiores. Com 500 gemas, você pode participar de leilões de itens raros, comprar terrenos premium ou fazer grandes negócios com outros jogadores. Seu poder de compra no servidor aumenta significativamente!',
            icon: 'https://minecraft.wiki/images/Emerald_JE3_BE3.png?4c5f3',
            fields: [
                {
                    type: "text",
                    name: "player",
                    placeholder: "Nick do jogador...",
                    required: true,
                },
            ],
        },
        {
            name: '1000 Gemas',
            id: 'gemas_3',
            price: 15.00,
            description: 'Pacote premium de gemas para os jogadores mais dedicados e ambiciosos!',
            expanded_description: 'Para os verdadeiros empresários do SMP Raiz! Com 1000 gemas, você se torna um player de elite na economia do servidor. Compre os itens mais raros, domine os leilões, crie seu império comercial e seja reconhecido como um dos jogadores mais ricos e influentes do servidor.',
            icon: 'https://minecraft.wiki/images/Emerald_JE3_BE3.png?4c5f3',
            fields: [
                {
                    type: "text",
                    name: "player",
                    placeholder: "Nick do jogador...",
                    required: true,
                },
            ],
        },
    ],
    'Cosméticos': [
        {
            name: 'Cor no nick',
            id: 'cor_nick_1',
            price: 3.00,
            description: 'Destaque seu nick com uma cor especial no chat! Escolha entre várias opções disponíveis.',
            expanded_description: 'Cansado de ter um nick comum no chat? Com este produto, você pode escolher uma cor especial para seu nickname ficar destacado nas conversas. Disponível em várias cores como azul, vermelho, verde, amarelo e muito mais. Uma forma simples e barata de ter mais personalidade no servidor!',
            icon: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/37/Light_Blue_Wool_JE3_BE3.png/revision/latest?cb=20200315193219',
            fields: [
                {
                    type: "text",
                    name: "player",
                    placeholder: "Nick do jogador...",
                    required: true,
                },
                {
                    type: "select",
                    name: "color",
                    placeholder: "Escolha a cor...",
                    required: true,
                    options: [
                        { value: "&1", label: "Azul" },
                        { value: "&c", label: "Vermelho" },
                        { value: "&2", label: "Verde" },
                        { value: "&e", label: "Amarelo" },
                        { value: "&5", label: "Roxo" },
                        { value: "&d", label: "Rosa" },
                        { value: "&6", label: "Laranja" }
                    ]
                },
            ],
        },
        {
            name: 'Qualquer cor no nick',
            id: 'cor_nick_2',
            price: 8.00,
            description: 'Liberdade total! Escolha QUALQUER cor para seu nick, incluindo gradientes e efeitos especiais.',
            expanded_description: 'A personalização definitiva para seu nickname! Com este produto premium, você tem acesso a QUALQUER cor possível, incluindo códigos hexadecimais, gradientes arco-íris, efeitos piscantes e combinações únicas. Seja único no servidor com uma cor que só você tem. Inclui suporte a cores customizadas e efeitos especiais!',
            icon: 'https://static.wikia.nocookie.net/minecraft/images/1/14/WoolColorsNew.gif/revision/latest?cb=20190922185310',
            fields: [
                {
                    type: "text",
                    name: "player",
                    placeholder: "Nick do jogador...",
                    required: true,
                },
                {
                    type: "text",
                    name: "custom_color",
                    placeholder: "Código hex da cor desejada...",
                    required: true,
                },
            ],
        },
    ],
    'VIP': [
        {
            name: 'VIP',
            id: 'vip_1',
            price: 10.00,
            description: 'Ganhe destaque no servidor com o VIP! Prefixo colorido, acesso a comandos exclusivos e mais visibilidade na comunidade.',
            expanded_description: 'Com o VIP do SMP Raiz, você mostra que é raiz de verdade. Receba um prefixo especial no chat, destaque nos rankings e acesso a comandos exclusivos que facilitam sua vida no servidor. Além disso, você ajuda a manter o projeto no ar! Um jeito de jogar com estilo e ainda apoiar o servidor.',
            icon: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fc/Iron_Ingot_JE3_BE2.png/revision/latest/thumbnail/width/360/height/360?cb=20230613175240',
            fields: [
                {
                    type: "text",
                    name: "player",
                    placeholder: "Nick do jogador...",
                    required: true,
                },
            ],
        },
        {
            name: 'VIP+',
            id: 'vip_2',
            price: 10.00,
            description: 'Ganhe destaque no servidor com o VIP! Prefixo colorido, acesso a comandos exclusivos e mais visibilidade na comunidade.',
            expanded_description: 'Com o VIP do SMP Raiz, você mostra que é raiz de verdade. Receba um prefixo especial no chat, destaque nos rankings e acesso a comandos exclusivos que facilitam sua vida no servidor. Além disso, você ajuda a manter o projeto no ar! Um jeito de jogar com estilo e ainda apoiar o servidor.',
            icon: 'https://minecraft.wiki/images/Gold_Ingot_JE4_BE2.png?80cd6',
            fields: [
                {
                    type: "text",
                    name: "player",
                    placeholder: "Nick do jogador...",
                    required: true,
                },
            ],
        },
        {
            name: 'VIP MVP',
            id: 'vip_3',
            price: 10.00,
            description: 'Ganhe destaque no servidor com o VIP! Prefixo colorido, acesso a comandos exclusivos e mais visibilidade na comunidade.',
            expanded_description: 'Com o VIP do SMP Raiz, você mostra que é raiz de verdade. Receba um prefixo especial no chat, destaque nos rankings e acesso a comandos exclusivos que facilitam sua vida no servidor. Além disso, você ajuda a manter o projeto no ar! Um jeito de jogar com estilo e ainda apoiar o servidor.',
            icon: 'https://minecraft.wiki/images/Diamond_JE3_BE3.png?99d00&20200325185152',
            fields: [
                {
                    type: "text",
                    name: "player",
                    placeholder: "Nick do jogador...",
                    required: true,
                },
            ],
        },
    ],
}

/**
 * Função para renderizar campos dinâmicos
 * @param {{}} field - Objeto do field dos produtos
 * @param {String} productName - Nome do produto
 * @returns 
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
        // Campo padrão (text, email, etc.)
        return (
            <input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                id={fieldId}
                required={field.required || false}
            />
        );
    }
}

/**
 * Função para gerar o popup do produto
 * @param {Object} properties - Passagem de propriedades
 * @param {{}} properties.product - Objeto do produto
 * @returns 
 */
function ProductPopup({ product }) {
    return <>
        <Popup
            trigger={<button className="button"> COMPRAR! </button>}
            modal
            nested
        >
            {close => (
                <form action="/api/sell" method="post" className="modal">

                    <header className="header">
                        <img src={product.icon} alt={`Ícone de ${product.name}`} />
                        {product.name}
                    </header>

                    <main className="content">
                        {product.expanded_description}

                        <input type="hidden" name="product" value={product.id} />

                        {/* Renderização dinâmica dos campos */}
                        {product.fields?.map(field => renderField(field, product.name))}
                    </main>

                    <footer className="actions">
                        <a onClick={() => { close() }}>
                            Cancelar
                        </a>

                        <button type="submit">
                            Comprar!
                        </button>
                    </footer>
                </form>
            )}
        </Popup>
    </>
};

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
    )
}