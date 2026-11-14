import { useEffect, useState } from "react";
import { PortraitCard } from "./components/PortraitCard";
import { ProjectCatalog } from "./components/ProjectCatalog";
import { SectionHeading } from "./components/SectionHeading";
import { achievements, awards, educationEntries, experienceEntries, navItems, profile, publicationEntries, researchAreas } from "./data/portfolio";

function LinkedInMark() {
  return <span className="linkedin-mark" aria-hidden="true">in</span>;
}

function ExternalArrow() {
  return <span className="external-arrow" aria-hidden="true">↗</span>;
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);
    return () => document.body.classList.remove("menu-is-open");
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner page-shell">
        <a className="wordmark" href="#home" onClick={() => setMenuOpen(false)} aria-label={`${profile.name} home`}>
          {profile.shortName}<span className="wordmark__period">.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav id="primary-navigation" className={`primary-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero page-shell" id="home" aria-labelledby="hero-title">
      <div className="hero__portrait-wrap">
        <PortraitCard />
      </div>
      <div className="hero__content">
        <p className="eyebrow hero__eyebrow">Academic portfolio <span>·</span> {profile.location}</p>
        <p className="hero__role">{profile.role} <span>/</span> {profile.institution}</p>
        <h1 id="hero-title">Dr. {profile.firstName}<br /><span>{profile.familyName}</span></h1>
        <p className="hero__intro">{profile.verifiedSummary}</p>
        <div className="hero__actions">
          <a className="button button--solid" href="#contact">Get in touch <span aria-hidden="true">↘</span></a>
          <a className="button button--outline" href="#research">Explore the portfolio <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero__links">
          <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
            <LinkedInMark /> LinkedIn <ExternalArrow />
          </a>
          <a href={profile.institutionUrl} target="_blank" rel="noreferrer">
            Republic Polytechnic <ExternalArrow />
          </a>
        </div>
      </div>
      <div className="hero__index" aria-hidden="true">01 — PROFILE</div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="content-section page-shell" id="about" aria-labelledby="about-title">
      <SectionHeading index="01" eyebrow="A little about me" title="About" id="about-title" />
      <div className="about-grid">
        <div className="about-grid__lead">
          <p className="about-grid__statement">Connecting chemistry education, applied research and industry practice.</p>
        </div>
        <div className="about-grid__detail">
          <p className="biography-copy">{profile.biography}</p>
          <div className="verified-facts">
            <div><span>Academic role</span><strong>{profile.role}</strong></div>
            <div><span>Institution</span><strong>{profile.institution}</strong></div>
            <div><span>Location</span><strong>{profile.location}</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="content-section content-section--tinted" id="education" aria-labelledby="education-title">
      <div className="page-shell">
        <SectionHeading index="02" eyebrow="Academic background" title="Education" id="education-title" />
        <div className="section-single-column">
          <div className="record-list">
            {educationEntries.map((item) => <article className="record-card" key={`${item.title}-${item.organization ?? ""}`}>
              {item.date && <p className="record-card__date">{item.date}</p>}{item.title && <h3>{item.title}</h3>}{item.organization && <p className="record-card__organization">{item.organization}</p>}
            </article>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="content-section page-shell" id="experience" aria-labelledby="experience-title">
      <SectionHeading index="03" eyebrow="Career & teaching" title="Experience" id="experience-title" />
      <div className="experience-layout">
        <div className="experience-layout__intro">
          <p className="large-copy">Teaching and applied research across pharmacy, chemistry and industry collaboration.</p>
          <p className="muted-copy">Teaching, research and industry experience across pharmaceutical sciences and chemistry.</p>
        </div>
        <div className="record-list">
          {experienceEntries.filter((item) => item.visible !== false && item.title.trim()).map((item) => <article className="record-card" key={`${item.organization}-${item.title}`}>
            {item.date && <p className="record-card__date">{item.date}</p>}<h3>{item.title}</h3><p className="record-card__organization">{item.organization}</p>{item.location && <p className="record-card__organization">{item.location}</p>}{item.description && <p>{item.description}</p>}
          </article>)}
        </div>
      </div>
    </section>
  );
}

function ResearchSection() {
  return (
    <section className="content-section content-section--tinted" id="research" aria-labelledby="research-title">
      <div className="page-shell">
        <SectionHeading index="04" eyebrow="Questions & inquiry" title="Research" id="research-title" description="Interests, activities, and collaborations." />
        <div className="research-panel">
          <div className="research-panel__symbol" aria-hidden="true">R<span>.</span></div>
          <div>
            <h3>Applied chemistry, formulation and learning innovation</h3>
            <p>His research spans medicinal chemistry, pharmaceutical formulation, analytical characterization, materials science and practical learning design, often in collaboration with students and industry partners.</p>
            <ul className="research-tags">{researchAreas.map((area) => <li key={area}>{area}</li>)}</ul>
          </div>
          <a className="quiet-link" href={profile.linkedinUrl} target="_blank" rel="noreferrer">Connect on LinkedIn <ExternalArrow /></a>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section className="content-section page-shell" id="projects" aria-labelledby="projects-title">
      <SectionHeading index="05" eyebrow="Selected work" title="Projects" id="projects-title" description="Projects and educational initiatives listed on the public LinkedIn profile." />
      <ProjectCatalog />
    </section>
  );
}

function PublicationsSection() {
  return (
    <section className="content-section content-section--tinted" id="publications" aria-labelledby="publications-title">
      <div className="page-shell">
        <SectionHeading index="06" eyebrow="Writing & scholarship" title="Publications" id="publications-title" />
        <div className="publication-empty">
          <div className="publication-empty__number" aria-hidden="true">{String(publicationEntries.length).padStart(2, "0").split("").map((digit, i) => <span key={i}>{digit}</span>)}</div>
          <div className="publication-empty__copy">
            <h3>Selected publications</h3>
            <p>Research in medicinal chemistry, pharmaceutical science and materials applications.</p>
          </div>
        </div>
        <ol className="publication-records">{publicationEntries.map((item) => <li key={item.title}>
          <div><h3>{item.title}</h3>{item.authors && <p>{item.authors}</p>}{(item.venue || item.year) && <p className="record-card__organization">{[item.venue, item.year].filter(Boolean).join(" · ")}</p>}</div>
          {item.url && <a href={item.url} target="_blank" rel="noreferrer">Publisher / DOI <ExternalArrow /></a>}
        </li>)}</ol>
      </div>
    </section>
  );
}

function AwardsSection() {
  return (
    <section className="content-section page-shell" id="awards" aria-labelledby="awards-title">
      <SectionHeading index="07" eyebrow="Recognition" title="Awards & achievements" id="awards-title" />
      <div className="record-list">
        {awards.map((award) => <article className="award-placeholder" key={award.title}>
          <span className="award-placeholder__star" aria-hidden="true">✳</span><div><h3>{award.title}</h3><p>{award.description}</p></div><span className="award-placeholder__year">{award.date}</span>
        </article>)}
      </div>
      <div className="achievement-block"><h3>Professional achievements</h3><ul>{achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul></div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="page-shell contact-section__inner">
        <div className="contact-section__heading">
          <p className="eyebrow">08 / Contact</p>
          <h2 id="contact-title">Let’s start<br /><em>a conversation.</em></h2>
          <p className="contact-section__copy">For professional enquiries, connect via LinkedIn or Republic Polytechnic.</p>
        </div>
        <div className="contact-card">
          <div className="contact-card__row">
            <span>LinkedIn</span>
            <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">Connect with {profile.name} <ExternalArrow /></a>
          </div>
          <div className="contact-card__row">
            <span>Institution</span>
            <a href={profile.institutionUrl} target="_blank" rel="noreferrer">{profile.institution} <ExternalArrow /></a>
          </div>
          {profile.email && <div className="contact-card__row">
            <span>Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__inner">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>Academic portfolio <i aria-hidden="true">·</i> Republic Polytechnic, Singapore</span>
        <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => {
    document.title = profile.pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", profile.metaDescription);
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ResearchSection />
        <ProjectsSection />
        <PublicationsSection />
        <AwardsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
