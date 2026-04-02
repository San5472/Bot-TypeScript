import {IComandos, IMessage, IResponse } from '../types/index.js'

export class Bot {
    private commands = new Map<string, IComandos>();

    register(commando: IComandos): void {
        this.commands.set(commando.name, commando)
    }

    async process(message: IMessage): Promise<IResponse> {
        const [commandName] = message.text.trim().split(" "); 
        const comando = this.commands.get(commandName)

        if (!comando){
            return { text: `Comando desconocido: "${commandName}". Escribe /help.` };
        } else {
            return comando.handler(message);
        }
    }
}