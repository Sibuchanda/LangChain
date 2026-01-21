import dotenv from "dotenv";
dotenv.config();

import pkg from "ml-distance/lib/similarities.js";
const { cosine } = pkg;
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
if (!GOOGLE_API_KEY) throw new Error("Google API key is not set");

const embeddings = new GoogleGenerativeAIEmbeddings({
  model: "text-embedding-004",
  apiKey: GOOGLE_API_KEY,
});

const docs: string[] = [
  "Mercury is the closest planet to the Sun and has extreme temperatures.",
  "Venus is the hottest planet and has a thick atmosphere full of carbon dioxide.",
  "Earth is the only planet known to support life and has liquid water.",
  "Mars is known as the Red Planet and may have supported life in the past.",
  "Jupiter is the largest planet and has a powerful magnetic field.",
];

const documentVectors = await embeddings.embedDocuments(docs);
const userQuery = "Which planet is called the Red Planet?";
const queryVector = await embeddings.embedQuery(userQuery);

let bestScore = -1;
let bestDocument: string | undefined;

for (let i = 0; i < documentVectors.length; i++) {
  const score = cosine(queryVector, documentVectors[i]);

  if (score > bestScore) {
    bestScore = score;
    bestDocument = docs[i];
  }
}

console.log("User Query:", userQuery);
console.log("Most Relevant Document:", bestDocument);
console.log("Cosine Similarity Score:", bestScore);
