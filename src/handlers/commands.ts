import type { Handler } from '../types/index.js'

export const helpHandler: Handler = async (msg) => ({  // Comandos necesarios para poder usar el bot
    text: `Comandos disponibles:
    /help -> muestra esta ayuda
    /ping -> muestra que el bot responde
    /echo -> repite lo que escribas`
});

export const pingHandler: Handler = async (msg) => ({ // Prueba de velocidad del tiempo de entrega del mensaje y de la respuesta
    text: `Latencia estimada: ${Date.now() - msg.timestamp.getTime()}ms`
});

export const echoHandler: Handler = async(msg) => {
    const contenido = msg.text.replace("/echo", "").trim();
    return {text: contenido || "No se escribio nada despues del /echo" }
};