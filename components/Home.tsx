'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BriefcaseBusiness, Car, FileText, HeartPulse, Home as HomeIcon, Sparkles, WalletCards } from 'lucide-react';
import { copy, type Locale } from '@/data/content';
import { services } from '@/data/site';
import { EnquiryForm } from './EnquiryForm';
import { useEffect, useMemo, useState } from 'react';
import { JourneyScene } from './JourneyScene';

const journeys = [
  { key:'home', title:'Own a home', sub:'Plan the purchase with clarity', icon:HomeIcon, slug:'home-loan', tone:'jade' },
  { key:'business', title:'Grow a business', sub:'Explore structured funding', icon:BriefcaseBusiness, slug:'business-loan', tone:'amber' },
  { key:'personal', title:'Handle a personal need', sub:'Find a practical path forward', icon:WalletCards, slug:'personal-loan', tone:'blue' },
  { key:'vehicle', title:'Buy a vehicle', sub:'Move from shortlist to finance', icon:Car, slug:'used-car-loan', tone:'violet' },
  { key:'protect', title:'Protect my family', sub:'Understand suitable cover', icon:HeartPulse, slug:'health-insurance', tone:'rose' },
  { key:'tax', title:'Complete my taxes', sub:'File accurately and on time', icon:FileText, slug:'itr-filing', tone:'cyan' },
];

const reveal = { hidden:{opacity:0,y:28}, show:{opacity:1,y:0,transition:{duration:.7,ease:[.22,1,.36,1] as const}} };

