// pages/api/deliver.js
import { Rcon } from "rcon-client";

async function sendDiscordNotification({ player, productName, amount = 1 }) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) return;

  const embed = {
    title: "🛒 Nova compra no SMP Raiz!",
    color: 0x00FF00,
    fields: [
      { name: "Jogador", value: `\`${player}\``, inline: true },
      { name: "Produto", value: `\`${productName}\``, inline: true },
      { name: "Valor", value: `R$ ${amount.toFixed(2)}`, inline: true },
    ],
    timestamp: new Date().toISOString(),
    footer: { text: "SMP Raiz - Minecraft de verdade!" }
  };

  await fetch(webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ embeds: [embed] }),
  });
}

/**
 * Gera o comando de acordo com o produto comprado
 */
function buildCommand({ player, product, extra }) {
  switch (product) {
    case 'home':
      return `smpstore home ${player}`;
    case 'apoiador':
      return `smpstore apoiador ${player}`;
    case 'vip1':
      return `smpstore vip1 ${player}`;
    default:
      return `msg ${player} Obrigado pela compra no SMP Raiz!`;
  }
}

/**
 * Entrega o item no servidor via RCON
 * @param {Request} req 
 * @param {Response} res 
 */
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { player, product, productName, extra } = req.body;

  if (!player || !product) {
    return res.status(400).json({ message: 'Dados insuficientes para entrega' });
  }

  const command = buildCommand({ player, product, extra });

  try {
    const rcon = await Rcon.connect({
      host: 'br-enx-1.enxadahost.com',
      port: 10296,
      password: 'SenhaSegura123',
    });

    const response = await rcon.send(command);
    await rcon.end();

    // Envia aviso para o Discord
    await sendDiscordNotification({ player, productName, amount: req.body.amount || 1 });

    return res.status(200).json({ success: true, response });
  } catch (err) {
    console.error('Erro RCON:', err);
    return res.status(500).json({ message: 'Erro ao conectar no servidor' });
  }
}