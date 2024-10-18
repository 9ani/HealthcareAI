import { Router } from 'express';
import userRouter from './user/user-router';
import gptRouter from './gpt/gpt-router';
import menuRouter from './menu/menu-router';
import chatbotRouter from './chatbot/chatbot-router';
const globalRouter = Router();

globalRouter.use(userRouter);
globalRouter.use(gptRouter);
globalRouter.use(menuRouter);
globalRouter.use(chatbotRouter);

export default globalRouter;
