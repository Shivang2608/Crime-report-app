import { NextResponse } from "next/server";
// 1. Correct Import: We have REMOVED 'Part'
import { GoogleGenAI } from "@google/genai";

// Correct Initialization (no apiVersion, defaults to v1beta)
const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function POST(request: Request) {
  try {
    const { image } = await request.json();
    const base64Data = image.split(",")[1];

    const prompt = `Analyze this emergency situation image and respond in this exact format without any asterisks or bullet points:
TITLE: Write a clear, brief title
TYPE: Choose one (Theft, Fire Outbreak, Medical Emergency, Natural Disaster, Violence, or Other)
DESCRIPTION: Write a clear, concise description`;

    // 2. We REMOVED the ': Part' type. TypeScript will figure it out.
    const imagePart = {
      inlineData: {
        data: base64Data,
        mimeType: "image/jpeg",
      },
    };

    // Correct Model Call (using the model from your list)
    const result = await genAI.models.generateContent({
      model: "gemini-2.5-flash", 
      contents: [{ parts: [{ text: prompt }, imagePart] }],
    });

    // Correct Text Access
    const text = result.candidates?.[0]?.content?.parts?.[0]?.text || "";

    // This part is the same
    const titleMatch = text.match(/TITLE:\s*(.+)/);
    const typeMatch = text.match(/TYPE:\s*(.+)/);
    const descMatch = text.match(/DESCRIPTION:\s*(.+)/);

    return NextResponse.json({
      title: titleMatch?.[1]?.trim() || "",
      reportType: typeMatch?.[1]?.trim() || "",
      description: descMatch?.[1]?.trim() || "",
    });
  } catch (error) {
    console.error("Image analysis error:", error);
    return NextResponse.json(
      { error: "Failed to analyze image" },
      { status: 500 }
    );
  }
}