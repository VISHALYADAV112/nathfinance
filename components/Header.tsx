'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { copy, type Locale } from '@/data/content';

export function Header({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const pathname = usePathname();
  const switchHref = (next: Locale) => pathname.replace(/^\/(en|hi|mr)/, `/${next}`);
  return <header className="nav"><div className="container nav-inner">
    <Link className="brand" href={`/${locale}`}><span className="brand-mark">N</span><span>Nath Financial Solutions</span></Link>
    <nav className="nav-links">
      <Link href={`/${locale}`}>{t.nav.home}</Link>
      <Link href={`/${locale}/about`}>{t.nav.about}</Link>
      <Link href={`/${locale}/services/personal-loan`}>{t.nav.services}</Link>
      <Link href={`/${locale}/contact`}>{t.nav.contact}</Link>
    </nav>
    <div style={{display:'flex',alignItems:'center',gap:12}}>
      <div className="lang">{(['en','hi','mr'] as Locale[]).map(l=><Link className={l===locale?'active':''} key={l} href={switchHref(l)}>{l.toUpperCase()}</Link>)}</div>
      <Link className="nav-cta" href={`/${locale}/contact`}>{t.nav.cta}<ArrowUpRight size={17}/></Link>
    </div>
  </div></header>
}
