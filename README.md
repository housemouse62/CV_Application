# BYOCV — Build Your Own CV

**[Live Demo](https://byocv.netlify.app/)**

A browser-based CV builder that lets you compose, edit, and print a resume without any accounts, installs, or data leaving your browser.

Best viewed on desktop. Designed for building and printing a resume — not optimized for mobile.

---

## Features

- **Live preview** — edits are reflected in the resume instantly as you work
- **Four sections** — General Info, Work History, Education, and Technical Skills
- **Reorderable entries** — move work, education, and skill entries up or down to control the layout of your resume
- **Undo / Redo** — full history of changes with unlimited undo and redo
- **Print to PDF** — print directly from the browser; the editor UI is hidden on print
- **Accessible** — proper label/input associations, keyboard navigation, and focus indicators throughout

---

## Built With

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- Plain CSS — no UI framework or component library

---

## Running Locally

```bash
npm install
npm run dev
```

---

## What I Learned

This project was a deep dive into core React patterns: lifting state to a common ancestor, controlled components, and managing complex shared state across many sibling components. The undo/redo system — modelling history as `{ past, present, future }` and treating every state update as an immutable snapshot — was a particularly rewarding problem to work through from scratch.

---

## Planned Features

- Multiple resume layout/template options
- Color themes and typography choices
- Headshot / profile image support
