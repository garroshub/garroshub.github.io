# Garros Gong — Personal Website Template

This repository serves as a clean, academic/work personal website template hosted on GitHub Pages.

## Live Site

- https://garroshub.github.io/

## Contents

- Single-page profile (academic or professional)
- Research, publications, and working papers
- Professional experience and education
- Media contributions and personal interests

## Local Preview

```bat
cd /d D:\OpenCode\Projects\Garros_Page
py -m http.server 8000
```

Open: http://localhost:8000/

## Updating academic content

The publication list, editorial statuses, open-source projects, teaching, and employment details are maintained in `user-data/data.js`. Update them when the academic CV changes. This refresh uses the June 2026 base CV. Site sections are rendered by `index.js` and laid out in `index.html`. The separate public `Garros_CV.pdf` must also be kept current.