export function Home({locale}:{locale:Locale}){
  const t=copy[locale];
  const [active,setActive]=useState(0);
  const {scrollYProgress}=useScroll();
  const heroY=useTransform(scrollYProgress,[0,.18],[0,110]);
  const heroOpacity=useTransform(scrollYProgress,[0,.16],[1,.2]);

  useEffect(()=>{const id=setInterval(()=>setActive(v=>(v+1)%journeys.length),3600);return()=>clearInterval(id)},[]);
  const activeJourney=useMemo(()=>journeys[active],[active]);
  const ActiveIcon=activeJourney.icon;
  const goals=locale==='hi'?['अपना घर','व्यवसाय बढ़ाएँ','व्यक्तिगत जरूरत','वाहन खरीदें','परिवार सुरक्षित रखें','टैक्स भरें']:locale==='mr'?['स्वतःचे घर','व्यवसाय वाढवा','वैयक्तिक गरज','वाहन खरेदी','कुटुंब सुरक्षित ठेवा','कर भरा']:['Own a home','Grow a business','Personal needs','Buy a vehicle','Protect family','File taxes'];
  const subs=locale==='hi'?['घर खरीदने की योजना स्पष्ट करें','व्यवसाय के लिए सही फंडिंग देखें','व्यक्तिगत जरूरत का व्यावहारिक हल','वाहन फाइनेंस का रास्ता समझें','उपयुक्त सुरक्षा समझें','सही और समय पर टैक्स फाइल करें']:locale==='mr'?['घर खरेदीची योजना स्पष्ट करा','व्यवसायासाठी योग्य निधी पाहा','वैयक्तिक गरजेचा व्यावहारिक मार्ग','वाहन वित्ताचा मार्ग समजा','योग्य संरक्षण समजा','अचूक आणि वेळेत कर भरा']:journeys.map(j=>j.sub);
  const confidence=locale==='hi'?['विश्वास के लिए बनाया गया','पहली बार लोन लेने वाले के लिए आसान। व्यवसायी के लिए पर्याप्त प्रोफेशनल।','पहली पूछताछ में संवेदनशील दस्तावेज़ नहीं','समझने के बाद कॉल और WhatsApp']:locale==='mr'?['विश्वासासाठी तयार केलेले','पहिल्यांदा कर्ज घेणाऱ्यासाठी सोपे. व्यावसायिकासाठी पुरेसे प्रोफेशनल.','पहिल्या चौकशीत संवेदनशील कागदपत्रे नाहीत','माहिती पाहिल्यानंतर कॉल आणि WhatsApp']:['Designed for confidence','Clear enough for a first-time borrower. Professional enough for a business owner.','No sensitive documents in the first enquiry','Call and WhatsApp appear after you explore'];

  return <main>
    <section className="hero-v4" id="top">
      <div className="hero-mesh"/><div className="hero-grain"/>
      <div className="container hero-v4-grid">
        <motion.div className="hero-copy-v4" initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.85}}>
          <div className="hero-kicker"><Sparkles size={16}/>{t.hero.kicker}</div>
          <h1 className="display">{t.hero.title}<br/><span>{t.hero.accent}</span></h1>
          <p>{t.hero.body}</p>
          <a className="hero-scroll-v4" href="#discover"><b>{t.hero.scroll}</b><i>↓</i></a>
        </motion.div>
        <motion.div className="hero-experience" initial={{opacity:0,scale:.96,x:35}} animate={{opacity:1,scale:1,x:0}} transition={{duration:1,delay:.12}}>
          <div className="experience-window">
            <div className="experience-head"><span>YOUR FINANCIAL GOAL</span><div>{journeys.map((_,i)=><i key={i} className={i===active?'active':''}/>)}</div></div>
            <JourneyScene kind={activeJourney.key as any}/>
            <div className="experience-switcher">{journeys.map((j,i)=>{const Icon=j.icon;return <button key={j.key} className={i===active?'active':''} onClick={()=>setActive(i)} aria-label={goals[i]}><Icon size={19}/><span>{goals[i]}</span></button>})}</div>
          </div>
        </motion.div>
      </div>
      <div className="hero-marquee"><div>LOANS <i/> INSURANCE <i/> TAX SUPPORT <i/> GUIDANCE IN ENGLISH · हिंदी · मराठी <i/> LOANS <i/> INSURANCE <i/> TAX SUPPORT</div></div>
    </section>

    <section className="discover section" id="discover">
      <div className="container">
        <motion.div className="section-intro" variants={reveal} initial="hidden" whileInView="show" viewport={{once:true,amount:.35}}><span className="eyebrow">{t.discover.eyebrow}</span><h2 className="display">{t.discover.title}<br/><span>{t.discover.accent}</span></h2></motion.div>
        <div className="journey-tabs">
          <div className="journey-nav">{journeys.map((j,i)=>{const Icon=j.icon;return <button key={j.key} className={i===active?'active':''} onClick={()=>setActive(i)}><Icon size={21}/><span>{goals[i]}</span><ArrowRight size={16}/></button>})}</div>
          <motion.div key={activeJourney.key} className={`journey-panel ${activeJourney.tone}`} initial={{opacity:0,x:24}} animate={{opacity:1,x:0}} transition={{duration:.5}}>
            <div className="journey-panel-copy"><span>{t.discover.recommended}</span><h3>{goals[active]}</h3><p>{subs[active]}. {t.discover.body}</p><Link href={`/${locale}/services/${activeJourney.slug}`}>{t.discover.link} <ArrowRight size={18}/></Link></div>
            <div className="journey-panel-art"><JourneyScene kind={activeJourney.key as any}/></div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="story-section">
      <div className="container story-grid">
        <motion.div className="story-sticky" variants={reveal} initial="hidden" whileInView="show" viewport={{once:true,amount:.35}}><span className="eyebrow">{t.story.eyebrow}</span><h2 className="display">{t.story.title}<br/><span>{t.story.accent}</span></h2><p>{t.story.body}</p></motion.div>
        <div className="story-steps">{t.story.steps.map(([n,h,p],i)=><motion.article key={n} className="story-card" initial={{opacity:0,y:55,scale:.98}} whileInView={{opacity:1,y:0,scale:1}} viewport={{once:true,amount:.45}} transition={{duration:.7,delay:i*.04}}><span>{n}</span><div><h3>{h}</h3><p>{p}</p></div><div className="story-line"/></motion.article>)}</div>
      </div>
    </section>

    <section className="services-v4 section">
      <div className="container">
        <motion.div className="section-intro compact" variants={reveal} initial="hidden" whileInView="show" viewport={{once:true}}><span className="eyebrow">{t.services.eyebrow}</span><h2 className="display">{t.services.title}<br/><span>{t.services.accent}</span></h2></motion.div>
        <div className="service-category-grid">
          {[['Loans',t.services.loan,'01','Access funding for homes, business, vehicles and personal milestones.','personal-loan'],['Insurance',t.services.insurance,'02','Protect health, vehicles and the people who matter most.','health-insurance'],['Tax',t.services.tax,'03','File accurately and understand practical tax support.','itr-filing']].map(([cat,title,no,desc,slug],i)=><motion.article key={cat} className={`category-card category-${i}`} initial={{opacity:0,y:55,rotateX:8}} whileInView={{opacity:1,y:0,rotateX:0}} viewport={{once:true,amount:.35}} transition={{duration:.75,delay:i*.1}} whileHover={{scale:1.025,y:-8}}>
            <div className="category-cursor-glow"/><span className="category-no">{no}</span><div className="category-art">{i===0?<div className="mini-home"><i/><b/></div>:i===1?<div className="mini-shield">✓</div>:<div className="mini-tax">₹<i/></div>}</div><small>{cat}</small><h3>{title}</h3><p>{desc}</p><Link href={`/${locale}/services/${slug}`}>{t.services.see}<ArrowRight size={17}/></Link>
          </motion.article>)}
        </div>
      </div>
    </section>

    <section className="confidence-strip"><div className="container confidence-grid"><div><span className="eyebrow">{confidence[0]}</span><h2 className="display">{confidence[1]}</h2></div><div className="confidence-points"><span>English · हिंदी · मराठी</span><span>{confidence[2]}</span><span>{confidence[3]}</span></div></div></section>

    <section className="section enquiry-section"><div className="container"><EnquiryForm locale={locale}/></div></section>
  </main>
}
