import { BriefcaseBusiness, Building2, Car, FileText, HeartPulse, Home, ShieldCheck, WalletCards } from 'lucide-react';

export const company = {
  name: 'Nath Financial Solutions',
  tagline: 'Smart Solutions for Every Financial Need',
  phone: '+917222009696',
  displayPhone: '+91 72220 09696',
  whatsapp: '917222009696',
  email: 'kirdakarsuyash04@gmail.com',
  address: 'Kothrud, Pune, Maharashtra',
  hours: 'Monday to Saturday · 09:30 AM – 06:30 PM'
};

export const services = [
  { slug: 'personal-loan', title: 'Personal Loan', category: 'Loans', icon: WalletCards, summary: 'Flexible funding for planned and urgent personal needs.' },
  { slug: 'home-loan', title: 'Home Loan', category: 'Loans', icon: Home, summary: 'Guidance from eligibility to disbursement for your dream home.' },
  { slug: 'business-loan', title: 'Business Loan', category: 'Loans', icon: BriefcaseBusiness, summary: 'Structured funding support to help your business move forward.' },
  { slug: 'loan-against-property', title: 'Loan Against Property', category: 'Loans', icon: Building2, summary: 'Unlock the value of eligible property for larger funding needs.' },
  { slug: 'used-car-loan', title: 'Used Car Loan', category: 'Loans', icon: Car, summary: 'Simple assistance for financing a quality pre-owned vehicle.' },
  { slug: 'balance-transfer-top-up', title: 'Balance Transfer & Top-Up', category: 'Loans', icon: ShieldCheck, summary: 'Explore better repayment structures and additional funding.' },
  { slug: 'health-insurance', title: 'Health Insurance', category: 'Insurance', icon: HeartPulse, summary: 'Choose suitable protection for individuals and families.' },
  { slug: 'motor-insurance', title: 'Motor Insurance', category: 'Insurance', icon: Car, summary: 'Protect your vehicle with appropriate policy guidance.' },
  { slug: 'life-insurance', title: 'Life Insurance', category: 'Insurance', icon: ShieldCheck, summary: 'Build financial protection for the people who matter most.' },
  { slug: 'itr-filing', title: 'ITR Filing', category: 'Tax', icon: FileText, summary: 'Accurate and convenient income-tax return assistance.' },
  { slug: 'tax-planning-tds-refund', title: 'Tax Planning & TDS Refund', category: 'Tax', icon: FileText, summary: 'Practical support for tax planning and eligible TDS refunds.' }
];

export const institutions = ['HDFC Bank', 'ICICI Bank', 'Axis Bank', 'State Bank of India', 'Kotak Mahindra Bank', 'IDFC FIRST Bank', 'Tata Capital', 'Bajaj Finserv'];
