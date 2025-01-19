
import empData from "@/lib/EmpDummyData";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json(empData);
    response.headers.set("Access-Control-Allow-Origin", "http://192.168.0.150:3002"); 
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
