# Dharshini S – Portfolio

React + Vite portfolio. Editorial light theme, no UI libraries.

## Run locally in VS Code
1. Install Node.js 18 or newer (LTS) from https://nodejs.org.
2. In VS Code: File > Open Folder, choose `dharshini-portfolio`.
3. Open the terminal (Ctrl+`) and run:
   ```
   npm install
   npm run dev
   ```
4. Open the address shown (usually http://localhost:5173). Edits reload automatically.

## Edit your content
- `src/data.js`: email, links, LeetCode numbers, skills, projects, timeline.
- `src/styles.css`: colours (the `:root` variables at the top), fonts and spacing.
- `src/components/`: one file per section.
- `src/assets/`: your photo, hackathon photo and LeetCode screenshot (replace the files, keep the names).
- `public/Dharshini_S_Resume.pdf`: replace with your latest resume, keeping the name.

## Build and deploy
- `npm run build` creates the `dist/` folder.
- `npm run preview` serves the built site locally.
- GitHub Pages: push the project to a repository, then run `npm run deploy` (publishes `dist/` to the `gh-pages` branch). In the repository settings, set Pages to serve from the `gh-pages` branch.
- Netlify or Vercel: import the repository, build command `npm run build`, output directory `dist`.

## Still to fill in
- Links to the two project repositories (currently pointing to your GitHub repositories page).
- Dates for the internship, hackathon and prizes.
- Move Spring Boot and Node.js out of "Learning now" once you are comfortable with them.
