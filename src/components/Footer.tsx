import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Zap,
  Lock,
  FileCheck,
  Instagram,
  Youtube,
  Linkedin,
  Globe,
} from "lucide-react";
import { appUrl } from "../config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="ck26-footer">
      {/* Top Value Banner */}
      <div className="ck26-footer-trust">
        <div className="container">
          <div className="ck26-footer-trust-grid">
            <div className="ck26-trust-item">
              <ShieldCheck className="text-emerald" size={24} />
              <div>
                <strong>Milestone Escrow</strong>
                <span>Protected escrow holds funds until deliverable sign-off</span>
              </div>
            </div>
            <div className="ck26-trust-item">
              <Zap className="text-coral" size={24} />
              <div>
                <strong>Instant UPI Payouts</strong>
                <span>Direct-to-bank settlement within 24h of approval</span>
              </div>
            </div>
            <div className="ck26-trust-item">
              <FileCheck className="text-blue" size={24} />
              <div>
                <strong>TDS &amp; GST Compliant</strong>
                <span>Automated Section 194J/194O &amp; B2B e-invoices</span>
              </div>
            </div>
            <div className="ck26-trust-item">
              <Lock className="text-purple" size={24} />
              <div>
                <strong>ASCI Standard Contracts</strong>
                <span>Ironclad legal protection &amp; usage rights licensing</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="ck26-footer-main">
        <div className="container">
          <div className="ck26-footer-grid">
            {/* Brand Column */}
            <div className="ck26-footer-brand">
              <Link to="/" className="ck26-logo" aria-label="CollabKaro home">
                <span>K</span>
                <span>
                  Collab<span className="ck26-logo-highlight">Karo</span>
                </span>
              </Link>
              <p className="ck26-footer-tagline">
                India's two-sided operating system for high-growth consumer brands and verified creators. From quantitative brief to instant UPI payout.
              </p>
              <div className="ck26-footer-socials">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="CollabKaro on Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="CollabKaro on YouTube"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="CollabKaro on LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
              </div>
              <div className="ck26-footer-badge">
                <Globe size={14} />
                <span>Crafted for Indian Creator Economy</span>
              </div>
            </div>

            {/* Creators Navigation */}
            <div className="ck26-footer-col">
              <h4>For Creators</h4>
              <ul>
                <li>
                  <Link to="/for-creators">Creator Showcase &amp; Overview</Link>
                </li>
                <li>
                  <a href={appUrl("/register?role=creator")}>Build Free Media Kit</a>
                </li>
                <li>
                  <a href={appUrl("/register?role=creator")}>Join to Unlock Briefs</a>
                </li>
                <li>
                  <Link to="/how-it-works">How Creator Escrow Works</Link>
                </li>
                <li>
                  <a href={appUrl("/login")}>Creator Sign In</a>
                </li>
              </ul>
            </div>

            {/* Brands Navigation */}
            <div className="ck26-footer-col">
              <h4>For Brands &amp; Agencies</h4>
              <ul>
                <li>
                  <Link to="/for-brands">Brand Suite &amp; Overview</Link>
                </li>
                <li>
                  <a href={appUrl("/register?role=brand")}>Create Brand Account</a>
                </li>
                <li>
                  <a href={appUrl("/register?role=brand")}>Post Campaign Brief</a>
                </li>
                <li>
                  <Link to="/how-it-works">Milestone Escrow &amp; Taxes</Link>
                </li>
                <li>
                  <a href={appUrl("/login")}>Brand Workspace Sign In</a>
                </li>
              </ul>
            </div>

            {/* Niches / Categories */}
            <div className="ck26-footer-col">
              <h4>Creator Categories</h4>
              <ul>
                <li>
                  <Link to="/for-creators">Beauty &amp; Skincare</Link>
                </li>
                <li>
                  <Link to="/for-creators">Fashion &amp; OOTD</Link>
                </li>
                <li>
                  <Link to="/for-creators">Fitness &amp; Wellness</Link>
                </li>
                <li>
                  <Link to="/for-creators">Travel &amp; Hospitality</Link>
                </li>
                <li>
                  <Link to="/for-creators">Tech, Gadgets &amp; AI</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="ck26-footer-bottom">
        <div className="container ck26-footer-bottom-flex">
          <p>© {currentYear} CollabKaro Technologies Private Limited. All rights reserved.</p>
          <div className="ck26-footer-legal">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>ASCI Guidelines</span>
            <span>Escrow Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
