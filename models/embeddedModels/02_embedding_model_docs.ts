import dotenv from 'dotenv';
dotenv.config();
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
const GOOGLE_API_KEY=process.env.GOOGLE_API_KEY;
if(!GOOGLE_API_KEY) throw new Error("Google API key is not set");


const embeddings = new GoogleGenerativeAIEmbeddings({
  model: "text-embedding-004",
  apiKey: GOOGLE_API_KEY,
 // For Gemini dimention can't be set manually. By default dimention is : 768
});

const docs = [
    "Kolkata is the capital of West Bengal",
    "Delhi is the capital of India",
    "Banglore is the capital of Karnataka",
]
const res = await embeddings.embedDocuments(docs);
console.log(res);
console.log("Total vector length is : ", res.length);
