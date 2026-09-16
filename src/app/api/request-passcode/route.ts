import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "keenanyang1027@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const company = String(body.company ?? "").trim();
    const caseStudyTitle =
      String(body.caseStudyTitle ?? "").trim() || "Scotiabank Case Study";

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone number are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email is not configured." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const who = company ? `${name} from ${company}` : name;
    const text = `Hey Keenan, ${who} wants to access your ${caseStudyTitle}. You can send them the passcode at ${phone}`;

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: TO_EMAIL,
      subject: `Passcode request: ${caseStudyTitle}`,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("request-passcode API error:", e);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
