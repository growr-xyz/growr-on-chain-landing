# Peseta Landing Page

(c) 2021. Developed by the Growr On-chain team for the Bitcoin Bankathon.

## Tailwind CSS 

To generate the tailwind.css for distribution, run `npx tailwindcss -i ./styles.css -o ./dist/tailwind.css`.

## I18n

To generate the internationalized files for distribution, run `static-i18n -l en -i en -o dist default`.

Each new language is configured in default/locales (see en.json as an example). Add additional param to the command above, e.g. `-i es` for Spanish.