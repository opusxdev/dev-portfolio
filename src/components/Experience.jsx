import React from 'react';
import expImg from '../assets/expertise.png'

export default function Experience() {
  return (
    <section className="experience-section">
      <p className="section-title">Experience</p>
      
      <div className="simple-item">
        <div className="item-main-row">
          <div className="org-logo">
            <img src={expImg} alt="Product based company" />
          </div>

          <div className="item-info">
            <div className="item-header-top">
              <div className="title-group">
                <h3>DIONEAPPS</h3>
                <span className="org-name">BACKEND DEVELOPER INTERN </span>
              </div>
              <div className="flex items-center mb-1">
                  <div className="h-1 w-1 mx-2 bg-emerald-600 rounded-full animate-pulse"></div>
                  <p className="text-xs text-neutral-600 tracking-tight">
                  Dec 2025 - Present
                  </p>
                </div>
              <span className="item-date">bjkb</span>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}