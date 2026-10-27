# Kevin Joseph Portfolio Refresh

This package contains the static GitHub Pages portfolio and a PowerShell deployment script. It uses the existing HTML, CSS, and JavaScript setup and adds no new runtime dependencies.

## What changed in this revision

- Simplified SQL Studio into a readable proof-of-concept story without the cramped mock interface or repeated result block.
- Kept the 25.9% to 83.0% execution accuracy improvement and the 4,070-hour annual impact as an explicitly labelled projection.
- Retained the 168-table metric in the top statistics strip, without repeating internal schema details in the SQL Studio description.
- Moved FinSight retrieval details and limitations into an expandable section in the existing project card, so the project is named once.
- Added Data Science and grouped technical, applied AI, analytics, business domain, and language skills based on the supplied resume and stated marketing background.
- Added links to the general Unstop profile and the separate Unstop awards profile.
- Clarified ongoing leadership roles, teaching activities, and completed education status.
- Shortened the light and dark theme toggle label to prevent wrapping, improved the skip link visibility behavior, and added cache-busting versions to CSS and JavaScript references.
- Retained the existing responsive layout, reduced-motion support, theme-aware styling, SEO metadata, social preview image, favicon, sitemap, and robots file.
- Preserved the existing resume PDF and its link. The deployment script checks that the PDF exists in the repository but does not overwrite it.

## Publish on Windows

1. Extract this ZIP into `C:\Users\Kevin Joseph\Downloads\Portfolio-Refresh-Updated`.
2. Open PowerShell and run:

   ```powershell
   powershell.exe -NoProfile -ExecutionPolicy Bypass -File "$HOME\Downloads\Portfolio-Refresh-Updated\Publish-Portfolio-Refresh.ps1"
   ```

3. The script checks the repository remote and branch, validates important content, backs up existing target files outside the repository, runs `git diff --check`, then commits and pushes.
4. After GitHub Pages deploys, refresh `https://somebeing2.github.io/` with `Ctrl+F5`.

The deployment script targets the existing repository at `Downloads\portfolio-live`. It does not recreate the repository or initialise Git.
