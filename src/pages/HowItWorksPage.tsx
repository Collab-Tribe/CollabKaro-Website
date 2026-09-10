import React from "react";
import HowItWorks from "../components/HowItWorks";

interface HowItWorksPageProps {
  forcedRole?: "creator" | "brand";
}

export default function HowItWorksPage({ forcedRole }: HowItWorksPageProps) {
  return (
    <main className="container detail-wrap" style={{ maxWidth: "1180px", margin: "0 auto", padding: "32px 20px 80px" }}>
      <HowItWorks forcedRole={forcedRole} />
    </main>
  );
}
