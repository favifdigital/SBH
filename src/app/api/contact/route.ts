import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    let data: Record<string, string> = {};
    const contentType = request.headers.get("content-type") || "";

    if (contentType.includes("application/json")) {
      data = await request.json();
    } else {
      const formData = await request.formData();
      formData.forEach((value, key) => {
        data[key] = value.toString();
      });
    }

    // Honeypot check
    if (data.website) {
      // Fake success for bots
      return NextResponse.json({ ok: true, message: "Inquiry received" });
    }

    const { name, email, phone, preferred_contact, reason, best_time, message, consent } = data;

    if (!name || !email || !consent) {
      return NextResponse.json(
        { ok: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // In production, send via email service or webhook
    console.log("New contact inquiry received:", {
      name,
      email,
      phone,
      preferred_contact,
      reason,
      best_time,
      message,
      submittedAt: new Date().toISOString()
    });

    return NextResponse.json({
      ok: true,
      message: "Thank you. Your inquiry was sent successfully."
    });
  } catch (error) {
    console.error("Error handling contact submission:", error);
    return NextResponse.json(
      { ok: false, message: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
