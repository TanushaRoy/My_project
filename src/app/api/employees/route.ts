
import empData from "@/lib/EmpDummyData";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json(empData);
    response.headers.set("Access-Control-Allow-Origin", "https://abs-w8nd.vercel.app/"); 
    response.headers.set("Access-Control-Allow-Methods", "GET");

    return response;
  } catch (error) {
    console.error("Error fetching employees:", error);
    return NextResponse.json(
      { error: "Failed to fetch employees" },
      { status: 500 }
    );
  }
}
