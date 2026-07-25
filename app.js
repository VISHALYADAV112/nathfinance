const WHATSAPP_NUMBER = "919980825096";

const loanProcess = [
  "Discuss the requirement, preferred amount, tenure, and timeline.",
  "Review basic eligibility and the documents available.",
  "Compare suitable lender routes and explain key terms.",
  "Prepare and submit the selected application.",
  "Coordinate queries, verification, and approval updates.",
  "Support the final documentation and disbursement stage.",
];

const insuranceProcess = [
  "Understand who or what needs protection and for how long.",
  "Review existing cover, priorities, and budget.",
  "Compare suitable policy structures and important exclusions.",
  "Complete proposal details and supporting documentation.",
  "Coordinate underwriting or inspection requirements.",
  "Review the issued policy and explain the next steps.",
];

const taxProcess = [
  "Understand income sources and the filing or planning requirement.",
  "Collect tax statements, proofs, and relevant records.",
  "Review the information and identify missing items.",
  "Prepare the computation or filing details for confirmation.",
  "Complete the filing or requested tax service.",
  "Share acknowledgement and support follow-up questions.",
];

const services = [
  {
    id: "personal-loan",
    category: "loans",
    title: "Personal Loan",
    summary: "Unsecured finance for planned or urgent personal expenses.",
    overview:
      "A personal loan can provide funds without pledging an asset. The right option depends on income stability, existing obligations, credit profile, required amount, and repayment comfort.",
    benefits: [
      "No property or vehicle is generally pledged as collateral.",
      "Can support medical, education, travel, wedding, or other personal needs.",
      "Fixed repayment schedules can make monthly planning easier.",
      "Multiple lender options may be compared for fit and affordability.",
    ],
    eligibility: [
      "Salaried or self-employed applicant with a regular source of income.",
      "Age, work experience, and income within the lender's policy.",
      "Acceptable credit history and existing debt obligations.",
      "Residence and employment or business profile supported by documents.",
    ],
    documents: [
      "PAN and accepted identity/address proof.",
      "Recent salary slips or income evidence.",
      "Recent bank statements.",
      "Employment proof or business continuity documents, as applicable.",
      "Photograph and lender-specific application documents.",
    ],
    process: loanProcess,
    faqs: [
      [
        "Will checking eligibility affect my credit score?",
        "A preliminary discussion normally uses information you provide. A formal lender credit enquiry may affect your credit report, so confirm when a bureau check will be made.",
      ],
      [
        "How much can I borrow?",
        "The eligible amount depends on income, existing EMIs, credit history, age, employer or business profile, and lender policy.",
      ],
    ],
  },
  {
    id: "home-loan",
    category: "loans",
    title: "Home Loan",
    summary: "Structured finance for buying, building, or improving a home.",
    overview:
      "A home loan is a long-term commitment where property, borrower profile, down payment, interest structure, and total repayment all matter. We help organise these moving parts before submission.",
    benefits: [
      "Longer repayment periods can spread the cost of a property purchase.",
      "Options may be available for purchase, construction, or improvement.",
      "Co-applicants may help structure ownership and eligibility.",
      "Applicable tax benefits may be available subject to current tax law.",
    ],
    eligibility: [
      "Stable and documentable income from salary, profession, or business.",
      "Age and proposed loan tenure within lender policy.",
      "Adequate own contribution toward the property cost.",
      "Acceptable property title, approvals, valuation, and legal review.",
    ],
    documents: [
      "KYC documents for applicants and co-applicants.",
      "Income documents, bank statements, and tax returns as applicable.",
      "Employment or business proof.",
      "Agreement, allotment letter, title documents, and property papers.",
      "Own-contribution proof and any lender-requested declarations.",
    ],
    process: loanProcess,
    faqs: [
      [
        "Should I choose a fixed or floating rate?",
        "The choice depends on rate expectations, cash-flow certainty, reset terms, and lender conditions. Compare the full terms rather than the headline rate alone.",
      ],
      [
        "Does pre-approval guarantee the property loan?",
        "No. The lender must still complete property, legal, technical, and final borrower checks before sanction or disbursement.",
      ],
    ],
  },
  {
    id: "business-loan",
    category: "loans",
    title: "Business Loan",
    summary: "Funding support for working capital, expansion, or equipment.",
    overview:
      "Business finance should match the purpose and the cash cycle. We help organise turnover, banking, tax records, profitability, and repayment capacity into a clearer application.",
    benefits: [
      "Can support inventory, expansion, equipment, or working-capital needs.",
      "Secured and unsecured routes may be available.",
      "Repayment can be structured around the approved facility.",
      "A prepared file can reduce avoidable documentation delays.",
    ],
    eligibility: [
      "Established business or professional activity with continuity evidence.",
      "Turnover, profitability, and bank conduct within lender criteria.",
      "Acceptable credit history of the business and key applicants.",
      "Relevant registrations and tax filings available.",
    ],
    documents: [
      "KYC of proprietors, partners, directors, or guarantors.",
      "Business registration and constitution documents.",
      "Recent bank statements and GST records, where applicable.",
      "Income-tax returns and financial statements.",
      "Purpose-related quotations or projections when requested.",
    ],
    process: loanProcess,
    faqs: [
      [
        "Is collateral always required?",
        "Not always. Availability depends on the amount, business profile, financial performance, facility type, and lender policy.",
      ],
      [
        "How is business eligibility assessed?",
        "Lenders commonly review turnover, profit, banking behaviour, existing debt, vintage, industry, tax compliance, and the applicant's credit profile.",
      ],
    ],
  },
  {
    id: "loan-against-property",
    category: "loans",
    title: "Loan Against Property",
    summary: "Raise funds against eligible residential or commercial property.",
    overview:
      "A loan against property uses an eligible property as security. It may support business or personal needs, but the repayment obligation and risk to the pledged asset require careful planning.",
    benefits: [
      "May support larger requirements than unsecured borrowing.",
      "Repayment tenure may be longer than many unsecured products.",
      "Residential or commercial properties may be considered by some lenders.",
      "Can support business expansion, education, or other permitted purposes.",
    ],
    eligibility: [
      "Clear ownership and acceptable legal title of the property.",
      "Documented repayment capacity and stable income.",
      "Property type, age, location, and valuation within lender policy.",
      "Acceptable credit profile and existing obligations.",
    ],
    documents: [
      "Applicant KYC and income documents.",
      "Complete title chain and ownership documents.",
      "Approved plan, tax receipts, and property records as applicable.",
      "Bank statements and existing loan details.",
      "Business records where the purpose or income source requires them.",
    ],
    process: loanProcess,
    faqs: [
      [
        "Can I continue using the property?",
        "Usually, the owner continues to use the property while it remains mortgaged, subject to the loan agreement and regular repayment.",
      ],
      [
        "Is the loan amount equal to the market value?",
        "No. Lenders apply their own valuation and loan-to-value limits, so the sanctioned amount is generally a portion of the assessed value.",
      ],
    ],
  },
  {
    id: "used-car-loan",
    category: "loans",
    title: "Used Car Loan",
    summary: "Finance for an eligible pre-owned vehicle purchase.",
    overview:
      "Used-car finance depends on both the buyer and the vehicle. Vehicle age, valuation, model, documentation, and transfer status can influence the amount and terms.",
    benefits: [
      "Reduces the need to pay the full vehicle cost upfront.",
      "May be available through banks and specialised finance providers.",
      "A defined repayment schedule supports monthly budgeting.",
      "Vehicle and buyer checks help surface documentation issues early.",
    ],
    eligibility: [
      "Stable income and acceptable borrower credit profile.",
      "Vehicle age, model, condition, and valuation within policy.",
      "Clear ownership and transfer documents.",
      "Required down payment available.",
    ],
    documents: [
      "Applicant KYC, income proof, and bank statements.",
      "Vehicle registration certificate and insurance.",
      "Seller KYC and sale-related documents.",
      "Valuation or inspection report when required.",
      "Transfer forms and existing finance closure proof, if applicable.",
    ],
    process: loanProcess,
    faqs: [
      [
        "Does the age of the car matter?",
        "Yes. Many lenders limit the vehicle age at application and at the end of the proposed tenure.",
      ],
      [
        "Who checks the vehicle value?",
        "The lender may use an approved valuer or inspection process. The eligible amount is based on that assessed value and the product policy.",
      ],
    ],
  },
  {
    id: "balance-transfer",
    category: "loans",
    title: "Balance Transfer",
    summary: "Review whether moving an existing loan improves the overall terms.",
    overview:
      "A balance transfer moves an outstanding loan to another lender. The decision should compare remaining interest, fees, reset terms, tenure, service, and the break-even point.",
    benefits: [
      "May reduce interest cost or monthly repayment, subject to terms.",
      "Can provide access to a more suitable tenure or service experience.",
      "May be combined with an eligible top-up facility.",
      "Creates an opportunity to review the remaining loan structure.",
    ],
    eligibility: [
      "Satisfactory repayment track record on the existing loan.",
      "Remaining balance and tenure within the new lender's policy.",
      "Current income and credit profile meeting fresh eligibility checks.",
      "Underlying property or security acceptable for secured transfers.",
    ],
    documents: [
      "Existing sanction letter and latest loan statement.",
      "Repayment track and foreclosure or transfer letter.",
      "Current KYC, income documents, and bank statements.",
      "Property documents for secured loan transfers.",
      "Any original-document list held by the existing lender.",
    ],
    process: loanProcess,
    faqs: [
      [
        "Is a lower rate always enough reason to transfer?",
        "No. Compare processing, legal, valuation, foreclosure, insurance, and other costs against the expected savings over the remaining tenure.",
      ],
      [
        "Will the new lender reassess eligibility?",
        "Yes. A transfer is generally treated as a fresh credit decision with new borrower and security checks.",
      ],
    ],
  },
  {
    id: "top-up-loan",
    category: "loans",
    title: "Top-Up Loan",
    summary: "Additional borrowing linked to an eligible existing loan.",
    overview:
      "A top-up loan may be available over an existing home or property-backed loan. Eligibility depends on repayment conduct, current property value, outstanding balance, income, and lender rules.",
    benefits: [
      "Can provide additional funds without creating a separate security.",
      "May offer a longer tenure than unsecured borrowing.",
      "Can be considered during an eligible balance transfer.",
      "Use may be flexible within the lender's permitted purposes.",
    ],
    eligibility: [
      "Existing loan with an acceptable repayment track.",
      "Sufficient value available within applicable loan-to-value limits.",
      "Current income supports the combined repayment obligation.",
      "Credit and property profile remain acceptable.",
    ],
    documents: [
      "Existing loan account statement and sanction details.",
      "Updated KYC, income documents, and bank statements.",
      "Property papers or existing lender document list.",
      "Purpose declaration and supporting records if requested.",
      "Updated insurance or valuation documents when applicable.",
    ],
    process: loanProcess,
    faqs: [
      [
        "Do I have to take a top-up from my current lender?",
        "Not necessarily. It may be available from the current lender or as part of a transfer to another lender, subject to fresh checks.",
      ],
      [
        "Is a top-up automatically approved?",
        "No. Repayment history helps, but current income, credit, property value, outstanding balance, and policy are reassessed.",
      ],
    ],
  },
  {
    id: "health-insurance",
    category: "insurance",
    title: "Health Insurance",
    summary: "Protection against eligible hospitalisation and medical costs.",
    overview:
      "Health cover should be reviewed for sum insured, waiting periods, room limits, exclusions, co-payment, network access, and claim process, not only the premium.",
    benefits: [
      "Can reduce the financial impact of eligible medical treatment.",
      "Family floater and individual structures may be available.",
      "Cashless treatment may be available through network hospitals.",
      "Optional features can extend protection for specific needs.",
    ],
    eligibility: [
      "Entry age and family relationship within product terms.",
      "Complete and accurate medical and lifestyle disclosure.",
      "Medical tests may be required based on age or health history.",
      "Acceptance, exclusions, loading, or waiting periods depend on underwriting.",
    ],
    documents: [
      "KYC and age proof for covered members.",
      "Medical history and existing policy details.",
      "Medical reports when requested.",
      "Proposal form with complete health disclosures.",
      "Payment and any insurer-specific declarations.",
    ],
    process: insuranceProcess,
    faqs: [
      [
        "What is a waiting period?",
        "It is a defined period during which specified conditions or treatments are not covered. Read product-specific waiting periods before purchase.",
      ],
      [
        "What does cashless treatment mean?",
        "At an eligible network hospital, the insurer or administrator may settle approved expenses directly, subject to authorisation and policy terms.",
      ],
    ],
  },
  {
    id: "life-insurance",
    category: "insurance",
    title: "Life Insurance",
    summary: "Financial protection for the people who depend on you.",
    overview:
      "Life insurance planning begins with responsibilities, income replacement, liabilities, existing assets, and time horizon. Product type and cover amount should follow the need.",
    benefits: [
      "Can provide financial support to nominees after an insured event.",
      "Term plans may offer focused protection for a defined period.",
      "Cover can be aligned with liabilities and family goals.",
      "Riders may address specific additional risks subject to terms.",
    ],
    eligibility: [
      "Age, income, occupation, and requested cover within insurer policy.",
      "Accurate health, lifestyle, travel, and occupation disclosure.",
      "Medical underwriting may be required.",
      "Financial justification may apply for higher cover amounts.",
    ],
    documents: [
      "Identity, address, and age proof.",
      "Income evidence for financial underwriting.",
      "Medical and lifestyle disclosures.",
      "Nominee information and relationship details.",
      "Medical examination reports when required.",
    ],
    process: insuranceProcess,
    faqs: [
      [
        "How much life cover should I consider?",
        "Review income replacement, outstanding liabilities, dependants, future goals, existing assets, and current insurance. A simple income multiple alone may miss important details.",
      ],
      [
        "Why is full disclosure important?",
        "Incomplete or incorrect disclosure can affect underwriting and future claims. Answer every proposal question accurately.",
      ],
    ],
  },
  {
    id: "motor-insurance",
    category: "insurance",
    title: "Motor Insurance",
    summary: "Required third-party cover and optional own-damage protection.",
    overview:
      "Motor insurance can combine mandatory third-party liability with cover for eligible damage to your own vehicle. Insured value, deductibles, add-ons, exclusions, and claim service matter.",
    benefits: [
      "Third-party cover addresses statutory liability requirements.",
      "Comprehensive structures can cover eligible own-vehicle damage.",
      "Add-ons may address depreciation, roadside needs, or engine risks.",
      "Renewal review helps keep vehicle and ownership details current.",
    ],
    eligibility: [
      "Valid vehicle registration and insurable interest.",
      "Vehicle use and class correctly disclosed.",
      "Inspection may apply after a policy break or for certain changes.",
      "Claim history and prior policy details accurately declared.",
    ],
    documents: [
      "Vehicle registration certificate.",
      "Previous policy and claim details.",
      "Owner KYC when required.",
      "Vehicle inspection images or report, if applicable.",
      "Loan or hypothecation details where relevant.",
    ],
    process: insuranceProcess,
    faqs: [
      [
        "What is IDV?",
        "Insured Declared Value is the policy value used for certain total-loss or theft settlements, subject to the policy terms.",
      ],
      [
        "What happens if the policy expires?",
        "The vehicle may be uninsured, and inspection or other conditions can apply before own-damage cover is restored. Renew before expiry where possible.",
      ],
    ],
  },
  {
    id: "itr-filing",
    category: "tax",
    title: "ITR Filing",
    summary: "Organised income-tax return preparation and filing support.",
    overview:
      "Accurate return filing requires the correct form, complete income reporting, reconciliation of tax information, and supporting records. We help organise the information before submission.",
    benefits: [
      "Helps maintain a documented tax-compliance record.",
      "Brings multiple income and tax information into one review.",
      "Can support loan, visa, and financial-documentation needs.",
      "Reduces avoidable errors from incomplete or mismatched information.",
    ],
    eligibility: [
      "Individuals or businesses requiring or choosing to file a return.",
      "Relevant income, deduction, and tax records available.",
      "Appropriate filing route based on taxpayer and income type.",
      "Late or revised filing subject to the rules and timelines then applicable.",
    ],
    documents: [
      "PAN, Aadhaar, and contact details.",
      "Form 16 or salary records, where applicable.",
      "Bank interest, capital-gain, rent, and other income details.",
      "Deduction and tax-payment records.",
      "Prior return and business records where relevant.",
    ],
    process: taxProcess,
    faqs: [
      [
        "Which income-tax return form applies?",
        "The correct form depends on residential status, income sources, amount, business or professional activity, and other conditions for the relevant year.",
      ],
      [
        "Should all income be reported?",
        "Income reporting should follow applicable tax law, including relevant interest, rent, gains, and other sources, even where tax was already deducted.",
      ],
    ],
  },
  {
    id: "tax-planning",
    category: "tax",
    title: "Tax Planning",
    summary: "Plan eligible deductions and cash flow before deadlines arrive.",
    overview:
      "Tax planning is most useful when it happens during the year. It should balance legal eligibility, liquidity, risk, life goals, documentation, and the chosen tax regime.",
    benefits: [
      "Creates time to compare eligible choices rather than rushing.",
      "Connects tax decisions with insurance, investment, and cash-flow needs.",
      "Supports better record keeping for return filing.",
      "Helps estimate advance-tax or year-end obligations where relevant.",
    ],
    eligibility: [
      "Taxpayer with income or transactions requiring review.",
      "Income estimate and current financial commitments available.",
      "Planning choices permitted under the applicable tax rules and regime.",
      "Willingness to review the plan when income or law changes.",
    ],
    documents: [
      "Current income estimate and salary structure, if applicable.",
      "Existing investments, insurance, loans, and deduction records.",
      "Prior return and tax computation.",
      "Business or capital-gain estimates where relevant.",
      "Tax statements and payment records.",
    ],
    process: taxProcess,
    faqs: [
      [
        "Is tax planning the same as buying tax-saving products?",
        "No. It starts with income, regime, eligible deductions, cash flow, risk, and goals. A product is considered only if it fits the wider need.",
      ],
      [
        "When should tax planning begin?",
        "Early in the financial year is useful, with reviews after significant income, employment, business, or legal changes.",
      ],
    ],
  },
  {
    id: "tds-refund",
    category: "tax",
    title: "TDS Refund",
    summary: "Review excess tax deduction and claim eligible refund through filing.",
    overview:
      "A refund may arise when tax deducted or paid is more than the final liability. The claim is generally made through an accurate return supported by reconciled tax information.",
    benefits: [
      "Helps identify eligible excess tax paid or deducted.",
      "Reconciles available tax statements with income records.",
      "Reduces mismatches that may delay processing.",
      "Creates a clear record for follow-up if processing needs attention.",
    ],
    eligibility: [
      "Tax paid or deducted exceeds the final liability for the relevant year.",
      "Income and tax credits can be supported and reconciled.",
      "Return filing or correction is available under applicable timelines.",
      "Bank and taxpayer details are valid for refund processing.",
    ],
    documents: [
      "PAN, Aadhaar, and validated bank details.",
      "Form 16, Form 16A, or other TDS records.",
      "Tax-credit and information statements.",
      "Complete income and deduction records.",
      "Prior filings or notices relating to the year, if any.",
    ],
    process: taxProcess,
    faqs: [
      [
        "How long does a refund take?",
        "Processing time varies and can depend on verification, data matching, return review, and tax-department processing.",
      ],
      [
        "What if TDS is missing from my tax statement?",
        "The deductor may need to correct the TDS return or details. Keep the deduction certificate and payment evidence while the mismatch is resolved.",
      ],
    ],
  },
];

