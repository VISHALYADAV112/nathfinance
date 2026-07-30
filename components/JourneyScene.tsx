'use client';
import { motion } from 'framer-motion';

export type SceneKind='home'|'business'|'personal'|'vehicle'|'protect'|'tax';

export function JourneyScene({kind}:{kind:SceneKind}){
  const common={initial:{opacity:0,scale:.92,y:18},animate:{opacity:1,scale:1,y:0},transition:{duration:.65,ease:[.22,1,.36,1] as const}};
  return <motion.div key={kind} className={`real-scene scene-${kind}`} {...common}>
    <div className="scene-sun"/><div className="scene-ground"/>
    {kind==='home'&&<><div className="house"><i className="roof"/><i className="wall"/><i className="door"/><i className="window w1"/><i className="window w2"/></div><div className="tree t1"/><div className="tree t2"/></>}
    {kind==='vehicle'&&<><div className="road"/><div className="car-real"><i className="body"/><i className="glass"/><i className="wheel a"/><i className="wheel b"/></div></>}
    {kind==='business'&&<><div className="office"><i/><i/><i/><i/><i/><i/></div><div className="growth-bars"><b/><b/><b/><b/></div></>}
    {kind==='personal'&&<><div className="wallet-real"><i/><i/><b>₹</b></div><div className="coin c1">₹</div><div className="coin c2">₹</div></>}
    {kind==='protect'&&<><div className="family"><i className="p1"/><i className="p2"/><i className="p3"/></div><div className="shield-real"><i>✓</i></div></>}
    {kind==='tax'&&<><div className="tax-sheet"><i/><i/><i/><b>ITR</b></div><div className="tax-check">✓</div></>}
    <div className="scene-glass-label"><span>Guided journey</span><b>{kind==='home'?'Home ownership':kind==='vehicle'?'Vehicle finance':kind==='business'?'Business growth':kind==='personal'?'Personal needs':kind==='protect'?'Family protection':'Tax support'}</b></div>
  </motion.div>
}
