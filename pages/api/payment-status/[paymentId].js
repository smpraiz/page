import { MercadoPagoConfig, Payment } from "mercadopago";

const useSandbox = String(process.env.USE_SANDBOX).toUpperCase() === 'TRUE';

const client = new MercadoPagoConfig({
  accessToken: useSandbox
    ? process.env.MERCADO_PAGO_SANDBOX_TOKEN
    : process.env.MERCADO_PAGO_ACCESS_TOKEN,
});

const paymentApi = new Payment(client);

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { paymentId } = req.query;

  if (!paymentId) {
    return res.status(400).json({ message: 'ID do pagamento não informado' });
  }

  try {
    const payment = await paymentApi.get({ id: paymentId });

    return res.status(200).json({
      paymentId,
      status: payment.status,
      updatedAt: payment.date_last_updated
    });
  } catch (error) {
    console.error('Erro ao buscar status do pagamento:', error);
    return res.status(500).json({ message: error.message || 'Erro ao buscar status do pagamento' });
  }
}