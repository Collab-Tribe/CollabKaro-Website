import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import { Building2, Users, Menu, X } from "lucide-react";
import HomeLandingPage from "./pages/HomeLandingPage";
import BrandLandingPage from "./pages/BrandLandingPage";
import CreatorLandingPage from "./pages/CreatorLandingPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import Footer from "./components/Footer";
import FounderConnectModal from "./components/FounderConnectModal";
import { appUrl } from "./config";
import "./index.css";

// Environment-aware detection for public GitHub Pages showcase
export const isShowcase =
  typeof window !== "undefined" &&
  (window.location.hostname.includes("github.io") ||
    window.location.search.includes("mode=showcase"));

interface HeaderProps {
  onOpenFounderModal: (intent?: "brand" | "creator" | "demo") => void;
}

/* ─── Top-level Nav ─────────────────────────────────────────────────────── */
function Header({ onOpenFounderModal }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const handleAuthAction = (
    e: React.MouseEvent,
    intent: "brand" | "creator" | "demo"
  ) => {
    if (isShowcase) {
      e.preventDefault();
      onOpenFounderModal(intent);
    }
  };

  return (
    <header className="ck26-header ck26-header-guest">
      <div className="ck26-header-inner container">
        <Link to="/" className="ck26-logo" aria-label="CollabKaro home">
          <span>K</span>
          <span>
            Collab<span className="ck26-logo-highlight">Karo</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="ck26-nav-links" aria-label="Main navigation">
          <Link to="/for-brands" className={pathname === "/for-brands" ? "active" : ""}>
            <Building2 size={14} />
            For Brands
          </Link>
          <Link to="/for-creators" className={pathname === "/for-creators" ? "active" : ""}>
            <Users size={14} />
            For Creators
          </Link>
          <Link to="/how-it-works" className={pathname === "/how-it-works" ? "active" : ""}>
            How It Works
          </Link>
        </nav>

        <div className="ck26-header-actions">
          <a
            href={appUrl("/login")}
            className="ck26-btn-ghost"
            onClick={(e) => handleAuthAction(e, "demo")}
          >
            Sign In
          </a>
          <a
            href={appUrl("/register?role=brand")}
            className="ck26-btn ck26-btn-sm brand-primary-btn"
            onClick={(e) => handleAuthAction(e, "brand")}
          >
            For Brands
          </a>
          <a
            href={appUrl("/register?role=creator")}
            className="ck26-btn ck26-btn-sm creator-primary-btn"
            onClick={(e) => handleAuthAction(e, "creator")}
          >
            Join as Creator
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="ck26-mobile-menu-btn"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="ck26-mobile-drawer">
          <Link to="/for-brands">For Brands</Link>
          <Link to="/for-creators">For Creators</Link>
          <Link to="/how-it-works">How It Works</Link>
          <a
            href={appUrl("/login")}
            className="ck26-mobile-cta-ghost"
            onClick={(e) => handleAuthAction(e, "demo")}
          >
            Sign In
          </a>
          <a
            href={appUrl("/register?role=brand")}
            className="ck26-mobile-cta-primary"
            onClick={(e) => handleAuthAction(e, "brand")}
          >
            Get Started as Brand
          </a>
          <a
            href={appUrl("/register?role=creator")}
            className="ck26-mobile-cta-primary creator-mobile-cta"
            onClick={(e) => handleAuthAction(e, "creator")}
          >
            Join as Creator
          </a>
        </div>
      )}
    </header>
  );
}

/* ─── App shell ──────────────────────────────────────────────────────────── */
function App() {
  const [isFounderModalOpen, setIsFounderModalOpen] = useState(false);
  const [founderModalIntent, setFounderModalIntent] = useState<
    "brand" | "creator" | "demo"
  >("demo");

  const openFounderModal = (intent: "brand" | "creator" | "demo" = "demo") => {
    setFounderModalIntent(intent);
    setIsFounderModalOpen(true);
  };

  // Intercept any click on marketing action links when running in showcase mode
  const handleContainerClick = (e: React.MouseEvent) => {
    if (!isShowcase) return;
    const anchor = (e.target as HTMLElement).closest("a");
    if (!anchor) return;
    const href = anchor.getAttribute("href");
    if (!href) return;

    if (
      href.includes("/login") ||
      href.includes("/register") ||
      href.includes("app.collabkaro.in")
    ) {
      e.preventDefault();
      let intent: "brand" | "creator" | "demo" = "demo";
      if (href.includes("role=brand") || href.includes("brand")) {
        intent = "brand";
      } else if (href.includes("role=creator") || href.includes("creator")) {
        intent = "creator";
      }
      openFounderModal(intent);
    }
  };

  return (
    <HashRouter>
      <div className="ck26-app-shell" onClickCapture={handleContainerClick}>
        <Header onOpenFounderModal={openFounderModal} />
        <main>
          <Routes>
            <Route path="/" element={<HomeLandingPage />} />
            <Route path="/for-brands" element={<BrandLandingPage />} />
            <Route path="/for-creators" element={<CreatorLandingPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            {/* Catch-all — redirect unknown paths back to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <FounderConnectModal
          isOpen={isFounderModalOpen}
          onClose={() => setIsFounderModalOpen(false)}
          intent={founderModalIntent}
        />
      </div>
    </HashRouter>
  );
}

export default App;
