import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const contact = {
      name,
      email,
      message: message || "",
      timestamp: new Date().toISOString(),
    };

    const filePath = path.join(process.cwd(), "contacts.json");

    let contacts = [];
    try {
      const data = await fs.readFile(filePath, "utf-8");
      contacts = JSON.parse(data);
    } catch {
      // File doesn't exist yet
    }

    contacts.push(contact);
    await fs.writeFile(filePath, JSON.stringify(contacts, null, 2));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
