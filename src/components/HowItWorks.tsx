import React, { useState } from "react";
import {
  Briefcase,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
  Layers,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Award,
  Users,
  Building2,
  FileCheck,
  Send,
  Lock,
} from "lucide-react";
import { appUrl } from "../config";

type Persona = "brands" | "creators";

interface HowItWorksProps {
  forcedRole?: "creator" | "brand";
}

export default function HowItWorks({ forcedRole }: HowItWorksProps) {
  const isStrictCreator = forcedRole === "creator";
  const isStrictBrand = forcedRole === "brand";

  const [interactivePersona, setInteractivePersona] = useState<Persona>("creators");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const persona: Persona = isStrictCreator
    ? "creators"
    : isStrictBrand
    ? "brands"
    : interactivePersona;

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const brandSteps = [
    {
      num: "01",
      icon: Briefcase,
      title: "Post a Quantitative Brief",
      tag: "5-Minute Setup",
      description:
        "Define your campaign objectives, target follower tier (Nano, Micro, Mid, Macro), minimum engagement rate, and exact deliverable count (e.g. 2 IG Reels + 1 Story).",
      highlight: "Guaranteed deliverable checklist & usage rights upfront",
      color: "#2563EB",
      bgColor: "#EFF6FF",
    },
    {
      num: "02",
      icon: Sparkles,
      title: "Get Qualified & Scored Pitches",
      tag: "Explainable AI Match",
      description:
        "Stop sifting through spam emails. Creators apply with tailored creative angles, verified audience metrics, and rate proposals. CollabKaro scores every applicant on niche, audience, and budget fit.",
      highlight: "View verified media kits with real IG & YT metrics",
      color: "#8B5CF6",
      bgColor: "#F5F3FF",
    },
    {
      num: "03",
      icon: ShieldCheck,
      title: "Lock Escrow & Sign Contract",
      tag: "100% Risk-Free",
      description:
        "Fund milestone-based escrow before work begins. Funds remain secure in platform escrow until you inspect and approve drafts. Standard legally-binding Indian digital contracts are auto-signed.",
      highlight: "ASCI-compliant terms & usage rights authorization",
      color: "#059669",
      bgColor: "#ECFDF5",
    },
    {
      num: "04",
      icon: CheckCircle2,
      title: "Review Drafts, Approve & Pay",
      tag: "Instant Payout",
      description:
        "Review video/image drafts in the Deal Room. Request timestamped revisions with 1 click. Once approved, the post goes live, metrics are verified, and escrow releases seamlessly with auto-TDS.",
      highlight: "Automated GST e-invoices and TDS (194J/O) receipts",
      color: "#EA580C",
      bgColor: "#FFF7ED",
    },
  ];

  const creatorSteps = [
    {
      num: "01",
      icon: Layers,
      title: "Build Your Live Media Kit",
      tag: "Free Link-in-Bio",
      description:
        "Showcase your real follower count, avg video views, top audience cities, and fixed rate cards on your public link (collabkaro.in/c/yourhandle). No more outdated PDF pitch decks.",
      highlight: "Auto-synced engagement & transparent rate cards",
      color: "#8B5CF6",
      bgColor: "#F5F3FF",
    },
    {
      num: "02",
      icon: Send,
      title: "Apply with 1-Tap Custom Pitch",
      tag: "Curated Briefs",
      description:
        "Browse verified briefs from India's fastest growing D2C brands and agencies. Apply with your unique creative angle and custom counter-rate in under 60 seconds.",
      highlight: "Direct access to marketing heads — no middlemen",
      color: "#2563EB",
      bgColor: "#EFF6FF",
    },
    {
      num: "03",
      icon: Lock,
      title: "Deliver Work Under Escrow",
      tag: "Guaranteed Payment",
      description:
        "Never chase brands for unpaid invoices again. You never produce content until the brand's funds are safely locked in CollabKaro Escrow. Your payment is 100% guaranteed upon brief completion.",
      highlight: "Protected milestones before you shoot a single frame",
      color: "#059669",
      bgColor: "#ECFDF5",
    },
    {
      num: "04",
      icon: Zap,
      title: "Instant UPI Payout & Form 26AS",
      tag: "Within 24 Hours",
      description:
        "Upon post approval, receive your earnings straight to your UPI ID or Bank account. We handle automated TDS (Sec 194J/194O) deductions and supply verified tax certificates.",
      highlight: "0% payout delay, instant bank settlement",
      color: "#EA580C",
      bgColor: "#FFF7ED",
    },
  ];

  const brandFaqs = [
    {
      q: "How does escrow payment protect my brand's budget?",
      a: "When you accept a creator's pitch, your campaign fee is safely held in CollabKaro's protected escrow account. The creator only receives payment after you have reviewed, requested any necessary revisions, and approved the final live post. If a creator fails to deliver within the SLA, your funds are refunded immediately.",
    },
    {
      q: "Can I specify minimum follower counts and engagement criteria?",
      a: "Yes! Our quantitative campaign builder allows you to select specific creator tiers (Nano, Micro, Mid, Macro), minimum follower thresholds (e.g. 50k+), minimum engagement rates, specific content formats (Reels, Shorts, Video reviews), and city/language targets.",
    },
    {
      q: "How do taxes and invoicing work for brands in India?",
      a: "CollabKaro is 100% compliant with Indian tax regulations. Every transaction automatically generates GST e-invoices with your company GSTIN, and computes TDS withholding (under Section 194J for services or 194O for e-commerce) with quarterly Form 26AS exports.",
    },
    {
      q: "What rights do I have over the creator content?",
      a: "All collaborations include standard digital usage rights defined in the brief (organic posting, 30/60/90-day paid partnership ads whitelist). Exclusivity periods and ad code authorizations (Meta Partnership Ads, TikTok Spark Ads) are formalized in the Deal Room contract.",
    },
  ];

  const creatorFaqs = [
    {
      q: "Is it free for creators to join and apply?",
      a: "Yes, 100% free! You can create your public media kit, showcase your portfolio, set your service rate cards, and apply to unlimited brand briefs without any subscription or listing fees.",
    },
    {
      q: "How do I know I will get paid after delivering the content?",
      a: "With CollabKaro Escrow, brands are required to deposit the full collaboration fee into escrow before you begin creating. Once you submit the approved deliverable, funds are released directly to your UPI ID or bank account without any invoice chasing.",
    },
    {
      q: "What if a brand asks for too many revisions?",
      a: "The CollabKaro collaboration contract specifies standard revision limits (usually 1 major revision). If a brand requests out-of-scope alterations or changes the original brief guidelines, our support team steps in to mediate and protect your creative time.",
    },
    {
      q: "Do I need a GST number or registered company?",
      a: "No. Individual creators can register simply using their PAN card and bank account or UPI ID. TDS will be deducted under Section 194J as required by Indian income tax laws and credited directly to your PAN in Form 26AS.",
    },
  ];

  const activeSteps = persona === "brands" ? brandSteps : creatorSteps;
  const activeFaqs = persona === "brands" ? brandFaqs : creatorFaqs;

  return (
    <div className="ck26-how-wrapper" id="how-it-works">
      {/* Section Header */}
      <div className="ck26-how-header">
        <div className="ck26-how-kicker">
          <Sparkles size={14} aria-hidden="true" />
          <span>
            {isStrictBrand
              ? "The Operating System for Brands & Agencies"
              : isStrictCreator
              ? "The Operating System for Verified Creators"
              : "The Operating System for Modern Creator Commerce"}
          </span>
        </div>
        <h2 className="ck26-how-title">
          {isStrictBrand
            ? "How CollabKaro Works for Brands"
            : isStrictCreator
            ? "How CollabKaro Works for Creators"
            : "How CollabKaro Works"}
        </h2>
        <p className="ck26-how-subtitle">
          {persona === "brands"
            ? "From quantitative briefs and explainable creator matching to milestone escrow and ASCI compliance, CollabKaro runs high-ROI campaigns with zero guesswork."
            : "Monetize your craft with confidence. Get direct brand access, guaranteed escrow milestone protection, and instant UPI payouts upon content approval."}
        </p>

        {/* Dual Persona Switcher: Only render when not strictly locked to a single role */}
        {!isStrictCreator && !isStrictBrand && (
          <div className="ck26-persona-switcher" role="tablist" aria-label="Audience Switcher">
            <button
              type="button"
              role="tab"
              aria-selected={persona === "creators"}
              className={`ck26-persona-btn ${persona === "creators" ? "is-active" : ""}`}
              onClick={() => setInteractivePersona("creators")}
            >
              <Users size={18} />
              <span>I'm a Creator / Influencer</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={persona === "brands"}
              className={`ck26-persona-btn ${persona === "brands" ? "is-active" : ""}`}
              onClick={() => setInteractivePersona("brands")}
            >
              <Building2 size={18} />
              <span>I'm a Brand or Agency</span>
            </button>
          </div>
        )}
      </div>

      {/* Value Proposition Badge Banner */}
      <div className="ck26-value-banner">
        <div className="ck26-value-pill">
          <ShieldCheck size={16} className="text-emerald" />
          <span>100% Protected Escrow</span>
        </div>
        <div className="ck26-value-pill">
          <Zap size={16} className="text-coral" />
          <span>Instant UPI & Bank Settlement</span>
        </div>
        <div className="ck26-value-pill">
          <FileCheck size={16} className="text-blue" />
          <span>Automated GST & TDS Compliance</span>
        </div>
        <div className="ck26-value-pill">
          <Award size={16} className="text-purple" />
          <span>Verified Audience Metrics</span>
        </div>
      </div>

      {/* 4 Step Visual Journey */}
      <div className="ck26-steps-container">
        <div className="ck26-steps-grid">
          {activeSteps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div key={step.num} className="ck26-step-card">
                <div className="ck26-step-top">
                  <span className="ck26-step-num">{step.num}</span>
                  <span
                    className="ck26-step-icon-wrap"
                    style={{ backgroundColor: step.bgColor, color: step.color }}
                  >
                    <IconComponent size={22} />
                  </span>
                </div>
                <div className="ck26-step-badge">{step.tag}</div>
                <h3 className="ck26-step-title">{step.title}</h3>
                <p className="ck26-step-desc">{step.description}</p>
                <div className="ck26-step-footer">
                  <CheckCircle2 size={15} style={{ color: step.color, flexShrink: 0 }} />
                  <span>{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Escrow & Security Callout */}
      <div className="ck26-escrow-card">
        <div className="ck26-escrow-content">
          <div className="ck26-escrow-badge">
            <ShieldCheck size={16} />
            <span>India-First Secure Architecture</span>
          </div>
          <h3>
            {persona === "brands"
              ? "Zero Disappearing Creators. High-Performance Deliverables."
              : "Zero Unpaid Invoices. Zero Chasing Brands."}
          </h3>
          <p>
            {persona === "brands"
              ? "CollabKaro acts as an impartial escrow fiduciary. Pre-fund campaign milestones into a segregated account, giving verified creators confidence to prioritize your brief. Funds release only after you review and approve the live post."
              : "Never produce content on empty promises. With CollabKaro Escrow, brands deposit 100% of your collaboration fee upfront before you shoot a single frame. Funds release straight to your UPI or Bank upon deliverable sign-off."}
          </p>
          <div className="ck26-escrow-stats">
            <div>
              <strong>₹2.5Cr+</strong>
              <span>Protected in Escrow</span>
            </div>
            <div>
              <strong>&lt; 24 Hrs</strong>
              <span>Avg Milestone Release</span>
            </div>
            <div>
              <strong>99.8%</strong>
              <span>Dispute-Free Completion</span>
            </div>
          </div>
        </div>
        <div className="ck26-escrow-cta">
          {persona === "brands" ? (
            <a href={appUrl("/register?role=brand")} className="ck26-cta-primary">
              <span>Post a Campaign Brief</span>
              <ArrowRight size={16} />
            </a>
          ) : (
            <a href={appUrl("/register?role=creator")} className="ck26-cta-primary">
              <span>Create Your Free Media Kit</span>
              <ArrowRight size={16} />
            </a>
          )}
          <span className="ck26-cta-subtext">Takes 3 minutes • No credit card required</span>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="ck26-faq-section">
        <div className="ck26-faq-head">
          <HelpCircle size={22} className="ck26-faq-icon" />
          <h3>
            {persona === "brands"
              ? "Brand & Agency FAQs"
              : persona === "creators"
              ? "Creator & Influencer FAQs"
              : "Frequently Asked Questions"}
          </h3>
          <p>
            {persona === "brands"
              ? "Everything you need to know about briefs, escrow protection, and deliverables."
              : "Everything you need to know about media kits, verified metrics, and guaranteed payouts."}
          </p>
        </div>

        <div className="ck26-faq-list">
          {activeFaqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={faq.q}
                className={`ck26-faq-item ${isOpen ? "is-open" : ""}`}
                onClick={() => toggleFaq(idx)}
              >
                <button
                  type="button"
                  className="ck26-faq-trigger"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
                {isOpen && (
                  <div className="ck26-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
