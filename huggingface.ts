import { HfInference } from '@huggingface/inference';

const hf = new HfInference(import.meta.env.VITE_HUGGINGFACE_API_KEY);

export const generateResponse = async (input: string): Promise<string> => {
  try {
    const response = await hf.textGeneration({
      model: 'microsoft/phi-2', // You can replace this with your fine-tuned model ID
      inputs: `You are a legal AI assistant trained on Indian laws. Provide accurate and helpful information about Indian laws and legal procedures. 
               Question: ${input}
               Answer:`,
      parameters: {
        max_new_tokens: 512,
        temperature: 0.7,
        top_p: 0.95,
        repetition_penalty: 1.15
      }
    });

    return response.generated_text;
  } catch (error) {
    console.error('Error generating response:', error);
    throw new Error('Failed to generate response. Please try again.');
  }
};