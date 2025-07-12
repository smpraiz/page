import { MercadoPagoConfig, Payment } from "mercadopago";
import { PRODUCTS } from "@/components/Product"; // ajuste o caminho se necessário

const useSandbox = String(process.env.USE_SANDBOX).toUpperCase() === 'TRUE';

const client = new MercadoPagoConfig({
  accessToken: useSandbox
    ? process.env.MERCADO_PAGO_SANDBOX_TOKEN
    : process.env.MERCADO_PAGO_ACCESS_TOKEN,
});

const paymentApi = new Payment(client);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  try {
    const { product, player, color, custom_color } = req.body;

    if (!product || !player) {
      return res.status(400).json({ message: 'Dados obrigatórios não informados' });
    }

    const amount = getPriceByProductId(product);
    const description = buildDescription({ product, player, color, custom_color });

    const payment = await paymentApi.create({
      body: {
        transaction_amount: amount,
        description,
        payment_method_id: 'pix',
        payer: {
          email: `${player}+${Date.now()}@smpraiz.com`,
          first_name: player,
          identification: {
            type: 'CPF',
            number: '19100000000'
          }
        }
      }
    });

    const { id, point_of_interaction } = payment;

    return res.status(200).json({
      success: true,
      paymentId: String(id),
      qrCodeBase64: point_of_interaction.transaction_data.qr_code_base64,
      pixCode: point_of_interaction.transaction_data.qr_code,
      expiresAt: point_of_interaction.transaction_data.qr_code_expiration_date,
      amount,
      player,        // adicione
      product,       // adicione
      color,         // adicione se existir
      custom_color
    });
  } catch (error) {
    console.error('Erro ao criar pagamento:', error);
    return res.status(500).json({ message: error.message || 'Erro ao criar pagamento' });
  }
}

// Refatorado para buscar o preço na const PRODUCTS
function getPriceByProductId(productId) {
  for (const category of Object.values(PRODUCTS)) {
    const found = category.find(p => p.id === productId);
    if (found) return found.price;
  }
  return 0.02; // valor padrão caso não encontre
}

function buildDescription({ product, player, color, custom_color }) {
  let desc = `[SMP Raiz] Produto: ${product} | Jogador: ${player}`;
  if (color) desc += ` | Cor: ${color}`;
  if (custom_color) desc += ` | Cor Customizada: ${custom_color}`;
  return desc;
}