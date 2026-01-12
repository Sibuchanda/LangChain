import dotenv from 'dotenv';
dotenv.config();

import { initChatModel } from "langchain";
const OPENAI_KEY=process.env.OPENAI_API_KEY;

const model = await initChatModel("gpt-5-nano");
const response = await model.invoke("Who is the CEO of Google?");

console.log(response);