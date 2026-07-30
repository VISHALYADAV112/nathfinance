'use client';
import { useMemo, useState } from 'react';
import { services } from '@/data/site';
import { copy, type Locale } from '@/data/content';
import { ArrowLeft, ArrowRight, Check, Clock3, Languages, PhoneCall, ShieldCheck } from 'lucide-react';

const serviceNames={
 en:['Personal Loan','Home Loan','Business Loan','Loan Against Property','Used Car Loan','Balance Transfer & Top-Up','Health Insurance','Motor Insurance','Life Insurance'],
 hi:['पर्सनल लोन','होम लोन','बिजनेस लोन','प्रॉपर्टी पर लोन','यूज़्ड कार लोन','बैलेंस ट्रांसफर और टॉप-अप','हेल्थ इंश्योरेंस','मोटर इंश्योरेंस','लाइफ इंश्योरेंस'],
 mr:['वैयक्तिक कर्ज','गृहकर्ज','व्यवसाय कर्ज','मालमत्तेवरील कर्ज','वापरलेल्या कारचे कर्ज','बॅलन्स ट्रान्सफर आणि टॉप-अप','आरोग्य विमा','मोटार विमा','जीवन विमा']
};
export function EnquiryForm({locale}:{locale:Locale}){
 const t=copy[locale].form; const [status,setStatus]=useState(''); const [busy,setBusy]=useState(false); const [step,setStep]=useState(0); const [data,setData]=useState({service:'',name:'',phone:'',city:'',language:locale,time:'Morning',message:''});
 const steps=useMemo(()=>t.steps,[t.steps]);
 const labels=locale==='hi'?{name:'पूरा नाम',phone:'मोबाइल नंबर',city:'शहर',lang:'पसंदीदा भाषा',time:'कॉल का सही समय',note:'अन्य जानकारी (वैकल्पिक)',morning:'सुबह',afternoon:'दोपहर',evening:'शाम'}:locale==='mr'?{name:'पूर्ण नाव',phone:'मोबाइल नंबर',city:'शहर',lang:'पसंतीची भाषा',time:'कॉलसाठी योग्य वेळ',note:'इतर माहिती (ऐच्छिक)',morning:'सकाळ',afternoon:'दुपार',evening:'संध्याकाळ'}:{name:'Full name',phone:'Mobile number',city:'City',lang:'Preferred language',time:'Best time to call',note:'Anything else? (optional)',morning:'Morning',afternoon:'Afternoon',evening:'Evening'};
 const update=(key:string,value:string)=>setData(v=>({...v,[key]:value}));
 const canNext=step===0?!!data.service:step===1?(data.name.trim().length>1 && /[0-9]{10}/.test(data.phone.replace(/\D/g,'')) && data.city.trim().length>1):true;
 async function submit(){setBusy(true);setStatus('');const res=await fetch('/api/enquiry',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...data,website:''})});const payload=await res.json();setStatus(payload.message||'Thank you.');setBusy(false);if(res.ok){setData({service:'',name:'',phone:'',city:'',language:locale,time:'Morning',message:''});setStep(0)}}
 return <div className="guided-form" id="enquiry">
  <div className="form-side"><span className="eyebrow">{t.eyebrow}</span><h2 className="display">{t.title}<br/><span>{t.accent}</span></h2><p>{t.body}</p><div className="form-trust"><span><ShieldCheck size={18}/>{t.trust[0]}</span><span><PhoneCall size={18}/>{t.trust[1]}</span><span><Languages size={18}/>{t.trust[2]}</span></div></div>
  <div className="form-card"><div className="form-progress">{steps.map((_,i)=><div key={i} className={i<=step?'active':''}><span>{i<step?<Check size={14}/>:i+1}</span><i/></div>)}</div><div className="form-heading"><small>STEP {step+1} / 3</small><h3>{steps[step][0]}</h3><p>{steps[step][1]}</p></div>
  {step===0&&<div className="service-picker">{services.slice(0,9).map((s,i)=><button key={s.slug} onClick={()=>update('service',s.title)} className={data.service===s.title?'active':''}><s.icon size={20}/><span>{serviceNames[locale][i]}</span><Check size={16}/></button>)}</div>}
  {step===1&&<div className="modern-fields"><label><span>{labels.name}</span><input value={data.name} onChange={e=>update('name',e.target.value)} placeholder={labels.name}/></label><label><span>{labels.phone}</span><input value={data.phone} onChange={e=>update('phone',e.target.value)} inputMode="tel" placeholder="10-digit"/></label><label className="full"><span>{labels.city}</span><input value={data.city} onChange={e=>update('city',e.target.value)} placeholder={labels.city}/></label></div>}
  {step===2&&<div className="preference-grid"><label><Languages size={20}/><span>{labels.lang}</span><select value={data.language} onChange={e=>update('language',e.target.value)}><option value="en">English</option><option value="hi">हिंदी</option><option value="mr">मराठी</option></select></label><label><Clock3 size={20}/><span>{labels.time}</span><select value={data.time} onChange={e=>update('time',e.target.value)}><option>{labels.morning}</option><option>{labels.afternoon}</option><option>{labels.evening}</option></select></label><label className="full"><span>{labels.note}</span><textarea value={data.message} onChange={e=>update('message',e.target.value)} placeholder={labels.note}/></label></div>}
  <div className="form-actions">{step>0?<button className="back-btn" onClick={()=>setStep(v=>v-1)}><ArrowLeft size={17}/>{t.back}</button>:<span/>}{step<2?<button disabled={!canNext} className="next-btn" onClick={()=>setStep(v=>v+1)}>{t.continue}<ArrowRight size={18}/></button>:<button disabled={busy} className="next-btn" onClick={submit}>{busy?'…':t.submit}<ArrowRight size={18}/></button>}</div>{status&&<p className="form-status">{status}</p>}</div>
 </div>
}
