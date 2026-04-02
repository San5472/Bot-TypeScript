export interface IMessage {
    userId: string
    text: string
    timestamp: Date
}

export interface IResponse {
    text: string
}

export type Handler = (message: IMessage) => Promise<IResponse>;

export interface IComandos{
    name: string
    descripcion: string
    handler: Handler
}