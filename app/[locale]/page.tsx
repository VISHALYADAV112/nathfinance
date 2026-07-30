import { Home } from '@/components/Home';import type { Locale } from '@/data/content';
export default async function Page({params}:{params:Promise<{locale:Locale}>}){const {locale}=await params;return <Home locale={locale}/>}
