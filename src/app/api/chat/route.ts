import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { sessionId, message, contactInfo, isAnonymous } = data;

    if (!message || !message.trim()) {
      return NextResponse.json({ ok: false, message: "Message cannot be empty" }, { status: 400 });
    }

    // In production, dispatch notification (SMS via Twilio, Webhook to Slack / EHR, or email alert)
    console.log("Anonymous Client Chat Message to SBH Team:", {
      sessionId,
      message,
      contactInfo: isAnonymous ? "Anonymous Client" : contactInfo,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      reply:
        "Thank you for reaching out to Swiss Behavioral Health. An admissions representative has been alerted and will respond shortly. You may also call us directly 24/7 at (656) 232-3504 for immediate support.",
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ ok: false, message: "Failed to send message" }, { status: 500 });
  }
}
