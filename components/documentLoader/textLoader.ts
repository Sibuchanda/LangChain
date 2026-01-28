import { TextLoader } from "@langchain/classic/document_loaders/fs/text";

const loader = new TextLoader("./components/documentLoader/notes.txt");
const docs = await loader.load();

console.log(docs[0]);
