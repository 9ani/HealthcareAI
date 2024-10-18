import express from 'express';
import ChatbotController from './chatbot-controller';

const router = express.Router();
const chatbotController = new ChatbotController();

router.post('/chatbot', chatbotController.handleMessage);

export default router;