import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import { Building2, Users, Menu, X } from "lucide-react";
import HomeLandingPage from "./pages/HomeLandingPage";
import BrandLandingPage from "./pages/BrandLandingPage";
import CreatorLandingPage from "./pages/CreatorLandingPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import Footer from "./components/Footer";
import { appUrl } from "./config";
import "./index.css";

/* ─── Top-level Nav ─────────────────────────────────────────────────────── */
function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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
          <a href={appUrl("/login")} className="ck26-btn-ghost">
            Sign In
          </a>
          <a href={appUrl("/register?role=brand")} className="ck26-btn ck26-btn-sm brand-primary-btn">
            For Brands
          </a>
          <a href={appUrl("/register?role=creator")} className="ck26-btn ck26-btn-sm creator-primary-btn">
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
          <a href={appUrl("/login")} className="ck26-mobile-cta-ghost">Sign In</a>
          <a href={appUrl("/register?role=brand")} className="ck26-mobile-cta-primary">Get Started as Brand</a>
          <a href={appUrl("/register?role=creator")} className="ck26-mobile-cta-primary creator-mobile-cta">Join as Creator</a>
        </div>
      )}
    </header>
  );
}

/* ─── App shell ──────────────────────────────────────────────────────────── */
function App() {
  return (
    <BrowserRouter>
      <div className="ck26-app-shell">
        <Header />
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
      </div>
    </BrowserRouter>
  );
}

export default App;
