import mongoose from 'mongoose';

interface MessageInterface {
    idChat: string;
    idRicevente: string;
    idMittente: string;
    type: string;
    content: string;
}

// class Message {
//     idChat: string;
//     idRicevente: string;
//     idMittente: string;
//     type: string;
//     content: string;
//     timestamp: Date;

//     constructor(idChat: string, idRicevente: string, idMittente: string, type: string, content: string) {
//         this.idChat = idChat;
//         this.idRicevente = idRicevente;
//         this.idMittente = idMittente;
//         this.type = type;
//         this.content = content;
//         this.timestamp = new Date();
//     }
// }


interface ChatInterface {
    idChat: string;
    idUtente1: string;
    idUtente2: string;
    messaggi: MessageInterface[];
}

const messageSchema = new mongoose.Schema({
    type: { type: String, enum: ['text', 'scambio'], required: true },
    payload: { type: String, required: true },
}, { timestamps: true });

const chatSchema = new mongoose.Schema({
    idAccordo: { type: String, required: true },
    idUtente1: { type: String, required: true }, // aggiunti per controllare che il token corrsiponda
    idUtente2: { type: String, required: true }, // corrispondono al campo _id del documento utente
    messaggi: [messageSchema] 
});

const pendingListSchema = new mongoose.Schema({
    idUtente: { type: String, required: true },
    messaggi: {type: [String], required: true }
},
    { timestamps: true });


const Message = mongoose.model('Message', messageSchema);
const Chat = mongoose.model('Chat', chatSchema);
const PendingList = mongoose.model('PendingList', pendingListSchema);


export { Message, MessageInterface, ChatInterface, Chat, PendingList };