import { Header } from './Header';import { Footer } from './Footer';import { FloatingActions } from './FloatingActions';import type { Locale } from '@/data/content';
export function SiteShell({locale,children}:{locale:Locale,children:React.ReactNode}){return <><Header locale={locale}/>{children}<Footer locale={locale}/><FloatingActions/></>}
