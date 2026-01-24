import 'dotenv/config'
import { ChatHuggingFace } from '@langchain/community/chat_models/hf'
import { HumanMessage } from '@langchain/core/messages'

const apiKey = process.env.HUGGINGFACEHUB_API_TOKEN
if (!apiKey) throw new Error('HF token missing')

const model = new ChatHuggingFace({
  model: 'mistralai/Mistral-7B-Instruct-v0.2',
  temperature: 0.7,
  maxTokens: 200,
  apiKey,
})

async function run() {
  const response = await model.invoke([
    new HumanMessage('Explain LangChain in simple words'),
  ])

  console.log(response.content)
}

run()
