# DT208G – Laboration 3 – Angular Single Page Application
En Single Page Application (SPA) byggd med Angular där användaren kan konvertera olika måttenheter och temperaturer.

## Publicerad webbplats
https://dt208g-lab3.netlify.app/

## GitHub‑repo
https://github.com/ardalansale/dt208g-lab3

## Funktionalitet
- Navigering utan felsidesladdning (Routing / SPA)
- Konvertera meter till feet (händelsehantering)
- Konvertera Celsius till Fahrenheit (händelsehantering)
- Återanvändbar underkomponent för information (`app-info-box`)
- Responsiv och minimalistisk design

## Sidor och komponenter
- Start (`src/app/start/`) – landningssida med information och InfoBox-komponenten
- Konvertera (`src/app/konvertera/`) – formulär för måttenhets- och temperaturkonvertering
- Om (`src/app/om/`) – information om webbplatsen och uppgiften
- InfoBox (`src/app/info-box/`) – fristående komponent som importeras i Startsidan

## Tekniker
- HTML
- CSS
- TypeScript
- Angular (Standalone Components, Routing)

## Installation och körning
1. Klona repot:
   git clone [DIN_GITHUB_URL]
2. Installera beroenden:
   npm install
3. Starta utvecklingsservern:
   ng serve
4. Öppna webbläsaren på `http://localhost:4200/`.