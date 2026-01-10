# Models in LangChain

In LangChain, **models** are components that process input data and generate intelligent output using artificial intelligence.  
LangChain does not build models itself. Instead, it provides a standardized interface to interact with external AI models such as **chat models** and **embedding models**.

## Types of Models

## 1. Chat Models

Chat models are conversational language models designed to handle dialogue-based interactions.  
They work with structured messages (system, user, assistant) instead of plain text.

### Characteristics
- Accept a sequence of messages as input  
- Produce conversational responses  
- Maintain context across multiple interactions  
- Designed for interactive applications  

### Common Use Cases
- Chatbots  
- Virtual assistants  
- Customer support systems  
- Interview and tutoring applications  

### Types of Chat Models in LangChain

#### OpenAI Chat Models
- Examples: GPT-3.5, GPT-4  
- Provider: OpenAI  
- Used for general-purpose conversational AI  

#### Anthropic Chat Models
- Example: Claude  
- Provider: Anthropic  
- Focused on safer and more controlled responses  

#### Google Chat Models
- Example: Gemini Chat  
- Provider: Google  
- Optimized for reasoning and dialogue-based tasks  


## 2. Embedding Models

Embedding models convert text into numerical vectors that represent the semantic meaning of the text.  
These vectors allow systems to understand similarity and context instead of exact word matching.

### Characteristics
- Take text as input  
- Produce numerical vectors as output  
- Capture semantic meaning of text  
- Enable similarity and relevance comparison  

### Common Use Cases
- Semantic search  
- Document similarity matching  
- Recommendation systems  
- Retrieval-Augmented Generation (RAG)  

### Types of Embedding Models in LangChain

#### OpenAI Embedding Models
- Example: text-embedding-ada-002  
- Provider: OpenAI  
- High-quality embeddings for general-purpose text  

#### Hugging Face Embedding Models
- Example: Sentence Transformers  
- Provider: Hugging Face  
- Open-source models with local hosting support  

#### Cohere Embedding Models
- Provider: Cohere  
- Optimized for large-scale and enterprise semantic search  