const processSteps = [
  {
    title: "Requirement discussion",
    text: "We begin with your objective, timeline, and questions so the conversation starts with context rather than a product.",
  },
  {
    title: "Financial consultation",
    text: "We review the broader picture, explain relevant options, and identify the trade-offs that deserve attention.",
  },
  {
    title: "Eligibility check",
    text: "A preliminary review of income, obligations, credit, age, asset, or policy factors helps narrow the practical routes.",
  },
  {
    title: "Document verification",
    text: "We organise the required documents, check for obvious gaps, and explain any additional information that may be requested.",
  },
  {
    title: "Bank selection",
    text: "Suitable institutions are compared on product fit, expected eligibility, terms, service needs, and the complete cost picture.",
  },
  {
    title: "Application",
    text: "The selected application or proposal is prepared carefully and submitted with the available supporting information.",
  },
  {
    title: "Approval",
    text: "We coordinate questions and status updates while the institution completes its independent review and decision.",
  },
  {
    title: "Disbursement or issuance",
    text: "We support final requirements and help you review the sanction, disbursement, or policy details before completion.",
  },
  {
    title: "Post-service support",
    text: "Our role continues after completion with document guidance, servicing direction, and help understanding the next step.",
  },
];

const knowledgeArticles = [
  {
    id: "credit-score",
    title: "Credit Score",
    summary: "What it reflects, what affects it, and how to build healthier credit behaviour.",
    intro:
      "A credit score is a summary indicator based on information in your credit report. Lenders also consider income, obligations, work or business profile, and their own policies.",
    sections: [
      [
        "What commonly affects it",
        "Repayment history, credit utilisation, account age, application frequency, and the mix of credit accounts can influence your profile.",
      ],
      [
        "Practical habits",
        "Pay dues on time, avoid using limits continuously, review your report for errors, and apply for credit selectively.",
      ],
    ],
    callout:
      "A high score improves the starting point, but it does not guarantee approval or a particular interest rate.",
  },
  {
    id: "emi",
    title: "EMI",
    summary: "Understand the monthly payment and the total cost behind it.",
    intro:
      "An equated monthly instalment usually combines principal and interest. The amount is shaped by the loan size, rate, tenure, and repayment structure.",
    sections: [
      [
        "Tenure changes the picture",
        "A longer tenure may lower the monthly instalment but can increase total interest paid. A shorter tenure usually does the opposite.",
      ],
      [
        "Plan for room, not just eligibility",
        "Compare the proposed EMI with essential expenses, existing debts, irregular costs, and emergency savings before deciding.",
      ],
    ],
    callout:
      "A manageable EMI is one your cash flow can carry through ordinary disruptions, not only in a perfect month.",
  },
  {
    id: "loan-eligibility",
    title: "Loan Eligibility",
    summary: "The borrower, purpose, security, and policy factors lenders review.",
    intro:
      "Eligibility is not one universal number. Every lender applies product rules to the applicant's income, repayment capacity, credit profile, and the underlying purpose or asset.",
    sections: [
      [
        "Borrower factors",
        "Age, income stability, work or business continuity, banking conduct, existing obligations, and credit history are commonly reviewed.",
      ],
      [
        "Product factors",
        "Property, vehicle, collateral, loan purpose, tenure, and lender exposure can change the final eligible amount and terms.",
      ],
    ],
    callout:
      "Preliminary eligibility is an estimate. Final approval follows the lender's complete verification and policy checks.",
  },
  {
    id: "interest-rates",
    title: "Interest Rates",
    summary: "Why the lowest advertised number may not be the lowest-cost option.",
    intro:
      "Rates may be fixed, floating, or structured with reset conditions. Your profile, product, security, tenure, and lender pricing all influence the offer.",
    sections: [
      [
        "Compare the full cost",
        "Review processing, legal, valuation, insurance, account, prepayment, and other charges alongside the interest rate.",
      ],
      [
        "Understand rate movement",
        "For floating-rate loans, ask how the benchmark and spread work, how often resets occur, and whether EMI or tenure changes.",
      ],
    ],
    callout:
      "Ask for the complete repayment and fee picture before comparing offers.",
  },
  {
    id: "secured-unsecured",
    title: "Secured vs Unsecured",
    summary: "How collateral changes risk, amount, pricing, and processing.",
    intro:
      "Secured borrowing is backed by an asset. Unsecured borrowing is primarily assessed on the borrower's profile and repayment capacity.",
    sections: [
      [
        "Secured borrowing",
        "It may support larger amounts or longer tenures, but the pledged asset is at risk if repayment obligations are not met.",
      ],
      [
        "Unsecured borrowing",
        "It can be faster and does not pledge an asset, but amounts, pricing, and eligibility may be more sensitive to credit and income.",
      ],
    ],
    callout:
      "Choose based on purpose, repayment ability, total cost, and risk, not convenience alone.",
  },
  {
    id: "insurance-basics",
    title: "Insurance Basics",
    summary: "Cover, exclusions, waiting periods, deductibles, and disclosure.",
    intro:
      "Insurance transfers defined financial risks under a contract. The policy wording determines what is covered, limited, excluded, or conditional.",
    sections: [
      [
        "Read beyond the premium",
        "Compare the sum insured, term, waiting periods, exclusions, deductibles, co-payment, service network, and claim requirements.",
      ],
      [
        "Disclose completely",
        "Accurate health, occupation, lifestyle, vehicle, and prior-policy information is essential for underwriting and claims.",
      ],
    ],
    callout:
      "Keep the proposal copy, policy schedule, wording, receipts, and nominee details in an accessible place.",
  },
  {
    id: "tax-basics",
    title: "Tax Basics",
    summary: "Income records, deductions, tax credit, filing, and verification.",
    intro:
      "Tax compliance begins with complete records. Income, eligible deductions, tax deducted, advance tax, and filing details need to reconcile.",
    sections: [
      [
        "Organise through the year",
        "Keep salary, bank, investment, property, capital-gain, business, and deduction records instead of rebuilding them at filing time.",
      ],
      [
        "Complete the final steps",
        "After filing, complete applicable verification, keep the acknowledgement, and review communications or mismatches promptly.",
      ],
    ],
    callout:
      "Tax rules and deadlines change. Confirm the requirements for the relevant financial and assessment year.",
  },
  {
    id: "financial-planning",
    title: "Financial Planning",
    summary: "Connect cash flow, protection, borrowing, and long-term goals.",
    intro:
      "Planning gives each financial decision a role. It helps avoid solving one need in a way that creates another problem later.",
    sections: [
      [
        "Build the foundation",
        "Track cash flow, protect essential risks, maintain emergency funds, and understand high-cost debt before pursuing distant goals.",
      ],
      [
        "Review, do not set and forget",
        "Income, family, business, markets, and law change. Review the plan after major events and at regular intervals.",
      ],
    ],
    callout:
      "A useful plan is specific enough to guide the next action and flexible enough to survive change.",
  },
];

