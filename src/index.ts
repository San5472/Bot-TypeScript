import { Bot } from "./bot/bot.js";
import { iniciarConversacion } from "./transport/cli.js";
import {
    helpHandler,
    pingHandler,
    echoHandler
} from './handlers/commands.js'


const bot = new Bot();

bot.register( { name: "/help", descripcion: "Muestra ayuda", handler: helpHandler } )
bot.register( { name: "/ping", descripcion: "Ping al bot", handler: pingHandler } )
bot.register( {name: "/echo", descripcion: "Repite mensaje", handler: echoHandler } )

iniciarConversacion(bot);