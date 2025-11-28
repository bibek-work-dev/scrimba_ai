// import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain about evolution",
  });

  console.log("response", response);
  console.log("response.hora", response.text);
  console.log("ACTUAL TEXT:", response.text === undefined);
}

main();

// const genAI = new GoogleGenerativeAI("AIzaSyA8v3M6TxvXepoUtk-JHwNcsReO1h1AONc");
