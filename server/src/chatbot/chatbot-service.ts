import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import { UserJson, UserModel } from "../gpt/gpt-types";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  throw new Error("GEMINI_API_KEY is not defined in the environment variables");
}
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

class ChatbotService {
    async getReply({
      input,
      userJson,
      systemPrompt,
    }: {
      input: string;
      userJson: UserJson;
      systemPrompt: string;
    }): Promise<string> {
      try {
        const userPrompt = JSON.stringify(userJson);
        const fullPrompt = `${systemPrompt}\nUser Data: ${userPrompt}\nMessage: ${input}`;
  
        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        const text = await response.text();
        return text;
      } catch (error) {
        console.error("Error generating chatbot reply:", error);
        throw new Error("Failed to generate reply");
      }
    }
  
    // Change the access modifier to public
    public async getUserJsonById(userID: string): Promise<UserJson | null> {
      try {
        const userData: any = await UserModel.findOne({ userID }).lean();
        if (!userData) return null;
  
        return userData;
      } catch (error) {
        console.error("Error fetching userJson:", error);
        return null;
      }
    }
  }
  

export default ChatbotService;
