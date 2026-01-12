import dotenv from 'dotenv';
dotenv.config();

import { initChatModel } from "langchain";
const OPENAI_KEY=process.env.OPENAI_API_KEY;

const model = await initChatModel("gpt-5-nano", { temperature: 0.7, timeout: 30, max_tokens: 1000 });
const response = await model.invoke("Capital of India?");

console.log(response);