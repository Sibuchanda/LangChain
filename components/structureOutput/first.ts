import dotenv from "dotenv";
dotenv.config();

import { z } from "zod";
import { initChatModel } from "langchain";

const GEMINI_KEY = process.env.GOOGLE_API_KEY;

// define schema
const ContactSchema = z.object({
  name: z.string().describe("Full name of the person"),
  email: z.string().email().describe("Email address"),
  phone: z.string().describe("Phone number"),
});


const baseModel = await initChatModel(
  "google-genai:gemini-2.5-flash-lite",
  {
    apiKey: GEMINI_KEY,
    temperature: 0,
  }
);

// Attach structured output
const structuredModel = baseModel.withStructuredOutput(ContactSchema);

const input = "Extract contact info from: John Doe, john@example.com, (555) 123-4567";
const response = await structuredModel.invoke(input);

console.log(response);