const commonFaqs = [
  [
    "Does an enquiry guarantee loan approval or policy issuance?",
    "No. Every bank, NBFC, or insurer makes its own decision under current product, credit, underwriting, legal, and regulatory requirements.",
  ],
  [
    "What should I keep ready for the first discussion?",
    "Your objective, preferred timeline, approximate income, existing obligations, and the basic documents you already have are enough to begin.",
  ],
  [
    "Will you explain charges before an application?",
    "The aim is to explain known product charges and process expectations before submission. Institution-specific charges should also be confirmed in the official offer or policy documents.",
  ],
  [
    "How do I protect my personal financial information?",
    "Share documents only through agreed channels. Never share passwords, card PINs, CVV, or OTPs. Read forms before signing and keep copies of submitted records.",
  ],
  [
    "Can self-employed applicants use these services?",
    "Yes. Many products serve professionals and business owners, though income assessment and required records differ from salaried applicants.",
  ],
  [
    "Can I compare more than one lender or insurer?",
    "Where suitable options are available, comparing total cost, key terms, eligibility, exclusions, and service needs can support a better-informed choice.",
  ],
  [
    "Do tax and financial rules stay the same every year?",
    "No. Rates, rules, forms, limits, and deadlines can change. Advice and filing should use the requirements applicable to the relevant period.",
  ],
];

