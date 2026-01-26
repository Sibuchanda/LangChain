import dotenv from "dotenv";
dotenv.config();

import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableSequence } from "@langchain/core/runnables";
import { initChatModel } from "langchain";

const model = await initChatModel(
  "google-genai:gemini-2.5-flash-lite",
  {
    apiKey: process.env.GOOGLE_API_KEY_02,
  }
);

// Prompt 1: Topic → Definition
const definitionPrompt = PromptTemplate.fromTemplate("Explain {topic} in one simple line");

// Prompt 2: Definition → Example
const examplePrompt = PromptTemplate.fromTemplate(
  "Give one simple real-life example for this definition:\n{definition}"
);


// Sequential Chain
const sequentialChain = RunnableSequence.from([definitionPrompt, model, (output) => ({    definition: output.content }),
  examplePrompt,
  model,
  (output) => output.content,
]);

// Run the chain
const result = await sequentialChain.invoke({topic: "Blockchain",});

console.log(result);
