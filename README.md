# Sito vetrina (solo codice)

Questo è un starter minimale (HTML/CSS/JS vanilla). Nessun builder o CMS.

## Struttura
- `index.html` – markup del sito
- `styles.css` – stile responsive
- `script.js` – interazione minima
- `assets/` – immagini (sostituisci i placeholder)
- `assets/favicon.svg` – icona del sito

## Come usarlo
1. Apri `index.html` nel browser per vedere il risultato.
2. Modifica testi, colori (`:root` in `styles.css`) e immagini in `/assets`.
3. Per il form contatti, il codice apre il tuo client email (mailto). Per un invio reale:
   - usa un backend semplice (es. PHP) oppure
   - servizi email API (es. Resend, Mailgun) o
   - serverless functions (Cloudflare Pages, Netlify) — sempre deploy da codice.

## Deploy senza builder
- **GitHub Pages**: crea repo, push codice → Settings → Pages (branch `main`, root). URL pubblico automatico.
- **Cloudflare Pages**: crea progetto da repo, build `N/A` (statico), cartella root.
- **Server proprio**: carica i file via FTP/SFTP nella directory pubblica.

## SEO di base
- Aggiorna `<title>` e `<meta name="description">`.
- Usa testi alt per le immagini.
- Mantieni performance alte (immagini WebP, lazyload).

Buon lavoro! ✨