const categoryLabels = {
  loans: "Loan services",
  insurance: "Insurance",
  tax: "Tax services",
};

const serviceGrid = document.querySelector("[data-service-grid]");
const serviceSelect = document.querySelector("[data-service-select]");
const dialog = document.querySelector("[data-content-dialog]");
const dialogContent = document.querySelector("[data-dialog-content]");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function iconRefresh() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderServices(category = "loans") {
  const visibleServices = services.filter((service) => service.category === category);

  serviceGrid.innerHTML = visibleServices
    .map(
      (service, index) => `
        <button
          class="service-card reveal"
          type="button"
          data-service-id="${service.id}"
          aria-label="View details for ${service.title}"
        >
          <small>${categoryLabels[service.category]} · ${String(index + 1).padStart(2, "0")}</small>
          <h3>${service.title}</h3>
          <p>${service.summary}</p>
        </button>
      `,
    )
    .join("");

  serviceGrid.querySelectorAll("[data-service-id]").forEach((card) => {
    card.addEventListener("click", () => openService(card.dataset.serviceId));
  });

  observeReveals(serviceGrid);
}

function listMarkup(items, ordered = false) {
  const tag = ordered ? "ol" : "ul";
  return `<${tag}>${items.map((item) => `<li>${item}</li>`).join("")}</${tag}>`;
}

