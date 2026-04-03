import readline  from 'node:readline'
import { Bot } from '../bot/bot.js'
import { timeStamp } from 'node:console';

export function iniciarConversacion(bot: Bot): void {  // Escribir por la consola
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Yo >",
    })

    console.log("Chat iniciado con el bot escribe /help para mirar la lista de los comandos");
    rl.prompt();

    rl.on("line", async (input) => { // Escucha los eventos que se generan en la consola
        const text = input.trim();
        if (!text) {rl.prompt(); return }

        const message = {
            userId: "user-1",
            text, 
            timestamp: new Date(),
        }; 

        const response = await bot.process(message);
        console.log(`bot > ${response.text}\n`);
        rl.prompt();
    });
}