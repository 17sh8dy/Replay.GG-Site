# Replay.gg Website

A static, responsive Replay.gg marketing site built from the supplied desktop application's source and official brand assets.

## Run locally

Open `index.html` in your browser, or serve the directory with `python -m http.server 8000` and visit `http://localhost:8000`.

## Deploy

Deploy this folder directly to Cloudflare Pages as a static site. No install, build command, backend, or keys are required.

## Important release notes

- All download calls to action lead to `https://github.com/17sh8dy/Replay.GG/releases`, not to an assumed installer. The uploaded ZIP has a `package.json` version **0.5.0**, but its bundled installer is named **0.1.0**. Confirm and publish the intended current release before presenting a direct download.
- The website deliberately does **not** advertise streaming, AI highlights, automatic clipping, or paid plans as active features. They are described as planned or placeholders in the app source.
- Actual recording requires FFmpeg; in the app's README, it must be available at the packaged resources directory, via environment variable, or on PATH. Windows system audio may need a loopback device.
- All app images in `assets/*.webp` are real screenshots of Replay.gg 0.5.0 (captured 2026-10-18 from the built app). The Library shot shows the empty state; swap in a populated one when available.
- Official brand assets are reused from `ReplayGG/assets/logo` in the supplied archive.

Nothing here modifies the supplied desktop app. Nothing has been published.

## v1.1 adjustments

- Replaced the cramped top/footer logo with the original vector mark and wordmark shown side by side, preserving correct aspect ratios.
- Added subtle, one-time scroll reveals with IntersectionObserver; content is visible if JavaScript is unavailable and animations are disabled for reduced-motion preferences.
- Platform accuracy: the source has Windows (`gdigrab`), macOS (`avfoundation`) and Linux (`x11grab`) capture input branches. However `electron-builder.yml` and the package scripts only configure Windows NSIS publishing, while Windows-specific audio, webcam and game discovery functionality is present. The site therefore presents **Windows as the available release**, not as the only possible platform in the code; macOS/Linux support is not promised.
