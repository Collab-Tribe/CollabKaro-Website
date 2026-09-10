import React from "react";
import { Link } from "react-router-dom";
import {
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  FileCheck,
  Check,
  Sparkles,
  Users,
  Smartphone,
  Award,
  DollarSign,
  TrendingUp,
  Instagram,
  Youtube,
  Send,
  Lock,
} from "lucide-react";
import HowItWorks from "../components/HowItWorks";
import { appUrl } from "../config";

export default function CreatorLandingPage() {
  return (
    <div className="ck26-portal-page creator-portal">
      {/* Hero Section */}
      <section className="portal-hero creator-hero">
        <div className="container">
          <div className="portal-hero-grid">
            <div className="portal-hero-content">
              <div className="portal-kicker creator-kicker">
                <Sparkles size={15} />
                <span>CollabKaro for Creators &amp; Influencers</span>
              </div>
              <h1 className="portal-hero-title">
                The Operating System for <em>India's Next-Gen Creators</em>
              </h1>
              <p className="portal-hero-subtitle">
                Build a free, shareable live media kit with verified IG and YouTube metrics, transparent rate cards, and direct brand inquiries. Apply to curated brand briefs with one tap and get paid via 100% guaranteed milestone escrow straight to your UPI.
              </p>

              <div className="portal-hero-cta">
                <a href={appUrl("/register?role=creator")} className="portal-btn-primary creator-primary-btn">
                  <span>Join as a Creator</span>
                  <ArrowRight size={18} />
                </a>
                <Link to="/" className="portal-btn-secondary">
                  <span>Browse Live Briefs</span>
                </Link>
              </div>

              <div className="portal-trust-chips">
                <div className="portal-trust-chip">
                  <Check size={14} className="text-emerald" />
                  <span>100% Guaranteed Escrow</span>
                </div>
                <div className="portal-trust-chip">
                  <Check size={14} className="text-emerald" />
                  <span>Instant UPI &amp; Bank Settlement</span>
                </div>
                <div className="portal-trust-chip">
                  <Check size={14} className="text-emerald" />
                  <span>No Agency Commission Cuts</span>
                </div>
              </div>
            </div>

            <div className="portal-hero-preview">
              <div className="portal-mockup-card creator-mockup">
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <span className="mockup-title">collabkaro.in/c/aanyasharma</span>
                </div>
                <div className="mockup-body">
                  <div className="mockup-creator-profile">
                    <div className="mockup-creator-avatar">AS</div>
                    <div>
                      <h4>Aanya Sharma <span className="verified-badge">✓ Verified</span></h4>
                      <p>Fashion &amp; Sustainable Beauty • Mumbai, India</p>
                    </div>
                  </div>

                  <div className="mockup-creator-stats">
                    <div>
                      <strong>124K</strong>
                      <small>IG Followers</small>
                    </div>
                    <div>
                      <strong>4.8%</strong>
                      <small>Engagement</small>
                    </div>
                    <div>
                      <strong>42K</strong>
                      <small>Avg Reel Views</small>
                    </div>
                  </div>

                  <div className="mockup-services-list">
                    <div className="mockup-service-item">
                      <div>
                        <strong>1x Instagram Reel (Dedicated)</strong>
                        <span>9:16 vertical • 30 days usage</span>
                      </div>
                      <span className="rate-badge">₹25,000</span>
                    </div>
                    <div className="mockup-service-item">
                      <div>
                        <strong>1x YouTube Shorts Video</strong>
                        <span>Product link in pinned comment</span>
                      </div>
                      <span className="rate-badge">₹18,000</span>
                    </div>
                  </div>

                  <div className="mockup-escrow-pill">
                    <ShieldCheck size={14} className="text-emerald" />
                    <span>Protected by CollabKaro Milestone Escrow</span>
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
            <span className="portal-kicker">Empowering Your Creative Business</span>
            <h2>Stop chasing unpaid invoices. Start monetizing with confidence.</h2>
            <p>Everything you need to turn content creation into a scalable professional career.</p>
          </div>

          <div className="portal-features-grid">
            <div className="portal-feature-card">
              <div className="feature-icon-wrap" style={{ background: "#F5F3FF", color: "#8B5CF6" }}>
                <Layers size={24} />
              </div>
              <h3>Shareable Live Media Kit</h3>
              <p>
                Replace static PDFs with a high-converting link-in-bio showcasing real-time social stats, audience demographics, top content, and fixed service rate cards.
              </p>
            </div>

            <div className="portal-feature-card">
              <div className="feature-icon-wrap" style={{ background: "#EFF6FF", color: "#2563EB" }}>
                <Send size={24} />
              </div>
              <h3>1-Tap Pitch Submissions</h3>
              <p>
                Apply directly to verified brand campaigns in Beauty, Fashion, Fitness, Travel, and Tech. Pitch your unique creative angle and proposed rate in under 60 seconds.
              </p>
            </div>

            <div className="portal-feature-card">
              <div className="feature-icon-wrap" style={{ background: "#ECFDF5", color: "#059669" }}>
                <Lock size={24} />
              </div>
              <h3>Guaranteed Milestone Escrow</h3>
              <p>
                Never work without guaranteed pay. Brands fund the collaboration milestone upfront before you produce any content. Payment is released immediately upon delivery.
              </p>
            </div>

            <div className="portal-feature-card">
              <div className="feature-icon-wrap" style={{ background: "#FFF7ED", color: "#EA580C" }}>
                <Zap size={24} />
              </div>
              <h3>Instant 24/7 UPI Settlements</h3>
              <p>
                Get paid directly to your UPI ID or bank account within 24 hours of approval. Includes automated TDS (Sec 194J) certificates credited to your PAN.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works for Creators */}
      <section className="container" style={{ margin: "40px auto" }}>
        <HowItWorks forcedRole="creator" />
      </section>

      {/* Bottom CTA Banner */}
      <section className="portal-bottom-cta creator-bottom-cta">
        <div className="container">
          <div className="portal-bottom-cta-box">
            <h2>Ready to monetize your influence with guaranteed pay?</h2>
            <p>Create your free media kit and unlock direct brand campaigns across India today.</p>
            <div className="portal-bottom-actions">
              <a href={appUrl("/register?role=creator")} className="portal-btn-primary creator-primary-btn">
                <span>Create Free Media Kit</span>
                <ArrowRight size={18} />
              </a>
              <Link to="/" className="portal-btn-secondary" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}>
                <span>Browse Campaigns</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
