import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function GET() {
  try {
    console.log("--- Testing API Key: Listing models... ---");
    
    const models = await genAI.models.list(); // This is the new part
    
    console.log("--- MODELS AVAILABLE: ---");
    console.log(models);
    
    return NextResponse.json({
      message: "Check your server terminal. It should list all available models.",
      models: models,
    });

  } catch (error) {
    console.error("Error listing models:", error);
    return NextResponse.json(
      { error: "Failed to list models. Check terminal." },
      { status: 500 }
    );
  }
}