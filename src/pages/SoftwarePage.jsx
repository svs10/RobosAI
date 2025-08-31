import React from 'react';
import { Link } from 'react-router-dom';
import './SoftwarePage.css';

const SoftwarePage = () => {
  return (
    <div className="software-container">
      <section className="software-hero">
        <div className="software-hero-grid">
          <div className="software-hero-content">
            <div className="software-eyebrow">Unified AI for Multi‑Robot Workplaces</div>
            <h1 className="software-title">One AI platform to control, monitor, and optimize every robot.</h1>
            <p className="software-lede">Plug into all your robots in minutes. Ask natural‑language questions. Benchmark performance across brands. Meet the operating layer for autonomous fleets.</p>
            <div className="software-hero-cta">
              <Link to="/contact" className="software-btn software-btn-primary">Get a live demo</Link>
              <a className="software-btn software-btn-ghost" href="#features">See the 3 innovations</a>
            </div>
            <div className="software-trust">
              Trusted by teams integrating <span className="software-badge">Skydio</span> <span className="software-badge">Boston Dynamics</span> <span className="software-badge">Sea Machines</span>
            </div>
          </div>

          <div className="software-hero-figure">
            <img 
              src="/assets/Software 01.jpg" 
              alt="RobosAI Platform Interface" 
              className="software-hero-image"
            />
          </div>
        </div>
      </section>

      <section id="features" className="software-features">
        <div className="software-container-inner">
          <div className="software-kicker">Three Innovations</div>
          <h2 className="software-subtitle">What makes RobosOne different</h2>

          <div className="software-features-grid">
            <article className="software-feature-card">
              <div className="software-feature-thumb">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="9" width="8" height="12" rx="2" />
                  <rect x="13" y="3" width="8" height="12" rx="2" />
                  <path d="M11 15h2" />
                </svg>
              </div>
              <div>
                <h3>Universal Integration Hub</h3>
                <p>Plug & play connectors unify all air, ground, and marine robots in minutes — one dashboard, zero vendor silos.</p>
                <div className="software-integrations">
                  <span className="software-pill">Skydio</span>
                  <span className="software-pill">Boston Dynamics</span>
                  <span className="software-pill">Sea Machines</span>
                </div>
              </div>
            </article>

            <article className="software-feature-card">
              <div className="software-feature-thumb">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 19l-1.5 3 3-1.5" />
                  <rect x="3" y="4" width="18" height="12" rx="4"/>
                  <path d="M7 10h5m2 0h3M7 7h7" />
                </svg>
              </div>
              <div>
                <h3>LLM‑Powered Insights</h3>
                <p>Ask, "Which robots are underutilized?" and get instant, data‑backed answers with dedicated RAG over your fleet.</p>
              </div>
            </article>

            <article className="software-feature-card">
              <div className="software-feature-thumb">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="10" width="4" height="10" rx="1" />
                  <rect x="10" y="6" width="4" height="14" rx="1" />
                  <rect x="17" y="3" width="4" height="17" rx="1" />
                </svg>
              </div>
              <div>
                <h3>Cross‑Platform Benchmarking</h3>
                <p>Compare performance across brands and models to pick winners and optimize ROI with independent analytics.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwarePage;
