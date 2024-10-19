import { Request, Response } from "express";
import ChatbotService from "./chatbot-service";

class ChatbotController {
  private chatbotService: ChatbotService;

  constructor() {
    this.chatbotService = new ChatbotService();
    this.handleMessage = this.handleMessage.bind(this);
  }

  async handleMessage(req: Request, res: Response): Promise<void> {
    const { input, userId } = req.body;
    try {
      // Fetch user data by userId
      const userJson = await this.chatbotService.getUserJsonById(userId);
      if (!userJson) {
        res.status(404).json({ error: "User not found" });
        return;
      }

      // Provide a modified system prompt
      const systemPrompt = `You are an expert in nutrition, diet, sports science, and fitness coaching. Use the user data provided below to give tailored advice:

User Info:
- ID: {userId}
- Age: {age}
- Weight: {weight} kg
- Height: {height} cm
- Gender: {gender}
- Allergies: {allergies}
- Preferences: {dietaryPreferences}
- Goals: {goals}
- Activity Level: {physicalActivity}
- Goal Timeframe: {goalCompletionTime}

Focus on questions about nutrition, diet, fitness, and related health topics. If a query is outside these areas, remind the user to ask relevant questions. Always provide responses considering the user's personal data and health objectives. Strongly shorten the message, maximum 40 words. If the user's language is Russian, answer ONLY in Russian. Else, if user writes in English, answer in ENGLISH.`;

      // Send message, userJson, and systemPrompt to chatbot service
      const reply = await this.chatbotService.getReply({
        input,
        userJson,
        systemPrompt,
      });
      res.json({ reply });
    } catch (error) {
      console.error("Error handling message:", error);
      res.status(500).json({ error: "Failed to handle message" });
    }
  }
}

export default ChatbotController;
