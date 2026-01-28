// types/langchain-community.d.ts

declare module "@langchain/community/document_loaders/fs/text.js" {
  import { BaseDocumentLoader } from "@langchain/core/document_loaders";
  import { Document } from "@langchain/core/documents";

  export class TextLoader extends BaseDocumentLoader {
    constructor(filePath: string);
    load(): Promise<Document[]>;
  }
}

declare module "@langchain/community/chat_models/hf" {
  import { BaseChatModel } from "@langchain/core/language_models/chat_models";

  export class ChatHuggingFace extends BaseChatModel {
    constructor(fields: any);
  }
}
