"use client";

import { useState, useEffect } from "react";
import VerifyInsuranceModal from "./VerifyInsuranceModal";
import ChatWidget from "./ChatWidget";

export default function GlobalModals() {
  const [verifyOpen, setVerifyOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setVerifyOpen(true);
    window.addEventListener("open-verify-modal", handleOpen);
    return () => window.removeEventListener("open-verify-modal", handleOpen);
  }, []);

  return (
    <>
      <VerifyInsuranceModal isOpen={verifyOpen} onClose={() => setVerifyOpen(false)} />
      <ChatWidget />
    </>
  );
}
