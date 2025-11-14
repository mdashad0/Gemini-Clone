
import {GoogleGenerativeAI} from '@google/generative-ai';

const apiKey = "AIzaSyChOKyELi8ZDKIP9u_NBlR0hML_neH0i10";
const genAI = new GoogleGenerativeAI(apiKey);

async function runChat(prompt) {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });

  const chat = model.startChat({
    history: [],
  });

  const result = await chat.sendMessage(prompt);
  const response = result.response;
  console.log(response.text());
  return response.text();
};

export default runChat;
