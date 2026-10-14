// Local Motion Services — homepage
// Warm off-white paper, deep blue, red accent, Fraunces display over Inter.
// Responsive from 1440px down to 360px. Breakpoints: 1100 (nav collapses), 960 (hero/contact stack),
// 900 (section heads stack), 640 (single-column cards, phone layout).
const { useState: useStateC, useEffect: useEffectC, useRef: useRefC } = React;
const DC_SERVICES = window.LMS_SERVICES;
const DC_GROUPS = window.LMS_GROUP_LABELS;
const DC_INFO = window.LMS_INFO;

// ---------- Icons (inline stroke SVG, inherit currentColor) ----------
const Icon = ({ d, size = 18, sw = 2, children }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw}
       strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    {d ? <path d={d} /> : children}
  </svg>
);
const PHONE_D = 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z';
const IcPhone = (p) => <Icon {...p} d={PHONE_D} />;
const IcArrow = (p) => <Icon {...p} d="M5 12h14M13 5l7 7-7 7" />;
const IcBolt = (p) => <Icon {...p} d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />;
const IcPin = (p) => <Icon {...p}><path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></Icon>;
const IcDoc = (p) => <Icon {...p}><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></Icon>;
const IcLayers = (p) => <Icon {...p}><path d="m12 3 9 5-9 5-9-5 9-5z" /><path d="m3 13 9 5 9-5" /></Icon>;
const IcMail = (p) => <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Icon>;
const IcClock = (p) => <Icon {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Icon>;
const IcMenu = (p) => <Icon {...p} d="M4 7h16M4 12h16M4 17h16" />;
const IcClose = (p) => <Icon {...p} d="M6 6l12 12M18 6 6 18" />;

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const DC_CSS = `
.dc-root{
  --bg:#F6F4EE; --card:#FFFFFF; --ink:#0E1726; --ink-2:#1B2638;
  --blue:#1F3FA8; --blue-2:#15307F; --blue-soft:#E8EDFA;
  --red:#E71D24; --red-2:#B81118; --red-soft:#FCE7E8;
  --mute:#5A6478; --hair:#E4E2D8; --hair-2:#D4D1C5;
  --gutter:40px; --sec:112px; --head-h:76px;
  font-family:'Inter',system-ui,-apple-system,'Segoe UI',sans-serif; background:var(--bg); color:var(--ink);
  font-size:16px; line-height:1.5; -webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility;
  overflow-x:clip;
}
@media (max-width:1024px){ .dc-root{--gutter:32px; --sec:96px} }
@media (max-width:640px){ .dc-root{--gutter:20px; --sec:72px; --head-h:64px} }

.dc-root *{box-sizing:border-box}
.dc-root img{max-width:100%}
.dc-root a{color:inherit;text-decoration:none}
.dc-root button{font:inherit;cursor:pointer;border:none;background:none;color:inherit}
.dc-root :focus-visible{outline:2px solid var(--blue);outline-offset:3px;border-radius:6px}
.dc-root .on-dark :focus-visible{outline-color:#fff}
.dc-root [id]{scroll-margin-top:calc(var(--head-h) + 16px)}
.dc-root .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}

.dc-root .wrap{max-width:1320px;margin:0 auto;padding:0 var(--gutter)}
.dc-root .sec{padding:var(--sec) 0}
.dc-root .display{font-family:'Fraunces',Georgia,serif;font-weight:500;letter-spacing:-0.025em;line-height:1.02}
.dc-root .display em{font-style:italic;font-weight:400}
.dc-root .mono{font-family:'JetBrains Mono',ui-monospace,monospace}
.dc-root .label{font-family:'Inter',sans-serif;text-transform:uppercase;font-size:11.5px;letter-spacing:.12em;font-weight:600;line-height:1.3}
.dc-root .eyebrow{display:block;color:var(--red-2);margin-bottom:18px}
.dc-root .on-dark .eyebrow{color:var(--red)}
.dc-root .h2{font-size:clamp(34px,4.6vw,64px);margin:0;text-wrap:balance}
.dc-root .lead{font-size:17px;line-height:1.6;color:var(--ink-2);margin:0;max-width:500px;text-wrap:pretty}
.dc-root .accent-blue{color:var(--blue)}
.dc-root .accent-red{color:var(--red)}

/* Buttons */
.dc-root .btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:46px;padding:12px 22px;border-radius:999px;font-weight:500;font-size:15px;line-height:1.2;transition:background .2s ease,border-color .2s ease,transform .2s ease,box-shadow .2s ease;border:1px solid transparent;letter-spacing:-0.005em;white-space:nowrap}
.dc-root .btn-lg{min-height:52px;padding:14px 26px;font-size:15.5px}
.dc-root .btn-primary{background:var(--blue);color:#fff}
.dc-root .btn-primary:hover{background:var(--blue-2);transform:translateY(-1px);box-shadow:0 8px 20px rgba(31,63,168,.28)}
.dc-root .btn-red{background:var(--red);color:#fff}
.dc-root .btn-red:hover{background:var(--red-2);transform:translateY(-1px);box-shadow:0 8px 20px rgba(231,29,36,.32)}
.dc-root .btn-ghost{background:#fff;color:var(--ink);border-color:var(--hair-2)}
.dc-root .btn-ghost:hover{border-color:var(--ink);transform:translateY(-1px)}

.dc-root .pill{display:inline-flex;align-items:center;gap:10px;padding:8px 14px;border-radius:999px;background:var(--blue-soft);color:var(--blue);font-weight:500;font-size:13.5px;line-height:1.3}
.dc-root .pulse-dot{width:7px;height:7px;flex:none;border-radius:999px;background:var(--red);position:relative}
.dc-root .pulse-dot::after{content:"";position:absolute;inset:-4px;border-radius:999px;border:1.5px solid var(--red);animation:dc-pulse 1.8s ease-out infinite}
@keyframes dc-pulse{0%{transform:scale(.6);opacity:1}100%{transform:scale(1.6);opacity:0}}

.dc-root .ul-link{position:relative}
.dc-root .ul-link::after{content:"";position:absolute;left:0;right:0;bottom:-3px;height:1.5px;background:currentColor;transform:scaleX(0);transform-origin:left;transition:transform .3s cubic-bezier(.2,.8,.2,1)}
.dc-root .ul-link:hover::after{transform:scaleX(1)}

.dc-root .card{background:var(--card);border:1px solid var(--hair);border-radius:20px;overflow:hidden;transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease}
.dc-root .card-hover:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(14,23,38,.08);border-color:var(--hair-2)}

/* ---------- Top bar ---------- */
.dc-root .topbar{background:var(--ink);color:#fff;font-size:13px;font-weight:500}
.dc-root .topbar .wrap{display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:38px}
.dc-root .topbar-l{display:flex;align-items:center;gap:10px;opacity:.9}
.dc-root .topbar-r{display:flex;align-items:center;gap:24px;opacity:.78}
.dc-root .topbar .short{display:none}

/* ---------- Header ---------- */
.dc-root .site-head{position:sticky;top:0;z-index:80;background:rgba(246,244,238,.9);-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);border-bottom:1px solid var(--hair)}
.dc-root .head-row{display:flex;align-items:center;justify-content:space-between;gap:24px;height:var(--head-h)}
.dc-root .brand{display:flex;align-items:center;gap:14px;flex:none;min-height:46px}
.dc-root .brand img{height:44px;width:auto;display:block}
.dc-root .brand-sub{padding-left:14px;border-left:1px solid var(--hair-2);line-height:1.3}
.dc-root .brand-sub b{display:block;font-size:12.5px;color:var(--ink-2);font-weight:600;letter-spacing:.01em}
.dc-root .brand-sub span{display:block;font-size:11.5px;color:var(--mute);margin-top:2px}
.dc-root .main-nav{display:flex;align-items:center;gap:32px}
.dc-root .main-nav a{font-size:15px;font-weight:500;padding:6px 0}
.dc-root .head-actions{display:flex;align-items:center;gap:10px;flex:none}
.dc-root .call-btn .call-word{display:none}
.dc-root .menu-btn{display:none;width:46px;height:46px;border-radius:999px;align-items:center;justify-content:center;border:1px solid var(--hair-2);background:#fff;color:var(--ink)}
.dc-root .menu-panel{display:none}

@media (max-width:1100px){
  .dc-root .main-nav, .dc-root .head-quote{display:none}
  .dc-root .menu-btn{display:inline-flex}
  .dc-root .call-btn{background:var(--red);color:#fff;border-color:var(--red)}
  .dc-root .call-btn:hover{background:var(--red-2);border-color:var(--red-2)}
  .dc-root .menu-panel{display:block;position:absolute;left:0;right:0;top:100%;background:var(--bg);border-bottom:1px solid var(--hair);box-shadow:0 24px 40px rgba(14,23,38,.12);max-height:calc(100vh - var(--head-h));overflow-y:auto;
    visibility:hidden;opacity:0;transform:translateY(-8px);transition:opacity .2s ease,transform .2s ease,visibility 0s linear .2s}
  .dc-root .menu-panel.open{visibility:visible;opacity:1;transform:none;transition:opacity .2s ease,transform .2s ease}
  .dc-root .menu-panel nav{display:flex;flex-direction:column;padding:8px 0}
  .dc-root .menu-panel nav a{display:flex;align-items:center;justify-content:space-between;min-height:56px;font-family:'Fraunces',Georgia,serif;font-size:24px;font-weight:500;letter-spacing:-.02em;border-bottom:1px solid var(--hair)}
  .dc-root .menu-panel nav a svg{color:var(--mute)}
  .dc-root .menu-ctas{display:grid;gap:10px;padding:20px 0 24px}
  .dc-root .menu-ctas .btn{width:100%;min-height:54px;font-size:16px}
  .dc-root .menu-meta{padding:0 0 24px;font-size:13.5px;color:var(--mute);line-height:1.6}
}
@media (max-width:960px){ .dc-root .topbar-r{display:none} }
@media (max-width:720px){
  .dc-root .brand-sub{display:none}
  .dc-root .topbar .long{display:none}
  .dc-root .topbar .short{display:inline}
}
@media (max-width:640px){
  .dc-root .brand img{height:36px}
  .dc-root .head-row{gap:12px}
  .dc-root .call-btn{padding:10px 16px}
}
@media (max-width:440px){
  .dc-root .call-btn .call-num{display:none}
  .dc-root .call-btn .call-word{display:inline}
  .dc-root .call-btn{min-width:96px}
}

/* ---------- Hero ---------- */
.dc-root .hero{padding:72px 0 104px;position:relative;overflow:hidden}
.dc-root .hero-glow{position:absolute;top:0;right:-200px;width:700px;height:700px;border-radius:50%;background:radial-gradient(circle, var(--blue-soft) 0%, transparent 70%);pointer-events:none}
.dc-root .hero-grid{display:grid;grid-template-columns:1.05fr 1fr;gap:72px;align-items:center;position:relative}
.dc-root .hero h1{font-size:clamp(40px,6.3vw,88px);margin:24px 0 24px;color:var(--ink)}
.dc-root .hero h1 em{color:var(--blue)}
.dc-root .hero-copy{font-size:18.5px;line-height:1.55;color:var(--ink-2);max-width:520px;margin:0 0 36px;text-wrap:pretty}
.dc-root .hero-ctas{display:flex;gap:12px;flex-wrap:wrap}
.dc-root .hero-call{display:none}
.dc-root .stats{display:grid;grid-template-columns:repeat(4,auto);justify-content:start;gap:24px 40px;margin-top:48px;padding-top:32px;border-top:1px solid var(--hair-2)}
.dc-root .stat-n{font-size:32px;color:var(--ink)}
.dc-root .stat-l{font-size:13px;color:var(--mute);margin-top:6px}
.dc-root .hero-media{position:relative}
.dc-root .hero-frame{position:relative;border-radius:24px;overflow:hidden;border:1px solid var(--hair);box-shadow:0 30px 80px rgba(14,23,38,.18);aspect-ratio:4/5;background:var(--blue-soft)}
.dc-root .hero-frame img{width:100%;height:100%;object-fit:cover;display:block}
.dc-root .onsite{position:absolute;top:20px;left:20px;padding:8px 14px;border-radius:999px;background:rgba(255,255,255,.94);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:flex;align-items:center;gap:8px;font-size:12px;font-weight:600}
.dc-root .float-quote{margin:0;position:absolute;bottom:-32px;left:-40px;max-width:304px;background:#fff;padding:20px 22px;border-radius:18px;border:1px solid var(--hair);box-shadow:0 20px 50px rgba(14,23,38,.12)}
.dc-root .float-quote p{font-size:14px;line-height:1.5;color:var(--ink-2);margin:0;font-style:italic}
.dc-root .who{display:flex;align-items:center;gap:10px;margin-bottom:12px}
.dc-root .avatar{width:36px;height:36px;flex:none;border-radius:50%;background:var(--red-soft);color:var(--red-2);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px}
.dc-root .who b{display:block;font-size:13.5px;font-weight:600}
.dc-root .who span{display:block;font-size:12px;color:var(--mute)}
.dc-root .float-sla{position:absolute;top:48px;right:-32px;background:var(--ink);color:#fff;padding:18px 22px;border-radius:16px;box-shadow:0 18px 40px rgba(14,23,38,.25)}
.dc-root .float-sla .label{color:var(--red);margin-bottom:6px}
.dc-root .float-sla .display{font-size:28px}
.dc-root .float-sla small{display:block;font-size:12px;color:rgba(255,255,255,.7);margin-top:6px}

@media (max-width:1320px){ .dc-root .float-sla{right:-16px} .dc-root .float-quote{left:-24px} }
@media (max-width:960px){
  .dc-root .hero{padding:48px 0 72px}
  .dc-root .hero-grid{grid-template-columns:1fr;gap:48px}
  .dc-root .hero-copy{max-width:600px}
  .dc-root .hero-frame{aspect-ratio:16/11}
  .dc-root .float-sla{right:16px;top:16px;padding:14px 18px}
  .dc-root .float-sla .display{font-size:24px}
  .dc-root .float-quote{position:relative;left:auto;bottom:auto;max-width:420px;margin:-40px 16px 0 16px}
}
@media (max-width:640px){
  .dc-root .hero{padding:32px 0 56px}
  .dc-root .hero h1{margin:20px 0 18px}
  .dc-root .hero-copy{font-size:17px;margin-bottom:28px}
  .dc-root .hero-ctas{flex-direction:column}
  .dc-root .hero-ctas .btn{width:100%;min-height:54px}
  .dc-root .hero-call{display:inline-flex}
  .dc-root .hero-quote{background:#fff;color:var(--ink);border-color:var(--hair-2)}
  .dc-root .hero-more{display:none}
  .dc-root .stats{grid-template-columns:1fr 1fr;gap:24px 16px;margin-top:36px;padding-top:28px}
  .dc-root .stat-n{font-size:28px}
  .dc-root .hero-frame{aspect-ratio:4/3;border-radius:18px}
  .dc-root .onsite{top:12px;left:12px;font-size:11.5px;padding:7px 12px}
  .dc-root .float-sla{right:12px;top:12px;padding:10px 14px;border-radius:12px}
  .dc-root .float-sla .label{margin-bottom:4px}
  .dc-root .float-sla .display{font-size:20px}
  .dc-root .float-sla small{display:none}
  .dc-root .float-quote{margin:-24px 12px 0;padding:18px}
  .dc-root .pill{font-size:13px}
}

/* ---------- Trust names ---------- */
.dc-root .trust{padding:32px 0 24px}
.dc-root .trust .label{color:var(--mute);text-align:center;margin-bottom:28px;text-wrap:balance}
.dc-root .trust-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:24px 32px;align-items:center}
.dc-root .trust-grid div{font-size:19px;color:var(--ink);opacity:.55;text-align:center;line-height:1.2}
@media (max-width:960px){ .dc-root .trust-grid{grid-template-columns:repeat(3,1fr)} }
@media (max-width:560px){ .dc-root .trust{padding:8px 0 0} .dc-root .trust-grid{grid-template-columns:1fr 1fr;gap:18px 16px} .dc-root .trust-grid div{font-size:17px} }

/* ---------- Section heads ---------- */
.dc-root .sec-head{display:grid;grid-template-columns:1fr 1fr;gap:24px 64px;align-items:end;margin-bottom:48px}
.dc-root .sec-head.wide{grid-template-columns:1.25fr 1fr}
@media (max-width:900px){
  .dc-root .sec-head, .dc-root .sec-head.wide{grid-template-columns:1fr;margin-bottom:36px}
}

/* ---------- Services ---------- */
.dc-root .chips{display:flex;gap:10px;margin-bottom:32px;flex-wrap:wrap}
.dc-root .chip{display:inline-flex;align-items:center;gap:8px;min-height:44px;padding:0 18px;border-radius:999px;border:1px solid var(--hair-2);background:#fff;font-weight:500;font-size:14px;transition:all .15s ease;color:var(--ink-2)}
.dc-root .chip span{color:var(--mute);font-variant-numeric:tabular-nums}
.dc-root .chip:hover{border-color:var(--ink);color:var(--ink)}
.dc-root .chip[aria-pressed="true"]{background:var(--ink);color:#fff;border-color:var(--ink)}
.dc-root .chip[aria-pressed="true"] span{color:rgba(255,255,255,.7)}
.dc-root .svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.dc-root .svc-card{display:flex;flex-direction:column}
.dc-root .svc-thumb{aspect-ratio:20/9;overflow:hidden;position:relative;background:var(--blue-soft)}
.dc-root .svc-thumb img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .5s ease}
.dc-root .svc-card:hover .svc-thumb img{transform:scale(1.05)}
.dc-root .svc-group{position:absolute;top:14px;left:14px;padding:5px 11px;border-radius:999px;background:rgba(255,255,255,.94);font-size:11.5px;font-weight:600;letter-spacing:.02em}
.dc-root .svc-body{padding:24px 24px 22px;display:flex;flex-direction:column;flex:1}
.dc-root .svc-n{font-size:11px;color:var(--mute);letter-spacing:.04em;margin-bottom:10px}
.dc-root .svc-body h3{font-size:26px;margin:0 0 10px;color:var(--ink)}
.dc-root .svc-body p{font-size:14.5px;line-height:1.55;color:var(--ink-2);margin:0 0 18px}
.dc-root .tags{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:20px}
.dc-root .tags span{padding:4px 10px;background:var(--blue-soft);color:var(--blue);font-size:12px;border-radius:999px;font-weight:500}
.dc-root .svc-link{margin-top:auto;align-self:flex-start;display:inline-flex;align-items:center;gap:6px;min-height:44px;margin-bottom:-10px;font-size:14.5px;font-weight:600;color:var(--red-2)}
.dc-root .svc-link svg{transition:transform .25s ease}
.dc-root .svc-card:hover .svc-link svg{transform:translateX(4px)}
@media (max-width:1024px){ .dc-root .svc-grid{grid-template-columns:repeat(2,1fr)} }
@media (max-width:640px){
  .dc-root .chips{flex-wrap:nowrap;overflow-x:auto;margin:0 calc(var(--gutter) * -1) 24px;padding:2px var(--gutter);scrollbar-width:none}
  .dc-root .chips::-webkit-scrollbar{display:none}
  .dc-root .chip{flex:none}
  .dc-root .svc-grid{grid-template-columns:1fr;gap:16px}
  .dc-root .svc-body{padding:20px 20px 18px}
  .dc-root .svc-body h3{font-size:24px}
}

/* ---------- Why us ---------- */
.dc-root .why{background:var(--ink);color:#fff;border-radius:40px 40px 0 0;margin-top:8px;position:relative;overflow:hidden}
.dc-root .why-glow{position:absolute;top:-100px;right:-100px;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle, rgba(231,29,36,.18) 0%, transparent 70%);pointer-events:none}
.dc-root .why .h2 em{color:var(--red)}
.dc-root .why .lead{color:rgba(255,255,255,.78)}
.dc-root .why .sec-head{margin-bottom:64px}
.dc-root .why-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}
.dc-root .why-card{padding:28px;background:rgba(255,255,255,.04);border-radius:18px;border:1px solid rgba(255,255,255,.09)}
.dc-root .why-ic{width:44px;height:44px;border-radius:12px;background:var(--red);color:#fff;display:flex;align-items:center;justify-content:center;margin-bottom:28px}
.dc-root .why-card .display{font-size:32px;margin-bottom:10px;color:#fff}
.dc-root .why-card h3{font-size:14px;font-weight:600;color:var(--red);margin:0 0 12px;letter-spacing:.005em}
.dc-root .why-card p{font-size:14.5px;line-height:1.55;color:rgba(255,255,255,.72);margin:0}
@media (max-width:1024px){ .dc-root .why-grid{grid-template-columns:repeat(2,1fr)} }
@media (max-width:640px){
  .dc-root .why{border-radius:28px 28px 0 0}
  .dc-root .why .sec-head{margin-bottom:40px}
  .dc-root .why-grid{grid-template-columns:1fr;gap:12px}
  .dc-root .why-card{padding:22px;display:grid;grid-template-columns:44px 1fr;column-gap:16px}
  .dc-root .why-ic{margin:0;grid-row:span 3}
  .dc-root .why-card .display{font-size:26px;margin-bottom:4px}
  .dc-root .why-card h3{margin-bottom:8px}
}

/* ---------- How it works ---------- */
.dc-root .center-head{text-align:center;margin:0 auto 56px;max-width:760px}
.dc-root .center-head .h2 em{color:var(--blue)}
.dc-root .steps{list-style:none;margin:0;padding:0;display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.dc-root .step{padding:32px}
.dc-root .step-top{display:flex;align-items:center;gap:16px;margin-bottom:22px}
.dc-root .step-n{width:48px;height:48px;flex:none;border-radius:12px;background:var(--blue-soft);color:var(--blue);display:flex;align-items:center;justify-content:center;font-weight:600;font-size:18px;font-family:'Fraunces',Georgia,serif}
.dc-root .step h3{font-size:28px;margin:0}
.dc-root .step-sub{font-size:13px;color:var(--mute);margin-top:4px}
.dc-root .step p{font-size:15px;line-height:1.6;color:var(--ink-2);margin:0}
@media (max-width:900px){ .dc-root .steps{grid-template-columns:1fr;gap:12px;max-width:620px;margin:0 auto} .dc-root .center-head{margin-bottom:40px} }
@media (max-width:640px){ .dc-root .step{padding:24px} .dc-root .step h3{font-size:24px} }

/* ---------- Testimonial ---------- */
.dc-root .testi{background:var(--blue-soft)}
.dc-root .testi-inner{max-width:920px;margin:0 auto;text-align:center}
.dc-root .testi .label{color:var(--blue);margin-bottom:28px;display:flex;justify-content:center;align-items:center;gap:14px}
.dc-root .stars{letter-spacing:.3em}
.dc-root .testi blockquote{margin:0 0 40px}
.dc-root .testi blockquote p{font-size:clamp(24px,3.4vw,42px);line-height:1.28;font-style:italic;font-weight:400;color:var(--ink);margin:0;text-wrap:pretty}
.dc-root .testi .who{justify-content:center;gap:14px;margin:0}
.dc-root .testi .avatar{width:48px;height:48px;background:var(--red);color:#fff;font-size:15px}
.dc-root .testi .who b{font-size:16px}
.dc-root .testi .who span{font-size:13.5px}
.dc-root .testi .who > div{text-align:left}
@media (max-width:640px){ .dc-root .testi blockquote{margin-bottom:28px} .dc-root .testi .label{margin-bottom:20px} }

/* ---------- Contact ---------- */
.dc-root .contact-grid{display:grid;grid-template-columns:1fr 1.25fr;gap:72px;align-items:start}
.dc-root .contact .h2{font-size:clamp(34px,4.4vw,56px);margin-bottom:24px}
.dc-root .contact .h2 em{color:var(--blue)}
.dc-root .contact .lead{max-width:400px;margin-bottom:40px}
.dc-root .info-list{display:grid;gap:24px;margin:0;padding:0;list-style:none}
.dc-root .info-list li{display:flex;gap:16px;align-items:flex-start}
.dc-root .info-ic{width:44px;height:44px;border-radius:12px;background:#fff;border:1px solid var(--hair);display:flex;align-items:center;justify-content:center;color:var(--blue);flex:none}
.dc-root .info-list .label{color:var(--mute);margin-bottom:6px;margin-top:2px}
.dc-root .info-v{font-size:15.5px;line-height:1.55;color:var(--ink-2)}
.dc-root a.info-v{display:inline-block;padding:10px 0;margin:-10px 0}
.dc-root .info-phone{font-size:32px;color:var(--red-2);display:inline-block;line-height:1.1;padding:6px 0}
.dc-root .info-phone:hover{color:var(--red)}
.dc-root .form-card{padding:40px}
.dc-root .form-card h3{font-size:30px;margin:0 0 8px}
.dc-root .form-card .sub{font-size:14px;color:var(--mute);margin:0 0 28px}
.dc-root .form-row{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px}
.dc-root .fld{margin-bottom:16px}
.dc-root .form-row .fld{margin-bottom:0}
.dc-root .fld label{display:block;margin-bottom:8px;color:var(--ink)}
.dc-root .field{width:100%;min-height:48px;background:#fff;border:1px solid var(--hair-2);border-radius:10px;padding:12px 16px;color:var(--ink);font:inherit;font-size:15px;outline:none;transition:border-color .15s ease,box-shadow .15s ease}
.dc-root textarea.field{min-height:112px;resize:vertical;line-height:1.5}
.dc-root select.field{appearance:none;-webkit-appearance:none;padding-right:44px;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235A6478' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 16px center}
.dc-root .field:focus{border-color:var(--blue);box-shadow:0 0 0 3px var(--blue-soft)}
.dc-root .field::placeholder{color:#8A92A3}
.dc-root .submit{width:100%;margin-top:8px}
.dc-root .fine{font-size:12.5px;color:var(--mute);text-align:center;margin:14px 0 0;line-height:1.5}
.dc-root .fine a{color:var(--ink-2);font-weight:600;white-space:nowrap;display:inline-block;padding:12px 2px;margin:-12px 0}
.dc-root .sent{margin-top:16px;padding:14px 16px;border-radius:12px;background:var(--blue-soft);color:var(--blue-2);font-size:14px;line-height:1.5}
@media (max-width:960px){
  .dc-root .contact-grid{grid-template-columns:1fr;gap:48px}
  .dc-root .info-list{grid-template-columns:1fr 1fr;gap:24px 32px}
}
@media (max-width:640px){
  .dc-root .info-list{grid-template-columns:1fr;gap:20px}
  .dc-root .contact .lead{margin-bottom:32px}
  .dc-root .form-card{padding:24px 20px;border-radius:18px}
  .dc-root .form-card h3{font-size:26px}
  .dc-root .form-row{grid-template-columns:1fr;gap:16px}
  .dc-root .field{font-size:16px}
  .dc-root .info-phone{font-size:30px}
}

/* ---------- Footer ---------- */
.dc-root .foot{background:var(--ink);color:#fff;padding:80px 0 28px}
.dc-root .foot-grid{display:grid;grid-template-columns:1.2fr 1.5fr .8fr 1fr;gap:48px;padding-bottom:56px;border-bottom:1px solid rgba(255,255,255,.12)}
.dc-root .foot-logo{display:inline-flex;background:#fff;padding:14px 18px;border-radius:14px;margin-bottom:22px}
.dc-root .foot-logo img{height:42px;width:auto;display:block}
.dc-root .foot p{font-size:14px;line-height:1.6;color:rgba(255,255,255,.66);max-width:300px;margin:0 0 20px}
.dc-root .foot-phone{font-size:26px;color:#fff;display:inline-flex;align-items:center;gap:10px;min-height:44px}
.dc-root .foot-phone svg{color:var(--red)}
.dc-root .foot .label{color:var(--red);margin-bottom:16px}
.dc-root .foot ul{list-style:none;padding:0;margin:0;display:grid;gap:2px 24px}
.dc-root .foot ul.two{grid-template-columns:1fr 1fr}
.dc-root .foot li a{display:inline-block;padding:5px 0;font-size:14px;color:rgba(255,255,255,.78)}
.dc-root .foot li a:hover{color:#fff}
.dc-root .foot-addr{font-size:14px;line-height:1.7;color:rgba(255,255,255,.78);font-style:normal}
.dc-root .foot-addr a{display:inline-block;margin-top:6px;padding:10px 0}
.dc-root .foot-base{display:flex;justify-content:space-between;align-items:center;padding-top:28px;gap:12px 24px;flex-wrap:wrap;color:rgba(255,255,255,.55);font-size:12.5px}
@media (max-width:1024px){ .dc-root .foot-grid{grid-template-columns:1fr 1fr;gap:48px 40px} }
@media (max-width:640px){
  .dc-root .foot{padding:56px 0 24px}
  .dc-root .foot-grid{grid-template-columns:1fr;gap:36px;padding-bottom:36px}
  .dc-root .foot li a{padding:10px 0;font-size:15px}
  .dc-root .foot ul{gap:0 16px}
  .dc-root .foot-base{flex-direction:column;align-items:flex-start}
}

@media (prefers-reduced-motion: reduce){
  .dc-root *, .dc-root *::before, .dc-root *::after{animation:none !important;transition:none !important}
}
`;

function DC_Homepage() {
  const [filter, setFilter] = useStateC('all');
  const [menuOpen, setMenuOpen] = useStateC(false);
  const [service, setService] = useStateC('');
  const [sent, setSent] = useStateC(false);
  const menuBtnRef = useRefC(null);
  const visible = filter === 'all' ? DC_SERVICES : DC_SERVICES.filter(s => s.group === filter);
  const count = (g) => DC_SERVICES.filter(s => s.group === g).length;

  // Close the mobile menu on Escape, and when the viewport grows past the breakpoint.
  useEffectC(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') { setMenuOpen(false); menuBtnRef.current && menuBtnRef.current.focus(); } };
    const mq = window.matchMedia('(min-width: 1101px)');
    const onMq = () => { if (mq.matches) setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    mq.addEventListener ? mq.addEventListener('change', onMq) : mq.addListener(onMq);
    return () => {
      document.removeEventListener('keydown', onKey);
      mq.removeEventListener ? mq.removeEventListener('change', onMq) : mq.removeListener(onMq);
    };
  }, [menuOpen]);

  // No backend on GitHub Pages: the form opens the visitor's email app with the details filled in.
  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const svc = f.get('service') || 'General';
    const body = [
      `Name: ${f.get('name')}`,
      f.get('company') ? `Company: ${f.get('company')}` : null,
      `Email: ${f.get('email')}`,
      `Phone: ${f.get('phone')}`,
      `Service: ${svc}`,
      '',
      f.get('message'),
    ].filter(l => l !== null).join('\n');
    window.location.href = `mailto:${DC_INFO.email}?subject=${encodeURIComponent('Quote request: ' + svc)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const CallLabel = () => (<><span className="call-num">{DC_INFO.phoneDisplay}</span><span className="call-word">Call</span></>);

  return (
    <div className="dc-root" id="top">
      <style>{DC_CSS}</style>

      {/* Top trust bar */}
      <div className="topbar on-dark">
        <div className="wrap">
          <div className="topbar-l">
            <span className="pulse-dot"></span>
            <span className="long">24/7 Emergency Dispatch — Denver Metro & Front Range</span>
            <span className="short">24/7 Emergency Dispatch</span>
          </div>
          <div className="topbar-r">
            <a href={`mailto:${DC_INFO.email}`} className="ul-link">{DC_INFO.email}</a>
            <span>Licensed · Insured · Bonded</span>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header className="site-head">
        <div className="wrap head-row">
          <a href="#top" className="brand" onClick={() => setMenuOpen(false)}>
            <img src="img/lms-logo.png" alt="Local Motion Services" width="144" height="44" />
            <div className="brand-sub">
              <b>Property Services</b>
              <span>Denver · Front Range</span>
            </div>
          </a>
          <nav className="main-nav" aria-label="Main">
            {NAV.map(item => (
              <a key={item.label} href={item.href} className="ul-link">{item.label}</a>
            ))}
          </nav>
          <div className="head-actions">
            <a href={DC_INFO.phoneTel} className="btn btn-ghost call-btn" aria-label={`Call ${DC_INFO.phone}`}>
              <IcPhone size={15} />
              <CallLabel />
            </a>
            <a href="#contact" className="btn btn-primary head-quote">Get a quote <IcArrow size={14} /></a>
            <button ref={menuBtnRef} className="menu-btn" aria-expanded={menuOpen} aria-controls="menu-panel"
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(o => !o)}>
              {menuOpen ? <IcClose size={20} /> : <IcMenu size={20} />}
            </button>
          </div>
        </div>
        <div id="menu-panel" className={`menu-panel ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
          <div className="wrap">
            <nav aria-label="Mobile">
              {NAV.map(item => (
                <a key={item.label} href={item.href} tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>
                  {item.label} <IcArrow size={18} />
                </a>
              ))}
            </nav>
            <div className="menu-ctas">
              <a href={DC_INFO.phoneTel} className="btn btn-red" tabIndex={menuOpen ? 0 : -1}><IcPhone size={16} /> Call {DC_INFO.phoneDisplay}</a>
              <a href="#contact" className="btn btn-primary" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Get a free quote <IcArrow size={14} /></a>
            </div>
            <div className="menu-meta">Dispatch 24 / 7 / 365<br />{DC_INFO.addr1}, {DC_INFO.addr2}</div>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-glow" aria-hidden="true"></div>
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <div className="pill">
                  <span className="pulse-dot"></span>
                  Trusted by 200+ properties across Denver
                </div>
                <h1 className="display">
                  Property maintenance,<br />
                  <em>without the runaround.</em>
                </h1>
                <p className="hero-copy">
                  One contractor for every trade your property needs — landscape, snow, asphalt, paint, and nine more. One call covers it. Always Denver-local, and open 24/7.
                </p>
                <div className="hero-ctas">
                  <a href={DC_INFO.phoneTel} className="btn btn-red btn-lg hero-call"><IcPhone size={16} /> Call {DC_INFO.phoneDisplay}</a>
                  <a href="#contact" className="btn btn-red btn-lg hero-quote">Request a free quote <IcArrow size={14} /></a>
                  <a href="#services" className="btn btn-ghost btn-lg hero-more">See all 12 services</a>
                </div>
                <div className="stats">
                  {[['12', 'Services'], ['Quick', 'Emergency response'], ['24/7', 'Dispatch line'], ['200+', 'Properties served']].map(([n, l]) => (
                    <div key={l}>
                      <div className="display stat-n">{n}</div>
                      <div className="stat-l">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hero-media">
                <div className="hero-frame">
                  <img src="img/hero-snowplow.jpg" alt="Snowplow blade clearing a lot" width="2200" height="819" fetchpriority="high" />
                  <div className="onsite"><span className="pulse-dot"></span>Crew on-site · 02:14 AM</div>
                </div>
                <div className="float-sla on-dark">
                  <div className="label">Response</div>
                  <div className="display">Quick</div>
                  <small>Storm dispatch</small>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* SERVICES */}
        <section id="services" className="sec">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <div className="label eyebrow">Services</div>
                <h2 className="display h2">Twelve trades.<br /><em className="accent-blue">One phone call.</em></h2>
              </div>
              <p className="lead">
                We bid as a single contractor — no juggling subs, no finger-pointing. Filter by category to see what fits the property, or scroll the full roster.
              </p>
            </div>

            <div className="chips" role="group" aria-label="Filter services">
              {[['all', 'All services', DC_SERVICES.length], ['exterior', 'Exterior', count('exterior')], ['lot', 'Lot & pavement', count('lot')], ['specialty', 'Specialty', count('specialty')]].map(([k, l, c]) => (
                <button key={k} type="button" className="chip" aria-pressed={filter === k} onClick={() => setFilter(k)}>
                  {l} <span>{c}</span>
                </button>
              ))}
            </div>

            <div className="svc-grid">
              {visible.map(svc => (
                <article key={svc.id} id={svc.id} className="card card-hover svc-card">
                  <div className="svc-thumb">
                    <img src={svc.img} alt={svc.alt || ''} loading="lazy" decoding="async" />
                    <div className="svc-group">{DC_GROUPS[svc.group]}</div>
                  </div>
                  <div className="svc-body">
                    <div className="mono svc-n">SERVICE — {svc.n}</div>
                    <h3 className="display">{svc.name}</h3>
                    <p>{svc.blurb}</p>
                    <div className="tags">
                      {svc.tags.map(t => <span key={t}>{t}</span>)}
                    </div>
                    <a href="#contact" className="svc-link" onClick={() => setService(svc.name)}>
                      Get a quote <span className="sr-only">for {svc.name}</span> <IcArrow size={15} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section id="about" className="sec why on-dark">
          <div className="why-glow" aria-hidden="true"></div>
          <div className="wrap" style={{ position: 'relative' }}>
            <div className="sec-head wide">
              <div>
                <div className="label eyebrow">Why Local Motion</div>
                <h2 className="display h2">Built for property managers who answer to <em>owners.</em></h2>
              </div>
              <p className="lead">
                Curb appeal walks tenants through the door. Bad pavement walks them out. We obsess over the details that show up on your owner's monthly report — and the ones that don't, but should.
              </p>
            </div>
            <div className="why-grid">
              {[
                { Ic: IcBolt, title: '24/7 Dispatch', stat: 'Quick response', body: 'Storm or emergency, call any hour. We have the crews and equipment to respond fast.' },
                { Ic: IcPin, title: 'Denver-local', stat: 'Front Range', body: 'Based on Hampden Ave in Denver, serving the Metro area and the Front Range.' },
                { Ic: IcDoc, title: 'Budget-fit', stat: 'Your budget', body: 'We work with you to deliver professional service that fits within your budget.' },
                { Ic: IcLayers, title: 'Full-service', stat: '12 services', body: 'From landscaping in summer to snow removal in winter, one company for the whole property.' },
              ].map(p => (
                <div key={p.title} className="why-card">
                  <div className="why-ic"><p.Ic size={20} /></div>
                  <div className="display">{p.stat}</div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="sec">
          <div className="wrap">
            <div className="center-head">
              <div className="label eyebrow">How it works</div>
              <h2 className="display h2">Three steps from <em>call</em> to <em>crew.</em></h2>
            </div>
            <ol className="steps">
              {[
                { n: '01', t: 'Discuss', sub: 'Understand the need', body: 'You tell us what the property needs and what you expect from the service.' },
                { n: '02', t: 'Plan', sub: 'Custom scope', body: 'We put together a maintenance solution tailored to your property and its requirements.' },
                { n: '03', t: 'Execute', sub: 'Industry standards', body: 'We carry out the work following industry standards, with the most effective processes and methods.' },
              ].map(s => (
                <li key={s.n} className="card step">
                  <div className="step-top">
                    <div className="step-n" aria-hidden="true">{s.n}</div>
                    <div>
                      <h3 className="display">{s.t}</h3>
                      <div className="step-sub">{s.sub}</div>
                    </div>
                  </div>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* TESTIMONIAL */}
        <section className="sec testi" aria-label="Client testimonial">
          <div className="wrap">
            <figure className="testi-inner" style={{ margin: '0 auto' }}>
              <div className="label"><span className="stars" aria-label="Five stars">★★★★★</span><span>Client word</span></div>
              <blockquote>
                <p className="display">
                  "Local Motion handled the snow removal and painted the driveway at the tire store I managed in Sheridan. Easy to work with, and the work was done right."
                </p>
              </blockquote>
              <figcaption className="who">
                <div className="avatar" aria-hidden="true">TH</div>
                <div>
                  <b>Travis Haley</b>
                  <span>Former General Manager · Tire store, Sheridan, CO</span>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="sec contact">
          <div className="wrap">
            <div className="contact-grid">
              <div>
                <div className="label eyebrow">Contact</div>
                <h2 className="display h2">Tell us about<br /><em>the property.</em></h2>
                <p className="lead">We get back to you quickly. For emergencies, the dispatch line is open 24/7.</p>

                <ul className="info-list">
                  <li>
                    <div className="info-ic"><IcPhone size={18} /></div>
                    <div>
                      <div className="label">Dispatch · 24/7</div>
                      <a href={DC_INFO.phoneTel} className="display info-phone">{DC_INFO.phoneDisplay}</a>
                    </div>
                  </li>
                  <li>
                    <div className="info-ic"><IcPin size={18} /></div>
                    <div>
                      <div className="label">Office</div>
                      <address className="info-v" style={{ fontStyle: 'normal' }}>{DC_INFO.addr1}<br />{DC_INFO.addr2}</address>
                    </div>
                  </li>
                  <li>
                    <div className="info-ic"><IcMail size={18} /></div>
                    <div>
                      <div className="label">Email</div>
                      <a href={`mailto:${DC_INFO.email}`} className="ul-link info-v">{DC_INFO.email}</a>
                    </div>
                  </li>
                  <li>
                    <div className="info-ic"><IcClock size={18} /></div>
                    <div>
                      <div className="label">Hours</div>
                      <div className="info-v">Dispatch · 24 / 7 / 365</div>
                    </div>
                  </li>
                </ul>
              </div>

              <form className="card form-card" onSubmit={onSubmit}>
                <h3 className="display">Get a free quote</h3>
                <p className="sub">Quick response · No marketing spam · No bots</p>
                <div className="form-row">
                  <div className="fld"><label className="label" htmlFor="q-name">Your name *</label><input id="q-name" name="name" className="field" placeholder="Jane Doe" autoComplete="name" required /></div>
                  <div className="fld"><label className="label" htmlFor="q-company">Company</label><input id="q-company" name="company" className="field" placeholder="Acme Properties" autoComplete="organization" /></div>
                </div>
                <div className="form-row">
                  <div className="fld"><label className="label" htmlFor="q-email">Email *</label><input id="q-email" name="email" type="email" className="field" placeholder="jane@acme.com" autoComplete="email" required /></div>
                  <div className="fld"><label className="label" htmlFor="q-phone">Phone *</label><input id="q-phone" name="phone" type="tel" className="field" placeholder="(303) 555-0123" autoComplete="tel" required /></div>
                </div>
                <div className="fld">
                  <label className="label" htmlFor="q-service">Service of interest</label>
                  <select id="q-service" name="service" className="field" value={service} onChange={e => setService(e.target.value)}>
                    <option value="">— Pick one —</option>
                    {DC_SERVICES.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
                  </select>
                </div>
                <div className="fld">
                  <label className="label" htmlFor="q-msg">What does the property need? *</label>
                  <textarea id="q-msg" name="message" className="field" rows={4} placeholder="Lot size, timeline, budget — anything that helps us scope it right." required></textarea>
                </div>
                <button type="submit" className="btn btn-red btn-lg submit">Send message <IcArrow size={14} /></button>
                <p className="fine">Opens your email app with these details filled in. Rather talk? Call <a href={DC_INFO.phoneTel}>{DC_INFO.phoneDisplay}</a>.</p>
                {sent && (
                  <p className="sent" role="status">
                    Your email app should now be open with the message ready to send. If nothing opened, email us at <a href={`mailto:${DC_INFO.email}`} style={{ fontWeight: 600 }}>{DC_INFO.email}</a> or call {DC_INFO.phoneDisplay}.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="foot on-dark">
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <div className="foot-logo">
                <img src="img/lms-logo.png" alt="Local Motion Services" width="138" height="42" loading="lazy" />
              </div>
              <p>Reliable property maintenance for the Denver metro and Front Range. Twelve trades, one call, every season.</p>
              <a href={DC_INFO.phoneTel} className="display foot-phone"><IcPhone size={18} />{DC_INFO.phoneDisplay}</a>
            </div>
            <div>
              <div className="label">Services</div>
              <ul className="two">
                {DC_SERVICES.map(s => <li key={s.id}><a href={`#${s.id}`} onClick={() => setFilter('all')}>{s.name}</a></li>)}
              </ul>
            </div>
            <div>
              <div className="label">Company</div>
              <ul>
                {[['Home', '#top'], ['About', '#about'], ['How it works', '#how-it-works'], ['Contact', '#contact']].map(([l, h]) => (
                  <li key={l}><a href={h}>{l}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="label">Office</div>
              <address className="foot-addr">
                {DC_INFO.addr1}<br />{DC_INFO.addr2}<br />
                <a href={`mailto:${DC_INFO.email}`} className="ul-link">{DC_INFO.email}</a>
              </address>
            </div>
          </div>
          <div className="foot-base">
            <div>© 2026 Local Motion Services, Inc. · All rights reserved</div>
            <div>Licensed · Insured · Bonded — Denver Metro & Front Range</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

window.DC_Homepage = DC_Homepage;
