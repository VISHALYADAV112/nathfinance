'use client';
import { MessageCircle, Phone } from 'lucide-react';
import { company } from '@/data/site';
import { useEffect, useState } from 'react';
export function FloatingActions(){
 const [visible,setVisible]=useState(false);
 useEffect(()=>{const onScroll=()=>setVisible(window.scrollY>window.innerHeight*.72);onScroll();window.addEventListener('scroll',onScroll,{passive:true});return()=>window.removeEventListener('scroll',onScroll)},[]);
 const message=encodeURIComponent('Hello Nath Financial Solutions, I would like to understand the right financial solution for my requirement. Please guide me.');
 return <div className={`fixed-actions ${visible?'show':''}`}><a className="fab call" aria-label="Call Nath Financial Solutions" href={`tel:${company.phone}`}><Phone size={21}/><span>Call</span></a><a className="fab whatsapp" aria-label="WhatsApp Nath Financial Solutions" href={`https://wa.me/${company.whatsapp}?text=${message}`} target="_blank" rel="noreferrer"><MessageCircle size={22}/><span>WhatsApp</span></a></div>
}
