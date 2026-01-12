import dotenv from 'dotenv';
dotenv.config();

import { initChatModel } from "langchain";
const GEMENI_KEY=process.env.GOOGLE_API_KEY;

const model = await initChatModel("google-genai:gemini-2.5-flash-lite");
const response = await model.invoke("Capital of India?");

console.log(response.content);