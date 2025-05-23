// app/api/contact/route.ts
import { NextResponse } from "next/server";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const data: ContactForm = await req.json();

    // You could store this in a database, send an email, etc.
    console.log("Received contact form:", data);

    return NextResponse.json(
      { message: "Contact form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error handling contact form:", error);
    return NextResponse.json(
      { message: "Failed to submit contact form" },
      { status: 500 }
    );
  }
}
