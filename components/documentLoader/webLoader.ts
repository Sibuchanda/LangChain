import {
  PlaywrightWebBaseLoader,
  Page,
  Browser,
} from "@langchain/community/document_loaders/web/playwright";

const url = "https://www.geeksforgeeks.org/blogs/top-tech-blogs-for-latest-tech-updates/";
const loader = new PlaywrightWebBaseLoader(url);
const docs = await loader.load();

if (docs.length === 0) {
  throw new Error("No documents were loaded");
}

const extractedContents = docs[0]?.pageContent;
console.log(extractedContents);
