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

// Explanation chain
const explanationPrompt = PromptTemplate.fromTemplate(
  "Explain the topic in simple terms within 2 lines:\n{input}"
);
const explanationChain = explanationPrompt.pipe(model);

// Example chain
const examplePrompt = PromptTemplate.fromTemplate(
  "Give a simple real-life example of:\n{input}"
);
const exampleChain = examplePrompt.pipe(model);

// Conditional execution
async function conditionalChain(input: string) {
  if (input.toLowerCase().includes("example")) {
    return exampleChain.invoke({ input });
  } else {
    return explanationChain.invoke({ input });
  }
}

const result = await conditionalChain("explain blockchain");
console.log(result.content);
