import { Rcon } from "rcon-client";

/**
 * Handler for command in minecraft
 * @param {Request} req 
 * @param {Response} res 
 */
export default async function handler(req, res) {
  
    const { command } = req.body;

    if(!command || typeof command !== 'string') 
        return res.status(400).send('Comando inválido');

    try {
        const rcon = await Rcon.connect({
            host: 'br-enx-1.enxadahost.com',
            port: 10296,
            password: 'SenhaSegura123'
        });

        const response = await rcon.send(command);
        await rcon.end();

        res.status(200).send({ response });
    } catch (error) {
        res.status(500).send('Erro ao se conectar no RCON')
    }
}