function faqMarkup(items) {
  return items
    .map(
      ([question, answer]) => `
        <details>
          <summary>${question}</summary>
          <p>${answer}</p>
        </details>
      `,
    )
    .join("");
}

function panelMarkup(service, panel) {
  const panelContent = {
    overview: `
      <h3>Overview</h3>
      <p>${service.overview}</p>
    `,
    benefits: `
      <h3>Potential benefits</h3>
      ${listMarkup(service.benefits)}
    `,
    eligibility: `
      <h3>General eligibility</h3>
      ${listMarkup(service.eligibility)}
    `,
    documents: `
      <h3>Common documents</h3>
      ${listMarkup(service.documents)}
    `,
    process: `
      <h3>Typical process</h3>
      ${listMarkup(service.process, true)}
    `,
    faqs: `
      <h3>Common questions</h3>
      ${faqMarkup(service.faqs)}
    `,
  };

  return panelContent[panel];
}

function openService(serviceId) {
  const service = services.find((item) => item.id === serviceId);
  if (!service) return;

  dialogContent.innerHTML = `
    <div class="dialog-header">
      <p class="dialog-eyebrow">${categoryLabels[service.category]}</p>
      <h2>${service.title}</h2>
      <p>${service.summary}</p>
    </div>
    <div class="dialog-tabs" role="tablist" aria-label="${service.title} details">
      ${["overview", "benefits", "eligibility", "documents", "process", "faqs"]
        .map(
          (tab, index) => `
            <button
              type="button"
              class="${index === 0 ? "is-active" : ""}"
              role="tab"
              aria-selected="${index === 0}"
              data-dialog-tab="${tab}"
            >
              ${tab === "faqs" ? "FAQs" : tab[0].toUpperCase() + tab.slice(1)}
            </button>
          `,
        )
        .join("")}
    </div>
    <div class="dialog-panel" data-dialog-panel>
      ${panelMarkup(service, "overview")}
    </div>
    <form class="dialog-enquiry" data-dialog-enquiry data-service-name="${service.title}">
      <input type="text" name="name" autocomplete="name" placeholder="Your name" required />
      <input type="tel" name="phone" autocomplete="tel" inputmode="tel" placeholder="Phone number" minlength="10" required />
      <button class="button button-dark" type="submit">
        Ask about this
        <i data-lucide="arrow-up-right" aria-hidden="true"></i>
      </button>
    </form>
  `;

  const panel = dialogContent.querySelector("[data-dialog-panel]");
  dialogContent.querySelectorAll("[data-dialog-tab]").forEach((tab) => {
    tab.addEventListener("click", () => {
      dialogContent.querySelectorAll("[data-dialog-tab]").forEach((item) => {
        const isActive = item === tab;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-selected", String(isActive));
      });
      panel.innerHTML = panelMarkup(service, tab.dataset.dialogTab);
    });
  });

  dialogContent
    .querySelector("[data-dialog-enquiry]")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      openWhatsApp({
        name: formData.get("name"),
        phone: formData.get("phone"),
        service: service.title,
        message: `I would like to understand eligibility and next steps for ${service.title}.`,
      });
    });

  dialog.showModal();
  document.body.classList.add("is-dialog-open");
  iconRefresh();
}

