import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function analyzeResume(resumeData) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("Missing Gemini API key");
  }

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `Analyze this resume data and provide feedback on:
  1. Overall strength and weaknesses
  2. ATS optimization suggestions
  3. Content improvement recommendations
  
  Resume Data:
  ${JSON.stringify(resumeData, null, 2)}`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error analyzing resume:", error);
    return "Error analyzing resume. Please try again.";
  }
}

export async function getSuggestions(section, currentContent) {
  if (!process.env.GEMINI_API_KEY) {
    throw new Error("Missing Gemini API key");
  }

  if (!currentContent || currentContent.trim() === '') {
    return "Please write something first to get suggestions for improvement.";
  }

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `You are a friendly resume writing assistant. Look at this ${section} content and suggest 2 slightly improved versions. 
  Keep the same meaning and information, but make it flow better. Use natural, conversational language - no complex jargon.
  Make it sound like a real person wrote it.

  Important guidelines:
  - Keep the same key points and achievements
  - Use simple, clear language
  - Make it sound natural and conversational
  - Keep a similar length
  - Don't add new information
  
  Current content:
  ${currentContent}

  Format your response as:
  Option 1:
  [first natural improvement]

  Option 2:
  [second natural improvement]`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error getting suggestions:", error);
    return "Error generating suggestions. Please try again.";
  }
} 