// Direction C — Corporate Modern / Trust & Clarity
// Clean white + deep teal + warm orange. Sophisticated B2B feel, soft shadows, rounded radii.
// Inspired by premium-services SaaS: Stripe, Mercury, Vercel for trades.
const { useState: useStateC, useEffect: useEffectC } = React;
const DC_SERVICES = window.LMS_SERVICES;
const DC_GROUPS = window.LMS_GROUP_LABELS;
const DC_INFO = window.LMS_INFO;

function DC_Homepage() {
  const [filter, setFilter] = useStateC('all');
  const visible = filter === 'all' ? DC_SERVICES : DC_SERVICES.filter(s => s.group === filter);

  return (
    <div className="dc-root">
      <style>{`
        .dc-root{
          --dc-bg:#F6F4EE; --dc-card:#FFFFFF; --dc-ink:#0E1726; --dc-ink-2:#1B2638;
          --dc-teal:#1F3FA8; --dc-teal-2:#15307F; --dc-teal-soft:#E8EDFA;
          --dc-orange:#E71D24; --dc-orange-soft:#FCE7E8;
          --dc-mute:#5A6478; --dc-hair:#E4E2D8; --dc-hair-2:#D4D1C5;
          font-family:'Inter',system-ui,sans-serif; background:var(--dc-bg); color:var(--dc-ink);
          font-size:16px; line-height:1.5; -webkit-font-smoothing:antialiased;
        }
        .dc-root *{box-sizing:border-box}
        .dc-root .display{font-family:'Fraunces',Georgia,serif;font-weight:500;letter-spacing:-0.025em;line-height:1.0}
        .dc-root .mono{font-family:'JetBrains Mono',ui-monospace,monospace}
        .dc-root .label{font-family:'Inter',sans-serif;text-transform:uppercase;font-size:11px;letter-spacing:0.12em;font-weight:600}
        .dc-root a{color:inherit;text-decoration:none}
        .dc-root button{font:inherit;cursor:pointer;border:none;background:none;color:inherit}
        .dc-root .wrap{max-width:1320px;margin:0 auto;padding:0 40px}
        .dc-root .btn{display:inline-flex;align-items:center;gap:8px;padding:13px 22px;border-radius:999px;font-weight:500;font-size:14.5px;transition:all .2s ease;border:1px solid transparent;letter-spacing:-0.005em}
        .dc-root .btn-primary{background:var(--dc-teal);color:#fff}
        .dc-root .btn-primary:hover{background:var(--dc-teal-2);transform:translateY(-1px);box-shadow:0 8px 20px rgba(31,63,168,.28)}
        .dc-root .btn-orange{background:var(--dc-orange);color:#fff}
        .dc-root .btn-orange:hover{background:#B81118;transform:translateY(-1px);box-shadow:0 8px 20px rgba(231,29,36,.32)}
        .dc-root .btn-ghost{background:#fff;color:var(--dc-ink);border-color:var(--dc-hair-2)}
        .dc-root .btn-ghost:hover{border-color:var(--dc-ink);transform:translateY(-1px)}
        .dc-root .pill{display:inline-flex;align-items:center;gap:8px;padding:7px 14px;border-radius:999px;background:var(--dc-teal-soft);color:var(--dc-teal);font-weight:500;font-size:13px}
        .dc-root .pulse-dot{width:7px;height:7px;border-radius:999px;background:var(--dc-orange);position:relative}
        .dc-root .pulse-dot::after{content:"";position:absolute;inset:-4px;border-radius:999px;border:1.5px solid var(--dc-orange);animation:dc-pulse 1.8s ease-out infinite}
        @keyframes dc-pulse{0%{transform:scale(.6);opacity:1}100%{transform:scale(1.6);opacity:0}}
        .dc-root .field{width:100%;background:#fff;border:1px solid var(--dc-hair-2);border-radius:10px;padding:13px 16px;color:var(--dc-ink);font:inherit;font-size:14.5px;outline:none;transition:all .15s ease}
        .dc-root .field:focus{border-color:var(--dc-teal);box-shadow:0 0 0 3px var(--dc-teal-soft)}
        .dc-root .field::placeholder{color:var(--dc-mute)}
        .dc-root .chip{padding:8px 16px;border-radius:999px;border:1px solid var(--dc-hair-2);background:#fff;font-weight:500;font-size:13px;cursor:pointer;transition:all .15s ease;color:var(--dc-mute)}
        .dc-root .chip:hover{border-color:var(--dc-ink);color:var(--dc-ink)}
        .dc-root .chip.active{background:var(--dc-ink);color:#fff;border-color:var(--dc-ink)}
        .dc-root .card{background:var(--dc-card);border:1px solid var(--dc-hair);border-radius:20px;overflow:hidden;transition:all .25s ease}
        .dc-root .card:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(14,42,43,.08);border-color:var(--dc-hair-2)}
        .dc-root .svc-card .svc-thumb{height:180px;overflow:hidden;position:relative}
        .dc-root .svc-card .svc-thumb img{width:100%;height:100%;object-fit:cover;transition:transform .5s ease}
        .dc-root .svc-card:hover .svc-thumb img{transform:scale(1.06)}
        .dc-root .svc-card .svc-arrow{transition:transform .25s ease}
        .dc-root .svc-card:hover .svc-arrow{transform:translateX(4px)}
        .dc-root .ul-link{position:relative}
        .dc-root .ul-link::after{content:"";position:absolute;left:0;right:0;bottom:-3px;height:1.5px;background:currentColor;transform:scaleX(0);transform-origin:left;transition:transform .3s cubic-bezier(.2,.8,.2,1)}
        .dc-root .ul-link:hover::after{transform:scaleX(1)}
      `}</style>

      {/* Top trust bar */}
      <div style={{background:'var(--dc-ink)',color:'#fff'}}>
        <div className="wrap" style={{display:'flex',justifyContent:'space-between',alignItems:'center',height:38,fontSize:13,fontWeight:500}}>
          <div style={{display:'flex',alignItems:'center',gap:10}}>
            <span className="pulse-dot"></span>
            <span style={{opacity:.85}}>24/7 Emergency Dispatch — Denver Metro & Front Range</span>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:24,opacity:.78}}>
            <a href={`mailto:${DC_INFO.email}`} className="ul-link">{DC_INFO.email}</a>
            <span>Licensed · Insured · Bonded</span>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <header style={{position:'sticky',top:0,zIndex:80,background:'rgba(250,250,247,0.85)',backdropFilter:'blur(14px)',borderBottom:'1px solid var(--dc-hair)'}}>
        <div className="wrap" style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:76}}>
          <a href="#" style={{display:'flex',alignItems:'center',gap:14}}>
            <img src="img/lms-logo.png" alt="Local Motion Services" style={{height:48,display:'block'}} />
            <div style={{paddingLeft:14,borderLeft:'1px solid var(--dc-hair)'}}>
              <div style={{fontSize:12,color:'var(--dc-mute)',fontWeight:600,letterSpacing:'.02em'}}>Property Services</div>
              <div style={{fontSize:11,color:'var(--dc-mute)',marginTop:2}}>Denver · Front Range</div>
            </div>
          </a>
          <nav style={{display:'flex',alignItems:'center',gap:36}}>
            {['Services','How it works','About','Resources','Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s/g,'-')}`} className="ul-link" style={{fontSize:14.5,fontWeight:500}}>{item}</a>
            ))}
          </nav>
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <a href={DC_INFO.phoneTel} className="btn btn-ghost">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              {DC_INFO.phoneDisplay}
            </a>
            <a href="#contact" className="btn btn-primary">Get a quote
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section style={{padding:'72px 0 96px',position:'relative',overflow:'hidden'}}>
        {/* soft texture */}
        <div aria-hidden style={{position:'absolute',top:0,right:-200,width:700,height:700,borderRadius:'50%',background:'radial-gradient(circle, var(--dc-teal-soft) 0%, transparent 70%)',pointerEvents:'none'}}></div>
        <div className="wrap" style={{position:'relative'}}>
          <div style={{display:'grid',gridTemplateColumns:'1.05fr 1fr',gap:64,alignItems:'center'}}>
            <div>
              <div className="pill" style={{marginBottom:28}}>
                <span className="pulse-dot"></span>
                Trusted by 200+ properties across Denver
              </div>
              <h1 className="display" style={{fontSize:'clamp(48px, 6.5vw, 92px)',margin:'0 0 24px',color:'var(--dc-ink)'}}>
                Property maintenance,<br/>
                <em style={{fontStyle:'italic',fontWeight:400,color:'var(--dc-teal)'}}>without the runaround.</em>
              </h1>
              <p style={{fontSize:18.5,lineHeight:1.55,color:'var(--dc-ink-2)',maxWidth:520,margin:'0 0 36px'}}>
                One contractor for every trade your property needs — landscape, snow, asphalt, paint, and nine more. Single bid, single invoice, single project manager. Always Denver-local, always answering at 2 a.m.
              </p>
              <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
                <a href="#contact" className="btn btn-orange" style={{padding:'15px 26px',fontSize:15}}>Request a free quote
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </a>
                <a href="#services" className="btn btn-ghost" style={{padding:'15px 26px',fontSize:15}}>See all 12 services</a>
              </div>
              <div style={{display:'flex',gap:32,marginTop:48,paddingTop:32,borderTop:'1px solid var(--dc-hair)',flexWrap:'wrap'}}>
                {[['12','Trades on staff'],['<60 min','Emergency response'],['24/7','Dispatch line'],['100%','Denver-local']].map(([n,l])=>(
                  <div key={l}>
                    <div className="display" style={{fontSize:32,color:'var(--dc-ink)'}}>{n}</div>
                    <div style={{fontSize:13,color:'var(--dc-mute)',marginTop:4}}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{position:'relative'}}>
              <div style={{position:'relative',borderRadius:24,overflow:'hidden',border:'1px solid var(--dc-hair)',boxShadow:'0 30px 80px rgba(14,42,43,.18)',aspectRatio:'4/5'}}>
                <img src="img/hero-snowplow.jpg" alt="" style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                <div style={{position:'absolute',top:20,left:20,right:20,display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
                  <div style={{padding:'8px 14px',borderRadius:999,background:'rgba(255,255,255,.92)',backdropFilter:'blur(8px)',display:'flex',alignItems:'center',gap:8,fontSize:12,fontWeight:600}}>
                    <span className="pulse-dot"></span>Crew on-site · 02:14 AM
                  </div>
                </div>
              </div>
              {/* floating quote card */}
              <div style={{position:'absolute',bottom:-32,left:-40,maxWidth:300,background:'#fff',padding:'20px 22px',borderRadius:18,border:'1px solid var(--dc-hair)',boxShadow:'0 20px 50px rgba(14,42,43,.12)'}}>
                <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:12}}>
                  <div style={{width:36,height:36,borderRadius:'50%',background:'var(--dc-orange-soft)',color:'var(--dc-orange)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:13}}>RC</div>
                  <div>
                    <div style={{fontSize:13.5,fontWeight:600}}>Rebecca Chen</div>
                    <div style={{fontSize:11.5,color:'var(--dc-mute)'}}>PM · Cherry Creek Plaza</div>
                  </div>
                </div>
                <p style={{fontSize:13.5,lineHeight:1.5,color:'var(--dc-ink-2)',margin:0,fontStyle:'italic'}}>
                  "Plowed twice, salted, lot inspected — all before our 7 a.m. open. They just handle it."
                </p>
              </div>
              {/* small floating stat */}
              <div style={{position:'absolute',top:48,right:-32,background:'var(--dc-ink)',color:'#fff',padding:'18px 22px',borderRadius:16,boxShadow:'0 18px 40px rgba(14,42,43,.25)'}}>
                <div className="label" style={{color:'var(--dc-orange)',marginBottom:4}}>SLA</div>
                <div className="display" style={{fontSize:28}}>&lt; 60 min</div>
                <div style={{fontSize:11,color:'rgba(255,255,255,.65)',marginTop:4}}>Storm dispatch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST LOGOS */}
      <section style={{padding:'40px 0 80px'}}>
        <div className="wrap">
          <div className="label" style={{color:'var(--dc-mute)',textAlign:'center',marginBottom:32}}>TRUSTED BY DENVER'S PROPERTY MANAGERS, RETAILERS, AND OWNERS</div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(6, 1fr)',gap:32,alignItems:'center',opacity:.55}}>
            {['Cherry Creek','Highland Park','Front Range Co','Stapleton REIT','Aurora Plaza','DTC Properties'].map(n=>(
              <div key={n} className="display" style={{fontSize:18,color:'var(--dc-ink)',textAlign:'center'}}>{n}</div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{padding:'80px 0 120px'}}>
        <div className="wrap">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:48,alignItems:'end',marginBottom:48}}>
            <div>
              <div className="label" style={{color:'var(--dc-orange)',marginBottom:16}}>SERVICES</div>
              <h2 className="display" style={{fontSize:'clamp(40px, 5vw, 68px)',margin:0}}>
                Twelve trades.<br/><em style={{fontStyle:'italic',fontWeight:400,color:'var(--dc-teal)'}}>One phone call.</em>
              </h2>
            </div>
            <p style={{fontSize:16.5,lineHeight:1.6,color:'var(--dc-ink-2)',maxWidth:480,marginBottom:8}}>
              We bid as a single contractor — no juggling subs, no finger-pointing. Filter by category to see what fits the property, or scroll the full roster.
            </p>
          </div>

          <div style={{display:'flex',gap:10,marginBottom:32,flexWrap:'wrap'}}>
            <button className={`chip ${filter==='all'?'active':''}`} onClick={()=>setFilter('all')}>All services <span style={{opacity:.7,marginLeft:6}}>12</span></button>
            <button className={`chip ${filter==='exterior'?'active':''}`} onClick={()=>setFilter('exterior')}>Exterior <span style={{opacity:.7,marginLeft:6}}>4</span></button>
            <button className={`chip ${filter==='lot'?'active':''}`} onClick={()=>setFilter('lot')}>Lot & pavement <span style={{opacity:.7,marginLeft:6}}>4</span></button>
            <button className={`chip ${filter==='specialty'?'active':''}`} onClick={()=>setFilter('specialty')}>Specialty <span style={{opacity:.7,marginLeft:6}}>4</span></button>
          </div>

          <div style={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:20}}>
            {visible.map(svc => (
              <div key={svc.id} className="card svc-card">
                <div className="svc-thumb">
                  <img src={svc.img} alt="" />
                  <div style={{position:'absolute',top:14,left:14,padding:'5px 11px',borderRadius:999,background:'rgba(255,255,255,.94)',backdropFilter:'blur(6px)',fontSize:11.5,fontWeight:600,letterSpacing:'.02em'}}>{DC_GROUPS[svc.group]}</div>
                </div>
                <div style={{padding:24}}>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
                    <div className="mono" style={{fontSize:11,color:'var(--dc-mute)'}}>SERVICE — {svc.n}</div>
                  </div>
                  <h3 className="display" style={{fontSize:26,margin:'0 0 12px',color:'var(--dc-ink)'}}>{svc.name}</h3>
                  <p style={{fontSize:14,lineHeight:1.55,color:'var(--dc-ink-2)',margin:'0 0 18px'}}>{svc.blurb}</p>
                  <div style={{display:'flex',gap:6,flexWrap:'wrap',marginBottom:18}}>
                    {svc.tags.map(t => (
                      <span key={t} style={{padding:'4px 10px',background:'var(--dc-teal-soft)',color:'var(--dc-teal)',fontSize:11.5,borderRadius:999,fontWeight:500}}>{t}</span>
                    ))}
                  </div>
                  <a href={`#${svc.id}`} style={{display:'inline-flex',alignItems:'center',gap:6,fontSize:14,fontWeight:600,color:'var(--dc-orange)'}}>
                    Learn more <span className="svc-arrow">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{padding:'120px 0',background:'var(--dc-ink)',color:'#fff',borderRadius:'40px 40px 0 0',marginTop:40,position:'relative',overflow:'hidden'}}>
        <div aria-hidden style={{position:'absolute',top:-100,right:-100,width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle, rgba(231,29,36,.18) 0%, transparent 70%)'}}></div>
        <div className="wrap" style={{position:'relative'}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1.2fr',gap:64,alignItems:'end',marginBottom:72}}>
            <div>
              <div className="label" style={{color:'var(--dc-orange)',marginBottom:16}}>WHY LOCAL MOTION</div>
              <h2 className="display" style={{fontSize:'clamp(40px, 5vw, 68px)',margin:0}}>
                Built for property managers who answer to <em style={{fontStyle:'italic',fontWeight:400,color:'var(--dc-orange)'}}>owners.</em>
              </h2>
            </div>
            <p style={{fontSize:17,lineHeight:1.6,color:'rgba(255,255,255,.78)',maxWidth:520,marginBottom:8}}>
              Curb appeal walks tenants through the door. Bad pavement walks them out. We obsess over the details that show up on your owner's monthly report — and the ones that don't, but should.
            </p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4, 1fr)',gap:20}}>
            {[
              { icon: '⚡', title:'24/7 Dispatch', stat:'<60 min', body:'Storm or emergency, our crew rolls at any hour. Plows, porters, repair techs — on-call every night of the year.' },
              { icon: '◎', title:'Denver-local', stat:'Front Range', body:'Hampden Ave HQ. Owners on the ground, not a national call center routing to subs you have never met.' },
              { icon: '◇', title:'Budget-fit', stat:'Single bid', body:'We scope to your number, then commit. One contract, one invoice, no surprise change orders.' },
              { icon: '⌘', title:'Full-service', stat:'12 trades', body:'Same crew that mows in July is salting in January. Accountability across seasons.' },
            ].map((p,i)=>(
              <div key={p.title} style={{padding:28,background:'rgba(255,255,255,.04)',borderRadius:18,border:'1px solid rgba(255,255,255,.08)'}}>
                <div style={{width:40,height:40,borderRadius:10,background:'var(--dc-orange)',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:18,marginBottom:24}}>{p.icon}</div>
                <div className="display" style={{fontSize:32,marginBottom:8,color:'#fff'}}>{p.stat}</div>
                <div style={{fontSize:13.5,fontWeight:600,color:'var(--dc-orange)',marginBottom:12}}>{p.title}</div>
                <p style={{fontSize:13.5,lineHeight:1.55,color:'rgba(255,255,255,.7)',margin:0}}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{padding:'120px 0',background:'var(--dc-bg)'}}>
        <div className="wrap">
          <div style={{textAlign:'center',marginBottom:64}}>
            <div className="label" style={{color:'var(--dc-orange)',marginBottom:16}}>HOW IT WORKS</div>
            <h2 className="display" style={{fontSize:'clamp(40px, 5vw, 64px)',margin:0,maxWidth:680,marginInline:'auto'}}>
              Three steps from <em style={{fontStyle:'italic',fontWeight:400,color:'var(--dc-teal)'}}>call</em> to <em style={{fontStyle:'italic',fontWeight:400,color:'var(--dc-teal)'}}>crew.</em>
            </h2>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:20,position:'relative'}}>
            {[
              { n:'01', t:'Discuss', sub:'15-min call', body:'You tell us what the property needs. We ask the questions a tenured PM would ask — frequency, escalation paths, budget ceiling.' },
              { n:'02', t:'Plan', sub:'Custom scope', body:'A maintenance plan tailored to your property. Line-itemized, single-page. Annual, seasonal, or on-demand — your call.' },
              { n:'03', t:'Execute', sub:'Single point of contact', body:'One project manager owns the relationship. Documented work, photo close-outs to your inbox.' },
            ].map((s,i) => (
              <div key={s.n} className="card" style={{padding:32,position:'relative'}}>
                <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:24}}>
                  <div style={{width:48,height:48,borderRadius:12,background:'var(--dc-teal-soft)',color:'var(--dc-teal)',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700,fontSize:18,fontFamily:'Fraunces, serif'}}>{s.n}</div>
                  <div>
                    <h3 className="display" style={{fontSize:28,margin:0}}>{s.t}</h3>
                    <div style={{fontSize:12.5,color:'var(--dc-mute)',marginTop:2}}>{s.sub}</div>
                  </div>
                </div>
                <p style={{fontSize:14.5,lineHeight:1.6,color:'var(--dc-ink-2)',margin:0}}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{padding:'120px 0',background:'var(--dc-teal-soft)'}}>
        <div className="wrap">
          <div style={{maxWidth:920,marginInline:'auto',textAlign:'center'}}>
            <div className="label" style={{color:'var(--dc-teal)',marginBottom:24}}>★ ★ ★ ★ ★ &nbsp;&nbsp; CLIENT WORD</div>
            <p className="display" style={{fontSize:'clamp(28px, 3.5vw, 44px)',lineHeight:1.25,fontStyle:'italic',fontWeight:400,color:'var(--dc-ink)',margin:'0 0 40px'}}>
              "After three different vendors in two years we finally have one team. Same project manager for landscape, plowing, lot striping. Owner reports are easier. Tenants notice. We renewed for a third year without thinking about it."
            </p>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:14}}>
              <div style={{width:48,height:48,borderRadius:'50%',background:'var(--dc-orange)',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700}}>MA</div>
              <div style={{textAlign:'left'}}>
                <div style={{fontWeight:600}}>Marcus Alvarez</div>
                <div style={{fontSize:13,color:'var(--dc-mute)'}}>VP Operations · Stapleton REIT (1.4M sf managed)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{padding:'120px 0',background:'var(--dc-bg)'}}>
        <div className="wrap">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1.3fr',gap:64,alignItems:'start'}}>
            <div>
              <div className="label" style={{color:'var(--dc-orange)',marginBottom:16}}>CONTACT</div>
              <h2 className="display" style={{fontSize:'clamp(36px, 4.5vw, 56px)',margin:'0 0 28px'}}>
                Tell us about<br/><em style={{fontStyle:'italic',fontWeight:400,color:'var(--dc-teal)'}}>the property.</em>
              </h2>
              <p style={{fontSize:16,lineHeight:1.6,color:'var(--dc-ink-2)',marginBottom:40,maxWidth:380}}>
                We respond within one business hour. For emergencies, the dispatch line is open 24/7.
              </p>

              <div style={{display:'grid',gap:20}}>
                {[
                  { l:'Office', v:<div style={{fontSize:15.5,lineHeight:1.5}}>{DC_INFO.addr1}<br/>{DC_INFO.addr2}</div>, ic:'⌂' },
                  { l:'Dispatch · 24/7', v:<a href={DC_INFO.phoneTel} className="display" style={{fontSize:30,color:'var(--dc-orange)'}}>{DC_INFO.phoneDisplay}</a>, ic:'☎' },
                  { l:'Email', v:<a href={`mailto:${DC_INFO.email}`} className="ul-link" style={{fontSize:15.5}}>{DC_INFO.email}</a>, ic:'✉' },
                  { l:'Hours', v:<div style={{fontSize:14,lineHeight:1.6}}>Office · Mon–Fri · 8a–5p<br/>Dispatch · 24 / 7 / 365</div>, ic:'◷' },
                ].map(item => (
                  <div key={item.l} style={{display:'flex',gap:16}}>
                    <div style={{width:40,height:40,borderRadius:10,background:'#fff',border:'1px solid var(--dc-hair)',display:'flex',alignItems:'center',justifyContent:'center',color:'var(--dc-teal)',fontSize:16,flexShrink:0}}>{item.ic}</div>
                    <div>
                      <div className="label" style={{color:'var(--dc-mute)',marginBottom:6}}>{item.l}</div>
                      {item.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card" style={{padding:40}}>
              <h3 className="display" style={{fontSize:28,margin:'0 0 8px'}}>Get a free quote</h3>
              <p style={{fontSize:14,color:'var(--dc-mute)',margin:'0 0 28px'}}>One business hour response · No marketing spam · No bots</p>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:14}}>
                <div><label className="label" style={{display:'block',marginBottom:8,color:'var(--dc-ink)'}}>Your name *</label><input className="field" placeholder="Jane Doe" /></div>
                <div><label className="label" style={{display:'block',marginBottom:8,color:'var(--dc-ink)'}}>Company</label><input className="field" placeholder="Acme Properties" /></div>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:14}}>
                <div><label className="label" style={{display:'block',marginBottom:8,color:'var(--dc-ink)'}}>Email *</label><input className="field" placeholder="jane@acme.com" /></div>
                <div><label className="label" style={{display:'block',marginBottom:8,color:'var(--dc-ink)'}}>Phone *</label><input className="field" placeholder="(303) 555-0123" /></div>
              </div>
              <div style={{marginBottom:14}}>
                <label className="label" style={{display:'block',marginBottom:8,color:'var(--dc-ink)'}}>Service of interest</label>
                <select className="field"><option>— Pick one —</option>{DC_SERVICES.map(s=><option key={s.id}>{s.name}</option>)}</select>
              </div>
              <div style={{marginBottom:24}}>
                <label className="label" style={{display:'block',marginBottom:8,color:'var(--dc-ink)'}}>What does the property need? *</label>
                <textarea className="field" rows={3} placeholder="Lot size, timeline, budget — anything that helps us scope it right."></textarea>
              </div>
              <button className="btn btn-orange" style={{width:'100%',justifyContent:'center',padding:'15px 26px',fontSize:15}}>
                Send message
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </button>
              <p style={{fontSize:12,color:'var(--dc-mute)',textAlign:'center',margin:'14px 0 0'}}>By sending, you agree to our service terms. Read our privacy notice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:'var(--dc-ink)',color:'#fff',padding:'80px 0 28px'}}>
        <div className="wrap">
          <div style={{display:'grid',gridTemplateColumns:'1.3fr 1fr 1fr 1fr',gap:48,paddingBottom:56,borderBottom:'1px solid rgba(255,255,255,.12)'}}>
            <div>
              <div style={{display:'inline-flex',background:'#fff',padding:'14px 18px',borderRadius:10,marginBottom:20}}>
                <img src="img/lms-logo.png" alt="Local Motion Services" style={{height:50,display:'block'}} />
              </div>
              <p style={{fontSize:14,lineHeight:1.6,color:'rgba(255,255,255,.6)',maxWidth:300,margin:'0 0 24px'}}>
                Reliable property maintenance for the Denver metro and Front Range. Twelve trades, one call, every season.
              </p>
              <a href={DC_INFO.phoneTel} className="display" style={{fontSize:24,color:'var(--dc-orange)'}}>{DC_INFO.phoneDisplay}</a>
            </div>
            <div>
              <div className="label" style={{color:'var(--dc-orange)',marginBottom:18}}>SERVICES</div>
              <ul style={{listStyle:'none',padding:0,margin:0,display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px 24px'}}>
                {DC_SERVICES.map(s => <li key={s.id}><a href={`#${s.id}`} className="ul-link" style={{fontSize:13.5,color:'rgba(255,255,255,.78)'}}>{s.name}</a></li>)}
              </ul>
            </div>
            <div>
              <div className="label" style={{color:'var(--dc-orange)',marginBottom:18}}>COMPANY</div>
              <ul style={{listStyle:'none',padding:0,margin:0,display:'grid',gap:10}}>
                {['Home','About','How it works','Resources','Blog','Contact'].map(it=>(
                  <li key={it}><a href="#" className="ul-link" style={{fontSize:13.5,color:'rgba(255,255,255,.78)'}}>{it}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="label" style={{color:'var(--dc-orange)',marginBottom:18}}>OFFICE</div>
              <div style={{fontSize:13.5,lineHeight:1.7,color:'rgba(255,255,255,.78)'}}>{DC_INFO.addr1}<br/>{DC_INFO.addr2}</div>
              <a href={`mailto:${DC_INFO.email}`} className="ul-link" style={{fontSize:13.5,marginTop:14,display:'inline-block',color:'rgba(255,255,255,.78)'}}>{DC_INFO.email}</a>
            </div>
          </div>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingTop:28,gap:24,flexWrap:'wrap',color:'rgba(255,255,255,.5)',fontSize:12.5}}>
            <div>© 2026 Local Motion Services, Inc. · All rights reserved</div>
            <div>Licensed · Insured · Bonded — Denver Metro & Front Range</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

window.DC_Homepage = DC_Homepage;
