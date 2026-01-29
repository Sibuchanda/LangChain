declare module "@langchain/classic/document_loaders/fs/pdf" {
  import { BaseDocumentLoader } from "@langchain/core/document_loaders";
  import { Document } from "@langchain/core/documents";

  export class PDFLoader extends BaseDocumentLoader {
    constructor(
      filePath: string,
      options?: {
        splitPages?: boolean;
        pdfjs?: any;
      }
    );
    load(): Promise<Document[]>;
  }
}
