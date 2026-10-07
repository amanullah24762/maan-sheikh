"use client";

import { useEffect, useState } from "react";

const navItems = ["Home", "Menu", "About", "Contact"];
const dishes = [
  { name: "Sheikh Special Chargha", label: "Signature speciality", text: "Our celebrated house chargha, marinated in aromatic spices and roasted until perfectly tender.", image: "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?auto=format&fit=crop&w=1200&q=85", large: true },
  { name: "BBQ Favourites", label: "From the grill", text: "Charcoal-kissed classics with the unmistakable flavour of the grill.", image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=85" },
  { name: "Traditional Curries", label: "Pakistani kitchen", text: "Comforting, deeply seasoned dishes crafted for a proper dawat.", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=85" },
];

function Eyebrow({ children, light = false, centered = false }) {
  return <p className={`eyebrow ${light ? "" : "dark"} ${centered ? "centered" : ""}`}><span />{children}</p>;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const closeMenu = () => setOpen(false);
  useEffect(() => {
    const sections = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <>
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Sheikh Chargha home"><img src="/sheikh-chargha-logo.jpeg" alt="Sheikh Chargha House" /></a>
      <button className="menu-toggle" aria-label="Open navigation" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
      <nav className={`nav ${open ? "open" : ""}`} aria-label="Main navigation">{navItems.map((item) => <a className={item === "Home" ? "active" : ""} href={`#${item.toLowerCase()}`} onClick={closeMenu} key={item}>{item}</a>)}</nav>
      <a className="header-call" href="tel:03291030333">Call for delivery <b>↗</b></a>
    </header>
    <main>
      <section className="hero" id="home"><div className="hero-overlay" /><div className="hero-content"><Eyebrow light>C Block, City Housing, Jhelum</Eyebrow><h1>The taste of <em>tradition,</em><br />served with passion.</h1><p className="hero-copy">From the irresistible crackle of our chargha to smoky BBQ favourites, every plate is made for a meal worth remembering.</p><div className="hero-actions"><a className="button button-primary" href="#menu">Explore our menu <span>→</span></a><a className="button button-ghost" href="tel:03291030333">Order / Call now</a></div></div><a className="scroll-cue" href="#about"><span />Scroll to discover</a><div className="hero-card"><small>Delivery &amp; takeaway</small><a href="tel:03291030333">0329 1030333 <span>→</span></a></div></section>
      <div className="flavour-strip" aria-hidden="true"><span>Flame grilled</span><b>✦</b><span>City Housing, Jhelum</span><b>✦</b><span>Made fresh daily</span><b>✦</b><span>Flame grilled</span></div>
      <section className="about section" id="about" data-reveal><div className="about-photo photo-frame"><img src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=1000&q=85" alt="Freshly grilled Pakistani barbecue" /></div><div className="about-copy"><Eyebrow>Welcome to Sheikh Chargha</Eyebrow><h2>Honest food,<br /><em>made with heart.</em></h2><p>Sheikh Chargha brings the comfort and generous spirit of Pakistani dining to City Housing. Our kitchen celebrates flame-grilled BBQ, time-honoured recipes and the rich, unforgettable flavours that bring people to the table.</p><div className="trust-row"><span><b>100%</b> halal</span><span><b>7 days</b> a week</span><span><b>Fresh</b> every day</span></div><a href="#menu" className="text-link">Discover our favourites <span>→</span></a></div><div className="about-mark">SC</div></section>
      <section className="featured section" id="menu" data-reveal><div className="section-heading"><div><Eyebrow>From our kitchen</Eyebrow><h2>Made to be <em>shared.</em></h2></div><p>A selection of the dishes our guests come back for, prepared with care and bold Pakistani flavour.</p></div><div className="menu-grid">{dishes.map((dish) => <article className={`dish-card ${dish.large ? "large" : ""}`} key={dish.name}><img src={dish.image} alt={dish.name} /><div className="dish-info"><p className="dish-kicker">{dish.label}</p><div><h3>{dish.name}</h3><span className="price">See menu</span></div><p>{dish.text}</p><button className="quick-add" onClick={() => { setSubmitted(false); setOrderOpen(true); }}>Start an order <span>+</span></button></div></article>)}</div><a className="button button-outline" href="/sheikh-chargha-menu.pdf" target="_blank">View full menu <span>→</span></a></section>
      <section className="categories section" data-reveal><Eyebrow centered>Something for every craving</Eyebrow><div className="category-list">{["BBQ", "Pizza", "Pakistani", "Chinese", "Steaks", "Pasta"].map((category, i) => <a href="#menu" key={category}>{category}<span>0{i + 1}</span></a>)}</div></section>
      <section className="signature" data-reveal><div className="signature-image"><img src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1400&q=90" alt="A beautifully presented roasted chargha" /></div><div className="signature-content"><Eyebrow light>The house speciality</Eyebrow><h2>Meet the<br /><em>legend.</em></h2><p>Golden, fragrant and gloriously tender. The Sheikh Special Chargha is our signature on a plate — a recipe built around patience, flavour and the joy of sharing good food.</p><button className="button button-primary" onClick={() => { setSubmitted(false); setOrderOpen(true); }}>Start your order <span>→</span></button></div><div className="seal">SHEIKH<br />CHAR GHA <small>★</small></div></section>
      <section className="contact section" id="contact" data-reveal><div className="contact-intro"><Eyebrow>Visit or call us</Eyebrow><h2>Your table is<br /><em>waiting.</em></h2><p>Good food tastes even better when it is shared. Visit us in City Housing or call for your favourite Sheikh Chargha meal.</p><a className="phone-link" href="tel:03291030333">0329 1030333 <span>→</span></a></div><div className="map-card"><div className="map-pattern" /><div className="map-pin">✦</div><div className="map-label"><strong>Sheikh Chargha</strong><span>C Block, City Housing, Jhelum</span></div><i className="road road-one" /><i className="road road-two" /><i className="road road-three" /></div></section>
    </main>
    <footer><div className="footer-top"><a className="footer-brand" href="#home"><span>Sheikh</span> Chargha <small>House</small></a><p>Flavour, tradition and a warm welcome — always.</p><button className="button button-primary" onClick={() => { setSubmitted(false); setOrderOpen(true); }}>Order for delivery <span>→</span></button></div><div className="footer-bottom"><span>© 2026 Sheikh Chargha</span><span>C Block, City Housing, Jhelum</span><div>{navItems.map((item) => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}</div></div></footer>
    {orderOpen && <div className="order-backdrop" role="presentation" onMouseDown={() => setOrderOpen(false)}><section className="order-panel" role="dialog" aria-modal="true" aria-labelledby="order-title" onMouseDown={(event) => event.stopPropagation()}><button className="close-order" aria-label="Close order form" onClick={() => setOrderOpen(false)}>×</button>{submitted ? <div className="order-success"><span>✓</span><p className="eyebrow dark">Order request received</p><h2>We&apos;ll be in touch<br /><em>very soon.</em></h2><p>For a quicker order, call us directly at <a href="tel:03291030333">0329 1030333</a>.</p><button className="button button-primary" onClick={() => setOrderOpen(false)}>Continue browsing <span>→</span></button></div> : <><p className="eyebrow dark">Fast delivery &amp; takeaway</p><h2 id="order-title">What are you<br /><em>craving?</em></h2><p className="order-copy">Send a quick order request and our team will confirm it with you.</p><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}><label>Your name<input required name="name" placeholder="Your name" /></label><label>Phone number<input required name="phone" type="tel" placeholder="03xx xxx xxxx" /></label><label>Choose a favourite<select name="dish" defaultValue=""><option value="" disabled>Select a dish</option><option>Sheikh Special Chargha</option><option>BBQ Favourites</option><option>Traditional Curries</option><option>Something else</option></select></label><button className="button button-primary" type="submit">Send order request <span>→</span></button></form></>}</section></div>}
  </>;
}
