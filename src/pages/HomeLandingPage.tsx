import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Users,
  ArrowRight,
  ShieldCheck,
  Zap,
  FileCheck,
  Award,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Lock,
  TrendingUp,
  Star,
} from "lucide-react";
import HowItWorks from "../components/HowItWorks";
import { appUrl } from "../config";

export default function HomeLandingPage() {
  return (
    <div className="ck26-landing-master">
      {/* Master Showcase Hero */}
      <section className="master-hero">
        <div className="container">
          <div className="master-hero-badge">
            <Sparkles size={15} />
            <span>India's #1 Creator &amp; Brand Marketplace Operating System</span>
          </div>

          <h1 className="master-hero-title">
            Where High-Growth Brands &amp; Verified Creators <em>Build High-Impact Campaigns</em>
          </h1>

          <p className="master-hero-subtitle">
            One unified platform connecting India's top consumer labels with vetted creators. Powered by quantitative campaign briefs, explainable AI matchmaking, guaranteed milestone escrow, and instant UPI payouts.
          </p>

          {/* Two Distinct Gateway Cards: Brand Portal vs Creator Portal */}
          <div className="master-portals-grid">
            {/* For Brands & Agencies Portal Card */}
            <div className="portal-gateway-card brand-gateway">
              <div className="gateway-kicker brand-gateway-kicker">
                <Building2 size={16} />
                <span>For Brands &amp; Agencies</span>
              </div>
              <h2>Hire Vetted Creators with Zero Risk</h2>
              <p>
                Launch quantitative briefs with strict follower &amp; engagement thresholds. Receive scored pitches, fund milestone escrow, and manage ASCI-compliant deliverables with automated GST &amp; TDS.
              </p>

              <div className="gateway-perks">
                <div>
                  <CheckCircle2 size={16} className="text-blue" />
                  <span>Quantitative brief builder &amp; follower tier filters</span>
                </div>
                <div>
                  <CheckCircle2 size={16} className="text-blue" />
                  <span>100% Protected milestone escrow (Razorpay Route)</span>
                </div>
                <div>
                  <CheckCircle2 size={16} className="text-blue" />
                  <span>Automated B2B GST e-invoices &amp; TDS Section 194J/O</span>
                </div>
              </div>

              <div className="gateway-actions">
                <Link to="/for-brands" className="gateway-btn brand-btn-primary">
                  <span>Explore Brand Suite</span>
                  <ArrowRight size={16} />
                </Link>
                <a href={appUrl("/register?role=brand")} className="gateway-btn-outline">
                  <span>Sign Up as Brand</span>
                </a>
              </div>
            </div>

            {/* For Creators & Influencers Portal Card */}
            <div className="portal-gateway-card creator-gateway">
              <div className="gateway-kicker creator-gateway-kicker">
                <Users size={16} />
                <span>For Creators &amp; Influencers</span>
              </div>
              <h2>Monetize Your Influence with Guaranteed Pay</h2>
              <p>
                Set up your live public media kit with verified IG and YouTube metrics. Pitch custom counter-rates to verified D2C briefs, work under locked escrow, and get paid 24/7 straight to your UPI.
              </p>

              <div className="gateway-perks">
                <div>
                  <CheckCircle2 size={16} className="text-purple" />
                  <span>Free live link-in-bio media kit &amp; fixed rate cards</span>
                </div>
                <div>
                  <CheckCircle2 size={16} className="text-purple" />
                  <span>Guaranteed payment locked before you shoot content</span>
                </div>
                <div>
                  <CheckCircle2 size={16} className="text-purple" />
                  <span>Instant 24/7 UPI settlements with automated Form 26AS</span>
                </div>
              </div>

              <div className="gateway-actions">
                <Link to="/for-creators" className="gateway-btn creator-btn-primary">
                  <span>Explore Creator Suite</span>
                  <ArrowRight size={16} />
                </Link>
                <a href={appUrl("/register?role=creator")} className="gateway-btn-outline">
                  <span>Join as Creator</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Trust & Numbers Banner */}
      <section className="master-stats-section">
        <div className="container">
          <div className="master-stats-grid">
            <div className="master-stat-item">
              <strong>₹2.5Cr+</strong>
              <span>Protected in Milestone Escrow</span>
            </div>
            <div className="master-stat-item">
              <strong>12,000+</strong>
              <span>Verified Indian Creators</span>
            </div>
            <div className="master-stat-item">
              <strong>450+</strong>
              <span>D2C Brands &amp; Top Agencies</span>
            </div>
            <div className="master-stat-item">
              <strong>&lt; 24 Hrs</strong>
              <span>Average Milestone Settlement</span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Campaign Discovery Peek */}
      <section className="master-discovery-peek">
        <div className="container">
          <div className="peek-head">
            <div>
              <span className="ck26-overline">Active Marketplace Calls</span>
              <h2>Trending Brand Briefs Looking for Creators Now</h2>
            </div>
            <a href={appUrl("/register?role=creator")} className="peek-view-all">
              <span>Sign Up to Pitch &amp; Unlock All Briefs</span>
              <ChevronRight size={18} />
            </a>
          </div>

          <div className="peek-cards-row">
            <div className="peek-card">
              <span className="peek-category">Beauty &amp; Skincare</span>
              <h4>Glow Rituals: Summer Sunscreen Reel Launch</h4>
              <p>Looking for tier-2/3 lifestyle and skincare creators for authentic UGC review videos.</p>
              <div className="peek-card-foot">
                <span>Deliverables: 1x IG Reel</span>
                <strong>Budget: ₹35,000</strong>
              </div>
            </div>

            <div className="peek-card">
              <span className="peek-category">Fitness &amp; Health</span>
              <h4>Plant Protein Shake 30-Day Transformation</h4>
              <p>Certified trainers &amp; fitness enthusiasts to share workout routines and daily nutrition.</p>
              <div className="peek-card-foot">
                <span>Deliverables: 2x Reels + 2x Stories</span>
                <strong>Budget: ₹50,000</strong>
              </div>
            </div>

            <div className="peek-card">
              <span className="peek-category">Technology &amp; AI</span>
              <h4>Smart Ring Pro: Health Tracking Review</h4>
              <p>Tech reviewers and productivity creators covering sleep, recovery, and smart wearable tech.</p>
              <div className="peek-card-foot">
                <span>Deliverables: 1x YouTube Video</span>
                <strong>Budget: ₹65,000</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Interactive How It Works Section */}
      <section className="container" style={{ margin: "40px auto 80px" }}>
        <HowItWorks />
      </section>
    </div>
  );
}
