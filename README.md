# Nath Financial Solutions

Responsive static website for loans, insurance, tax guidance, and financial
education. It is built with plain HTML, CSS, and JavaScript so it can deploy
directly to GitHub Pages without a build step.

## Local preview

```bash
npm run dev
```

Open `http://localhost:4173`.

## Checks

```bash
npm run check
```

## GitHub Pages

The workflow at `.github/workflows/deploy-pages.yml` deploys the repository root
when `main` is pushed. In the GitHub repository settings, set **Pages > Build
and deployment > Source** to **GitHub Actions**.

## Content verification before launch

The phone number and abbreviated Sangli address currently used in `index.html`
and `app.js` came from a public business-directory result, not from the supplied
content specification. Confirm them before sharing the production URL.

The specification did not provide a verified email address, office hours,
founder biography, partner names, or customer testimonials. Those items were
not invented. Add them only after the business supplies approved information.
