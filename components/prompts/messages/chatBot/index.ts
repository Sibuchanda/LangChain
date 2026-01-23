import dotenv from 'dotenv';
dotenv.config();
import readlineSync from 'readline-sync'

import { AIMessage, BaseMessage, HumanMessage, initChatModel, SystemMessage } from "langchain";

const GEMENI_KEY=process.env.GOOGLE_API_KEY;
//Chat history
let chat_history: BaseMessage[]=[
    new SystemMessage("You are a DSA instructor. Answer only DSA related questions in a short and to the point manner. IF the question is short type then give short answer or the question is long type then answer long. If a user ask not realated to DSA then reply. I can't asnwer question that are not realted to DSA."),
]
const model = await initChatModel("google-genai:gemini-2.5-flash-lite");

while(true){
    const question = readlineSync.question("User : ");
    if(question==='exit' || question==='quit') break;
    chat_history.push(new HumanMessage(question));
    const res = await model.invoke(chat_history);

    console.log("AI : ", res.content);
    chat_history.push(new AIMessage(res.content));
}

