import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/SiteShell';
import type { Locale } from '@/data/content';

const locales: Locale[]=['en','hi','mr'];
export function generateStaticParams(){return locales.map(locale=>({locale}))}
export default async function LocaleLayout({children,params}:{children:React.ReactNode;params:Promise<{locale:string}>}){
  const {locale}=await params;if(!locales.includes(locale as Locale))notFound();return <SiteShell locale={locale as Locale}>{children}</SiteShell>;
}
