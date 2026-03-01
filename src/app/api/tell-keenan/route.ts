import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "keenanyang1027@gmail.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = (body.name ?? "").trim() || "Someone";
    const note = (body.note ?? "").trim() || "(no note)";

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email is not configured." },
        { status: 503 }
      );
    }

    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: TO_EMAIL,
      subject: "Someone told you to work harder",
      text: [
        "Someone who viewed your portfolio clicked “Tell Keenan” on the Trax case study.",
        "",
        "Name: " + name,
        "Note: " + note,
      ].join("\n"),
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
    console.error("tell-keenan API error:", e);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
