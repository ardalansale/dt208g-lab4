# DT208G – Laboration 4 – Angular II (Ramschema)
En Single Page Application (SPA) byggd med Angular där användaren kan söka och sortera bland kurser i ett ramschema som hämtas dynamiskt via ett externt REST-API.

## Publicerad webbplats
https://dt208g-lab4.netlify.app/

## GitHub-repo
https://github.com/ardalansale/dt208g-lab4

## Funktionalitet
- Hämtar kursdata dynamiskt från externt JSON-API (`HttpClient`).
- Realtidssökning och filtrering på kurskod och kursnamn (`ngModel`).
- Sortering av kurser i stigande och fallande ordning (kurskod, kursnamn och progression).
- Länkar till officiella kursplaner.
- Responsiv och stilren design anpassad med enhetlig CSS-bas och `DM Sans`-typsnitt.

## Komponenter och struktur
- `AppComponent` (`src/app/app.ts`) – Huvudkomponent som hanterar sökning, sortering och visning.
- `CourseService` (`src/app/services/course.service.ts`) – Hanterar API-anrop och datahämtning.
- `Course` (`src/app/models/course.interface.ts`) – TypeScript-gränssnitt för kursdata.

## Tekniker
- HTML
- CSS (Global stilmall med `DM Sans` + komponentanpassad CSS)
- TypeScript
- Angular 17+ (Standalone Components, Control Flow `@if` / `@for`, HttpClient, FormsModule)

## Installation och körning
1. Klona repot:
   git clone https://github.com/ardalansale/dt208g-lab4.git
2. Installera beroenden:
   npm install
3. Starta utvecklingsservern:
   npm start
4. Öppna webbläsaren på `http://localhost:4200/`.