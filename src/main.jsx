import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Film, Wand2, Volume2, Palette, Building2, CheckCircle2, Orbit, Mail, ShieldCheck } from 'lucide-react';
import './styles.css';

const services = [
  { icon: Film, title: 'Video Editing', text: 'Premium Schnitt, pacing, transitions, color, storytelling und Social-Ready Assets.' },
  { icon: Wand2, title: 'VFX', text: 'Visuelle Effekte, Compositing, clean-ups, motion elements und cinematic polish.' },
  { icon: Volume2, title: 'SFX', text: 'Sounddesign, Impact-Sounds, Atmosphäre und Audio-Branding für starken Wiedererkennungswert.' },
  { icon: Palette, title: 'GFX', text: 'Grafiken, Thumbnails, Brand Assets, Anzeigenmotive und moderne Visuals für Unternehmen.' },
];

const process = ['Briefing & Zielsetzung', 'Konzept & Look-Definition', 'Produktion & Feinschliff', 'Final Delivery für Web, Ads & Social'];

function Stars() {
  return <div className="stars" aria-hidden="true">
    <span className="shooting s1" />
    <span className="shooting s2" />
    <span className="shooting s3" />
  </div>;
}

function SolarSystem() {
  return <div className="solar" aria-hidden="true">
    <div className="sun" />
    <div className="ring ring1"><span /></div>
    <div className="ring ring2"><span /></div>
    <div className="ring ring3"><span /></div>
  </div>;
}

function App() {
  return <main>
    <Stars />
    <section className="hero section">
      <nav className="nav">
        <div className="brand"><span>A</span> Arian</div>
        <a className="navCta" href="mailto:hello@arianansari.de">Kontakt</a>
      </nav>

      <div className="heroGrid">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }} className="heroText">
          <div className="eyebrow"><Sparkles size={16}/> High Quality Creative Production</div>
          <h1>Eine digitale Visitenkarte für starke Markenwirkung.</h1>
          <p className="lead">Ich erstelle hochwertige Video-Edits, VFX, SFX und GFX für Unternehmen, die professionell auftreten und aus der Masse herausstechen wollen.</p>
          <div className="heroActions">
            <a className="primary" href="mailto:hello@arianansari.de">Projekt anfragen <ArrowRight size={18}/></a>
            <a className="secondary" href="#services"><Play size={18}/> Leistungen ansehen</a>
          </div>
          <div className="trustRow">
            <span><CheckCircle2 size={16}/> Premium Look</span>
            <span><CheckCircle2 size={16}/> Business-ready</span>
            <span><CheckCircle2 size={16}/> Fast Delivery</span>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="visualCard">
          <SolarSystem />
          <div className="glassPanel">
            <Orbit size={26}/>
            <h2>Creative Systems</h2>
            <p>Strategisches Design, Motion und Content für moderne Unternehmen.</p>
          </div>
        </motion.div>
      </div>
    </section>

    <section id="services" className="section compact">
      <div className="sectionHead">
        <p className="eyebrow"><Building2 size={16}/> Services</p>
        <h2>Alles, was dein Außenauftritt hochwertiger macht.</h2>
      </div>
      <div className="cards">
        {services.map((s, i) => <motion.article whileHover={{ y: -8 }} className="card" key={s.title}>
          <s.icon size={28}/>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </motion.article>)}
      </div>
    </section>

    <section className="section split">
      <div>
        <p className="eyebrow"><ShieldCheck size={16}/> Positionierung</p>
        <h2>Kein 0815-Content. Sondern ein hochwertiger Markenauftritt.</h2>
      </div>
      <p className="bodyText">Der Fokus liegt auf Qualität, klarer visueller Sprache und Content, der Unternehmen seriöser, moderner und vertrauenswürdiger wirken lässt. Ideal für Social Media, Ads, Websites, Recruiting, Imagefilme und Launch-Kampagnen.</p>
    </section>

    <section className="section compact">
      <div className="timeline">
        {process.map((item, index) => <div className="step" key={item}>
          <span>0{index + 1}</span>
          <p>{item}</p>
        </div>)}
      </div>
    </section>

    <section className="section ctaBox">
      <h2>Bereit für einen stärkeren Auftritt?</h2>
      <p>Schick mir dein Ziel, deine Marke oder dein Rohmaterial. Ich mache daraus eine hochwertige visuelle Präsentation.</p>
      <a className="primary" href="mailto:hello@arianansari.de"><Mail size={18}/> Kontakt aufnehmen</a>
    </section>
  </main>;
}

createRoot(document.getElementById('root')).render(<App />);