function openArticle(articleId) {
  const article = knowledgeArticles.find((item) => item.id === articleId);
  if (!article) return;

  dialogContent.innerHTML = `
    <article class="article-content">
      <div class="dialog-header">
        <p class="dialog-eyebrow">Knowledge centre</p>
        <h2>${article.title}</h2>
        <p>${article.intro}</p>
      </div>
      ${article.sections
        .map(
          ([heading, body]) => `
            <h3>${heading}</h3>
            <p>${body}</p>
          `,
        )
        .join("")}
      <div class="article-callout">
        <strong>Keep in mind</strong>
        <p>${article.callout}</p>
      </div>
      <a class="button button-dark" href="#contact" data-article-enquiry>
        Discuss a requirement
        <i data-lucide="arrow-up-right" aria-hidden="true"></i>
      </a>
    </article>
  `;

  dialogContent.querySelector("[data-article-enquiry]").addEventListener("click", () => {
    dialog.close();
  });

  dialog.showModal();
  document.body.classList.add("is-dialog-open");
  iconRefresh();
}

function renderKnowledge() {
  const grid = document.querySelector("[data-knowledge-grid]");
  grid.innerHTML = knowledgeArticles
    .map(
      (article, index) => `
        <button
          class="knowledge-card reveal"
          type="button"
          data-article-id="${article.id}"
          aria-label="Read about ${article.title}"
        >
          <span class="knowledge-index">${String(index + 1).padStart(2, "0")}</span>
          <i data-lucide="book-open" aria-hidden="true"></i>
          <h3>${article.title}</h3>
          <p>${article.summary}</p>
        </button>
      `,
    )
    .join("");

  grid.querySelectorAll("[data-article-id]").forEach((card) => {
    card.addEventListener("click", () => openArticle(card.dataset.articleId));
  });
}

