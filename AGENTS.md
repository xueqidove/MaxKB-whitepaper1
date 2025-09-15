# Repository Guidelines

## Project Structure & Module Organization
- Root contains the primary content: `JumpServer-whitepaper.md` (source) and `index.html` (rendered site).
- Assets live under `images/` (generated from embedded images in the Markdown).
- Utility script: `extract_images.py` (extracts base64 images from the Markdown to `images/`).
- Other: `CNAME` for GitHub Pages custom domain, `LICENSE`, `README.md`.

## Build, Test, and Development Commands
- Extract images from Markdown:
  - `python3 extract_images.py` — saves decoded images into `images/` and logs counts.
- Preview locally:
  - `python3 -m http.server 8000` then open `http://localhost:8000/index.html`.
- Regenerate assets after editing `JumpServer-whitepaper.md`:
  - Re-run `python3 extract_images.py` and verify `images/` updates.

## Coding Style & Naming Conventions
- Python (`extract_images.py`):
  - Python 3.8+; PEP 8; 4-space indentation; snake_case for variables/functions.
  - Keep scripts stateless and idempotent; avoid hardcoding paths beyond project root.
- HTML/CSS (`index.html`):
  - Two-space indentation; semantic tags where possible; descriptive class names.
- Assets:
  - Images generated as `images/<sanitized-alt>.<ext>`; prefer meaningful alt text in Markdown.

## Testing Guidelines
- Manual checks:
  - Run `python3 extract_images.py` and confirm the reported image count matches expectations.
  - Open `index.html` locally; verify images render and links work.
- Optional validation:
  - Validate HTML via an online validator when making structural changes.

## Commit & Pull Request Guidelines
- Commit messages: prefer Conventional Commits (e.g., `feat: ...`, `fix: ...`, `perf: ...`, `docs: ...`).
- Scope small, atomic commits; explain “why” in the body if non-obvious.
- Pull Requests should include:
  - Summary of changes, screenshots for visual changes, and any manual test notes.
  - Reference related issues (e.g., `Closes #123`).

## Security & Configuration Tips
- Do not commit secrets; this site is static. Review diffs for large/binary additions.
- `CNAME` config must remain at repo root for Pages; update only when the domain changes.
