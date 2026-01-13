import "dotenv/config";
import { HuggingFaceInference } from "@langchain/community/llms/hf";

const apiKey = process.env.HUGGINGFACEHUB_API_KEY;
if (!apiKey) throw new Error("Missing HF key");

const model = new HuggingFaceInference({
  model: "google/flan-t5-large",
  apiKey,
  temperature: 0
});

const res = await model.invoke("Capital of India?");
console.log(res);
