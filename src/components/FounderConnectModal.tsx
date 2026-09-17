import React, { useState, useEffect } from "react";
import {
  X,
  Sparkles,
  Calendar,
  Mail,
  Check,
  Copy,
  ExternalLink,
  Github,
  Linkedin,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export interface FounderConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  intent?: "brand" | "creator" | "demo" | "general";
}

export default function FounderConnectModal({
  isOpen,
  onClose,
  intent = "demo",
}: FounderConnectModalProps) {
  const [copied, setCopied] = useState(false);
  const founderName = "Harshit Agarwal";
  const founderRole = "AI Product Manager & 0-to-1 Systems Builder";
  const founderEmail = "agarwal.harshit97@gmail.com";
  const githubUser = "https://github.com/1997agarwal";
  const linkedinUrl = "https://www.linkedin.com/in/1997agarwal";
  const xUrl = "https://x.com/1997agarwal";

  // Close on Escape key press & prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(founderEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getSubject = () => {
    if (intent === "brand") {
      return "[CollabKaro Demo] Brand Partnership & Campaign Walkthrough";
    }
    if (intent === "creator") {
      return "[CollabKaro Demo] Creator Onboarding & Media Kit Walkthrough";
    }
    return "[CollabKaro Demo] Founder Walkthrough Request";
  };

  const mailtoSubject = encodeURIComponent(getSubject());
  const mailtoBody = encodeURIComponent(
    `Hi Harshit,\n\nI was exploring the CollabKaro platform showcase and would love to schedule a 1-on-1 walkthrough / discuss collaboration opportunities for ${intent === "brand" ? "our brand" : intent === "creator" ? "creator partnerships" : "our team"}.\n\nBest,\n`
  );

  const mailtoLink = `mailto:${founderEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        boxSizing: "border-box",
      }}
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(15, 23, 42, 0.6)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          transition: "opacity 0.2s ease",
        }}
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        style={{
          position: "relative",
          backgroundColor: "#FFFFFF",
          borderRadius: "24px",
          boxShadow:
            "0 25px 50px -12px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(226, 232, 240, 0.9)",
          width: "100%",
          maxWidth: "560px",
          maxHeight: "92vh",
          overflowY: "auto",
          zIndex: 10000,
          padding: "28px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          fontFamily:
            'Plus Jakarta Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          color: "#0F172A",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "4px 12px",
                borderRadius: "9999px",
                backgroundColor: "#EEF2FF",
                border: "1px solid rgba(199, 210, 254, 0.9)",
                fontSize: "11px",
                fontWeight: 700,
                color: "#4338CA",
                width: "fit-content",
              }}
            >
              <Sparkles style={{ width: "14px", height: "14px", color: "#4F46E5" }} />
              <span>Private Preview • Founder Showcase</span>
            </div>
            <h2
              style={{
                fontSize: "1.5rem",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                color: "#0F172A",
                margin: 0,
                lineHeight: 1.25,
              }}
            >
              Book Creator &amp; Brand Walkthrough
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              padding: "8px",
              borderRadius: "12px",
              border: "none",
              backgroundColor: "transparent",
              color: "#94A3B8",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.15s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#F1F5F9";
              e.currentTarget.style.color = "#334155";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#94A3B8";
            }}
          >
            <X style={{ width: "20px", height: "20px" }} />
          </button>
        </div>

        {/* Narrative */}
        <p
          style={{
            fontSize: "14px",
            lineHeight: "1.6",
            color: "#475569",
            margin: 0,
          }}
        >
          CollabKaro is currently in <strong>private preview</strong>. We are
          hosting 1-on-1 walkthroughs with brand leaders, creators, agency
          directors, and prospective partners to demonstrate our milestone
          escrow engine, GST/TDS compliant payouts, and AI campaign matchmaking.
        </p>

        {/* Action Blocks */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Option 1: Book / Mail Walkthrough */}
          <div
            style={{
              padding: "16px 18px",
              borderRadius: "18px",
              background:
                "linear-gradient(135deg, rgba(238, 242, 255, 0.8) 0%, rgba(245, 243, 255, 0.6) 100%)",
              border: "1px solid rgba(224, 231, 255, 0.9)",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "14px",
                fontWeight: 800,
                color: "#1E1B4B",
              }}
            >
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "10px",
                  backgroundColor: "#4F46E5",
                  color: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 4px rgba(79, 70, 229, 0.2)",
                  flexShrink: 0,
                }}
              >
                <Calendar style={{ width: "16px", height: "16px" }} />
              </div>
              <span>1. Schedule a 1-on-1 Founder Demo</span>
            </div>
            <p
              style={{
                fontSize: "12.5px",
                color: "#475569",
                lineHeight: "1.5",
                margin: 0,
                paddingLeft: "40px",
              }}
            >
              Experience live creator discovery, automated milestone escrow, and
              instant UPI payouts tailored to your campaigns.
            </p>
            <div style={{ paddingLeft: "40px", paddingTop: "4px" }}>
              <a
                href={mailtoLink}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#4F46E5",
                  color: "#FFFFFF",
                  fontSize: "12.5px",
                  fontWeight: 700,
                  padding: "10px 18px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  boxShadow: "0 4px 12px rgba(79, 70, 229, 0.25)",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#4338CA";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#4F46E5";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <Mail style={{ width: "14px", height: "14px" }} />
                <span>Request Walkthrough Slot</span>
                <ArrowRight style={{ width: "14px", height: "14px" }} />
              </a>
            </div>
          </div>

          {/* Option 2: Direct Contact / Copy Email */}
          <div
            style={{
              padding: "16px 18px",
              borderRadius: "18px",
              backgroundColor: "#F8FAFC",
              border: "1px solid #E2E8F0",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "10px",
                    backgroundColor: "#0F172A",
                    color: "#FFFFFF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "12px",
                    fontWeight: 900,
                    letterSpacing: "0.05em",
                    flexShrink: 0,
                  }}
                >
                  HA
                </div>
                <div>
                  <span
                    style={{
                      fontSize: "13.5px",
                      fontWeight: 800,
                      color: "#0F172A",
                      display: "block",
                    }}
                  >
                    {founderName}
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      color: "#64748B",
                      fontWeight: 600,
                      display: "block",
                    }}
                  >
                    {founderRole}
                  </span>
                </div>
              </div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "#15803D",
                  backgroundColor: "#DCFCE7",
                  border: "1px solid #BBF7D0",
                  padding: "3px 10px",
                  borderRadius: "9999px",
                  whiteSpace: "nowrap",
                }}
              >
                Active &amp; Fast Response
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px",
                backgroundColor: "#FFFFFF",
                padding: "8px 12px",
                borderRadius: "12px",
                border: "1px solid #E2E8F0",
              }}
            >
              <span
                style={{
                  fontSize: "12.5px",
                  fontFamily: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
                  fontWeight: 600,
                  color: "#334155",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  userSelect: "all",
                }}
              >
                {founderEmail}
              </span>
              <button
                onClick={handleCopyEmail}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#334155",
                  padding: "6px 12px",
                  borderRadius: "8px",
                  border: "none",
                  backgroundColor: "#F1F5F9",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#E2E8F0";
                  e.currentTarget.style.color = "#4F46E5";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#F1F5F9";
                  e.currentTarget.style.color = "#334155";
                }}
              >
                {copied ? (
                  <>
                    <Check style={{ width: "14px", height: "14px", color: "#16A34A" }} />
                    <span style={{ color: "#16A34A", fontWeight: 800 }}>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy style={{ width: "14px", height: "14px", color: "#64748B" }} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Option 3: Verified Founder Profiles */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", paddingTop: "2px" }}>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "#94A3B8",
                paddingLeft: "4px",
              }}
            >
              Founder &amp; Platform Profiles
            </span>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "10px",
              }}
            >
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  padding: "10px 12px",
                  borderRadius: "12px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  color: "#1E293B",
                  fontSize: "12px",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#F8FAFC";
                  e.currentTarget.style.borderColor = "#CBD5E1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFFFFF";
                  e.currentTarget.style.borderColor = "#E2E8F0";
                }}
              >
                <Linkedin style={{ width: "14px", height: "14px", color: "#0A66C2" }} />
                <span>LinkedIn</span>
                <ExternalLink style={{ width: "11px", height: "11px", color: "#94A3B8" }} />
              </a>

              <a
                href={githubUser}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  padding: "10px 12px",
                  borderRadius: "12px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  color: "#1E293B",
                  fontSize: "12px",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#F8FAFC";
                  e.currentTarget.style.borderColor = "#CBD5E1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFFFFF";
                  e.currentTarget.style.borderColor = "#E2E8F0";
                }}
              >
                <Github style={{ width: "14px", height: "14px", color: "#0F172A" }} />
                <span>GitHub</span>
                <ExternalLink style={{ width: "11px", height: "11px", color: "#94A3B8" }} />
              </a>

              <a
                href={xUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  padding: "10px 12px",
                  borderRadius: "12px",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  color: "#1E293B",
                  fontSize: "12px",
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#F8FAFC";
                  e.currentTarget.style.borderColor = "#CBD5E1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFFFFF";
                  e.currentTarget.style.borderColor = "#E2E8F0";
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 900,
                    color: "#0F172A",
                    lineHeight: 1,
                  }}
                >
                  𝕏
                </span>
                <span>Twitter</span>
                <ExternalLink style={{ width: "11px", height: "11px", color: "#94A3B8" }} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Guarantee */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            paddingTop: "6px",
            fontSize: "11.5px",
            color: "#64748B",
            fontWeight: 600,
          }}
        >
          <ShieldCheck style={{ width: "14px", height: "14px", color: "#16A34A" }} />
          <span>Collab-Tribe Sovereign Escrow &amp; Dual-Boundary Verified</span>
        </div>
      </div>
    </div>
  );
}
