import { PDFLoader } from "@langchain/classic/document_loaders/fs/pdf";

const pdfPath = "./components/documentLoader/COCOMO.pdf";

const loader = new PDFLoader(pdfPath);
const docs = await loader.load();

console.log("Number of pages loaded:", docs.length);
console.log(docs[0]);
