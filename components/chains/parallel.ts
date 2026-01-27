import dotenv from "dotenv";
dotenv.config();

import { PromptTemplate } from "@langchain/core/prompts";
import { RunnableParallel } from "@langchain/core/runnables";
import { initChatModel } from "langchain";

const model = await initChatModel("google-genai:gemini-2.5-flash-lite", {
  apiKey: process.env.GOOGLE_API_KEY_02,
});

// Pros prompt template
const prosPrompt = PromptTemplate.fromTemplate(
  "Give the advantages of the given mobile review {review}.",
);

// Cons prompt template
const consPrompt = PromptTemplate.fromTemplate(
  "Give the disadvantages of the given mobile review {review}.",
);

// Sentiment prompt template
const sentimentPrompt = PromptTemplate.fromTemplate(
  "Give the sentiment(negative,positive) of the given mobile review {review}.",
);

// Individual chains
const prosChain = prosPrompt.pipe(model);
const consChain = consPrompt.pipe(model);
const sentimentChain = sentimentPrompt.pipe(model);

// Parallel Chain
const parallelChain = RunnableParallel.from({
  pros: prosChain,
  cons: consChain,
  sentiment: sentimentChain,
});

const result = await parallelChain.invoke({
  review: `I’ve been using the POCO C71 for a bit now, and honestly, it’s one of the best phones I’ve found in this price range. For the money, you get 6GB RAM and 128GB storage, which makes everything run smoothly and lag free. I can switch between apps and play games without any lag, which is awesome for a budget phone.

The build quality is pretty solid too. It feels durable, and I’ve dropped it a few times, but it’s still in great shape!

As for connectivity, both Wi-Fi and Bluetooth work without any issues. No problems staying connected to my Wi-Fi or pairing with Bluetooth speakers.

The display is another win – the 120Hz refresh rate which increase the smoothness, and everything looks crisp.

And for the camera, it actually takes some nice photos, especially in good lighting. Nothing too fancy, but it’s definitely good enough for everyday use.

Overall, if you’re on a budget but still want a phone that works well and doesn’t feel cheap, I’d definitely recommend the POCO C71.
It’s a great deal for the price!`,
});

console.log("Pros:", result.pros.content);
console.log("Cons:", result.cons.content);
console.log("Sentiment:", result.sentiment.content);