function renderFaqs() {
  const faqList = document.querySelector("[data-faq-list]");
  faqList.innerHTML = commonFaqs
    .map(
      ([question, answer], index) => `
        <article class="faq-item ${index === 0 ? "is-open" : ""}">
          <button
            class="faq-question"
            type="button"
            aria-expanded="${index === 0}"
          >
            <span>${question}</span>
            <i data-lucide="plus" aria-hidden="true"></i>
          </button>
          <div class="faq-answer">
            <div><p>${answer}</p></div>
          </div>
        </article>
      `,
    )
    .join("");

  faqList.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const nextState = !item.classList.contains("is-open");
      item.classList.toggle("is-open", nextState);
      button.setAttribute("aria-expanded", String(nextState));
    });
  });
}

function populateServiceSelect() {
  const groups = Object.keys(categoryLabels)
    .map((category) => {
      const options = services
        .filter((service) => service.category === category)
        .map(
          (service) =>
            `<option value="${service.title}">${service.title}</option>`,
        )
        .join("");
      return `<optgroup label="${categoryLabels[category]}">${options}</optgroup>`;
    })
    .join("");

  serviceSelect.insertAdjacentHTML("beforeend", groups);
}

function openWhatsApp({ name, phone, service, message }) {
  const enquiry = [
    "Hello Nath Financial Solutions,",
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    message ? `Requirement: ${message}` : "",
    "",
    "Please contact me about the next steps.",
  ]
    .filter(Boolean)
    .join("\n");

  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(enquiry)}`,
    "_blank",
    "noopener,noreferrer",
  );
}

function setupMainForm() {
  const form = document.querySelector("[data-enquiry-form]");
  const status = form.querySelector("[data-form-status]");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      status.textContent = "Please complete the required fields.";
      return;
    }

    const formData = new FormData(form);
    status.textContent = "Opening WhatsApp with your enquiry…";
    openWhatsApp({
      name: formData.get("name"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
    });
  });
}

function setupFilters() {
  document.querySelectorAll("[data-service-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-service-filter]").forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
      renderServices(button.dataset.serviceFilter);
    });
  });
}

function setupProcess() {
  const detail = document.querySelector("[data-process-detail]");
  const progress = document.querySelector("[data-process-progress]");

  document.querySelectorAll(".process-step").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.step);
      const step = processSteps[index];

      document.querySelectorAll(".process-step").forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });

      detail.innerHTML = `
        <p class="process-number">Step ${String(index + 1).padStart(2, "0")}</p>
        <h3>${step.title}</h3>
        <p>${step.text}</p>
      `;
      progress.style.height = `${((index + 1) / processSteps.length) * 100}%`;

      if (window.innerWidth <= 620) {
        button.scrollIntoView({
          behavior: reduceMotion.matches ? "auto" : "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    });
  });
}

function setupMenu() {
  const toggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("#mobile-menu");
  const header = document.querySelector("[data-header]");

  function setMenu(open) {
    menu.classList.toggle("is-open", open);
    header.classList.toggle("is-menu-open", open);
    document.body.classList.toggle("is-menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggle.innerHTML = `<i data-lucide="${open ? "x" : "menu"}" aria-hidden="true"></i>`;
    iconRefresh();
  }

  toggle.addEventListener("click", () => {
    setMenu(!menu.classList.contains("is-open"));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) setMenu(false);
  });
}

function setupHeader() {
  const header = document.querySelector("[data-header]");
  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

let revealObserver;

function observeReveals(root = document) {
  const elements = root.querySelectorAll(".reveal:not([data-reveal-ready])");

  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px" },
    );
  }

  elements.forEach((element, index) => {
    element.dataset.revealReady = "true";
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 65}ms`;
    revealObserver.observe(element);
  });
}

function setupDecisionMap() {
  const map = document.querySelector("[data-decision-map]");
  if (!map || reduceMotion.matches || window.matchMedia("(pointer: coarse)").matches) {
    return;
  }

  window.addEventListener(
    "pointermove",
    (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 14;
      const y = (event.clientY / window.innerHeight - 0.5) * 10;
      map.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    },
    { passive: true },
  );
}

document.querySelector("[data-dialog-close]").addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("close", () => {
  document.body.classList.remove("is-dialog-open");
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

renderServices();
renderKnowledge();
renderFaqs();
populateServiceSelect();
setupFilters();
setupProcess();
setupMainForm();
setupMenu();
setupHeader();
setupDecisionMap();
observeReveals();

document.querySelector("[data-current-year]").textContent =
  new Date().getFullYear();

iconRefresh();
