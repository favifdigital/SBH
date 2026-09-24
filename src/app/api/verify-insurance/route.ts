import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const {
      patientName,
      dob,
      phone,
      email,
      insuranceProvider,
      memberId,
      groupNumber,
      subscriberName,
      relationship,
      careLevel,
      notes,
      consent,
    } = data;

    if (!patientName || !phone || !email || !insuranceProvider || !memberId || !consent) {
      return NextResponse.json(
        { ok: false, message: "Please complete all required verification fields." },
        { status: 400 }
      );
    }

    // In production, encrypt payload at rest and send to HIPAA-compliant intake endpoint
    console.log("Secure Insurance Verification Received:", {
      patientName,
      dob,
      phone,
      email,
      insuranceProvider,
      memberId,
      groupNumber,
      subscriberName,
      relationship,
      careLevel,
      notes,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message: "Your insurance information has been securely submitted. Our admissions team will review your benefits and contact you shortly.",
    });
  } catch (error) {
    console.error("Insurance verification error:", error);
    return NextResponse.json(
      { ok: false, message: "An error occurred. Please contact Admissions directly at (656) 232-3504." },
      { status: 500 }
    );
  }
}
