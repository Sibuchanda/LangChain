import dotenv from "dotenv";
dotenv.config();

import { PromptTemplate } from "@langchain/core/prompts";
import { initChatModel } from "langchain";

const model = await initChatModel(
  "google-genai:gemini-2.5-flash-lite",
  {
    apiKey: process.env.GOOGLE_API_KEY_02,
  }
);

// Prompt
const prompt = PromptTemplate.fromTemplate("Give me the details of the given topic in 2 lines:\n{topic}");

// Simple Chain (Prompt → Model)
// Here, we are connecting (the prompt and the model). We are not send anything yet, we just createts the chain. Whenever the prompt gets real input, send the final prompt text to the model.
const simpleChain = prompt.pipe(model);

// Run the chain
const result = await simpleChain.invoke({
  topic: "Blockchain",
});

console.log(result.content);
