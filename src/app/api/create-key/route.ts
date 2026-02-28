import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  try {
    const { password } = await req.json();

    if (!password) {
      return NextResponse.json(
        { message: "Password required" },
        { status: 400 }
      );
    }

    // Generate secure authorization key
    const authKey = uuidv4();

    const filePath = path.join(process.cwd(), "keys.json");

    let existingKeys = [];

    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf-8");
      existingKeys = JSON.parse(fileData);
    }

    existingKeys.push({
      password,
      authKey,
      createdAt: new Date().toISOString(),
    });

    fs.writeFileSync(filePath, JSON.stringify(existingKeys, null, 2));

    return NextResponse.json({
      message: "Authorization key created",
      authKey,
    });

  } catch (error) {
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}