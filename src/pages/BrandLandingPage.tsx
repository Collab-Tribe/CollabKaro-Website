import React from "react";
import { Link } from "react-router-dom";
import {
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
  DollarSign,
  Layers,
  FileCheck,
  Building2,
  Users,
  Target,
  BarChart3,
  Search,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Check,
} from "lucide-react";
import HowItWorks from "../components/HowItWorks";
import { appUrl } from "../config";

export default function BrandLandingPage() {
  return (
    <div className="ck26-portal-page brand-portal">
      {/* Hero Section */}
      <section className="portal-hero brand-hero">
        <div className="container">
          <div className="portal-hero-grid">
            <div className="portal-hero-content">
              <div className="portal-kicker brand-kicker">
                <Building2 size={15} />
                <span>CollabKaro for Brands &amp; Agencies</span>
              </div>
              <h1 className="portal-hero-title">
                The Performance-Driven Influencer Marketing Platform for <em>India's Fastest-Growing Brands</em>
              </h1>
              <p className="portal-hero-subtitle">
                Eliminate ghosting, messy WhatsApp threads, and advance payment risk. Post quantitative campaign briefs, discover vetted creators by audience tier &amp; engagement rate, and manage end-to-end deliverables with guaranteed milestone escrow.
              </p>

              <div className="portal-hero-cta">
                <a href={appUrl("/register?role=brand")} className="portal-btn-primary brand-primary-btn">
                  <span>Sign Up as Brand / Agency</span>
                  <ArrowRight size={18} />
                </a>
                <a href={appUrl("/login")} className="portal-btn-secondary">
                  <span>Sign In</span>
                </a>
              </div>

              <div className="portal-trust-chips">
                <div className="portal-trust-chip">
                  <Check size={14} className="text-emerald" />
                  <span>100% Protected Escrow</span>
                </div>
                <div className="portal-trust-chip">
                  <Check size={14} className="text-emerald" />
                  <span>GST &amp; TDS (194J/O) Compliant</span>
                </div>
                <div className="portal-trust-chip">
                  <Check size={14} className="text-emerald" />
                  <span>Zero Listing Fees</span>
                </div>
              </div>
            </div>

            <div className="portal-hero-preview">
              <div className="portal-mockup-card brand-mockup">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="mockup-title">Brand Campaign Studio</span>
                </div>
                <div className="mockup-body">
                  <div className="mockup-metric-row">
                    <div className="mockup-metric-box">
                      <small>Active Briefs</small>
                      <strong>4 Live</strong>
                    </div>
                    <div className="mockup-metric-box">
                      <small>Pitches Received</small>
                      <strong>28 Scored</strong>
                    </div>
                    <div className="mockup-metric-box">
                      <small>Escrow Secured</small>
                      <strong>₹3,40,000</strong>
                    </div>
                  </div>

                  <div className="mockup-brief-item">
                    <div className="mockup-brief-top">
                      <span className="mockup-brief-badge">Diwali Mega Launch</span>
                      <span className="mockup-match-score">94% AI Match</span>
                    </div>
                    <h4>Festive Glow Skincare Routine (Reels + Stories)</h4>
                    <div className="mockup-tags">
                      <span>Beauty &amp; Skincare</span>
                      <span>50k+ Followers</span>
                      <span>3.5%+ ER</span>
                    </div>
                    <div className="mockup-brief-foot">
                      <span>Deliverables: 2x Reels + 2x Stories</span>
                      <strong className="text-coral">Budget: ₹75,000</strong>
                    </div>
                  </div>

                  <div className="mockup-applicant-preview">
                    <div className="applicant-avatar">AS</div>
                    <div className="applicant-info">
                      <strong>Aanya Sharma (@aanyacreates)</strong>
                      <span>92k Followers • 4.8% Engagement Rate • Mumbai</span>
                    </div>
                    <span className="applicant-status">Shortlisted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars Section */}
      <section className="portal-features-section">
        <div className="container">
          <div className="portal-section-head">
            <span className="portal-kicker">Built For Modern Marketing Teams</span>
            <h2>Everything you need to run creator campaigns at scale</h2>
            <p>From quantitative brief specifications to legally-binding ASCI contracts and tax automation.</p>
          </div>

          <div className="portal-features-grid">
            <div className="portal-feature-card">
              <div className="feature-icon-wrap" style={{ background: "#EFF6FF", color: "#2563EB" }}>
                <Target size={24} />
              </div>
              <h3>Quantitative Brief Builder</h3>
              <p>
                Set strict follower tiers (Nano &lt;10k, Micro 10k-50k, Mid 50k-100k, Macro 100k+), minimum engagement rates, exact deliverable checklists, and mandatory hashtags.
              </p>
            </div>

            <div className="portal-feature-card">
              <div className="feature-icon-wrap" style={{ background: "#F5F3FF", color: "#8B5CF6" }}>
                <Sparkles size={24} />
              </div>
              <h3>Explainable AI Matchmaking</h3>
              <p>
                CollabKaro analyzes creator niche relevancy, audience demographics, follower authenticity, and past performance to score every inbound pitch transparently.
              </p>
            </div>

            <div className="portal-feature-card">
              <div className="feature-icon-wrap" style={{ background: "#ECFDF5", color: "#059669" }}>
                <ShieldCheck size={24} />
              </div>
              <h3>Risk-Free Milestone Escrow</h3>
              <p>
                Your funds remain safely locked in platform escrow until you inspect video drafts and approve the live post. Zero risk of disappearing creators or unmet brief terms.
              </p>
            </div>

            <div className="portal-feature-card">
              <div className="feature-icon-wrap" style={{ background: "#FFF7ED", color: "#EA580C" }}>
                <FileCheck size={24} />
              </div>
              <h3>Automated TDS &amp; GST Invoicing</h3>
              <p>
                100% compliant with Indian tax regulations. Automated Section 194J/194O TDS calculation, Form 26AS reports, and B2B GST tax invoices with your company GSTIN.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works for Brands */}
      <section className="container" style={{ margin: "40px auto" }}>
        <HowItWorks forcedRole="brand" />
      </section>

      {/* Bottom CTA Banner */}
      <section className="portal-bottom-cta brand-bottom-cta">
        <div className="container">
          <div className="portal-bottom-cta-box">
            <h2>Ready to launch your next high-ROI influencer campaign?</h2>
            <p>Join hundreds of high-growth consumer brands and agencies hiring vetted creators on CollabKaro.</p>
            <div className="portal-bottom-actions">
              <a href={appUrl("/register?role=brand")} className="portal-btn-primary brand-primary-btn">
                <span>Create Brand Account</span>
                <ArrowRight size={18} />
              </a>
              <a href={appUrl("/login")} className="portal-btn-secondary" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>
                <span>Sign In to Workspace</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
