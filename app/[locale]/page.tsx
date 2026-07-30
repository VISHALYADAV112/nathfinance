import { Home } from '@/components/Home';import type { Locale } from '@/data/content';
export function generateStaticParams(){return ['en','hi','mr'].map(locale=>({locale}))}
export default async function Page({params}:{params:Promise<{locale:Locale}>}){const {locale}=await params;return <Home locale={locale}/>}
