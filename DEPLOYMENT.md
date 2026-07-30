# Deployment to Vercel and GoDaddy

1. Push this project to a private GitHub repository.
2. Import the repository into Vercel.
3. Add environment variables from `.env.example`.
4. Deploy and test the Vercel preview URL.
5. In Vercel Project Settings → Domains, add `nathfinancialsolutions.com` and `www.nathfinancialsolutions.com`.
6. Vercel will display the required DNS records.
7. In GoDaddy → Domain Portfolio → DNS, add or update only the records requested by Vercel.
8. Preserve MX and email-related TXT records.
9. Wait for DNS propagation and confirm SSL is active.
10. Test forms, language routes, call and WhatsApp actions on the live domain.
