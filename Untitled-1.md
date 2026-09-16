Selected Files Directory Structure:

└── ./
├── .figma
│   └── make
│       ├── analyze-routes
│       ├── deploy
│       ├── deploy-preview
│       ├── dev
│       ├── dev.json
│       ├── format
│       ├── install
│       ├── langserver
│       └── site.json
├── .gitattributes
├── .gitignore
├── .mise.toml
├── AGENTS.md
├── CLAUDE.md
├── index.html
├── package-lock.json
├── package.json
├── pnpm-lock.yaml
├── public
│   ├── favicon.svg
│   └── images
│       └── logos
│           ├── cbtl.png
│           ├── cosmopolitan.png
│           └── muara.png
├── src
│   ├── App.tsx
│   ├── assets
│   │   └── reference.png
│   ├── components
│   │   └── MedalReveal.tsx
│   ├── imports
│   │   └── Rectangle_1.png
│   ├── index.css
│   ├── main.tsx
│   ├── pages
│   │   ├── GameLevels.tsx
│   │   ├── Home.tsx
│   │   ├── PlatformerGame.tsx
│   │   ├── RunnerGame.tsx
│   │   └── ShooterGame.tsx
│   └── vite-env.d.ts
├── tsconfig.json
└── vite.config.ts


--- .gitattributes ---

# Git LFS Tracking Rules
# Generated for binary, large, and non-diffable file types

# ---------------------------------------------------------------------------
# Images & Graphics
# ---------------------------------------------------------------------------
*.png                filter=lfs diff=lfs merge=lfs -text
*.jpg                filter=lfs diff=lfs merge=lfs -text
*.jpeg               filter=lfs diff=lfs merge=lfs -text
*.gif                filter=lfs diff=lfs merge=lfs -text
*.bmp                filter=lfs diff=lfs merge=lfs -text
*.tiff               filter=lfs diff=lfs merge=lfs -text
*.tif                filter=lfs diff=lfs merge=lfs -text
*.ico                filter=lfs diff=lfs merge=lfs -text
*.webp               filter=lfs diff=lfs merge=lfs -text
*.psd                filter=lfs diff=lfs merge=lfs -text
*.ai                 filter=lfs diff=lfs merge=lfs -text
*.sketch             filter=lfs diff=lfs merge=lfs -text

# ---------------------------------------------------------------------------
# Video
# ---------------------------------------------------------------------------
*.mp4                filter=lfs diff=lfs merge=lfs -text
*.mov                filter=lfs diff=lfs merge=lfs -text
*.avi                filter=lfs diff=lfs merge=lfs -text
*.mkv                filter=lfs diff=lfs merge=lfs -text
*.wmv                filter=lfs diff=lfs merge=lfs -text
*.flv                filter=lfs diff=lfs merge=lfs -text
*.webm               filter=lfs diff=lfs merge=lfs -text
*.m4v                filter=lfs diff=lfs merge=lfs -text
*.mpg                filter=lfs diff=lfs merge=lfs -text
*.mpeg               filter=lfs diff=lfs merge=lfs -text

# ---------------------------------------------------------------------------
# Audio
# ---------------------------------------------------------------------------
*.mp3                filter=lfs diff=lfs merge=lfs -text
*.wav                filter=lfs diff=lfs merge=lfs -text
*.flac               filter=lfs diff=lfs merge=lfs -text
*.aac                filter=lfs diff=lfs merge=lfs -text
*.ogg                filter=lfs diff=lfs merge=lfs -text
*.m4a                filter=lfs diff=lfs merge=lfs -text
*.wma                filter=lfs diff=lfs merge=lfs -text
*.aiff               filter=lfs diff=lfs merge=lfs -text

# ---------------------------------------------------------------------------
# 3D & Game Assets
# ---------------------------------------------------------------------------
*.fbx                filter=lfs diff=lfs merge=lfs -text
*.obj                filter=lfs diff=lfs merge=lfs -text
*.blend              filter=lfs diff=lfs merge=lfs -text
*.dae                filter=lfs diff=lfs merge=lfs -text
*.3ds                filter=lfs diff=lfs merge=lfs -text
*.max                filter=lfs diff=lfs merge=lfs -text
*.unity              filter=lfs diff=lfs merge=lfs -text
*.unitypackage       filter=lfs diff=lfs merge=lfs -text
*.uasset             filter=lfs diff=lfs merge=lfs -text
*.umap               filter=lfs diff=lfs merge=lfs -text

# ---------------------------------------------------------------------------
# Archives & Compressed Files
# ---------------------------------------------------------------------------
*.zip                filter=lfs diff=lfs merge=lfs -text
*.tar                filter=lfs diff=lfs merge=lfs -text
*.gz                 filter=lfs diff=lfs merge=lfs -text
*.bz2                filter=lfs diff=lfs merge=lfs -text
*.7z                 filter=lfs diff=lfs merge=lfs -text
*.rar                filter=lfs diff=lfs merge=lfs -text
*.tgz                filter=lfs diff=lfs merge=lfs -text

# ---------------------------------------------------------------------------
# Documents & Fonts
# ---------------------------------------------------------------------------
*.pdf                filter=lfs diff=lfs merge=lfs -text
*.docx               filter=lfs diff=lfs merge=lfs -text
*.xlsx               filter=lfs diff=lfs merge=lfs -text
*.pptx               filter=lfs diff=lfs merge=lfs -text
*.ttf                filter=lfs diff=lfs merge=lfs -text
*.otf                filter=lfs diff=lfs merge=lfs -text
*.woff               filter=lfs diff=lfs merge=lfs -text
*.woff2              filter=lfs diff=lfs merge=lfs -text
*.eot                filter=lfs diff=lfs merge=lfs -text

# ---------------------------------------------------------------------------
# Data & Machine Learning
# ---------------------------------------------------------------------------
*.parquet            filter=lfs diff=lfs merge=lfs -text
*.hdf5               filter=lfs diff=lfs merge=lfs -text
*.h5                 filter=lfs diff=lfs merge=lfs -text
*.pkl                filter=lfs diff=lfs merge=lfs -text
*.pickle             filter=lfs diff=lfs merge=lfs -text
*.npy                filter=lfs diff=lfs merge=lfs -text
*.npz                filter=lfs diff=lfs merge=lfs -text
*.bin                filter=lfs diff=lfs merge=lfs -text
*.pt                 filter=lfs diff=lfs merge=lfs -text
*.pth                filter=lfs diff=lfs merge=lfs -text
*.onnx               filter=lfs diff=lfs merge=lfs -text
*.pb                 filter=lfs diff=lfs merge=lfs -text
*.safetensors        filter=lfs diff=lfs merge=lfs -text
*.gguf               filter=lfs diff=lfs merge=lfs -text

# ---------------------------------------------------------------------------
# Databases
# ---------------------------------------------------------------------------
*.db                 filter=lfs diff=lfs merge=lfs -text
*.sqlite             filter=lfs diff=lfs merge=lfs -text
*.sqlite3            filter=lfs diff=lfs merge=lfs -text
*.mdb                filter=lfs diff=lfs merge=lfs -text
*.accdb              filter=lfs diff=lfs merge=lfs -text

# ---------------------------------------------------------------------------
# Executables & Libraries
# ---------------------------------------------------------------------------
*.exe                filter=lfs diff=lfs merge=lfs -text
*.dll                filter=lfs diff=lfs merge=lfs -text
*.so                 filter=lfs diff=lfs merge=lfs -text
*.dylib              filter=lfs diff=lfs merge=lfs -text
*.a                  filter=lfs diff=lfs merge=lfs -text
*.lib                filter=lfs diff=lfs merge=lfs -text
*.wasm               filter=lfs diff=lfs merge=lfs -text

# ---------------------------------------------------------------------------
# Build Artifacts & Packages
# ---------------------------------------------------------------------------
*.jar                filter=lfs diff=lfs merge=lfs -text
*.war                filter=lfs diff=lfs merge=lfs -text
*.ear                filter=lfs diff=lfs merge=lfs -text
*.apk                filter=lfs diff=lfs merge=lfs -text
*.ipa                filter=lfs diff=lfs merge=lfs -text
*.deb                filter=lfs diff=lfs merge=lfs -text
*.rpm                filter=lfs diff=lfs merge=lfs -text
*.dmg                filter=lfs diff=lfs merge=lfs -text
*.iso                filter=lfs diff=lfs merge=lfs -text
*.img                filter=lfs diff=lfs merge=lfs -text

# ---------------------------------------------------------------------------
# CAD & Scientific
# ---------------------------------------------------------------------------
*.dwg                filter=lfs diff=lfs merge=lfs -text
*.dxf                filter=lfs diff=lfs merge=lfs -text
*.step               filter=lfs diff=lfs merge=lfs -text
*.stp                filter=lfs diff=lfs merge=lfs -text
*.iges               filter=lfs diff=lfs merge=lfs -text
*.stl                filter=lfs diff=lfs merge=lfs -text
*.nc                 filter=lfs diff=lfs merge=lfs -text
*.mat                filter=lfs diff=lfs merge=lfs -text


--- .gitignore ---

node_modules/
dist/
build/
.cache/
.env*
.vite/
vite.config.*.timestamp-*
*.tsbuildinfo
*-debug.log*
logs/
*.log
.claude-replay.*
.tmp-*
/.figma/design-context/

# Platform-managed agentplat state, not project source. In the
# client-initiated single-repo workspace layout (make's `Path: "."` spec) the
# repo root IS the workspace root, so these land inside this repo rather than
# beside it.
/.plugins/
/.opencode-skills/


--- .mise.toml ---

[tools]
node = "22"
"npm:pnpm" = "10.34.3"


--- AGENTS.md ---

# figma-make-app

React + Vite + Tailwind CSS project running inside Figma Make.

## Development Server

A Vite development server is **already running** on `$PORT` (default 8443). You don't need to start it manually.

- Preview URL: The user can access the running app through the preview panel
- Hot reload: Changes to source files are reflected immediately

## Project Structure

This is the canonical project structure. Start with task-relevant files below. Only follow imports or inspect other files when required, when a documented path is missing, or when the repository contradicts this guide.

- `src/main.tsx` - React entrypoint; imports `src/index.css` and mounts `src/App.tsx` into the `#root` element
- `src/App.tsx` - Primary application component and the usual starting point for UI work
- `src/index.css` - Global CSS entrypoint and Tailwind CSS v4 import
- `index.html` - Vite HTML shell containing the `#root` element and loading `src/main.tsx`
- `package.json` - Project dependencies and the Vite build, development, preview, and formatting scripts
- `vite.config.ts` - Vite configuration with React, Tailwind CSS v4, and Figma Make plugins plus the `@` alias for `src`
- `.mise.toml` - Toolchain versions for Node.js and pnpm

## Dependencies

- Runtime: React 19 and React DOM 19
- Styling: Tailwind CSS v4 with the `@tailwindcss/vite` plugin
- Build tooling: Vite 8, TypeScript 5.7, and `@vitejs/plugin-react`
- Formatting: oxfmt

## Styling

This project uses **Tailwind CSS v4** through the `@tailwindcss/vite` plugin configured in `vite.config.ts`. `src/index.css` imports Tailwind with `@import 'tailwindcss';`. Use Tailwind utility classes directly in JSX and put global CSS or Tailwind v4 theme customization in `src/index.css`. This scaffold does not need a Tailwind config file or PostCSS config.

`src/main.tsx` imports `src/index.css`, so global font wiring belongs in `src/index.css`. Keep CSS `@import` statements first, then add any `@font-face` rules and font-family defaults there.

## Code quality

- Use double quotes for strings containing apostrophes (`"We're here to help"`), or escape them in single-quoted strings. An unescaped apostrophe in a single-quoted string breaks the build.
- Ensure JSX tags are closed and braces are balanced.
- Export components as default exports.


--- CLAUDE.md ---

@AGENTS.md


--- index.html ---

<!doctype html>
<html lang="<!-- figma:lang -->">
  <head>
    <!-- figma:head-start -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>Fawwaz Susanto — Portfolio</title>
    <!-- figma:head-end -->
  </head>
  <body>
    <!-- figma:body-start -->
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
    <!-- figma:body-end -->
  </body>
</html>


--- package-lock.json ---

{
  "name": "figma-make-app",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "figma-make-app",
      "version": "1.0.0",
      "dependencies": {
        "@types/three": "^0.186.0",
        "react": "^19.0.0",
        "react-dom": "^19.0.0",
        "three": "^0.186.0"
      },
      "devDependencies": {
        "@tailwindcss/vite": "^4.0.0",
        "@types/node": "^22.0.0",
        "@types/react": "^19.0.0",
        "@types/react-dom": "^19.0.0",
        "@vitejs/plugin-react": "^6.0.0",
        "oxfmt": "^0.2.0",
        "tailwindcss": "^4.0.0",
        "typescript": "^5.7.0",
        "vite": "^8.0.5"
      }
    },
    "node_modules/@dimforge/rapier3d-compat": {
      "version": "0.12.0",
      "resolved": "https://registry.npmjs.org/@dimforge/rapier3d-compat/-/rapier3d-compat-0.12.0.tgz",
      "integrity": "sha512-uekIGetywIgopfD97oDL5PfeezkFpNhwlzlaEYNOA0N6ghdsOvh/HYjSMek5Q2O1PYvRSDFcqFVJl4r4ZBwOow==",
      "license": "Apache-2.0"
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.6.0.tgz",
      "integrity": "sha512-T7jf+5zgsZHwNJ4lvQ7/aezbyk0nNX+zJVWpmHA7VYsEx7a7qr5Rg5IbtJFqkgze5Y2sruq1RUY8Q837Od7iFw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@oxc-project/types": {
      "version": "0.148.0",
      "resolved": "https://registry.npmjs.org/@oxc-project/types/-/types-0.148.0.tgz",
      "integrity": "sha512-Nm4s/jB+4FpFsPhWGEC4h7rzksesmtnMXomo6rCMcg/b8zLQuOziRgkCS1fxDCXOlJB/6Q8oABOZ/OP6RIPj9A==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/oxc-project"
      }
    },
    "node_modules/@oxfmt/darwin-arm64": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/@oxfmt/darwin-arm64/-/darwin-arm64-0.2.0.tgz",
      "integrity": "sha512-NK7iEPqRovUvKac+4dn2ui8v5Y5q6UJ9v4z5Zjr5lmEzTlBwXToP3TwY75IAaCYeu0g8Es7ToJpS7qCQuxUhuA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@oxfmt/darwin-x64": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/@oxfmt/darwin-x64/-/darwin-x64-0.2.0.tgz",
      "integrity": "sha512-eXDgT+DbIMnA3sWE+w38rOvXaxkP4RvHi41rPpWb9XoRGbM+tOo0c8RYqCIX39n7PizOlbF/xUBh9nMhiW01wQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@oxfmt/linux-arm64-gnu": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/@oxfmt/linux-arm64-gnu/-/linux-arm64-gnu-0.2.0.tgz",
      "integrity": "sha512-h4mw9/Lck5X/SU1RPE26VraoBJgn9SOoLl8GnaYvtmRBFHK0v+2KpnBSwMWeiaIxCdJSsrVc9mpKSOcPsen7Cg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@oxfmt/linux-arm64-musl": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/@oxfmt/linux-arm64-musl/-/linux-arm64-musl-0.2.0.tgz",
      "integrity": "sha512-kDZ/kVCgh9kSczMH2gPXZs+rsY/VcCQ1BoQnND8D3v1Le91LceJ5s/a4XBBA3ADI3NiPdqNmK2ssaxY4BfgXDg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@oxfmt/linux-x64-gnu": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/@oxfmt/linux-x64-gnu/-/linux-x64-gnu-0.2.0.tgz",
      "integrity": "sha512-qvf6cNuf4z3yjzjSvg4Jwr88jDyeFaYPU+4dBWVr6fdWhAA+BIuIvurJWYQGvWNNSkobVWH3A7m+wp+h5fNsSg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@oxfmt/linux-x64-musl": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/@oxfmt/linux-x64-musl/-/linux-x64-musl-0.2.0.tgz",
      "integrity": "sha512-D0rw4BVLHEbtMB6p9e+Ph7Y/56oD1DRP4Qcbbv1B1w0kJanWBB3vMH+v2rqgeYsErqJOtLpYRkPFmJSU9In2HA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@oxfmt/win32-arm64": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/@oxfmt/win32-arm64/-/win32-arm64-0.2.0.tgz",
      "integrity": "sha512-QM0fP8YUvBNyuNa6d+jNonV34A6zGvvQ2mX93wnERpX25jIbFKljKiKDiWo2M1nUsW8zL2z4ESEeaLO9bx8djg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@oxfmt/win32-x64": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/@oxfmt/win32-x64/-/win32-x64-0.2.0.tgz",
      "integrity": "sha512-WkFXliDbwFiziBSfvWXeM0Y3x07Kxxrl39kgsp+N3n5QgzsM8q6qe094+OW+hItDQ+9SSd2y9u231sMCsKxlog==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rolldown/binding-android-arm-eabi": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-android-arm-eabi/-/binding-android-arm-eabi-1.2.7.tgz",
      "integrity": "sha512-EypzgnYCwyVY4NDHKzGmNJT5b+XaQEBniHxsMdeIQLB/tcCzZnhqrzHpZFbX9iaxx+5RiB8caATBtfvZP7zVxQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-android-arm64": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-android-arm64/-/binding-android-arm64-1.2.7.tgz",
      "integrity": "sha512-l17HE9EweWaqJZhuUuNBN/FzM62xw+DECVnJyvMsxn8vJFAGLy5QfLDoYAcronkAN8VxKZHezDpulHDPx95vFw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-arm64": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-arm64/-/binding-darwin-arm64-1.2.7.tgz",
      "integrity": "sha512-8ED8ELFvHXc6OCETIn4gXObPiaR6bckM/ipXtbzlPVDRMBfEGjCKgO90F9YtfdpDatVx/ZQw7aZ1vUMf/+T3Mw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-x64": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-x64/-/binding-darwin-x64-1.2.7.tgz",
      "integrity": "sha512-/WPripjtiAIZ2tWY7ddijORT0Ujg87wxWW/qcoFVCKAWVDPhtY0xr7Dj0M3GyNGz60jGwTElhro/mkF9dT7dDQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-freebsd-x64": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-freebsd-x64/-/binding-freebsd-x64-1.2.7.tgz",
      "integrity": "sha512-14DI4NcqpvbICxSnGLx3PmtDaWqRP/KGSGb6C+JLLVPeZRl6dKdHba3pGsqT3vpdTqhEYIPG0MMQ8c0xYqoJxA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm-gnueabihf": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.2.7.tgz",
      "integrity": "sha512-bxrWIRvHWQvbJwi+VIie/kDJmQxcNE6xxWwZdqF/ExVAigtHkv54WTLQPb+QsZdnFy18fg7JPfWGL0RH6vwIlQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-gnu": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.2.7.tgz",
      "integrity": "sha512-toOY2BChBZyuxU7OYX6Tn389di4IzAqPTycVcci0O7FSfBqzRB3RZn+K5Is6ANf4tmgRd/K1yZTsNTXbkXsnLg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-musl": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.2.7.tgz",
      "integrity": "sha512-lAIXTH/aiLRLxsTgQvfhjo4K1ydWIp00+V0voOr9beb/9ZmkUFrSIb03dXNFRgMNvkE6oGsF10ioQ6UsI+vS5Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-ppc64-gnu": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-ppc64-gnu/-/binding-linux-ppc64-gnu-1.2.7.tgz",
      "integrity": "sha512-kdnwS28Pkenp/mZMRwjXXXwxQ7pIsm+bF919LUK93BOyhcLsrVKdP2p9fxpiPNPAbNuch8ypQt0pm2P2LYCAGg==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-s390x-gnu": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-s390x-gnu/-/binding-linux-s390x-gnu-1.2.7.tgz",
      "integrity": "sha512-516OdsyLdr5E65paF3yBF55t8mfm9+gmtCsK3xI7XKXIT7EfRlHhxL8K/NR6Hu8BWSgF5+1w74lTL0+nxcc8Qw==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-gnu": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.2.7.tgz",
      "integrity": "sha512-r8/z8n7GFaYRln3xmP1Cxy0HH/HLM0uBUPkEuSVEfKGDA89M0FsZRZJRSwe/tJjRx+fpH/gjorfhB8tmEbSFLA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-musl": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-musl/-/binding-linux-x64-musl-1.2.7.tgz",
      "integrity": "sha512-pAsE8iiDxUg1xBqdhrTfg45AVDVpirjz00sblEYClGNNcMnDb+e8beQgqIAw6LvauX/APvgxUnwrgun/YYGBhw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-openharmony-arm64": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-openharmony-arm64/-/binding-openharmony-arm64-1.2.7.tgz",
      "integrity": "sha512-lTcIYmmnQQA8Or/2DatS6oSqcdLHvendjS+zLu+FwgToynWMRSmQdpM65fTANJgIS4mjbMOo5KT2lnT9SAb96w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-arm64-msvc": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.2.7.tgz",
      "integrity": "sha512-e3Gu3WxbNk/UqQhxqU7YIYO+9ZBvWNz3U+h/qRFosscMFzdRPbXYSaSWgSnklv2fz1TgzBTcti2z35c/7irsHw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-x64-msvc": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.2.7.tgz",
      "integrity": "sha512-W/jg5qoRSqjsEv0+dZi4e687mcHqmVuU0P4fK6qS/xjetW2Gmc1W8j//z5nAeNcC8Ttm0hV46IjcYeuVwYhuiw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.1.tgz",
      "integrity": "sha512-2j9bGt5Jh8hj+vPtgzPtl72j0yRxHAyumoo6TNfAjsLB04UtpSvPbPcDcBMxz7n+9CYB0c1GxQFxYRg2jimqGw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.3.3.tgz",
      "integrity": "sha512-/T8IKEsf9VTU6tLjgC7+sv2mOPtQxzE2jMw7u4Tt40Tx+QSZxpzh95/H6cMKoja9XuW7iMdLJYBB0o9G1CaAgg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.5",
        "enhanced-resolve": "^5.24.1",
        "jiti": "^2.7.0",
        "lightningcss": "1.32.0",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.3.3"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.3.3.tgz",
      "integrity": "sha512-krXjAikiaFSPaK/FkAQT5UTx3VormQaiZ5hBFlJZ9UFQGB/rwg1MZIhHAG9smMQRTdyJxP6Qt5MwMtdyU5FWrA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 20"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.3.3",
        "@tailwindcss/oxide-darwin-arm64": "4.3.3",
        "@tailwindcss/oxide-darwin-x64": "4.3.3",
        "@tailwindcss/oxide-freebsd-x64": "4.3.3",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.3.3",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.3.3",
        "@tailwindcss/oxide-linux-arm64-musl": "4.3.3",
        "@tailwindcss/oxide-linux-x64-gnu": "4.3.3",
        "@tailwindcss/oxide-linux-x64-musl": "4.3.3",
        "@tailwindcss/oxide-wasm32-wasi": "4.3.3",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.3.3",
        "@tailwindcss/oxide-win32-x64-msvc": "4.3.3"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.3.3.tgz",
      "integrity": "sha512-Y85A2gmPSkl5Ve5qR86GL4HT509cFqQh1aes9p3sSkyTPwt0Pppf3GkwGe4JPACcRYjgJIEhQgM6dBClnr0NYw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.3.3.tgz",
      "integrity": "sha512-BiaWatpBcERQFDlOjRDpIVXuFK5PJez5SA4JMg6VYZdBYU+qKfV/vqjcIs+IYmtitf1xYQZTwXvU/8y4lfZUGw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.3.3.tgz",
      "integrity": "sha512-fAeUqfV5ndhxRwai8cXGzdLvul9utWOmeTkv69unv4ZXixjn61Z+p9lCWdwOwA3TYboG3BwdVuN/RDjhBRl0mw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.3.3.tgz",
      "integrity": "sha512-iyf5bV6+wnAlflVeEy7R25dupxTNECZN5QMI0qNT6eT+EgaGdZcKhGkr5SdoaWiLJ3spLqIY9VCeSGrwmtg4kw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.3.3.tgz",
      "integrity": "sha512-aAYUprJAJQWWbRrPvtjdroZ56Md+JM8pMiopS6xGEwDfLhqj+2ver2p4nU4Mb3CRqcMmNBjo8KkUgcxhkzVQGQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.3.3.tgz",
      "integrity": "sha512-nDxldcEENOxZRzC2uu9jrutZdAAQtb+8WWDCSnWL1zvBk1+FN+x6MtDViPB5AJMfttVCUhehGWus3XBPgatM/w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.3.3.tgz",
      "integrity": "sha512-Md44bD6veX/PC5iyF8cDVnw4HBIANZepRZZ7a8DQOvkfo5WUBwcp6iAuCUz23u+4SUkhJlD3eL7hNdW8ezd/kA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.3.3.tgz",
      "integrity": "sha512-tx7us1muwOKAKWao2v/GaafFeQboE6aj88vC6ziN2NCGcRm8gWUhwjzg+YdVB1e4boAtdtma4L43onunI6NS4w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.3.3.tgz",
      "integrity": "sha512-SJxX60smvHgasZoBy11dX6YRjXJFovwWBoedhbQPOBzgFWBHGB+TVPWB9BxzR7TTxU8FQZAI2AyiNCMzFm8Img==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.3.3.tgz",
      "integrity": "sha512-jx1+rPhY/5Ympkktd656HBWEBLxP7dH06losBLjjf5vgCODXvi9KhtftWcMIwTFIDqBr7cRnQkdLnAG+IOlGvQ==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.11.1",
        "@emnapi/runtime": "^1.11.1",
        "@emnapi/wasi-threads": "^1.2.2",
        "@napi-rs/wasm-runtime": "^1.1.4",
        "@tybys/wasm-util": "^0.10.2",
        "tslib": "^2.8.1"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.3.3.tgz",
      "integrity": "sha512-3rc292Ca2ceK6Ulcc/bAVnTs/3nDtoPhyEKlgPv+yQJQi/JS/AMJlqzxvlDacL1nekbrcf6bTqp/jV4qgnPxNQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.3.3.tgz",
      "integrity": "sha512-yJ0pwIVc/nYeGoV02WtsN8KYyLQv7kyI2wDnkezyJlGGjkd4QLwDGAwl47YpPJeuI0M0ObaXGSPjvWDPeTPggw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/vite": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/@tailwindcss/vite/-/vite-4.3.3.tgz",
      "integrity": "sha512-yYU8cogLeSh/ms2jh8Fj7jaba/EWa7Ja6GoUqYZaraEuCI5YS6ms6ObZgjjedm+jm6XZjdNRWBpPP6Z86oOxcw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@tailwindcss/node": "4.3.3",
        "@tailwindcss/oxide": "4.3.3",
        "tailwindcss": "4.3.3"
      },
      "peerDependencies": {
        "vite": "^5.2.0 || ^6 || ^7 || ^8"
      }
    },
    "node_modules/@tweenjs/tween.js": {
      "version": "23.1.3",
      "resolved": "https://registry.npmjs.org/@tweenjs/tween.js/-/tween.js-23.1.3.tgz",
      "integrity": "sha512-vJmvvwFxYuGnF2axRtPYocag6Clbb5YS7kLL+SO/TeVFzHqDIWrNKYtcsPMibjDx9O+bu+psAy9NKfWklassUA==",
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "22.20.1",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-22.20.1.tgz",
      "integrity": "sha512-EANqOCF9QFyra+4pfxUcX9STKJpCLjMbObVzljIJomAWSnuSIEAvyzEU53GaajbXJEgdh0iEcPL+DGvpUd4k1Q==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/react": {
      "version": "19.2.18",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.18.tgz",
      "integrity": "sha512-AnzbBERsrLKtk2XSfTbYRLjQPdy116Sty4q+T+Bp3IC4l6jNBvreVPAHmpq9qhXQM7CXZPjLVmGMw9sy+hxQ3w==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.7",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.7.tgz",
      "integrity": "sha512-I8bPpDLcHBv1qiIiXDCy71Rt8eQDKJP0sMSWJphDdAcdqiJ1sGpZamavoEIRZmYzjia9LuEb2HlYdDpmoENpvQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/@types/stats.js": {
      "version": "0.17.4",
      "resolved": "https://registry.npmjs.org/@types/stats.js/-/stats.js-0.17.4.tgz",
      "integrity": "sha512-jIBvWWShCvlBqBNIZt0KAshWpvSjhkwkEu4ZUcASoAvhmrgAUI2t1dXrjSL4xXVLB4FznPrIsX3nKXFl/Dt4vA==",
      "license": "MIT"
    },
    "node_modules/@types/three": {
      "version": "0.186.0",
      "resolved": "https://registry.npmjs.org/@types/three/-/three-0.186.0.tgz",
      "integrity": "sha512-mxYSBpDC+D0pLfSP6sW4WZTcT+nrtmZcimMqnVmy36Hte3XpeYSrvgg4TRdaM1GemGog1AWzI5qL2VoIfMXbJQ==",
      "license": "MIT",
      "dependencies": {
        "@dimforge/rapier3d-compat": "~0.12.0",
        "@tweenjs/tween.js": "~23.1.3",
        "@types/stats.js": "*",
        "@types/webxr": ">=0.5.17",
        "fflate": "~0.8.3",
        "meshoptimizer": "~1.1.1"
      }
    },
    "node_modules/@types/webxr": {
      "version": "0.5.24",
      "resolved": "https://registry.npmjs.org/@types/webxr/-/webxr-0.5.24.tgz",
      "integrity": "sha512-h8fgEd/DpoS9CBrjEQXR+dIDraopAEfu4wYVNY2tEPwk60stPWhvZMf4Foo5FakuQ7HFZoa8WceaWFervK2Ovg==",
      "license": "MIT"
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "6.1.1",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-6.1.1.tgz",
      "integrity": "sha512-yxLaQV9gkhS8ezJqCM6+ndU7mDY6gqAg75NQ+0IjwEI8IYOmQCgkRwHKVSfWXW076DsqMo0Dk+0FK1U+M5RgFw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rolldown/pluginutils": "^1.0.1"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "@rolldown/plugin-babel": "^0.1.7 || ^0.2.0",
        "babel-plugin-react-compiler": "^1.0.0",
        "oxc-transform-react": "^0.145.0",
        "vite": "^8.0.0"
      },
      "peerDependenciesMeta": {
        "@rolldown/plugin-babel": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        },
        "oxc-transform-react": {
          "optional": true
        }
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/enhanced-resolve": {
      "version": "5.24.5",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.24.5.tgz",
      "integrity": "sha512-L1l8TNvomm6UVW5B253AGxQagSQr+vGwhMlrrfRS2qmhx46AMpMVJKQYLvWYbysTMY8VoicOvzHzoHMbyzB+4A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.3.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/fflate": {
      "version": "0.8.3",
      "resolved": "https://registry.npmjs.org/fflate/-/fflate-0.8.3.tgz",
      "integrity": "sha512-tbZNuJrLwGUp3zshBtdy4W+ORxZuIh8a5ilyIEQDC5rY1f3U20JMry0Ll3WBzU58EZKsEuJFXhb5gwv8CsPvgA==",
      "license": "MIT"
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/jiti": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.7.0.tgz",
      "integrity": "sha512-AC/7JofJvZGrrneWNaEnJeOLUx+JlGt7tNa0wZiRPT4MY1wmfKjt2+6O2p2uz2+skll8OZZmJMNqeke7kKbNgQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.32.0.tgz",
      "integrity": "sha512-NXYBzinNrblfraPGyrbPoD19C1h9lfI/1mzgWYvXUTe414Gz/X1FD2XBZSZM7rRTrMA8JL3OtAaGifrIKhQ5yQ==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.32.0",
        "lightningcss-darwin-arm64": "1.32.0",
        "lightningcss-darwin-x64": "1.32.0",
        "lightningcss-freebsd-x64": "1.32.0",
        "lightningcss-linux-arm-gnueabihf": "1.32.0",
        "lightningcss-linux-arm64-gnu": "1.32.0",
        "lightningcss-linux-arm64-musl": "1.32.0",
        "lightningcss-linux-x64-gnu": "1.32.0",
        "lightningcss-linux-x64-musl": "1.32.0",
        "lightningcss-win32-arm64-msvc": "1.32.0",
        "lightningcss-win32-x64-msvc": "1.32.0"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.32.0.tgz",
      "integrity": "sha512-YK7/ClTt4kAK0vo6w3X+Pnm0D2cf2vPHbhOXdoNti1Ga0al1P4TBZhwjATvjNwLEBCnKvjJc2jQgHXH0NEwlAg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.32.0.tgz",
      "integrity": "sha512-RzeG9Ju5bag2Bv1/lwlVJvBE3q6TtXskdZLLCyfg5pt+HLz9BqlICO7LZM7VHNTTn/5PRhHFBSjk5lc4cmscPQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.32.0.tgz",
      "integrity": "sha512-U+QsBp2m/s2wqpUYT/6wnlagdZbtZdndSmut/NJqlCcMLTWp5muCrID+K5UJ6jqD2BFshejCYXniPDbNh73V8w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.32.0.tgz",
      "integrity": "sha512-JCTigedEksZk3tHTTthnMdVfGf61Fky8Ji2E4YjUTEQX14xiy/lTzXnu1vwiZe3bYe0q+SpsSH/CTeDXK6WHig==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.32.0.tgz",
      "integrity": "sha512-x6rnnpRa2GL0zQOkt6rts3YDPzduLpWvwAF6EMhXFVZXD4tPrBkEFqzGowzCsIWsPjqSK+tyNEODUBXeeVHSkw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.32.0.tgz",
      "integrity": "sha512-0nnMyoyOLRJXfbMOilaSRcLH3Jw5z9HDNGfT/gwCPgaDjnx0i8w7vBzFLFR1f6CMLKF8gVbebmkUN3fa/kQJpQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.32.0.tgz",
      "integrity": "sha512-UpQkoenr4UJEzgVIYpI80lDFvRmPVg6oqboNHfoH4CQIfNA+HOrZ7Mo7KZP02dC6LjghPQJeBsvXhJod/wnIBg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.32.0.tgz",
      "integrity": "sha512-V7Qr52IhZmdKPVr+Vtw8o+WLsQJYCTd8loIfpDaMRWGUZfBOYEJeyJIkqGIDMZPwPx24pUMfwSxxI8phr/MbOA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.32.0.tgz",
      "integrity": "sha512-bYcLp+Vb0awsiXg/80uCRezCYHNg1/l3mt0gzHnWV9XP1W5sKa5/TCdGWaR/zBM2PeF/HbsQv/j2URNOiVuxWg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.32.0.tgz",
      "integrity": "sha512-8SbC8BR40pS6baCM8sbtYDSwEVQd4JlFTOlaD3gWGHfThTcABnNDBda6eTZeqbofalIJhFx0qKzgHJmcPTnGdw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.32.0.tgz",
      "integrity": "sha512-Amq9B/SoZYdDi1kFrojnoqPLxYhQ4Wo5XiL8EVJrVsB8ARoC1PWW6VGtT0WKCemjy8aC+louJnjS7U18x3b06Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/meshoptimizer": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/meshoptimizer/-/meshoptimizer-1.1.1.tgz",
      "integrity": "sha512-oRFNWJRDA/WTrVj7NWvqa5HqE1t9MYDj2VaWirQCzCCrAd2GHrqR/sQezCxiWATPNlKTcRaPRHPJwIRoPBAp5g==",
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.18",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.18.tgz",
      "integrity": "sha512-DTg4MJbGMWkfi6VZFdNt2/caMbQy4Ou+Op/hJQvGEWcnVfoA1QA+xzRKAzw9jD6+GVOOeYr/mIcuDSdug6F6+w==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/oxfmt": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/oxfmt/-/oxfmt-0.2.0.tgz",
      "integrity": "sha512-99bPAiYDiYikUej8U0Slv8pcFVbMe38Ulm+T6bJ4KQgm+UsbgTKCBpWxbD/LRz1CuYw3PRpqfPv6AkQsIAo3Ag==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "oxfmt": "bin/oxfmt"
      },
      "engines": {
        "node": ">=8.*"
      },
      "funding": {
        "url": "https://github.com/sponsors/Boshen"
      },
      "optionalDependencies": {
        "@oxfmt/darwin-arm64": "0.2.0",
        "@oxfmt/darwin-x64": "0.2.0",
        "@oxfmt/linux-arm64-gnu": "0.2.0",
        "@oxfmt/linux-arm64-musl": "0.2.0",
        "@oxfmt/linux-x64-gnu": "0.2.0",
        "@oxfmt/linux-x64-musl": "0.2.0",
        "@oxfmt/win32-arm64": "0.2.0",
        "@oxfmt/win32-x64": "0.2.0"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.7",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.7.tgz",
      "integrity": "sha512-qcJu88Q2IWqJsDD529JKMdwGm/dvInW4HvQnRwiH9JtihJvzGOscDtHE3x1pBKeUOTysQ8kVmLnJ2kJu7yhcGA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.28",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.28.tgz",
      "integrity": "sha512-RRuzqDtt5Y9h3quz5hWhK+TPnsmVs6WwSU6LkJMeY4HstUEDuYTG8UJSdawMRzmzAtV+KEoG8N3Qg2qLy5vM/A==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.18",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/react": {
      "version": "19.2.8",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.8.tgz",
      "integrity": "sha512-PWaYA1L/q9u2u7xYQi+Y3L3Yfnie7XyLeaJICV1MGD6LprsBxcAqGjYyr0eY3p+QdsA+x/Irkt4Qif8D63+Sbw==",
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.8",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.8.tgz",
      "integrity": "sha512-rVprimfGBG3DR+Tq0IQG2DT5PxKth1WIGDmj5yPmlzr4YBe7uyE+Du4oVqTDXZSHGGGXRtTJEGSSePyQCMBglQ==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.8"
      }
    },
    "node_modules/rolldown": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/rolldown/-/rolldown-1.2.7.tgz",
      "integrity": "sha512-g0EtLvBjTUB7jhyV0S/TCup3v/XSVl45vUIGbOGU4QPiyjTenCe4mKuFvW9fEgYmS2Fo42AUssRmNuMziXdrig==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@oxc-project/types": "=0.148.0",
        "@rolldown/pluginutils": "^1.0.0"
      },
      "bin": {
        "rolldown": "bin/cli.mjs"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "optionalDependencies": {
        "@rolldown/binding-android-arm-eabi": "1.2.7",
        "@rolldown/binding-android-arm64": "1.2.7",
        "@rolldown/binding-darwin-arm64": "1.2.7",
        "@rolldown/binding-darwin-x64": "1.2.7",
        "@rolldown/binding-freebsd-x64": "1.2.7",
        "@rolldown/binding-linux-arm-gnueabihf": "1.2.7",
        "@rolldown/binding-linux-arm64-gnu": "1.2.7",
        "@rolldown/binding-linux-arm64-musl": "1.2.7",
        "@rolldown/binding-linux-ppc64-gnu": "1.2.7",
        "@rolldown/binding-linux-s390x-gnu": "1.2.7",
        "@rolldown/binding-linux-x64-gnu": "1.2.7",
        "@rolldown/binding-linux-x64-musl": "1.2.7",
        "@rolldown/binding-openharmony-arm64": "1.2.7",
        "@rolldown/binding-win32-arm64-msvc": "1.2.7",
        "@rolldown/binding-win32-x64-msvc": "1.2.7"
      }
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==",
      "license": "MIT"
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.3.3",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.3.3.tgz",
      "integrity": "sha512-gOhV3P7ufE62QDGg1zVaTgCR+EtPv92k2nIhVcVKcLmxT1sUBsQGhnZj175j+MqRt4zLF7ic+sCYjfhxMxj7YQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.3.tgz",
      "integrity": "sha512-uxc/zpqFg6x7C8vOE7lh6Lbda8eEL9zmVm/PLeTPBRhh1xCgdWaQ+J1CUieGpIfm2HdtsUpRv+HshiasBMcc6A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/three": {
      "version": "0.186.0",
      "resolved": "https://registry.npmjs.org/three/-/three-0.186.0.tgz",
      "integrity": "sha512-cr/fIM2ddMSVbYVgkfD4jLJv7Fh/8ZTjvo+7gQeSVGUZHxpx9FDwoL5iC7hUz/LiRA8wMbqfnb90xKfm1/HHkQ==",
      "license": "MIT"
    },
    "node_modules/tinyglobby": {
      "version": "0.2.17",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.17.tgz",
      "integrity": "sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/vite": {
      "version": "8.2.2",
      "resolved": "https://registry.npmjs.org/vite/-/vite-8.2.2.tgz",
      "integrity": "sha512-cFKLV/PRgAUlIRm5WjMjJ86jrftzpqcgH+Us+DS8mI3CDNiH30Whrz8uHL3+MOLPAgqbMBAqWdAHAphOAM+z/Q==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "lightningcss": "^1.33.0",
        "picomatch": "^4.0.5",
        "postcss": "^8.5.26",
        "rolldown": "~1.2.4",
        "tinyglobby": "^0.2.17"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "@vitejs/devtools": "^0.4.0 || ^0.5.0",
        "esbuild": "^0.27.0 || ^0.28.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "@vitejs/devtools": {
          "optional": true
        },
        "esbuild": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/vite/node_modules/lightningcss": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.33.0.tgz",
      "integrity": "sha512-WkUDrojuJs0xkgGf2udWxa3yGBRxPtxUkB79i6aCZLRgc7PM8fZe9TosfPDcvEpQZbuFASnHYmRLBLUbmLOIIA==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.33.0",
        "lightningcss-darwin-arm64": "1.33.0",
        "lightningcss-darwin-x64": "1.33.0",
        "lightningcss-freebsd-x64": "1.33.0",
        "lightningcss-linux-arm-gnueabihf": "1.33.0",
        "lightningcss-linux-arm64-gnu": "1.33.0",
        "lightningcss-linux-arm64-musl": "1.33.0",
        "lightningcss-linux-x64-gnu": "1.33.0",
        "lightningcss-linux-x64-musl": "1.33.0",
        "lightningcss-win32-arm64-msvc": "1.33.0",
        "lightningcss-win32-x64-msvc": "1.33.0"
      }
    },
    "node_modules/vite/node_modules/lightningcss-android-arm64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.33.0.tgz",
      "integrity": "sha512-gEpRTalKdosp4Bb8qWtc2iOgE5SeIHlpS1up9bFq2wAyYhl1UdTObYiHe98zEM9SQvSoqQZ1IQD0JNpg3Ml5pg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/vite/node_modules/lightningcss-darwin-arm64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.33.0.tgz",
      "integrity": "sha512-Sciaz8eenNTKn9b3t7+xr0ipTp9YxKQY4npwQ3mrRuL0BAVHBLyZxofhaKBAVtzmtRZ/zTyo0/to4B1uWG/Djg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/vite/node_modules/lightningcss-darwin-x64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.33.0.tgz",
      "integrity": "sha512-Z5UPAxzrjlWNNyGy6i65cJzzvgJ5D3T6wMvs+gWpY9d7qRhANrxqAp6LhxIgZhWEw18RfJTGcRxjuLIBr+m8XQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/vite/node_modules/lightningcss-freebsd-x64": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.33.0.tgz",
      "integrity": "sha512-QQM/Ti/hQajJwCY+RiWuCZ9sdtI/XQk7nDK5vC8kkdwixezOlDgvDx7+RT+QjK6FcFT4MpsuoBnHIo/O3StRRg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/vite/node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.33.0.tgz",
      "integrity": "sha512-N7FVBe6iS24MlM6R/4RBTxGhQheZGs7tiQ9U32UtF75NzP5Q7xWPRqLBCKxlRQRk3rY1jCIPLzx7WzOhuUIRLQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/vite/node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.33.0.tgz",
      "integrity": "sha512-j2v/itmy4HlNxlc6voKXYgBqNi0Ng2LShg4z7GufpEgs05P+2suBVyi9I6YHq5uoVFx9ETin3eCEhLVyXGQnKg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/vite/node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.33.0.tgz",
      "integrity": "sha512-yiO5ROMuYQgXbC60yjZU5CYSFZGKXL0HFATXt9mHJn1+zW55oCtMI9NfcVhYLMFDL7gV7oBPon/EmMMGg2OvtQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/vite/node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.33.0.tgz",
      "integrity": "sha512-ar+Ju7LmcN0Jo4FpL4hpFybwNG9/3A/Br5KW2n2jyODg3MEZXaDYADdemoNS+BDNfMgKvylJLj4S5tyRActuAg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/vite/node_modules/lightningcss-linux-x64-musl": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.33.0.tgz",
      "integrity": "sha512-RYiYbkokw0trfKqqzfF55lginwEPrD3OJDfTuJzFs1MK6iFnDenaz1fqLLtX4ITG3OktJQXOeTaw1awrBAlZPw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/vite/node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.33.0.tgz",
      "integrity": "sha512-1K+MPfLSFVpphzpdbfkhlWk6wBrTObBzS2T6db10PNOZgR9GoVsAWzwNyuhUYYbTp23j+4RrncfujZ4uAzXvwA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/vite/node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.33.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.33.0.tgz",
      "integrity": "sha512-OlEICDx/Xl0FqSp4bry8zFnCvGpig3Gl4gCquvYwHuqJKEC1+n9NgDniFvqHGmMv1ZkqDJrDqKKSykTDX+ehuA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    }
  }
}


--- package.json ---

{
  "name": "figma-make-app",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "format": "oxfmt"
  },
  "dependencies": {
    "@types/three": "^0.186.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "three": "^0.186.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.0.0",
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^6.0.0",
    "oxfmt": "^0.2.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.7.0",
    "vite": "^8.0.5"
  }
}


--- pnpm-lock.yaml ---

lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    dependencies:
      '@types/three':
        specifier: ^0.186.0
        version: 0.186.0
      react:
        specifier: ^19.0.0
        version: 19.2.4
      react-dom:
        specifier: ^19.0.0
        version: 19.2.4(react@19.2.4)
      three:
        specifier: ^0.186.0
        version: 0.186.0
    devDependencies:
      '@tailwindcss/vite':
        specifier: ^4.0.0
        version: 4.2.2(vite@8.0.5(@types/node@22.19.17)(jiti@2.6.1))
      '@types/node':
        specifier: ^22.0.0
        version: 22.19.17
      '@types/react':
        specifier: ^19.0.0
        version: 19.2.14
      '@types/react-dom':
        specifier: ^19.0.0
        version: 19.2.3(@types/react@19.2.14)
      '@vitejs/plugin-react':
        specifier: ^6.0.0
        version: 6.0.1(vite@8.0.5(@types/node@22.19.17)(jiti@2.6.1))
      oxfmt:
        specifier: ^0.2.0
        version: 0.2.0
      tailwindcss:
        specifier: ^4.0.0
        version: 4.2.2
      typescript:
        specifier: ^5.7.0
        version: 5.9.3
      vite:
        specifier: ^8.0.5
        version: 8.0.5(@types/node@22.19.17)(jiti@2.6.1)

packages:

  '@dimforge/rapier3d-compat@0.12.0':
    resolution: {integrity: sha512-uekIGetywIgopfD97oDL5PfeezkFpNhwlzlaEYNOA0N6ghdsOvh/HYjSMek5Q2O1PYvRSDFcqFVJl4r4ZBwOow==}

  '@emnapi/core@1.9.1':
    resolution: {integrity: sha512-mukuNALVsoix/w1BJwFzwXBN/dHeejQtuVzcDsfOEsdpCumXb/E9j8w11h5S54tT1xhifGfbbSm/ICrObRb3KA==}

  '@emnapi/runtime@1.9.1':
    resolution: {integrity: sha512-VYi5+ZVLhpgK4hQ0TAjiQiZ6ol0oe4mBx7mVv7IflsiEp0OWoVsp/+f9Vc1hOhE0TtkORVrI1GvzyreqpgWtkA==}

  '@emnapi/wasi-threads@1.2.0':
    resolution: {integrity: sha512-N10dEJNSsUx41Z6pZsXU8FjPjpBEplgH24sfkmITrBED1/U2Esum9F3lfLrMjKHHjmi557zQn7kR9R+XWXu5Rg==}

  '@jridgewell/gen-mapping@0.3.13':
    resolution: {integrity: sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==}

  '@jridgewell/remapping@2.3.5':
    resolution: {integrity: sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==}

  '@jridgewell/resolve-uri@3.1.2':
    resolution: {integrity: sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/sourcemap-codec@1.5.5':
    resolution: {integrity: sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==}

  '@jridgewell/trace-mapping@0.3.31':
    resolution: {integrity: sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==}

  '@napi-rs/wasm-runtime@1.1.1':
    resolution: {integrity: sha512-p64ah1M1ld8xjWv3qbvFwHiFVWrq1yFvV4f7w+mzaqiR4IlSgkqhcRdHwsGgomwzBH51sRY4NEowLxnaBjcW/A==}

  '@oxc-project/types@0.122.0':
    resolution: {integrity: sha512-oLAl5kBpV4w69UtFZ9xqcmTi+GENWOcPF7FCrczTiBbmC0ibXxCwyvZGbO39rCVEuLGAZM84DH0pUIyyv/YJzA==}

  '@oxfmt/darwin-arm64@0.2.0':
    resolution: {integrity: sha512-NK7iEPqRovUvKac+4dn2ui8v5Y5q6UJ9v4z5Zjr5lmEzTlBwXToP3TwY75IAaCYeu0g8Es7ToJpS7qCQuxUhuA==}
    cpu: [arm64]
    os: [darwin]

  '@oxfmt/darwin-x64@0.2.0':
    resolution: {integrity: sha512-eXDgT+DbIMnA3sWE+w38rOvXaxkP4RvHi41rPpWb9XoRGbM+tOo0c8RYqCIX39n7PizOlbF/xUBh9nMhiW01wQ==}
    cpu: [x64]
    os: [darwin]

  '@oxfmt/linux-arm64-gnu@0.2.0':
    resolution: {integrity: sha512-h4mw9/Lck5X/SU1RPE26VraoBJgn9SOoLl8GnaYvtmRBFHK0v+2KpnBSwMWeiaIxCdJSsrVc9mpKSOcPsen7Cg==}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  '@oxfmt/linux-arm64-musl@0.2.0':
    resolution: {integrity: sha512-kDZ/kVCgh9kSczMH2gPXZs+rsY/VcCQ1BoQnND8D3v1Le91LceJ5s/a4XBBA3ADI3NiPdqNmK2ssaxY4BfgXDg==}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  '@oxfmt/linux-x64-gnu@0.2.0':
    resolution: {integrity: sha512-qvf6cNuf4z3yjzjSvg4Jwr88jDyeFaYPU+4dBWVr6fdWhAA+BIuIvurJWYQGvWNNSkobVWH3A7m+wp+h5fNsSg==}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  '@oxfmt/linux-x64-musl@0.2.0':
    resolution: {integrity: sha512-D0rw4BVLHEbtMB6p9e+Ph7Y/56oD1DRP4Qcbbv1B1w0kJanWBB3vMH+v2rqgeYsErqJOtLpYRkPFmJSU9In2HA==}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  '@oxfmt/win32-arm64@0.2.0':
    resolution: {integrity: sha512-QM0fP8YUvBNyuNa6d+jNonV34A6zGvvQ2mX93wnERpX25jIbFKljKiKDiWo2M1nUsW8zL2z4ESEeaLO9bx8djg==}
    cpu: [arm64]
    os: [win32]

  '@oxfmt/win32-x64@0.2.0':
    resolution: {integrity: sha512-WkFXliDbwFiziBSfvWXeM0Y3x07Kxxrl39kgsp+N3n5QgzsM8q6qe094+OW+hItDQ+9SSd2y9u231sMCsKxlog==}
    cpu: [x64]
    os: [win32]

  '@rolldown/binding-android-arm64@1.0.0-rc.12':
    resolution: {integrity: sha512-pv1y2Fv0JybcykuiiD3qBOBdz6RteYojRFY1d+b95WVuzx211CRh+ytI/+9iVyWQ6koTh5dawe4S/yRfOFjgaA==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [android]

  '@rolldown/binding-darwin-arm64@1.0.0-rc.12':
    resolution: {integrity: sha512-cFYr6zTG/3PXXF3pUO+umXxt1wkRK/0AYT8lDwuqvRC+LuKYWSAQAQZjCWDQpAH172ZV6ieYrNnFzVVcnSflAg==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [darwin]

  '@rolldown/binding-darwin-x64@1.0.0-rc.12':
    resolution: {integrity: sha512-ZCsYknnHzeXYps0lGBz8JrF37GpE9bFVefrlmDrAQhOEi4IOIlcoU1+FwHEtyXGx2VkYAvhu7dyBf75EJQffBw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [darwin]

  '@rolldown/binding-freebsd-x64@1.0.0-rc.12':
    resolution: {integrity: sha512-dMLeprcVsyJsKolRXyoTH3NL6qtsT0Y2xeuEA8WQJquWFXkEC4bcu1rLZZSnZRMtAqwtrF/Ib9Ddtpa/Gkge9Q==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [freebsd]

  '@rolldown/binding-linux-arm-gnueabihf@1.0.0-rc.12':
    resolution: {integrity: sha512-YqWjAgGC/9M1lz3GR1r1rP79nMgo3mQiiA+Hfo+pvKFK1fAJ1bCi0ZQVh8noOqNacuY1qIcfyVfP6HoyBRZ85Q==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm]
    os: [linux]

  '@rolldown/binding-linux-arm64-gnu@1.0.0-rc.12':
    resolution: {integrity: sha512-/I5AS4cIroLpslsmzXfwbe5OmWvSsrFuEw3mwvbQ1kDxJ822hFHIx+vsN/TAzNVyepI/j/GSzrtCIwQPeKCLIg==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  '@rolldown/binding-linux-arm64-musl@1.0.0-rc.12':
    resolution: {integrity: sha512-V6/wZztnBqlx5hJQqNWwFdxIKN0m38p8Jas+VoSfgH54HSj9tKTt1dZvG6JRHcjh6D7TvrJPWFGaY9UBVOaWPw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  '@rolldown/binding-linux-ppc64-gnu@1.0.0-rc.12':
    resolution: {integrity: sha512-AP3E9BpcUYliZCxa3w5Kwj9OtEVDYK6sVoUzy4vTOJsjPOgdaJZKFmN4oOlX0Wp0RPV2ETfmIra9x1xuayFB7g==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [ppc64]
    os: [linux]
    libc: [glibc]

  '@rolldown/binding-linux-s390x-gnu@1.0.0-rc.12':
    resolution: {integrity: sha512-nWwpvUSPkoFmZo0kQazZYOrT7J5DGOJ/+QHHzjvNlooDZED8oH82Yg67HvehPPLAg5fUff7TfWFHQS8IV1n3og==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [s390x]
    os: [linux]
    libc: [glibc]

  '@rolldown/binding-linux-x64-gnu@1.0.0-rc.12':
    resolution: {integrity: sha512-RNrafz5bcwRy+O9e6P8Z/OCAJW/A+qtBczIqVYwTs14pf4iV1/+eKEjdOUta93q2TsT/FI0XYDP3TCky38LMAg==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  '@rolldown/binding-linux-x64-musl@1.0.0-rc.12':
    resolution: {integrity: sha512-Jpw/0iwoKWx3LJ2rc1yjFrj+T7iHZn2JDg1Yny1ma0luviFS4mhAIcd1LFNxK3EYu3DHWCps0ydXQ5i/rrJ2ig==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  '@rolldown/binding-openharmony-arm64@1.0.0-rc.12':
    resolution: {integrity: sha512-vRugONE4yMfVn0+7lUKdKvN4D5YusEiPilaoO2sgUWpCvrncvWgPMzK00ZFFJuiPgLwgFNP5eSiUlv2tfc+lpA==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [openharmony]

  '@rolldown/binding-wasm32-wasi@1.0.0-rc.12':
    resolution: {integrity: sha512-ykGiLr/6kkiHc0XnBfmFJuCjr5ZYKKofkx+chJWDjitX+KsJuAmrzWhwyOMSHzPhzOHOy7u9HlFoa5MoAOJ/Zg==}
    engines: {node: '>=14.0.0'}
    cpu: [wasm32]

  '@rolldown/binding-win32-arm64-msvc@1.0.0-rc.12':
    resolution: {integrity: sha512-5eOND4duWkwx1AzCxadcOrNeighiLwMInEADT0YM7xeEOOFcovWZCq8dadXgcRHSf3Ulh1kFo/qvzoFiCLOL1Q==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [win32]

  '@rolldown/binding-win32-x64-msvc@1.0.0-rc.12':
    resolution: {integrity: sha512-PyqoipaswDLAZtot351MLhrlrh6lcZPo2LSYE+VDxbVk24LVKAGOuE4hb8xZQmrPAuEtTZW8E6D2zc5EUZX4Lw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [win32]

  '@rolldown/pluginutils@1.0.0-rc.12':
    resolution: {integrity: sha512-HHMwmarRKvoFsJorqYlFeFRzXZqCt2ETQlEDOb9aqssrnVBB1/+xgTGtuTrIk5vzLNX1MjMtTf7W9z3tsSbrxw==}

  '@rolldown/pluginutils@1.0.0-rc.7':
    resolution: {integrity: sha512-qujRfC8sFVInYSPPMLQByRh7zhwkGFS4+tyMQ83srV1qrxL4g8E2tyxVVyxd0+8QeBM1mIk9KbWxkegRr76XzA==}

  '@tailwindcss/node@4.2.2':
    resolution: {integrity: sha512-pXS+wJ2gZpVXqFaUEjojq7jzMpTGf8rU6ipJz5ovJV6PUGmlJ+jvIwGrzdHdQ80Sg+wmQxUFuoW1UAAwHNEdFA==}

  '@tailwindcss/oxide-android-arm64@4.2.2':
    resolution: {integrity: sha512-dXGR1n+P3B6748jZO/SvHZq7qBOqqzQ+yFrXpoOWWALWndF9MoSKAT3Q0fYgAzYzGhxNYOoysRvYlpixRBBoDg==}
    engines: {node: '>= 20'}
    cpu: [arm64]
    os: [android]

  '@tailwindcss/oxide-darwin-arm64@4.2.2':
    resolution: {integrity: sha512-iq9Qjr6knfMpZHj55/37ouZeykwbDqF21gPFtfnhCCKGDcPI/21FKC9XdMO/XyBM7qKORx6UIhGgg6jLl7BZlg==}
    engines: {node: '>= 20'}
    cpu: [arm64]
    os: [darwin]

  '@tailwindcss/oxide-darwin-x64@4.2.2':
    resolution: {integrity: sha512-BlR+2c3nzc8f2G639LpL89YY4bdcIdUmiOOkv2GQv4/4M0vJlpXEa0JXNHhCHU7VWOKWT/CjqHdTP8aUuDJkuw==}
    engines: {node: '>= 20'}
    cpu: [x64]
    os: [darwin]

  '@tailwindcss/oxide-freebsd-x64@4.2.2':
    resolution: {integrity: sha512-YUqUgrGMSu2CDO82hzlQ5qSb5xmx3RUrke/QgnoEx7KvmRJHQuZHZmZTLSuuHwFf0DJPybFMXMYf+WJdxHy/nQ==}
    engines: {node: '>= 20'}
    cpu: [x64]
    os: [freebsd]

  '@tailwindcss/oxide-linux-arm-gnueabihf@4.2.2':
    resolution: {integrity: sha512-FPdhvsW6g06T9BWT0qTwiVZYE2WIFo2dY5aCSpjG/S/u1tby+wXoslXS0kl3/KXnULlLr1E3NPRRw0g7t2kgaQ==}
    engines: {node: '>= 20'}
    cpu: [arm]
    os: [linux]

  '@tailwindcss/oxide-linux-arm64-gnu@4.2.2':
    resolution: {integrity: sha512-4og1V+ftEPXGttOO7eCmW7VICmzzJWgMx+QXAJRAhjrSjumCwWqMfkDrNu1LXEQzNAwz28NCUpucgQPrR4S2yw==}
    engines: {node: '>= 20'}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  '@tailwindcss/oxide-linux-arm64-musl@4.2.2':
    resolution: {integrity: sha512-oCfG/mS+/+XRlwNjnsNLVwnMWYH7tn/kYPsNPh+JSOMlnt93mYNCKHYzylRhI51X+TbR+ufNhhKKzm6QkqX8ag==}
    engines: {node: '>= 20'}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  '@tailwindcss/oxide-linux-x64-gnu@4.2.2':
    resolution: {integrity: sha512-rTAGAkDgqbXHNp/xW0iugLVmX62wOp2PoE39BTCGKjv3Iocf6AFbRP/wZT/kuCxC9QBh9Pu8XPkv/zCZB2mcMg==}
    engines: {node: '>= 20'}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  '@tailwindcss/oxide-linux-x64-musl@4.2.2':
    resolution: {integrity: sha512-XW3t3qwbIwiSyRCggeO2zxe3KWaEbM0/kW9e8+0XpBgyKU4ATYzcVSMKteZJ1iukJ3HgHBjbg9P5YPRCVUxlnQ==}
    engines: {node: '>= 20'}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  '@tailwindcss/oxide-wasm32-wasi@4.2.2':
    resolution: {integrity: sha512-eKSztKsmEsn1O5lJ4ZAfyn41NfG7vzCg496YiGtMDV86jz1q/irhms5O0VrY6ZwTUkFy/EKG3RfWgxSI3VbZ8Q==}
    engines: {node: '>=14.0.0'}
    cpu: [wasm32]
    bundledDependencies:
      - '@napi-rs/wasm-runtime'
      - '@emnapi/core'
      - '@emnapi/runtime'
      - '@tybys/wasm-util'
      - '@emnapi/wasi-threads'
      - tslib

  '@tailwindcss/oxide-win32-arm64-msvc@4.2.2':
    resolution: {integrity: sha512-qPmaQM4iKu5mxpsrWZMOZRgZv1tOZpUm+zdhhQP0VhJfyGGO3aUKdbh3gDZc/dPLQwW4eSqWGrrcWNBZWUWaXQ==}
    engines: {node: '>= 20'}
    cpu: [arm64]
    os: [win32]

  '@tailwindcss/oxide-win32-x64-msvc@4.2.2':
    resolution: {integrity: sha512-1T/37VvI7WyH66b+vqHj/cLwnCxt7Qt3WFu5Q8hk65aOvlwAhs7rAp1VkulBJw/N4tMirXjVnylTR72uI0HGcA==}
    engines: {node: '>= 20'}
    cpu: [x64]
    os: [win32]

  '@tailwindcss/oxide@4.2.2':
    resolution: {integrity: sha512-qEUA07+E5kehxYp9BVMpq9E8vnJuBHfJEC0vPC5e7iL/hw7HR61aDKoVoKzrG+QKp56vhNZe4qwkRmMC0zDLvg==}
    engines: {node: '>= 20'}

  '@tailwindcss/vite@4.2.2':
    resolution: {integrity: sha512-mEiF5HO1QqCLXoNEfXVA1Tzo+cYsrqV7w9Juj2wdUFyW07JRenqMG225MvPwr3ZD9N1bFQj46X7r33iHxLUW0w==}
    peerDependencies:
      vite: ^5.2.0 || ^6 || ^7 || ^8

  '@tweenjs/tween.js@23.1.3':
    resolution: {integrity: sha512-vJmvvwFxYuGnF2axRtPYocag6Clbb5YS7kLL+SO/TeVFzHqDIWrNKYtcsPMibjDx9O+bu+psAy9NKfWklassUA==}

  '@tybys/wasm-util@0.10.1':
    resolution: {integrity: sha512-9tTaPJLSiejZKx+Bmog4uSubteqTvFrVrURwkmHixBo0G4seD0zUxp98E1DzUBJxLQ3NPwXrGKDiVjwx/DpPsg==}

  '@types/node@22.19.17':
    resolution: {integrity: sha512-wGdMcf+vPYM6jikpS/qhg6WiqSV/OhG+jeeHT/KlVqxYfD40iYJf9/AE1uQxVWFvU7MipKRkRv8NSHiCGgPr8Q==}

  '@types/react-dom@19.2.3':
    resolution: {integrity: sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==}
    peerDependencies:
      '@types/react': ^19.2.0

  '@types/react@19.2.14':
    resolution: {integrity: sha512-ilcTH/UniCkMdtexkoCN0bI7pMcJDvmQFPvuPvmEaYA/NSfFTAgdUSLAoVjaRJm7+6PvcM+q1zYOwS4wTYMF9w==}

  '@types/stats.js@0.17.4':
    resolution: {integrity: sha512-jIBvWWShCvlBqBNIZt0KAshWpvSjhkwkEu4ZUcASoAvhmrgAUI2t1dXrjSL4xXVLB4FznPrIsX3nKXFl/Dt4vA==}

  '@types/three@0.186.0':
    resolution: {integrity: sha512-mxYSBpDC+D0pLfSP6sW4WZTcT+nrtmZcimMqnVmy36Hte3XpeYSrvgg4TRdaM1GemGog1AWzI5qL2VoIfMXbJQ==}

  '@types/webxr@0.5.24':
    resolution: {integrity: sha512-h8fgEd/DpoS9CBrjEQXR+dIDraopAEfu4wYVNY2tEPwk60stPWhvZMf4Foo5FakuQ7HFZoa8WceaWFervK2Ovg==}

  '@vitejs/plugin-react@6.0.1':
    resolution: {integrity: sha512-l9X/E3cDb+xY3SWzlG1MOGt2usfEHGMNIaegaUGFsLkb3RCn/k8/TOXBcab+OndDI4TBtktT8/9BwwW8Vi9KUQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    peerDependencies:
      '@rolldown/plugin-babel': ^0.1.7 || ^0.2.0
      babel-plugin-react-compiler: ^1.0.0
      vite: ^8.0.0
    peerDependenciesMeta:
      '@rolldown/plugin-babel':
        optional: true
      babel-plugin-react-compiler:
        optional: true

  csstype@3.2.3:
    resolution: {integrity: sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==}

  detect-libc@2.1.2:
    resolution: {integrity: sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==}
    engines: {node: '>=8'}

  enhanced-resolve@5.20.1:
    resolution: {integrity: sha512-Qohcme7V1inbAfvjItgw0EaxVX5q2rdVEZHRBrEQdRZTssLDGsL8Lwrznl8oQ/6kuTJONLaDcGjkNP247XEhcA==}
    engines: {node: '>=10.13.0'}

  fdir@6.5.0:
    resolution: {integrity: sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==}
    engines: {node: '>=12.0.0'}
    peerDependencies:
      picomatch: ^3 || ^4
    peerDependenciesMeta:
      picomatch:
        optional: true

  fflate@0.8.3:
    resolution: {integrity: sha512-tbZNuJrLwGUp3zshBtdy4W+ORxZuIh8a5ilyIEQDC5rY1f3U20JMry0Ll3WBzU58EZKsEuJFXhb5gwv8CsPvgA==}

  fsevents@2.3.3:
    resolution: {integrity: sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]

  graceful-fs@4.2.11:
    resolution: {integrity: sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==}

  jiti@2.6.1:
    resolution: {integrity: sha512-ekilCSN1jwRvIbgeg/57YFh8qQDNbwDb9xT/qu2DAHbFFZUicIl4ygVaAvzveMhMVr3LnpSKTNnwt8PoOfmKhQ==}
    hasBin: true

  lightningcss-android-arm64@1.32.0:
    resolution: {integrity: sha512-YK7/ClTt4kAK0vo6w3X+Pnm0D2cf2vPHbhOXdoNti1Ga0al1P4TBZhwjATvjNwLEBCnKvjJc2jQgHXH0NEwlAg==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [android]

  lightningcss-darwin-arm64@1.32.0:
    resolution: {integrity: sha512-RzeG9Ju5bag2Bv1/lwlVJvBE3q6TtXskdZLLCyfg5pt+HLz9BqlICO7LZM7VHNTTn/5PRhHFBSjk5lc4cmscPQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [darwin]

  lightningcss-darwin-x64@1.32.0:
    resolution: {integrity: sha512-U+QsBp2m/s2wqpUYT/6wnlagdZbtZdndSmut/NJqlCcMLTWp5muCrID+K5UJ6jqD2BFshejCYXniPDbNh73V8w==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [darwin]

  lightningcss-freebsd-x64@1.32.0:
    resolution: {integrity: sha512-JCTigedEksZk3tHTTthnMdVfGf61Fky8Ji2E4YjUTEQX14xiy/lTzXnu1vwiZe3bYe0q+SpsSH/CTeDXK6WHig==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [freebsd]

  lightningcss-linux-arm-gnueabihf@1.32.0:
    resolution: {integrity: sha512-x6rnnpRa2GL0zQOkt6rts3YDPzduLpWvwAF6EMhXFVZXD4tPrBkEFqzGowzCsIWsPjqSK+tyNEODUBXeeVHSkw==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm]
    os: [linux]

  lightningcss-linux-arm64-gnu@1.32.0:
    resolution: {integrity: sha512-0nnMyoyOLRJXfbMOilaSRcLH3Jw5z9HDNGfT/gwCPgaDjnx0i8w7vBzFLFR1f6CMLKF8gVbebmkUN3fa/kQJpQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  lightningcss-linux-arm64-musl@1.32.0:
    resolution: {integrity: sha512-UpQkoenr4UJEzgVIYpI80lDFvRmPVg6oqboNHfoH4CQIfNA+HOrZ7Mo7KZP02dC6LjghPQJeBsvXhJod/wnIBg==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  lightningcss-linux-x64-gnu@1.32.0:
    resolution: {integrity: sha512-V7Qr52IhZmdKPVr+Vtw8o+WLsQJYCTd8loIfpDaMRWGUZfBOYEJeyJIkqGIDMZPwPx24pUMfwSxxI8phr/MbOA==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  lightningcss-linux-x64-musl@1.32.0:
    resolution: {integrity: sha512-bYcLp+Vb0awsiXg/80uCRezCYHNg1/l3mt0gzHnWV9XP1W5sKa5/TCdGWaR/zBM2PeF/HbsQv/j2URNOiVuxWg==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  lightningcss-win32-arm64-msvc@1.32.0:
    resolution: {integrity: sha512-8SbC8BR40pS6baCM8sbtYDSwEVQd4JlFTOlaD3gWGHfThTcABnNDBda6eTZeqbofalIJhFx0qKzgHJmcPTnGdw==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [win32]

  lightningcss-win32-x64-msvc@1.32.0:
    resolution: {integrity: sha512-Amq9B/SoZYdDi1kFrojnoqPLxYhQ4Wo5XiL8EVJrVsB8ARoC1PWW6VGtT0WKCemjy8aC+louJnjS7U18x3b06Q==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [win32]

  lightningcss@1.32.0:
    resolution: {integrity: sha512-NXYBzinNrblfraPGyrbPoD19C1h9lfI/1mzgWYvXUTe414Gz/X1FD2XBZSZM7rRTrMA8JL3OtAaGifrIKhQ5yQ==}
    engines: {node: '>= 12.0.0'}

  magic-string@0.30.21:
    resolution: {integrity: sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==}

  meshoptimizer@1.1.1:
    resolution: {integrity: sha512-oRFNWJRDA/WTrVj7NWvqa5HqE1t9MYDj2VaWirQCzCCrAd2GHrqR/sQezCxiWATPNlKTcRaPRHPJwIRoPBAp5g==}

  nanoid@3.3.11:
    resolution: {integrity: sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  oxfmt@0.2.0:
    resolution: {integrity: sha512-99bPAiYDiYikUej8U0Slv8pcFVbMe38Ulm+T6bJ4KQgm+UsbgTKCBpWxbD/LRz1CuYw3PRpqfPv6AkQsIAo3Ag==}
    engines: {node: '>=8.*'}
    hasBin: true

  picocolors@1.1.1:
    resolution: {integrity: sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==}

  picomatch@4.0.4:
    resolution: {integrity: sha512-QP88BAKvMam/3NxH6vj2o21R6MjxZUAd6nlwAS/pnGvN9IVLocLHxGYIzFhg6fUQ+5th6P4dv4eW9jX3DSIj7A==}
    engines: {node: '>=12'}

  postcss@8.5.8:
    resolution: {integrity: sha512-OW/rX8O/jXnm82Ey1k44pObPtdblfiuWnrd8X7GJ7emImCOstunGbXUpp7HdBrFQX6rJzn3sPT397Wp5aCwCHg==}
    engines: {node: ^10 || ^12 || >=14}

  react-dom@19.2.4:
    resolution: {integrity: sha512-AXJdLo8kgMbimY95O2aKQqsz2iWi9jMgKJhRBAxECE4IFxfcazB2LmzloIoibJI3C12IlY20+KFaLv+71bUJeQ==}
    peerDependencies:
      react: ^19.2.4

  react@19.2.4:
    resolution: {integrity: sha512-9nfp2hYpCwOjAN+8TZFGhtWEwgvWHXqESH8qT89AT/lWklpLON22Lc8pEtnpsZz7VmawabSU0gCjnj8aC0euHQ==}
    engines: {node: '>=0.10.0'}

  rolldown@1.0.0-rc.12:
    resolution: {integrity: sha512-yP4USLIMYrwpPHEFB5JGH1uxhcslv6/hL0OyvTuY+3qlOSJvZ7ntYnoWpehBxufkgN0cvXxppuTu5hHa/zPh+A==}
    engines: {node: ^20.19.0 || >=22.12.0}
    hasBin: true

  scheduler@0.27.0:
    resolution: {integrity: sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==}

  source-map-js@1.2.1:
    resolution: {integrity: sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==}
    engines: {node: '>=0.10.0'}

  tailwindcss@4.2.2:
    resolution: {integrity: sha512-KWBIxs1Xb6NoLdMVqhbhgwZf2PGBpPEiwOqgI4pFIYbNTfBXiKYyWoTsXgBQ9WFg/OlhnvHaY+AEpW7wSmFo2Q==}

  tapable@2.3.2:
    resolution: {integrity: sha512-1MOpMXuhGzGL5TTCZFItxCc0AARf1EZFQkGqMm7ERKj8+Hgr5oLvJOVFcC+lRmR8hCe2S3jC4T5D7Vg/d7/fhA==}
    engines: {node: '>=6'}

  three@0.186.0:
    resolution: {integrity: sha512-cr/fIM2ddMSVbYVgkfD4jLJv7Fh/8ZTjvo+7gQeSVGUZHxpx9FDwoL5iC7hUz/LiRA8wMbqfnb90xKfm1/HHkQ==}

  tinyglobby@0.2.15:
    resolution: {integrity: sha512-j2Zq4NyQYG5XMST4cbs02Ak8iJUdxRM0XI5QyxXuZOzKOINmWurp3smXu3y5wDcJrptwpSjgXHzIQxR0omXljQ==}
    engines: {node: '>=12.0.0'}

  tslib@2.8.1:
    resolution: {integrity: sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==}

  typescript@5.9.3:
    resolution: {integrity: sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==}
    engines: {node: '>=14.17'}
    hasBin: true

  undici-types@6.21.0:
    resolution: {integrity: sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==}

  vite@8.0.5:
    resolution: {integrity: sha512-nmu43Qvq9UopTRfMx2jOYW5l16pb3iDC1JH6yMuPkpVbzK0k+L7dfsEDH4jRgYFmsg0sTAqkojoZgzLMlwHsCQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    hasBin: true
    peerDependencies:
      '@types/node': ^20.19.0 || >=22.12.0
      '@vitejs/devtools': ^0.1.0
      esbuild: ^0.27.0 || ^0.28.0
      jiti: '>=1.21.0'
      less: ^4.0.0
      sass: ^1.70.0
      sass-embedded: ^1.70.0
      stylus: '>=0.54.8'
      sugarss: ^5.0.0
      terser: ^5.16.0
      tsx: ^4.8.1
      yaml: ^2.4.2
    peerDependenciesMeta:
      '@types/node':
        optional: true
      '@vitejs/devtools':
        optional: true
      esbuild:
        optional: true
      jiti:
        optional: true
      less:
        optional: true
      sass:
        optional: true
      sass-embedded:
        optional: true
      stylus:
        optional: true
      sugarss:
        optional: true
      terser:
        optional: true
      tsx:
        optional: true
      yaml:
        optional: true

snapshots:

  '@dimforge/rapier3d-compat@0.12.0': {}

  '@emnapi/core@1.9.1':
    dependencies:
      '@emnapi/wasi-threads': 1.2.0
      tslib: 2.8.1
    optional: true

  '@emnapi/runtime@1.9.1':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@emnapi/wasi-threads@1.2.0':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@jridgewell/gen-mapping@0.3.13':
    dependencies:
      '@jridgewell/sourcemap-codec': 1.5.5
      '@jridgewell/trace-mapping': 0.3.31

  '@jridgewell/remapping@2.3.5':
    dependencies:
      '@jridgewell/gen-mapping': 0.3.13
      '@jridgewell/trace-mapping': 0.3.31

  '@jridgewell/resolve-uri@3.1.2': {}

  '@jridgewell/sourcemap-codec@1.5.5': {}

  '@jridgewell/trace-mapping@0.3.31':
    dependencies:
      '@jridgewell/resolve-uri': 3.1.2
      '@jridgewell/sourcemap-codec': 1.5.5

  '@napi-rs/wasm-runtime@1.1.1':
    dependencies:
      '@emnapi/core': 1.9.1
      '@emnapi/runtime': 1.9.1
      '@tybys/wasm-util': 0.10.1
    optional: true

  '@oxc-project/types@0.122.0': {}

  '@oxfmt/darwin-arm64@0.2.0':
    optional: true

  '@oxfmt/darwin-x64@0.2.0':
    optional: true

  '@oxfmt/linux-arm64-gnu@0.2.0':
    optional: true

  '@oxfmt/linux-arm64-musl@0.2.0':
    optional: true

  '@oxfmt/linux-x64-gnu@0.2.0':
    optional: true

  '@oxfmt/linux-x64-musl@0.2.0':
    optional: true

  '@oxfmt/win32-arm64@0.2.0':
    optional: true

  '@oxfmt/win32-x64@0.2.0':
    optional: true

  '@rolldown/binding-android-arm64@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-darwin-arm64@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-darwin-x64@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-freebsd-x64@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-linux-arm-gnueabihf@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-linux-arm64-gnu@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-linux-arm64-musl@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-linux-ppc64-gnu@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-linux-s390x-gnu@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-linux-x64-gnu@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-linux-x64-musl@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-openharmony-arm64@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-wasm32-wasi@1.0.0-rc.12':
    dependencies:
      '@napi-rs/wasm-runtime': 1.1.1
    optional: true

  '@rolldown/binding-win32-arm64-msvc@1.0.0-rc.12':
    optional: true

  '@rolldown/binding-win32-x64-msvc@1.0.0-rc.12':
    optional: true

  '@rolldown/pluginutils@1.0.0-rc.12': {}

  '@rolldown/pluginutils@1.0.0-rc.7': {}

  '@tailwindcss/node@4.2.2':
    dependencies:
      '@jridgewell/remapping': 2.3.5
      enhanced-resolve: 5.20.1
      jiti: 2.6.1
      lightningcss: 1.32.0
      magic-string: 0.30.21
      source-map-js: 1.2.1
      tailwindcss: 4.2.2

  '@tailwindcss/oxide-android-arm64@4.2.2':
    optional: true

  '@tailwindcss/oxide-darwin-arm64@4.2.2':
    optional: true

  '@tailwindcss/oxide-darwin-x64@4.2.2':
    optional: true

  '@tailwindcss/oxide-freebsd-x64@4.2.2':
    optional: true

  '@tailwindcss/oxide-linux-arm-gnueabihf@4.2.2':
    optional: true

  '@tailwindcss/oxide-linux-arm64-gnu@4.2.2':
    optional: true

  '@tailwindcss/oxide-linux-arm64-musl@4.2.2':
    optional: true

  '@tailwindcss/oxide-linux-x64-gnu@4.2.2':
    optional: true

  '@tailwindcss/oxide-linux-x64-musl@4.2.2':
    optional: true

  '@tailwindcss/oxide-wasm32-wasi@4.2.2':
    optional: true

  '@tailwindcss/oxide-win32-arm64-msvc@4.2.2':
    optional: true

  '@tailwindcss/oxide-win32-x64-msvc@4.2.2':
    optional: true

  '@tailwindcss/oxide@4.2.2':
    optionalDependencies:
      '@tailwindcss/oxide-android-arm64': 4.2.2
      '@tailwindcss/oxide-darwin-arm64': 4.2.2
      '@tailwindcss/oxide-darwin-x64': 4.2.2
      '@tailwindcss/oxide-freebsd-x64': 4.2.2
      '@tailwindcss/oxide-linux-arm-gnueabihf': 4.2.2
      '@tailwindcss/oxide-linux-arm64-gnu': 4.2.2
      '@tailwindcss/oxide-linux-arm64-musl': 4.2.2
      '@tailwindcss/oxide-linux-x64-gnu': 4.2.2
      '@tailwindcss/oxide-linux-x64-musl': 4.2.2
      '@tailwindcss/oxide-wasm32-wasi': 4.2.2
      '@tailwindcss/oxide-win32-arm64-msvc': 4.2.2
      '@tailwindcss/oxide-win32-x64-msvc': 4.2.2

  '@tailwindcss/vite@4.2.2(vite@8.0.5(@types/node@22.19.17)(jiti@2.6.1))':
    dependencies:
      '@tailwindcss/node': 4.2.2
      '@tailwindcss/oxide': 4.2.2
      tailwindcss: 4.2.2
      vite: 8.0.5(@types/node@22.19.17)(jiti@2.6.1)

  '@tweenjs/tween.js@23.1.3': {}

  '@tybys/wasm-util@0.10.1':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@types/node@22.19.17':
    dependencies:
      undici-types: 6.21.0

  '@types/react-dom@19.2.3(@types/react@19.2.14)':
    dependencies:
      '@types/react': 19.2.14

  '@types/react@19.2.14':
    dependencies:
      csstype: 3.2.3

  '@types/stats.js@0.17.4': {}

  '@types/three@0.186.0':
    dependencies:
      '@dimforge/rapier3d-compat': 0.12.0
      '@tweenjs/tween.js': 23.1.3
      '@types/stats.js': 0.17.4
      '@types/webxr': 0.5.24
      fflate: 0.8.3
      meshoptimizer: 1.1.1

  '@types/webxr@0.5.24': {}

  '@vitejs/plugin-react@6.0.1(vite@8.0.5(@types/node@22.19.17)(jiti@2.6.1))':
    dependencies:
      '@rolldown/pluginutils': 1.0.0-rc.7
      vite: 8.0.5(@types/node@22.19.17)(jiti@2.6.1)

  csstype@3.2.3: {}

  detect-libc@2.1.2: {}

  enhanced-resolve@5.20.1:
    dependencies:
      graceful-fs: 4.2.11
      tapable: 2.3.2

  fdir@6.5.0(picomatch@4.0.4):
    optionalDependencies:
      picomatch: 4.0.4

  fflate@0.8.3: {}

  fsevents@2.3.3:
    optional: true

  graceful-fs@4.2.11: {}

  jiti@2.6.1: {}

  lightningcss-android-arm64@1.32.0:
    optional: true

  lightningcss-darwin-arm64@1.32.0:
    optional: true

  lightningcss-darwin-x64@1.32.0:
    optional: true

  lightningcss-freebsd-x64@1.32.0:
    optional: true

  lightningcss-linux-arm-gnueabihf@1.32.0:
    optional: true

  lightningcss-linux-arm64-gnu@1.32.0:
    optional: true

  lightningcss-linux-arm64-musl@1.32.0:
    optional: true

  lightningcss-linux-x64-gnu@1.32.0:
    optional: true

  lightningcss-linux-x64-musl@1.32.0:
    optional: true

  lightningcss-win32-arm64-msvc@1.32.0:
    optional: true

  lightningcss-win32-x64-msvc@1.32.0:
    optional: true

  lightningcss@1.32.0:
    dependencies:
      detect-libc: 2.1.2
    optionalDependencies:
      lightningcss-android-arm64: 1.32.0
      lightningcss-darwin-arm64: 1.32.0
      lightningcss-darwin-x64: 1.32.0
      lightningcss-freebsd-x64: 1.32.0
      lightningcss-linux-arm-gnueabihf: 1.32.0
      lightningcss-linux-arm64-gnu: 1.32.0
      lightningcss-linux-arm64-musl: 1.32.0
      lightningcss-linux-x64-gnu: 1.32.0
      lightningcss-linux-x64-musl: 1.32.0
      lightningcss-win32-arm64-msvc: 1.32.0
      lightningcss-win32-x64-msvc: 1.32.0

  magic-string@0.30.21:
    dependencies:
      '@jridgewell/sourcemap-codec': 1.5.5

  meshoptimizer@1.1.1: {}

  nanoid@3.3.11: {}

  oxfmt@0.2.0:
    optionalDependencies:
      '@oxfmt/darwin-arm64': 0.2.0
      '@oxfmt/darwin-x64': 0.2.0
      '@oxfmt/linux-arm64-gnu': 0.2.0
      '@oxfmt/linux-arm64-musl': 0.2.0
      '@oxfmt/linux-x64-gnu': 0.2.0
      '@oxfmt/linux-x64-musl': 0.2.0
      '@oxfmt/win32-arm64': 0.2.0
      '@oxfmt/win32-x64': 0.2.0

  picocolors@1.1.1: {}

  picomatch@4.0.4: {}

  postcss@8.5.8:
    dependencies:
      nanoid: 3.3.11
      picocolors: 1.1.1
      source-map-js: 1.2.1

  react-dom@19.2.4(react@19.2.4):
    dependencies:
      react: 19.2.4
      scheduler: 0.27.0

  react@19.2.4: {}

  rolldown@1.0.0-rc.12:
    dependencies:
      '@oxc-project/types': 0.122.0
      '@rolldown/pluginutils': 1.0.0-rc.12
    optionalDependencies:
      '@rolldown/binding-android-arm64': 1.0.0-rc.12
      '@rolldown/binding-darwin-arm64': 1.0.0-rc.12
      '@rolldown/binding-darwin-x64': 1.0.0-rc.12
      '@rolldown/binding-freebsd-x64': 1.0.0-rc.12
      '@rolldown/binding-linux-arm-gnueabihf': 1.0.0-rc.12
      '@rolldown/binding-linux-arm64-gnu': 1.0.0-rc.12
      '@rolldown/binding-linux-arm64-musl': 1.0.0-rc.12
      '@rolldown/binding-linux-ppc64-gnu': 1.0.0-rc.12
      '@rolldown/binding-linux-s390x-gnu': 1.0.0-rc.12
      '@rolldown/binding-linux-x64-gnu': 1.0.0-rc.12
      '@rolldown/binding-linux-x64-musl': 1.0.0-rc.12
      '@rolldown/binding-openharmony-arm64': 1.0.0-rc.12
      '@rolldown/binding-wasm32-wasi': 1.0.0-rc.12
      '@rolldown/binding-win32-arm64-msvc': 1.0.0-rc.12
      '@rolldown/binding-win32-x64-msvc': 1.0.0-rc.12

  scheduler@0.27.0: {}

  source-map-js@1.2.1: {}

  tailwindcss@4.2.2: {}

  tapable@2.3.2: {}

  three@0.186.0: {}

  tinyglobby@0.2.15:
    dependencies:
      fdir: 6.5.0(picomatch@4.0.4)
      picomatch: 4.0.4

  tslib@2.8.1:
    optional: true

  typescript@5.9.3: {}

  undici-types@6.21.0: {}

  vite@8.0.5(@types/node@22.19.17)(jiti@2.6.1):
    dependencies:
      lightningcss: 1.32.0
      picomatch: 4.0.4
      postcss: 8.5.8
      rolldown: 1.0.0-rc.12
      tinyglobby: 0.2.15
    optionalDependencies:
      '@types/node': 22.19.17
      fsevents: 2.3.3
      jiti: 2.6.1


--- tsconfig.json ---

{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "paths": {
      "@/*": ["./src/*"]
    },
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "types": ["node"],
    "strict": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src", "vite.config.ts"]
}


--- vite.config.ts ---

import { defineConfig, type HtmlTagDescriptor, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

import siteConfiguration from './.figma/make/site.json'

// Vite config — https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // .figma/make/deploy-preview passes `--mode development` for cached-preview builds.
  const emitSourcemaps = mode === 'development'

  return {
    base: process.env.FIGMA_PUBLIC_URL ? `${process.env.FIGMA_PUBLIC_URL}/` : '/',
    build: {
      sourcemap: emitSourcemaps ? 'inline' : false,
      minify: !emitSourcemaps,
    },
    plugins: [
      react(),
      tailwindcss(),
      figmaSiteConfiguration(siteConfiguration),
      figmaErrorOverlayReplay(),
      figmaReactRefreshBoundaryFallback(),
      figmaMakeKitPlugin({ storiesGlob: '/src/**/*.stories.{ts,tsx,js,jsx}' }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      host: process.env.FIGMA_DEV_SERVER_HOST || '0.0.0.0',
      port: parseInt(process.env.PORT || '8443'),
      strictPort: true,
      watch: { ignored: ['**/.figma/**'] },
    },
    preview: {
      host: process.env.FIGMA_DEV_SERVER_HOST || '0.0.0.0',
      port: parseInt(process.env.PORT || '8443'),
    },
  }
})

type FigmaSiteConfiguration = {
  title?: string
  description?: string
  language?: string
  robots?: {
    index?: boolean
  }
  icons?: {
    icon?: string
  }
  openGraph?: {
    image?: string
  }
  analytics?: {
    googleAnalyticsId?: string
  }
  customScripts?: {
    headStart?: string
    headEnd?: string
    bodyStart?: string
    bodyEnd?: string
  }
  accessibility?: {
    addBypassLinks?: boolean
  }
}

/** Applies /.figma/make/site.json to the generated document shell. */
function figmaSiteConfiguration(config: FigmaSiteConfiguration): Plugin {
  function sanitizeHtmlValue(value: string | undefined): string {
    return value?.replace(/[^a-zA-Z0-9_-]/g, '') || ''
  }
  function escapeHtmlText(value: string): string {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  }
  function replaceHtmlCommentSlot(html: string, slotName: string, content: string): string {
    return html.replace(`<!-- ${slotName} -->`, content)
  }

  const title = config.title ?? "Figma Make App"
  const description = config.description ?? ''
  const favicon = config.icons?.icon ?? ''
  const socialImage = config.openGraph?.image ?? ''
  const language = sanitizeHtmlValue(config.language) || 'en'
  const googleAnalyticsId = sanitizeHtmlValue(config.analytics?.googleAnalyticsId)
  const headStart = config.customScripts?.headStart ?? ''
  const headEnd = config.customScripts?.headEnd ?? ''
  const bodyStart = config.customScripts?.bodyStart ?? ''
  const bodyEnd = config.customScripts?.bodyEnd ?? ''
  const robotsTxt = config.robots?.index === false ? 'User-agent: *\nDisallow: /\n' : ''

  return {
    name: 'figma-site-configuration',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!robotsTxt || req.url?.split('?')[0] !== '/robots.txt') return next()

        res.setHeader('Content-Type', 'text/plain; charset=utf-8')
        res.end(robotsTxt)
      })
    },
    generateBundle() {
      if (!robotsTxt) return

      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: robotsTxt,
      })
    },
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        let result = html
        result = replaceHtmlCommentSlot(result, 'figma:lang', language)
        result = replaceHtmlCommentSlot(result, 'figma:title', escapeHtmlText(title))
        result = replaceHtmlCommentSlot(result, 'figma:head-start', headStart)
        result = replaceHtmlCommentSlot(result, 'figma:head-end', headEnd)
        result = replaceHtmlCommentSlot(result, 'figma:body-start', bodyStart)
        result = replaceHtmlCommentSlot(result, 'figma:body-end', bodyEnd)

        const tags: HtmlTagDescriptor[] = []
        if (description) {
          tags.push({ tag: 'meta', attrs: { name: 'description', content: description }, injectTo: 'head' })
        }
        if (config.robots?.index === false) {
          tags.push({ tag: 'meta', attrs: { name: 'robots', content: 'noindex, nofollow' }, injectTo: 'head' })
        }
        if (favicon) {
          tags.push({ tag: 'link', attrs: { rel: 'icon', href: favicon }, injectTo: 'head' })
        }
        if (title) {
          tags.push({ tag: 'meta', attrs: { property: 'og:title', content: title }, injectTo: 'head' })
        }
        if (description) {
          tags.push({ tag: 'meta', attrs: { property: 'og:description', content: description }, injectTo: 'head' })
        }
        if (socialImage) {
          tags.push(
            { tag: 'meta', attrs: { property: 'og:image', content: socialImage }, injectTo: 'head' },
            { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' }, injectTo: 'head' },
            { tag: 'meta', attrs: { name: 'twitter:image', content: socialImage }, injectTo: 'head' },
          )
        }

        if (googleAnalyticsId) {
          tags.push(
            {
              tag: 'script',
              attrs: {
                async: true,
                src: `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`,
              },
              injectTo: 'head',
            },
            {
              tag: 'script',
              children: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', ${JSON.stringify(googleAnalyticsId)});
`,
              injectTo: 'head',
            },
          )
        }

        if (config.accessibility?.addBypassLinks) {
          tags.push(
            {
              tag: 'style',
              children: `
  .figma-bypass-link {
    position: fixed;
    top: 8px;
    left: 8px;
    z-index: 2147483647;
    transform: translateY(-150%);
    border-radius: 6px;
    background: #111827;
    color: #fff;
    padding: 8px 12px;
    font: 600 14px/1.2 system-ui, sans-serif;
    text-decoration: none;
  }
  .figma-bypass-link:focus {
    transform: translateY(0);
  }
`,
              injectTo: 'head',
            },
            {
              tag: 'a',
              attrs: { class: 'figma-bypass-link', href: '#root' },
              children: 'Skip to content',
              injectTo: 'body-prepend',
            },
          )
        }

        return {
          html: result,
          tags,
        }
      },
    },
  }
}

/**
 * Replay the most recent build error to clients that connect after
 * it was first broadcast. Vite buffers an error payload only while
 * no clients are connected and clears the buffer on the first
 * reconnect (see `bufferedMessage` in `createWebSocketServer`), so
 * if the preview iframe reloads after Vite already delivered an
 * error to a live socket, the new socket misses the payload and
 * the overlay stays hidden even though the build is still broken.
 * We intercept `ws.send` to remember the latest error and replay
 * it on every new connection; the cache clears on a successful
 * `update` or `full-reload` so a stale overlay can't survive a
 * fixed build.
 */
function figmaErrorOverlayReplay(): Plugin {
  return {
    name: 'figma-error-overlay-replay',
    apply: 'serve',
    configureServer(server) {
      let lastError: object | null = null

      const origSend = server.ws.send.bind(server.ws) as (...args: any[]) => void
      server.ws.send = ((...args: any[]) => {
        const payload = args[0]
        if (payload && typeof payload === 'object' && !Array.isArray(payload)) {
          const type = (payload as { type?: string }).type
          if (type === 'error') {
            lastError = payload as object
          } else if (type === 'update' || type === 'full-reload') {
            lastError = null
          }
        }
        return origSend(...args)
      }) as typeof server.ws.send

      server.ws.on('connection', (socket) => {
        if (lastError !== null) {
          socket.send(JSON.stringify(lastError))
        }
      })
    },
  }
}

/**
 * Reload when a module that previously defined a React Refresh boundary stops
 * defining one. This happens when an agent moves a component into a new file
 * and replaces the old module with a re-export:
 *
 *   export { default } from './app/App'
 *
 * Vite otherwise accepts the update using the previous module's HMR boundary,
 * but the re-export-only transform no longer registers a replacement for the
 * mounted component family. React reports a successful refresh while leaving
 * the old tree mounted until the page is reloaded.
 */
function figmaReactRefreshBoundaryFallback(): Plugin {
  const hadRefreshBoundary = new Map<string, boolean>()
  let sendFullReload: (() => void) | null = null

  return {
    name: 'figma-react-refresh-boundary-fallback',
    apply: 'serve',
    enforce: 'post',
    configureServer(server) {
      sendFullReload = () => server.ws.send({ type: 'full-reload', path: '*' })
    },
    transform(code, id) {
      if (!/\.[jt]sx?(?:\?|$)/.test(id) || id.includes('/node_modules/')) return null

      const moduleId = id.split('?')[0] ?? id
      const hasRefreshBoundary = code.includes('registerExportsForReactRefresh')
      const previousHadRefreshBoundary = hadRefreshBoundary.get(moduleId)
      hadRefreshBoundary.set(moduleId, hasRefreshBoundary)

      if (previousHadRefreshBoundary && !hasRefreshBoundary) {
        queueMicrotask(() => sendFullReload?.())
      }

      return null
    },
  }
}

/**
 * Serves a blank render-target page at /.figma/make/kit.html that
 * the Figma preview script drives directly. The page exposes a
 * registry of every file matching `storiesGlob` on
 * window.__FIGMA__.stories so the design surface can dynamically
 * import + mount each entry into its own grid view.
 *
 * Dev-only: `apply: 'serve'` gates the plugin to `vite dev`. Prod
 * builds (`vite build`) skip it entirely so the route doesn't leak
 * into shipped bundles.
 */
function figmaMakeKitPlugin(options: { storiesGlob: string | string[] }): Plugin {
  const storiesGlob = Array.isArray(options.storiesGlob) ? options.storiesGlob : [options.storiesGlob]
  const ROUTE = '/.figma/make/kit.html'
  const VIRTUAL_ID = 'virtual:figma-stories'
  const RESOLVED_ID = '\0' + VIRTUAL_ID
  const STORIES_MODULE = `export const stories = import.meta.glob(${JSON.stringify(storiesGlob)})`
  const HTML_BOOTSTRAP = `<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body>
<div id="figma-make-kit-root"></div>
<script type="module">
  import { stories } from 'virtual:figma-stories'
  window.__FIGMA__ = Object.assign(window.__FIGMA__ ?? {}, { stories })
  window.dispatchEvent(new CustomEvent('figma.ready'))
</script>
</body>
</html>`

  return {
    name: 'figma-make-kit',
    apply: 'serve',
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID
      return null
    },
    load(id) {
      if (id !== RESOLVED_ID) return null
      return STORIES_MODULE
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url || ''
        if (url.split('?')[0] !== ROUTE) return next()

        try {
          res.setHeader('Content-Type', 'text/html')
          res.end(await server.transformIndexHtml(url, HTML_BOOTSTRAP))
        } catch (err) {
          next(err as Error)
        }
      })
    },
  }
}


--- public\favicon.svg ---

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <circle cx="32" cy="32" r="32" fill="#1E6FBF" />
  <text x="32" y="33" fill="#fff" font-family="Georgia, 'Times New Roman', serif" font-size="30" font-weight="700" text-anchor="middle" dominant-baseline="central">FS</text>
</svg>


--- src\App.tsx ---

import { useCallback, useMemo, useState } from "react";
import Home from "./pages/Home";
import GameLevels from "./pages/GameLevels";
import PlatformerGame from "./pages/PlatformerGame";
import RunnerGame from "./pages/RunnerGame";
import ShooterGame from "./pages/ShooterGame";
import Experiences from "./pages/Experiences";
import Certificates from "./pages/Certificates";
import Skills from "./pages/Skills";
import LockedNotice from "./components/LockedNotice";
import type { PageKey } from "./components/SiteNav";
import { SiteProvider, useSite } from "./site/SiteContext";

type Route = PageKey | "levels" | "game";

const ALL_LEVELS = new Set([1, 2, 3]);

function AppInner() {
  const { devMode } = useSite();

  const [route, setRoute] = useState<Route>("home");
  const [achievements, setAchievements] = useState<Set<number>>(new Set());
  const [selectedLevelId, setSelectedLevelId] = useState<number>(1);
  const [lockedPrompt, setLockedPrompt] = useState<number | null>(null);

  const handleLevelComplete = useCallback((levelId: number) => {
    setAchievements((prev) => new Set([...prev, levelId]));
  }, []);

  /** Dev mode opens everything without touching real progress. */
  const unlocked = useMemo(
    () => (devMode ? ALL_LEVELS : achievements),
    [devMode, achievements],
  );

  const goPage = useCallback((page: PageKey) => {
    setRoute(page);
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const goLevels = useCallback(() => {
    setRoute("levels");
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const handleLockedAttempt = useCallback((levelId: number) => {
    setLockedPrompt(levelId);
  }, []);

  const playFromPrompt = useCallback(() => {
    setLockedPrompt(null);
    goLevels();
  }, [goLevels]);

  const pageProps = {
    unlocked,
    onNavigate: goPage,
    onLockedAttempt: handleLockedAttempt,
    onPlayClick: goLevels,
  };

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif" }} className="min-h-full bg-white">
      {route === "home" && (
        <Home
          onPlayClick={goLevels}
          achievements={unlocked}
          onNavigate={goPage}
          onLockedAttempt={handleLockedAttempt}
        />
      )}

      {route === "experiences" && <Experiences {...pageProps} />}
      {route === "certificates" && <Certificates {...pageProps} />}
      {route === "skills" && <Skills {...pageProps} />}

      {route === "levels" && (
        <GameLevels
          onBack={() => goPage("home")}
          onStartGame={(levelId) => {
            setSelectedLevelId(levelId);
            setRoute("game");
          }}
          onLevelComplete={handleLevelComplete}
          achievements={unlocked}
        />
      )}

      {route === "game" &&
        (selectedLevelId === 3 ? (
          <ShooterGame
            onBack={goLevels}
            onLevelComplete={handleLevelComplete}
            onViewAchievements={() => goPage("home")}
          />
        ) : selectedLevelId === 2 ? (
          <RunnerGame
            onBack={goLevels}
            onLevelComplete={handleLevelComplete}
            onViewAchievements={() => goPage("home")}
          />
        ) : (
          <PlatformerGame
            onBack={goLevels}
            levelId={selectedLevelId}
            onLevelComplete={handleLevelComplete}
            onViewAchievements={() => goPage("home")}
          />
        ))}

      {lockedPrompt !== null && (
        <LockedNotice
          levelId={lockedPrompt}
          onClose={() => setLockedPrompt(null)}
          onPlay={playFromPrompt}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <SiteProvider>
      <AppInner />
    </SiteProvider>
  );
}


--- src\index.css ---

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
@import 'tailwindcss';

@theme inline {
  --color-chelsea: #2B5F8A;
  --color-chelsea-dark: #1a3f5e;
  --color-chelsea-light: #4a87bc;
  --color-chelsea-pale: #d6e8f5;
  --font-display: 'Playfair Display', serif;
  --font-body: 'Outfit', sans-serif;
}

* {
  scrollbar-width: thin;
  scrollbar-color: #2B5F8A transparent;
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #2B5F8A; border-radius: 3px; }

html,
body,
#root {
  height: 100%;
}


--- src\main.tsx ---

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


--- src\vite-env.d.ts ---

/// <reference types="vite/client" />


--- .figma\make\analyze-routes ---

#!/usr/bin/env bash
set -euo pipefail

exec figma-analyze routes "$@"


--- .figma\make\deploy ---

#!/usr/bin/env bash
set -euo pipefail
pnpm run build
figma make deploy --build-dir dist


--- .figma\make\deploy-preview ---

#!/usr/bin/env bash
set -euo pipefail
# Build in development mode to emit sourcemaps.
pnpm run build --mode development
figma make deploy-preview --build-dir dist


--- .figma\make\dev ---

#!/usr/bin/env bash
set -euo pipefail

pnpm run dev


--- .figma\make\dev.json ---

{
  // Files whose changes trigger the install script + dev server restart.
  // Glob syntax: doublestar (supports **, *, ?, [abc], {a,b}). Paths are
  // repo-relative and case-sensitive. `.mise.toml` and the scripts under
  // `.figma/make/` are always watched regardless of these lists.
  //
  // Each key accepts a shorthand array of globs:
  //   "installOn": ["package.json"]
  // or an object with includes/excludes:
  //   "installOn": { "includes": ["**/*.json"], "excludes": ["test/**"] }
  //
  // Only list files that affect the *toolchain or dependency tree* here —
  // NOT application source files. Vite's dev server already watches
  // application code (src/**/*) and config (vite.config.ts) via its own HMR
  // pipeline, so including them here would cause a redundant full restart.
  "installOn": [
    "package.json",
    "pnpm-lock.yaml"
  ],
  // Files whose changes trigger only a dev server restart (no install).
  "restartOn": []
}


--- .figma\make\format ---

#!/usr/bin/env bash
set -euo pipefail

pnpm run format -- "$@"


--- .figma\make\install ---

#!/usr/bin/env bash
set -euo pipefail

pnpm install --prefer-offline --no-frozen-lockfile


--- .figma\make\langserver ---

#!/usr/bin/env bash
set -euo pipefail
exec pnpm dlx --package=@vtsls/language-server@^0.3.0 vtsls --stdio


--- .figma\make\site.json ---

{
  "description": "Interactive portfolio template featuring a Chelsea blue theme, a playable game with selectable levels, and customizable 3D logos for personal branding.",
  "robots": {
    "index": false
  },
  "accessibility": {
    "addBypassLinks": false,
    "ignoreReducedMotion": false
  }
}

--- src\assets\reference.png ---

�PNG

   
IHDR  �  8   ���C   	pHYs     ��   sRGB ���   gAMA  ���a   tEXtSoftware Figma���c  (�IDATx��   !�����A
���      ���       A       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B      �k�d    �[��+�`B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      �D�����    IEND�B`�

--- src\components\MedalReveal.tsx ---

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface MedalRevealProps {
  logoSrc: string;
  label: string;
  onComplete: () => void;
}

export default function MedalReveal({ logoSrc, label, onComplete }: MedalRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [textureReady, setTextureReady] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const container = containerRef.current;
    if (!container) return;

    const width = 340;
    const height = 340;

    // ── Offscreen Texture Canvas ──
    const offCanvas = document.createElement("canvas");
    offCanvas.width = 512;
    offCanvas.height = 512;
    const ctx = offCanvas.getContext("2d")!;

    function drawCoinFace(image?: HTMLImageElement) {
      ctx.clearRect(0, 0, 512, 512);

      // Gold outer background
      ctx.fillStyle = "#d4a017";
      ctx.fillRect(0, 0, 512, 512);

      // Outer gold border ring
      ctx.beginPath();
      ctx.arc(256, 256, 245, 0, Math.PI * 2);
      ctx.fillStyle = "#b48011";
      ctx.fill();

      // Inner face circle background
      ctx.beginPath();
      ctx.arc(256, 256, 225, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      ctx.lineWidth = 10;
      ctx.strokeStyle = "#f59e0b";
      ctx.stroke();

      if (image && image.complete && image.naturalWidth > 0) {
        ctx.save();
        ctx.beginPath();
        ctx.arc(256, 256, 215, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(image, 41, 41, 430, 440);
        ctx.restore();
      } else {
        // Fallback face (Navy circle + Gold initial)
        ctx.beginPath();
        ctx.arc(256, 256, 215, 0, Math.PI * 2);
        ctx.fillStyle = "#1e3a8a";
        ctx.fill();

        const initial = (label && label.trim().length > 0 ? label.trim()[0] : "A").toUpperCase();
        ctx.font = "900 200px 'Playfair Display', Georgia, serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#fbbf24";
        ctx.fillText(initial, 256, 260);

        ctx.beginPath();
        ctx.arc(256, 256, 210, 0, Math.PI * 2);
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#fef3c7";
        ctx.stroke();
      }
    }

    const canvasTexture = new THREE.CanvasTexture(offCanvas);
    canvasTexture.colorSpace = THREE.SRGBColorSpace;

    // Load image before setting up 3D scene & starting animation
    const img = new Image();
    img.crossOrigin = "anonymous";

    const initScene = () => {
      if (!isMounted) return;
      setTextureReady(true);

      // ── Three.js Scene Setup ──
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, 4.2);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Clean any existing canvas before appending
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      container.appendChild(renderer.domElement);

      // ── Enhanced Bright Lighting ──
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xfff5ea, 2.5);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      const fillLight = new THREE.DirectionalLight(0xffffff, 1.5);
      fillLight.position.set(-5, 3, 5);
      scene.add(fillLight);

      const frontLight = new THREE.DirectionalLight(0xffffff, 1.5);
      frontLight.position.set(0, 0, 6);
      scene.add(frontLight);

      const backLight = new THREE.DirectionalLight(0xd4a017, 1.0);
      backLight.position.set(-5, -5, -2);
      scene.add(backLight);

      // ── Coin Geometry & Materials ──
      const geometry = new THREE.CylinderGeometry(1.2, 1.2, 0.15, 48);

      const sideMaterial = new THREE.MeshStandardMaterial({
        color: 0xd4a017,
        metalness: 0.8,
        roughness: 0.3,
      });

      const faceMaterial = new THREE.MeshStandardMaterial({
        map: canvasTexture,
        metalness: 0.0,
        roughness: 0.25,
      });

      const coin = new THREE.Mesh(geometry, [sideMaterial, faceMaterial, faceMaterial]);
      coin.rotation.x = Math.PI / 2;
      scene.add(coin);

      // ── Animation Loop ──
      let animationFrameId: number;
      const startTime = performance.now();

      function animate(currentTime: number) {
        const t = currentTime - startTime;

        coin.rotation.y += 0.05;
        coin.rotation.x = Math.PI / 2 + Math.sin(t * 0.002) * 0.15;

        renderer.render(scene, camera);
        animationFrameId = requestAnimationFrame(animate);
      }

      animationFrameId = requestAnimationFrame(animate);

      return () => {
        cancelAnimationFrame(animationFrameId);
        geometry.dispose();
        sideMaterial.dispose();
        faceMaterial.dispose();
        canvasTexture.dispose();
        renderer.dispose();
        if (renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      };
    };

    let cleanupScene: (() => void) | undefined;

    if (logoSrc) {
      img.onload = () => {
        drawCoinFace(img);
        canvasTexture.needsUpdate = true;
        cleanupScene = initScene();
      };
      img.onerror = () => {
        drawCoinFace();
        canvasTexture.needsUpdate = true;
        cleanupScene = initScene();
      };
      img.src = logoSrc;
    } else {
      drawCoinFace();
      canvasTexture.needsUpdate = true;
      cleanupScene = initScene();
    }

    const timerId = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      isMounted = false;
      clearTimeout(timerId);
      if (cleanupScene) cleanupScene();
    };
  }, [logoSrc, label, onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.82)",
        backdropFilter: "blur(8px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10000,
        animation: "fadeIn 0.3s ease-out",
      }}
    >
      <div
        ref={containerRef}
        style={{
          width: 340,
          height: 340,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: textureReady ? 1 : 0,
          transition: "opacity 0.2s ease-in",
        }}
      />

      <div
        style={{
          textAlign: "center",
          color: "white",
          marginTop: 24,
          fontFamily: "'Outfit', sans-serif",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: 12,
            letterSpacing: 2.5,
            color: "#f59e0b",
            fontWeight: 700,
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Achievement Unlocked!
        </div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 28,
            fontWeight: 800,
            color: "#ffffff",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}


--- src\imports\Rectangle_1.png ---

�PNG

   
IHDR  �  8   ���C   	pHYs     ��   sRGB ���   gAMA  ���a   tEXtSoftware Figma���c  (�IDATx��   !�����A
���      ���       A       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B       D`      �      !�      "0      @�       ��              B      �k�d    �[��+�`B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      ��       ��             `B       L`      �	      0!�      &0      �D�����    IEND�B`�

--- src\pages\GameLevels.tsx ---

import { useState } from "react";

const C = "#1E6FBF";
const CD = "#0D4A8A";
const CL = "#5B9FD6";

const LEVELS = [
  {
    id: 1,
    name: "Cosmopolitan College Brunei",
    subtitle: "College Journey",
    description: "Built the core frontend architecture for the company's flagship product. Led the migration to React and implemented a component library used across 5 products.",
    difficulty: "Beginner",
    tasks: 8,
    xp: 200,
    locked: false,
    logo: "/images/logos/cosmopolitan.png",
  },
  {
    id: 2,
    name: "Muara International Fish Landing",
    subtitle: "Early Career",
    description: "Designed user experiences for 20+ client projects. Created design systems and conducted user research that improved conversion rates by 40%.",
    difficulty: "Intermediate",
    tasks: 12,
    xp: 450,
    locked: true,
    logo: "/images/logos/muara.png",
  },
  {
    id: 3,
    name: "Coffee Bean & Tea Leaf Brunei",
    subtitle: "AI Assistant",
    description: "Joined as an early engineer and built the entire product from scratch. Architected the backend, implemented the frontend, and deployed to production.",
    difficulty: "Advanced",
    tasks: 16,
    xp: 750,
    locked: true,
    logo: "/images/logos/cbtl.png",
  },
];

const DIFF_COLOR: Record<string, string> = {
  Beginner: "#16a34a",
  Intermediate: "#d97706",
  Advanced: "#dc2626",
  Expert: "#9333ea",
};

export default function GameLevels({ onBack, onStartGame, onLevelComplete, achievements }: { onBack: () => void; onStartGame: (levelId: number) => void; onLevelComplete: (levelId: number) => void; achievements: Set<number> }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [started, setStarted] = useState<number | null>(null);

  // Calculate locked state dynamically based on achievements
  const levelsWithLockStatus = LEVELS.map(level => ({
    ...level,
    locked: level.id === 1 ? false : !achievements.has(level.id - 1)
  }));

  // Functional XP sum based on completed achievements
  const totalXP = LEVELS.filter(level => achievements.has(level.id)).reduce((sum, level) => sum + level.xp, 0);

  if (started !== null) {
    return <LevelStarted level={LEVELS[started - 1]} onBack={() => setStarted(null)} onBegin={() => onStartGame(started)} />;
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f3f7fc", fontFamily: "'Outfit', sans-serif", color: "#0a0a0a" }}>

      {/* Blue Header Strip */}
      <div style={{ background: `linear-gradient(90deg, ${C}, ${CD})`, padding: "18px 32px", boxShadow: "0 4px 20px rgba(13,74,138,0.2)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <button onClick={onBack} style={{
              background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", color: "white",
              borderRadius: 6, padding: "8px 16px", fontSize: 13, fontWeight: 600, cursor: "pointer",
              transition: "all 0.2s", display: "flex", alignItems: "center", gap: 6,
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.25)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}
            >← Back to Portfolio</button>
            <div>
              <div style={{ fontSize: 11, letterSpacing: 2, color: "rgba(255,255,255,0.7)", fontWeight: 700, marginBottom: 2 }}>PORTFOLIO GAME</div>
              <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(22px, 3vw, 30px)", margin: 0, color: "white" }}>
                Select Your Level
              </h1>
            </div>
          </div>

          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#fef08a" }}>{totalXP}</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)", letterSpacing: 1, fontWeight: 600 }}>TOTAL XP</div>
            </div>
            <div style={{ width: 1, height: 28, background: "rgba(255,255,255,0.2)" }} />
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "white" }}>{achievements.size}/3</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", letterSpacing: 1 }}>COMPLETED</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "white" }}>36</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", letterSpacing: 1 }}>TOTAL TASKS</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "white" }}>1,400</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.6)", letterSpacing: 1 }}>MAX XP</div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro strip */}
      <div style={{ background: "white", padding: "14px 32px", borderBottom: `1px solid ${C}18` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p style={{ color: "#555", fontSize: 14, margin: 0 }}>
            Explore my career journey through 3 companies. Each level represents a different role I've held.
          </p>
        </div>
      </div>

      {/* Level grid */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 32px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))", gap: 20 }}>
          {levelsWithLockStatus.map(level => (
            <LevelCard
              key={level.id}
              level={level}
              selected={selected === level.id}
              onSelect={() => !level.locked && setSelected(selected === level.id ? null : level.id)}
              onStart={() => setStarted(level.id)}
              achievements={achievements}
            />
          ))}
        </div>
      </div>

      {/* Sticky bottom bar when a level is selected */}
      {selected !== null && (
        <div style={{
          position: "fixed", bottom: 0, left: 0, right: 0,
          background: "white", borderTop: `2px solid ${C}`,
          padding: "14px 32px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          boxShadow: "0 -6px 32px rgba(30,111,191,0.12)",
          zIndex: 100,
        }}>
          <div>
            <div style={{ fontSize: 11, color: CL, letterSpacing: 1, fontWeight: 600, marginBottom: 2 }}>READY TO START</div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: CD }}>
              Level {selected} — {levelsWithLockStatus[selected - 1].name}
            </div>
          </div>
          <button onClick={() => setStarted(selected!)} style={{
            padding: "12px 36px", background: C, color: "white",
            border: "none", borderRadius: 4, fontSize: 15, fontWeight: 700,
            cursor: "pointer", boxShadow: `0 4px 16px rgba(30,111,191,0.35)`,
          }}>Start Level →</button>
        </div>
      )}
    </div>
  );
}

function CircularLogoThumbnail({ logo, alt, name, size = 52, locked = false }: { logo: string; alt: string; name?: string; size?: number; locked?: boolean }) {
  const [imgError, setImgError] = useState(false);
  const initial = name ? name[0].toUpperCase() : "★";

  return (
    <div style={{
      width: size, height: size, borderRadius: "50%",
      background: imgError ? "linear-gradient(135deg, #1e3a8a, #0d4a8a)" : "transparent",
      border: locked ? "2px solid #cbd5e1" : "2px solid #fbbf24",
      boxShadow: locked ? "none" : "0 3px 10px rgba(251, 191, 36, 0.35)",
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden", position: "relative", flexShrink: 0,
      color: "#fbbf24", fontFamily: "'Playfair Display', serif", fontWeight: 800,
      fontSize: size * 0.42,
    }}>
      {!imgError ? (
        <img
          src={logo}
          alt={alt}
          onError={() => setImgError(true)}
          style={{
            width: "100%", height: "100%", objectFit: "contain", padding: size * 0.08,
            filter: locked ? "grayscale(80%) opacity(0.6)" : "none",
          }}
        />
      ) : (
        <span>{initial}</span>
      )}
      {locked && (
        <div style={{
          position: "absolute", inset: 0, background: "rgba(241, 245, 249, 0.75)",
          display: "flex", alignItems: "center", justifyContent: "center", fontSize: size * 0.38,
        }}>
          🔒
        </div>
      )}
    </div>
  );
}

function LevelCard({ level, selected, onSelect, onStart, achievements }: {
  level: typeof LEVELS[0];
  selected: boolean;
  onSelect: () => void;
  onStart: () => void;
  achievements: Set<number>;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onSelect}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: 10, overflow: "hidden", cursor: level.locked ? "default" : "pointer",
        background: "white",
        border: selected
          ? `2px solid ${C}`
          : hovered && !level.locked
          ? `2px solid ${C}50`
          : "2px solid transparent",
        boxShadow: selected
          ? `0 8px 32px rgba(30,111,191,0.18)`
          : hovered && !level.locked
          ? "0 4px 20px rgba(30,111,191,0.1)"
          : "0 1px 8px rgba(30,111,191,0.06)",
        transition: "all 0.25s",
        opacity: level.locked ? 0.6 : 1,
        position: "relative",
      }}
    >
      {/* top accent bar */}
      <div style={{
        height: 4,
        background: level.locked
          ? "#d1d5db"
          : `linear-gradient(90deg, ${CL}, ${C})`,
        opacity: selected ? 1 : hovered ? 0.85 : 0.5,
        transition: "opacity 0.25s",
      }} />

      <div style={{ padding: "24px 26px 22px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <CircularLogoThumbnail logo={level.logo} alt={level.name} name={level.name} size={52} locked={level.locked} />
            <div>
              <div style={{ fontSize: 11, color: CL, letterSpacing: 1, marginBottom: 2 }}>LEVEL {level.id}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: level.locked ? "#94a3b8" : "#0a0a0a" }}>{level.name}</div>
              <div style={{ fontSize: 12, color: level.locked ? "#94a3b8" : C, fontWeight: 500 }}>{level.subtitle}</div>
              {achievements.has(level.id) && (
                <div style={{ fontSize: 10, color: "#16a34a", fontWeight: 700, marginTop: 4 }}>✓ COMPLETED</div>
              )}
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
            <div style={{
              padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700,
              background: level.locked ? "#f1f5f9" : `${DIFF_COLOR[level.difficulty]}15`,
              color: level.locked ? "#94a3b8" : DIFF_COLOR[level.difficulty],
              border: `1px solid ${level.locked ? "#e2e8f0" : DIFF_COLOR[level.difficulty] + "40"}`,
            }}>{level.difficulty}</div>
            {achievements.has(level.id) && (
              <div style={{ fontSize: 10, color: "#16a34a", fontWeight: 600, letterSpacing: 0.5 }}>UNLOCKED</div>
            )}
          </div>
        </div>

        <p style={{ color: level.locked ? "#aaa" : "#555", fontSize: 14, lineHeight: 1.7, margin: "0 0 20px" }}>
          {level.description}
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 24 }}>
            <div>
              <div style={{ fontSize: 10, color: "#aaa", letterSpacing: 1, fontWeight: 600 }}>TASKS</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: level.locked ? "#aaa" : "#0a0a0a" }}>{level.tasks}</div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: "#aaa", letterSpacing: 1, fontWeight: 600 }}>XP REWARD</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: level.locked ? "#aaa" : C }}>+{level.xp}</div>
            </div>
          </div>
          {selected && !level.locked && (
            <button
              onClick={e => { e.stopPropagation(); onStart(); }}
              style={{
                padding: "9px 22px", background: C, color: "white",
                border: "none", borderRadius: 4, fontSize: 13, fontWeight: 700,
                cursor: "pointer", boxShadow: `0 3px 12px rgba(30,111,191,0.35)`,
              }}
            >Enter Level →</button>
          )}
          {level.locked && (
            <div style={{ fontSize: 12, color: "#aaa", display: "flex", alignItems: "center", gap: 4 }}>
              <span>🔒</span> Complete Level {level.id - 1} to unlock
            </div>
          )}
        </div>

        {/* Progress indicator bar */}
        <div style={{ marginTop: 18, height: 3, background: "#f1f5f9", borderRadius: 2, overflow: "hidden" }}>
          <div style={{
            width: !level.locked && selected ? "35%" : !level.locked && hovered ? "15%" : "0%",
            height: "100%",
            background: `linear-gradient(90deg, ${CL}, ${C})`,
            borderRadius: 2, transition: "width 0.5s ease",
          }} />
        </div>
      </div>
    </div>
  );
}

function LevelStarted({ level, onBack, onBegin }: { level: typeof LEVELS[0]; onBack: () => void; onBegin: () => void }) {
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "#f3f7fc", fontFamily: "'Outfit', sans-serif", padding: 32,
      zIndex: 1000,
    }}>
      <div style={{ textAlign: "center", maxWidth: 540, width: "100%" }}>
        <div style={{ margin: "0 auto 24px", display: "flex", justifyContent: "center" }}>
          <CircularLogoThumbnail logo={level.logo} alt={level.name} name={level.name} size={96} />
        </div>
        <div style={{ fontSize: 11, letterSpacing: 2.5, color: C, fontWeight: 700, marginBottom: 8 }}>LEVEL {level.id} SELECTED</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 900, margin: "0 0 12px", color: "#0a0a0a" }}>{level.name}</h1>
        <p style={{ color: "#666", fontSize: 16, lineHeight: 1.75, margin: "0 0 36px" }}>{level.description}</p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", marginBottom: 40 }}>
          {[["Tasks", level.tasks], ["XP", `+${level.xp}`], ["Difficulty", level.difficulty]].map(([k, v]) => (
            <div key={k as string} style={{
              padding: "14px 22px", background: "white", border: `1px solid ${C}20`, borderRadius: 8, textAlign: "center",
              boxShadow: "0 2px 10px rgba(30,111,191,0.07)",
            }}>
              <div style={{ fontSize: 10, color: "#aaa", letterSpacing: 1, fontWeight: 600, marginBottom: 4 }}>{k as string}</div>
              <div style={{ fontWeight: 700, fontSize: 16, color: "#0a0a0a" }}>{v as string | number}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button onClick={onBack} style={{
            padding: "12px 28px", background: "white", border: `1px solid ${C}30`, color: C,
            borderRadius: 4, fontSize: 14, fontWeight: 600, cursor: "pointer",
          }}>← Choose Another</button>
          <button onClick={onBegin} style={{
            padding: "12px 32px", background: C, color: "white",
            border: "none", borderRadius: 4, fontSize: 14, fontWeight: 700, cursor: "pointer",
            boxShadow: `0 4px 18px rgba(30,111,191,0.35)`,
          }}>Begin →</button>
        </div>
      </div>
    </div>
  );
}


--- src\pages\Home.tsx ---

import { useState } from "react";
import SiteNav from "../components/SiteNav";
import type { PageKey } from "../components/SiteNav";
import { readableOn, usePalette } from "../site/SiteContext";

interface Props {
  onPlayClick: () => void;
  achievements: Set<number>;
  onNavigate: (page: PageKey) => void;
  onLockedAttempt: (levelId: number) => void;
}

/* ─── HERO PLAY ORB ─────────────────────────────────────────── */
function HeroPlayOrb({ onClick }: { onClick: () => void }) {
  const { C, CD, CL, CP } = usePalette();
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <div
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: 2.5,
          color: C,
          background: CP,
          border: `1px solid ${C}33`,
          padding: "4px 13px",
          borderRadius: 20,
        }}
      >
        INTERACTIVE EXPERIENCE
      </div>

      <button
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setPressed(false);
        }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        style={{ background: "none", border: "none", cursor: "pointer", outline: "none", padding: 0 }}
        title="Play the portfolio"
      >
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: hovered
              ? `radial-gradient(circle at 36% 32%, ${CL}, ${C})`
              : `radial-gradient(circle at 36% 32%, ${C}, ${CD})`,
            boxShadow: hovered
              ? `0 0 72px ${C}80, 0 0 140px ${C}2e, inset 0 3px 14px rgba(255,255,255,0.35), inset 0 -4px 12px rgba(0,0,0,0.18)`
              : `0 10px 44px ${CD}52, inset 0 3px 14px rgba(255,255,255,0.2), inset 0 -4px 12px rgba(0,0,0,0.14)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: pressed ? "scale(0.94)" : hovered ? "scale(1.06)" : "scale(1)",
            transition: "all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: -8,
              borderRadius: "50%",
              border: `2px solid ${C}${hovered ? "70" : "22"}`,
              transition: "border-color 0.3s",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: -20,
              borderRadius: "50%",
              border: `1px solid ${C}${hovered ? "40" : "0e"}`,
              transition: "border-color 0.3s",
            }}
          />
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: "28px solid transparent",
              borderBottom: "28px solid transparent",
              borderLeft: `48px solid rgba(255,255,255,${hovered ? 1 : 0.9})`,
              marginLeft: 12,
              filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.18))",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 30,
              left: 46,
              width: 50,
              height: 18,
              background: "rgba(255,255,255,0.18)",
              borderRadius: 10,
              filter: "blur(5px)",
            }}
          />
        </div>
      </button>

      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: 2,
          color: "#8c95a1",
          textTransform: "uppercase",
        }}
      >
        Click to play
      </span>
    </div>
  );
}

/* ─── UNLOCK CARDS ──────────────────────────────────────────── */
interface UnlockDef {
  level: number;
  page: Exclude<PageKey, "home">;
  title: string;
  teaser: string;
  logo: string;
  levelName: string;
}

const UNLOCKS: UnlockDef[] = [
  {
    level: 1,
    page: "experiences",
    title: "Experiences",
    teaser: "Every role, project and team I've been part of — campus to current.",
    logo: "/images/logos/cosmopolitan.png",
    levelName: "The College Run",
  },
  {
    level: 2,
    page: "certificates",
    title: "Certificates & Recommendations",
    teaser: "The paperwork that backs it up, signed by people who aren't me.",
    logo: "/images/logos/muara.png",
    levelName: "The Survival Sprint",
  },
  {
    level: 3,
    page: "skills",
    title: "Skills",
    teaser: "What I reach for first, grouped by what it's actually for.",
    logo: "/images/logos/cbtl.png",
    levelName: "The Life Problem",
  },
];

function UnlockCard({
  def,
  unlocked,
  onOpen,
  onLocked,
}: {
  def: UnlockDef;
  unlocked: boolean;
  onOpen: () => void;
  onLocked: () => void;
}) {
  const { C, CL, CP } = usePalette();
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={unlocked ? onOpen : onLocked}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textAlign: "left",
        background: "white",
        border: `2px solid ${unlocked ? (hovered ? C : "#16a34a") : "#e2e8f0"}`,
        borderRadius: 14,
        padding: "26px 24px 22px",
        cursor: "pointer",
        boxShadow: hovered
          ? unlocked
            ? `0 16px 40px ${C}26`
            : "0 8px 24px rgba(0,0,0,0.08)"
          : unlocked
            ? "0 4px 18px rgba(22,163,74,0.12)"
            : "0 1px 8px rgba(0,0,0,0.05)",
        opacity: unlocked ? 1 : 0.72,
        transform: hovered ? "translateY(-4px)" : "none",
        transition: "all 0.26s",
        display: "flex",
        flexDirection: "column",
        gap: 14,
        font: "inherit",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ position: "relative", width: 52, height: 52, flexShrink: 0 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              overflow: "hidden",
              background: "white",
              border: `2px solid ${unlocked ? "#16a34a" : "#e2e8f0"}`,
              boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              filter: unlocked ? "none" : "grayscale(1)",
              transition: "filter 0.3s",
            }}
          >
            <img
              src={def.logo}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "50%" }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: -3,
              right: -3,
              width: 21,
              height: 21,
              borderRadius: "50%",
              background: unlocked ? "#16a34a" : "#94a3b8",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
              fontWeight: 700,
              border: "2px solid white",
              boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
            }}
          >
            {unlocked ? "✓" : "🔒"}
          </div>
        </div>

        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: 10, color: CL, letterSpacing: 1.3, fontWeight: 700, marginBottom: 3 }}>
            LEVEL {def.level} · {def.levelName.toUpperCase()}
          </div>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 19,
              fontWeight: 700,
              color: unlocked ? "#0a0a0a" : "#7c8796",
              lineHeight: 1.25,
            }}
          >
            {def.title}
          </div>
        </div>
      </div>

      <p style={{ color: "#6b7481", fontSize: 13.6, lineHeight: 1.65, margin: 0, flex: 1 }}>{def.teaser}</p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 12,
          borderTop: `1px solid ${unlocked ? C + "1a" : "#eef1f5"}`,
        }}
      >
        <span
          style={{
            fontSize: 11.5,
            fontWeight: 800,
            letterSpacing: 0.6,
            color: unlocked ? "#16a34a" : "#94a3b8",
          }}
        >
          {unlocked ? "✓ UNLOCKED" : "🔒 LOCKED"}
        </span>
        <span
          style={{
            fontSize: 12.5,
            fontWeight: 700,
            color: unlocked ? C : "#a9b3c0",
            background: unlocked && hovered ? CP : "transparent",
            padding: "4px 10px",
            borderRadius: 6,
            transition: "all 0.2s",
          }}
        >
          {unlocked ? "View →" : "Play to unlock"}
        </span>
      </div>
    </button>
  );
}

/* ─── PAGE ───────────────────────────────────────────────────── */
export default function Home({ onPlayClick, achievements, onNavigate, onLockedAttempt }: Props) {
  const { C, CD, CL, CP, CDD } = usePalette();

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", color: "#1a1a1a", background: "#fff" }}>
      <SiteNav
        current="home"
        onNavigate={onNavigate}
        unlocked={achievements}
        onLockedAttempt={onLockedAttempt}
        onPlayClick={onPlayClick}
      />

      {/* ── HERO ── */}
      <section style={{ background: "white", padding: "80px 32px 72px", borderBottom: `1px solid ${C}14` }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 14px",
                background: CP,
                borderRadius: 20,
                color: C,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                marginBottom: 24,
                border: `1px solid ${C}2b`,
              }}
            >
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }} />
              AI/IT SUPERVISOR · BRUNEI
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: "clamp(38px, 4.5vw, 62px)",
                color: "#0a0a0a",
                lineHeight: 1.08,
                margin: "0 0 22px",
              }}
            >
              I figure out
              <br />
              the <span style={{ color: C, fontStyle: "italic" }}>tool</span>, then
              <br />
              fix the process.
            </h1>

            <p style={{ color: "#67707d", fontSize: 17, lineHeight: 1.75, margin: "0 0 36px", maxWidth: 470 }}>
              Solo AI/IT lead at Coffee Bean &amp; Tea Leaf Brunei. I came from admin, not a
              computer science degree — which is exactly why the tools I roll out have to make
              sense to everyone else too.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                onClick={onPlayClick}
                style={{
                  padding: "13px 30px",
                  background: C,
                  color: readableOn(C),
                  border: "none",
                  borderRadius: 4,
                  fontSize: 15,
                  fontWeight: 700,
                  cursor: "pointer",
                  boxShadow: `0 4px 18px ${C}52`,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = CD;
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = C;
                  e.currentTarget.style.transform = "none";
                }}
              >
                Play the portfolio
              </button>
              <a
                href="https://www.linkedin.com/in/fawwaz-susanto"
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "13px 30px",
                  background: "transparent",
                  color: C,
                  border: `2px solid ${C}52`,
                  borderRadius: 4,
                  fontSize: 15,
                  fontWeight: 600,
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = C;
                  e.currentTarget.style.background = CP;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${C}52`;
                  e.currentTarget.style.background = "transparent";
                }}
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <HeroPlayOrb onClick={onPlayClick} />
          </div>
        </div>
      </section>

      {/* ── CURRENTLY ── */}
      <section style={{ background: C, padding: "26px 32px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
          }}
        >
          {[
            ["Now", "AI/IT Supervisor, CBTL"],
            ["Based in", "Brunei-Muara, Brunei"],
            ["Focus", "AI adoption & internal tooling"],
            ["Open to", "Connecting & collaborating"],
          ].map(([label, value], i, arr) => (
            <div
              key={label}
              style={{
                textAlign: "center",
                padding: "8px 14px",
                borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.2)" : "none",
              }}
            >
              <div
                style={{
                  color: "rgba(255,255,255,0.62)",
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: 1.6,
                  textTransform: "uppercase",
                  marginBottom: 5,
                }}
              >
                {label}
              </div>
              <div style={{ color: "white", fontSize: 14.5, fontWeight: 600 }}>{value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── ACHIEVEMENTS / UNLOCKS ── */}
      <section style={{ padding: "88px 32px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <div
              style={{
                display: "inline-block",
                padding: "4px 14px",
                background: `${C}14`,
                borderRadius: 20,
                color: C,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                marginBottom: 14,
              }}
            >
              CAREER JOURNEY
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: 36,
                margin: "0 0 10px",
                color: "#0a0a0a",
              }}
            >
              Achievements
            </h2>
            <p style={{ color: "#8c95a1", fontSize: 15, margin: "0 auto", maxWidth: 520, lineHeight: 1.7 }}>
              Each level of the game unlocks a real part of the CV. Finish a level, open the
              section. {achievements.size}/3 unlocked so far.
            </p>

            {/* progress bar */}
            <div
              style={{
                maxWidth: 260,
                height: 6,
                background: "#e6ebf2",
                borderRadius: 4,
                margin: "20px auto 0",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${(achievements.size / 3) * 100}%`,
                  height: "100%",
                  background: `linear-gradient(90deg, ${CL}, ${C})`,
                  borderRadius: 4,
                  transition: "width 0.5s cubic-bezier(0.34, 1.3, 0.64, 1)",
                }}
              />
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 24,
              alignItems: "stretch",
            }}
          >
            {UNLOCKS.map((def) => (
              <UnlockCard
                key={def.page}
                def={def}
                unlocked={achievements.has(def.level)}
                onOpen={() => onNavigate(def.page)}
                onLocked={() => onLockedAttempt(def.level)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ padding: "88px 32px", background: "white" }}>
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "4px 14px",
                background: `${C}14`,
                borderRadius: 20,
                color: C,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                marginBottom: 18,
              }}
            >
              ABOUT ME
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: 36,
                margin: "0 0 20px",
                color: "#0a0a0a",
                lineHeight: 1.22,
              }}
            >
              Not a developer. Still the one who builds it.
            </h2>
            <p style={{ color: "#67707d", fontSize: 16, lineHeight: 1.8, margin: "0 0 18px" }}>
              I studied at Cosmopolitan College in Brunei, led a team building an inventory system
              before I graduated, then spent six months as an HR intern quietly becoming the person
              who fixed whatever was broken — the payroll checks, the printer, the spreadsheet
              nobody wanted to touch.
            </p>
            <p style={{ color: "#67707d", fontSize: 16, lineHeight: 1.8, margin: 0 }}>
              That turned into an AI role at Coffee Bean &amp; Tea Leaf, and then into running it.
              The work is less about the models and more about making them land with people who
              didn't ask for new software.
            </p>
          </div>

          <div
            style={{
              background: `linear-gradient(145deg, ${CP}, #ffffff)`,
              border: `1px solid ${C}1f`,
              borderRadius: 16,
              padding: "30px 28px",
            }}
          >
            <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: 1.6, color: CL, marginBottom: 18 }}>
              THE SHORT VERSION
            </div>
            {[
              ["2021 — 2025", "Cosmopolitan College of Commerce & Technology"],
              ["2025", "HR Assistant · Muara International Fish Landing"],
              ["2026", "AI/IT Assistant → Supervisor · CBTL Brunei"],
            ].map(([when, what], i, arr) => (
              <div
                key={when}
                style={{
                  paddingBottom: i < arr.length - 1 ? 16 : 0,
                  marginBottom: i < arr.length - 1 ? 16 : 0,
                  borderBottom: i < arr.length - 1 ? `1px solid ${C}14` : "none",
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, color: C, marginBottom: 3 }}>{when}</div>
                <div style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.5 }}>{what}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section style={{ padding: "80px 32px", background: CD }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 38,
              color: "white",
              margin: "0 0 14px",
            }}
          >
            Let's talk.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, margin: "0 0 32px", lineHeight: 1.7 }}>
            Open to connecting about AI adoption, internal tooling, or anything else on this page.
          </p>
          <a
            href="https://www.linkedin.com/in/fawwaz-susanto"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              padding: "14px 34px",
              background: "white",
              color: CD,
              borderRadius: 6,
              fontSize: 15,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 6px 22px rgba(0,0,0,0.2)",
            }}
          >
            Reach me on LinkedIn →
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: CDD, padding: "26px 32px", borderTop: `2px solid ${C}` }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 18, color: "white" }}>
            Fawwaz Susanto
          </div>
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>
            © {new Date().getFullYear()} · Built in Brunei
          </div>
          <a
            href="https://www.linkedin.com/in/fawwaz-susanto"
            target="_blank"
            rel="noreferrer"
            style={{ color: "rgba(255,255,255,0.5)", fontSize: 13, textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}


--- src\pages\PlatformerGame.tsx ---

import { useEffect, useRef, useState } from "react";
import MedalReveal from "../components/MedalReveal";

const CW = 800;
const CH = 480;
const GRAV = 0.45; // Reduced for slower rise
const JUMP_V = -10; // Slightly reduced jump velocity
const SPD = 3.8; // Reduced by ~15% for more controlled movement
const PW = 11;   // player half-width
const PH = 70;   // player height (feet to top)

type PlatType = "ground" | "block" | "pipe";
interface Plat { x: number; y: number; w: number; h: number; t: PlatType }
interface Coin { x: number; y: number; col: boolean }
interface Spike { x: number; y: number; w: number; h: number }
interface Monster { pipeX: number; pipeTopY: number; period: number; phaseOffset: number }
interface BloodParticle { x: number; y: number; vx: number; vy: number; settled: boolean; r: number }

interface LevelData {
  id: number;
  company: string;
  role: string;
  platforms: Plat[];
  coins: Coin[];
  spikes: Spike[];
  monsters: Monster[];
  winX: number;
  flagX: number;
  groundY: number;
  theme: {
    bg: string;
    skyDot: string;
    ground: string;
    groundTop: string;
    groundLine: string;
    block: string;
    blockStroke: string;
    pipe: string;
    pipeStroke: string;
  };
}

const LEVELS: LevelData[] = [
  {
    id: 1,
    company: "TechCorp Inc.",
    role: "Senior Frontend Developer",
    platforms: [
      { x: -100, y: 424, w: 2700, h: 56, t: "ground" },
      { x: 240,  y: 344, w: 100, h: 16, t: "block" },
      { x: 420,  y: 278, w: 110, h: 16, t: "block" },
      { x: 580,  y: 340, w: 90,  h: 16, t: "block" },
      { x: 750,  y: 252, w: 110, h: 16, t: "block" },
      { x: 930,  y: 312, w: 130, h: 16, t: "block" },
      { x: 1110, y: 260, w: 100, h: 16, t: "block" },
      { x: 1290, y: 320, w: 110, h: 16, t: "block" },
      { x: 1480, y: 258, w: 130, h: 16, t: "block" },
      { x: 1690, y: 308, w: 100, h: 16, t: "block" },
      { x: 1870, y: 252, w: 120, h: 16, t: "block" },
      { x: 350,  y: 368, w: 48,  h: 56, t: "pipe" },
      { x: 710,  y: 382, w: 48,  h: 42, t: "pipe" },
      { x: 1050, y: 374, w: 48,  h: 50, t: "pipe" },
      { x: 1640, y: 376, w: 48,  h: 48, t: "pipe" },
    ],
    spikes: [
      { x: 490, y: 260, w: 36, h: 18 },
      { x: 800, y: 402, w: 48, h: 22 },
      { x: 995, y: 290, w: 36, h: 20 },
      { x: 1180, y: 400, w: 48, h: 24 },
      { x: 1350, y: 405, w: 36, h: 19 },
      { x: 1580, y: 403, w: 48, h: 21 },
      { x: 1800, y: 404, w: 36, h: 20 },
    ],
    monsters: [
      { pipeX: 350, pipeTopY: 368, period: 180, phaseOffset: 0 },
      { pipeX: 1050, pipeTopY: 374, period: 180, phaseOffset: 90 },
    ],
    coins: [
      { x: 285, y: 310, col: false },
      { x: 465, y: 244, col: false },
      { x: 625, y: 306, col: false },
      { x: 795, y: 218, col: false },
      { x: 978, y: 400, col: false },
      { x: 1150, y: 226, col: false },
      { x: 1335, y: 286, col: false },
      { x: 1525, y: 224, col: false },
      { x: 1735, y: 274, col: false },
      { x: 1915, y: 218, col: false },
    ],
    winX: 2140,
    flagX: 2150,
    groundY: 424,
    theme: {
      bg: "#fffbeb",
      skyDot: "#fef3c7",
      ground: "#92400e",
      groundTop: "#78350f",
      groundLine: "#451a03",
      block: "#fef3c7",
      blockStroke: "#92400e",
      pipe: "#fcd34d",
      pipeStroke: "#92400e",
    },
  },
  {
    id: 2,
    company: "DesignStudio",
    role: "UI/UX Designer",
    platforms: [
      { x: -100, y: 424, w: 2200, h: 56, t: "ground" },
      { x: 200,  y: 360, w: 90,  h: 16, t: "block" },
      { x: 380,  y: 300, w: 100, h: 16, t: "block" },
      { x: 550,  y: 350, w: 80,  h: 16, t: "block" },
      { x: 720,  y: 270, w: 100, h: 16, t: "block" },
      { x: 900,  y: 330, w: 120, h: 16, t: "block" },
      { x: 1080, y: 280, w: 90,  h: 16, t: "block" },
      { x: 1260, y: 340, w: 100, h: 16, t: "block" },
      { x: 1450, y: 280, w: 110, h: 16, t: "block" },
      { x: 1650, y: 330, w: 90,  h: 16, t: "block" },
      { x: 300,  y: 380, w: 48,  h: 44, t: "pipe" },
      { x: 680,  y: 390, w: 48,  h: 34, t: "pipe" },
      { x: 1020, y: 382, w: 48,  h: 42, t: "pipe" },
      { x: 1600, y: 384, w: 48,  h: 40, t: "pipe" },
    ],
    spikes: [],
    monsters: [],
    coins: [
      { x: 245, y: 326, col: false },
      { x: 420, y: 266, col: false },
      { x: 590, y: 316, col: false },
      { x: 760, y: 236, col: false },
      { x: 950, y: 296, col: false },
      { x: 1120, y: 246, col: false },
      { x: 1300, y: 306, col: false },
      { x: 1490, y: 246, col: false },
      { x: 1690, y: 296, col: false },
    ],
    winX: 1800,
    flagX: 1810,
    groundY: 424,
    theme: {
      bg: "#fff5f5",
      skyDot: "#ffd6d6",
      ground: "#8b0000",
      groundTop: "#660000",
      groundLine: "#4a0000",
      block: "#ffe4e4",
      blockStroke: "#8b0000",
      pipe: "#ffb3b3",
      pipeStroke: "#8b0000",
    },
  },
  {
    id: 3,
    company: "StartupXYZ",
    role: "Full Stack Engineer",
    platforms: [
      { x: -100, y: 424, w: 2500, h: 56, t: "ground" },
      { x: 220,  y: 350, w: 110, h: 16, t: "block" },
      { x: 400,  y: 290, w: 90,  h: 16, t: "block" },
      { x: 560,  y: 345, w: 100, h: 16, t: "block" },
      { x: 740,  y: 265, w: 110, h: 16, t: "block" },
      { x: 920,  y: 325, w: 90,  h: 16, t: "block" },
      { x: 1100, y: 275, w: 110, h: 16, t: "block" },
      { x: 1280, y: 335, w: 100, h: 16, t: "block" },
      { x: 1470, y: 275, w: 120, h: 16, t: "block" },
      { x: 1670, y: 325, w: 90,  h: 16, t: "block" },
      { x: 1850, y: 270, w: 110, h: 16, t: "block" },
      { x: 320,  y: 374, w: 48,  h: 50, t: "pipe" },
      { x: 700,  y: 386, w: 48,  h: 38, t: "pipe" },
      { x: 1060, y: 378, w: 48,  h: 46, t: "pipe" },
      { x: 1620, y: 380, w: 48,  h: 44, t: "pipe" },
    ],
    spikes: [],
    monsters: [],
    coins: [
      { x: 275, y: 316, col: false },
      { x: 440, y: 256, col: false },
      { x: 605, y: 311, col: false },
      { x: 785, y: 231, col: false },
      { x: 955, y: 291, col: false },
      { x: 1145, y: 241, col: false },
      { x: 1320, y: 301, col: false },
      { x: 1520, y: 241, col: false },
      { x: 1705, y: 291, col: false },
      { x: 1895, y: 236, col: false },
    ],
    winX: 2000,
    flagX: 2010,
    groundY: 424,
    theme: {
      bg: "#f0f9ff",
      skyDot: "#bae6fd",
      ground: "#0369a1",
      groundTop: "#0284c7",
      groundLine: "#0c4a6e",
      block: "#e0f2fe",
      blockStroke: "#0369a1",
      pipe: "#7dd3fc",
      pipeStroke: "#0369a1",
    },
  },
];

interface GS {
  px: number; py: number;
  vx: number; vy: number;
  onGround: boolean;
  facing: 1 | -1;
  walkF: number;
  camX: number;
  coins: Coin[];
  score: number;
  keys: Set<string>;
  dead: boolean;
  deathCause: "fall" | "spike" | "monster" | null;
  deathT: number;
  won: boolean;
  wonT: number;
  insufficientStars: boolean;
  timeRemaining: number;
  timeUp: boolean;
  frameCount: number;
  bloodParticles: BloodParticle[];
  medalCollected: boolean;
}

function freshState(level: LevelData): GS {
  return {
    px: 80, py: 374, vx: 0, vy: 0,
    onGround: false, facing: 1, walkF: 0, camX: 0,
    coins: level.coins.map(c => ({ ...c })),
    score: 0, keys: new Set(),
    dead: false, deathCause: null, deathT: 0, won: false, wonT: 0, insufficientStars: false,
    timeRemaining: 60, timeUp: false,
    frameCount: 0,
    bloodParticles: [],
    medalCollected: false,
  };
}

/* ─── drawing helpers ─────────────────────────────────── */

function drawPlatforms(ctx: CanvasRenderingContext2D, camX: number, level: LevelData) {
  for (const p of level.platforms) {
    if (p.x + p.w < camX - 20 || p.x > camX + CW + 20) continue;

    if (p.t === "ground") {
      ctx.fillStyle = level.theme.ground;
      ctx.fillRect(p.x, p.y, p.w, p.h);
      // bright top edge
      ctx.fillStyle = level.theme.groundTop;
      ctx.fillRect(p.x, p.y, p.w, 4);
      // brick rows
      ctx.strokeStyle = level.theme.groundLine;
      ctx.lineWidth = 1;
      const rows = [0, 14, 28, 42];
      rows.forEach((ry, ri) => {
        const offset = ri % 2 === 0 ? 0 : 20;
        for (let bx = p.x + offset; bx < p.x + p.w; bx += 40) {
          ctx.strokeRect(bx, p.y + 4 + ry, 40, 14);
        }
      });
      // top line
      ctx.strokeStyle = level.theme.groundLine;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(p.x, p.y); ctx.lineTo(p.x + p.w, p.y);
      ctx.stroke();

    } else if (p.t === "pipe") {
      // Body
      ctx.fillStyle = level.theme.pipe;
      ctx.fillRect(p.x + 1, p.y + 14, p.w - 2, p.h - 14);
      ctx.strokeStyle = level.theme.pipeStroke;
      ctx.lineWidth = 2.5;
      ctx.strokeRect(p.x + 1, p.y + 14, p.w - 2, p.h - 14);
      // Inner stripe
      ctx.strokeStyle = level.theme.pipeStroke;
      ctx.lineWidth = 1;
      for (let py2 = p.y + 22; py2 < p.y + p.h; py2 += 9) {
        ctx.beginPath();
        ctx.moveTo(p.x + 5, py2); ctx.lineTo(p.x + p.w - 5, py2);
        ctx.stroke();
      }
      // Lip (wider top)
      ctx.fillStyle = level.theme.pipe;
      ctx.fillRect(p.x - 4, p.y, p.w + 8, 14);
      ctx.strokeStyle = level.theme.pipeStroke;
      ctx.lineWidth = 2.5;
      ctx.strokeRect(p.x - 4, p.y, p.w + 8, 14);

    } else {
      // Block
      ctx.fillStyle = level.theme.block;
      ctx.fillRect(p.x, p.y, p.w, p.h);
      ctx.strokeStyle = level.theme.blockStroke;
      ctx.lineWidth = 2;
      ctx.strokeRect(p.x, p.y, p.w, p.h);
      // Segmented look
      ctx.strokeStyle = level.theme.blockStroke;
      ctx.lineWidth = 1;
      const segW = 20;
      for (let bx = p.x + segW; bx < p.x + p.w; bx += segW) {
        ctx.beginPath();
        ctx.moveTo(bx, p.y + 2); ctx.lineTo(bx, p.y + p.h - 2);
        ctx.stroke();
      }
    }
  }
}

function drawCoin(ctx: CanvasRenderingContext2D, x: number, y: number) {
  ctx.save();
  ctx.translate(x, y);
  ctx.beginPath();
  ctx.arc(0, 0, 9, 0, Math.PI * 2);
  ctx.fillStyle = "#fff";
  ctx.fill();
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = "#000";
  ctx.font = "bold 11px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("★", 0, 0.5);
  ctx.restore();
}

function drawSpike(ctx: CanvasRenderingContext2D, spike: Spike) {
  ctx.save();
  ctx.fillStyle = "#444";
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2;

  // Draw jagged sawtooth pattern with 3-4 sharp points
  const numPoints = Math.floor(spike.w / 12); // 3-4 points based on width
  const pointWidth = spike.w / numPoints;

  for (let i = 0; i < numPoints; i++) {
    const startX = spike.x + i * pointWidth;
    const midX = startX + pointWidth / 2;
    const endX = startX + pointWidth;

    ctx.beginPath();
    ctx.moveTo(startX, spike.y + spike.h);
    ctx.lineTo(midX, spike.y);
    ctx.lineTo(endX, spike.y + spike.h);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  ctx.restore();
}

/* ─── biting pipe monster (Piranha-Plant style) ─────────── */

const MONSTER_MAX_HEIGHT = 100; // long reaching root

function monsterExtension(m: Monster, frame: number): number {
  // 0 = fully hidden in pipe, 1 = fully emerged. Spends most of the cycle hidden.
  const t = (frame + m.phaseOffset) % m.period;
  const raw = Math.sin((t / m.period) * Math.PI * 2);
  return Math.max(0, Math.min(1, raw * 1.6 - 0.5));
}

function monsterMouthOpenness(m: Monster, frame: number, ext: number): number {
  if (ext < 0.3) return 0;
  return ((Math.sin((frame + m.phaseOffset) * 0.35) + 1) / 2) * ext;
}

function monsterHitbox(m: Monster, frame: number) {
  const ext = monsterExtension(m, frame);
  const bodyH = MONSTER_MAX_HEIGHT * ext;
  const baseX = m.pipeX + 24;
  const headOffsetX = Math.sin(1 * Math.PI * 2.2) * 5; // matches the wobble at the top segment in drawMonster
  const headX = baseX + headOffsetX;
  const topY = m.pipeTopY - bodyH;
  const mouthY = topY + 5;
  const openness = monsterMouthOpenness(m, frame, ext);
  const jawGap = 3 + 6 * openness;
  return {
    ext, cx: headX, mouthY, jawGap,
    left: headX - 9, right: headX + 9,
    top: mouthY - jawGap - 2, bottom: mouthY + jawGap + 2,
  };
}

function drawMonster(ctx: CanvasRenderingContext2D, m: Monster, frame: number) {
  const ext = monsterExtension(m, frame);
  if (ext <= 0.02) return; // fully hidden — nothing to draw

  const cx = m.pipeX + 24;
  const baseY = m.pipeTopY;
  const bodyH = MONSTER_MAX_HEIGHT * ext;
  const topY = baseY - bodyH;
  const openness = monsterMouthOpenness(m, frame, ext);
  const mouthY = topY + 5;
  const jawGap = 3 + 6 * openness;

  ctx.save();

  // ── Body: a tall, twisted root column (not a smooth stem) ──
  const segments = 7;
  const wobble = 5; // how much the root snakes side to side
  const pts: { x: number; y: number }[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const py = baseY - bodyH * t;
    const px = cx + Math.sin(t * Math.PI * 2.2) * wobble * t; // wobble grows toward the top
    pts.push({ x: px, y: py });
  }

  ctx.strokeStyle = "#14532d";
  ctx.fillStyle = "#16a34a";
  ctx.lineWidth = 9;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(pts[0].x, pts[0].y);
  for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
  ctx.stroke();

  // thin darker root fibers running alongside the main column, for texture
  ctx.strokeStyle = "#14532d";
  ctx.lineWidth = 1.2;
  for (const offset of [-3, 3]) {
    ctx.beginPath();
    ctx.moveTo(pts[0].x + offset, pts[0].y);
    for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x + offset * (1 - i / pts.length * 0.4), pts[i].y);
    ctx.stroke();
  }

  // small root nubs branching off the column
  [2, 4].forEach(i => {
    if (i >= pts.length) return;
    const p = pts[i];
    const side = i % 2 === 0 ? 1 : -1;
    ctx.strokeStyle = "#14532d";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    ctx.quadraticCurveTo(p.x + side * 7, p.y + 2, p.x + side * 11, p.y - 2);
    ctx.stroke();
  });

  const headX = pts[pts.length - 1].x;

  // Mouth interior
  ctx.fillStyle = "#7f1d1d";
  ctx.beginPath();
  ctx.ellipse(headX, mouthY, 8, jawGap, 0, 0, Math.PI * 2);
  ctx.fill();

  // Teeth (top and bottom jaw)
  ctx.fillStyle = "#fff";
  for (let i = -1; i <= 1; i++) {
    const tx = headX + i * 5;
    ctx.beginPath();
    ctx.moveTo(tx - 2, mouthY - jawGap);
    ctx.lineTo(tx + 2, mouthY - jawGap);
    ctx.lineTo(tx, mouthY - jawGap + 3);
    ctx.closePath();
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(tx - 2, mouthY + jawGap);
    ctx.lineTo(tx + 2, mouthY + jawGap);
    ctx.lineTo(tx, mouthY + jawGap - 3);
    ctx.closePath();
    ctx.fill();
  }

  ctx.restore();
}

function bloodSurfacesAt(px: number, level: LevelData): number[] {
  const ys: number[] = [];
  for (const plat of level.platforms) {
    if (px > plat.x && px < plat.x + plat.w) ys.push(plat.y);
  }
  return ys;
}

function drawInWorldMedal(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  frameCount: number,
  logoImg: HTMLImageElement | null
) {
  ctx.save();
  ctx.translate(x, y);

  const scaleX = Math.abs(Math.sin(frameCount * 0.08));
  ctx.scale(scaleX, 1);

  const R = 15;

  // Outer gold base
  ctx.save();
  ctx.shadowColor = "rgba(0, 0, 0, 0.25)";
  ctx.shadowBlur = 4;
  ctx.shadowOffsetY = 2;

  ctx.beginPath();
  ctx.arc(0, 0, R, 0, Math.PI * 2);
  ctx.fillStyle = "#fbbf24";
  ctx.fill();
  ctx.restore();

  // Draw logo image clipped inside circle if ready
  if (logoImg && logoImg.complete && logoImg.naturalWidth > 0) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, R - 2, 0, Math.PI * 2);
    ctx.clip();

    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.drawImage(logoImg, -(R - 2), -(R - 2), (R - 2) * 2, (R - 2) * 2);
    ctx.restore();
  } else {
    // Inner accent fallback
    ctx.beginPath();
    ctx.arc(0, 0, R - 4, 0, Math.PI * 2);
    ctx.fillStyle = "#fbbf24";
    ctx.fill();

    ctx.fillStyle = "#92400e";
    ctx.font = "bold 10px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("★", 0, 0);
  }

  // Radial gradient shine overlay
  ctx.save();
  ctx.beginPath();
  ctx.arc(0, 0, R - 1, 0, Math.PI * 2);
  ctx.clip();

  const shineGrad = ctx.createRadialGradient(-R * 0.35, -R * 0.35, 1, -R * 0.1, -R * 0.1, R * 1.3);
  shineGrad.addColorStop(0, "rgba(255, 255, 255, 0.65)");
  shineGrad.addColorStop(0.4, "rgba(255, 255, 255, 0.2)");
  shineGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = shineGrad;
  ctx.fill();
  ctx.restore();

  // Thin gold rim stroke
  ctx.beginPath();
  ctx.arc(0, 0, R, 0, Math.PI * 2);
  ctx.strokeStyle = "#d4a017";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, R - 1, 0, Math.PI * 2);
  ctx.strokeStyle = "#92400e";
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.restore();
}

function drawFlag(ctx: CanvasRenderingContext2D, x: number, groundY: number) {
  // Pole
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(x, groundY); ctx.lineTo(x, groundY - 110);
  ctx.stroke();
  // Flag
  ctx.fillStyle = "#000";
  ctx.beginPath();
  ctx.moveTo(x, groundY - 110);
  ctx.lineTo(x + 34, groundY - 94);
  ctx.lineTo(x, groundY - 78);
  ctx.closePath();
  ctx.fill();
  // Checkerboard on flag
  ctx.fillStyle = "#fff";
  ctx.fillRect(x + 4, groundY - 106, 8, 8);
  ctx.fillRect(x + 20, groundY - 98, 8, 8);
  ctx.fillRect(x + 4, groundY - 90, 8, 8);
  // Ball on top
  ctx.beginPath();
  ctx.arc(x, groundY - 110, 5, 0, Math.PI * 2);
  ctx.fillStyle = "#000";
  ctx.fill();
}

function drawStickman(
  ctx: CanvasRenderingContext2D,
  x: number, y: number,
  facing: 1 | -1,
  walkF: number,
  onGround: boolean,
  moving: boolean,
  vy: number,
  levelId: number,
  groundY: number,
) {
  // ── Clean proportion budget (total PH = 70) ──
  // Head: 18px | Neck: 5px | Torso: 20px | Legs: 27px
  const HR = 9;                    // head radius (18px diameter)
  const headTopY = y - PH;         // top of head, fixed reference
  const HY = headTopY + HR;        // head center
  const neckY = HY + HR + 3;       // bottom of head + 3px neck
  const shoulderY = neckY + 2;
  const hipY = shoulderY + 20;     // torso = 20px
  const legLength = y - hipY;      // remaining = 27px, feet always land exactly at y

  ctx.save();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // ── Shadow (always pinned to ground, never moves with jump) ──
  const shadowSize = onGround ? 13 : Math.max(7, 12 - Math.abs(vy) * 0.2);
  const shadowOpacity = onGround ? 0.12 : 0.08;
  ctx.fillStyle = `rgba(0,0,0,${shadowOpacity})`;
  ctx.beginPath();
  ctx.ellipse(x, groundY + 2, shadowSize, shadowSize * 0.3, 0, 0, Math.PI * 2);
  ctx.fill();

  // ── Animation phase ──
  const walkCycle = moving && onGround ? walkF * 0.25 : 0;
  const swing = Math.sin(walkCycle);       // -1..1, right leg/left arm phase
  const swingOpp = Math.sin(walkCycle + Math.PI); // opposite phase, always = -swing

  ctx.strokeStyle = "#000";

  // ── LEGS (drawn first, always fully visible) ──
  const stance = 7; // half-distance between legs at hip, in local (unflipped) space
  const kneeY = hipY + legLength * 0.5;
  const footBaseY = hipY + legLength;

  function drawLeg(sideSign: number, phase: number, airborne: boolean) {
    // sideSign: +1 = right leg, -1 = left leg (in facing-relative space, then mirrored by facing)
    const hipX = x + sideSign * stance * facing;
    let kneeX = hipX + sideSign * 1.5 * facing;
    let footX = hipX;
    let kY = kneeY;
    let fY = footBaseY;

    if (airborne) {
      // legs spread apart in the air, slightly bent
      footX = hipX + sideSign * 6 * facing;
      kY = kneeY - 2;
      fY = footBaseY - 4;
    } else if (moving && onGround) {
      // walk cycle: leg swings fore/aft, knee lifts on the forward swing
      const swingAmt = phase * 9;
      footX = hipX + swingAmt * facing;
      kneeX = hipX + swingAmt * 0.4 * facing;
      kY = kneeY - Math.max(0, phase) * 5; // knee lifts only when leg is forward
    }

    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x + sideSign * stance * facing * 0.3, hipY); // slight hip offset toward center
    ctx.lineTo(kneeX, kY);
    ctx.lineTo(footX, fY);
    ctx.stroke();

    // flat foot
    ctx.beginPath();
    ctx.moveTo(footX, fY);
    ctx.lineTo(footX + 4 * facing, fY);
    ctx.stroke();
  }

  if (!onGround) {
    drawLeg(1, 0, true);
    drawLeg(-1, 0, true);
  } else {
    drawLeg(1, swing, false);
    drawLeg(-1, swingOpp, false);
  }

  // ── TORSO ──
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(x, neckY);
  ctx.lineTo(x, hipY);
  ctx.stroke();

  // ── ARMS + ROBE SLEEVES (computed together so sleeves follow the arms) ──
  const shoulderDrawY = shoulderY + 3;

  let rArmX: number, rArmY: number, lArmX: number, lArmY: number;

  if (!onGround) {
    const armAngle = vy < 0 ? -22 : -10;
    const armSpread = vy < 0 ? 15 : 11;
    rArmX = x + armSpread * facing; rArmY = shoulderDrawY + armAngle;
    lArmX = x - armSpread * facing; lArmY = shoulderDrawY + armAngle;
  } else if (moving) {
    const armSwing = swingOpp * 12;
    rArmX = x + 11 * facing; rArmY = shoulderDrawY + 14 + armSwing;
    lArmX = x - 11 * facing; lArmY = shoulderDrawY + 14 - armSwing;
  } else {
    rArmX = x + 8; rArmY = shoulderDrawY + 17;
    lArmX = x - 8; lArmY = shoulderDrawY + 17;
  }

  // ── GRADUATION ROBE (Level 1 only) — gown silhouette + gold sash/trim ──
  const GOLD = "#d4a017";
  if (levelId === 1) {
    const robeTop = shoulderY + 3;
    const robeBottom = hipY + 20;
    const shoulderWidth = 13;
    const hemHalfWidth = shoulderWidth / 2 + 6; // narrower flare — stays gown-shaped, not skirt-shaped

    let leftHemX = x - hemHalfWidth;
    let rightHemX = x + hemHalfWidth;
    let hemLift = 0;

    if (!onGround) {
      const flare = vy < 0 ? 5 : 2;
      leftHemX -= flare;
      rightHemX += flare;
      hemLift = 3;
    } else if (moving) {
      const sway = swing * 3.5;
      leftHemX += sway;
      rightHemX += sway * 0.6;
    }

    const topLeftX = x - shoulderWidth / 2;
    const topRightX = x + shoulderWidth / 2;
    // flare only kicks in during the last 30% of the gown's length — stays narrow like a real robe up top
    const flareStartY = robeTop + (robeBottom - robeTop) * 0.7;
    const hemY = robeBottom - hemLift;

    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.moveTo(topLeftX, robeTop);
    ctx.lineTo(topLeftX - 1, flareStartY);
    ctx.quadraticCurveTo(topLeftX - 3, flareStartY + (hemY - flareStartY) * 0.6, leftHemX, hemY);
    ctx.lineTo(rightHemX, hemY);
    ctx.quadraticCurveTo(topRightX + 3, flareStartY + (hemY - flareStartY) * 0.6, topRightX + 1, flareStartY);
    ctx.lineTo(topRightX, robeTop);
    ctx.lineTo(x, robeTop + 5); // V-neck collar notch
    ctx.closePath();
    ctx.fill();

    // Gold hem trim
    ctx.strokeStyle = GOLD;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(leftHemX, hemY);
    ctx.lineTo(rightHemX, hemY);
    ctx.stroke();

    // Gold diagonal sash
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(topLeftX + 2, robeTop + 2);
    ctx.lineTo(rightHemX - 4, hemY - 3);
    ctx.stroke();

    function drawSleeve(shoulderX: number, endX: number, endY: number) {
      const sleeveEndX = shoulderX + (endX - shoulderX) * 0.65;
      const sleeveEndY = robeTop + (endY - robeTop) * 0.65;
      const perpX = -(sleeveEndY - robeTop) * 0.18;
      const perpY = (sleeveEndX - shoulderX) * 0.18;

      ctx.beginPath();
      ctx.moveTo(shoulderX - 3, robeTop + 1);
      ctx.lineTo(shoulderX + 3, robeTop + 1);
      ctx.lineTo(sleeveEndX + perpX, sleeveEndY + perpY);
      ctx.lineTo(sleeveEndX - perpX, sleeveEndY - perpY);
      ctx.closePath();
      ctx.fill();
      return { sleeveEndX, sleeveEndY };
    }

    const rSleeveEnd = drawSleeve(x + shoulderWidth / 2 - 1, rArmX, rArmY);
    const lSleeveEnd = drawSleeve(x - shoulderWidth / 2 + 1, lArmX, lArmY);

    // Gold cuff trim at each sleeve end
    ctx.strokeStyle = GOLD;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(rSleeveEnd.sleeveEndX, rSleeveEnd.sleeveEndY, 2.5, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(lSleeveEnd.sleeveEndX, lSleeveEnd.sleeveEndY, 2.5, 0, Math.PI * 2);
    ctx.stroke();

    // Hands/forearms poking out past the sleeve
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.moveTo(rSleeveEnd.sleeveEndX, rSleeveEnd.sleeveEndY);
    ctx.lineTo(rArmX, rArmY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(lSleeveEnd.sleeveEndX, lSleeveEnd.sleeveEndY);
    ctx.lineTo(lArmX, lArmY);
    ctx.stroke();
  } else {
    // Non-robed levels: draw full arm lines directly
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x, shoulderDrawY);
    ctx.lineTo(rArmX, rArmY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, shoulderDrawY);
    ctx.lineTo(lArmX, lArmY);
    ctx.stroke();
  }

  // ── HEAD ──
  ctx.beginPath();
  ctx.arc(x, HY, HR, 0, Math.PI * 2);
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // ── GLASSES ──
  const GW = 7, GH = 5;
  const GY = HY - 1;
  const bridgeGap = 3;
  const lx = x - bridgeGap / 2 - GW;
  const rx = x + bridgeGap / 2;

  ctx.lineWidth = 2.5;
  ctx.strokeRect(lx, GY - GH / 2, GW, GH);
  ctx.strokeRect(rx, GY - GH / 2, GW, GH);
  ctx.beginPath();
  ctx.moveTo(lx + GW, GY);
  ctx.lineTo(rx, GY);
  ctx.stroke();

  // ── GRADUATION CAP (Level 1 only) ──
  if (levelId === 1) {
    const capWidth = 20;
    const capHeight = 6;
    const capY = headTopY - capHeight - 1;

    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, capY - 3);
    ctx.lineTo(x + capWidth / 2, capY + capHeight / 2);
    ctx.lineTo(x, capY + capHeight + 2);
    ctx.lineTo(x - capWidth / 2, capY + capHeight / 2);
    ctx.closePath();
    ctx.stroke();

    ctx.fillStyle = "#000";
    ctx.beginPath();
    ctx.arc(x, capY + capHeight / 2, 1.8, 0, Math.PI * 2);
    ctx.fill();

    const tasselSide = facing === 1 ? 1 : -1;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(x + (capWidth / 2) * tasselSide, capY + capHeight / 2);
    ctx.lineTo(x + (capWidth / 2 + 6) * tasselSide, capY + capHeight / 2 + 13);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x + (capWidth / 2 + 6) * tasselSide, capY + capHeight / 2 + 15, 2, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

function drawHUD(
  ctx: CanvasRenderingContext2D,
  score: number,
  collected: number,
  total: number,
  dead: boolean,
  deathCause: "fall" | "spike" | "monster" | null,
  won: boolean,
  insufficientStars: boolean,
  timeUp: boolean,
  timeRemaining: number,
  wonT: number,
  level: LevelData,
  onViewAchievements?: () => void,
  onBack?: () => void,
  deathT?: number,
) {
  if (dead) {
    const bloody = deathCause === "monster" || deathCause === "spike";
    const t = deathT ?? 999;

    if (bloody) {
      ctx.fillStyle = "rgba(0,0,0,0.15)";
      ctx.fillRect(0, 0, CW, CH);

      const cardAlpha = Math.max(0, Math.min(1, (t - 25) / 15));
      if (cardAlpha > 0) {
        const cardW = 340, cardH = 110;
        const cardX = (CW - cardW) / 2, cardY = CH / 2 - cardH / 2 - 20;
        ctx.globalAlpha = cardAlpha;
        ctx.fillStyle = "rgba(255,255,255,0.92)";
        ctx.fillRect(cardX, cardY, cardW, cardH);
        ctx.strokeStyle = "rgba(110,0,0,0.5)";
        ctx.lineWidth = 2;
        ctx.strokeRect(cardX, cardY, cardW, cardH);
        ctx.globalAlpha = 1;
      } else {
        return; // wait for the blood animation before showing text
      }
    } else {
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.fillRect(0, 0, CW, CH);
    }

    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.font = "bold 34px 'Playfair Display', Georgia, serif";
    ctx.fillText(deathCause === "monster" ? "YOU GOT BITTEN!" : "YOU GOT SPIKED!", CW / 2, CH / 2 - 28);
    ctx.font = "16px 'Outfit', sans-serif";
    ctx.fillStyle = "#555";
    ctx.fillText("Press  R  to try again", CW / 2, CH / 2 + 6);
    return;
  }

  if (insufficientStars) {
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.fillRect(0, 0, CW, CH);
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.font = "bold 42px 'Playfair Display', Georgia, serif";
    ctx.fillText("NOT ENOUGH STARS", CW / 2, CH / 2 - 38);
    ctx.font = "18px 'Outfit', sans-serif";
    ctx.fillStyle = "#555";
    ctx.fillText(`Collected ${collected}/${total} stars. Need at least 8 to complete.`, CW / 2, CH / 2 + 10);
    ctx.font = "16px 'Outfit', sans-serif";
    ctx.fillStyle = "#333";
    ctx.fillText("Press  R  to try again", CW / 2, CH / 2 + 46);
    return;
  }

  if (timeUp) {
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.fillRect(0, 0, CW, CH);
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.font = "bold 48px 'Playfair Display', Georgia, serif";
    ctx.fillText("Time's up!", CW / 2, CH / 2 - 28);
    ctx.font = "16px 'Outfit', sans-serif";
    ctx.fillStyle = "#555";
    ctx.fillText("Press  R  to try again", CW / 2, CH / 2 + 18);
    return;
  }

  if (won) {
    const a = Math.min(1, wonT / 45);
    ctx.fillStyle = `rgba(255,255,255,${a * 0.93})`;
    ctx.fillRect(0, 0, CW, CH);
    if (a > 0.5) {
      ctx.globalAlpha = (a - 0.5) * 2;
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.font = "bold 38px 'Playfair Display', Georgia, serif";
      ctx.fillText("You've unlocked an achievement", CW / 2, CH / 2 - 38);
      ctx.font = "18px 'Outfit', sans-serif";
      ctx.fillStyle = "#333";
      ctx.fillText(`Score: ${score}  ·  Stars: ${collected}/${total}`, CW / 2, CH / 2 + 10);

      if (onViewAchievements && a > 0.8) {
        const btnW = 200;
        const btnH = 44;
        const btnX = (CW - btnW) / 2;
        const btnY = CH / 2 + 50;

        ctx.fillStyle = "#1E6FBF";
        ctx.fillRect(btnX, btnY, btnW, btnH);
        ctx.strokeStyle = "#0D4A8A";
        ctx.lineWidth = 2;
        ctx.strokeRect(btnX, btnY, btnW, btnH);

        ctx.fillStyle = "white";
        ctx.font = "bold 15px 'Outfit', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("View Achievements", CW / 2, btnY + 27);

        // Next Level button
        const nextBtnY = btnY + btnH + 12;
        ctx.fillStyle = "#1E6FBF";
        ctx.fillRect(btnX, nextBtnY, btnW, btnH);
        ctx.strokeStyle = "#0D4A8A";
        ctx.lineWidth = 2;
        ctx.strokeRect(btnX, nextBtnY, btnW, btnH);

        ctx.fillStyle = "white";
        ctx.font = "bold 15px 'Outfit', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Next Level →", CW / 2, nextBtnY + 27);
      }

      ctx.globalAlpha = 1;
    }
    return;
  }

  // Normal HUD strip
  ctx.fillStyle = "rgba(0,0,0,0.07)";
  ctx.fillRect(0, 0, CW, 36);
  ctx.fillStyle = "#000";
  ctx.font = "bold 13px 'Outfit', sans-serif";
  ctx.textAlign = "left";
  ctx.fillText(`★ ${score} pts`, 16, 23);
  ctx.textAlign = "center";
  ctx.font = "bold 12px 'Outfit', sans-serif";
  ctx.fillStyle = "#444";
  ctx.fillText(`${level.company} — Level ${level.id}`, CW / 2, 23);
  ctx.textAlign = "right";
  ctx.fillStyle = timeRemaining <= 10 ? "#dc2626" : "#000";
  ctx.font = "bold 13px 'Outfit', sans-serif";
  ctx.fillText(`⏱ ${Math.ceil(timeRemaining)}s`, CW - 16, 23);
}

/* ─── main component ─────────────────────────────────── */

export default function PlatformerGame({ onBack, levelId, onLevelComplete, onViewAchievements }: { onBack: () => void; levelId: number; onLevelComplete: (levelId: number) => void; onViewAchievements?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const level = LEVELS.find(l => l.id === levelId) || LEVELS[0];
  const gsRef = useRef<GS>(freshState(level));
  const rafRef = useRef(0);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const [score, setScore] = useState(0);
  const [won, setWon] = useState(false);
  const [showMedalReveal, setShowMedalReveal] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/logos/cosmopolitan.png";
    img.onerror = () => {
      img.src = "/logos/cosmopolitan.png";
    };
    logoRef.current = img;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const onKD = (e: KeyboardEvent) => {
      const g = gsRef.current;
      g.keys.add(e.code);
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Space"].includes(e.code)) {
        e.preventDefault();
      }
      if (e.code === "KeyR" && (g.dead || g.insufficientStars || g.timeUp)) {
        const fresh = freshState(level);
        fresh.keys = g.keys;
        gsRef.current = fresh;
      }
    };
    const onKU = (e: KeyboardEvent) => gsRef.current.keys.delete(e.code);

    const onCanvasClick = (e: MouseEvent) => {
      const g = gsRef.current;
      if (g.won) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const btnW = 200;
        const btnH = 44;
        const btnX = (CW - btnW) / 2;
        const btnY = CH / 2 + 50;
        const nextBtnY = btnY + btnH + 12;

        const scaleX = CW / rect.width;
        const scaleY = CH / rect.height;
        const canvasX = x * scaleX;
        const canvasY = y * scaleY;

        if (canvasX >= btnX && canvasX <= btnX + btnW &&
            canvasY >= btnY && canvasY <= btnY + btnH) {
          if (onViewAchievements) onViewAchievements();
        }
        if (canvasX >= btnX && canvasX <= btnX + btnW &&
            canvasY >= nextBtnY && canvasY <= nextBtnY + btnH) {
          onBack();
        }
      }
    };

    window.addEventListener("keydown", onKD);
    window.addEventListener("keyup", onKU);
    canvas.addEventListener("click", onCanvasClick);
    canvas.focus();

    function tick() {
      const g = gsRef.current;

      for (const p of g.bloodParticles) {
        if (!p.settled) {
          p.vy += GRAV * 0.8;
          p.vx *= 0.995;
          const prevY = p.y;
          p.x += p.vx;
          p.y += p.vy;
          const crossed = bloodSurfacesAt(p.x, level).filter(sy => sy >= prevY - 2 && sy <= p.y + 2);
          if (crossed.length) {
            p.y = Math.min(...crossed);
            p.settled = true;
            p.vx *= 0.5;
          }
        } else {
          // settled liquid still slides with momentum and re-falls if it rolls off an edge
          p.vx *= 0.88;
          p.x += p.vx;
          const stillSupported = bloodSurfacesAt(p.x, level).some(sy => Math.abs(sy - p.y) < 2);
          if (!stillSupported) { p.settled = false; p.vy = 0.5; }
        }
      }

      if (g.dead) { g.deathT++; return; }
      if (g.won) { g.wonT++; return; }
      if (g.insufficientStars) return;
      if (g.timeUp) return;

      g.frameCount++;

      const L = g.keys.has("ArrowLeft") || g.keys.has("KeyA");
      const R = g.keys.has("ArrowRight") || g.keys.has("KeyD");
      const J = g.keys.has("Space") || g.keys.has("ArrowUp") || g.keys.has("KeyW");

      if (L) { g.vx = -SPD; g.facing = -1; }
      else if (R) { g.vx = SPD; g.facing = 1; }
      else g.vx *= 0.62;
      if (Math.abs(g.vx) < 0.08) g.vx = 0;

      if (J && g.onGround) { g.vy = JUMP_V; g.onGround = false; }
      const peakEasing = Math.abs(g.vy) < 2 ? 0.3 : 1;
      g.vy = Math.min(g.vy + GRAV * peakEasing, 16);

      if (g.onGround && Math.abs(g.vx) > 0.2) g.walkF++;
      else if (!g.onGround) g.walkF++;

      g.px += g.vx;
      g.px = Math.max(PW + 10, g.px);

      for (const p of level.platforms) {
        const prevOverlapX = (g.px - g.vx) + PW > p.x && (g.px - g.vx) - PW < p.x + p.w;
        const nowOverlapX = g.px + PW > p.x && g.px - PW < p.x + p.w;
        const overlapY = g.py > p.y && (g.py - PH) < (p.y + p.h);
        if (!prevOverlapX && nowOverlapX && overlapY) {
          if (g.vx > 0) { g.px = p.x - PW - 0.1; g.vx = 0; }
          else { g.px = p.x + p.w + PW + 0.1; g.vx = 0; }
        }
      }

      g.py += g.vy;
      g.onGround = false;

      for (const p of level.platforms) {
        const overlapX = g.px + PW > p.x + 1 && g.px - PW < p.x + p.w - 1;
        if (!overlapX) continue;
        const prevFeet = g.py - g.vy;
        const prevHead = prevFeet - PH;

        if (g.vy > 0 && prevFeet <= p.y && g.py >= p.y) {
          g.py = p.y; g.vy = 0; g.onGround = true;
        }
        if (g.vy < 0 && prevHead >= p.y + p.h && (g.py - PH) <= p.y + p.h) {
          g.py = p.y + p.h + PH; g.vy = 1;
        }
      }

      for (const c of g.coins) {
        if (!c.col && Math.abs(g.px - c.x) < 20 && Math.abs((g.py - PH / 2) - c.y) < 22) {
          c.col = true; g.score += 10;
        }
      }

      if (g.py > CH + 80) { g.dead = true; g.deathCause = "fall"; }

      for (const spike of level.spikes) {
        const playerBottom = g.py;
        const playerTop = g.py - PH;
        const playerLeft = g.px - PW;
        const playerRight = g.px + PW;

        const spikeTop = spike.y;
        const spikeBottom = spike.y + spike.h;

        if (playerRight > spike.x + 2 && playerLeft < spike.x + spike.w - 2 &&
            playerBottom > spikeTop + 5 && playerTop < spikeBottom) {
          g.dead = true;
          g.deathCause = "spike";
          // Spawn blood particles at wound position
          const woundY = Math.min(playerBottom, spikeTop + spike.h / 2);
          for (let i = 0; i < 15; i++) {
            g.bloodParticles.push({
              x: g.px + (Math.random() - 0.5) * 10,
              y: woundY,
              vx: (Math.random() - 0.5) * 4,
              vy: -Math.random() * 3,
              settled: false,
              r: 6 + Math.random() * 4
            });
          }
        }
      }

      for (const m of level.monsters) {
        const hb = monsterHitbox(m, g.frameCount);
        if (hb.ext < 0.6) continue; // not emerged enough to bite yet
        const playerLeft = g.px - PW, playerRight = g.px + PW;
        const playerTop = g.py - PH, playerBottom = g.py;
        if (playerRight > hb.left && playerLeft < hb.right &&
            playerBottom > hb.top && playerTop < hb.bottom) {
          g.dead = true;
          g.deathCause = "monster";
          // Spawn blood particles at wound position (monster mouth area)
          const woundY = Math.min(playerBottom, (hb.top + hb.bottom) / 2);
          for (let i = 0; i < 18; i++) {
            g.bloodParticles.push({
              x: g.px + (Math.random() - 0.5) * 12,
              y: woundY,
              vx: (Math.random() - 0.5) * 5,
              vy: -Math.random() * 4,
              settled: false,
              r: 6 + Math.random() * 4
            });
          }
        }
      }
      // Medal position past flag
      const medalX = level.flagX + 100;
      const medalY = level.groundY - 30;

      if (Math.abs(g.px - medalX) < 25 && Math.abs(g.py - medalY) < 40 && !g.medalCollected && !g.won) {
        const collectedStars = g.coins.filter(c => c.col).length;
        if (collectedStars >= 8) {
          g.medalCollected = true;
          setShowMedalReveal(true);
        } else {
          g.insufficientStars = true;
        }
      }

      g.timeRemaining -= 1 / 60;
      if (g.timeRemaining <= 0) {
        g.timeRemaining = 0;
        g.timeUp = true;
      }

      const tCam = g.px - CW * 0.33;
      g.camX += (tCam - g.camX) * 0.1;
      g.camX = Math.max(0, g.camX);
    }

    function draw() {
      const g = gsRef.current;
      ctx.clearRect(0, 0, CW, CH);

      ctx.fillStyle = level.theme.bg;
      ctx.fillRect(0, 0, CW, CH);

      ctx.fillStyle = level.theme.skyDot;
      for (let gx = 16; gx < CW; gx += 40) {
        for (let gy = 16; gy < CH; gy += 40) {
          ctx.beginPath();
          ctx.arc(gx, gy, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.save();
      ctx.translate(-Math.round(g.camX), 0);

      drawPlatforms(ctx, g.camX, level);

      for (const spike of level.spikes) {
        if (spike.x + spike.w < g.camX - 20 || spike.x > g.camX + CW + 20) continue;
        drawSpike(ctx, spike);
      }

      drawFlag(ctx, level.flagX, level.groundY);

      // Draw Medal past flag if not collected
      const medalX = level.flagX + 100;
      const medalY = level.groundY - 30;

      if (!g.medalCollected) {
        drawInWorldMedal(ctx, medalX, medalY, g.frameCount, logoRef.current);
      }

      // Prompt when player reaches or passes flag
      if (g.px >= level.flagX - 20 && !g.medalCollected) {
        ctx.fillStyle = "#1e3a8a";
        ctx.font = "bold 13px 'Outfit', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Grab the medal! →", level.flagX + 50, level.groundY - 80);
      }

      for (const m of level.monsters) {
        if (m.pipeX < g.camX - 60 || m.pipeX > g.camX + CW + 60) continue;
        drawMonster(ctx, m, g.frameCount);
      }

      for (const c of g.coins) {
        if (c.col || c.x < g.camX - 40 || c.x > g.camX + CW + 40) continue;
        drawCoin(ctx, c.x, c.y);
      }

      drawStickman(
        ctx, g.px, g.py, g.facing, g.walkF,
        g.onGround, Math.abs(g.vx) > 0.2, g.vy,
        level.id,
        level.groundY,
      );

      // Draw blood particles with proximity-based clustering
      if (g.bloodParticles.length > 0) {
        const visibleParticles = g.bloodParticles.filter(p => p.x >= g.camX - 40 && p.x <= g.camX + CW + 40);

        // Group settled particles into clusters for pool fusion
        const settled = visibleParticles.filter(p => p.settled);
        const clusters: BloodParticle[][] = [];
        const visited = new Set<number>();

        for (let i = 0; i < settled.length; i++) {
          if (visited.has(i)) continue;
          const cluster = [settled[i]];
          visited.add(i);

          for (let j = i + 1; j < settled.length; j++) {
            if (visited.has(j)) continue;
            const dx = settled[i].x - settled[j].x;
            const dy = settled[i].y - settled[j].y;
            if (Math.sqrt(dx * dx + dy * dy) < 25) {
              cluster.push(settled[j]);
              visited.add(j);
            }
          }
          clusters.push(cluster);
        }

        // Draw soft pool base for each cluster
        for (const cluster of clusters) {
          const avgX = cluster.reduce((sum, p) => sum + p.x, 0) / cluster.length;
          const avgY = cluster.reduce((sum, p) => sum + p.y, 0) / cluster.length;
          const maxR = Math.max(...cluster.map(p => p.r));
          const poolR = maxR + 8;

          const poolGrad = ctx.createRadialGradient(avgX, avgY, 0, avgX, avgY, poolR);
          poolGrad.addColorStop(0, 'rgba(102,0,0,0.85)');
          poolGrad.addColorStop(1, 'rgba(60,0,0,0)');
          ctx.fillStyle = poolGrad;
          ctx.beginPath();
          ctx.ellipse(avgX, avgY, poolR, poolR * 0.4, 0, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw individual particles with state-based shapes
        for (const p of visibleParticles) {
          ctx.fillStyle = '#660000';
          ctx.beginPath();

          if (p.settled) {
            // Flattened puddle shape
            ctx.ellipse(p.x, p.y, p.r, p.r * 0.4, 0, 0, Math.PI * 2);
          } else {
            // Stretch based on velocity for teardrop effect
            const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
            const stretch = 1 + speed * 0.08;
            const angle = Math.atan2(p.vy, p.vx);
            ctx.ellipse(p.x, p.y, p.r * stretch, p.r, angle, 0, Math.PI * 2);
          }
          ctx.fill();
        }
      }

      ctx.restore();

      const collected = g.coins.filter(c => c.col).length;
      drawHUD(ctx, g.score, collected, level.coins.length, g.dead, g.deathCause, g.won, g.insufficientStars, g.timeUp, g.timeRemaining, g.wonT, level, onViewAchievements, onBack, g.deathT);
    }

    function loop() {
      tick();
      draw();
      setScore(gsRef.current.score);
      setWon(gsRef.current.won);
      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("keydown", onKD);
      window.removeEventListener("keyup", onKU);
      canvas.removeEventListener("click", onCanvasClick);
    };
  }, [level, onLevelComplete, onViewAchievements, onBack]);

  return (
    <div style={{
      minHeight: "100vh", background: "#f3f7fc",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      fontFamily: "'Outfit', sans-serif", padding: 24,
      position: "relative",
    }}>
      {showMedalReveal && (
        <MedalReveal
          logoSrc="/images/logos/cosmopolitan.png"
          label="Cosmopolitan College Brunei"
          onComplete={() => {
            setShowMedalReveal(false);
            gsRef.current.won = true;
            onLevelComplete(levelId);
          }}
        />
      )}
      <div style={{ width: CW, maxWidth: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <button onClick={onBack} style={{
            padding: "7px 16px", background: "white", border: "1px solid #1E6FBF28",
            color: "#1E6FBF", borderRadius: 4, fontSize: 13, fontWeight: 600, cursor: "pointer",
          }}>← Back to Levels</button>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 11, letterSpacing: 2.5, color: "#1E6FBF", fontWeight: 700 }}>LEVEL {level.id} — {level.company}</div>
            <div style={{ fontSize: 11, color: "#aaa", marginTop: 2 }}>{level.role}</div>
          </div>
          <div style={{ fontSize: 12, color: "#888", textAlign: "right" }}>
            <div>← → / A D   Move</div>
            <div>↑ / W / Space   Jump</div>
          </div>
        </div>

        <canvas
          ref={canvasRef}
          width={CW}
          height={CH}
          style={{
            display: "block", border: "2.5px solid #000", borderRadius: 6,
            outline: "none", boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          }}
          tabIndex={0}
        />

        <div style={{ marginTop: 10, display: "flex", justifyContent: "space-between", color: "#aaa", fontSize: 12 }}>
          <span>Press R to restart after dying</span>
          <span style={{ color: "#1E6FBF", fontWeight: 600 }}>Score: {score}</span>
        </div>
      </div>
    </div>
  );
}

--- src\pages\RunnerGame.tsx ---

import { useEffect, useRef, useState } from "react";
import MedalReveal from "../components/MedalReveal";

const CW = 800;
const CH = 480;
const GRAV = 0.5;
const JUMP_V = -11;
const GROUND_Y = 424;
const PLAYER_W = 22;
const PLAYER_H = 70;

interface Obstacle {
  x: number;
  y: number;
  w: number;
  h: number;
  type: "cactus" | "rock" | "bird";
}

interface RagdollPart {
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  angularV: number;
  length: number;
  type: "head" | "torso" | "limb";
}

interface GS {
  px: number;
  py: number;
  vy: number;
  onGround: boolean;
  facing: 1 | -1;
  walkF: number;
  obstacles: Obstacle[];
  dead: boolean;
  won: boolean;
  wonT: number;
  timeRemaining: number;
  frameCount: number;
  speed: number;
  nextSpawn: number;
  keys: Set<string>;
  ragdollParts: RagdollPart[];
  autoRunning: boolean;
  autoRunTimer: number;
  medalX: number;
}

function freshState(): GS {
  return {
    px: 100,
    py: GROUND_Y,
    vy: 0,
    onGround: true,
    facing: 1,
    walkF: 0,
    obstacles: [],
    dead: false,
    won: false,
    wonT: 0,
    timeRemaining: 25,
    frameCount: 0,
    speed: 3.5,
    nextSpawn: 90,
    keys: new Set(),
    ragdollParts: [],
    autoRunning: false,
    autoRunTimer: 0,
    medalX: 0,
  };
}

function drawStickman(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  facing: 1 | -1,
  walkF: number,
  onGround: boolean,
  moving: boolean,
  vy: number,
) {
  const HR = 9;
  const headTopY = y - PLAYER_H;
  const HY = headTopY + HR;
  const neckY = HY + HR + 3;
  const shoulderY = neckY + 2;
  const hipY = shoulderY + 20;
  const legLength = y - hipY;

  ctx.save();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // Shadow
  const shadowSize = onGround ? 13 : Math.max(7, 12 - Math.abs(vy) * 0.2);
  const shadowOpacity = onGround ? 0.12 : 0.08;
  ctx.fillStyle = `rgba(0,0,0,${shadowOpacity})`;
  ctx.beginPath();
  ctx.ellipse(x, GROUND_Y + 2, shadowSize, shadowSize * 0.3, 0, 0, Math.PI * 2);
  ctx.fill();

  // Animation
  const walkCycle = moving && onGround ? walkF * 0.25 : 0;
  const swing = Math.sin(walkCycle);
  const swingOpp = Math.sin(walkCycle + Math.PI);

  ctx.strokeStyle = "#000";

  // Legs
  const stance = 7;
  const kneeY = hipY + legLength * 0.5;
  const footBaseY = hipY + legLength;

  function drawLeg(sideSign: number, phase: number, airborne: boolean) {
    const hipX = x + sideSign * stance * facing;
    let kneeX = hipX + sideSign * 1.5 * facing;
    let footX = hipX;
    let kY = kneeY;
    let fY = footBaseY;

    if (airborne) {
      footX = hipX + sideSign * 6 * facing;
      kY = kneeY - 2;
      fY = footBaseY - 4;
    } else if (moving && onGround) {
      const swingAmt = phase * 9;
      footX = hipX + swingAmt * facing;
      kneeX = hipX + swingAmt * 0.4 * facing;
      kY = kneeY - Math.max(0, phase) * 5;
    }

    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x + sideSign * stance * facing * 0.3, hipY);
    ctx.lineTo(kneeX, kY);
    ctx.lineTo(footX, fY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(footX, fY);
    ctx.lineTo(footX + 4 * facing, fY);
    ctx.stroke();
  }

  if (!onGround) {
    drawLeg(1, 0, true);
    drawLeg(-1, 0, true);
  } else {
    drawLeg(1, swing, false);
    drawLeg(-1, swingOpp, false);
  }

  // Torso
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.moveTo(x, neckY);
  ctx.lineTo(x, hipY);
  ctx.stroke();

  // Arms
  const shoulderDrawY = shoulderY + 3;
  let rArmX: number, rArmY: number, lArmX: number, lArmY: number;

  if (!onGround) {
    const armAngle = vy < 0 ? -22 : -10;
    const armSpread = vy < 0 ? 15 : 11;
    rArmX = x + armSpread * facing;
    rArmY = shoulderDrawY + armAngle;
    lArmX = x - armSpread * facing;
    lArmY = shoulderDrawY + armAngle;
  } else if (moving) {
    const armSwing = swingOpp * 12;
    rArmX = x + 11 * facing;
    rArmY = shoulderDrawY + 14 + armSwing;
    lArmX = x - 11 * facing;
    lArmY = shoulderDrawY + 14 - armSwing;
  } else {
    rArmX = x + 8;
    rArmY = shoulderDrawY + 17;
    lArmX = x - 8;
    lArmY = shoulderDrawY + 17;
  }

  ctx.strokeStyle = "#000";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(x, shoulderDrawY);
  ctx.lineTo(rArmX, rArmY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, shoulderDrawY);
  ctx.lineTo(lArmX, lArmY);
  ctx.stroke();

  // Head
  ctx.beginPath();
  ctx.arc(x, HY, HR, 0, Math.PI * 2);
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Glasses
  const GW = 7, GH = 5;
  const GY = HY - 1;
  const bridgeGap = 3;
  const lx = x - bridgeGap / 2 - GW;
  const rx = x + bridgeGap / 2;

  ctx.lineWidth = 2.5;
  ctx.strokeRect(lx, GY - GH / 2, GW, GH);
  ctx.strokeRect(rx, GY - GH / 2, GW, GH);
  ctx.beginPath();
  ctx.moveTo(lx + GW, GY);
  ctx.lineTo(rx, GY);
  ctx.stroke();

  ctx.restore();
}

function drawObstacle(ctx: CanvasRenderingContext2D, obs: Obstacle, frameCount: number) {
  if (obs.type === "bird") {
    drawBird(ctx, obs, frameCount);
    return;
  }

  ctx.save();
  ctx.fillStyle = "#1e40af";
  ctx.strokeStyle = "#1e3a8a";
  ctx.lineWidth = 2;

  if (obs.type === "cactus") {
    // Cactus-like shape
    ctx.beginPath();
    ctx.moveTo(obs.x + obs.w / 2, obs.y);
    ctx.lineTo(obs.x + obs.w, obs.y + obs.h * 0.3);
    ctx.lineTo(obs.x + obs.w, obs.y + obs.h);
    ctx.lineTo(obs.x, obs.y + obs.h);
    ctx.lineTo(obs.x, obs.y + obs.h * 0.3);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Cactus arms
    ctx.beginPath();
    ctx.moveTo(obs.x + obs.w * 0.3, obs.y + obs.h * 0.4);
    ctx.lineTo(obs.x - 8, obs.y + obs.h * 0.5);
    ctx.lineTo(obs.x - 8, obs.y + obs.h * 0.7);
    ctx.lineTo(obs.x + obs.w * 0.4, obs.y + obs.h * 0.6);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(obs.x + obs.w * 0.7, obs.y + obs.h * 0.5);
    ctx.lineTo(obs.x + obs.w + 8, obs.y + obs.h * 0.4);
    ctx.lineTo(obs.x + obs.w + 8, obs.y + obs.h * 0.6);
    ctx.lineTo(obs.x + obs.w * 0.6, obs.y + obs.h * 0.7);
    ctx.fill();
    ctx.stroke();
  } else {
    // Rock — irregular rounded shape, not a flat box
    ctx.beginPath();
    ctx.moveTo(obs.x + obs.w * 0.1, obs.y + obs.h * 0.6);
    ctx.lineTo(obs.x + obs.w * 0.3, obs.y + obs.h * 0.1);
    ctx.lineTo(obs.x + obs.w * 0.7, obs.y);
    ctx.lineTo(obs.x + obs.w, obs.y + obs.h * 0.4);
    ctx.lineTo(obs.x + obs.w * 0.9, obs.y + obs.h);
    ctx.lineTo(obs.x + obs.w * 0.2, obs.y + obs.h);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // A couple of texture lines to sell "rock" over "blob"
    ctx.beginPath();
    ctx.moveTo(obs.x + obs.w * 0.35, obs.y + obs.h * 0.3);
    ctx.lineTo(obs.x + obs.w * 0.5, obs.y + obs.h * 0.6);
    ctx.stroke();
  }

  ctx.restore();
}

function drawInWorldMedal(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  frameCount: number,
  logoImg: HTMLImageElement | null
) {
  ctx.save();
  ctx.translate(x, y);

  const scaleX = Math.abs(Math.sin(frameCount * 0.08));
  ctx.scale(scaleX, 1);

  const R = 15;

  // Outer gold base with shadow
  ctx.save();
  ctx.shadowColor = "rgba(0, 0, 0, 0.25)";
  ctx.shadowBlur = 4;
  ctx.shadowOffsetY = 2;

  ctx.beginPath();
  ctx.arc(0, 0, R, 0, Math.PI * 2);
  ctx.fillStyle = "#fbbf24";
  ctx.fill();
  ctx.restore();

  // Draw logo image clipped inside circle if ready
  if (logoImg && logoImg.complete && logoImg.naturalWidth > 0) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, R - 2, 0, Math.PI * 2);
    ctx.clip();

    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.drawImage(logoImg, -(R - 2), -(R - 2), (R - 2) * 2, (R - 2) * 2);
    ctx.restore();
  } else {
    // Inner accent fallback
    ctx.beginPath();
    ctx.arc(0, 0, R - 4, 0, Math.PI * 2);
    ctx.fillStyle = "#fbbf24";
    ctx.fill();

    ctx.fillStyle = "#92400e";
    ctx.font = "bold 10px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("★", 0, 0);
  }

  // Radial gradient shine overlay
  ctx.save();
  ctx.beginPath();
  ctx.arc(0, 0, R - 1, 0, Math.PI * 2);
  ctx.clip();

  const shineGrad = ctx.createRadialGradient(-R * 0.35, -R * 0.35, 1, -R * 0.1, -R * 0.1, R * 1.3);
  shineGrad.addColorStop(0, "rgba(255, 255, 255, 0.65)");
  shineGrad.addColorStop(0.4, "rgba(255, 255, 255, 0.2)");
  shineGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = shineGrad;
  ctx.fill();
  ctx.restore();

  // Thin gold rim stroke
  ctx.beginPath();
  ctx.arc(0, 0, R, 0, Math.PI * 2);
  ctx.strokeStyle = "#d4a017";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, R - 1, 0, Math.PI * 2);
  ctx.strokeStyle = "#92400e";
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.restore();
}

function drawBird(ctx: CanvasRenderingContext2D, obs: Obstacle, frameCount: number) {
  ctx.save();
  ctx.strokeStyle = "#1e3a8a";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  const flap = Math.sin(frameCount * 0.3);
  const wingAngle = flap * 0.4;

  const cx = obs.x + obs.w / 2;
  const cy = obs.y + obs.h / 2;

  // Left wing
  ctx.beginPath();
  ctx.moveTo(cx - 5, cy);
  ctx.quadraticCurveTo(cx - 15, cy - 10 + wingAngle * 8, cx - 20, cy - 5 + wingAngle * 5);
  ctx.stroke();

  // Right wing
  ctx.beginPath();
  ctx.moveTo(cx + 5, cy);
  ctx.quadraticCurveTo(cx + 15, cy - 10 + wingAngle * 8, cx + 20, cy - 5 + wingAngle * 5);
  ctx.stroke();

  // Body (simple line)
  ctx.beginPath();
  ctx.moveTo(cx - 8, cy);
  ctx.lineTo(cx + 8, cy);
  ctx.stroke();

  ctx.restore();
}

function drawRagdoll(ctx: CanvasRenderingContext2D, parts: RagdollPart[]) {
  ctx.save();
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 2.5;

  for (const part of parts) {
    ctx.save();
    ctx.translate(part.x, part.y);
    ctx.rotate(part.angle);

    if (part.type === "head") {
      ctx.beginPath();
      ctx.arc(0, 0, 9, 0, Math.PI * 2);
      ctx.stroke();

      // Glasses
      const GW = 7, GH = 5;
      const bridgeGap = 3;
      ctx.lineWidth = 2;
      ctx.strokeRect(-bridgeGap / 2 - GW, -GH / 2, GW, GH);
      ctx.strokeRect(bridgeGap / 2, -GH / 2, GW, GH);
      ctx.beginPath();
      ctx.moveTo(-bridgeGap / 2, 0);
      ctx.lineTo(bridgeGap / 2, 0);
      ctx.stroke();
    } else if (part.type === "torso") {
      ctx.beginPath();
      ctx.moveTo(0, -part.length / 2);
      ctx.lineTo(0, part.length / 2);
      ctx.stroke();
    } else if (part.type === "limb") {
      ctx.beginPath();
      ctx.moveTo(0, -part.length / 2);
      ctx.lineTo(0, part.length / 2);
      ctx.stroke();
    }

    ctx.restore();
  }

  ctx.restore();
}

function drawHUD(
  ctx: CanvasRenderingContext2D,
  dead: boolean,
  won: boolean,
  timeRemaining: number,
  wonT: number,
  onViewAchievements?: () => void,
) {
  if (dead) {
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.fillRect(0, 0, CW, CH);
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.font = "bold 42px 'Playfair Display', Georgia, serif";
    ctx.fillText("Game Over!", CW / 2, CH / 2 - 28);
    ctx.font = "16px 'Outfit', sans-serif";
    ctx.fillStyle = "#555";
    ctx.fillText("Press  R  to try again", CW / 2, CH / 2 + 18);
    return;
  }

  if (won) {
    const a = Math.min(1, wonT / 45);
    ctx.fillStyle = `rgba(255,255,255,${a * 0.93})`;
    ctx.fillRect(0, 0, CW, CH);
    if (a > 0.5) {
      ctx.globalAlpha = (a - 0.5) * 2;
      ctx.fillStyle = "#000";
      ctx.textAlign = "center";
      ctx.font = "bold 38px 'Playfair Display', Georgia, serif";
      ctx.fillText("You've unlocked an achievement", CW / 2, CH / 2 - 38);
      ctx.font = "18px 'Outfit', sans-serif";
      ctx.fillStyle = "#333";
      ctx.fillText("Survived 25 seconds!", CW / 2, CH / 2 + 10);

      if (onViewAchievements && a > 0.8) {
        const btnW = 200;
        const btnH = 44;
        const btnX = (CW - btnW) / 2;
        const btnY = CH / 2 + 50;

        ctx.fillStyle = "#1E6FBF";
        ctx.fillRect(btnX, btnY, btnW, btnH);
        ctx.strokeStyle = "#0D4A8A";
        ctx.lineWidth = 2;
        ctx.strokeRect(btnX, btnY, btnW, btnH);

        ctx.fillStyle = "white";
        ctx.font = "bold 15px 'Outfit', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("View Achievements", CW / 2, btnY + 27);

        // Next Level button
        const nextBtnY = btnY + btnH + 12;
        ctx.fillStyle = "#1E6FBF";
        ctx.fillRect(btnX, nextBtnY, btnW, btnH);
        ctx.strokeStyle = "#0D4A8A";
        ctx.lineWidth = 2;
        ctx.strokeRect(btnX, nextBtnY, btnW, btnH);

        ctx.fillStyle = "white";
        ctx.font = "bold 15px 'Outfit', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Next Level →", CW / 2, nextBtnY + 27);
      }

      ctx.globalAlpha = 1;
    }
    return;
  }

  // Normal HUD strip
  ctx.fillStyle = "rgba(0,0,0,0.07)";
  ctx.fillRect(0, 0, CW, 36);
  ctx.fillStyle = "#000";
  ctx.font = "bold 13px 'Outfit', sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("Survival Runner", 16, 23);
  ctx.textAlign = "right";
  ctx.fillStyle = timeRemaining <= 10 ? "#dc2626" : "#000";
  ctx.font = "bold 13px 'Outfit', sans-serif";
  ctx.fillText(`⏱ ${Math.ceil(timeRemaining)}s`, CW - 16, 23);
}

export default function RunnerGame({ onBack, onLevelComplete, onViewAchievements }: { onBack: () => void; onLevelComplete: (levelId: number) => void; onViewAchievements?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gsRef = useRef<GS>(freshState());
  const rafRef = useRef(0);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const [won, setWon] = useState(false);
  const [showMedalReveal, setShowMedalReveal] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/logos/muara.png";
    img.onerror = () => {
      img.src = "/logos/muara.png";
    };
    logoRef.current = img;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const onKD = (e: KeyboardEvent) => {
      const g = gsRef.current;
      g.keys.add(e.code);
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Space"].includes(e.code)) {
        e.preventDefault();
      }
      if (e.code === "KeyR" && g.dead) {
        gsRef.current = freshState();
      }
      if ((e.code === "Space" || e.code === "ArrowUp" || e.code === "KeyW") && g.onGround && !g.dead && !g.won && !g.autoRunning) {
        g.vy = JUMP_V;
        g.onGround = false;
      }
    };
    const onKU = (e: KeyboardEvent) => {
      const g = gsRef.current;
      g.keys.delete(e.code);
    };

    const onCanvasClick = (e: MouseEvent) => {
      const g = gsRef.current;
      if (g.won) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const btnW = 200;
        const btnH = 44;
        const btnX = (CW - btnW) / 2;
        const btnY = CH / 2 + 50;
        const nextBtnY = btnY + btnH + 12;

        const scaleX = CW / rect.width;
        const scaleY = CH / rect.height;
        const canvasX = x * scaleX;
        const canvasY = y * scaleY;

        if (canvasX >= btnX && canvasX <= btnX + btnW &&
            canvasY >= btnY && canvasY <= btnY + btnH) {
          if (onViewAchievements) onViewAchievements();
        }
        if (canvasX >= btnX && canvasX <= btnX + btnW &&
            canvasY >= nextBtnY && canvasY <= nextBtnY + btnH) {
          onBack();
        }
      }
    };

    window.addEventListener("keydown", onKD);
    window.addEventListener("keyup", onKU);
    canvas.addEventListener("click", onCanvasClick);
    canvas.focus();

    function tick() {
      const g = gsRef.current;

      // Update ragdoll physics (runs even when dead)
      for (const part of g.ragdollParts) {
        part.vy += GRAV * 0.8;
        part.x += part.vx;
        part.y += part.vy;
        part.angle += part.angularV;

        if (part.y >= GROUND_Y) {
          part.y = GROUND_Y;
          if (part.vy > 0) {
            part.vy *= -0.45;
            part.vx += (Math.random() - 0.5) * 3;
          }
          if (Math.abs(part.vy) < 0.5) part.vy = 0;
          part.vx *= 0.9;
          part.angularV *= 0.85;
        }
      }

      if (g.dead) return;
      if (g.won) { g.wonT++; return; }

      g.frameCount++;

      if (g.autoRunning) {
        g.autoRunTimer--;
        g.px += 2;
        g.medalX -= g.speed;
        g.walkF++;

        if (g.autoRunTimer <= 0 || Math.abs(g.px - g.medalX) < 25) {
          g.autoRunning = false;
          setShowMedalReveal(true);
        }
        return;
      }

      g.timeRemaining -= 1 / 60;

      if (g.timeRemaining <= 0) {
        g.timeRemaining = 0;
        g.autoRunning = true;
        g.autoRunTimer = 90; // 1.5s auto-run
        g.medalX = CW + 180;
        g.obstacles = [];
      }

      // Increase speed slightly over time
      g.speed = 3.5 + (25 - g.timeRemaining) * 0.025;

      // Player physics
      g.vy = Math.min(g.vy + GRAV, 16);
      g.py += g.vy;

      if (g.py >= GROUND_Y) {
        g.py = GROUND_Y;
        g.vy = 0;
        g.onGround = true;
      }

      if (g.onGround) g.walkF++;

      // Spawn obstacles
      g.nextSpawn--;
      if (g.nextSpawn <= 0) {
        const rand = Math.random();
        let type: "cactus" | "rock" | "bird";
        if (rand > 0.85) {
          type = "bird";
        } else if (rand > 0.7) {
          type = "rock";
        } else {
          type = "cactus";
        }

        const obs: Obstacle = {
          x: CW + 50,
          y: type === "bird" ? GROUND_Y - 150 : type === "rock" ? GROUND_Y - 28 : GROUND_Y - 50,
          w: type === "bird" ? 34 : type === "rock" ? 34 : 30,
          h: type === "bird" ? 36 : type === "rock" ? 28 : 50,
          type,
        };
        g.obstacles.push(obs);
        g.nextSpawn = 90 + Math.random() * 60;
      }

      // Move obstacles
      for (const obs of g.obstacles) {
        obs.x -= g.speed;
      }

      // Remove off-screen obstacles
      g.obstacles = g.obstacles.filter(obs => obs.x > -100);

      // Collision detection
      const playerLeft = g.px - PLAYER_W / 2;
      const playerRight = g.px + PLAYER_W / 2;
      const playerTop = g.py - PLAYER_H;
      const playerBottom = g.py;

      for (const obs of g.obstacles) {
        if (playerRight > obs.x + 5 && playerLeft < obs.x + obs.w - 5 &&
            playerBottom > obs.y + 5 && playerTop < obs.y + obs.h - 5) {
          g.dead = true;

          // Create ragdoll parts at current pose
          const HR = 9;
          const headTopY = g.py - PLAYER_H;
          const HY = headTopY + HR;
          const neckY = HY + HR + 3;
          const shoulderY = neckY + 2;
          const hipY = shoulderY + 20;

          g.ragdollParts = [
            // Head
            { x: g.px, y: HY, vx: (Math.random() - 0.5) * 18, vy: -Math.random() * 14 - 4, angle: 0, angularV: (Math.random() - 0.5) * 1.4, length: 0, type: "head" },
            // Torso
            { x: g.px, y: (neckY + hipY) / 2, vx: (Math.random() - 0.5) * 18, vy: -Math.random() * 14 - 4, angle: 0, angularV: (Math.random() - 0.5) * 1.4, length: hipY - neckY, type: "torso" },
            // Left arm
            { x: g.px - 8, y: shoulderY + 17, vx: (Math.random() - 0.5) * 18, vy: -Math.random() * 14 - 4, angle: 0, angularV: (Math.random() - 0.5) * 1.4, length: 25, type: "limb" },
            // Right arm
            { x: g.px + 8, y: shoulderY + 17, vx: (Math.random() - 0.5) * 18, vy: -Math.random() * 14 - 4, angle: 0, angularV: (Math.random() - 0.5) * 1.4, length: 25, type: "limb" },
            // Left leg
            { x: g.px - 7, y: hipY + 35, vx: (Math.random() - 0.5) * 18, vy: -Math.random() * 14 - 4, angle: 0, angularV: (Math.random() - 0.5) * 1.4, length: 35, type: "limb" },
            // Right leg
            { x: g.px + 7, y: hipY + 35, vx: (Math.random() - 0.5) * 18, vy: -Math.random() * 14 - 4, angle: 0, angularV: (Math.random() - 0.5) * 1.4, length: 35, type: "limb" },
          ];
        }
      }
    }

    function draw() {
      const g = gsRef.current;
      ctx.clearRect(0, 0, CW, CH);

      // Background
      ctx.fillStyle = "#eff6ff";
      ctx.fillRect(0, 0, CW, CH);

      // Sky dots
      ctx.fillStyle = "#bfdbfe";
      for (let gx = 16; gx < CW; gx += 40) {
        for (let gy = 16; gy < CH; gy += 40) {
          ctx.beginPath();
          ctx.arc(gx, gy, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Ground
      ctx.fillStyle = "#1e40af";
      ctx.fillRect(0, GROUND_Y, CW, CH - GROUND_Y);
      ctx.fillStyle = "#1e3a8a";
      ctx.fillRect(0, GROUND_Y, CW, 4);

      // Scrolling ground line
      ctx.strokeStyle = "#60a5fa";
      ctx.lineWidth = 2;
      ctx.setLineDash([20, 15]);
      ctx.lineDashOffset = -g.frameCount * g.speed * 0.5;
      ctx.beginPath();
      ctx.moveTo(0, GROUND_Y + 4);
      ctx.lineTo(CW, GROUND_Y + 4);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw obstacles
      for (const obs of g.obstacles) {
        drawObstacle(ctx, obs, g.frameCount);
      }

      // Draw approaching medal if auto-running
      if (g.autoRunning || g.medalX > 0) {
        drawInWorldMedal(ctx, g.medalX, GROUND_Y - 35, g.frameCount, logoRef.current);
      }

      // Draw player (or ragdoll if dead)
      if (g.dead && g.ragdollParts.length > 0) {
        drawRagdoll(ctx, g.ragdollParts);
      } else {
        drawStickman(ctx, g.px, g.py, g.facing, g.walkF, g.onGround, true, g.vy);
      }

      // HUD
      drawHUD(ctx, g.dead, g.won, g.timeRemaining, g.wonT, onViewAchievements);
    }

    function loop() {
      tick();
      draw();
      setWon(gsRef.current.won);
      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("keydown", onKD);
      window.removeEventListener("keyup", onKU);
      canvas.removeEventListener("click", onCanvasClick);
    };
  }, [onLevelComplete, onViewAchievements]);

  return (
    <div style={{
      minHeight: "100vh", background: "#f3f7fc",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      fontFamily: "'Outfit', sans-serif", padding: 24,
      position: "relative",
    }}>
      {showMedalReveal && (
        <MedalReveal
          logoSrc="/images/logos/muara.png"
          label="Muara International Fish Landing"
          onComplete={() => {
            setShowMedalReveal(false);
            gsRef.current.won = true;
            onLevelComplete(2);
          }}
        />
      )}
      <div style={{ width: CW, maxWidth: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <button onClick={onBack} style={{
            padding: "7px 16px", background: "white", border: "1px solid #1E6FBF28",
            color: "#1E6FBF", borderRadius: 4, fontSize: 13, fontWeight: 600, cursor: "pointer",
          }}>← Back to Levels</button>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 11, letterSpacing: 2.5, color: "#1E6FBF", fontWeight: 700 }}>LEVEL 2 — SURVIVAL RUNNER</div>
            <div style={{ fontSize: 11, color: "#aaa", marginTop: 2 }}>Endless Runner Challenge</div>
          </div>
          <div style={{ fontSize: 12, color: "#888", textAlign: "right" }}>
            <div>↑ / W / Space   Jump</div>
            <div>Survive 25s</div>
          </div>
        </div>

        <canvas
          ref={canvasRef}
          width={CW}
          height={CH}
          style={{
            display: "block", border: "2.5px solid #000", borderRadius: 6,
            outline: "none", boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          }}
          tabIndex={0}
        />

        <div style={{ marginTop: 10, display: "flex", justifyContent: "space-between", color: "#aaa", fontSize: 12 }}>
          <span>Press R to restart after dying</span>
          <span style={{ color: "#1E6FBF", fontWeight: 600 }}>Level 2</span>
        </div>
      </div>
    </div>
  );
}


--- src\pages\ShooterGame.tsx ---

import { useEffect, useRef, useState } from "react";
import MedalReveal from "../components/MedalReveal";

const CW = 800;
const CH = 480;
const PLAYER_SPD = 4.5;
const MAX_HP = 3;
const BOSS_MAX_HP = 30;
const KILLS_FOR_BOSS = 10;

interface Laser {
  x: number;
  y: number;
  vx: number;
}

interface Alien {
  id: number;
  x: number;
  y: number;
  baseY: number;
  vx: number;
  vy: number;
  r: number;
  variant: number;
  hp: number;
  shootTimer: number;
}

interface EnemyProjectile {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

interface BossLetter {
  id: number;
  char: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  angle: number;
  angularV: number;
  size: number;
}

interface DroppedMedal {
  x: number;
  y: number;
  collected: boolean;
  baseY?: number;
}

interface GS {
  px: number;
  py: number;
  hp: number;
  invuln: number;
  lasers: Laser[];
  aliens: Alien[];
  enemyProjectiles: EnemyProjectile[];
  bossLetters: BossLetter[];
  kills: number;
  bossSpawned: boolean;
  bossX: number;
  bossY: number;
  bossHp: number;
  bossTimer: number;
  dead: boolean;
  won: boolean;
  wonT: number;
  frameCount: number;
  shootCooldown: number;
  keys: Set<string>;
  difficulty: "easy" | "hard" | null;
  started: boolean;
  droppedMedal: DroppedMedal | null;
}

function freshState(): GS {
  return {
    px: 100,
    py: CH / 2,
    hp: MAX_HP,
    invuln: 0,
    lasers: [],
    aliens: [],
    enemyProjectiles: [],
    bossLetters: [],
    kills: 0,
    bossSpawned: false,
    bossX: CW - 160,
    bossY: CH / 2,
    bossHp: BOSS_MAX_HP,
    bossTimer: 0,
    dead: false,
    won: false,
    wonT: 0,
    frameCount: 0,
    shootCooldown: 0,
    keys: new Set(),
    difficulty: null,
    started: false,
    droppedMedal: null,
  };
}

// Draw Superman-style flying stickman (facing right)
function drawSupermanStickman(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  invuln: number,
  frameCount: number,
) {
  if (invuln > 0 && Math.floor(frameCount / 4) % 2 === 0) {
    return; // Flash when invulnerable
  }

  ctx.save();
  ctx.translate(x, y);

  // Body orientation: head forward (right), body horizontal
  const HR = 8;
  const headX = 18;
  const headY = 0;
  const neckX = 10;
  const neckY = 0;
  const shoulderX = 6;
  const shoulderY = 0;
  const hipX = -18;
  const hipY = 0;

  // Extended right arm (pointing straight forward to right)
  ctx.strokeStyle = "#000";
  ctx.lineWidth = 3;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  // Extended arm forward
  ctx.beginPath();
  ctx.moveTo(shoulderX, shoulderY - 2);
  ctx.lineTo(shoulderX + 22, shoulderY - 2);
  ctx.stroke();

  // Left arm tucked back
  ctx.beginPath();
  ctx.moveTo(shoulderX, shoulderY + 2);
  ctx.lineTo(shoulderX - 10, shoulderY + 8);
  ctx.stroke();

  // Torso (horizontal)
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  ctx.moveTo(neckX, neckY);
  ctx.lineTo(hipX, hipY);
  ctx.stroke();

  // Legs streaming behind with subtle flutter
  const legFlutter = Math.sin(frameCount * 0.25) * 3;
  ctx.lineWidth = 3;

  // Top leg
  ctx.beginPath();
  ctx.moveTo(hipX, hipY - 2);
  ctx.lineTo(hipX - 22, hipY - 4 + legFlutter);
  ctx.stroke();

  // Bottom leg
  ctx.beginPath();
  ctx.moveTo(hipX, hipY + 2);
  ctx.lineTo(hipX - 20, hipY + 5 - legFlutter);
  ctx.stroke();

  // Head
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(headX, headY, HR, 0, Math.PI * 2);
  ctx.stroke();

  // Glasses on head (facing right)
  const GW = 6, GH = 4;
  const GY = headY - 1;
  ctx.lineWidth = 2;
  ctx.strokeRect(headX + 1, GY - GH / 2, GW, GH);
  ctx.beginPath();
  ctx.moveTo(headX - 2, GY);
  ctx.lineTo(headX + 1, GY);
  ctx.stroke();

  // Thruster / Speed trail effect
  ctx.strokeStyle = "rgba(124, 58, 237, 0.4)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(hipX - 24, hipY);
  ctx.lineTo(hipX - 38, hipY);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(hipX - 22, hipY - 5);
  ctx.lineTo(hipX - 32, hipY - 7);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(hipX - 20, hipY + 5);
  ctx.lineTo(hipX - 30, hipY + 7);
  ctx.stroke();

  ctx.restore();
}

// Draw Alien Enemies
function drawAlien(ctx: CanvasRenderingContext2D, alien: Alien, frameCount: number) {
  ctx.save();
  ctx.translate(alien.x, alien.y);

  if (alien.variant === 0) {
    // UFO style
    ctx.fillStyle = "#7c3aed";
    ctx.strokeStyle = "#5b21b6";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(0, 0, alien.r, alien.r * 0.5, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Dome
    ctx.fillStyle = "#a855f7";
    ctx.beginPath();
    ctx.arc(0, -2, alien.r * 0.5, Math.PI, 0);
    ctx.fill();
    ctx.stroke();

    // Antennae
    ctx.strokeStyle = "#9333ea";
    ctx.beginPath();
    ctx.moveTo(0, -alien.r * 0.5);
    ctx.lineTo(0, -alien.r * 0.85);
    ctx.stroke();
    ctx.fillStyle = "#c084fc";
    ctx.beginPath();
    ctx.arc(0, -alien.r * 0.85, 2.5, 0, Math.PI * 2);
    ctx.fill();

  } else if (alien.variant === 1) {
    // Star / Diamond alien
    ctx.fillStyle = "#9333ea";
    ctx.strokeStyle = "#6b21a8";
    ctx.lineWidth = 2;

    const angle = frameCount * 0.05;
    ctx.rotate(angle);

    ctx.beginPath();
    for (let i = 0; i < 4; i++) {
      const a = (i * Math.PI) / 2;
      const rOuter = alien.r;
      const rInner = alien.r * 0.45;
      ctx.lineTo(Math.cos(a) * rOuter, Math.sin(a) * rOuter);
      ctx.lineTo(Math.cos(a + Math.PI / 4) * rInner, Math.sin(a + Math.PI / 4) * rInner);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Center eye
    ctx.fillStyle = "#e9d5ff";
    ctx.beginPath();
    ctx.arc(0, 0, 4, 0, Math.PI * 2);
    ctx.fill();

  } else {
    // Triangular Scout
    ctx.fillStyle = "#6d28d9";
    ctx.strokeStyle = "#4c1d95";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(-alien.r, -alien.r * 0.7);
    ctx.lineTo(alien.r * 0.8, 0);
    ctx.lineTo(-alien.r, alien.r * 0.7);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Glowing core
    ctx.fillStyle = "#d8b4fe";
    ctx.beginPath();
    ctx.arc(-alien.r * 0.2, 0, 3.5, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.restore();
}

// Draw Boss ("LIFE PROBLEM")
function drawBoss(ctx: CanvasRenderingContext2D, bossX: number, bossY: number, bossHp: number, frameCount: number) {
  ctx.save();

  // Float effect
  const yOffset = Math.sin(frameCount * 0.03) * 10;
  const drawY = bossY + yOffset;

  // Boss text glow/shadow
  ctx.shadowColor = "#a855f7";
  ctx.shadowBlur = 15;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.font = "900 42px 'Playfair Display', Georgia, serif";

  // Text fill & stroke
  ctx.fillStyle = "#6d28d9";
  ctx.strokeStyle = "#4c1d95";
  ctx.lineWidth = 3;
  ctx.strokeText("LIFE PROBLEM", bossX, drawY);
  ctx.fillText("LIFE PROBLEM", bossX, drawY);

  ctx.shadowBlur = 0;

  // Boss Health Bar above boss
  const barW = 180;
  const barH = 10;
  const barX = bossX - barW / 2;
  const barY = drawY - 45;

  ctx.fillStyle = "rgba(0,0,0,0.2)";
  ctx.fillRect(barX, barY, barW, barH);
  ctx.strokeStyle = "#6d28d9";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(barX, barY, barW, barH);

  const hpRatio = Math.max(0, bossHp / BOSS_MAX_HP);
  ctx.fillStyle = hpRatio > 0.4 ? "#7c3aed" : "#dc2626";
  ctx.fillRect(barX, barY, barW * hpRatio, barH);

  // Label
  ctx.fillStyle = "#5b21b6";
  ctx.font = "bold 11px 'Outfit', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(`BOSS HP: ${bossHp}/${BOSS_MAX_HP}`, bossX, barY - 8);

  ctx.restore();
}

// Draw Start Screen (Difficulty Selection)
function drawStartScreen(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = "rgba(250, 245, 255, 0.92)";
  ctx.fillRect(0, 0, CW, CH);

  ctx.fillStyle = "#4c1d95";
  ctx.textAlign = "center";
  ctx.font = "bold 38px 'Playfair Display', Georgia, serif";
  ctx.fillText("Select Difficulty", CW / 2, CH / 2 - 50);

  ctx.font = "16px 'Outfit', sans-serif";
  ctx.fillStyle = "#6d28d9";
  ctx.fillText("Choose your space challenge level", CW / 2, CH / 2 - 12);

  const btnW = 160;
  const btnH = 48;
  const btnY = CH / 2 + 20;
  const easyX = CW / 2 - btnW - 15;
  const hardX = CW / 2 + 15;

  // Easy Button
  ctx.fillStyle = "#7c3aed";
  ctx.fillRect(easyX, btnY, btnW, btnH);
  ctx.strokeStyle = "#5b21b6";
  ctx.lineWidth = 2;
  ctx.strokeRect(easyX, btnY, btnW, btnH);

  ctx.fillStyle = "white";
  ctx.font = "bold 16px 'Outfit', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Easy", easyX + btnW / 2, btnY + 29);

  // Hard Button
  ctx.fillStyle = "#7c3aed";
  ctx.fillRect(hardX, btnY, btnW, btnH);
  ctx.strokeStyle = "#5b21b6";
  ctx.lineWidth = 2;
  ctx.strokeRect(hardX, btnY, btnW, btnH);

  ctx.fillStyle = "white";
  ctx.font = "bold 16px 'Outfit', sans-serif";
  ctx.textAlign = "center";
  ctx.fillText("Hard", hardX + btnW / 2, btnY + 29);
}

// Draw HUD
function drawInWorldMedal(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  frameCount: number,
  logoImg: HTMLImageElement | null
) {
  ctx.save();
  ctx.translate(x, y);

  const scaleX = Math.abs(Math.sin(frameCount * 0.08));
  ctx.scale(scaleX, 1);

  const R = 15;

  // Outer gold base with shadow
  ctx.save();
  ctx.shadowColor = "rgba(0, 0, 0, 0.25)";
  ctx.shadowBlur = 4;
  ctx.shadowOffsetY = 2;

  ctx.beginPath();
  ctx.arc(0, 0, R, 0, Math.PI * 2);
  ctx.fillStyle = "#fbbf24";
  ctx.fill();
  ctx.restore();

  // Draw logo image clipped inside circle if ready
  if (logoImg && logoImg.complete && logoImg.naturalWidth > 0) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(0, 0, R - 2, 0, Math.PI * 2);
    ctx.clip();

    ctx.fillStyle = "#ffffff";
    ctx.fill();
    ctx.drawImage(logoImg, -(R - 2), -(R - 2), (R - 2) * 2, (R - 2) * 2);
    ctx.restore();
  } else {
    // Inner accent fallback
    ctx.beginPath();
    ctx.arc(0, 0, R - 4, 0, Math.PI * 2);
    ctx.fillStyle = "#fbbf24";
    ctx.fill();

    ctx.fillStyle = "#92400e";
      ctx.font = "bold 10px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("★", 0, 0);
  }

  // Radial gradient shine overlay
  ctx.save();
  ctx.beginPath();
  ctx.arc(0, 0, R - 1, 0, Math.PI * 2);
  ctx.clip();

  const shineGrad = ctx.createRadialGradient(-R * 0.35, -R * 0.35, 1, -R * 0.1, -R * 0.1, R * 1.3);
  shineGrad.addColorStop(0, "rgba(255, 255, 255, 0.65)");
  shineGrad.addColorStop(0.4, "rgba(255, 255, 255, 0.2)");
  shineGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = shineGrad;
  ctx.fill();
  ctx.restore();

  // Thin gold rim stroke
  ctx.beginPath();
  ctx.arc(0, 0, R, 0, Math.PI * 2);
  ctx.strokeStyle = "#d4a017";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, 0, R - 1, 0, Math.PI * 2);
  ctx.strokeStyle = "#92400e";
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.restore();
}

function drawHUD(
  ctx: CanvasRenderingContext2D,
  hp: number,
  kills: number,
  bossSpawned: boolean,
  bossHp: number,
  dead: boolean,
  won: boolean,
  wonT: number,
  difficulty: "easy" | "hard" | null,
  onViewAchievements?: () => void,
) {
  if (dead) {
    ctx.fillStyle = "rgba(250, 245, 255, 0.85)";
    ctx.fillRect(0, 0, CW, CH);
    ctx.fillStyle = "#4c1d95";
    ctx.textAlign = "center";
    ctx.font = "bold 42px 'Playfair Display', Georgia, serif";
    ctx.fillText("Game Over!", CW / 2, CH / 2 - 28);
    ctx.font = "16px 'Outfit', sans-serif";
    ctx.fillStyle = "#6d28d9";
    ctx.fillText("Press  R  to try again", CW / 2, CH / 2 + 18);
    return;
  }

  if (won) {
    const a = Math.min(1, wonT / 45);
    ctx.fillStyle = `rgba(250, 245, 255, ${a * 0.95})`;
    ctx.fillRect(0, 0, CW, CH);
    if (a > 0.5) {
      ctx.globalAlpha = (a - 0.5) * 2;
      ctx.fillStyle = "#4c1d95";
      ctx.textAlign = "center";
      ctx.font = "bold 38px 'Playfair Display', Georgia, serif";
      ctx.fillText("You've unlocked an achievement", CW / 2, CH / 2 - 38);
      ctx.font = "18px 'Outfit', sans-serif";
      ctx.fillStyle = "#6d28d9";
      ctx.fillText("Defeated the Life Problem!", CW / 2, CH / 2 + 10);

      if (onViewAchievements && a > 0.8) {
        const btnW = 200;
        const btnH = 44;
        const btnX = (CW - btnW) / 2;
        const btnY = CH / 2 + 50;
        const nextBtnY = btnY + btnH + 12;

        ctx.fillStyle = "#7c3aed";
        ctx.fillRect(btnX, btnY, btnW, btnH);
        ctx.strokeStyle = "#5b21b6";
        ctx.lineWidth = 2;
        ctx.strokeRect(btnX, btnY, btnW, btnH);

        ctx.fillStyle = "white";
        ctx.font = "bold 15px 'Outfit', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("View Achievements", CW / 2, btnY + 27);

        // Back to Levels button
        ctx.fillStyle = "#7c3aed";
        ctx.fillRect(btnX, nextBtnY, btnW, btnH);
        ctx.strokeStyle = "#5b21b6";
        ctx.lineWidth = 2;
        ctx.strokeRect(btnX, nextBtnY, btnW, btnH);

        ctx.fillStyle = "white";
        ctx.font = "bold 15px 'Outfit', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Back to Levels", CW / 2, nextBtnY + 27);
      }

      ctx.globalAlpha = 1;
    }
    return;
  }

  // Normal HUD strip
  ctx.fillStyle = "rgba(124, 58, 237, 0.08)";
  ctx.fillRect(0, 0, CW, 36);

  // HP Hearts
  ctx.fillStyle = "#7c3aed";
  ctx.font = "bold 15px 'Outfit', sans-serif";
  ctx.textAlign = "left";
  let hpStr = "";
  for (let i = 0; i < MAX_HP; i++) {
    hpStr += i < hp ? "♥ " : "♡ ";
  }
  ctx.fillText(`HP: ${hpStr}`, 16, 23);

  ctx.textAlign = "center";
  ctx.fillStyle = "#4c1d95";
  ctx.font = "bold 13px 'Outfit', sans-serif";
  if (bossSpawned) {
    ctx.fillText(`BOSS BATTLE — LIFE PROBLEM`, CW / 2, 23);
  } else {
    ctx.fillText(`Aliens Defeated: ${kills}/${KILLS_FOR_BOSS}`, CW / 2, 23);
  }

  ctx.textAlign = "right";
  ctx.font = "bold 13px 'Outfit', sans-serif";
  const diffLabel = difficulty === "easy" ? "Easy Mode" : difficulty === "hard" ? "Hard Mode" : "";
  ctx.fillText(`Level 3 · ${diffLabel}`, CW - 16, 23);
}

export default function ShooterGame({
  onBack,
  onLevelComplete,
  onViewAchievements,
}: {
  onBack: () => void;
  onLevelComplete: (levelId: number) => void;
  onViewAchievements?: () => void;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gsRef = useRef<GS>(freshState());
  const rafRef = useRef(0);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const [won, setWon] = useState(false);
  const [showMedalReveal, setShowMedalReveal] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/logos/cbtl.png";
    img.onerror = () => {
      img.src = "/logos/cbtl.png";
    };
    logoRef.current = img;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const onKD = (e: KeyboardEvent) => {
      const g = gsRef.current;
      g.keys.add(e.code);
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Space"].includes(e.code)) {
        e.preventDefault();
      }
      if (e.code === "KeyR" && g.dead) {
        gsRef.current = freshState();
        setShowMedalReveal(false);
      }
    };
    const onKU = (e: KeyboardEvent) => {
      const g = gsRef.current;
      g.keys.delete(e.code);
    };

    const onCanvasClick = (e: MouseEvent) => {
      const g = gsRef.current;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const scaleX = CW / rect.width;
      const scaleY = CH / rect.height;
      const canvasX = x * scaleX;
      const canvasY = y * scaleY;

      if (!g.started) {
        const btnW = 160;
        const btnH = 48;
        const btnY = CH / 2 + 20;
        const easyX = CW / 2 - btnW - 15;
        const hardX = CW / 2 + 15;

        if (canvasX >= easyX && canvasX <= easyX + btnW &&
            canvasY >= btnY && canvasY <= btnY + btnH) {
          g.difficulty = "easy";
          g.started = true;
        }
        if (canvasX >= hardX && canvasX <= hardX + btnW &&
            canvasY >= btnY && canvasY <= btnY + btnH) {
          g.difficulty = "hard";
          g.started = true;
        }
        return;
      }

      if (g.won) {
        const btnW = 200;
        const btnH = 44;
        const btnX = (CW - btnW) / 2;
        const btnY = CH / 2 + 50;
        const nextBtnY = btnY + btnH + 12;

        if (canvasX >= btnX && canvasX <= btnX + btnW &&
            canvasY >= btnY && canvasY <= btnY + btnH) {
          if (onViewAchievements) onViewAchievements();
        }
        if (canvasX >= btnX && canvasX <= btnX + btnW &&
            canvasY >= nextBtnY && canvasY <= nextBtnY + btnH) {
          onBack();
        }
      }
    };

    window.addEventListener("keydown", onKD);
    window.addEventListener("keyup", onKU);
    canvas.addEventListener("click", onCanvasClick);
    canvas.focus();

    let alienIdCounter = 0;
    let letterIdCounter = 0;

    function tick() {
      const g = gsRef.current;
      if (!g.started) return;
      if (g.dead) return;
      if (g.won) {
        g.wonT++;
        return;
      }

      g.frameCount++;
      if (g.invuln > 0) g.invuln--;

      // ── Player Movement ──
      const L = g.keys.has("ArrowLeft") || g.keys.has("KeyA");
      const R = g.keys.has("ArrowRight") || g.keys.has("KeyD");
      const U = g.keys.has("ArrowUp") || g.keys.has("KeyW");
      const D = g.keys.has("ArrowDown") || g.keys.has("KeyS");

      let dx = 0;
      let dy = 0;
      if (L) dx -= 1;
      if (R) dx += 1;
      if (U) dy -= 1;
      if (D) dy += 1;

      if (dx !== 0 && dy !== 0) {
        dx *= 0.7071;
        dy *= 0.7071;
      }

      g.px += dx * PLAYER_SPD;
      g.py += dy * PLAYER_SPD;

      // Keep player inside canvas
      g.px = Math.max(35, Math.min(CW - 35, g.px));
      g.py = Math.max(25, Math.min(CH - 25, g.py));

      // ── Automatic Firing ──
      g.shootCooldown--;
      if (g.shootCooldown <= 0) {
        g.lasers.push({
          x: g.px + 24,
          y: g.py - 2,
          vx: 10,
        });
        g.shootCooldown = 12; // shoot every 12 frames
      }

      // Move lasers
      for (const l of g.lasers) {
        l.x += l.vx;
      }
      g.lasers = g.lasers.filter(l => l.x < CW + 20);

      // ── Boss Spawn Condition ──
      if (!g.bossSpawned && g.kills >= KILLS_FOR_BOSS) {
        g.bossSpawned = true;
        g.bossX = CW - 160;
        g.bossY = CH / 2;
        g.aliens = []; // clear remaining minor aliens
      }

      // ── Minor Aliens Spawning & Movement ──
      if (!g.bossSpawned) {
        const spawnInterval = g.difficulty === "easy" ? 70 : 50;
        if (g.frameCount % spawnInterval === 0 && g.aliens.length < 5) {
          alienIdCounter++;
          const variant = Math.floor(Math.random() * 3);
          const startY = 40 + Math.random() * (CH - 80);
          const initialShootTimer = g.difficulty === "easy"
            ? 130 + Math.floor(Math.random() * 90)
            : 90 + Math.floor(Math.random() * 60);

          g.aliens.push({
            id: alienIdCounter,
            x: CW + 30,
            y: startY,
            baseY: startY,
            vx: - (2 + Math.random() * 1.5),
            vy: 0,
            r: 16,
            variant,
            hp: 1,
            shootTimer: initialShootTimer,
          });
        }

        for (const alien of g.aliens) {
          alien.x += alien.vx;
          if (alien.variant === 1) {
            alien.y = alien.baseY + Math.sin(g.frameCount * 0.08 + alien.id) * 35;
          }

          // Alien shooting
          alien.shootTimer--;
          if (alien.shootTimer <= 0) {
            alien.shootTimer = g.difficulty === "easy"
              ? 130 + Math.floor(Math.random() * 90)
              : 90 + Math.floor(Math.random() * 60);

            const angle = Math.atan2(g.py - alien.y, g.px - alien.x);
            const projSpeed = g.difficulty === "easy" ? 2.5 : 4;
            g.enemyProjectiles.push({
              x: alien.x,
              y: alien.y,
              vx: Math.cos(angle) * projSpeed,
              vy: Math.sin(angle) * projSpeed,
              r: 4,
            });
          }
        }
        g.aliens = g.aliens.filter(a => a.x > -40);
      }

      // ── Boss Logic ──
      if (g.bossSpawned) {
        g.bossTimer++;
        const bossCenterY = CH / 2 + Math.sin(g.frameCount * 0.03) * 80;
        g.bossY = bossCenterY;

        // Boss throws letters ("LIFE PROBLEM" without space)
        const letterInterval = g.difficulty === "easy" ? 55 : 36;
        if (g.bossHp > 0 && g.bossTimer % letterInterval === 0) {
          letterIdCounter++;
          const letters = ["L", "I", "F", "E", "P", "R", "O", "B", "L", "E", "M"];
          const char = letters[Math.floor(Math.random() * letters.length)];
          const targetAngle = Math.atan2(g.py - g.bossY, g.px - g.bossX);
          const spread = (Math.random() - 0.5) * 0.4;
          const finalAngle = targetAngle + spread;
          const speed = g.difficulty === "easy"
            ? 2 + Math.random() * 1
            : 3.5 + Math.random() * 1.5;

          g.bossLetters.push({
            id: letterIdCounter,
            char,
            x: g.bossX - 80,
            y: g.bossY + (Math.random() - 0.5) * 40,
            vx: Math.cos(finalAngle) * speed,
            vy: Math.sin(finalAngle) * speed,
            angle: 0,
            angularV: (Math.random() - 0.5) * 0.1,
            size: 22,
          });
        }

        // Update boss letters
        for (const letter of g.bossLetters) {
          letter.x += letter.vx;
          letter.y += letter.vy;
          letter.angle += letter.angularV;
        }
        g.bossLetters = g.bossLetters.filter(l => l.x > -50 && l.y > -50 && l.y < CH + 50);
      }

      // ── Update Enemy Projectiles ──
      for (const ep of g.enemyProjectiles) {
        ep.x += ep.vx;
        ep.y += ep.vy;
      }
      g.enemyProjectiles = g.enemyProjectiles.filter(ep => ep.x > -20 && ep.x < CW + 20 && ep.y > -20 && ep.y < CH + 20);

      // ── Laser Collisions ──
      for (let i = g.lasers.length - 1; i >= 0; i--) {
        const l = g.lasers[i];

        // Laser vs Alien
        if (!g.bossSpawned) {
          let hit = false;
          for (let j = g.aliens.length - 1; j >= 0; j--) {
            const alien = g.aliens[j];
            const dx = l.x - alien.x;
            const dy = l.y - alien.y;
            if (Math.sqrt(dx * dx + dy * dy) < alien.r + 8) {
              g.aliens.splice(j, 1);
              g.kills++;
              hit = true;
              break;
            }
          }
          if (hit) {
            g.lasers.splice(i, 1);
            continue;
          }
        }

        // Laser vs Boss
        if (g.bossSpawned && g.bossHp > 0) {
          // Boss bounding box approx
          if (l.x > g.bossX - 120 && l.x < g.bossX + 120 &&
              l.y > g.bossY - 30 && l.y < g.bossY + 30) {
            g.bossHp--;
            g.lasers.splice(i, 1);

            if (g.bossHp <= 0) {
              g.bossHp = 0;
              if (!g.droppedMedal) {
                g.droppedMedal = {
                  x: g.bossX,
                  y: g.bossY,
                  collected: false,
                };
              }
            }
          }
        }
      }

      // ── Player Collisions ──
      if (g.invuln <= 0) {
        // Player vs Alien
        for (const alien of g.aliens) {
          const dx = g.px - alien.x;
          const dy = g.py - alien.y;
          if (Math.sqrt(dx * dx + dy * dy) < alien.r + 15) {
            g.hp--;
            g.invuln = 60;
            if (g.hp <= 0) {
              g.hp = 0;
              g.dead = true;
            }
            break;
          }
        }

      // ── Dropped Medal Logic ──
      if (g.droppedMedal && !g.droppedMedal.collected) {
        // ease toward a resting height slightly below spawn point, then bob in place
        const restY = g.droppedMedal.baseY ?? (g.droppedMedal.baseY = g.droppedMedal.y + 20);
        g.droppedMedal.y += (restY - g.droppedMedal.y) * 0.05;
        g.droppedMedal.y += Math.sin(g.frameCount * 0.05) * 0.4;

        const dx = g.px - g.droppedMedal.x;
        const dy = g.py - g.droppedMedal.y;
        if (Math.sqrt(dx * dx + dy * dy) < 30 && !g.won) {
          g.droppedMedal.collected = true;
          setShowMedalReveal(true);
        }
      }

        // Player vs Enemy Projectile
        for (const ep of g.enemyProjectiles) {
          const dx = g.px - ep.x;
          const dy = g.py - ep.y;
          if (Math.sqrt(dx * dx + dy * dy) < ep.r + 15) {
            g.hp--;
            g.invuln = 60;
            if (g.hp <= 0) {
              g.hp = 0;
              g.dead = true;
            }
            break;
          }
        }

        // Player vs Boss Letters
        for (const letter of g.bossLetters) {
          const dx = g.px - letter.x;
          const dy = g.py - letter.y;
          if (Math.sqrt(dx * dx + dy * dy) < letter.size + 10) {
            g.hp--;
            g.invuln = 60;
            if (g.hp <= 0) {
              g.hp = 0;
              g.dead = true;
            }
            break;
          }
        }
      }
    }

    function draw() {
      const g = gsRef.current;
      ctx.clearRect(0, 0, CW, CH);

      // Purple space background
      ctx.fillStyle = "#faf5ff";
      ctx.fillRect(0, 0, CW, CH);

      // Purple star/space grid dots
      ctx.fillStyle = "#e9d5ff";
      for (let gx = 16; gx < CW; gx += 32) {
        for (let gy = 16; gy < CH; gy += 32) {
          const dotOffset = (g.frameCount * 0.5 + gx * 2) % 32;
          const drawX = (gx - dotOffset + CW) % CW;
          ctx.beginPath();
          ctx.arc(drawX, gy, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (!g.started) {
        drawStartScreen(ctx);
        return;
      }

      // Draw Lasers
      ctx.fillStyle = "#a855f7";
      ctx.strokeStyle = "#7c3aed";
      ctx.lineWidth = 2;
      for (const l of g.lasers) {
        ctx.beginPath();
        ctx.fillRect(l.x, l.y - 2, 14, 4);
        ctx.strokeRect(l.x, l.y - 2, 14, 4);
      }

      // Draw Aliens
      for (const alien of g.aliens) {
        drawAlien(ctx, alien, g.frameCount);
      }

      // Draw Enemy Projectiles
      ctx.fillStyle = "#c084fc";
      ctx.strokeStyle = "#7c3aed";
      for (const ep of g.enemyProjectiles) {
        ctx.beginPath();
        ctx.arc(ep.x, ep.y, ep.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      }

      // Draw Boss
      if (g.bossSpawned && g.bossHp > 0) {
        drawBoss(ctx, g.bossX, g.bossY, g.bossHp, g.frameCount);
      }

      // Draw Dropped Medal
      if (g.droppedMedal && !g.droppedMedal.collected) {
        drawInWorldMedal(ctx, g.droppedMedal.x, g.droppedMedal.y, g.frameCount, logoRef.current);
      }

      // Draw Boss Letters
      ctx.font = "bold 22px 'Outfit', sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (const letter of g.bossLetters) {
        ctx.save();
        ctx.translate(letter.x, letter.y);
        ctx.rotate(letter.angle);

        ctx.fillStyle = "#7c3aed";
        ctx.strokeStyle = "#4c1d95";
        ctx.lineWidth = 1.5;
        ctx.strokeText(letter.char, 0, 0);
        ctx.fillText(letter.char, 0, 0);

        ctx.restore();
      }

      // Draw Player Superman Stickman
      if (!g.dead) {
        drawSupermanStickman(ctx, g.px, g.py, g.invuln, g.frameCount);
      }

      // HUD
      drawHUD(ctx, g.hp, g.kills, g.bossSpawned, g.bossHp, g.dead, g.won, g.wonT, g.difficulty, onViewAchievements);
    }

    function loop() {
      tick();
      draw();
      setWon(gsRef.current.won);
      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("keydown", onKD);
      window.removeEventListener("keyup", onKU);
      canvas.removeEventListener("click", onCanvasClick);
    };
  }, [onLevelComplete, onViewAchievements]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#faf5ff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Outfit', sans-serif",
        padding: 24,
        position: "relative",
      }}
    >
      {showMedalReveal && (
        <MedalReveal
          logoSrc="/images/logos/cbtl.png"
          label="Coffee Bean & Tea Leaf Brunei"
          onComplete={() => {
            setShowMedalReveal(false);
            gsRef.current.won = true;
            onLevelComplete(3);
          }}
        />
      )}
      <div style={{ width: CW, maxWidth: "100%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 14,
          }}
        >
          <button
            onClick={onBack}
            style={{
              padding: "7px 16px",
              background: "white",
              border: "1px solid #7c3aed33",
              color: "#7c3aed",
              borderRadius: 4,
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            ← Back to Levels
          </button>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: 11,
                letterSpacing: 2.5,
                color: "#7c3aed",
                fontWeight: 700,
              }}
            >
              LEVEL 3 — SPACE SHOOTER
            </div>
            <div style={{ fontSize: 11, color: "#9333ea", marginTop: 2 }}>
              Defeat the Life Problem
            </div>
          </div>
          <div style={{ fontSize: 12, color: "#7c3aed", textAlign: "right" }}>
            <div>WASD / Arrows   Move</div>
            <div>Auto-fire active</div>
          </div>
        </div>

        <canvas
          ref={canvasRef}
          width={CW}
          height={CH}
          style={{
            display: "block",
            border: "2.5px solid #5b21b6",
            borderRadius: 6,
            outline: "none",
            boxShadow: "0 8px 32px rgba(109, 40, 217, 0.18)",
          }}
          tabIndex={0}
        />

        <div
          style={{
            marginTop: 10,
            display: "flex",
            justifyContent: "space-between",
            color: "#9333ea",
            fontSize: 12,
          }}
        >
          <span>Press R to restart after dying</span>
          <span style={{ color: "#7c3aed", fontWeight: 600 }}>Level 3</span>
        </div>
      </div>
    </div>
  );
}


--- public\images\logos\cbtl.png ---

�PNG

   
IHDR         �x��  ~caBX  ~jumb   jumdc2pa  �  � 8�qc2pa   Xjumb   Gjumdc2ma  �  � 8�qurn:c2pa:e86aa688-d3a8-4e58-aa34-4a275510e9b7   �jumb   )jumdc2as  �  � 8�qc2pa.assertions    �jumb   Djumdcbor  �  � 8�qc2pa.ingredient.v3    c2sh�C�����
��f�D�   lcbor�idc:formatiimage/pngjinstanceIDx,xmp:iid:17ed8b17-9aae-4cbe-9ada-ac78e57f2589lrelationshiphparentOf  �jumb   Ajumdcbor  �  � 8�qc2pa.actions.v2    c2sh:��N��{�(ƿ  �cbor�gactions��factionkc2pa.openedjparameters�kingredients��curlx-self#jumbf=c2pa.assertions/c2pa.ingredient.v3dhashX �!!���x}5	�*�W�4���]�7��2(+'�factionxcom.anthropic.claude.providedjparameters�xcom.anthropic.origin-confidencegunknownkdescriptionxfClaude provided this file at the request of a user and may have created or modified the file contents.msoftwareAgent�dnamefClauderallActionsIncluded�   �jumb   @jumdcbor  �  � 8�qc2pa.hash.data    c2shG��_.�C4n
\�[BH   �cbor�calgfsha256cpadM             dhashX �g���4AY+p�:���-�,v z�u��K�W@�dnamenjumbf manifestjexclusions��estart!flength�  >jumb   'jumdc2cl  �  � 8�qc2pa.claim.v2   cbor�calgfsha256isignaturexMself#jumbf=/c2pa/urn:c2pa:e86aa688-d3a8-4e58-aa34-4a275510e9b7/c2pa.signaturejinstanceIDx,xmp:iid:5a028b82-1e24-4253-8b43-468a3c2138bdrcreated_assertions��curlx-self#jumbf=c2pa.assertions/c2pa.ingredient.v3dhashX �!!���x}5	�*�W�4���]�7��2(+'�curlx*self#jumbf=c2pa.assertions/c2pa.actions.v2dhashX I���W�����Z�J�ˡ�Ef��D���>�curlx)self#jumbf=c2pa.assertions/c2pa.hash.datadhashX 4ɪ"�C+�>�[B
��5��\��ё%�d��tclaim_generator_info�dnameoAnthropic Filesgversione1.0.0kspecVersione2.4.0  8jumb   (jumdc2cs  �  � 8�qc2pa.signature   cbor҄Y�&!Y
0�0���@�
��9о���B=gU 0
*�H�=0I10U
Anthropic, PBC1.0,U%Anthropic Content Credentials Root CA0
260807184356Z
280806194356Z0D10U
Anthropic, PBC1)0'U Anthropic Claude Content Signing0Y0*�H�=*�H�=B �z
k�P�4�B�9[D���ײ�J�з�+3wdw���<Et(�.:}}?�4U��}�J�7���X0V0U��0U%0
+��^0U�0 0U#0��Q��Nd[#���Ϛ>���\�0
*�H�=g 0d01s�z��U��F�=���lNf���O@e�?<E���$���@��U�0p_\��a�bJ�/���
P�(��2_��=�Z��,Ï:2��x�S�TQ�G	�cpadY
�                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              �X@4h��Њx3Ƭ�NK�����g��>�͆I4V��u�=`@�uoO.�Q�w����S�(�j   IDATx���w�e�U�~gXk�xr��9W)�JN%9�\&�pi�m
6t�����B��:��/��4�`ڸlc066��,Y�T*IU�N;��f�̵�٧T
��m��?�ut�+�����!���s�[�U�H\��G�\<+f�q 8`���v�*�V�DfR]�$:��_-�v΅�_#��8����S ���>��=�lx.�=B�s�v�^�Ƚ�T��X��?��[������4�l�s+��C�� ����{�m��߿����^�ͩ���^�@��n>��������������s�4�f0WH
:̠@\���	��R���-+�B ����	1~�r��GUB_rא�e߲�?Xo��g���+��s�B�;�%w	HS+ty���w��A������� ����O������3���~��@�B���IH��9s�j�c���K!��!<� p�t���w�G�e!Pxq�\���A=�i �X�^RDe)���P��g�<���xr/�!�E[
q��~"V�A�h/�>p��sO��/�����>(�����ꯗ<���W�r�2�|{���r��fp�[�!ƴ������νw���t�׋"�Ⅰ�������\X�'�g�B
% �F !O�RbJ"����#}��:s)`���_} �_��������EyJ��m�~�Rmmt��w���z!�n�URW:ٮ�.y�p8�^�G�~)���އ�R ��@H)d B��;2�:`Z	�0�{�������;���?Uo��\~́����> ��Z�/����cJ�{�R����w�X�X	��	��L�������
�Ȃ1�.�z;��xԽ?�C���C{�m�K������=Ϡ���������m�~�Ri��:�^�x��~����T�����=V�}?�!��RH���'��M��WA�w���L?=C�/�W �W��ZKY�!���������(w���� ^�`�j��އ:��V�~��>�~9(@J��
!$�[r�M��^~՘�[����}���W=lP�۠�� ��������[�W�!���n���L�Cw^�{�W�^I�N
Փ��������?�T�_�]�J�� ���o���T�������G��B�s��w���� ��_���r��?x�6�,����<�u��j��!�t2|�
�'<.��x��s����!�PJDȂ!�ΜBp��|M�����cGzKD��L]��8x���W �W}������s����6j>���;����޿�J���������=~?���"�@ ��R]�M�@�/��r���e:e�>�> ����������篕J��{�r��Q'��yg������x���d�Z	����!� ��Z�����w��� ���^���~���A�M�~y��������-J�uRH�3KY�B��_����������`�ll>/����S6S_��Ǘ��C�������W �W}�k)�Z����_�.
�B�"���~��_/;��yRH�e�����S8@_@�_} �_���6Z�o�o�^���}�����A���[�����~-��^2v����T0 ���Ā���{4��ݪ�m8T�W ���u������}�e��
e�Oy�[�T{���a���������)�����+����by���/�W �W?��~��׶�NG�Ǽ���pC�e�����E�X��_��}���Xo����Z-������@�@�Ю��W�������-�S^�-��-��ཡ������y�Μ;q�
�{�O�S��]��=���%�]������������ϳ�� C�������Yb��{��_���ۋ����x��/D�(-"�����"ė�w��<���}V��� ��~(���7��l���R^��"�L���>\�NxdT�%/f�쿄��~ٿ��K�~xF/�K��O�G�+�|�}�,��y���=��\��)5R����aqX`�q��o�;<�A��5�(F�Ȣ�}Xká�7x/%��w~։�~y�G�H)�Bu�#����������w��%�q���z��$B���g�Y�u�R�D�X�{����z�{N����L��Z?=��� �ÿ�$�Pm��	z|Q�Z�����ȏz'��G�X���?��x��Y�������_=mQKF=�~�N��x�z�qyح���o���e�fO+�� @"�M��
�� d� #�F��n ."	�,� !���]�m���)�A��a��B�*�ɜ��B� E�UT|-�Ļ��GJ������)� !�!�����:OV��}
��
��d���tܑe���Xi�sX��;����[�!^H��TR���	��AX�t|� �=���G'��K �%��_���S� ��"���Z��P�/&E*����2V`ј���㿛vX�=��������
���G6���R��V ^��&�)�;sq۞+�j�/�vH/Æ����E��@ �V�L� .��r	:X�0^��a�@"Y
���� $J���@�/������x��"xK!QJ�c�x�]��}�>��D-e��|v2mA ��A��ě"�z�7]�^��*Q|!B��=,�9D(`��	�.@���țC��	H�T�!�9��`H*���HJ�s�.��?�T����Oɽ;���W
D�=G�c��y�1��vY���r�Kk�G?y�/1g��[	�� ���|�g�:�Ǻ|�w��.�ď���ZE+���.�x���=�=�N����:�� @!\���K[����/ E�!��@#CF��<=a��R�A��
����C
A�t��e1l����y�$)0�@�����ǣ�.��(����H)��bq�"�t�v:,@&�R��N�Zx�ơuD�\�#���w�;�u��(�0H���2�	J)��<�^�Y`>�=�9��x�(�1Z����/���{A]�#|(�� �ҙ�%7�m��>P7h�B+�y��{/�����7�������N��� ���ﮣ������{v��˅��D ޯU�a���t=�L�^��.�B2�x���
�B8�
O	'EF�^�4 @�|�!Ƌ�B1|7Kw���B� 
�\�`)�tJ����۞ l� %R�%R�|� �W���6</�{t�*X�"0 �����N�����y�����48�I%��w۩�?GHrc��T� ���J!}�lΆ�	]�Ł��߮~.	  �T .⩢�%=�D`�I������I��x!��TR\�8�_PO~������݋���� ��^���1�����Rq���������)K��{2�����E��/�Bts���@�8�)��W8� �=�Cx����L=r�@� �k-A9J0yN���� �"IbJI�$N@A���vk��[��Py�/Dy�;�+@�s��]0�����0�f� x�p��R �%� �S�R]�@�C���Α�s�h��"y�B�PQJ!��9A���Y�1�T��Hk�PX/p�`Z�������F:׋�bd
��a��e�\ 
`�m���y��l���$�|����i��G::�}�n�������������{������O��RH2�>3�� @b/
ȗ������\j���.}q���/4ކ �TK_ �{� )�8Sd��$Z+�pc@I�8oq�	�,D~x��1.G*���C��[��6��]�3�Ҕ�Zt�QR��Fk��E`E�+@�=��ұ�٥�8����rA�耍�8��Q)�)�$()P*B�Ud�8�1� �0��wṽ����҂��Z�A[�C�(���(�̑Ef�k�ՌH�R6X���g��N�@�K�<X<h�����h���?��>��� ��=�����e޻��/����d��?}F���ZE�=�mI4����B�o�t�z������<�Fؐ�z)�~�x�R�=wEV+=J�v7�<B}�cp&t�
y��j6�[���nQ�׉c��$�r�R�D�S��I��4�Z]*E�R�r�B��D�F��
P�ձ����uOh���h
��c1yF��8ki�)�
���&��<���<38&�X�_��j�j�h�Z�iN��Ӕ�b�<ͩU�$IB%TJU��D�u�Xx�x���P���+� �w�
��"���p�i�IT�v�|�o�x_��� ~9 ��� X��Cy��p�y�����?}��� ��{����?����_��{�/�i�Q����z_0������wu�EV�q�	��UP֡�[��E��(2�f�����	/��E������[�Z �:d$IJJ	rk����<gi��c��bph��c���Q�W)���WP�&�qD�V�Z�R�W��k$�Q�)�*DI��Q�Б�����{Ht�(
�[��4��;^,Ot�!8�Z�c
��B���8�&���	G�����
fg�XXX m���-�������Ф�h��h0;=����s�YNGT+U��F��)���	
e�T���8��Y��*��X&�]���:��]K�Pqm}�8Nw<�T:�1��ϋ>�> �c��5���RH���̀�Q���P�j�e��x��AP�i�������Y+�{��8�(�{O����H!U���QT�1�v?�:����!#�!p��&�����ͰМ�b��j28\c��jU���a��լY���CTje*�r��#Q�FŒ(�͒��J�D���������h%;J�<ǳ��}��q`�����G����,͘��cvz���?w���y�
f�f���bvj���ͅ�2 �$� I�P*�)�*K"B�C7�]j)��c�C	E$c�u��@����Bi
�c���	�(�,� �� ��Z���ف��P���> ���{��^���L�P(b�v����T�8C;M�QL���6�NB���n�#�#��y���P���<�Z*�*i#E
]�LnL0ye��Vަ6PE��m���i;̃Uc2Zi��fD������`��z�h��J%�W�d��V�g��]�X5��� �Z��Kl�S�ny��	��K�%3���`c'@vDs"��z�z~�ÀO��wgfFKB���1�k
J	��KO����[�@ކ�w�335��c'8y�'��d���������n�4�m�I��� ��\��u���"�*���9�`z\n�RE��4�C�5BJ�qs�Ġ�?���k�}G����� ��9�[�Ut�޳��~N�؁�g)���$Jj�F��x��ҚV�F
��¦��9i��t��+��]FRQ<y�q�ܰz|
6u��
&sTJ��6B(��iަ��X,*RD�)���ldF��8SI�ԂJ���� CC����z�*�m���m[X�f��Yt�󥯽-��>�Å�{�P������i��}����ZD!"�������҇e�Np_����i�S�,��F� �"��|���*  SZ�P�i��� �
�?�g�B�Do�$<����M�s��gO����3�<q���YΜ9��L���
Z�"�KD:�YO�T���H[-�
~��I$q���Z�&�Sv��R����p|退������9p���@�Ҵ���> �n��u�v��׵�^g���7��$W �F�)4:�������S����Mn3�(RDI�qg
ZK�w�/�0ߘ��ع}q�p��)�I�V#���QBcrK%-ig�9e�s���Bk'ȨM�Vfld���c|�(�֮bpx�
�ֱ~��A����
����^��Y�: �%���� �zG��HQ�htfHձ���6~&��N�/o�����m�`�x(���?K���Z@�n�f*��R�+XA���|�P�;`�I �{��#mN�����瘞\�ر�<��	&'�X\l��S�i��m �B�	�R�$��B�L��<̓��bpA���Y��8�}����X&d.;"�8���.���� ���ط���H�w���#���q�@���E��A�B�oA+�Ԓ4kc��T)'�ܤ��
R���bj�<cbj�f����,k�u�^��Wr�����O��;\ۑ��5�R�f����(��L:h�4�
�Ƈ�u�&Fז��f�jV�^���0��ɀF�!��XH.2���a<(�W=]a��G<wL:�� ց�k-T�m�w�y�����V�E�NCb�ڇ��~�QJ)��%^
_F2�
AG��	RKb�Q�BE�Uל���
e���ә� �����,y��u�(���$H�<p���J}%�:I�����s9�
&&�8{�'O�fvf���}/�:D�\#�c�8!�1�l�qy8_��IT�$*�	R(�q��!m��
�r)�R�?(,���c��ZJ�u�!�������v؀��������K	�����H����~-�(sm���m��.sd�H�)R
J�2��Q�c�)=��E+m��m�g��[�c�ʕ�{ͫxի_�֭�Y�e���O�}�?��?�ί����K5Z�)X�J	�Zi�h�.ED�������7�����(��Z.����,�B6/�H��!>.F>�"C]<�T2���Rfn����c�'k���,r��yΟ9�����"��`YZ��4%�3Lf�֑f9&7A"`Ð!,8:}����<H<^�n	�$Z*�
��5�8�Z*�K�K1�rB��H�G��%��X�j�׮f`�F\R���D^d�:����Y4�S�U[�Q~����Ȩ��p`�ga����"�s�LOL��C��󎻸�8�J(V��`|lIR�[�>�R:\�J�U���4M�K?X[f�}PEJ p�}��������/�������!���o��A��?�e<��v��'�K��<)Zh�& �J�#7m�
S�2�2P��Κ�.�P�s�UWp�
W�a�j�nX����`Ty}�Ͼɿ�����(��l�¹	�W�����d&#�&4�&Q\�_�~����G�B���6Բ�
YrGA';{gZ�X�u��!ԹC��嘚���ɓ\��dzv�GO015���,SS3�Z)΃�#�q�Hi҅�v��vT��b
�8K�T&�JX�^���$�+�+���G�آ5�����Bk
J�d���R*���$�6P�8C��8g����@����G�b�����Z����#utIw-�e����*���-�s!I��&GkE+��iF��RR����x���@s�͹��9j�S�����'9z�IN>y���9��$*�$U�q�H$@(Q�<K�R���&�fb�H�-��8��������������Gz���_vn�����B��xGf�8�^��/
����(�	�a^�%N�z��iq��Y���k���k�f��ul۳�;G �sg=��?��'gٽg�_ɣ_8ͯ����v+eӺʹSMJ�
^
�5T�4M���"S�S��/�?�/~Q
�d�Bnl���%R�q{tlfIӔF�Anr�mN=|���L\����LNN355Cc��G�baa�V;���� $Z��8"R
A-���B�%�D�@���E�"�	tN�7����e@��XS
��V�7��X�1�5x�pユ!�Y����!��%:V���j�kuJ�q9bxh�
6�q�FV
1�j��^BG!��J-]�x�<EH�V��$H�¡�@�b[˂�T��?��D��c'9u�<O9��c~����4ӓ3�JFT�Uk�Q�,��E����5��"�HTY��y��Ŀ��:�A�����G�
�� �g�?�A!�!�-�{�ˍ@��~0�F��y}�����w��v[Da��i%���B?�s.�a�s�v�bp�N�R����=��#�۰�ܦ��p�Զ��_�g���T�)��c����:�?�Ca�ʍ��O��vo玃��?���LΠDD���AG1�[��2P�kAjS<t?�����o�퇨�=_�Z/;
Yò0�H��bvv���)&/\��ٳ�9s��4�S�yh̵Y�[b���G��� ��B(�(&)W��!$ynig)Y��2CEi��.��~�E/��������n;��v!C����Ή�y#��ů+"�/Lx��X,ͬMG�+�� �3ZY�ܶ�L���<�Ͱΐ�)G�Vbtt���!t9b`� ��56n�����X�j���2�JB��P��zv/��)Ƥa�P�R(�H�Vcs�3>���6�S��'�0sa�'?š���G����s,,4i7�TJU6�ۆ�,�¸f�e+��S!��N�^_�e�]á�
��8vN�S��T��y���!��T�q�!�����ÿ�Q�
�@��������ߵ城����T	e6u�_�R�Y�ʰ\���+�-gޡuhC�s"�	�u�t��]�R�\�v������"�X���ua�^��Xk�&g�R��ز}=7�a��7���~��F�������7�Ȋ�1V���w�n����p��wSKV�k�Ulڸ
�#󋘶��-󳋔�r})En�Et)Bh��3�ϰm��ſ�y�y�֥��=�e��,�S��?w���OИo0;=���4�ӳ��α�����<�*V�'�*$IB�^'����y���t�uF�P�w.�*)��$���oL��}��Nt����� _X�[�N% ���f-���#;�}[ �}R�G��  J(���Z��t��L� ��*�F�M�5�,��<��Zd�٠�2Ђj����0c�
20Xcdd���:k׭a��q�Ƈ_=N<л���e�D�
�1�T*��Z�����T�m
�mN�:��������CG8{r�ɳm�W��5�)ť0pZ� �4�XG8�Ȳ�=���J+��`�h������;����錣
�p� <�{�wϷ3��U*��s���_�����P�,� ��~n��O�`�������d��[�G�n�ڥ�ӓ�x�	ݱ�>�đ kh�3���4�#<cZ�b�s��Z3�[=���$BFH]"�!*Uh6�DJ����������w��͌��P�0�����9G��aӦ�Ԫ#��s5o}�+��ꕜ:t���/r��)1B,Ɛ.��ԪU֯݀5���b��� ���'=��H��R�09=�{�
�̯����3L�]���9N�<��Sg8w�<�3�4�Y�o����D	M�#b����"7�C����Ҍ�����ľ��#-����z��:2�a`�򱿝IwK��9�b������B� ���K��x\w�%�,u�'�"/i$D�A�4��	O��daq�f���r�D��P�222��5clش���0�f���C���>�@�l�BI�eAXl�=:�X`�ú��̤4�&'�1?����O��?�,'�N�`�����9��Aj�*�x�r�m+�eL�#dW�1����,o!|���Z �<����C�P8�.��D��l33�#
p �L�s&���8p��s��`�-� ��`�"�w���˔��C$�7�a���	}���	i=)n����7>H�d���P��:����H���n�|��mʱe` bz�Q��*�����Uk7arOsa����
��Ͼ��D� ����_���sם���c�Y\t8���
?�����x#������_���?GsVr��^����6��>���aú�4�H�i�S��T*rkB߹�6'392��v����y��#}�	fff�:JQB�bLfId��� �_/��u16W� �˜-���.5ܙg�=��Ai��x��m���Sh-|����C���Jht��Ѥ��6��B�B:�r��ٹi�gq�08<ȶm۸���ظy#�.[��m��q(�h�Iqu;�ԁj7iNf�X��� d��l�5�J�|d�o�� >� �� '�<��Z�
F`ڞ�� ��!�W�� �@�6<�Ԡ�'x,6K1y�đBis�G���(��P�,�3(o/�	�<�@!��U��eG<|���ǿ����_�x���\�n������v߾}z��5��D�oR�85-\N{E~E�/.6�������\����HR.W�N�6-<��
���|B�1΢�b��@R�X�v#:)�����Ӑ}WV�8�iN,R_Q�ܱ���_|���6C����,��3<��	��
Tx�[�����w_�7�ehS����/|��L�M눁�A�� ��A�f�/y�
D�q)���Gy������=õ�T(�ń��n�W��D9�C&n�+{����Z[���V�y�FI^�� Id$ɭƺ0"y���zC�>��H�I�cǎs��pa�k֬��d����ع��;��~�����HDD�D�
T.�
�f =Zi�
Y�֝+X��5����s��9:£���Op����X�&��D:�jG+Oq�'�KTk�RGj2�( �5
���nٺ��x�^���㎨�S�/p���|j�VK�C�������K�����L_$��o��!�Ǔ��;t���_{]mq�G"����*�~����b�����E_- )-�Yf���%	NU�''���>s�Vs�j��UW]�[������P��O�R)a��5�=y�㇟�>Pgd�(�v�{︗G�<A�<��1I��R��@��;w12Rct�����m�mF*���MN���ر��:u�j�F��dqq������lnC�(���\daa�(����$Q��	��8��R��s����^cCm!�u��sύx��s"��?%,���aؒ
:�Nˡ�E(�� 'Y���D��$)Q*U��S'Os��i�����<���:z���EҖ'�J��%�I\氙CX�	R�x�m
���2��j�(;wlc�Mlٺ�-�6�#���,gϟf�9O�^�>4�.)��IM�ܺ��CW�`l�1�:>'�3��s\BX�+��@�H�ZH�s�[�����{�o����߼� �>n��9�} �_�Iվ}����=�������K!�o)�ܦ!�ȧ"�Y7q�i}z���o�4k��&q9�)I�R&*�d6�CR���M�]�׽�ռ��y�[����\q�nV�d�6�=w=H�������m��[�\9®�wR��X�\����רՇ���ng8R֬YŦ��G4RH����9��ӟ�_���8~��lݶ-�{O�T��ً��tl���P��Y�b� medY��r�E1Jh\�0�t}���~�oOQ{f�4�> x�MIFx<�Z��a��u)��t�U!�3�� {R	IT&�"�(Az���"�'9{�O>~��?�}��ǑCG�97�m���ѰB�4R�{m	�q�He��-�FoQ142��mk�~�6����=��ĩ���нL�NR�W#�[(Q�+!���Mhyu�I�\!�_��aU]I�+`�|ѮQ�Z4.�R��H&��5v�M;�n���9q+�ʛ�Y�`_� ������?�޽�o�Q��ZFo�]ꜷ���ĳ���iۧ~����Lz�k%P���+�k,037E\�Tj%�&�R�&��O�$o|�k�z�F�jD5Ń����ߙ���^�1�8����x�0Ǖ�]���Q�������]�R�a�c~~�Fc���a���
���#O���w��>O#����YV�X����O���b&/L�n�ݬ�c������+��J
����V+U��jf�i������d�A~�*Dn} ��k�#�#%�B�8�5�0�ɰ�bhO��a�Tn�f�%�r�RTA˘H�D2"k�LO�p��.�����'��w�ͯ����Ob�C�H�C�K�n�u�d�]!d�t��'1�Fٴq[�n�k��m�62�r��G8?y�R��w��ςHR.�HJI�C�"��X_����?��B�E�W/�5 ���36�����ݣ75~�7��} �_ߣ�?S����+�~W F�M�B	�[qy������ �m	�����2�X�[\`1m1�0��͛734Xgj�,Ϟ������x��(�H��ǿ�m��oٺqZGLNMP�%��Qq�5W�~�z���3-x��A�V�;C��@)I�򪽌�`a���~�o9{�,kׯ��Zd�����/�;^��J:���8s�+FW���wO�4k�,K��mbQ-U�TL�洛)�8Jq�8.�V(�TH��DB1TFtԟEP��� �BkU1()xk�s���X�[`���Ph��D�B�(QI*��
�N�WQh&�Or���>v���}���z�G�}�����S"�B&%�N��'*�Z={�4�K��x��{�r�MWs�U��f�
*�����M��Q�'*Rx�h��,6x@k�w�e��u#�t�/�5 BH�EP�T���\s��'��ĭ�*����� ��Rd��8�{�~�R�p�;u�{��QV&E7���A8�/,Q2�\�����ԇ�lݱ�W��&���}����cO27?C������\8>�`}��
5��8t�&�'����\.�}�6^�����旳g�n�J����evv��� Q�g^8�m���-먎T�����#��l5eݪ
lݴ���A��U���op��)�W��,�saT��4JEa4,�R���q�,��P�M�)ֺ &���M�T����*} PX��`��
?�}`cTh�T:
��:M-���۠�PH���xI�Kh�!��;����[�Dr��Y����0���8�y�fka
�Wh��I�k�	A��D��KG���g��Q���Jn��zV�cld�J����gΝ`�9�Ҋ8���CǜI�dQF�a����KTx,����s�y��l ��
�wHd�
���} �_/f�߿_8t��c�~����G-��"`ԄZ�s��/F:�b�-]t�څv`�-I9A�¿_y�sL̜�	ǆ-�y�k^Û�ro���q-�ã\81��'�q��)>�w��'�r�ˮa��U�Z��,u|�+_��W��7��Ww��-���k�ќˈ뚘�#����I�������9w��z���*VW�jY�bo��x�^ǆ�k��(S�jN?1����MO(��\0�Q"���sh)�Rbs�5��%�q^�l4i�)Z��r�h ���
����?� @ �s$�|��vE�?�G��H��J���HGh�Q�J�P(/��qE	G��fa�R��V�dmCs1E�g��Z"s��<�0w|�[<��c�x���
�8�Q2Fy��%q�'k��H�T��1`,Ձ
��le��]�_A}�B�(�y���	Z�&���V�BA��$ϲЎ*�g��MK!�*F7�n�I�@]���^t	6`􆛶�^�忟��s�
8�߬� ��^�u�������=������j��HF�Ϳˬ�RaD4��w�n��>.|fT�����"�sS�31s�,o|���������]�c���xiɳ��r
׌9��C�MV�\�����m��{�Z18:Į��x������
v�l��9��y�q�.�<~�M;�S�c�s}�	�&'I�%�ϝ��l��׿���bU�W\�-oy=W_w9k��Œ�'f�ڧ���c�h�Z4�h�����'އ!4�p���v��4=hڹ��[� 0��ڷ�Ӧ�_�&��l���O@�` �8��>�]�Һ`>�nv����;�����()�TǔGa���lQ"��Üa/P:�Z``p�'���o?�?��#'�8=�i�R�N��$K�D!	���a��q�F�j�Ěu�����y�+ob������p��)f�fh�-\�ZF{�9 $BD����E���;���1]��	6�l��?�g��3�?���0�}�` �������_��T�R�
�M��.���7�ޠ� :%�GENz�Ɉ"���S�i4��*��7�K�����?
�Puǉ''������y�m�n&��9}�4�S(����fpx�m�v10^e`�ʖ�[ٸc����d�/�v�������������nfxe���s���p��#�Q���!�������e��K<�)����IU1?��C�?��~��|�#͗��U�>~�<�D�p���=�{B��z��-;J��~!��K�yҋB��5o��K��?�k� �z=z��o,�#
����9�����/���(,Ÿf �Rk����+�u���3<t�#<p��<x�!�=����R���H���x,Zi�Ҡ$���J"�e�M���W�i�Μ=Ñǎ�h�d՚�
�f9��&�C�LnG%1&'MS�<��ŀ�(�
�3��u�J!#�w�؍��\��3�ڷ�V}�x�$����F@��k���f޵�C��#�1�m���_������/nTl���� ���RP�3�r�M�7r˛^�U��`x� Ta��w�s��|��~���R��ū_��v�I�6ĺ\X�����k_����n�$B���n���9�y����U%�'�x��'X�g��Fx��7220���"O=��x;�P)�h��X�x��q���_��������Id�@}�r\A�����zjav�^��l��{3�	B��Z�k��]�z�D�	�SL\��g�{�S@��
��;��dy���x�(J����8"w)��0==���?z���}�O�\u�e�魯����6VBk�Ms\3h?��q)A���ZGT�
?�������}�������Б�V3>���W�n�i�R��2J	��P*t�zk�2=�����z�q.���ۤ��w����}��m��[	����.)�?�6��|���ZEW�m�O/���_�����S{ppY�A򌓎׿ᵼ�o▷���޼�R5�ԣ������j���_��\���ۿp_��W9wz�H�4���Zɓ'��"ɍ7�@e���c������y������qV��BzI�٦\�q�eWP�Ĭ^��_w+W���;�������9��y>�����)���_s��ǘ�0��GeJQ�D�(%U�=�]'@ѫy��t<��)�;H�E�+����C� \�x�Ǣ��U���ާ�t~IȞ_���%5Q\"O
��6w��UƆ�&�i+���<��<x���0s�T���P��KL�`SKR-#$��)��0��]��=lݾ�V�r��)�g��6̪�JblN��H���{4Zw5+����E�_��}�:c�T+�?�g�ƅ�O���p[�$� ���R���������o@���
!4/��K&�����Q�e�#J�@�K�]�P��w��W��2F6Vy�������8�رw+k׍3{a��S4�<y�I.��@�K��*��P�t9�V���W���-,Τ{�I�և�R�h�)'e6n��U{�a������U�WY���{��;����3�{�!?r�Çe~n���Q֌�e|d����!k��Rɥ|R���fGK��Ł�/>��/>�]*|�[���T���S�=o���33O��\�⿭�OߝOԙ�l�y�.����:�1뉤$�"Jq�$� ��Uc+)E%f'fx�'x�Gx��L��#e��\'$N:L6�D�º0DHE��`����r�5��c�v�S�O01u�`dt�(Ҙ܄�_�<�ɲ�0�*؇�,�!��ցW�*�i���{��]�����F�$� ��,��g�=��]Z}��+>���=o��3m�������T��~އ~�8�4Z8�׮dϵ����(�'�w}��1.�s�k*ׇ����8�<�6mg�6B9��rA�Z��n126̱�Gq�񆷾�z�
iħ>��L��&K
����07]#?�O�A}[�p�Ӈ������׾�-�<�$�ɚ�Ņ&y�Y�jk��Q��H��F �B��D�C�W�=bY�)��(:#�3;&
�������=G�g �!���d����'���&\v�1tf3ȥ��e��G�q�<���X#�#K[4����Z�����W�&u��ܙI�?q�'�����И7�۰��XBT��m�.i��.��<
��Klٺ�=W�d��uH/8{�'O=������5�h�0 އ�RȮ���\�.�[��H�.^�k��
��ܷ�xHp��� �Փ��
�)��i}��}�ɦ-�!��% �ɭ��,6R�"��"Y����c\�gk��S��9{��z�J��歛[1����̞Zྻ�'m�ԒA*� y+�1ߤ6P'�Dy����x�����{8{|�W��֮]��3�L\�b�\s���_�ط���~�O��gy��p�Q+02��rR��0V�;���ȶ��Z��q	��ٞv����q�\�g?m��ˉ�p�������! ���Y� x��ֽ�_",�+����� ��:࠘�)�f`v>��D"��>ǘ6�9"����"��$��@u�Ji���9s�<?�(�?y�G9���C�C��#kѱ��T�����}���!v\�����V�17;���Y3cq�A��(�H��8�QZ-�=ZE�`n��� ������3Q�/�]�b���=�*�l�s�0���d�H�p<y���nd��VN�>�#�s��f�f�ֲc�.FW�b�(����w�U+��Ƥ���\��ʚ�M�J���5�ؾ{#U^�����w��he%?p�'����Ǧ�ȇ�W���N�`�Vg��xE�α���*(�g�<��-�3�+^	�m��S�Ef�{��+������L�2	=����Y�tsЂ��u����8q�J8�d-�%���b�j<���<2\�ڟI#��!.L{�7| �'�[(JR��F] ������kuI�8q)�4�]� |_HG,�k3��QJP.�(�J�<�X�I%�Jp�z���悁�0+W����	>����/}���$Q-\w�R*G�q�bc����D�5r�apu�+���ko����8S�h6[�LO�\���$�:�5���|p���*\h�S��w�0�Rش��/}�6�%�> ����!>���K�W���Ob]����ۿ,P]�~^��z�iM[��f�H�
�Up�)Θ��&�Z���hS�։��,3�*f��,>�q���]�^�g=�O���={ذa-C�>;˽w?H}` A\�2=?�����lܴ��n������g%qE�8����)�<v�ٙyZ�6'���ú5k��U��%k*�:�r�<
~�ָ��'�s=�R`�
3�P�EF�=z�N RE�x�����˞�2�P�b��X�Њ"�H���]ؽv���!�jI��Bv2[�(�E�4�1�
H;^��Y�5�.��GQ��YOh�u��2�N��rŝ�v�H!�y�5a��T�\����B�E�� B�+Pi`���px(o��	�E�!��=�N��[.]���#��7R�`�+$�{�u�&'�õ� �ÌPD��)���v�Q��X�~=q��}p�7�`��d��Z�J}p�8I���M`�:>hOe fǮ���{5R�2ߚe�1K�3�`�a\�C����Q|Z�)uќ�Kj$_���q��t�r��v�^�����[�� � ~h������wn�g�ǲ�Y��W����|��>��CU/�-=�
�!�Zla���^�Nua#l��>�����*e��f��P�UC��9������י�n�ģOҜk�*��F�Tezr���y���2�֨�5&�N������aZipʠ����|����o"��̝�y��|��˜>q�H�TJeb�)E1��B�c��C���]ľ�߅/&�[K�(ߗ�o�XNC{�m���z����*<K� �����B���;�j��Z�d�Ѕ�M5��!d����N���� ��@kPZ��G)�֊v�b�1O�\�ci5[�u��|�X����wxr[�����PK�&w�:�'��6Y�&R�$�cA��H�$�Li�V�}���d���.��=·3j|��&�R�N�5\$
�,�,1
~�Y���8!�^�P T E��T:0B
�x���� �f���^�1:0���㏞�{s��$�y�P}�Z���e�0uxȲgt]���7�i�R��'�pa�Q5"*E4���)�"�q��EyB�wf�/�UډޫV��W���^���PA!�q�QR��B�Į�����=�uO_� ?Dˋ�R�=�{�=;?�s�N�!W�a��s��E�_� ��z���.e��ML"��ݼ��('u"�Y\�cb�<R��P�R)��n��Y�h��x'�k�	��X�)��di��
gΞf��زe=C���������&�&R�q�&Z�G�a��l�Χ��|��_��_�����O��r�8�Z�PM*�:&�ޅ/!s�8G�.�;e�⿻5`��H����&%p�QMoֿ�챱����!{��@�n礙E)����Y2���i4ɲ�,OIM��6�m�ܶH]��e�.#u�ɰ�`)ΐ�Y�H;[��6i4���R�q)ajj�f��@m�dW#�����]b <a���u�6gl�(Q�i4H��DG��kr򬍵aJ��4I�����|�oV!���ZC�f�YJ>2zV��W!�rV;��p���iW,+�R���GG�$Bs>�`<��DI��[���9Μ���Ï���=�ٰe=��y�Z�D`�	�! ҬZ;������k�bnq�;��Y����A���ӜHk�-$�E����*�E\Q�!�]fqI���2��P�:k��e�]c�}|��]_� ?4��C�������2���wIa����;V�==/X^���k����J�X�֒��@R�R��H���"�ɉ"�+�g�,�x��2x�Ȳ�v�vk��l���E������A��*�9O�2ȵ�^���癙��R������s<r�=�8�y���i@��*T�b��Q���¹- �;��*�ߡ1�i��Z:���K_����Zܲ��!B;[d�(�3���@ ��9�_)������ w)Q,ɲi���6�6�Hq*0 ^�4��q�N$QI�*T��E��Xoi���6'*if�1�0<蔊��jB�����CX���8�)B{��
$X������f
�j��5�v���"*��LU)�q�YF���h���x��
ޅѸJh��(4�
���!�s	J/�P*�PJ �eH)�R������]����;���t�uk�1���t���B�Pt�vOe���-��l�^֬^�����N259��5k�V�4Mp�HǴ�)��DI��c�Tg��(���%4bٞC&����3b�y�U�i��
7m^}�g����~���^*ʟ}� �[/���j^�������(n��C���<Ӊ�xk��#:�n�	�V����.6�bƘ6�$�b���r�Zm�4u(YB��;�,Lg�����RÅ��T"��<¯������O�a��0��rhָ���x��ٰnJJ�&��all%�!;�&
��Y�1�[��DQ��]��+������]��K�K�՗b��������H_$a@�� ��t2")UYl4AB�Vcvq���;��ທ]KTRȒ".E�-B:�.��K��L��P|�)C��K�l�c��'�8����Οajj�����ª�.���"E�t� !�#s��~G`�G�Y�1���M��i��5�FѪL�;�	C���h/!*�&���J�u�q��d��"�V)5>�;H腙��¬r�R�n�I���T.��0�M�f����$��cc#\{������X�~�]���,����$�"T]������3�|�w031���Zy��G�aE8�"̿��a�^�e��c�]b��<|�c���&�em������|�߽�S�G����_���~u����ݿ�]��#Z%׵M+a��w�G�b����`iu&ۅ�Xv���x|��u�T���efv�v�bϺ]�r0���pB"�-��@CvK���1�R	��Z�)Ǌѕ�*ض'*����A±�g�*!I*x�I�+W�&m5q�8Z[8�#�@J�N"�ǳ�l�F��^�<�w���� O9z�wMf:tw�}���&��l��;/�q֒��,Q9B(K�^�k/�����h	����u��� �vLO�3=1���?Ʃ'��{����bM5d��bh`E�����w�Q�{/qx��]��5�4��.2�b�˷�!3M.\8���O���s�$��e�,1V!�I���!���Z��8\��I�[β&0CA�&I��R����^��`��$�c��H
���R�%�[b��~�&�k39s���헹�[���}񦷽�kn���h�p�\}�.� d�;��gӶ��կ������+_�*S3S�[K�V�e%"�д-�<vm��@v�9��)\q��B'A:p�?�:5-��j�/�{���o�|�>`�ѣ_��^�^���_�3��z��KR�m�m��6������r%��: �{��(��껵p��	CT�������R����������+����19=���0��v��e�(H)ig�����O��������۩��Nr�������g���E����C�ZCk��B��\E�(��\1V��m�cV�
a��D��hɞZ~W��K�t]�.�!S�z;�*��w������5K���fCn
�t$ig��y��{�r�k�PTx,^{�����;�����9���s�����r���UeV�b���lܴ�͛7`mΑ�%7�ѱ�����>*|�$<B�е`@� h��K�&���׏��n~�+�}�.�nZ�.)T,������Ν?�����m�
co��:��xO���rH���Bg��!\� =��×�j-2���E�u�q�� �4�"�X�S���j��'m�z��<|���s�>bdd��X��e��Ț��d�j�u�ǹ������	N�>K��BhI\���<���R���!g���Lz��ޫZ<	Q�RV��޿{�s���o���~���> ��+��g����?3����_�2:���Zg^��~YP�ri�i��e�d!�^����ф;��8�f�u��������޿������W�
��o����$##+��J�c�⋠)<��,/ �enf�o��˯����&_�����>��������^Q�bRC��&��!i�r��:J�>)U�)F��R���]������B )��8q��w���$����/0 X�8_fA+��%q�1.��/�n�j���*J�+=>���W�y��Pp�'�*�d1�X H-��"#�����AyJM�^e��زy+�~�sg�1>��v+��ה(����!Ah�u�8�Z��KҼE�[l߳�7����v�Z�mY�ޫw�}7�7���^~-�֭ IB�]'ĥ'�M�l�3,9�崳&�i/�y_tF	w���Q�SGQ�ܘ b��rR"�a�_�������UL�Jq�rTfa������y�q������v0=J�"pО�R2���U����W��hp��1ZY �ZJQ�
VB���_��W�� �'���� x��޻H�o�9z��O�ѧᠿ�[��>��������޻��nUR�G���;��X���i��S��=�4E�[`�`���-����i�7�������K?�k��J*Ceړ)q�04<��.LL��9Ŕ�ec�CE1J��y�[k���f��<�x;���{"k;V��A�����P

37;���+V���Т�l�]E�s�}E@������M�!���,��-������B&��P���X�G~����0 ��P̢�4M�����ȳ{���UD#�C�ǈO�����ڼ(!�(R�PV1렊� S�"L�s����"g|���'O��왳�q�:p�3&y�Q��k�r�,֙`w�����ʝ�t�5TVG���#*�e�k��2Ε���uoy�z�[y�[����v38VF'!,Vd9T$@Y,�̴i�h���.6Q�aa��G@�z��Ny�9�������8�Z�8)c�Ø0��Y��r�4#Ks�8��mxY3��P�ʔt�r��ٳg��7���O����C�8��b,p���p������kY�n=�&�09s!~�
��H
�*RD����,����"x^�H�@�[����=�7�ٴ��/����������ϭ� ��������'Q�g6�A�'��!��-�Ft\���08�9�!�,�i���
��F��5�������︅��ׄ�1u䩡��B�<�ᇟ���ӔK��Y��w�z���X���+Fб���3;z�'?���͛�1X�O�Tehh���i�<glt��&ȑ2&�q1�\��(6p����z�:�Et�������K�e_&<��y�E��� ��=����J	c
��I+[$3
6m^��n��d0�*��kJ���4Jj������1�qAx����8Bj�P�
���³��m$:Ꭿ�,:l��-��P&q��lDcL�q����!c�e����W_F\�q�A��ex|�� 4IU30^f��U\��]��
7��7������uW1�b�r�DRQ���A+ob\��`��mJpr��e�������ij�r"�q��.�J�(	����r^�/�F �"�	�Z�cN�<Ýw~��'�122ʊ��/<��P*�y{&sT5�.���W쥝�{�(��v�)�E��u��Cx��=e��f�����q�ĺ|�4����|���샀> ��^�ٯ~��so������)���e�iB����"��6h � %R�/e��#=�J�f��|c��W#s�/βr�J^{�>~���ƛ��\+�ZlӚoIERM�@e &�̩��;{�Hǌ����3ڭ6�J1Ҵ��t��w�mP��I��zu�46�����٢�Q����Q!�+<ً@ݡ$!Է�
T�Rq���{�b�'4<JGA�nMPJ'�}fy�s��I$��L�2h��r�(Ta�y67��X,P�4�	�%��5����6Y�n�x�M�	�P%zn�*A��Ql���!��Кk#�F�!�AE1�P�K	���X���LM�q��P��Bh�����9�ܕ�U�4gvn�R�D�V����
��M�رk+J�#����al1�/L��dEŚR)���ʚ-�lۻ�ݗo��k/���+w�y�&������ 3�L/LGD�[��FQ�G@�z��p��"@�i��/��$��6���BQ����'J��F���'xⱣLO�P��]5�J.��H�\Ϋ��D0<:��m[ظ~=3M&&�hg-d$@:T$�T+XgX���9���U�y_t����4�0I�r�U���w���OL��\��螳���_��T��p�� �[/���J^��V�u�i^`?���X��a+��!=��4�*�
C5.L] e��6�8}�<�������-�▫�Pca�A���*�`��wYPx��j�V��w�l�MG
��ˉD	EdY��#DhC���Zh��H�rO;M���#͂Z[I6����6v��E1���0&�٠?��!E�"U��ua���&� �����b)����"���.��YB� } OAt��N�p�,JK������cܙ`hm0_���-6�iJ���g�"�R��hBMEݮ�p>�B,�Z�TT�	�Gx�v��N�Z�y���!��"M�N��%.�f�R)p� ��>Pg�e;I4^�r��yn�TB����D��5�F�<�I��J�Ji �40�X�j�llaq������E�9�ą.��䮯�˓��!���Y~gb�K=!�ޕ�p>o�b��'�
�-B#% '
� #����9�T��#���bna��9����Çx��n�}�2���k[����PJ-R)6lc����X��/|���_�5S��_��̷�-K%*%*�qP�+�����A�k�A		��.)��mf#o�"���v��?|��V�M� ��־}��o3����W+�������4͋7�'��,)I�e����|NT֌�
����2^8�g�[��>X�U�|o}��s��#
��\P��H%�Z�j�L>>���+����L�R*UP2b~~�,�B�AQF�yձj�E��2�XE�Q��k,��CI��"E|3}�� p���
%
^��j葯Drch6��&E(I�h���y��vޠ�c*�J;m�ddp��BPH�\��z�/
.Jb|�=�C
���ڴvE�:6`|�-SHO$"��|�_��w�G���Q���&&w
����s�vn��z�++d���`�E
�c����	��#�^��ɳs�(!��qH%q^��9I�`�'o6�

0Rer��6:��0�~:8��9��U����I�K��P�Ÿ�<Y� B�	.7`A�K��2"���n�J�pǗ����/X#���� �ڗx_��dw��Ē��/�����N��^�U����[�4��U���)���!{�1���x現��]5�P���T,@�ܠ�	�_����of��q��8��!�F�t�,k0:<��-Y;�fg	�RG��(#^�{�Tn3���2��{v��?����>�} �}�>p���-׎_�N���9���ś�'�C��H)C��e8aI��(��&ÐR.ELLN25s�ݗ��G�������8���Tp�VF,c�y����'��g���o������T�B��R��DJ�-�R{`��-D��^�l�#]�����-� ���K�p\��hɳ��`�+�FaK�b#��.b�A(I�\�\�ig)S�S��-ʕ2�+V30X!KsZ�<�;3d�F�^`�+��繽	G����{Z:�
���M�$�2���)��uf;x�N��������I��9+FV���֝_�eٺm?;����{3���Mg "R+|C눕+W04<ĉ'�R�Ց����HGx��Ή�$V�/,�j���2Nx�FX���ʡ���3P�8.�e�����"����_���:=��B�Fh��B:\Y+�d�(Uc��x�'�Q���BʞP�3��%g:�.��/�
u��^���
�g|`�$]�Z�-�Gi��<��C<���r��'y�_�-?�:��݌����^Xd���).�n����X�f���gx��9s�4�R�AYCh���zOg܄R
)$*�=`���'��t�/߳냃�8x�����>|χ�~��W_�<3�O����];~�:��������Q�?���5�HP��)�JX�3�8CN��ǎ?�Ԗ��r3?����uo{C������
����U���)���������{����� �GT˵P��q��J`��Mp~�� {�t��J^7�,��B��r1���k�l�����q�T�hw��3C�ǡb����he��"*I֬[�u�]���J6o���S�8w�,�z�(��Zcm�TE9B��
 |7�[�5�tFe > <�Ua��qR�b݆ռ��SH�B[�`�kM���@X������c'�.f|t-��+edx�zm�brj�V���-X�i
�Nh	�g�[\Jk3-���=q�rR��T0�#����S�V�cM��i�[,I%b�9����7��57�Ei�1H�
g6��:&�&�JeJ�26w��)}�:*=��Ո�A<�y�q�&���7����eE}u�)�� f�{�.����n�W�U�>(�Bo���Ɛ�[��HF�_����{��}�3'�P�k��'���oB�8�4�(-ظ{W_u-��ٳ�i��YJ�⸅�R
k-&������s�����i�c��������Wx��>����o3�����2�`�z�^��Ft$)�K	��"m�&�D�0�0��ӧY�yox��y�;�̦=+q7�	�
tk�"�(�"�����ş�/|��DQ�����7i�S.�1mC�Z�$�p6#OۨX�c�1=�p=t~'���;5�%C��6�~���%�X����&�	qY&���昚�d~q������
^~�\y�lܲ��:�����>p/�c#DB�n7�:�4�!����Ґ���;�=!��;�p��g�0��� }0C*~-*'TK5���3>����&��s �>Pa|�zΝ;���"�O�g���]�xR#4Q̻7�eLќw��>�]���y�V
�y�f�2Fz.�R���eW��O@�$a0����H%�juL�1y|�bh�FR+��K!з,&� U`(��f9Bzd"��B�'<6��N/bM�|p���ej�
�%� :n�� K�-��*/D��)�u�Fg3�����l�3?7�|+�^Y�p�L{��DƝ_���}����;y�{oa�1�T$e��q��,Q9L�M���y7{�����������g3J�J����B#���0PX\���*(�7.sJF~��_]{�����[�U�&	�;� �%��>��,}���{!���c ���^7��f�
:�����'~��x�kn��"�	G{!ǐS� dy�T�p�������o��ɓ�ܺ��N�a�2�`m���ȋ��:�A�dC��VAl<=�`K_�����I����_����fKKO�F�e9֚�F�%��d&��n�e��sS�+q˛_ž���U�^��U#đ,�at���˷���bl)�yNIW��]���-Y��rIOy�ˢ�[�|H�>��  ��NJ�bV�G� �l�2[��H7�$�\��
��8Qh=C�Aֲ���s
;X��� ��3,,,P�ֈ�kC���;Ű�J�[*���B#kb�a��@}Ū�2�i7S�r��Jx��3��==z�q>���2P��+�f㖕��G�/!#�(�}�� �� '�O�Hr��	Ξ:���[�/n|I�|���E�#e�q��	�����a��A��6w�-(�ʌ��$M3Ο�BHA)��-0\YM�h�?�8=����wr��� �k\�Y�~���Ԡ�"�nz�U�߰����w�N�8��*I�$I��h�1.t߈��e���z�{w~h�m����B����� ^��e���e���K�;Dfs��T*%�nXGj�<��Y3��o�g~�'X�y
IU�z��Gi�S)B���;�/��o��w�Ěm�v�0�����k6��=i3E����Z��"�
��Ы/����2$.�dO�[�߃�+�gb��Ht7�N��#��$79i�f�iȲD1B6����!n��JFƆX�~Ya����|0�)�U/����w���ca@�(]��^�m��z���'X�3�0��3�-�Y�ڀ�¶�`��
b�"����V�aF�PqD�+��
�V���y��SÖ�q�W�A�o�PBp�
�Lj���y��/P�V�R���߼�&�ו��Y���u��m�R�Y3Nm ��kã�=S�8o��~>�??I5�+��{ǚ���ܹ�ˮ����ZY'*+T�3�O���O<'��aq.�^��\����?�ZT�z�DEǉ� �Ys�� ����0:P&k��.`sX�`m��V��j�^lc�$.�Y12J�-p��wp߷��?��'�B4��iR��hU�d&�Z�u����uk�q߷���s�N,`sK�\G��T�s���vQP����t�޻�Cx���} ���r[��;	 ˪�e�.�'�2�!d1Z5��q��k̲i�z��#?�-o}kw���B�l��Zi�.GHG=��_������q�9V���ĸ6Ĕ�xZ)�k��BQN4��1��l5�8JI�ǒ[�u�/�͋��W��-��{�EO"�tD�wK2�ή)�u��9�|�V�F*]9�޽{���~�8�vm �]�<m�d�4X��TD��l�ʫ.�o?H9�Q*Ui,���uN)_�Ϳg:q��B{�/�A�q�w#�,E
��G �$<2A�797yI+ڜ?w�(���)��E}h��@�]{CP�%pFw�'cRZ"5L����#G��0��5c���ҫ�{MbE���R;Ͱғ��`��U�ڳ��Nh���u��DQf�-0qa�Y��4�۴Z-��-�:�'?�7��H}��kV�k�Nv]��-[��v�J�&kzJ���,�6�ĕ@��s�QL��e��y�f8g�y\�2_��D�B�A֒e2�e��D���h��Q���;���W�P�zQpJ��ea~A��� �*\星�%�%JI�8N�l���FJ3V_�s9���︝��_dˮ����E*��>�����_|7;�����觹g��,�9:�I"��9>�LТ���}��'��V��}~��(:e����4M�+}� ߛ��w�Œ,x���؇����8"�,�v%���
o=���&f.pf��vo���]���o T8kq��j,��6TE�#w>�G���|��_�5�Y�b�!ڭij(��(�i���J�v/gpRc��WA�s�L����|A��Nۓ
��r��)��p^"E���'�z5a��\F���]��3'����k�|�.v��ɮ=�ز}=k7�#k�>��ex����%�ґ���P���\��k�����c�^�V	ƥ��@G2�ޟ�T?��LǖX���:*vL��tE�\0�8��󕬕��8�,}��#���Y2���:��3$RR2D�����Gٴu�v��W\�ؚJ7Z�3I���J�T#g3���C<~�%5��	&Ĳ��a��J�HbI��8�0�EƂr��ɳ�X�a�W��F��|т&�����8����Ӭ_���D�1��J]����Y\h0w�<�-p䁳|��MT�ٰa-W^}c�V�j|����ťo2)N�(��u�:�_$��Gp*��WRx�pk�N���0&�V�J#�&KS�("�cl����(ባ0��XKۤ�I����ȗ�w�!�m]��:�T�kDy�p1.ς;��ё�x��
�mu;(��%�1x㩕�P��g��ڣ����x�����WDkB5�s(�4��7�|��
�_��_}��?���n�60��T����h��JN� b�(89o��9z�E���N��xN(@�A@ � ���"�w����|�$:7T����;h�-��@	YV<x�2��m�~���w���]$5I��5%4y;�����ɜ�������;�I{���� ���dB�0�EI�Tǻ%�tc3��!��@[��4YdF�[�\�^�梨3��w�Nq�+P�bpx�5�f��f�H��Y�97q�-{��ή=۹쪽\v�N�o\Eu8)�%�,M�b��O@���3�"�9�֭x�+^�˾���C���F�$*�BWx���Q{�Wt|�eh�tE��{X@8�09B�E�5�����W!�О780�I)������W��n�ǂ�1OMpC� �ƴfr���|�o���GO16�M�S)E8�2�Z�dA���G�8�������x%�6o(@���i6�aց&F��gO�Cˈ$�h7RLjRQ�kl\��u+6�ғ� �v���Ns��<~�$��2�CCX��Z���u�et�XVV.X��!�r��
%�"�	�N��r)��n��T�	�C�8��h,`MN����_B��l8�Z*t1��� ,��^g)�y+��$Q�Ǔ�0H!�q��Ƨ��w�D�4�My�0V[E�4��C�{��Yy����7����{z2� 2H� JH$�,+X�ٲo�:u�֭+s�n�9�����v��,˲%a+'�@����&w����z���]���d� �m�������_X�}���|���O���]3���ob�E���a�Gƞ<[��%bǅ�14V�1:�g?�e}�	֌�c��&T/�w!�+�%���1�J+��G����Zx��?�łݱ�yV	/6/6 ������2^�����]]��d�-�(=�%��Xg9��0{� ա
o~���ʇ�Ʀs��'�s�(�g}ҨJ�$�4��������3����>��ld�������*�b`I���}��'��J��+����~���<��h���-#�AVӳӌ���7����-��:���p�y۹��s�䊋ذeS���b��:W��2��*)IT�W�ۜ"/�J�$���c�i�.Y�UD�B�3H"")�k�SA���y��h�s$�Uዒ�^���HQT�/�"'�&�~��l9m+Q���0s8BK�!@a
J�C��jL�(|n�����O}�'�<C����d�;�RDJ��w�cH��$:�Xhw�
�TR���Tk	�U�L9U�@�ZA�fgX�,�Y�Q�'���P��f��CB��9��G������Y\�ga�M{�O�HҨ���z�g���/~��V/!A���0�����Ga�a%�
',}�C	�+��� VA�����T��HYN��E�r�����U�dP�jE50�:i�++7�4z�>JkN�x�������ؚ�u7��ˮ9��St�8#�I�)r����oy�u�z�6��O��;�s'�k�jH�1�9�+P�B"XZZ�8C�^�%6+�8��XE���Y/6/6 ����sP"���Kz�g@�D�1Q�hw���
o7��f~q���cԇ~�w?�[��FҦ"[0a*Wg4��P�k�������ɿ�4���}*�����:�~�ߗ�b�?�"旕��}l�A�O:�؈��]��z�zK <k׎�n��{��\q��w�N��a�#�=E�@H�J�$M['i$uc�UI��Mד�[�?����î����#4�C���KQ��}2���ʆ��R��]eq��
^I�L��QdqS����xt*Ƭ:b|ɤǓ=����
�n�G�(���w���w3{t���$���������f�BR�`L���P作���.���f�M724\S�	fDHB#����B��3�h���OL#r��	�J���E1��m-�K8�ú���O�ggB�bW�)�Ū��f��s^�"XZ��I�gZ���y���xo���d�Z@�V�Z�%>̷���H+	q�)����8�����
��)�����QZ��9�v��5�x����|�G���콖׽�j&7M�I�E�S�D�\"#��U�0���/&?Ɨ>�uL�`��i8�XZ\$��:펡���vb
 ��Y��UL�p�o{�/6?�ǋF@���v\�R$Ѕ��v�"'�2�-��N%��<�Yr��3������7��xHR��QLA��H���t�[��=�����z'��qNۼ�bi�MU�*~���%��R��VhR����������(Hk	S&9v�(7M��k�ື�����y�/f��qlV�+�����|yl��]���L�������9��c�w�������яr�Ƀ4+�7Ʃ%M��F�c0E��_�j�0#�x���" x�[Z"��aȋ.ckF�첋]7
���R�#��:`����Z��
���m�#u�1Y�d�c�����E���o����f<�>��JG�B�(�#I����9Ca�E8a�>gx���/��s/ݎ�g]���ȑR�c��bq�E��f��)���
���Vo���	�[�t�6�~��P������X�E�k
��>�NN�9��(Z��8�^~��xV�+ܔU�G`�&<��
]�8���Ns�8�e�L�^��IK������q���*�_�X�ֆ����i՚B����$3��ql�k�J)�Y�$��_�㮻���96o����Hڰ�Q*�æg�jpΙ�a���ôZK�=:��&'�wj6gi~����Fq�N)��XFi���ؿ�c��0��^�c����<��_|�,����+�|D�~��.���*�� I��P0�@�R�[��V�	#�MT
�cx]p�����W^{1^B��$�r/i<"	�n�c����?�g>�Y�;���-LMldq�K�[PIk��5^�g�h�Q67b��\Ǯ]���`vi���~��~�w}�
l=c=i#��B�s9���IKT���[�������(\{���9½w�ϭ_��o}��|���B�u�4�֮�HDJ�y�U�i\%�5��KV��O��CHБ�Q�/���q�e0�q/��E.[��r��S�Ҝ)G�3!Sz
8�(A��n�EE\t�%��M�r�9��,�L��i�B�Z��Vo�!=�~[8���T!��	�oY˫^�26�:*�3��ң�
}��ԛu�o\ǎm;���K8���q��Lm\�sr2�Ő�AB��ڋ��}��$qJ�� ��Hj��"���Js�����|��g]�%�ӕ�Z�b�W����m���<3�G����_}7;����i�?�����(�R�a������v��*��d�~(�J��}U��r�\-}>����P�^�K�ĀC)M���{j�}��ɵLm�`q�x*���m��#���&\p�ٌ���k���yj7�f�5ct�lQP�:��B�w�zdI�'�1�6{vb�o���� ���/�����u ��r�(/�^���'�DԛU�/8>w���4��F��������K�<�N�@Ƃ�����|&x䮽|��?�?�5�a˺S��C,-��u2ҴNWɳ<��>�@ �u���*�+���$K_�C�Sd�����#���s��q&H�ψR����am��k���FiA�@T��zO��4_�����O}�o}��<�蓴;D*elx�H�t�9Eߒ�EU�Rc����?��7 ��]J���c��n�fd�ɥ�]Ě��85�����ڰC�ʣdI�$@�B
"��B�-u0�q�ף�J��&	��!6o�Ħ������K8��X�
"���:�@	��)#⤆q�����?Ω;���k^��x��t�-��x�ɲ֙Pp���5#�O3>��SN��y���.�W���.��Ӷ���X�8��;-�g����b�m�/���
Ί�fWAG/N��岄/����	�³:��D��#T��}69���l�vo����p5o��Zν|;�/�̶SN#��t��[�;m�0�#������Y��'E)ˍܳ�	q�F��HB�F�d�{�^o����j
��|�چ�;�`h8�;�mZ!��ؑ�[�l�12ġc��`?����0?7���մJ�/�%e@~^1
� ��g5>�|�>����U��
�s\p�M��w�7sÎ�}k�*�x!���{w��"�\��r��Ƿ�`n��{��p�կ7��M�q�Vd,�R�$��x��%�+l��k��3���(��11��u�_ ��L�YK���ĉ��ǉ��"˞��}0=��%V�Ī�JNWx�O��/>���Z̶-;�����(��a\��:*��"�)Rɢ�I��|������+�u�=�{��}�XE�:D5�����-#�&���w3�����)P��0�}�:�8����H��.���Mcd��%�7SBIA�ʯ9Bt�2Sޫ�2H0�B#�������oq�#`�Rc�Siԇػg/���yP�^����Xk� �4�zK7��͖8�%gq�.�֌iQ;��!�Y��lH>�+	uti]�65����uM����g�ƹ��ŗ^�K����/��m�ncj�:p�#��!�f�9��-��P�Y��^���.�F|@Ŋ��Jrx)�QRޅ0d&<Ǹ*Y�a��/;�}�}�v�fD�PZ�fb�3.��y/9�8I9x�0�NF�S���TR*i������9G�RE^�����h���z^�Q�VR��R=!�j�^7�����f�{���I�3�����!NhG���J�d�ٛ9m�)�ٻ�]�=���kF�1�E��l�W./J(������g�$�^�m�����_�v�7E��߽X�^l ~���� �'���&/��_������DΉ�#)(�
[NE�S�o��w��7����Bh�q�����ԆbZ':|�/?ϟ���f�c{�]G#���)��jR#�+������6Lo?�S|N��@�.(���'e)��~��,Xֿ����Xs$$X�(�%��9z�u�8�%ېi(����!�@��b���z���-���7_�/�����0����>�8�"��������tJi���"�{�$&��z�
y�Ck���4 �Z��8�xa���kr�3�q,ܹB�Ċ�r, �;��c�����O�9��݇���~v?��Obq��"��V�Iа{_�*��ɀ4Ց�u��p�bB\t�P�ZJ*I�5Yn�:"Jbr�%J���2.y�ِZz�Q"�Jb(�}�T���s>|?�C�c�����"/P�'�FԆk�N�0�a��;�rֹ�s��g�Iy��G1�c��$�yr�!�ՙ�����oV\'U�L
��%D�E��z.C&`��]�u���Ʒ��7����]7��A��x�I��׏�}ǩ�{��l��Jֳ��L���HE
!�
(�X����"x���C�>��FQ��,߯-c�
��z�?���<��n&�ֲ�Ե��Sd����lش�SO=��W���=8kaq~S�$�Z��!��
�Ċ��i]a#_�s�#��ȟ��D^l^l �Ǎܨ�ʟ�թ~�[�B!��ȭ)[�V:LP28R��o��ȉ�.��|>�{��U�����&"��n��Z�&�F��O���s��_�#���fx�fe��#�k�*
rc����ILRI�v��C��OPrӝs'I� ��+�Jݲ'Қ(���^��Ғ�����AϮJ֯�+^��:t��ӳ��
q���I�>��'q
BP�	J�,���짿���b��:p��b�9�)q��8���j�8M@:ff�s��a��k� �#��>֚���S�������J!%8
���L��p�/>��-����T��C?�ş�џ�/|�G��|�G<|�c<p�#�q�����;��]����:�kGH�)�{l��	Y �1�t(f�6Ɓ���S��BҬ7�"B��l=�8����#
^��+�q�F�)pxt��"�y����l�b���BG!Lh�z�X�!�CIp>�e����I�R*"��Ǟ��BA�6�5��$����X�}ح�e��`--� ��E�ւ$�P����iu;4F�����g��x�%���w_�+^s9k6�c��Q�*W��Lfi�TY�Zvn��pm��O>�����h4�.� �_zn��X&��U�� /{�%R�l{�KIQ�"PdyA%�P��)
G�Vcvv���3�ajj����	�x�ٴq�ӷ��5�=�w�pb�f�%I��N�C7��1Bk
c�����ȶY �y�L޴s��#_������&��`����-���}v��[�����/B�u��z
��v�
��ˑ������_r.7��-\r��$MI//ȋcB�u����=�����_���(چS�og�6N�6(��U�<��8�yGVD�&��J 7�R*���{�<�)��Ԧ����:)Hҕ������oee�9�9Ri�Nȍ
��rʩ�ؼs
cr�u��5#�d�p���� _��י��Ȧ�SI}
eb\��g�t����Z'�[����ѱ!�=�l^u�+شe�sG9>}�!�S��ܕIͿ`
��h�!?r��a0.�ިr�E���)�0xoP�Ԑx�������in������G�'M�g�,�v��i�0�a~�����{�����^֮g�)����<��y��<*�T���G��{w��na(�E@b��$w��k&�x�/e��	l�
�ȏ�X%xJ�$G8c^�C)�Ji�P�A�P�#�F*��hf��ዟ�*{w?M��{{���[Ů����7�P���,R	�X���$^	22����%�_�{��v�z�Ť͔��GD��P:|����g�45�h���y�#G16<Jk��!MO��
Z�˞��_^���w?��:R(KO�&`)�^���aFGG9z�0O�ڍ��
��S�����*�28��h���N��T9t�sss�k5���(�A)�E�R�z����<�^ b򳟦�y�"_�c��_���<p�7EG�����7 ���3w�ٿ9���KR������:dK"L��:�HOZ�8:}�#��x�˯���W9����y��i3"�dy��pa���0�������	�b��ոF"}�(��})uZ��nقO�� �:ضc��)%�4#�cT$�t[�E�Z�N�^��i��8��
J+�5?���
x�~�u�Z����16mY����) N�`��JF�B��T�t���:t��B��j���C�F�T��/rt�0'Z�8a�����կ%7��\yͅ�����������I�
Εr�2=�yM'�J���:���G�Y�K/`��)��X�����K�?���B�ѡ	F�c4+�Ԓ&#SlZ*���U~
'�\v�ET�հ�	�G��T�8���_�:�)�jC�;��I #���I`�}���7q�+.el��r��%a�9,�H%�B`M���8Bi�/��������)�� wt
+��p�'>��B�Z��!@{v���~�g`߯T� ��C�V�R��M�n��ǒ6R��<up/�u������� g]rJ�A�i#ź��d8�|�QNE�qb¤}p�1���;9>s�F��p�(J½�<©U<�|���1�/P�(�/$,��+BJI%M��8�anv��z��B�-�71�a�%yV`�#�*pD☳�>�ёQ����0;w�Z����FI� �"�*Y9�~�-j����5�G/��m����R"�����3�� ���1]$_�R�]��R��;)��e��h��ZOhu�%�f�����M���mۈv�q�mC�`�US�*K�m���۸�w����s�������0�˥���$9ȡw�v��Z��)��n��R�F�A�ѠZ���9�{d
#��,���EA5��cA?�x9'1 ҫe�ā0�Z�NI�/����qx��L��6�=���Z���ބ&~�q�:�����P��Hڤ=ۥk�h��n�����v�¥W\�5�}9�������U��쥬�<N\�^�CS��^y���~Ձ���yR* D"��"�C�qp	�,�G��^l�F<}�Ӭ�h�+t;Ӈf�6���3�ٵ�	JT<����]�
��D�D�i�Zr���1z�i+��!���9S��1�f�2�H4.2� ���]߻�]�aǶ3���`h4a|�(i���8a�HT���+z�m@'����E���#�55�.�+��Dn��A�)VL~��(с���_��19q�F�hqx�����K_z	W���?e�2�!��d�qB��8̃�	߁�S"�V�E��	Ȁ|!|I���(�f���_�SI�0��J����[z���T^�w�364���>���1?����l9{�j�ne�:9�JB�
�K����������8Ӌ�ټa+Ǐ��`bl
�%ǎ�Z�Ҭ7�����(�y焐U��o\��w^{˞?�w��� ���n�f�V��S�J.�L�!�/�T�YG-MI͉�i�Y���!r:tZ-^�+y�Mog�%����V�U�UExj�ڳ��c_��wx#gtr�DU.�U�gL`X�d���w��g$�
 �8���c��������-��)�)�斎��fh���}�|;[:�)�j�y�	�h�v�Wɲ6����ǹ���x�_&7#��
xR���Z#�̳�s�wo�}b���c���^�ZR�%���W]������a�Z0���
��6�r����q� �Z��l�$/bY˴I��m�#vހ/S
��j��^8�3LMM�i�z�x�)�N��W��qZJ3%�B/�ѷ)JE�N�����P�Ex
����(�>�Q��B��!u�
�-�^ lذ���W��/�a�F(��3'���-_�c�	6M������r���c�)lذ��Sƈ1�PAm�!J�yH-H�=�@/˙I���3!KO8�XRKY~Ј�QZ��l!,q5BZO;k�)�lܲ�w��ͼ�M/��L�v
�-��^B?���A�"c�cʨf%%R���`~q�vw	�d��K�X<��BH�\	�Y��fu��t�=�n%�S	�s�N�KRK�Z���D2alh��3|��{�_����� �_v*�zL&�NN}(�9.���ﾝ�|�c�♃O�r���Zrӧ�<�J�HhL6H�|�s����e4����l���ny�/��#nv/6 �	��UW}D�|���;~��Z�W�9�)�ʽ�exd���>�J=�x핼�oc�KN�h[�Bi	mO\UDiD�@���+���џ˙�b(ExI�9�X'x�9� ���݇._��YK,��(
��

a�eaa�v�ME�juj�*.�9rb?�s\z�e\��W�m����;8��j�:�Z��v�+a�b�����3�"������|�۷���\�ڭC(��#��!�8Q2�����=�������S�M��ì�4��W��+^y!S;�h4�(�N�G���hԈT��6m���3N�{�g��Ě��f�  �� 	�>��K��/�YQ༡�T�Qh�lq��q����9�����S�����xM��H���`rcȇ:ҥ</��$i�"�[nJK!,�YA}���McP�uD"x�{��g�B�ў��^ȨG#$�F�vf�O<�i��2<<ĺ�S�v�6N?s'[N����0Jk��:#�S�'r�?u�4m`���e���<�hoY��Kܲ����(<�N/x���$�%K]�9뷬�=��.~�E�����EP��N��<���I�l�PZ�O��T��;1K��DGx�	ع�����*V��o���I�_��
~Nx�Z&�ǘ��Ř���!�u�>c�)���o���9~�q�[�D�x�3��:�Ǫ���
�|5��:�'��}G�ʢ#�5�û���_./���j��+_�~�o���'���?a���������\�eǇ�0�j��/ڿ��? �<��]�y���a��D�䊗_���l=}=�v�ԪI�D9�o�/~�|�_�N��s�H��M+p��m��������~ؕH��A2�����(��|y�_�V��*$q` g����p���]�z^y�+���s�*Y��<F��b����P ʍ5�e�S(��d�.qU��*��<��)z�Q�n��4� E�OG�� �D�X���e/}	���Y7���.9��?������F���,^�<CF���X��lA�QM��M��Opt��J|�/(S��n��P��k]hv��C�[���8F����z-;�N$�&�,�qY��%ZJ��XZ�c߁=4�����R����#��p��Nۺ����4�M)\N�ף�-��"��X_��-�a�:֬
+|��(���Y������Hs
����X"�',��>�c?�W��1:>��-�X�~#�c�~�v�݌x�F})c
k����e`,i�(�)2,*, d�X<�UR(�R{���9�G\x�����W���.G)Oka��R%�&h���E1�Re��&낺@I�uXc������CCC8�PdM��N���ݪ����(^�K�
�p_�3e�} mV�iY/G:M��Rd��R����[��}�=����+7��Z^w����'8���7�.�J��^Q%����<|���&i&��{9J�(���_�&�P��&�Ջ�|�fn��#|D���[��_����J�~�G��w~�ה�>�7�/l���N	�~F�Ra��I�xj��9��y�o�������gDi��$�^�5��9��a���o�}��S�ej�'�v�RY��*���<��*�
Y�����"|yc��h�������Kk��T�j�J�$X�vl�=��7����_��Psm%��U�~)w~�>~x�hu�,G�
ȇ��)ϒ��Rx�(!�=&F���;�}�x��Q���i7�B�O�w�14��_~1[7M2�a#���R����6�Ɉ��8���3Xr�M(�"H�C$�S�o�s.�;��p@��������,G��
ɉR����>�CU'�
:y�٥��M���9�����b�����}�N^���y��W�"0YPɛ"Ñ�t0�Ij)x8vh�D�#���`�T0
���6]����2��m 'bC����=�� ��8@�:B�m�EB*S��
�3�����tL��#-�y��� a�M$Q̑��U��f#�(�1�2"9�����)��Jk��4AHGa3zY��q����ַ���_���*1E9
�CYI������YC^� c�o��/�*aUq�~������K� <�[1�>�#ny���Z���+@�[ID�Ց��9{��a���LM�����}�##D����S���N�؃��_��	�k��
j#)蠺PJ�㘗^}�G|4�?��Cȱ���O���"�V�J#)���)�exP�ӫ߼��?z��o����۹ټ� ��}�Ds��߾,�/������^]�δ�)�����'�=!$�:�HQ؜�O=	�rݛ��{�mlޱ�~�(����i�FB����������H�������CM�ant!�[E����q�,Nz\Y�*G.���_����;j�*�K���^����i�(�̳���W��k�vS�î���O86�:�nz'KK�<��n�n<�6�/���\ɬ5�"�V����d�Ú5��94�}�����9NiN��0� ˺iI)Bz�m�`ݦ��F��K��M\O�Iq2��V�g����J��|�IX8�an�ņ�a��BؓK�5��A����F-�<w����ɶ��wd��2������Q8�Qp4t�<��*b��u\u�����ӌ
��c�ieд@i���(g���s_r6�����d ��¢R
B#�*iR��=�9L%Ip6H֒$�ޜsb������0�zs���n��]K����*<s�Ǐcǥg�4�+��QX�/
�w�ՄFc�a��G7�R8�1���!�`�1D�b:�6B�B�"ELX��ά��Jx���_X��
ڽ;��h��t���lٹ�Y�E҈��
Y���و��':�|�{�b����ex���e�5`BE ��}�u�:�0��gL��d9�{��]��)���I��
�R�"��#���i0s>GE�z�>I���g�D���n�&�<�������-q�_����1X_�!����� ����4��p?C�2LZMC�*��l�f~�C
�X�#��Y�|M@a�&�j�v������7��M�}���/6 �$ڹپq���|��}���3�tҭ�ˀ���(XN�SR�s��{�,�����2ן�x7��{6&o[T��bA/땙�����|����o���
[�mB�
�K-����!E�){�����\?��:ؽz��z�����W�(-�Z���K�G���Z04V	;̅#���121��W_�կ}�_��h�K�j����,z�q\��38�����?:D��D%��u�
g����"�W��`l�5�jZc��q����ٰ�Ft����"��h�B���,��A�c����E1..��{*.!I+�},����s�.y`/K�9N�������)�J�^��3�$�� 'V���2�O"��C{`�2��F"�¸k�
R�$IQ*	AGއ�y!�2B!1�b�� 6lY��oz&3�������^PI�ԇD��Mq�����cc�8b(
��{�̡y�����7�", ^8T�1YS�ټi-���9���_�C�b�P�"����½�((�B��^�GVΑD	�JBZ��j-��#�a�~_ᤗ�X)��x'P�t�s��J��16�K��#{�dl�:ŵoz-׿���9m���C��K�*C��:"�؎A{�.$��}��)����\z��䦏���ދ�lD�U��,ZVp�܆���d�D�cX��ݪf�/��2H,�W)J����dY<m��!p>|����͗������P�Ü����-2�"�
��>�ȒG�2G5n�q�fg���n�5��[�}�O���iIIRM&��^t:��7��/���D9��Y���GIA��yF%D��Y����S����A��`����Be�W$:��7���C����y��b�K@�����I��3B�Q�r??�_������p%��;��y��s�:�;z��j/
O�K4�y߇��;���kb����dmKZ�ۄ��x�/����=���S�&��C����F8�-t%�E �4I��7(����r�,Ȳ!i� !o^≵B��N7�J%����N���cǹ����-oc�S��7�M(
�($q#&oC�]p��/eiv���gP(�j6��%<�EJ�N#:y����EA��a|x�|�����}����Ll�f�(���1���:]�$A�1&�c$ȸ*�d_0E�IҘ(�؞g�X���O<��;����>��?F����e#����R�ߝAhE�R
��[��a�r��ʕ�KW�A0�-ɎA�-�kو!	){¡��� ��*����p�^�}P�%�����dg�{�O���Q_���ID%�8c��b�O��h9��I��CH'��
��QQ ���@���H�����̒E	��oCa�k������Vg�Z#e��]�\��f��p����"7S`ʜ�D�"t2\f��az�{���R�ux/L��.F�6��8[���HT��y:�[wl�}��v^��נ����"�g蚦or:�i��#)چ(�$N���������[����5j��K�H�U�VK|�!�ޢ��",�~�ed�A���y�V`�-y�2 Ī�é�!�e��\x��ޡ����
�� %6ϑJ�PPC�	x'�Q*�@�q��V�VhV����ChY�NQ�$��c:���##�?�����gqݜ���;�ز�~�C�Ήk	�z��s�����h�%n��v̼`���n�O��i��X%�|0

�%�8XcX\y&#<�
������i�-;~{�go������_�@\p�M���o.�Z��_E*���o`��U���.Sx=�a����1�j�K��X�}�<�lk�������kY�e�"w �ن�[T��}�}��_��W���{0�d�ԩ�+#�Z�^��E.E��W����Y�W$䈟��%��1:JȲ.�n�H�p�F�>D�x�ZJf��?�4I-楯��W��.��B�6��RxG{�+�u3���@�%y�24^�%��7�������Sd�XGDq��T(L%G������+Zh������g�ڑ�\�u��@ʈ(I�x��D?��sI�����h(�w�`ia��������]O���{h-���ǹ蜋�&���gaq��F��t!���%�$AE�^74.Z���+�j$��2]�_�5�(�@�����λt��H�,�g�օ\x1H`tˌ�=�-�֢�
������(��{p�JE��fa�h��3'��mw�m�Iu��Mp�A��g��"Byv����H#<U��e���NaM�Ҋ��k�􊋩Vj�K�<���	���ݫfx�BE	i\#�5Z�H���2L� g� )�`_�Bڡ���g=�y�����G'0�x���	�x���ͯ�s�!��XZrd"�}Z�cS$�Fg�Cŀ����������~6��L��{%(e��
ׄi��&'�!m@`�,�J�e3Veg!�\�����ՠ���՝M�2|�7�j%�^B���jE#V�ˤb�b��3�AW��	�;G��W����w��ۘ�2�m|f�*Ji��Lm��_�љc<v�~=L�֤�ڝ�J��8c���H5 H���QI?/�O��2�"�̍g���g�j.������.�I���o��{�=R���M�"���<����|�F\s2LuRP�n�M}�I�Ygv�k�&��؞�����!��k����GkIQxzK�Б�{����i�	ڭ>��	���{,.�^R�U�l��o�������0���%�I����m#3K��p����/ͱ��Ӹ��y�k_�����+ld<���i�n7*x��
t�u)��9�׾t+:������W!�./E�L�.쟕
���(1?��=?���.�Ns�N�+�c���c��p֢�%b�~`ck����P}��w|�^���=|�#��4�F����qT����1lX���P���2ߞ��VȺE�#T8fU�����bY	.Lzf»`l�W�ӝ\�bQH$���2��#�������J����y��@�=Z��S6��eS�A��DX�t{}�n�T7H�)�	�	�3�r�mw����jR��,�B%�N��b��q�?�˶_N�� S�O�J������%�8e��5��=o��ox-.��O��3ǘ>:����>G�EkMQdc��R�	J��z#�E��q��Q��&(c�8�IE�h��uHDL��p��3�
��׽��]5�l2�!#�J��m#Ɔ��vr�-��*���������?���1��a#U*�Z���AU�0�n5��#���+|��1�R>��?��~�=h*Y���Sn9�ep��2�,�[��tţ{�M����v���Y�f��1'Z���1<4���Q��o�-z�����Ɲ밙E�Q��Y��</��~�_��Ͽ��;�M�"p�OfZ(�C
�8�C�e��X�P�*���u�iln#��bl�������Q��K���m ��#����\�y��?R���g� �y����\�I:�ҋ�K8�B�^jE���az�}�A�9ѝ���~�m4��8�q9%	T-d�������g���4�J��'ТB�ӧ�)��SI�尌�Ǐ
g��ᥢR��7@�T�%yޡ5{��'�sʩx�{��ˮ������H`��~�GBB5M��@�v}֓�b�������c�$���2%VҤ�L�
�uX��>;R`
�g'J�]�GEUZ�~��<A�YG�*b&)K��������5���<��=Ƚw��у�i�D1>��Q�4�P�4"�9y�q��a&&�X�y-3ǧ��Sr�'�DX�0�A+
ή$�y��Yf̭`����Y5u
��-#:�o��a}E1�O�J��:J�D��!�er��GI��K¡!���JHE{�E^����
�'&��O/���1n��m�4G�U�P��(�g<i{d�8����d�.#g�ˑR14�U
�lb͆!p���)�!kn��X��pp�4�������رc,�/�^���f$QJ�6^ᬠ��H�jI�T��a� �w18�z�ȘY�Ɖ���x�_�o|�W�W�[�yt#�8ܜ&_�U�8��<d|��_����������1:��J�Z��
�,W��-xI��ַ2Z��D)��e��Y0�s߿e��ɻ��<Ȉ��B,�4�����$T�(2�H�V�,�簅axl�j?�-��Rż��_a햑�
�6��Dp�5g�g���đC��Xj�t��4�M
g��z$**�%�\��\U�����G
T�f&֕K߲��q��ׯ�2+~)���g޲�/T2�S�W¿�\���"e�^v	�(�لng�JS1�n�g�<����������v1E�"h-�HTJuD�w���v��'��A�Ondxh�TW�ur���8�iԫy�Ē$
��?��T`�!+r�X3Ԩ�V4��	��p"��L���o��o���^z.��4��d���a[�$�`<�f�^���%�x�W���~�#������
i��d�ø"������&E���tN�Pĺ��u8zp�ݏ�c���$#�w��
fK�T,
��v���o�+_��G��.�L�3�a���N�E��֎Q���0�f��K̷g(|�\g��*!�V��ps�jZ��d�XG�`Y��ſ�B*-��
�T���ҴB7�aL��B*���nw��EY�ï僼���
�A�ms["�w%�ORII�
���ZU���|뫷q���}H�*��F���������I�DPDL�]��6�8	�T+R�(�X]�G���Y*��dX�k��e=p���r�5g���D�D���̲��?|��Gg�����9��4օ���TXe)��n�%I4��*��C��b�d�k�t=ox�=��7��2�V~��/q^��TӘ��������zK=�n:c
�z��/��z�pB/�^ݕ6�6\�V'�W%I	ŗ~�-7oa�#K��s�F�WD�Z��gQ�X��^���$�!�W|ܳ�D�� ^����	�^�,�&)^�d=Kn,�t�TT���}k��k�fb�Q�/�pen�祯��8���?�4O>�$�*k'6`l�Rg!��$���"a�%�K��g�(?�4@�obU�������/��*};���� {�?��}gO��"�BT�3N�o7���Bv{�U
�����VM�.K�tm�2���e|��Ʀ��=G+�n����&���[_��O~�39r�3��G,S0�v�`2�1IZ	{�X����>�;*�*�ߧ�]B���+Z3t�����+^�2^�����)P`3E��&��5�\`��}O$F����=������w��=���)F�ư�����7H�"�P"��di��:��@xd��I�:Y��C<�Ν;9ud*@; gB8�A�G	���$_��78e�v��Q�m�N3}t�4��V��-��$�j���0E��6G���4[O��i��Ѩ5��羀òi�f�B��<3+�W/N�Ċ|��48�_��A!�"CE',�!J�yT�Bh�WmW,�V}�?Å��,��h�X���c�ݷ���y���#���ټ�Ƈ��2p[x"Q��ȳ_���lڰ���q�
��R�4cZ�D+oc�
��B"�"JT)e�X�y�0�%Cu�&CQ�y�6���h�;��/�-<������ۙ�^��v�xb�3k!�J���-1�(I=�̗���x)���JF7W):UQ��
���'�Dx�)�<u�/}��|��ߢ��35�[��ϠU�ƍ�I*�pF��H�b��z���L�V�l~���~�i5 �z�IR%
`W.��He��k
�d��nU�w+��_m�+~�X�|�U+:���F�A{�N�����1�͔Ǟ|�/�k�o��5�s�ix��XRtrt���ʳ)��������{�G(��U���T�5�dЬ�Er`�蟷s��mf�L�����������2������������J��������߀U���~�]ݯ�)��T�	��9f�񲫯�W�ݬ�:N��E8��=�GԆS��y�C|�s_���#$qI
|L�˰�#R	�T�YQ�4�z
c��=��h��4k�MLr��!��$��
�\�r��k8�4����}�N4��,E7;jW䂙�����{��-���gbl��X�n7@�i�F��)o¢�C�)�7�AY��&7�2@�`��
ҸBn�Ǟ�G�`��q*�Q8t�l`
'�d�9/9�sO?-����5.ȳ��0ֱ�n�hT]3J���cO>H��cr�Z�<o�_r>�\r��PB��{ٻ� �VE���dY��C ��-���j� g�F�/{6��},�(�B1 �8EjE��c�@��*C`J�@q%�;���u�ۂ��A�g���Y�+,&�X�Y8����i�g����^��{��R�Z��i[&���D)և-Q��|A��{:�x�UW�i�f��X��[�eY��4�� c�:<^aC^��82�8�z\fQ�L��TI�`lj,��:&+�0hYJ�rt��5�,�f�;���ͻ�{=���|�zK�ru����
�
�@J+�nϱg�!��/_�_��"74M�,G<��L��"�&P�Ī7 Mk-�ȋ"8O������a/~���?��!W��O�}/�����k2�9o0��]A�J$x��p����'��'�4<��Y���ѡ5�8���i6�;�3��?O+&��X35�"�'J4��.Q�7��qog�����qT�a0`]X��z�WP_������ۗ���D�kF��~�o_��'��@�R��/Y�׷�~��aǇ�0Q���_ ���4�ޣ��]x���H�&@C�F̴��Y:�%W\�~�]l?�:Y�Cy��:jk�`�{_�!�ˏ3sl�
S�0{����E֬�D#	�u(9ܜ�z�//EP��E��K�ۦݛej�/�Ky�;��o	������Q��"����sK�(d�!����竟����~;G�a��ӨV���Z���
�)(|�N�O�ޠ�(�E(E�*�^F%n ](T�8EII?ˉ��$O�;��C��Z��2��[ly
r��~�ٜq���y�}��Q����"��t;-�q�=�a�3�iw�k	/�����Rν�l�l��P#E6�$�e�g��s��Xl�@�(D�������{�@uR�_�
�Qya�bI�ڤo2{dǏN�E�� 7p �Jb �I6��)(
�s��ʉ�8�d]Ck�M��CGSk6RM�X���zA��4q�`D�r�u��YN�RExA������<x�.�o�`dj����)�7�~&�X���oyQIM�t���ԡG�Y��c
��@ĊH���6'�gi��W�`lA5	���P��>���r�.�o�_sqC�Yl��DVr�3�!$D*���4VX�qۭ���l)c��$2�=ߡZ�0:6���O�Vc�t�3��-ej��B|p^,�5B���x�����_$Hx�����#�M(�8t�qޱО���2::J�9��.��F)�X�T8̟��3�u�\M����pA�E^O���{���)��Pd6�D����:��o|�V��>���x��v��q3�ube�\��K12�����?ٷ�IN�v.R���jT����HHlQ�%�(�+�ۑ�T�X�[����kn�3��f_l �'����-��ln��{��2�Hf{/���t�����v�F)i%����0�kU����4��S7�7���/?�V���%:V���:Z�v-}�1��O���������r�ӌ
#�B{�6^Ȑ eD����}�8	L�#
��y˚�&�����a.��������3����KdM �'(��ݍ��ud$Y8��[w�O~�ݏ=���$۶��j�h-�@J���(�X\\��ظq3k�Lq��~ff���DQ��l���.-#$�\[+�	����ʗ������ ��C?ϩ$%S\׳a�z��}*_��7�\����.����]@ǂ�v�M�j3�+^�+���K.����CP�;�f�TlL�(.����~������0�uP��'��/e~�z�:Gk�gm��W
+D!س{/�������1�m��g�$C��-�
�`��N�DDը%á(A�(�RQ�4�Q�|(4Z%xo1y�,@�ĸ%�]߽�cG�36��ɩ5l>m���bb��F�DƐ�(�QP;��Ź��AH�lJ_�DW4*	;`�v,,� �{!Z�Y��.7���sǰQ�K.��_�靼�mx��,�Љ Ic<��$�+"
d��8ݺ5��s����H�hw)LP��O�H��C��Ж(PID�E�����y�-B&��Cx�!���ms牴�;E��CƊ(��OQ�ǁ��E�3�~�H)ڝ�3$q�Ҋn�CW)L�R�j58��&G+�>R���/�!�[�F������gbd�N��L`��f�×��%�����~c����c��fa��-u���J�;�����Y�5�u�udY�jZ��s:yA���蔼��y�N����灓���M�+W߰��x����/�I��%��r��������o� �<�@�`UX�q��=t:�$�Z���,�e�?>w��gn���׹���Sd�<�IjQ�u�#&���?�_��_s�b��&Ƈ��]��kj�&E&!J�a�{�s!\H	�g! �6��f��2��G]^z������e�\B}m�y���#�<'���8��#`�g����:��g8��4��8E�)rK��T��`M��`\��%k&�xǻ����-H$?���2
W�Z$��lH��rA2ET*)?��^N=m3�_q:E�Щ�yO�����5Ef��
c2��޽�$�92��i����5Eu$������W�k��n���9���FSS��-��H/PR�vr����q��f����I�]��1/uY�P�����X!q!Dx��K�BI5�ҨQM���&��I��\K�Ԓ�9ѵ���jT�:�����XU�U�H�h� +V�F�	��Xv�RH��aJ�A��u�����
�&sK�޵���w'_��7�����=��=G9vh��b�řvp�t
�JH�!lJ� "$h�PB!��º�Z�A�i϶����$��uk��mg,u8�x�p|��p�o��m�L��f}����`����kO*�5�Hi�>�4^��k8���w{�?�s%=�������nF�71�z�2b�2
��o���<��~�8%�I����q.$yc�H�r�����$��q�1���i%�RKh��t�qES������1�&F����7��V{����
C�M��i���e(�����iw�T*+����XQ����r�Th45BF�
2$�%QB�g��}֌���|����������� %4F��5�7�ѹ4c�z�q��F���v��f�J�Z\�K5�`�+�d�|��4��XE��>v�]_���콑�.v���)����]�������1>w?����2�ے�[�a�9�f�V����	&֭����3G�~�v���wpɕ/AV)w�ƅ�?����I���/�����v�&���3��q8�ʢ ����X��/���#~��~R AX�s��^���/������+��]�r�X��	�~�^�K�V��`���޻v��?���.�I�N"\��R�n�#M�����k�����=�_��_��W�G:.�v�)�8:��－8�T+
�����+;J��bk��P���9���u\n�$
��wBV4����߻���k�Fyū��Mo}-���^v��L�:��'�!+�o��pm$p���S����~|�I�
����EJ��X%Ib�I�� ʿ��-�"�*4A
�
A�$Bz�Q>��+�_x~�(�S�Fz��aM"$5_��
\
˟�������q- QPd-c�!�F�k�����ߵ��y/w�~7��}�~�g�f����m�K��T��c�R�;�tx�Gc]���f������'Q*�Vi`����9x� �O�����^󆗱v�yf��>:)Q���ݐ(�kpO��"xu(&w�5�ƭS�ιl?e;R����ޏ����73:9��Bv�(.E���=�=������8��YB�xe�]�G��8��R,.v��9k'�ӈv��+%sR{zE��G��x7����nb�2L���CO�u���
O�T��N��&uD��(�ɲ!�*$`�t�O�(/^/�@"KC���*�]��_n--r��A�~��ۨT":��z-\�**7m؄��</X�ns�3�i���Y����	�8�R�P�"�b��X>z�@��Ե}���k���ȋ
������~�ް������A�}E	�U*�d�Rz
�!���L�w�I�m^ˇ~�W���]��28��JZ��i>���������!�91���jZ/������.؁⃥��?����
��"4 �Gx����k���o:�!� �>�	O�T�Q^sb�ͷ�~'����<t��t{Tu�<�TT��Ք~������z�Lm���׼����͜{�vTE�?aIG5Sk'x��'x��GY�v=�F8��H\�<}HJJ�d�-333��s���B�-(�#J5��XW %�Y��	�n�~�3��ɵoz=�~ߍ��՗���-Lln�� ��&�!��!�5đ���#%PEı��<�� yf�uZ6ob�i�� �p�� �r����_qs�ե�$�z'���r
LsQJ��<��� K>H-�5�~�E(Y����V�"V�Q�]���CC���8VhS�k�*u�4%	�+��t�z<��!y�1~x�<p�C<��^�8���3:t�ٙy(4�4%JT@P���s�GҌyf�!>��_���s癴Z]la����������^��T
k-�N�EEkr��!��-m�ӣ�x��"F+M��'�󎼛����p�M[ױ}�6�mXG\լY;�+^{%��&��*w��
� �}����~���%�cL����V�z�� �Rh
G�V�7k�;K��mj�Ud�9�4͉�&�O�����uo��y���[7mazn��y�N�M-�122J�t����xΰ~?�}O^�v����i�
��J�<�x�YC��&�$5��L�r��A��lݶ���!��:�q��G��ٴ~�
v�����4�z�Z�J�ס�j�Tl؅$7&�d��&(�ùH&
aܹ�������b�������ް����U�7���Y���\Q�&	�v���<��C����{P��C��~^s�ˉ*��l��2Q`N�}�/}�k�������[���8�'ڴ�:4�
�8%˳�&0t}(��7tU��|^
@8c,���^md�u��!tإ�D-h��2$��ǖ��?�[�xl7�����	0���T*	qEa|���	2�e�έ���o������N.gH`���:�{��I�ɩ�
��xgW\�˖��0I =`��
\���㑨H��>JK�<#+2�&k&�9e�\���q�k�`�k��(�~��P�_R�HFH!��[�WmU9đ�3|��)T9eVx��G@��\]�	q2K�$t�,�ʫ���k#��9�������C�j0�z���*�~�Y���p(!Q2�G�_��y�,JE�ҸBW�^G%���t��>x�]�<ɽ���|��~�?���o{y���Џm�P]�""��]�����y���$I�n�˞=����+�����蚭��`ǔ�HK�4�l�nHӌ�*Y7HӤF5m�v�a%Rd��:4!2lg
��>Qc�i�9���y�N�m�"��e�R�f�rGMѱ�����ރ$*F� ��ru����K��+ ��Z�j����<ݬM����#3Y�ͳa�:���x�{_Me$ƴ<�'P�`l�0k�L���=<��#T�&����(��0�N��t��Э�S
��1��1Z����'I&���*bnn�ݏ�ahx��vlÙ���<K'� �9\���9v�8���7X�n%'Ṇ�fxh!"��2�C�¿@à���ʶm�����?�s�U���^l �o��?��x����%����y�E^ �BG��2m��y���c|�>��>tq%L�R(�	\���#K�՟���鯑�:��(��N�W����Z�N���H�>�!-˶o�W �h D��]�0��%�Gs}ӷXg02y���m((�4bq���w�C-��nb�n�C+T䙞?���a&�
���_�;��f.}�K��W����-*����d�n|
��w�F��($��e������%��:���v:��q`�"<��8BK�(��l���mlܴ�j3��������>�RJz��~?��҂�8t!�a'=�T�}O�>��]�N鴄����*/��x}U���
��v�B�x"<[��=햧�U��ϸUf�kB�sZ)I��{�/!Nr�s�2��/���cނ�4J�2
������tQ2"�a�N�*I���`�%�z9�-�ϲ���<��]������{��;���o~�G��O<��s'��,0�;��6�����~�>1�Y@p(5�Q#��0�ʄ:w�ͱ�3���$�FR��q��䖬���D���a;�*i�7���D�t�-��^�u���3����9��iTY^�
���Pϊ��I�֣�"�sZ�6�f�J#���#�;ʩ;O����N^���S����Pt[XD*�ܼ���7"
���9�>N��4�
���,+��Q+�;�NU?�pb��*OZ[
�FBxL���z�=�,G8��u�H��9��'��R�qƙg�eX��KR�)2Cm4a��8G�9����}֌MPI*��3��0��!^�!}��R���6 ~9���?�FJ�
�W�G%����]8�|w��^}���gd�I޶Di��e�щb��_�­����1wx�M��QK����V�4�P����}��Z���7H��{�21��V}� �$�v������m�V�FL�;��VSXCa,��IS��Ӷ1?�ĮGcia�J%�RQd�C�;l�2��oy=o~��9������>Q�"��E�"���J��Xs=�?���|+L�B�>�eŽ�z�����[ �W8�ܝ�UI��H!�E������dY��A��	���%Q�f�ˢq&�%��C%�|�s`�!����|��_�߸�'ك+$�C��"L�aG?��W�HH\��T�� �D`�����j� ��'�C˟׏{��O��zqR#�ʤh�׌@�eܱ$��Q-#4�-e���#�V��Q��P(Hm�;N�

36:N�*Q���ը%���������G�����9~|�jZE�~����$�]�&οr2���N�I�~�)<�=��8��~�{|��>��}�����0C�!����p���!�V�rE�b�C&A�iq%��3U�-Nw��~��ó$q����t�t�'N���Hrc��{ĉ�RO�o�ql�0�N��{��N���WRN�,��4tP���%X�}=;��?Wp��q
V�a�/�Vk��K�������A��V��+׎G�`�
+�=�RDQL�/h-u�t��Q�ݷ�c��شeׯC�H�)�Y�sL�c�ƍ�ٽ���3��M��t;}�JQ*&/r������]"_s�������:�Q� �?f�Q��������$��V��F��@���� XI�n!�`�}���ҷο�\~��d�֩�lW�@���BН���go���'��2E՗�W����z�ϟ�ZI"˻��R�:��'����7 �����q:�>�9���O�B�i
_�[�uo
�l�����8����S��Q�D̜8Lc(�+.�mﺁW��e��c��+��$�(�	1Eߒu,������;_�����O��	9	R-� ��=��/�6R�zK���g�`b��9�Vd�� ��(L�+�V���
q,ё 2{�N�~���1I%&���Tw`����{o���|����������"*LMl��6�w�`Y��ЈU�*B�G�Sߡec���:@
M�2/�_�����2�+V��/�0}-�yqr֚�+������38|He$a�T�(B��2c�,��dH�3�#��������2��6���fd-k'7�nj##�cH���h�Z$IB�F<���,�-!���������_D)��#nF�����*���m���{xb�^:�����Id��PJ�Q�S����^EA��`��5�(��r SP/�����E�������'M�XS�p��e��<�O^%Q����Rg��u���7r�ۮ&mjz��h��C��������c#l��L������2aY+M�V����(�����8z$V(ܪ0\��l2�5��&�h�;�gD)Bjb���^/#��,���{�)�N����Bf�'e��`r�c�1��̰��}��1>2�֕��)D�?|���;�a�=���{>s�UQ�W�?f�ž���=_�蟍3�|?W�wҴ#JG?�?��Tʀm�R�\��V�^�f���y����/;�~Q���$���Hқ�|�s���|���%֎�����=�"ma�06@Ui��%��N�k�ˌ�@���la���[>~!V&��<�U�GJ�ܓV�8/����t�>۶�drS�g
,9��P%DŸ�)��&y���y���~�^��Wq�u��%W�����`��E'
o,�����:G��}-��Ϸ�Ϸ|���9�i��y<xo���x����O\�)\F7�y���8+�-p�`�!RiR'�""��J�L�˲2�F���3L*uT2�<v�{�z�/��|�S_�w��}O��Ú��T�&#�q"Qa�D�b�W�������W!⧵g?� �U/7 ����J�g�����Y�U"
�$H��2S���?���>gy��$J+�8Ǭ�t�]ڝ6R�H�BC�l� %�$P�`��偁o
0�'�,�v�4������P�V�ժ�/�s|�w�y�w�Ñ��v�nxj�j�QH
:���Y>���o���X8�f�9���L�xz�~�|b/��?���"���ѱQ�j��c���eA
tU���#�
��>�<k^���,p�w�e�D�4�`��d��`�l�2�ι�\	)���t��x�H�cM���|+���{�x�[_���
�v���Z-B�p�H�(�D��u��-M6���w��=9����Pc�֡�ZՔ�^^���B.W2)�I�~�2�x��8�O �8��*�����h�<{�=���i6Lmabr��.��, ����l�\��Ï�Z��l�!����K�c
� x;�����i�1���u����_����sW�p/6 ��q&g�3o<Srl��B�u�[/~;ůb+�,��2
*�i
�cMA�u���(	���}�%�]�6���w\��_s)D��^� �5Ef���w��O��g���0=�,��ך�	7fO������b���t��X-�}�&"LN΅<�$�E/�5�>�`�+W1�K��w��ߐ&���������~�z��Z\�0g-�Z=4J>��o����{�}����򆷼���p.�����Q��u���/�W	q�w
{9���>��>�y"� �&V	x�
[:�))��O!5:NȍA��c��6C#M�;�L*Ո"�RIS�,���T�g9Z�����T���������k����~��|�����a\�StE��Ԓ�vF�SҤJ��у�M���~|Ů�/�pq2�/���.;����ٗO�+!Փ���g�9�d���x�`��YAV�tC(M��V�J����>7uG1I��&U��� �J�'�P(�*�@��=��$I�Uk,.-bl���(Y����D�� �bj��^������ �W����$�1*,����|����HT�T���:õQ*q��g��Y����}b/���إ^�S�k���t%��Ƈ}�7���6�2 X�>�]w�G�D�JR�$��ؽu(�K>�G���9��U�q�wH-�>�K�4�*���W��w^��yV')����>Bz�(	d��9���è$
6
l���O}��G�Y;1IQ�`t���K}w���$j�8I��R�W _I��Ӡ�1Ƒ�~?�Z���(�f���z�g�:Ⱦ�Oq��069B�D�'�5./P�blt�={�����,��RGt:m�HR�q'���
׮��'*�O���"���9-�U;F.���O|z�#|D��������W�p��i��o���P�������6 Ly /���"ZD���:�~�Vk����+�t��S�0D5I�,"Sǻ?�V�{���UEnC�O��!�'Q�~�{�����8qt�S7�7��3�Ps��1�B��x��82k��#c��e�6챕h�5�)c��6V�ۋ8[ШW�@K��
�:*�:R)�"Gi��4�^�D+09y�gdd�����>&֬㌳OEK��	�"�����(��H�0�{�Y���ױ��S1dH-Q�0�i�.2H�d!Y��q�Ǿ������y��X;<�pe�H�� ��z���~�%J����Iku��x��2%����L�i-p��3�f�C���_��DQ5D�:�($Bi��pFљ�s��G�������W����0Ӣ����D�JU7�FM���Q�D�l����xiB�+Ez��/���t��+��d-�����U2�E�!�r��KϪ|�UM�(����'M?�	V�%O`�,OP��O./'$�١D���K�*�Ћ3d�J�|0�2X�5XS��C+�T �G��30>��9&�#�@G�l�5����"���9h*dm�����~���>��m�V:��O��W��g>O�.��y�($>�\���z� U5��8��0����y�I\�ɍcTGSD^T;��Zy� ϯ,�B�������Ko�R�6��!�S%B����#R�$�ɳ,4�QL�j�+
K��͈��r-����������,�|��VرrGu�:��ABBH"	I�`�l��>w�{��{ǟ�;g�3c�l��B !A�$���ԭV�\;���p�x�޵�%0��s}�����ڵ�Z������}��̙
����(v 
<&$G�0�I�Q���Q�J]�����7n���X�jZ�����LaP�̷��/�@�'F���$Kz��za�UC��c�� TJ+Ma
zY�(�hT��
痘?�f��v6m�B*A���d��PkV9{�N|���<J��$��v{�F���@�HE8��u{($�j
�L)�.;-r���kƯOQ�CI��{fe��6�� ����������H'��]n��O ���ү��$*�π$JPR���Dk�'��t[��1$���d�Ǐ>�Rw�7������"�hZ+]�JT��Z���<�G��w��g�6Cg)Cژj\#/Lh���[_�Q�E�W����S{PGK>��3K��1>�$/�,.ͱa��
~��ș��
�c�����ӛ�1J**I���yF%M�"N	����m�@�����D#��f'��c��*:�XW���N ��z��Tiaɖ<��Wx�z����R�6Lm#�B�T
:�H��#���.cl���n��Z�䂼�������`3����hZC��
',� EZ�xD!)���cy����g�Χ>�y>��ϳ�����	�n>���$�r���2�@��1�	�E�vx��[�nb��-����M	�	ɪ��'"�\���*,h��A�i�qZ?@>�^�����]B	�bĥ0\0}�*ܚn��W��R��#���"d8:Z���D,J\2B��.�o�I��	��I�����Y�<��G��[����܎�
�0Y���B��D�����:ݕ��SK�w�}<p�͉&I*Xi-%2�^ ˱�3A��<x�#�����w|@ؚ����ǆ��<ϱ�P�ը�j�����RQmV8�p��7_�uo����
��R�JB��H�צR�
�-!5�
����F��-?�֝���wE)Rh�̐�_,�k�0;P���*��ʢwP��T3���@U�I�u�(�i�ϩW��ġ#�:eϾ��V11�HL���t|���)Z�m~|�}�r��d�>���f.�p��a:0 ����؏�����ا�8gM��[k}�>3��V��.����;����|	Ą��SC3 l��UBQ�\���p&i�����Y�c
�m��ĉ#8<��c�.c���rw�K/�����̜9N޶x$i%�B�(������(w��>�*�Tɺ�DWPBc�-�nD$S�Z��;�#�����R��U�$BiO�z�����PP؂��2i�F��d�ݢ��&)Q�H�pB�c
�j�����'�t��ݷ��M5���<�j�&C� hq6Ċ��VG��N��$"�&,�wVˈ���}>�W喛�I$cf&�#�T�u�Tt�}�Mڽ�����Q�̈́s��Kc��1��ǎ�@�4��)s��m��Oq��Ϥ�h�2qfґ]��`����.���o���]�M_��'�8�������+c��csK�ޤ�T1EQj�m��-��s�;�ɳϡ�o�JU#<ɪNi�09*�{���ܗ�`�O�~n/�����4�1��?8�ˡ�II�,��Za�����@�
=#�U����L���͏�)j��we���ǔ�0)$Z��R���i&��W0{r��S���2�hGq �
�1bu���,�K^��g����؉�<��<��C�Οdjf�����N�����l@�<���0w|�~l�QI*�ܔ�RymB��(��@��>c��@�P\u��x�u/c���Xk0���!u��&P3�$���.���w-y+����>>��$DFx#���1���MK����YV�5��i��5�����C����y�@G	*��EΑ��i�{lٶ���MLn�w��i�b6l^O=ir�����_`����Y�KAT��&*C�rS� �yR���`p�Xo���{f.��W~���s���( �û���c{��3�S�ӫ��Ö�A�5�ġ�mWV�Cb[�����D�!/2�pLNM��4��'��+/�_����u�6�CG���0Y���_�c���ڭTd
W�m����B��$�y[
����.�~���^��EE����,��S�G9s��{�k�\7ŝ��E/Ϩ���Y�T�J�������?/>����!�T:��6����R�ܱ��To|)RU��<��d�w��s�x�4�=8˧?����o����̦�[�~�Y�<9�w095Ea�3|dy����j1o�y�[^A���֭����^kR�U��:ıfÆiN�cv�$�}6��lE%kd��-�Cw�/��?�n��m�y�=��-QML��0֘B�od�W��|��e/\���@h\#�[��?ŵ�Fڈ�<5�a��,�H��'m��C�_	�Y}/G��'|�8�i����{�w���
��Ǫ��} L�d�p�х`u�py��H���-~�^�Hn(@�y���(X��
ccc4
�u���4��i����&��$��6j$՘�G��G�z�6.��B�R8�@�D�TVH�p�����ݷ�y��"�H�`u ��ZG�ѠR�pr�$��2c�c8�XX��o���ڗ��w��6��"��BFc
�􈣔$�b�G�n�K�����Դt�˗?s#'�͑FU0I�D�6����t�:�B�Ͻ_=p�L���+PzY�i���j�F�Q���q�����m�`'�:�S�J���Ex��������bfrմt'�"$1�Ҳ�
B��H��-v�~jP^�R*��T������}��a�k_ \�u��3h������u&Ff��F.r���X���Y�g~i�z��cf��ؾ�~�-���_���+�٩�Y�2|�C��s��{��Id�XT�9�ܓ&U��<ψ�@&�T�Q�h�Lx�t;9�~���PmF�M��'�{����U����v�I��q��p��)6m:���7���L��c��D8p��(X�T��*dX�x�h6��=w':�8*
��^�
��R(��:����YI�� 2ɭ_�����Ǹ���h͵�_�x��
��6�%)0���,w�ٽg;���7�근����Q�䩓9z�$�2==éٓ8k�7�,,���u�㘋.��J%�����y��������>}ߺ��<�����F�7���\O5����f(�i6ƈ�
++m�,#N#|	cr#$��lދ�O�#o�ٹ�4��#�]Q��d_,GP�÷!;`��G7��,V���hk_�^�k�f�߭Y�i���!v�5�|����(>o?b��}�)?�KLNYt�@
@8�߳��\~����ᏫJA�G4�.d9��,�3�dD�l�"��T��>m����
�q�;m���IT$щ���c����T����y�e�DEn���{���"sE%��^��xI�f(�s��8C'�P����ɅcHe��w^���|��{�N4B
��`JK����v����R	/Q��_����w��N�X��i4�G���G
�a�' O���r2�I�����@U2�y��>xǩ��'
v�{&*
�.3���-[�`i�Ń��O,�a����<�)ʤ���!F]:~�=�&�멷�5��l��4
�u/ ��NSS��ч8TV�)-��=�y���`\��G�OTx�;^�󯹒(	K�J(�EG)ɭ_�>��/�ge��ƙ-�Z9�d�$����L�V�J���R������[�=����p�(A\�H�*���L�k�;��V���˱�М��s�NZ�>��#�c��h-��N0���
�$Ia}�r�R�;���;��Ŧ�fʓCPq�@K�R��[Ad#���y�.������?�˽w>�3[iV'��fan��j�ȝAǊ���uM�}������wx���ὡs����ٻc���w����Z
��n�6�(�|�ض~���O|�K|�s7r���f����ШLP��QoY�`r:VP�~7����B�h��@����Z������F�����@���)�¼'5���@�b�\ex9�>�?�����Ox��U��D.W��a��P#�F��?�m�La�~�C�����E~��Tv�lz�EY�5�B�Y�㼣^�Q��(��v�MQ�n�O�x$
o�0���-;
��}f�����_�YgoC�p�J�p��(�/3D,w�~7ߵm"*I�$J�as� ����m��hNԉk���G@^�����M6�=�bFS>l�J+������J��Q�\1@kk|.��r�׾^S�j�
���&x2bU��GT�#W���y��կչW�}Q�QB��(�ɲ�V�M��d������wr��A.~��Lm J¨�9KTQl\��Y|�!Z+���9@�D��U�?m�%V�\bm��t�b���
P�������j��i(1���������"����
*$���uBį+���W���xϚv�̅Y�{p�y����+�{?[�oG��Z:�5�d���n��U�-J���5rq
�YĈ"{��
|�(U�5͡��Q����{+W_w^;�E(�غg�}6�����=�����q��n( ���Z�C��8�� ��$Í��t��/zZP��򦖂Hk,��Y,k<I$ɻ}�g����b��sv��taU��x�e=d$Hk)s˳���>o7/~�s���{#;�݈5��rc3TMS�T�����G9~�����7n
~����]䖛��?�1����:��l�U��o �+ԫM\�Y\X��F�I�V�K���R!#0>/7�|�ap�����ˀ�Q:;~U+�֥)�2
��zz-�ϟF��z�i0�50W^O����V�~
�P��ރ'�]���G�*&dX�ˑv�j�NEa���}�ї��
�z�2�-���(�B����y�.O�� ���?l~V�� M*!�Gy�0�/�Ӝh��_��]<�B�3e�u�[������{#v	i����K��@�[p���MF�j͔���|�^�<���ob��	��.�А�:RXE^�*�p2�rC��h-di�T�V2�w��s�CHb�JN#Ё'RB�z�a�K���g�W�K����Z��T�R�^����F�Q��<�J�"VVZ�qD��be����OZ�J{a���L�M���ayq��$iL��(�g����b�Ѻ��C�l���(���Wpv��_�Q��u���珮�d������?5���-U�0�G��,�ͩ�+�ͩ��_p�e��7��M�fp�"�����#Mb?t��?�Y�����0}�)�K]�S�̒g�Fc�,ƙ�(g����O�03G��{DQRV�aU�|A��L���J=�z��y�^F:��DU�P��=��+l=c+y�f�D`��O	�ɉ� �Ɋ�(�)J�`�^���r��	��	v��IT
�7�u�p�X�dYA�ס��8��)n��m,�\ff|����,��6J)��t�-�E'x����sw�?x/���Hj�N���t������
��1�n����
B��$�0�VH��anv�f�1Ax�M\���~N0�Pԫu��*�{�~g,:�HV�! ��6��b٢紙��r%�c`_�=����эx������K;�b��i��H�1�H�W����ѿ�?lw��G��*���ה9~��+��$�S�F޼X=-z1"��F"$J)J��~(d��;�hVϐ~u�AD���(FkM���:]��~�2�o�Q!;�OtxJDT��{��6*�T�	��ظy=W>�2�m�J$ �z�t;}���z�0Q!�Ұ� �:Ǝ#�+P�9"+��q��.�o{-g���n��R����mV�f@�;�u(%Y^�9u*�k�(Fk9��RF��l���ǱEpQ���Y�D�)p��Ű�R�P��T:9�X=����5���͎<�AW#E]J/��k<RFDqJ����tټiQ������g�&�N���w��ѬQQu�=���)�RT*!��z_|���5݉�B?;(H�tΚXW7��������<
�u- �9�#*]��3�i!�F����i��	mm�J������j=!��dE���S������\���I�"�7dy-�f�u�����~�Fe���Q�.����4���˭S�8gX^^����2��kLO�8�ܚT>�GD�n�D�{�����7���1�n���pt�)�+��+.�`�����}���E6L�G8�u�j�B�^������i4g��04�
�癛������n�DhEA/��'�	��pΑ��x
UD{�$�s���!��j�ťET�7�p��!?�o��U�����`���X@EO��Jz��V�хd��38v���?H%��U��r�4��8�N�KhL�c����=���*����:]�	M�$Y�ŏ��q2Ta����X
<�#m�R���7=�	kb��2.8��J��<J�'.6���.��s҄B@�2�n훥���s�|������l]>�:�
�K���i�p����a��/�P���w�B�}9��B�-Wr�ँ 2�A��a-	�I��\?R �c!�����3j�*i��1Q�6y�a�',+a�S�uz�%o�JC?�����q�Y<�+hNV���}��j^�Ziq�wo����H��DIH�#\	����3=t5疎sޅ{���3�.:���EjHj1�����^�) Mq����wr�=��m�6�D�l
(�mp�O,����b��2&wa�,7F�B	t,1d8Q�.�1��"�@��:32�z�s+W�$k����Vig��Fɘ�r�$� ��͡�f�֭�z=�,��?��]�8s�FH=�n7�� N"6o���C�����$N)
vj�Ba9
I�$����n^" ��T������������_���>�����3����]�������w�N   IDAT�ӿ�c��A"��x[�9�@ꀊ��i#�����SkV���}/~�A�$^��T�����n�=��}�L�~b#Y��
��R�$diS�)AK�b��^΂���y��&''Yn���u���rC�SoVȊ�|�W����M�alK#������0���V�ܡ�����q�m<��~�cԒZ�'���8&��:
�2kBd�T�i���Y�;�9{�e|�N��G���l�%�(���"�)g��B�"n��[�:u�
6`}AR�)_8ʞ�v��^��0����!�$q�C��A��T�x�=�z�cO���!�[���{8E�T06��mX�<()��a8%(C�����A<$	N$ΒEh׊�����Y1ĿJ�*����X�(NR�j����
��`l�ņ����7!�a��[�txe�]��v�]�^Ѧ����[�����Y�.�ܚ�Wt��M�����E'k����-�����-zy�~Ѧ_t�L�~�
?�viu�Y�,��-��.N�L�I��jxq���y���d�'t�=���8I���� �*i�~�^�_U�K?�<'}���T��H�ѯa$*y�Ypn��?}���kD�LNR���sb����s���6��
�p�"�+3�$ǎ���~��GNلX'��:t;��1^�_���+<��+x�！�/��� �E䶇)rҨJ�Y�=C��I����x����q�p��M%��hb�5^-F��=�q���.q�R�5�Hz�>Q��6* }�CE'
�~��qjcuNΞ�zO���!MR�8��na��V�!���뗱�j�6^�*�XAX���B��u;gE8g�i�j�,�q�w��}l<k��r�%�UpƓ�c��p�?N�ߦ�鰸�L�1���N�S�M �����pA;����ʓG�G2� �9��]��x@�:����z7�|�k�����vkĿ���/��ߨ��ŏ�ʥP���0�369F��0�r
	.�e\��1�3D4�](���;����_"��כ��1)΁��֙�Kr�!�'�c�3C]�1�
�ZKZ� ��ȱ�4�u��M���q֐�b�8�8�>o��7p��abk�;PK��Rb
A�g��i��u�?�ӿe���u�V�| ��~��Tk5R]�y0��h�
��� "��{���}����uH���H�G)Gkl�%�E<��g�k��Ư|�Vo!�Ocz���楼��c���!
B+I�8<�n�~�K�R%�U(:9�b��J��o��o�z8�REz�s��8�~��_r��p_
���ףT(�<&�Se�N{�pF(�H#�C��}9�̟EY<����R\$=8�sS��!<2�HE �1$H�Q:d@�Ú�,�����E��X�SO��b�XS�4HӔHGA쩂}rr��X!��FZ�"�{�k(���eY�S䡣��g,-/����OQ��8kɲ>Y^�mVrҤ���8�j�����XVz+x��j�n+��$RK��t�	*q2h�����Qr��(?��s�p�$A
�+sVŶ��~��<��GKI���m��g]|���P�&�7�ԪUd"h��Љ&iD�)z9�ytEI����8�J���lY��v#
*���Gq"�/���~�\p�VPYt=���=^���TMcś'�������w������$�m�1�2;ĉ`�p���=r�f<C�Ѥ�(����BjA��D��D�Q��'��W\����f�ݜ����z�m��kgl�ʉc��ή0�h�$U�Y�4�F�N����8�����j3tGD��8�\���z]�T�&^Z�5��}���f��غwE��s��[���s����
���`y����3�:�k�!�Q�f�����֗�� Uؾ�u���,��3]���X�� ?���x7������*���V���j����A]&����b��	�������[��z�bz]K:��ZP�C��N�������ϾP�U��ma6�j��F�J����N��z$�Y*q��-&��H+1+����9]��i��k�|
�g51}|��>N�T�5�ӡ�G�m��O~��}��+�ܴ��,��j�
:	�����e��Rť}H�h�`��u��
_��78{�Y\��g #�+���X����F���:�a|C��x�˙�?�Wn�*�f��/���/}	Ͻ��L��a����~�Jqx'��
&H������_�����M��9�&7Q��V񳥠'�<�]R���N��f/�E��;�C��A�R1΂��G��J��
�Sa��X�6-�6t��zks��j[!�$��Xl/�j-3;7��h֩��c��&��ǩWkĩb|�Fs�J��`fj��x���b5��m��hT�x��@!.KtU�΂�Sa3*
��XJ���tq��䖬���ui��,.γ��be)c�D�N����aiq����d�>؀��R�1�D�R��&8����,wZXk�:&�b�`����W�|
�)ͻКR�-ï�!�G�0�'�֌�B��O�8��T8lp�R�� q��]�?���r�ޭ
��>J����@�����al( �J�N�C��Lm�N�Yg~���ǹ��Ky�k_�9�؊W�9��#+�Q��:��*:�9�D�?�_��������Y��MP�p�yJ#uL���
x��=���B���uDQB��0���7]:E{�̙�=��[x�ۮ傗���{��-�Z�wn�.�bU�RM��+e�H��*��H���ǉ_3$ދR���U���A��`�T��!|ĺɍ|���m�f~�߾��x�b��J"
'�.�ε׾����'h-/S�����J5�Ï	��С�Wł?� [���N����}�w�fN������O����7Ǫ�����ѭ��7�a��p�ˀ
H*1˝y�Q&�ǹ��W���mx�Hc��	�'z|�S_�;߼�3�����!��)Y�@�x8?�a���p�6J�ҚN����gl����>��N%�^�����E��7��4����s�ShJjL���͉SMZ�ȗ
��O��|�M3��E��c�It��:�I
R�یv�E�Y*i��:�1�EIMZ�`�C����9>������M�hE���&��q�9(T<[�n披���'dӦ�����W�ܷ�����]�U����]��a�R	b=�0{x���v;_����?FX���Mԫc��]�~�F��=I�`�)}����5l~NL�H�@�
�la)z��W]���
���V'%ĩ�Z�u��z�A[X�%����b�!�(��s��i�V�J�h�_7�ާ�Ѭ�h�Y�a��ֳa�zf�M06� ��	:�T�	QM��;��d����']� ��X*�O����Y��=Y�G�������V����q��)N�Xd���s��=��-��~�"��hP��k�1���VkC2�),����9Ί!P���¬�-1�rdPjgJ���������3�y�I%�J�v��>�'36����]�޳�1Q� jx��Aj��Ц��){Σ��Z��]G��B2��FsG�䲧󖷿�=�mE'��;@������D*�Hq=���.�ȧ�妛Y?���;v��1D �G8^w�e���Y\\�Сc�j
z��</h�5Y�8r�(*r����̭g���x����E��Go�����_�46���;��w|�Kw=�������K�-j�&RJ�����(��Ζ���HP�O~�2��!�(I�@���TKF
x�Ƨ1�l����o�}�f�y���*�Z�T�p��7��G���wlٴ���B�:Z���Q9j��H~�s�t��DW6d�����o��O���� <Ֆ��}�e���,ԟ.w��.��g4�uՉ\��,xG�ct�YZ\��׾����(ZY�+�2�#n��w��o?����lX���b��6��"N�ܖ�p!;9�����U�,Q�b��
I^�x_05>Iw������_b߾sx�[_�y�߁�]���P]+�V�mH6�[�O}����_���e��s�Bq��|�2�a�<�3�8JEP�j�J���R�(JH+)Y��9�n����Q�����ҧ��;6���D��"eB���@%a^�#jh.��R�7�1�~����	Kڌ�*�Z��.�V��7�=x���x��|��_����oN3Q��Qkb
�r{o�f��<��-<1��#(SN�¸:�\��V.�7"l>Ƞ�p�Вwf5D�B�e;,B;��6�N"N�z
�5356o�a��[ٵ�,��yO��iԛ�wĩB� �R�3��Ճ��올�v��D�UE��v* �F,Pރ-K �G<	e�$e8}[��᧚J�J�WWwO5	rk����?v����N���|�G�X�[f~~�N�H�n���CQXƛ�$�
y���'Jq����80z�W��C)�Iڧ�56
���)���bZ�
�t���]�ة�����\r��<�gs���P_��qβ����0��Y����n���E�ZĆ�zf�f��������F��j/�p�����r��Ri�	�b��p��E��o?��>�%�m܎�ШUٴnC�� ^r�@*��*ќ<>����h4񅢟uQ��p!=i-�R0�|���7���}�~�%�nNg�G���5ϙgo��׿�{���,_�ȱ��!�Ԉ���Kx#�8֯y�Y����BFD����J�P` �S&7Nr��|�#_��-���O#keyN5�"�DF�7^����[7�Ϲ�H�pb���Wc�E	�r����Y+T��[-�7]�����������(��F8���7�������?��w�/�
u�B�ik������v�=�xΥ��ۯe�l�(�K��B����y��9���l�t&΄cb��U	�(���
/�5W�`�z�W\��$��6G�A������uoz���y�TKTT�Z�%Zjz�rn��v��������u[Y�_�V���	��'�ŕyr�#Ea;<�T��?p�jRE�$�e��Z�`l�P����dc����D&��S�$��ei��xj5������iZKm��c)G��CG�8J(2���$+����}|����/�
E̶�;I�y?(�Mn���^�1�h`��N�;ܳĈe�'�i�~s9�~
��y��i�f{`�)�i�P	�!�!�=�E�~�&/:��RY6�1��M�l=s3_v!�|��x�;��+_5�>�Bv��J�����z��x4����C�9PL�\6��}�æ(ΎT����|XȲe^��D�>*$W��+�-�@���Tf�Ά��kl>s�]�n�y�\��^�B�}����s&͉
����.��K�զ�^��9Oq�����/��u%�׻0�@���HZ~��[�ȇF�@	E��	� �Ţ�"tS�ֈ�
'����c����q��<	)�z��Ix��c�~�`��7��3���D�F'���[�m���m\��Q(�Z�0R���KDȊf�D���׏��O�����J����K��Ͼ� ���!b���D������~���29>IV�tz*���X�~�a�3���x�ￅ+�s	���J��*��& �v]x�v�e��<�� J	֭[�)�~F���G�����	?���խ^X!VY�Z*i�8NYYi��D�����H!�`�����tE�#_)��>�ts?�������PC�Bp]��oV��~���ȑRK����}��qh��ʭ��0*�{����E2�K�?)��5�km'e�ݗy�����c����m<����:�'�8o��E1�:�͟}�;n��mg�I��ge�G��OL�'�3t�Vs�G��kE&r�����Vڎ�D)�u92�م�L���m�|�{�%8a��!������{H'���X1|�+����=�MlDQ�
R���^���G�*����=�VZm��ȳ�b"�
��(�t����wٰ~�Zʑ#�9y�8g���
g�#�e���y�~��Z`lHe���ˊ`-Jt�����~|�W<q�$����|�o>���2��@�2������
-�V!I��t�
SP�T�RCb~:�n�a'G�*(�Q!��X���P�ǒ���TB؈Yѣ_��.'N#�7N�q�{�=�k_w
�~�5���Ws�����sΤ9UE�R\�<"��a�.Svq�`ep�b�c!d����;G������t��16�%�~�D�}J��!!')���X~P�J�Xe���A
�9�q�v��ʥϻ����������9l?ki|�ZGt�VZ�t�� ���4IK݂E*��A׀�Xk��бQ�7�O������:"��^`BW`���H�T�4cS,�/����η�q;Ţb����K|�[?���Ks����,�N�§��;~��<��#��f����*A��C8���'�$�����������d���4��:u�$V\}��8登�E�B9|a@b������/�����L�M��j�/�̬�&w����m��?|/��2�����,БB*Of�Di�ǳ�6Ml���gqq��X@��RK��D�0&�B���FN��6[��!�n�R)#�
ź-��M*ɩ�S{/8�t\S=��.:	X�������{�}tV�$e`�w��~g<D��ۑ@�Mtes��z�ܿ���KXЯ����S^��B*���'���b ;<�YbP��V��җ]��s���'I&7�UM��Lo���_�w���IHt�Gge�ə�Zu'=V��WϿ\hBhF�\�1��a�Py�����\�
��ܧ�yT_RiB����_�R!U���;�s_��-~�0�v]Hk�G��f��4���j���w@y.�♼�M�!N+L��p�M��ч��j3^� �#z���T4Ɔ��4���[��Z��CG��g�̆��9k�GiDZZ��{�(Jj���`�ޗtB>��Q�C��C�q���[�u�mg�Fڔ��.�$DQ�8V(�ʼ��#�'<�j����
�<OVx�a�`#L��p)�Xc�l�3R��*k8Oa3l�1?����hNM�a�z�ܴ�3�����g��}l�1IeBQK��H���y�����A�W�d�0`Ȏ\�Usۀ��X宕���4��O��-��Rp��X�{�p.����R!�Q<ņ�8,]��� ��=x8�R�n��Z(���V�pƶ
d�`�x��/��C�q�����#�2?�\=������V��(�q�-��2(ȅ o�ړiH���yh�Hx�1h��:�T[��
򢏌!�j$q���&_�)z_��M�w�ÌכLOl�߅V�K\�e�iٺm+׾��\��Q���ZD,A�W��s�E�Rf���$���~f3�Hp9�ܱ�
lڲ��S���CiY��+s��GO�UD5��L��Wj��WX�.�e�����p��.�(Osz��'�g�ƭ!���"r��W�~�6��������<��gE�^x�yQ�b���y}�H��/;�B(�"�\��J�[��c,/�����2;�m抗\�J{�Ze�8�1mG\���E�s��Q���/�9�Vm�CB�������BA(�����ݿ�w�e֒�����!l_}��&Rɿ)\n�/�q���BH9$Ye&#3].~慼���`��	L�OD�E6NRn����П�-vE15����y�����xEa��bQR���xU���x$^��֋U���7�!N$^Z;��oz�oq�o��j#��=Q]"��I��&7$RI�}�?����A��&��2
�o��b��s̷��Y��淿�3/�Lm]��36!��ر#,�/��C���F����<�����'N��vi4�!x���'&8��s�:E��+���-N��q$5XX^@)IEG�Wz���Ѩљ���G����c=p�jܤ�#�����e��2h�9W��2�VTk�����A"�'��@>�c�ژ�UŜs9PWi5&�F���7���?� ��g=�Y\v�3x��^�+_��}�%\��=l;k��TJ��H]�lM�ė!sA��aBY����Ԓ"x��K�(�)�@+�da8e'#�\����;s:�J���#W�v�Mۗ��Ŗ���CN��l���0AQȒ?/�)zg�ؒ�P��H���6��~�8g�9��]��g<�v��E��2�0ρ�����REDq4��#�ȠRI"ob
�^�tG��L��P�Rf��Κ�L�S���W8�QH"1V�`zr
SXf�{EɎP4�MZ�z��vn�]�v�����AUh�w9�G8Z�G���x+���a2X����'	��s�^�ҫh�W@��?��LNr�h�o}�<��!&cd����&q5��G�#�j~��~�W���Rc�C�GN��h��g��P:t����o��
_���OQ�6I��HE�q����� ��(����H�+]"��ś(�g�v�K��$ϲ�����8t��ǟ�闞Ϻ��N!
��&1�k�?��N��$H���J�B8�B�㽀Ob8��*
W�����_�.��� �p�8�k�B�O����~~����rq�dYF�$�E��+V:K���1~���qΥ�A���"C���0��������;6���.�Z���Ɩia*ĻO�����k��΁s�"Dq�J{/
B;���m����W��׾�e��Q�ߵ��DłN������$��4���{�������*��8Ea,��T�+�}��'��i�8�?���d��g��ʨ4b�����u�=r���c��J#�#�2"NU�n'��D��~f8|�0�f�=��f�#��09B8��XW`��'U)���W8��2������>������x����"%��!��f�N�W��*\����k0)%Q�c,핀%�Vk�kn
�����XK���@T-����]��E�8y�#s�[��ꗿ����x���g_�9�f�1�)Q�������A���CR��b��ރ��)��*%�:,J�\$���/����?�"�4�Ѵ�Ѕ2r�ba@)���U��b�6�-�I�"�B��ЫDx�)u�:��	��.UՉ
�g��c�6ξ`�_p.]�4&��Yn-r��;y�,�F�Ў��Ό)(
CnL�/��(���e�x�� B���b��-x�R!]�@H��CI�4ZH����2K$4I\!�B�n�ʓ��k�s�6^��W��W\J��Z}���8X��u8G���L��/|�F���>@lL�m��ҧ�V�Z��ws�K����^Q�-&�!��Sl_ SŽw<��?~#O���N�)K�Y���7��׽�%��
�R�V`m0���a�2F�����3�"�'qF���p͖����%&���}4s�m�t����<����CH�֠��9��&5N�����r�W%gʂ�[d��l���o}�6�j�j���B�z�A�RV�W�E�0�����u���k�/�5��>;��_yXЯ� x�sޭo8�{�����TW^]�������Q��#'��+Չ&�}r���5/�ſ�\��"�v@(ӳZ���g��W��ts�t�~?#��x�)�)�0�d�:�ş�3�~��G�y���8�I+1�Ks�ej�8�>N��/�o��ug6�yֈ�bM��H*D��9p����'�����af۷�by��T�~�'�FXm8:{�����m�|�_��:P�{��Ҭ�m�&�OO���Hki��Xc�����z}�(EH�q�%�Z��G����'8��=�l��fas>�mq(!��U""d$Ѕ�7������7|�f<�Ls=䂢gQ("�C��4-ؒ[��t����u8����Ӂ��c�ǘ�J���4I�g}������T�1���+��F�8�t��KG�S�&�����\�+_�R^�[���+v�\_��LQ��� ᄟ�¼�G�=@��7A(Y^[j����N�����>�#�bA�D����
���hu 0<W��3��{���Xm9B��s�x�����()T����� ��+Ɨ�}��ep�cl�躤1Ue�u�ݻ�}�e�y;ٴaQ�(|�rk���Y2ӥZh)��539��aA`]9�*��R������wE�Tt�TJiQ2L����2D̡Q���#�QHڴ��Xk��i95w��
����^ϋ^�LT�0�G��1�YW���s��BG�O��
���k����[�� J�p:y�W���\t�9[ Uy�H��}p%��>{_��+���,��
2�<v�a����F�{�K���
d
�n���)"(�������k����|��N�PK�æi�k/Do�fA�
�&a��!U�O�q�rb]vP}_E�p59wx�ԫ
�W>t��z����t�x�S���d�z���C�9r�8M��$���_x�iA�~x�O?�zpJFg�~p���c��Uv~e��y��~������0��B�Ӆ���=�@��=�L�3.0�������7��>�3�D�*B
���;����i�S��@����Z�NI��.J���
S���=��LN6�bő�p>�k^�u��26��(l�J<�g8_��)�NɁ����?㾻b���,/����N�MR��*�C��~���_���_x1�"#�%*	�C����#��lݾU$<t���Z=*i}ƢT�R u��H��ǎ>�/眷������*_RJ�8\_�t���|���C��8w�y��i�Om"�x慃
i�x�ʹ�yC��,u
���, t 85�/g�P��0����(��B:��qr�K��S5����3��L^�ҫy�k_�_u9;��F�Lp��en8Ҕ�Dh� K�֐�e������Ց��l'
,nk�n%E��_-�ia9�rM�&�
�-�P��rA�Ri?xNÆ�G�"�rQ�C���A�{@����[��`x�r�PZ��2$ȆlxWX��Ҝ�����\|���yl=c+I����09K�8kI�j�K�b���G[vN�%�|Lү�qI9\���8><!��]fH%qֆ�S�ҁ���uo��/d��-��0�"����<3*��N����������yvoۋ�}B��� sմ�K^�lv�w�_��GE�ȱ�E�)>W|�#_���������r��a2��uox-o|竨O���C��C!�ULU�)�`{��}���x/E�3=�!�Ik���k�-?�j/���޻U]�X
벅AG��<��Qv��ɺMS��s*��7klڸ�o��=N=��[��c�9�j-�X�)  ��6R�{'�����?p߯r�++ ����=�Kw��%�)V����B�>� �V��d�.Q[s�ǉ*����o���i���VA�2ϑ�'���~��&"!&A
����/JlQ���VM8򼇳cc
<�f�q�E��{�V6�����G�v8���5"P
�	G?�g��"ǎ�`fj�v�n�OGXW�ɉ�c4�R�����k�$i�(a� f*<��.B*�J���=n��]<t��h��D����/��mLZ��v��"fB��	�Ea@�Қ�m���w�}����,ͭ�팳�����9��b���	PlhxyZ�l��	�(�� M���/[���G^�I�<�g��������T�){/��5׾�W����r�E{��տq�,��u�ü\�!���2D�:��/�Ö�����N/x�K��d82@x�t9"4��D�� ]��f��'ʍ\�|H���_v�ip^!}�r)t(Pk#]
!ֆm��8Yސ���a����t,����	�1��(e�XuEQ�-�c�j��uMv�u&�w��=���	�~����KKᩤ	�z�8���al������$�4A��q+G���y(uøn^��A��CY���"E��:-N�8I��ؾ����.)��>�&֍sۗ������aǖ��D8�u���з=W�ٹw;/y�sٰe�[�B�96*B�*�����q�'ذ~�f�3;��~�x�ￎJC��$�ƺ"L��T���wH)�Z��o��O}����QbB� XLGq˃�/L��U!�����g9�_���d׷D��
�ӄu�3�xb��>J�ӧ��H�����j���?�Rx�/�9����*m��� �������?W�_���+)�&)�q�N4��2����+y��	ln���Z��#Z��|�㖯�Ʀ��b3}G%?��3?�:�U��O�%�M����c�95w��=�9�������)�y������i�TA�q���HF4�M6o��#�{��.�7����4�s�D�ԙ'J�{�o��7���T��
�(B{^jZK��͌S,:�|�7���?K��Q�6CsĊa�X��ӊDE�z�J��f~~�=��2�aWxЁ|���=��o~��|����-�A��nb&s��}"�R�~�� ��#-���m�(,B@���H��%t$��Z��`���rg�vg�N�ERQ��>���W��׾��/��m�6Rm�a�Z
����Ŕ>d��
f�ew����!px4Տ&B�?�L?r��^ �ǕP�� �w��]��#X��=�=�b^�
��P�"`���k�Y�-İ�?(���y���F\D��R�F?0:�u�Hh�GA{0�����,Fb�'<����;gس�l.��b����g9B��8u���֛н���̔1�J����(@�U��_�1�1�������&�
=��Жv�<���<��!"�r֙�I'�Ѝq��[Ŋ�x�|�~�˟������uәL6����t��]��Op�s�ɋ^v%ձ�ǒalA�H�"����C��?f��"ݬ�����*��ob��:��.�z�4
Y���x6���������$��� �bU�_"�郫M�̆_��,��Q�P��x��#l?k3�v�1�8��@���o����y���WjԪ5Z++(�dvpϊ_D�l��J������+) s�s���q%��}����^ �GxG����>�B{�]{w�{���l�=E��!#A\M��E�]?����߱x��X2ME�˶��'%���)�Q�c} �y��z�®���a˺rN�q.�(�XY��D	I�SҤ�pv���F:�#�`a~�,�1>5�%'3^�/���u4��p�E�<o�q���j����������?�܉y���4

N�A�z�V�r��!�ey�u��r�];΢9]�o��{��~��\��������[G=��Z41�L��"��i}��#��Ï%�)�+���z�n�M?��_���Z���t�81{�~�✧����x#o~��9��}Lm#�i���0�
H�%�(�������#�B�W�XϚ4{=?g��X�q��y��$����뤔Ø� ��Ø\���-��Oxc��ÈG�A~H�*k@����ХE���+�����	��I��UlYX��/q�Z��H�%��U���K}�w$U��t�}����]DZIYj-2�p�,�%�4M�-N�F1�r$�P�,��Y�/hbͰ���a=4���s�J;����@*�#���Gcrb�3wm!�hl'��Jă?<����C�?�ޝ��,�-!l����b8r�/y��<�yO݌H D�@�q�F8ŏx/���=��W��b���g����a��&���YL��]Ȏ@�@�@*�7�;n��O|�z��a���*ކn�*æ����/� (�Y�,��C��c�6�ؽ	���[���4Fd#�0�KKDR�8J)��, ~1g���x����Ｙ��_E��^ y�g��s������� 8K���c����%�Ƽ��^�s_q1y�p����Ә�������!=|���:��%�RXg�I/�c
�U���=����J�e�&*���y;?���<ug�نl*���v[ĕ���CP
qd]�w�����o��<q�	<�(Bg��^�����2�}��q�@�
�K�-�&������ci�M$+�+�H4�z�ҫ�2�~ �	�u�)r�w�Y�����69��=�<6�M_����|�o?M�2���z��%r1��I"�"�&I�7�f����z�U����H��p-d��XS���Xo�&"��N�c�5G�h��W>�
~�x'o���r���ROq��
�SAm�c��5R�L�I+��� �놧_'��Fh�#��-��\���a�.Z�P�)�.�|�U r�艰�`:�����;/r��c�>�ȱGO��c�8��Q=z�#�����S<��	<p�'=���8����6�'{t�s:�Y۠�����+��b���V�\H�Š+W�(J�
r8�]}�C���̰����� 
\�yD�+0��dE�9�@Vc�v���˯��]����2��
^X�8F
Q��<Q���Ú��F�2$f�au2�&W;+E�6
KB��T�$ѤqJ������Z�m��Q���H���{����������8s�7�
��=Q�G,����+�}	{.ކ+"%�R��v���m�|��n��z��U/|oz�k9c�&�8��:�!h)/P:�d+l�����}�{� 1)�����B���5	���̿4���Xy^P�W���;��y֕� ���T���u������ee�źu(�ܙ'k~5�w6�iͺ^�/���-�yλ��C��R��~% ��N9����Ak*,<�^/C��s.��
^��g�'3A\Qᔈ���z7}�vo>���:Z�>y�@WT����W��y�(!��N+̤j�:�z���6Y�e׎�Y�,��?�K
�s��WPk��d�$��.g����]U�ɂ�}��~��{�^�?��|�}�C\��g���
6��W�Xb��+��=�%��?�#��߿���ulٰ��b��H�hՁ���d/���;"�I�t�]���tW��Wna��=v������j��e�v]�7�MO�[�X^��X��܄S�t#.F������)�����G�Q�&3}Z�R	*�*Q��]��t�`jr��]|>�y�e\x�>�f&��a��2
�������$tb�w�}��T���Q�x�D��E��D5�f�C�9�
�A���:O^�z}�n���J���y�_X���c<~�0s�&�_��`����X�1�ё��P".	�D�K��{R����֨135�����L133���4SS͐�@�p�8� ���ӡ�vХr?!� �:|�/0&�B�2�%��w%��p��%NE���Y9(��c6��%�䂋�����r�wȭ��Ɖ�#�����a+OVx!KB��p�� ��=b���y��+?2p8�d����E[�m�I�]w�����ab���׿��x����������RO'XYj��O �$��u��ϻl;s�7L��<�R������J��#�W]�\^y��8s��=�����n��u�X�X� �L��t������ƙ-4*cCd��2t������?��Z��/���$qJn��J0ޘ�[�ǳn��g��aM+�E۱4gR�|�%�uǏ��w�$7]
�"d��*�U(�p�WR������_~�������i�����_���5{��c�>����W^P�V�91:��cccĩ�އ�a��3��u/�9^��ԧ6���YME|�滸���RO'�DM���"
6!,��pH1:��}�� ��2�J��$i���'�����hsr���cn~�׼��T�k����^��z���@'a>g�6߱w#/���5�s_x9�w�A���� �F8�Y^�E�j=��<����I�?�(���A5�����V��j�ڕ%�z	s�J\cz<x�O��/��opނ�L�g��"�,�VN�8Np��	"9Śtt����6)!d���RY?�(�����⥣�l�ű�G99�M[�󜫮�9W]ξ�w�n�z"د�n��a�R��@+�.ml��Ƚ'��ОF�d����u圾�<�(�i5�Ba�EpIy����*XY�8����
K�<~��G��pj���2ݕ�n������Y^Y!��(B�hu�?$P��ӹ��2�ڕ	�֙`(�������aA��FE�8V�k5*�
����������fX�~���q��
�
�q
IX�|�(\���b��ãe�(�׌F�wDJ�ڊ@n����D�
�{%pV�D��֡j�-�L�e�g����.z߾�6n���T���8:�A���/J� ����}�/���"B�N�܈a������Ra
�M���{	6��B����?��N�0�0��GX?��j<F޳�2%��~��Q��"�y)(L�-��bl�Y���l���J�S|�a��v������:6�!3�F�BZ	#Q�(�e�����\�w�g�C�M1јF���;UB��~֬����_Z ��W�e��<z�n>�f�9;�t�Fl?n�D�lݶ�˯���y����d�j�FQ��#�_�C,��2��T �r������ ��}��;�U���x���QR	�4B�4�����W�q�V�=+$*������_q6��4yV�T���8��>�i�=q��3[6�xkI-`j��L���q
DU��wO�+�*�ڂN�OV�i�������Ds=�=�����PI��_��66�q���^��]�~FR���p�w2�ر�w��m�JDQ���#����J�TT�5�{����<���L4gh�ƑN��y/IY�s?�^*�Bh
cB�MHji9���r��<B
���cMA�V"S@��'V	���3af��*	x#p�Py�IZK�v�a�V���0y�P���.��Q��R��X\��Ё�����Ky�˯�iW�Ƕ37#b(2G���
�cQ�ٰ`l�Vh����q��0 5h�q�y�R�(@�k)�;#B��9��h)I�.�-��{s��a8��B��J����Wڴ[z��n�������¢�"IR*�*i2Amf�H%$IH�ƕ�uU���P6��a���
���|��X�+B�����>�N�,��쉰�+��*�F��X�f�N�^�1�d݆uL�L1��ɾs����	��j5�{6`|�B*�ucQ��D��3��4�L6��.�
���nȰց�P�R��z|��Zp��ٹw#^��=����o�ŏ|�86Lo�Z��Pd��7��Y/��s�8%�S���Y���xp0���vAW�ey�:�{*i
����jڤ^����W�|#I%n��"\���tԴ;]p�(�d6cn�$;w��
�qY(8��~V0^���g?q��?�i\rѥlۻ!D/{h�5�>��
���|7�]߼���|��(��$��8Z��2�)����O��%%�C$c�H�br|=���o�����X���(��>qq�U����|��}��۷��J�������Mc�P7"D�;��dn�NI��W���r���y��y��c���_� �������Z�G��Urvf�?��p��n�[2�%EQ�Q�A����<q�g^�L�y�K��1�JEf
�xzy�w��C��!�K�>�Xi��+-2��r�'�)J�KQ��\�+h �E/q>pĕ
�"�h�RA���*R��a�s+|�#�a��2���el;7X{:+9Ն
T<�q���}@�T�z����ZL���Jk�,̠k�:�=x������[�G%�2ޜby�E޳�L���p��qY�����vh��+���"� iR<�L����;!�����*�XŹ	gS%���M?:wi���l*{����
JI��
IUጢ�wX�]��u9k�v�sՕ\�q���!�Y\:	�0�
ޔV=	:ҥ��
���a�w�q{r�ԁ��D �9Y��p��h������a}� ��?���
Y�s��)��<1ek]���$I�Fu�d<	I�k�*��A'w%��^y�(�W2׽�jY7T��uR�@�eJ��2֘,���)����E�K��E��(l(���*��&ͱ&�7~�u33L��d�Y9{�6m�D�U����_� X3}ʓh��FB ,9\I\)��aC�x�/J�\) ��:'u�>�w��w��.��-_��7o��C��^k�~j=i#����mT+
��&�8�y?�Q)EE��nl�D)u	��_J�eƽB��x���Y+CE���$K��t{}�J5�cJ�B��(����p.c�֍�O����$Ja�Ra]t�16>Ϋ^�
�޳;�9
��n�"�1Z%X��w
��H"�}?x����g9�����ЉP"��qv�em��ݘOߤi#��Zץ��;�����,��q�׿��{v�\�����j��=S\���p�}�ӷ
�gKGو�����@��N)�hW�[�����e�˿,�����<?���[/�T�A?o�7xLc�\8�E:��r�c�3�b���Wo�/�8(���XKk�R�����׿ω'fQ6�5�(lh�:e˨S��8���xͩ��JaQ^�� NR*�
�N@H
S�EL�i116���cGOr���\�~�&�kD��ڜ(Dq����"��Ja�Z%��ZW�~x��G,��䯹����
��մJ���#�b�ƚe���t{M�A�c��� aC4�b��;A�t8�RUJ�.yh���A��S��^%0E��i���N�� `R�� g�=����W=�w������>��-Mln1Y����`C�&��)�j��z�K�])�RIVW�&păXn�x����m9x�!��~��n���ė��G��?�U~|�,̶�F�mDDB�iT��LPO�H�
�G�B�m�nޕ6-��)�����G#}���zU�&�P�6�Z��'��!�o�ֵg�YW�aHj�&�j�ZZ'MjD�B�*�5M�W�������q3�������āb���-\ҨI���C��E�7!����kl �e���T��V�5�����Ă�_������=K�;��[�eW<��g��q'O�qj�$:Q��u�s$IB�[Pdy�B&� 6`�W�4��gPt�9@`
(9캸2�!�V�p-l����1�,�AT���mj̈́������ނL`g"[+I�P�5��j��4l`�!"�M:S�!1=K$$�=r�������������/]H���GQg�������)��0�It�19��
�jJ^�����
E�q��Q��Gǡ�+l\��N7�G?��j-#l�PR�	���������t:��`%�ޝS�\��������t�W��=�u�zc��w6w����颒A��{G�����,'����?�׿�7hl��
��*؅2�y��>�y�s��/��UU��l��_��ɱM���1a��q�:�S�sAqZ��u�
�9�-�bRj"���<=|�XYi���C̝h3�XǦ��j�/r�ɐJ�U�(�z�ţt����0�é+8�����K�x���Z���:j�ZXz�"��0�U�lwy���O/ (�Y����2�՗b�VQ��-����@�8�0����U�ߨ�JH�p�EN�&D�$+���j��Z�e���>Q��=�W\�r�}���q�&|�U�PDfe'%�9�}o!���A��\i���ė�� [�~@��{������8?���|�����]��_߸�<����+M��q;����s0�#��h�|�l�V!�*�݃h �J���B�ӭ�~�X��r�^-���'œ>s��%L�	����D�%�պ��c3l�����Y�p���rӍ_�;���?v�Ź%�;t�
$����TP�W�d�B��)�zR�$�pߵ:��4��6|��"��3��l:;�����^ƺ�
,�晝��y���8Y/cyy	c��
�4�[K�ף�����M��,u���eig���na脅{O�E���j/�R`\F7o�m�F^���n�dɚ��0U���{H��J�,�΅�<I�78A���c�=q���釸��#Id�4�RI(��&>�i���:��)?K�C.���"/��p@�����N�:��u3�ڳ��rgJ)�ɄXV���9~��H��!��(m0
I)�I]�H%�wE����?��B�n���~x�._)ehE9�Bk��
u~�_��s/8oK�#m�;�u_�̍�<�@M�S�D"�af�#��� �^�<���>��އ�D9��J%:��MA���֠T�Q�l5{�5�~�G%LMϐ�)'�����,/���
[vn@F*��X��JڅxrkV#.D�di�ˇ?�w|�}���ٲn+��^�G{�M��$qJ�ݦ��֪�Y�8���Q��H���p���/Q��y�F���#X\NS�#��V�����'-��2'��/:lغ����j^��W��+�c��&s�̣ˍ�6-�'����U�KY�H�Cx�PA�f%.w8�!/ɓ
�(+��<��q��޽���o���}�O��g���[1A%n03��͛�R�4�z�v���ZD!��ǁ�t��!)q-+}�mr����ԭ�X��s?�~ܭb��1 	�p�c
l�>X��h�%"���U�4�MҸJ�"���g6Ь�s��|�k7q���r�#<����i��
�u�$B9	Q��~8�J��6�u(��U�8ŏP#��W�Z�Σ� ��.��X���gq����U?�>�R��X���xk�T�Zt����vTv��(9��_�(ip@]D
��Fp�2�R	�y��is�E�x���:�b\�P�������"�A���~���D��(pAb�8��"��ȗ��W���;f��Ө���U�W䙡0��^����N���v��T�Ui��T�U�cM�1,�,17�K/���MMz�*���	�9&'�Rq���傉��1, ��AxЉ��� ���o^ ��O�����(����5�yVZ+�T�W_ŋ^�\��	>s1g2���W���7<���U�Hd�DV���T�t��
 k��c<c̈G\�q�����F%�Kk8ۅ��"��@�����>��Az��ڶ��7U��,/�ɬ��ֱ8�&#�Q�m��bUR2{|��}�|�;�a�9�tca���J�"�Y���+F�����1�]O��HB@�T�\c6�����[p����F�0t�iDn���-T��+�����?���Ͽ������r�m� �ˡY���w�y'Ci�����jNӾ���e�&y2	���S]��s��o��/~��������X�oQ�묟��xcZU�|�p�Q��*�B�\��B`݀���RiP����������]�6򱴥�ޟ�T��O ��@/����P��!J
��p`��:+� �lD�IS�V�W�ԫ
��=��?��#��s��'x�����&�H�^�r3��R1Z(���yH��Fb�V�	����xB�t:C���޻��{�p��a���h���w��5I��<�Q�z��X˯i~�(+s XC
��?a�d˘䁝n�} ������@[���gp�.@&>>UF*4��v*�o� �����(*u��������+_�*S�u�+cH#�pN�e�"�4������ע �����t�T*�EGH�carb�s.�C�YAI����dJ�>�c�<���%�Qem�D:�:���w?o�W��o] ��O��/��nM��:G�ק��u��}�+رoc�d
�D`��[>w+���g��13�a4ި ����,dɲ!���n�}�FY�Q�P�(���ڝ6�~���q��I���^�<�#�$.�eRHLQ������l4i��(�'�s���D"b��-�c1�Ma�Y�R����`�!MR���Ѭ�Hc�쉓dmK,+$QJ�VV�Q�$A� e:ٚ���]t�J��*�P��À�5�`�e�F��剼܄d���y���1jcUN����1�������[x�;�㜧�DWu ����Q��*
8Y!F�e��@���4D��_I(�G��=���_��?y��k���	l��u��1�k�T�EQ��˔<�� ,q�~V�e9�=�B�H
cs߉���p|9o}�:�
��.<�?�bǲ0X�����Z�a��X�Y-�@�J ��k�����$iZ�{G��R�q��mw)�X�t�]"3֘ �g�:1ǁ�����������E6o�Lc���	L�bs[�B�2fX����F�oa
y���B''B�Y�s�MVپ{=��U8���V�F&��&��	m�$G ����	�*y��8w����@H(\)tI�����oјLy��`Ϲ;�����Q9.��_�l�pBRd�4��{�����/}�FL�R��4�}�5��y�T�(B�*8Z�C� Yb��H�ju���98qb�4�Z���Ex�];w�}�V���r'!JbL
>|��g�8��T*C����O��e]��������������� �����\~ճ���Q���3���:V<~�A�˟���B����D��0�E�A\#
�g8aJ��O�*�b.�	6�p�V��_�U�RE����>خ�	i[IGΘ!�,�""�\�ͯ�YG���?��#�NPIlذ��L��n����4N��ϑR�hr��m;��w�Y,�-�4�%o;�
?�����ue�{�)��uM�t0��w6�0f5�'�^³F �H�߳���5��Ȧ,E�cS��/����Pm&��EW�o|W��9�lv�IX��ESHEɁg��;�sBԨ��0��P��Cq֚�r��K����y���ʗ������,��;_�����;U��A�V΁h�E"�c3l��x�gw<�{f�9�<������F��`�0"Y	�J�sUWص�~�Z���޽kWK��O}v�[��a���=�@�ݣ�~dSǨ�y���=QR���Rh��	d�Jri}P�
 UI�ο�z�.~ţ�.p,���eUTпpC���=V��A��i�6���.û2�>��b��+2lYA��$�G�EI���/-I��ZDIQRfan{��y�[�}{�y_J֮_Cm*B)I�;���(L+�Y"X��ǲ�A�(�-�v�Ȳm�f��X?�y�n����w{�Mw����8Jj�����^�*�jMC#�~!�a?��k��,���Dѩf��[r�c��U���ײa�jPUT��uRUh�-���������J�$"�X��y?7�SL�����x�G�(��4���
ϡpehƄ@�S�|�$G+A�ۣQo�e%K�.�������٪s٥��&x�IZ�*TNr֦5~�${��%IH�e�(2�E8���ğ
.��� ���y>���G�Z�/C����v��$Ij���hMG�y�M�7񺷾�M�1�Y  ��h��]>�ן�{ߺ�Uc�1.�fI��`�&J�(��^��s�O�~p�gAZc!��^��ș���e/)�vl��Ƀ�i�%�"�(B�����>i/<��Y�<h���I����Y��?�QM6n�Hs4ި����Q$&���6��L��f��
dmǃ���^�Ѩa� KKKAo	��a)�U�"��i|��8?�G����u��5ߏ�
OZ*��%�IY����N6��-7�_{\���,:R%�>�
���YAis�-*����ޫj��?v�E�P4+�?���߹�O�s|��7s�wo���$q��k��l�H���$<oEP?H�P&��vyU��:���*���λj�_�&a�8n`��<�wC��T����\�|I
+�����x���"���/�W���2ϑ" ]8K���^���I ����Vb�:��ƚ5�h�F�=9��Ϯ]�ٷ?G�%����g�P���
_�o��ؾ�Q�ޗ�3V�Ź�b������������L�|��پ�$�q����ۋ�ի��e�!�BV� ���w���@��� q��>I���XLW{��>J�'�)����E/}>c뛁̪B�!����k}�k�tKLq�Yn��O��|
ͺ�
QC�
I�Z�%�EF��32�"T5���) J�KQZ���81���5�6PؒNw���Q"89{�ի&ٺ�,�F"�K�!1�lsx�1�Ij	�D,., �`�5=���wC�ш����q� ������7�s'.��X'�~�ݿ��7��;$��O8?�+�%J�de�������/{>׽�rLӱ8ߦ٨��Q
�m���g)��hWH��jD��w�XaA ƻ�J�˝S��9�d e4H���	��x���
o{9�\�����s��Iܽ-
����c
��� lp#����wz�!4����%'��dߣ{�.�lZ���
�Rt�H%0Ja�"HҴ �eX�Y�~k7�a��,���"s=��::2�ʻ\���>��}���}�����o���e�?"w�)E��\PyrK���8SB<l7m�ISsdf3�G���s�����W��bVmh�E%��8���Aege�/��BX"c��
���;\J��`S��]S�T�����;{��g���~�����8qd�D79���]é���B��ha�2B	��r�,+�٪��DY.[߂CIh���{;H���~e�}���#�5�^
҇n]z�2<+Q}ޏG!d����6� {���G3<{�>z!�h����֢�&�Bz]����e$q�z��8B�h��M�-
���5ԓ:G���b�}�r��)�EHd����.�V$��.ˢ��	E�u�
N�c��YG/�X/�B))�a|2�y��ο�f����1?���<�z��%$�����R���Y/t�AM��#cE>uCH�W~P���6yP��PyJ�q�%�q�s.�>W[.d�i�AXJ�K������x���k��O���� Sl�p>W+��x�>b��9 ��\�=�J+��?Y�����p��Q����Č��R9E�G�F�����QJ�}�vF'[�2�9F�z������GB��J�8�"(̪a��6�W��~���L�[� Q���q �n��M_�gB��A��$�����#�!�ER"o*Ρ���N/GM!,������x�o�Ȫ-
���Y�a�FxI�P�o��������2��Z��ǃrXa)\�aB�K��,�[�ȫ��P�(m@(�,џ1��Sl:g-oz��l�l-����/�Ɔ-g159���s�:��,Y����V�N/k#�%�)��F��Q	�N�Qu��1�HLL$#�:GB9ź5�1F!� �qHų�r�� o���=���ؼmݴ�����[�t�Z�J��w�s�$!<�?��'C�V��B������0�D��+�z%xI�^�	GZv�	Du�[:J�\ທ<�7��U<��W1��FY��"�P�e�a��b([��h�-�N&xY;G!�u�����g�Η������w���}*e��:6���H}��BF�ɩ'M���N���;qv��Շb�` Տ����p�e��t�=�WH��i!�N��[<.K�z�g)���?TC���L5�_�0���0�"���-PJc+Ō�E�Q���,O+N��,E�W6�	
�c�q�����=�?�ݷ?��}m肉"�#MT���W3[�wU6��
�*m �Z$E��3�w&��+-Q]��ܳ�v�V��y�s��"�ZL-���nA�8(F��N�+GCİ❄�/=N�)�˦B�>�� �iG�%�]��W]D4"(S�--Z	<%y�M@�c�"��J��,:Ѵg|�O��m�p7�bI,�4�"��vz�yH��8˟�҂Hk�PU��O<��	�� ��d���l��Ȧ�$}ߖ���ɲ���I�l�B��u7�4
S�G�r�=�Ǳǉ�:��(ZF!���P K0�.��ڏ�VC���
!��!�go[s�?s�CK�����������v��봌�_�/<���f��^¬R`�<��`��!dDkd���y�rxU�bϋ_u-/~ͳ2��F�2���;v�ٛ�����ԣ���G����_�n`;����u�Q��
������(�)\�\��5����y�u�c��Oj-M.�j�p���B��ئ=�&릘H��):�X_��2$�z���Dx�A�-�V��4�C?��G056ɦ�7�cE�$!�r�Y�4�
Rk��Px&֍q�ɄG��e��JGDqL=�#�Ɩ���/X68�+D_��B޷<���W� �@F�T0���҅�>��$��!99w�x���7��_y\��d$ݟ������VzW���g��t�aܒ�����X�^�2���S�s�z�|����+��!�4j-F[����������.��[6��/W���qf/+s����4PO������^�?�)f?也.[F��ʱ�+^kPd���� )QO4jM��,�/���}|�۷��I�j"�at������q�,�p�$�bt5�ɲ�Z/�1D�O���@y-A��$�F��;�q��w�=�YFd�Yo��S3st�]����*�:	��d����
��CAW�^�#�#�̷O�p�[���gM�t��pdi�D�t�=
k�U��ø)]��ۏ����,�thԚԒRH�<?��f�M����'����-F~`� �q���%i�crb��ǎP����`|��PA9�H�5kW��Av޿��ู�art��3��
ɣ$^�
=���$P ��ri��m߼�O����V
 q׉�ӽ�P�lq޹'���X]��$�y�j�)Jց�4���/(�r�E;xÛ^Ɔm���Q�e�(f����|��~�{H�i�ZHL���!(��
�@:ŀ	.}�d�(�}=�@��%Jb
_pr��_yoz��:{[�HQ"u�ϵ]�H=�k��u��;�-ei��Y+��Rd�Bx� }��
�������H�ǎ�����Z�՛W���
r�$I����;�^�:�������_Ł}�8~�������J�@������]�>	=t�
{����_�L�P�2H�$�K��8��]�;�(Sk����~/���ULn�2�+�UŖ�����a/��le]`��dj��4��`��K�(�����������?�GEYC�+�%5�$���<��E�!�E��v@�}��}	~ȼT,C�A�ZV�"��U\�{��<��Q���or��IF�㌏61�8F��֋���LT�k��S˕����"�A�h��N���mLO�b��G���4�E5����8blt�vw��Y�Qˊ1D�.��PȰ���@]�t0�arr��Þ���a�&6l_�u%e��x/�u3Z�qjQ�yt"�s>��7�G��O(�,#�q��:�YZ�T�j�v�ʺ�'[ �Mˆͫ�~�N\i(]A�R��K}��E�\�2�4n�ϻ�
|���>Lw�K�j�K���X��!�ɐC���DO��>
�q������N�ǱaՏ��W���nj�eWhe�S�r���ӈ�B ��%�+��48�YJ;D��^�D2���M�溗\���D�G*����;���>Oo��Y��8�s��v���sCJ������2�5�)���e�D��^�W_���w��;E/oӬ5!{\.�؟�;n�>[��JR��P# ����c����xf��O�䕅m c�Jr��Qع�uk6�vz-B�IFE��"x��(C��mE-͖M��[�������)��F�����߬����f5$�z�N�j���*:��fUZ�c��DV��O����O劫/�_��_�/��U0:�3zY7x6�	�}Bf�̠r��"S�&+�^��J$�
q����n��|�&��/?�#{�Ӫ�05>E+�Uk�$5���ziH�3Q��:�����SN,'	?��$��g� �d�b�V� ��eY�0)-�����QzY���Y��m����x�0㣓L�CY���2�(�u0�qևCQȾ[�-	Y��h-9��mlܰ�N���Ge~a�ѱQFGG���*�V�R���$��N��3+j��8��u{'fO�s�NZ�Q�9o;&������%����!�@k�'�������#diشv��(�304SJ�$Ip���Z�g`k��E��闑/�Bp\�Qcvn���Q��8�ə�\v�%��49���o��*N�ls߽;i$-���zA
�*�jF\5f�q9�ľxg#]k�"=�s���]{�����oq?��\ w�ӟ?}��2��z�����Y�E5s�p�j�R��@E�4_�ҫ/�
o{��:=�D�,w%8�w�O��g��oMQ�ZD�N-cD����2�~��G�����9!�����cf�g������y�[^�����Ȣ�'�i�K��ј���O}��N�5��p"�Q�(#*r�-=��2�ތ���� M{(��kuҬ���C=r�fm��[�5e�H{A
`�
�)Ρb�4��]"��M�����D���������if�ᝪ�������p�Md*#�W�	OIN��8U���=����wr��
��2
ѣ���1N��d��.�>���*�R��������3|�/��4w�~?�vF#
>�#�Q���Y�"�˘��(��f�
�'z����i�.V|ˏ?��
���}�ݰ&���㭧��0==���U?r���;z���a�����h"U��%6���(%�:p5�w�:�L3�ߤ�� [z��߶�
�61?���C������"�c)U�eV�*Wi���abg@슼���f��54�
v���}���zz5��nD%U�hi(�%*UF|��o���i���_��� ��{O-�Q�s�烂�X��SU���e/��e��<SI�����1::�s��2pF�@K�ͩ�'e�u�#tSZ�Qz��
�6!�r�j��-W�k�'��+��U���=��x�?����N���{����[)�2�8�9_n9��� kqH4�3sǩ�D����p�s�,*Zf�J#���|��|�oV�#�1z�4pڤ�t��p%'��������)cFs��T��_�����Ȼ��"A^tp�%N�9��,��?�w�s)�{1��]��"��t���1�i�Yꐘ���q��Nwm�D��N��� 
Q��ݻ�����A�9F���"��"8"*1�����`sG�Tl9g=[6�́��9~�8I\$@*�
 ���� �N�p����8Q"j�R���;�^�B~�w�ɺ��̞�GMm�`}�2��2�X�]�K
'�RJ�-PZ��D�>^�~���G���?�ؑYFL����b�"�d��4�z���O[�9?���U���s��߈�-��/ ď,�uX["����8���T�A�NX��zS�ӌ6GXZ������0G� m������D�b:9�*�(U)�`.$�b���EH�֑���U�\p�4�Q��y?G���*�XT�K��r��������Re=�MQ2bjz�4�am���'gOr�=�ш��s�6�,�̉�����O|�?��L�l\����%\E��8&N�AY�eA�4�� _ �|��_I���z]�i�Cǚť��6�]v9�k&���i@bMFi�u����Q�%-���2�ǒ]VX�?����u��������W�w�Q�3zb��'�Nnv�O_��F'/���<e�eO�e��\6����Z��Du���q.��"���W0��F�gDu�/="W,�����������ud=��Z�Ew�[˩�^��4M�{��$��.)˖�B�����XQpѥ��w���t�@P�P u����)�h���0w޺�
�Rd��Sm##�H�+z8�K�#%��1B��Jc�,�R���hW��Ijq��	��z���ٴac�kxo)S����f��j��Srߝ���ޝ��)R��   bH�\lC:���?
�]��񃂫t��F��uNR�y�;^�[~���;k�N��Ԓ�HDVftҥ`E��$Ϊ���)�-�/�B�$"[p�����?��O��Y�?F�[��&�"�\��z� RQ�[Ip}��~g�#I��(�'[ �3{X�� �\����(�ǂ^�G��4�F��jD:��Nٿ�����8rp���mA�Hj�(�f/l0��}*����!k����I�-C�0���9�n��4y葇8~�S�he(���8�SȪ�X9��!��T�rݥ�6�[��y�fg9�� ���m�6�8 ���������h/�زi��K�=�[�U�D(b˲$M��U��Ø˹��"�4`%����R��!QA^�N��+=�^|	���2#nF�2�qBRO����g��,qT��0��5��
���S��ᥐ��rj��m����q&=�d vr��9�3e$�p��{JI��+�ve��3a��� -���򦷽�+�=?؞J��F��K��[��]�04k�� P����)���+���ޡ��Y.0U)=��˙�;ɶs6���͜s�Z�di!-ڄQ�1u�M����/��&�oҪO1?�A��%��)|�Ԛ1.��B�WMp�����0Q�X�v
�Jz�n�E�*��YA^���u>|�Ç�����i��x��ye+Ƙ���p�w�/��/9p� ��(�d�dP Tc��v��D�+�=���$B����LZR����)֞��W����odb�KRkZ�	^BV�@6����	yH\UCj���0�N>��W>�m��#���v�j�a����T`%Zhb��E��6���)�r�湂D��?I���wd�1�~Z��P�B�D͟�`�#�oX���3��O �f��Fh5��:y
�[�I���I�:JF�81�ٻ��)�L���c[]�R��wՠ��n�Ͱl�#�ƃ��=Gm�p�팶ƙ���ĉ�D:AɈҖ�,Q9�b}���2Q|Џ,�x�I�:����(6,,.��US�8q�$�޽���۶l�7����#N�<��Mg�[�H�r&Ʀu�2�%e@����?s��P�7q���osH��-B3!�(�,���m��o�B%`mFYZL=b���ġn��jI�Z�EY��]e��*��:o����Sy	���o9w�[�x���{#7�3�p�
�k�=��[�E��z{��7����i���GkCY:�2Hm�M\ެ,X��q�;x�;^��fu�t�H���?χ��;:����Sh��W�iH?R-�C*�AX
�"<Q� �E����)O7� c�+^�"^��_@DP�%��9���QL�ˉL��l�_������F�)ҎC�`Pa}A�7�R��5Ͽ�׿��l;{#K�9~��œ,��I��V�Z�nA��DI�
�^�V�$��^\`��G�҂m�6�ZS�Hs����E00���o�˟��_pp�A<h-�(��c$n}��_��ն���Aݐ�p�6�h��H�3s'ٺc3���w�7�SS��#JhOiK����E1^xJ__raU�DV"`�pUJz�r��A>q����̱C�������j|!�DzE�b�4�Ғ�R�K���KA��������hg�\yI����`���
)Ì�?��MvH��b��XٗE.\�F
����-C��.�U z��L��U��Y�lji0:F
���gQ���>�=�����155F4fB�R��U�y��f���C��Q��Ȱe(p���K�H�9w���ݷ�C�RK�QDVdx�(��4��e	�U���6T�	�V��h��2d-|�sh3;3ˡG��{��w_g��,[6m����c�5��^7g�A7Q�������n�����n�"�
���1�!���|��2��\z��$�5�t�H���b
���;�ĕP��!����PU�z^d��0*���S+ �^�*e�u6�5{�.��?ȝ;o��* �I�&Ο��Orݓ6�y,�AYfx/h�[,-u��Q�9O�(��X���˿�.{��T�^�MaK"��_���|�6ڋ=�G&P���@j�Q�����!�?dr����� 1�QzJणݙ��g]��~�uL�J��IV �'��`a\*�����}|�#�cq&g��-k�%�{��2.y��_��_u1��Os��a�4��Y�>ĉ�4+殔���	J�(����,�tt��֌��pj�$�vݏ/,�6���T��(�J�J�(`������>����I�����Zȣ�+vٿ\H������}�x�R+��e�I�KA:J�qr�[�o�7��r��/��� yB��D5��r�'+�p�{�w�#���U���c|����G>t���]H39���f�J�����<�-�u�&F ���x��]�O�8���/�
��?�
�>|;<�̳�
��"�
�g�ڞ!����1ԡ{u8[�J9�+R("
o%e�A(�4�^k�f�Z>�=w����{�HVMNQ���"�!h�r�c�J�Q�Yg��m4y�c�Gk�����q�;���;��G�V()(�-%�$�Ls�sA�:�cXh~ X�k�'d*Y9�:PB�l��-e�{��,-v��M�*�:�jAUe�M���[���י+�|/����> !W�'Ri���')��.���u��H����!#M3j�^H������ѱqҴ�,K��:����;FF��,l%�~j��!�ز}���o���3�ٝ�`��GI��~ءRj�4diBT��Gj�)��IC�+��V&7�c;�@iI}t���K���:H�b�I�<��yId�A{ڄ�e�he=,<��"��$�:{���Ԫ�,v��H��=F�k����r�s.�Ğ2w�ZDR��\-wD��<�~��9��$53�u��dyN\����{�sx��^Ds2�_?�Y�7q�e�p���|��{��m3>>Edb�����Z\gaa�N�C�� �3j��V�F��f���̝�g��z�l����Df�|�7��_�֯�@#i�v-���RWq�}I�i�%M:ء8TWu�BIzy�N�Ck�IT3����t����g�����W^�����_�W~|Ӈ��""ih/��҂z��+=y�Q�t�x��G��o>�g>��9�����vF�-���47l��V�-{B<q�z�.�ǻ�Og�ՒQU)t�҆��(Li�%�2�,�{�R�%Z��rWm����c#�� �����\�F-Kx��:U�T�>\ yV�e��i��<��C�{Ͻ��֎�atz�U0�2Wz�n�c����?2&����"��:?A\������/�λ��;oe�ULNN����풧9�Z#u0;�ϑ������@_�4�Z
�3�U郿F$#�*�ՠ���ɋ�)q��Pr�i&Y�@'\�U��`���I�e�z�����[�	�����|�n�K�ޢ��A1౮$�ƨ
A�����S �w��om{��m��)c�3R �!�����2;WZ��fn!�Ra+��e��4q]s��
��o����Y����ph�z�-=��r_��WY�I��¨�,������� �np�W��ˉa��h����^�ѐ.�K�5�3\r����W2}V�-�,бF
����Vs˗��/���4�q&GגwC4j�QChˉ�CL��Ϳ�zο�,��CYf�H�&��زyϾ�y,���=u���rjv�#��,�-�z�jl���&6���DiI��ɓ<��#�8v���l޸���K|�/?�'o�E�25�l�7"Y��Y�k�b92Vʡ꺂�\��>��4"T$89sKN7ks�՗���7����O��˚T��BG`D�����$�����BPfp�7��_��G�ꗾ��\���Uj�B`T���!,����_a`�ǃ䏆���`r�����+��t�<pR*�R
�6��A1��u������((��q#L���Iw�?��x��?�k1D����0�]^�΅$�(2,..���(!M{�޵��w>H�#�N�'�h��r`.�[�gc4B���!�@+9���a<SkZl�|ǎ��ɣLL��8����F�A�啕��V��e� 
�jVE�r�������*Z��E(���&~��l�e9�c.�Ax�y)\���C-�1?�ȡ#��y�3�q�9�2P�Ys"��#�9x�֖�&ȁ��()0��� ��|��~&����|�����'�����@��y�{����V"��a
O��,���P�y�VXoI�{�Ǻ�S����o01>F���H�7%ػ�0���+���&X�zO��I]���{���[f�i5���1����-[�ku;Lc��Bg��x̛��z��nG�N�b�?�uR��7���}�f��a�9E�4I�EQ�j�$�ǘ]<ƛ�u����#Q8J�W���ңM���$���ؽ��@dT�z��-��������j1�z����������hqj�;w�b����n����������gӺ�8ul��ԩ�Ea����]�	�%�}s$�ajϲ����(�,vNa���1.��"~�_��ˮ=�"-H�q� t�
�Wy�êAAY����,%.w�D2��g?��|����`�>A�j����(yV�Y�21>Y�z��5��؊"B��D�3uIj�s���U�E0h� U�W֊2'ϳ iS2DN�2����'LF#����]x|��3��>���3�A��<��Cn�)|�#N{$Q����1̜<���G������g�C������`]���A���dTXڒ�((��_E��2ɕW]��l��|�; �4[��-:�%l鈢8H����r�:�[������ErY*�����e���9(ve�9k1:"65��h��o��K�FIEimࡥ�Z=a��j���8q�SS�D&�,]Ph���C��a��a�8/�a]$�	��y���	2�3. ���'��g����ڧ#�;��AQ����R����bwY^u�K������RX����G>�1t�0=�g��%21�1��Y��Z�*Q�-)֕dyA�^��1���J4i�e�#��^�[��jd�Ȼ)Z���p�# 1H'��G��'��Ӭ�Z���J��!�WE������M��w��ԦE���@iEQXlቚu�Ŝ�����~��Ԓ�ӫ�Zi�(�9K�vQJ�Cˆn1ĲV$&4MQ��]�����Iw���U�V�wKZ��ؼU��C��?��Թʅ�e�R��WJ
������ó�w%o}����sG�fD���ۡ�Y?����0�
�
i$�����<���g8ut��d���$�c�p�`~��B1:6
>�G�r��U^�J�w��$�d��(�;?�VHYEF��\����'��8��*O)��
�C\�w}�dV�?}�8��|���[��{K�q�������R��)�^��V�F�A�eY�Hc���$Ǐ���C��h��k�̃���J��RB�<'|�]�1�������i�i��8�#=�hk�2��n�>V���^y�p Ċ��b����^�}�C���\ �� N[7��
��IRJp>�`�
��E>��_s��ZE��Q��{���c��w�}��w�R�h��R��5p�f�A5�|>�@
%mH	����OZ ���M��kѵ��B�U��
�4�?)�IKQ:�m�������G9����/����q02�`+w����|���ĝ�����
Qc��,���()ɳ�+P�o�:��׏�����'�SL�����t��U��yh'��M~�_����'��z��TشDEm4w޲����'�=:���jpas�Q�2��$nJ���o�^Hn3z���C���5�1��Q��|��BΆ�����y��R�%q��]����V��V!`an�<�i5G��"2
�����:����]�t��s��&��Pd�Tr�9�W��.�k�
 �d�k_u/��(Y\:�bw�/������\���)ʌ"ˉ��+C�X�D��*�U��mn�VB!�u�C|����"�*6�=�Vm�C��R&�(�QR��֕(%�9��B*��XH<���Lr ���[���!��y���Ő�$iQ��� [A��2Rལ(sz�.ֺ������!�=Y@��
�P��=᥯«B��%NbF�uz�.�����Np��Y%�
n���E���jF[c�D���"���֕��"�&RJ*�<���9�W�s���q��I~p�]IҨ�7���	�$�Bֆ��ۧ_rr�M@�!Z��'~n�!W����N{���t5
�Y%5YV`KK�5�2��v���g���Ϻ��[��E�#�G,��<��!�Nͣ��{�V%uUd��oFV�*��&�C	�霱+?��S�e�~r�?Ep#7�7�&wEr��F��-]���kE<!?�@)Lbl�4��͡��=���yD�(���r��k�w����� �60ј��n����$	�ڊO`�lͻ��	��\T?�^�Qx"�˜��,�y�;y�
��R-бG)�-=8�҆ά�r�~�V�mچ�!�7�"�	�GO��\ʻ��j-��%^�y�
�Hmؿ�(����s��<�����`��yF�g_֖YFi�$Ɩ%�(i6Z�,8�H�SP��25�
##z�-�J�{Z�
���pKb%��!������snC��tt�m�WM�;��׹�y��=�pHmA�H#�S����6}�X�E/D��v=��o�?�s��4k#�5���p�!OK��.qTc|d�e�����*���rp2�n� J��I 絪��jYҧ�F)]�K����G�g��(���y��]��/��d|6�g���?��t! +;��o�]x����6���yK�Ӭ7�,u(�f�A��3G�-i5Fi�Z��=ξC{ٿ� x����H�5.���#�B���y�¥-C0�D�0~q�CJ�L�e���<�У�w0��Ze�U1t���v�N�����:x`��00����*,�;�| �\�!����2p&��[G��

4��-z�w��m�"�e�Y�ht=a�5¾���w�A�HQ��*�JTO8���Y�[���c�v����k�=�����̄�7�ؿ�-D&�K�`��\q�`�#�3���e՚)���2�FQ_k�Q�"]���7��葓��N�M$�z�Z�@v�8�B�X���+.���y�2�򌉉	j��CGr����*�c	E/E�)�+��Sf����s�n:�.�Y�Xb�ɋ.�t�������sx�
�fbU�&�hԚA�K`o�K��{����%��B/���fc4i�
��D+�����Ö�f�A7��#�e�X5������.��F��>�%��&$�i�UQ&2<�(
�*B�j�yK�u�t�\p�y��＇+�w1V����@D3����Z�~��x��}�q=��K|�?���������o��]F�l^y�����]J�Ғ�ijq���Eʼ`ld�y�CH J�|�(臩 �����ه�n�
�|+���ߓR��&�kVY��͝���<u���<i�CHG���FB��`�iꍄ�#$tzmffO07?�u��������-����1s!V���t}�>�e0�s�8�S!*b���A�v8uj��V�5�� ������Vs���"sl۲���������O���ٻ��kT�(�"$¹�ޕ��&AHI7��)�`:��IC#"������ȿ�7��K����H�zVR9�:�,R�k�W��P�>�y��诧�l�:����4�?E�X!���{/��}��r��}O������K_:֯������m�r�Q�ai����k���X�f
��(r���������~��,]��7>�_־���dS>����jD�p[:��D����.#iizv�l�oy5���,Jc�njn���������L�#6JH�	]��F��Ҵ�ʪ��W�r@�Al���4y�E%�_���%�>�,�M:�|
k&B��R��什����"Ǐ%�#�2�p��R��~��x�/E�����y��`�������[����D���$�S�8<��6B�C���U0$ђ�Y��D
]�[)EQ2��^k��鐥9�Z\�33��Dq�u����F�����R�G0%�y��+s��X�v�w���x����^��5��K�-K��Jg��'Â�BV#4��
r�'��c���?��}�#�]଍ۨ�-�O��k��Ѩ�h6�����{dC�!�r�������e�(VZ�Q��DE���*�9���Z!Bz��ˬtd;$c(GZ�X��3מe�;GVv����$�4'kL�c����`;�_r�_���/����������lܺ��&*d�K/k���,�H�J+����<��Zʼ$�FE��ꢽ�cy��K�����A�b��}���@]9N��G8򼨌�T�|k^aYxg���&��;Ȟ=�q�d��Z��ut�����d]�b�tI��*d�㊠� �L���i�&>��C��1&
��J��#[:p�D�C�闳��疜^�_1XF������܁4�E@%�y~Y���S����b?29�=�W<!2eYE�/��~�?��
�w!�=I�JN[b�j�aThol��`�-L�#i5(˂�S�ԛM�ҳ���?z�"�	����H�g�~����'�P?�gq����n��}���=�q3/{�Sw8xLqC���j#MJ�b"5ñ�C��5W_{
Fp��%�(Kt[�뮽�<t�u���{g�^g U{�����Ҳyʠ�UC���F�e�0Z��GSӼ���q���o~W@䱒��H�TI}�p�u���s������>���1��,��˳���g��
LS�K@\7()�Q����r���]�w�=���u��1{j'2�(���a�pw)OBR��9e^�phKi�0�4!���Y@DT�Y=������y���t�v{��t�P���dN/�g��I������W^�/BAs"���k�yGa��~{���,��/���}�/}�k|��ߡ3gٰzc#,-.Q�F=A
In{X/@Y�A	���tN��4,�@V�M�8a�s���].E(L�-q�ҵB-�"\�^�f%q�`��Ŗ���t��fKX��Tu�E��j�4^|!�]t>��N2�z��h��Vc�5J�� N"�Q(B�k�9������������<�k7w�qw�}/�zL��gzb
Z
lQb�'����6� �������U�F�� l�g�
!!tu�����񏿕�8
�>�=jE'V0ޝ)#L���y.O]�PV���ީ�����籔-��|�SG�s��_���='�I;)AM�w��V���r��h�8����$A�{ξt#o��7����cN�nj#�t�Zm�z���9�^�H��1at� ����}��:� �!W�j�t���^�r��q��b(�?0�����ׁ5\��sp�(�,�>�B��p��`�z!N�QC�C�Ҵ�т�����v��:��<��Gx��=l=5Yaɽdt�2������-|���c��fD�Q��(�M 8F�Q���O��P����ׁ/���O��~��u��n	 ���x��'��;�8�KH�I3&�)N��.�d�E�q�U� T�D�M�4�y��~� ��h�h�˰��~�)��j~�C�O8[��c��4��S��S������Z��j�1ʐS�ÆJC��-�F֭���w��׾�mn��w���[�.ez�KY�u@�yIY:�&0�=�>̧?�Yf�ϰa�|j(�M�+
�/�0IOU��ޅ�\J6@�^��Z͓�'h�w����Z���>i7�JIk��L�ʜ̷��%ЖW��:^���yh����
�/�=R��(/�_���YFG��2"�,qS�Н����>ýw�Ħ���mL�
�w
�BzxA�4�b O6+Z��W>������?3w�'���2�B:!��]����F
��{j#-:i���L�f�^X���%Y�c�ޝLNNpŕ����e���l={7�ed��PU��
#Ԁ	��ՠ��(cFi Sl�7s�E[9���������|�K���};9��s�7�:����$S#�8z�$�Nfbb2���pX<�P\�]!
��B�?� O�w�X^��l_N{�
��&R8eY��c׽�w��3??ϳ^q�h��� �kX癛�c|b1,sv%���ᵢ>s���_�����M�|�>&[���.t%�#�e�Ӣ���V��9/�����SU�>C�!#"�8S����C~�Tt:Sߋ�*�
���Zd!)��<�B����ݥ',�F�O@th�[>NJ��9�N��<������L+�6!��h�8��sY�n��N29�pVS:��� �T�gPK��P�p����������<M�i� ~O����
���
�\��}�F��y�(AJI���I4h�b��l��_�2^��Vs��2�S�њ��{|�������8�K��.4!����@G1���k�B��^�B^����gz(��L�����w�0!�VB�Y���0ƹ۶�~�zZcuλ`;����l9o�,)�]��ZA!��r�W�p_�ۯ��
F��Y�R
��c���Y ��%�RG���
>5���YŧAx���U)%E�@BT�������D�c'��_Ȼ���H1>����CC�e0�9v�(FŴ�#H��A��|�8�����|���EZA�1J-�S�%i/j	a���ii�Q��� s@Ї�s��$"I"��=l�����}N�r2�E*G��Q�'�ڔ>�1�u�F���o�︑W��E������\¦sV32� ��Y��F�J+p�*����EI��2\HB0Po5X�a-�{.�l?�-[�!�b��]t�Z�c!�:j�Z�`�<�_������w��٥������Ad4��x	��x�,>�#?�Xk�M�l@h�(�!���(�p������Z���g���<7Qlپ]D�YX$��
�@E1ed�A�2L���a��J�i�8+���=�O�=t
�j�Bd0����T�?�|�1	���%����g&�l�]H�|R����[�Ȱ�/��;�ۺ�����W!g�����8��(��}?�Z-ya�[����gr$ykT�k�5s�]�,��Hp��ש��oq�O]�o�J�_���g�xD8H}���dd�����Y�y-�x׍l8{����^����S|��c�}�zj�Lp�b���������e�-�b|b�s�?���m�5YCjAQ:�2�D*B	]9o�u�%e�aKs:fӖu\t�E\v��l;w+:R��@Fk�)RR*���s��|�n�G�>�©6�%��-��	�E���_-��xf%Op�=��4�XgI�5P�مH���,���/�ݿ�&֎�/��zH����-2\ڶ����0*�{�G$c=|�����	�}�VZ�c#�$Qg�NJY{�8�)fg� `�Q-��i�Z6�|�8��H�t��!��"��]DE��h�B�X�̰�4��#�{�6~��g��W�����x�k��ldz��Vև�_���/(l��U����bZJ��8�Ji����j���mlۼ���1��9q��{�<pd�Z�^�G�,�9�s�

����3�.�S�%#U�UЂ0c�!�×�Ǐ�{��lٲ�
���R��+LP!�� @
�QZ����<��#��)6oڄ��;wQ�Z������eN��$I���Ċ��gH����b8^؟��
.��*O�Ɠ+�˺���l�8	�����eipeԡ`��V3��+Fϔ�" D�+�U����cj�g]{:����A�hN��r��~l	��x]a��j���"�����o�}�_���x<���-��kO�:�����Oړ�hR��x��	�l���9t|?�x��y�[^�Ң���ͦP�����W��UbUgblY7ZG�,��_��eȉV�dߡ����LX�q
���*P��A#i���t�{)�$&�5�y��PoČ��
��GT��K�땨��{�G?|3�w���jjI��W��u��/���~F������㩲��v'����객�D�����K�Z7���q�>o+�ۿ�5֞3Eo6#��	�����^,����-,�V��k��%�J<|�?���ɛ?��\�xs�� ̓iG%�Q� �<�$Xgf&-��[��� ָ(sҴK�����9�i��h���;��;��]dr��\q>׽��E��/~6Ϲ�*λ�,�6M`��W{�'#.FisJ[�pոF�l%m�/N(%J�F�B�r��y^��9�׏s��i�fz݌CG5�Te$mUβn0BR��sK�YD<��y���&"�k�I'`��}��.�zbSk&1MMYXz��z�F�����`M���W\ʀ����6��Lg1e��=diF��"+2��$�W�!(� wC���/]9-b؟A�f�P��\��Rt�?�+�2�i�̕�t�ʠ�a�Jbb3(d�T8���,M)��$�����F�H�	���g����>�U�[��d���2���9�� ����b�*�:�Oq&���R�UWe7����<���x�@�8t�Ǘ]g��m�/�PM��&��$���\���It"x�/���ނ�Z����#��uӇ?�]w�˺U񥠻����� Iὥ�vH�v�ͣ���v17�c||��U��HR��nZnf��"��$}v��t)R����H��������o��g?����LNL��u�Q�ń�ҭ���	ivÊ�����O�imhK�hw@�4�k>q���o�ֻ�~���c4�![闫���Y��e�:����8��$�������댵�h���z�"��/B�8@ն��EpX}5�3-L�Dx�/:3�P| S��)RCKL"A{��"�S�-�5/x�sx��/�oz
/z���v�f&7��tp���Bbb= 2Im��qX�S��8��t�}��2��~��+	������)?Гe�\��plܴ�/���S��z�m(%X�ai/EJ��2����g|�ἕ��˿�֭���"JJ�P:BH�҆(�q��Qzx/�֯e�9k*f�-m8�+��P�-��l"�����	\jiL$��^ˁ���� �H�4#Ij�YVV]˦6A�!��̊�����q�5�䂪8L"W�ǐ��䰌fT9^���N�G�K��$ID�gdY���eT(���x!����
d�5é�)f�f8k�&.�ry�����u�-��;��Y�11��fh�q&�ro�N�xڞ O� ��\0u����/}��?���\�(�/V���;ʥW^��o~1kF���̕࠷�(����̞�cbl�n;��Z�^90=3XT��R1�'����c��|���8t�8y�0���D���q�S�
�VĵW�ج���,R����ʽ͠���sG�88�������v6m�L��"�e�:�)tu�
.z�R�������G�݂�d�����x,N��F#ڽSt�6��o�%W��\l�٭&�����^�Ro+`]H�NAs�Ʈ�����C|��K�>������HC-�#�BUFEi/�"�$IB7��3���
�j����N9Qu:�"
(�I�.Ȓ(��%N�#�G\����k��E��r�50:9�sE���;��SL=B��e53���q.���»*���◥�}�x��c��V]f&��5�����E������A����G�jIR]��r�+�"~ 
��+ ���E�"���y�u��9��I\�ȑ���w�u���|�:�,�,�o%A��T���ˢ"��⭟�Dȏk211šÇy��i4�(�H;F%�뤒߹��R Ԁg�W�ݏ���+���kf(���������
 fNG\�E�uK��Дe=�<�O��qR�oJ�g�u��DI�bg���P��?+(�CIYZ��-���?����j$QCW��>a�L4�>�n�p��|����2�� b�Λ�kv�nKa�����H�gZЄJ��hw��!��U�}9�yޕ��bR��%�-�ȟ�̭߽�f�B��DK3���3����R	&�&1qD�� ��(����{��;8t�0ZČ����@ֱ�D"*"�'-�XW���(3�<EI�TʲEI��s�у�y�]di����B�,ː(f9�F�*��"!Z_A���9~l�Z	><��%��݃q�\�
s��漣֊�]:B�{�ƿ�u���k��@�Q�m)m�T�GĲ]i_�K��q�p�ޣ������/|���i&[�dK��I�k(Y������he�L4 z�Sx^2� � ������E����\5�q��,9/|�/���x�^�ٗlAipʂr[�H�QF%)�uh�*�1F�q�Xl������e���y��*9Y�T�'T�Q�?�ltk�Q�K%#�5��kX����7�Akd$i��e�@U�H���g���i�
��h-��N�wPX¸�"d�LNM�{�.��>�m�κ�kIjC]�pp�%���ʢ�U��*R�YZ�e��<�����nhDJ��1��j�#��������ᮝ3t|W����Y���Wb �u}�]z�7��"p,��K�/b�����%���t�p±n�z&'�qX:�6�th���V����x�-q4����l۶����fW�`� �1�'�y��G)sG��º�m�}��7�a��z���/��S�xJ�N���?}�K"���?C�����R�޲ЙU�i�z���ظmU�葔�E7%�3]����?8~t�
k6S��F���^��Q���㊔�N�t��c�OE�o �k,�/���|�����ޣLMN��i�z�Om ����(*�^UY�J�u���� �"�\u��l޸�cGNr��q�֌�M@ n��L�1$w���6�G��
N�H�2�e�/Z�`��Gf2�;�
oy��ko�9m(Ӡ�ױ�t�-������:z��Wzp��df���?�!����ش�,Z�Q|.�ܑgEP x��� ��i6@�y����A��`0��|���dD
C��99s���<�yW����k�����z�FL$q��s|Y �@Ee������n�g*E�eP2|�G?+rD0L�j�Q�p��~�B����Ɋ^(@�%��
�ݦ�[��p����
�G��qa�������Y�7II�--Ei+�Z���Hi���<?u���#���v�?��#�p�5W1�q�	� '�'�8���h(�Y�S��(	��Փ�ɋ�����{&�W��� ����r��t�������%��p9��a��A����WFX��Z^%N�y�MF�sJ��E�u��-���J�{�\|酀gff�<ω"SEf�ʌ뙿.m���6�z�NZ�,-u�7�zޅQ��c�H����;@�ݣ���ls&�)֨XY_��璘�Q����� O� ����O^��2g��"��VPKN']��z1/x鳉�L%x�(�w�an��0�Ϊ�5�Y��.̀T���.=�+��h%���7�=��^������Ge����?E�4���D�5�p�ju��dYF�hm�*� R��P��[��쳷p��r��m<t��f����q-�p%Y���n�q��ɭ�{^#\ux���Я���8�PZ��e%isXt��F�Й�W.��k���|3�Κ�(�HL���.�ͩ%5�/�e)Z�Ha*�fAw1��Ii4�?���|��|��@=��zj-��Z��_�-��L��;kֻ������	֜�;�9������WFQ�J�sނ��X�DA']�$'-���m.���������s��ۉ.
�o����I!��h��{Z�h�\��>�Z�����M�s�9�AI]u���@	�*�԰��b{�(�����"lML�k�f��I<���S�6G�%uN��!�VM���n+��5Xֆ�ѕ:�'��a4d+KnW!LE���K�mZ��m^MQ���Z�-=yQV�1���*��C��
H��f}�,Oy`�N�N�Hm�N�K���Ćv�M��4M�8�(�p��d�x
 /+bI֭�^��
Z�
EQ�$�xA^�(�i4Z�qBaڽE�Ϩ�"�D�ɖ�[�ŋ�-�l��<�7��z^�q��[�r�*}� �ݷ�ҕ4�M.��Õ����G��
�ર�$IjH�X\���˯d����0 �Ԣ�
-
����:F�^WN���I�7���Wo��/}����J0�����<����4�>GŞ�_�r.�t+^��'#�҉�/~��y��݌��IL��pDJ94�ϸ�û�ƦLe*#1� ��y���<Q351�1�������<��ҥ���#���PvS�^�21��ʢ�lD5ZEa�*Ȼ�$�Fذv;�?�uk����n��c!I�$�$d�;K��YV��H��沋�x�%�:�@/��OR��j����QNΝDHO�3Ϻ��xׯ�"�]}.HOY8T$���:�#��+Q�`KG��ҡ�%g�љ)��G��׾�
�n�Xk�"�(4qT)[�����ـ�T.8޻'\����	Ll9��B2_`��Xb)�mV]��b����Y?�[��f^���xֳ�`tS�e'��tM""��W�Z�)�8��з��"�?�_�,���IZl{�ԕ�BK~�ɔ6g�3��%�z�Y�a"ֵ��O�Pt<��C�H���RU6�!�ឰ��Y�D�x�!�j�3����&�2z�%���5kW��2~p�+�n����J�H{a�E���k�t��ftX��P!c#Ԓ�Csx�1��z���|!��yOOl���i�0_�� p�*�++lm�*H��,c����	����֨#���Y��Y�b�����}��C����_x.׿�z���W�W\ù�E}4��$��i��|��H������n���h
Ǐ��OV
f+9�' AFʲ���q�y�u�zT�s���{x�1�� JDĺl������ Og��J�?zϙ����B:
r6mY�k��b�6����U������G�:�ё)��ң���6�3Б�j�J]6l��󂬗bKKŴjM���81�����}߃,-�Y�j���I"�2���k��i�0x+�^�%�9�u��b��S\v�Ŭ�^Mg����b�ۦ�j��&�C&y���å�@m?�&N3K� oD���@(��2��놴�];�L�y���e�?�dTㅧ��K�(��R(���/1DPzt]�-8>��_�3���%F��4G����S��xx�1�� N�F{8X�M7�]@��2ڬ�!���Y
L,aN;�Nq|��f��~Ṽ��o�Uoz�7N�kC�v�wP+籏c�2D�P˼�����G��W*5�YR��##�<�(m@;���>����H�<� E\�4�u�8���Y�%u�&�H{=:�6�Zm9p�� ��7T�����C~B�t�KEFk�IEt:Kdݔ���8����ncd�N�+������}ֺ�DpJ�+�uzeЉ��lR��8��!f���j������F��1a|��y8O�*�+�(��3�Ù�6@E��(��∸^Cj�����Ro���S��.Q�15�������c��U\��ky�;n�
o9/|�s�p�4�F����`#��52Νw�����h�dy�DP3�e��ǹ���޷,K�HQ逖zO������Q�o�Ns<���9�h��w�v'���Z��۠:��3<���
���Z)R�cU�󯽚�������9���w�u�������i�S�J�-D ��e�����Ǣ5C�*�#�6���×Ш7G�ܩEzp/����C��I&&��5c�w���|5ӕ�".�Pu��B%!>���9�ygs��a�F"S������9I=��l6���,�!G�4�2�bX�#+�{�F��LN�a�en~��U�>����������_�<���72�*X��eP�0�6:�ux/�zF�DI�/l��|꯾�?�a�vN#n1���4��q	��#�&O�JOۿ���r�'�;>������	x��ra�R�����.��B^{�+x˻o���N���*�I 4 ��gJUu�}~��S�8=��1�ϋ�<s�ih($��0��"�
�����QP��V��t!�flm�����׿E�����xȽ/ʠ�צ)�< C{^�.��OoE��$�Z��uYj���1S��.u��w�bǹ�0��Ve4D�FH�u�Bh����)�{$��U��)�������S�]��Jt�^%Qdm�6\Ih[�T���a
�k-E�S�D���EJ�rt$I�^Z���deJ�P�]��g=�*������F�x�y��0���4-qV�#ҬD%�z3���6�w��Y���h��u
�|\��� }�B)
.�鄃,�(ʌ�����MS��(����ԛ5���N�?z�X�0&�9f3���� ��+-E�������0�] �)����~Ѻp�[[ɭ�G���~��v�c�>��`3IJ"��(��X"�����;}�(!0F�%5E^�vS�ܡI�_�R����}�G�<��l��d���Fj��R��h����w+��А|ds���1.|���w��hў�2�0G��Lx)L��OO�Z!���+.��G��M�et�AV�åt���}���of�yӔ�����Z�HN�:��Qf�H'�4�S��|�3����p����m!�5\�Z:�0��Jo�U Ox=�O@n���$O��p�K��җ{^��2fjU�,��8|� *����ż���"/xóY� _�񥬪E?x�۞�k�R�1��SD����O�<fK{(K���ME<U(/-$Y/#�S���N����}�^����Ȼ9y��"D$h4|�k�e��|�J3��DQ\�
�ϩ��ôY?( ��C�Z�e�s"�$u\����e՚5\p��x�,�@(�E�eZ_�\��&
�wk��Qo�Y�z=���`��]L��i��fYp$��*Vݯ���p�xF�2�dy��A� UP��oFa3�4��5+:x��U�� �i����s�s
�x�
��^��s77eQ��Y^�#�I����N�K�D($#���>����1�N�D�!񏭤��'5���(2�,�`�F+��%s�3lز�nG&��v�6N4��s�wc�hs��,ϴe�`�h|i��mOz�
���p�/�ʼ������
�l��6��嵌L$�ܢ"Qy�k�{_��W�>���g�V[��`�dR������w�J��b�B�\Um�֓�9��Z<B�>��cI��S�����z��\�hs���-̘FxO��L��F���"L���N���8��W\̖���t���(e�B
ܧ�~Z�/3�A�R�����M��-:dEi������2�zɅd��h�w(#V�}��(-
M-n JI�:���s?���xp׃��q;�x�����EHl�f�ކ�V�M�@�F��ꈅ�	�TÅ�|���^E&2�>ln2�e>=IZ.�e�Y����w����!w�R�T���܃A/,C���OΕD����(F?t1����M�����Fy fX��%��$���H���|��O��};9g�V�YM�KABǃ0�t.g����z)�����eY���� ^�V @��6$x:�*���$�ku�,g��
�Ԫ)?̩�Y6�����[�h]e�$d�����rS�X(��9�`Uc
�>��]{��l�	�4�U.x�{^�X-��	�9�MlB�[�#ͻX
t"�I]cbAZt��de�^���I.��|nx�y��_��_xk7���0~s�Q��"�� ��f8���K�
����&��p��FxA�6�Jx�bc�_ ���T��
FkZj��̜:Ac4��+�ctM���x��$11����-��8�fblr���X� �\�5s�W���I �v�����2z֏����Bo��+y�����_�rA�j�-K����׿÷��v�GV�Y�)z�ȄCJ	�6p�(�O�Nu�n����*�>@�ι �r ��Q��C`8~l[:֭]G-n�us��;�C?���SĺI�� �G�D!#�PUZ�p(���l��%26�z%�����8k�9��αg�#� �Ð��<P�
�a���TJ�Rw�z#�٪1�4K/o33?���{���bj#Ix�d8Z�c?'T�RJ��P:�"��Ł�'����5ܷ��k6�ո"�I�0&���#�f8QFF~�];� X�9�'D���,˒�,�ZE���g9i�"$�,#um���g��w��W����mPf���!
ĭ(UH�S��T����#O��O@[^��q*���u_���Rj�H/�f��Bh��u�<��޻��������x�K^�5Ͼ�z��q�[X0^�~�:����p��cc��y��
MN���� ��"4}��z�*S� K�ʾY��������H�G�r��	�n���M�-�J�$��k*T��y"Eؿ������z�5�(��/|������F$�p�j���D?�  ?&��K���X�-p��QҼ�dz�/~�u�����_z^��ѱ�aC,x*��C�u�˰��Z�Uc4� i2����Gp��	jQi�����>�xR� ��9O�:�WH�� O��@j��s�66������xeh$-����=x�Z\���%*�BH�m�k�?۷���}��̌ ��ſ|�oő��#Θ��pC�	.NGN�>��]�y;�w��:Q�'G(ŁG���=�>|�z4����Uv�;J���7Ob�����a�t����+T"̛�T�qB�cp����n��SO��m�g�H{#�QV�Z�s�]�wq�=�����ɺ�k0qp����K%R�2@}ֆCH��������|�[�H�Ɉu��ŋ�
 HF&�# + ޡ� �E�>�ݝ'+{�߸�����a�9(:�� �S)<��It}����>�(��+��&����"bj|5s�(i�+B�rPY؀T��qނ�^��d�Q�R��Bʲ$��Pi��t���Y���n���^�K�Q��4#���Y��������V�	�CQ:��!�Gp��/zX�5�"*;ߡOj�Z�X��:�e��d=H7����#3|��_����ؽs�y���7��(	�%ֆ����o=�D���>���R��s)��, �>���3b��Q��_�Z�<�(,�Nh6Fh:Kc1ݼ��cGPʰ~�F��G�Q0�b�Ze��C���^��v�ii�9~h�'g)G'Hi�+J�N�CL�C~z���ci4k4�	�xҬ�Rw�n�H�u8���y�����f^���ش=�u��S٬)P
ԖΓY0ڲVUd�ꟾ۠R
�A�6��|�=;�P�,�(@���F>.)�G�<!ei���I^R%&�8�sb����8���u��6
M�(f.����diN�+Ӯ3*���P��N\�ɷ̾j�'�
�#�������u���Zoy��߁�Ҡ���٥X�x�a��}��<�o��o��Tr><6+P���{�+��]���n��#��Öxg�
�>���
��p��
L|٣�A���a<0S��쪑�u��(�^�Mr�@�
A5-��WkU�5�R{���}��／�SK(����"jă�5A�7��c+�X��p��f8��<��O�o�J�6J�ԫNz�=>�\��C�x�:q	J���Ks�M�o������_Jk)�GG
]���M���BaKO��aꆬ����_����2��
�s�&��E`л���tp�Q�kDQ2p������A��~���tD�9���_)�ԁ|��=J��$>cy�
/�W~��LNO��������$F�J��wc�K/\ �Tq�l_���m5�l��BG0��X�d�WH��%��P���˟�����O��_~��6o���޿畯}i�g��	���
��%e����x�GI{��ZF�y	J��i�lh�N����</����(JPRS�!-Fz��9�#M���ڹ��K. ���<����C�BbKG��A^�"T�p�ctU��go�k_�&{���!21y�c��͐�~�b�7�{FxY]�q��ǭP���_9��P���$i�ı�#�-�`rz��^�\~�]o�M�|=�z���2��i��x�A���H�|W.H-PF�<�
U��������2Z�5�n�����=��k����
�*�%�z� K�D5��)�G2q�U�09=>�����v�=w=���,��HH:��y�\��	�M!����Z�c�WkTyg�9{ۭ�^�{?r�#�>����nT�R�xѿ��45�6s��sP�t)#�48�n�������!�/��:�����aY�7_(��
�����_�:ӭ�D�����Tk0����x�5�}:g���%��I�F��2/���-�He��\��*��t�#C_�8�G
�1AI�1:֤�Y����<U�5D������=���.�ק�h!���y���38+�V���|��_�7}�����Q�S('+/���~ �{ʲ�^���"�vQ��)J�
>�N�̶Ob��W�ᕼ��W54N�_! �$�:���"̸ '����-�w������c�O1֘FلX���x���%�@*M��f�~�!@�b���9z�����������(��Gա���cz�o���񪷾���&HtR�g*C��\'������a��ӼtaMVv��2[�|�	"4��"�ht`�/�.[:�v��O-�w_���?�k_���wW_�,�����s���R�2��*�*��@��e�R�Ь�a�������g @X1U��
r�_C��Gʐ� 2	�ZbTD��$�Io)e�;i6\|�y`���B����`>&��,u��a-9*���FXZ�r��!�P�`>>:A��UP���	C�ރ��W��㬫�9rŴ)\�R*�SZW�|�D���,'N&s����W^���Ko�eox?gckF���s��e�	�~���R8����x��=qP�.lK�qe	��k�;Ȟ�2R�"R5�i�O�Z����&%^Z�,*;=��Ü�q]}.X�_
��ذ��x��G��ƨך��ExI"���k^T�3���[��-���V�H!����5{�M��?*"X���~�-�U7ި���[��a�XE<��CG��*ː�6���2�	q�Ε��gչ�\���@�p���:@r��Yv������a���}'�{�N�\�9�: 693�"%��Iɒ���Z�=�{m�f���v?�����Y��ʖe[� QL)� "�@h���]ݕOx����S�����;Ã�$Tu�y�����;�+�K�RS��셣V
�8�L_%S�=�Ý1dO�%ZG$J�%�f,��DZ�h4�k1��Q
���$7� �Z���#t%�ɞ�t� �$�]��4�Q���(�Il��e|d�a~��>�6'����3G�̯�������/=�B���=:�z�5��ߦ��a��}D"!��:vCI`~X_�B!`˂�V�kt-�0�$�t����-���>H},�p!5�ŨX�BOY	�V"8�9�Y��8�9��Y����$k��u��cI�1aN�u��'	����]u�H1PF\F�2:������X@�
;���`1��˒v�#mv�Η~�W���?@s,!/��_�xއ�DE��������{��W��낙��H�\d�.�"	?��RЬ��x<�E̟�q��x�ٟ��K/p�ȫ�E��?�%��?���x�u��A��v�d?����l[e*i�DqJ!�Ei]���g+� �U>��#F�x����ȟ�;��(��r�����4�/�䯿��߰�[�G�k��W�T��7}�A5*�
�/��������Sj����(E��6ǯ����hX�����!52
�Gg
��p���;/{X[�q��u�]�'ULl��m{8p�f��]{wP����t��(<����c+8N����r����C@=M�Hqޡ�F

&Xȧ��^����q�r=?��s�<�o��|�pA���f�_���yFG'8z�M^}�M�y��fu�Lnl���kx���X�,��
�w(����Xiˊ�)0���(\؏����5� �/�B>�k{��Ư�����l��V ���u�k����X��7W��ߵl��K.@Y���j�:JY�Y鴹i�>�o�D��+�l���_9����fzj�>���{B�n������"#NjI�����S�=�(q8鰞�O-��t��.yQ`]��TH"����+���J�	�3B�^�T��t�*X LO��,�{<��gy��[<�����An��z҉l�,t
�9���9~�{v�AxA��6��ɇ�nK$q�)
�N-��0x��U�;��d�.������l�v32H#ȋc=J��b�BLg��j)QcsC�+I�"ڳ=��'���G�*�ј��,��Dh%��\3<������������FU��Z8f���1K�tۍ����w���[�R��eĵ����C������g����;�{�YF�ic�#wE_��pNW�	��a%2Qē���]�}�%�z�y^|�yV�K,//�{���#n��:
��M�i�@K�DXc��p�Vo�ި����>�&dȇ�����J�!��/�ʵ��n322B��`K϶��9u����͎=[��&�6|��KE͆�����I��M�f�����O���%B:�fg�����x�#QA��(��`]E�Pi�bE%X[��]��4Z5<��/�<�D��ٴu#7�}#�o��u7�a׾m���d��~����T��֔չT�JF��s�8�H�@Ƴ_:p��%_0�HR�l�e�n֯�ʥyeH$>z�Z)��sչ��}e��E0���ܙY��z��wo�IpyԱb�ݬ�8�ϟ�����Y�$Y�4vy�P�5�v��#罍U�r����W��|���G* x�k��G�n"}F��^�̊��!��"�HUd�p��EN�.�,�h��\�ulڴ���z����C�p�w�0���9q%�Z�1��\��>$��E�u%q19=�������V(mN��
r���3�"�k):������UdY^@�����Ɩ���i2?�H��	M���9�u�5��|��W�;}��G��ǟx��|�A���A���G�#,<��!�}�i�&fذa����m�4k-��i���2Y�p&T�i��
ݬKR�@9�Ȋ���:������&&7(���I��@��Xal6�S:�F�+O��Y���?��-i�u��(E蘒z�n��~�������yV}�Y�e�H"J���^b����{����[Cp��D:����q�!I�`x�sE\mVzթ�(0�[�ز�QDMG8����#t-PV�Dj
(.�[���S'y����Ϟ��Y���qDRK��������mn��:�Z
������Q~5��"���
t��KduT�<�|�O1i�V�H)�4N���ܳ����Ư�Ԛ��X.j�CxL?���P��
�ARn��&>����w~������0��F8���r�㤫,�-EQ��!�Q��	)|�Y��J�"
�^���J �j�������[�힛�����L4P*�e�^ �4
�<xS�b���Z�+p��YQ!u�t���F�P:݌4NHF4��[Ͼ�믿�k/�R؏�L[�K��c|l������G�{��P@� ����-�7�e�^�,Ɩ4�:#�ʳ�����V�B�k�7��Wࡇ>�`f�:_U��`���~$�+��
n��EE��.
c�
;vnc�u{ё /-eϓ&
]��~��y[z�IS0��� �ZSyqR����	�;K�u�t,qQ����)�b�ŕ��"�9�br|������Q�f������l'�[�+����+�m���x���.'/Ü~�u3�\?�+ �ƠEbs����]T#c-Z�MV�xa���_���g���_�����<���;�\K�+ɳ�$I�20���U�#� C�4,A�PE��,ċj�����Yf6N��}���ׅ�� n&D:�4]�͈u��aI���&o� �y���O���X^�Ѭ�33���ss�*etl���e�H�Ep��7�k���T�� �k�+̯\d�u�����<��;�E�����ڰ+f����u��湜u=,�
s����� �r��=H'�B1��(��,+�t~�C��/��y��?A*������uIR͗�Η����LM�p���d=���C��R��jo�q���v�}�����_F�g���.�p�罜
�6s��I�����;7q���y)����2����0�{�یL����2�<�*o�v��̐-t@
Wm����l%bv���GRt$ɋ�+̭,�s2��X��1������x���q��H�蝷8/q&�D���s�����Ɉ�5�o��ZդI������t�K�������?~�GL�L�gǾJ����MCwJ�hX�ᝤUo1�|�7���\r���i���\�{'O������.�.fJ�af�W��
��+��?��Wˏ�x衯�����wYgy/���5�_ӌ��P�\܇S���VK�,�Ҳ���lڼq��F������1Μ=���މ
V[���ۈ��2��{���^�ި12�"S���
Ei���$Fd��.њ��{�&�v{��e���5t*AWj�2��=��b�sg�s�c\�x�׎�šgs��)�/�i���M���cq~�$N�TLnr&��h6��EF/[��P���F5���w��?p���FF9z�Z��,u��
iT�Qk�e%����0���U�XY���hJ��z�z3�����^:�z3��}$QJT��y�78�!Q8�NU�hM�̽�̷��~���)�Om&�H�HGd�.�����bW\�P�*)�� �bqy�(�����>�[�eۑ4�#[Q(�����.���>�Rlx����0�t6(E�VV`{S�DI��%"P@��s�9�}�{�q^~�5��`󆭨XSZC��̺�������|�W��)�C+(2��%@jPB�QC>~�]�,���[#'����X�) ���f]{�^IZ��[�$����q�6��c���=�\(�e	��j
k�,3�<f����sߝ{�8K�$�V�e
�a��#J�5Z���h�W��GD^a\��9NY��LM�p������ۮ�>�V]������5d��{Ki
�2'N"]�B�bY q%�Ņ���"BF1:�aO�x��\�]�ٟ���c��~k�����j�P����cZ�Cͥ����+�pE�[ǎq��Yv޼9�OA�L�v�.�g&�xj��/qUJ�P�}�޿�~��_�y�Pۭٲx�Z$�C _�k��|�5��AJ��z�?��_\��BV���,�Ɠ�u��(�A��KT�lܲ���1�V�D
)=�p���,/�06:AY؊8!X���՟�@T�;R�n��+��8q�Z#ebj!`��L���+�?�/�w>x�c-6n�H�U[Uͨp0VP�P�ԧ�X�c��7l����KK���<��'x�Ћ�8w����jTR�-���^���9���j��z������1.�;���Oc�g�>�Xc�K�����Hs�^7R�[��"t�U�$�������Q�����z��9s�{���g?�IƷ4�&D��IL7k�)�t̂q�
���8���0#~������?���F-��YZ�q3;;K�V�q?�~���J5\������\��%m�|���@
A�d*G6��0ЫH����߳V2��]>[��9��]�4FEX���(�i��\��]�y��S���'x��C�9{�,X�F�$��_Z��u��'�����a���
O�2Du��\[��D�nY)޹*��b����.˹�g�{�`�\�J�j�!~yѿ��p��S��$�s��q�M��<�Ν����_C�A��!J�A�PT��Bh�!���<l��>{�=�2���:���֚��"�@kM/�r��j��V��4,.]��kSk$LN��m�F�z�=p7�\���H��k�-��F��Hd%��QQ��8kB2���EDZm�pٚ��UAX���X�d��|�d��
���&O<�/�x��o���=��mefj=�.+K+�lI����p���Q��OC�p�fc�Kss�~�
v޴Q��~����ٺ}#�����gDV�d��J"1����\E�
'���m�ZǱ#���|M>���?\��H�	���2��°?��»p�8�)���aLi2�f�ؾs��4�-� JBI�[�׏᭧����\fȡ�dm�
B^A��Uu ����atl������#,/-q�}�����p�;I'��2�����*�.�A$��	6�IMDИ�ј�1�n���7s��n��c��G��?����1֘�mׂ
���k�@i���ёf��Bg��-%��16��X^^d��<c����i\�j�"����AG	��a#���!T�S@��]��x�X�,1�x�����'���n���L&�;!N"�)��gy��
��!����$G�=�w��C�/vؾi'�N9q�4����EN�&eNS7p�,���qX�n���3�i8RzJ�q��~�w�u��X��CǊ�am�u�����
CK�*��{W��X��r �q��Hۆ��DF
�y�y�,��r������⅋�;]��&������z�$7�|����s>��;شu'=��t{9���$�qk��VU"aL��}�NQ��:y�^�K#��s��E�������Z�`��;��R��D111������~��kws�}{��`+�����2�vB���uD��\ǲ��]|�_`��<�<'R"�A��G�0J��5G�ڱ�/1wi����#
��p��������l�٬+|�Q 
;gAAҌ�Z�)�e��AR]qo�7(/�X��L�!;4g[�+*�������~�4�<�*�?�2��9��|�nװ~r#�ID�-��'��Ԓg�!���q���^!/�@�21>A���՗�����K}:��g-��ٴe�����G��$�
�Fx,�HQ���e�ǐ���lT/D�����3���*��7y���������yx���8
��Jg��,��1==Ɇ��1(�>�V����os��A�!�3�U'4Ej��_�fN}-�XaXj�Ij	q1�8���%F��|�W>�W��p�'v�#O^vAV�ǣ"Ue���rYS�!����(�F0����4�)���A�������~��<�6���h4GXYX"M��:8�u��iL����%2��5��h��1/
��S,/.�TD��*�EБ�bү����T��GJ/7��`�=��䖃7s��.��ZtCbm�ǆ(S{N$�0t�+����(��	���?�G?�1�lً"��1��8NYZꢵddd����\����
��%{>0w�KGas6l�������]�uO\j|�A�'�.0���m��P�Z���}}����w���#��A$��=��Ç��7��+�_��)�����j�z=�I
n��f~g�os�gn��-7E�EhI���z'Hf�U���ga�p@�2t2����DD�z��z�Ҕ%�
�^��!��L�M��:\��������7������{�"J�5���X@�o<y;'�4�8���_z�S'������z��#�c@V��ReS�\����ñu�&��m_���7�}�&6o�D2 y_8�	{#�+�ER�������R��@��ҋ�W��İ�g�l��}:
v�s'�y��y���8�����X����5Re������e��(��u'�z�ط�kEw}d�(�^AZO�uz���[,\Z�>3M��Aaa=QS�y�J�D�]�{)zeߘ!�~�{���-5i��{qۗ�^��C���]X:�V ��x�~����w|P����Y�zO�d4�:�ĉ�k��|�
[׳iۆ�Y{���H����,.,��
�
��(��0pKb@��{�9g�.�g�RUTe�Mr��R"t���9#
��?�'|��36���0� ��O�sQ�(�QJ����j&��
�� ��BE�p��%q]s��;رw+��l�O��[\8{c
�V�4�i��i/u��uZ�р<xO�#:Y�:A���EjL�mq.T�����H�}`�˒<ς��-�fm�&G���>��}��U�m�+�EeJӧ��
$EVG1?�������i�I�9l���������W��6����c
V�;SW6�݀�#Mn�xiY\^����O}�.�Ң�$�������IB
M,��s �
ɍ���1t�R��A��4enp�Ǖ�p��'j��Y�|�r��9^|�E=}�W_~�g�;R�޼w�iJ��d��:�o�Ⱦ��s�7����(�����V��a�f���y�C�*B��n�Q�2R����r�������f����)������0�'H�<�R0��eg,X	��7oN����w\ϯ��)�C��J�p�D#ED��R>��X�Nv�|�f�.������4���S�t�=�V��*gjS�{�sÍ7p𮛸��=4օ��`��B��NB�k���H�Ô����;����)Z굌t�+N�)�eN�u�#Ͽ��O<��/����pN�j�0���6���|���
ZDԒ�D��v�<w^�������� u���e�8;˩wN�q�t�K���ۺc;vm�7N2ޘ
j�0��8��#
[A�Wk$�s�	��2Z�:�����W- �_�Z��:�X��}��� �	�Z.D8&��:��m��\7��Z��+�o;A��ezd4Ȕ�H�V�y+/�Գ**��
Δn�A�ⱨH������_��/��/~�ֆ�
�iR��&D�:�R����_��,Ea(MIG�WVݔD9�"t]�����[)_����O������nj3�V��K0Ƒ�!��˰���J�U�)
V��
6eᨥ��6n�D'|_�%ָH
qL��2���8�c|�����o"�G8cQq���V�b?�Wc]�R1��A�5�Y<����>��]bǖ}dm�&&Qрq��Y0J�N��Rz 9��-W�P�H,��2�Y���/^�6�p�X�{�lф�p��;9����rV1��b @����aK�w�̲[)����uD5M�T!�x�1�8�ˇ�r��9�>�6�z��Gߤ�
Z#�DZ�λlۺ��gg����ۿ�]{w0�y����,J)�U*�?!J���2YB���V� q�
bP�9v��ً�E�,H�x`E�˫��_:�އ�)I�ޓ�3�R�4Z�ݒ
�y������7޾�-;7��(bݤ�� � I[h�j3{���C���c�8��q.�#"I�Q�^k��9g.�aaq�Vc�M[������~���vۯ�F:��3�2�ҩH
fپ�ihW_Ʀ6��J��H<Q������K��nZWdk,\8����y�g��������s4
vl��F��),�n/(t��QoV!.��]Q�nJL5�[�#~JQ5�s�o,�����i0U�E^���w8p�
$�	ef6�[�le��{8��!Z���A�A�����!�+����)��4����>�_����X
�B�tS�����S\�0�C���ʢ��Vk��u� ��ȸ�A/gO^�wNb���-|��//#�����sޡ�F��-(�AX���d��E�2f�����|����_#�(�����c]H&��X�x'*��`���$1�˫�L�d�?e:�H�S���1䮠1���gn�����=��v���ۑ2byn�2/i�ZX����ĉ�P��A���b5�7XC}�j�8�Z��t��`l|�N٦���h&����l�f:lz�sHW�u\&�s�����8�y�'Or��jq���6�j.Q���7�1������8��sjqDk�ɅKgq2&J5.��˟�u�_�_:��D����WM~�
�])x�Ul�+C��bT��E��
�i����@ǚt$tX'����S{�'O��_���W�]��ts�v�#J��W�R�i�~�K�a�ޝ������4�j�Z�PU{Ei]�';/��P8Bx��A~��!K����2���9���(4���2"+r2�'1����}�H;d&ӗTj���8�R,/,�k��/.�o�������Ԛ16s�zLK��Q�f�\�7^>��c'9���|�)��%&'gغy;���_�������KE\�k7w�y�{���v2�9����lu^+d�M�p���ۮ�k�ٽ�"��Ғh��_�=8��DuZB	g�]��Ko��3�s��q��z������gv�l5�R����C�$$��,
��)ЭA�OB�qYS���rqk�t�M�G)�f�y���.��(Z%�-#5v]�-�CU�jʜ$��e1؇�+�D�e�w�����_�>�{�r �_��w:�>���I/�Y�|dU1!$�"ca�"�o��M;׭:�	��,��:y���jI�4����`X8�C��t���Eq0�q%�����lށu%���r�������M6�IMN�/wIℬ(@yji��c*
��-�zd!E�ٽ)BW��pkK�
��V
il\?��i�Ky��sg�%q:F�j\.���n�s�eU�b�2B�*��~B�{���ޢT�͸p�w�s��u��t��m�I_�N*xx�9�A�d���������� ��h��'u�̬N��[��6�˔�4MQZ��;��X���EF'����ۙ�1�+l�~�}W7�{"C�~�? ��A�p�&�k\��j#	�`�\�م�?r���8�_~��������52���[7l��M��ƛ�~�V�m�al���%<qMCV�`W�*�Հ_X1�2��Y�HyUupao9W�Ԋj���]�|�i�`��>���-Yc���兢�#�U���gVWg#>x��'��x��>��.p�][�J �@�0wf��^=��?š�����d����)��nVVV���^����T������'�����c��u�cCHlA�QO��>ܹ����k'���^����<�Xl̄�щ@�U �-v8wz�#Ϟ�����/1i�b���=�v�@)�-KV��N� M�D*���*�v�<48A��Qa߅Y_��v�J	��R�=Ҹ�r��W^���KLn
��(�%�h®}[i�6ɋ.����2x>�̫]���/�>�<} �>�|����?����Z ����gn��
��υ�?�����C}�w.�ASA��rqq���}�-[6�ݡB|��$��?A��4#H�N�Ы2	.Y'W�_I��)�����N$Ɨ�zm.]dlr�����r�}8��椮q��N:�\M �KR�WU_���O�� Ict$���l���5:
�N���w�|��wp��?�{��Ξeô���g
V��!�(��ʗ��"`ȤbXc�D�g�Z�qy�c���19|�~6�(7�t�:��0D,�8�+�a�,��_����H&DIJLLiLV�2o�b�J\>��=�3�g֓���K��8�qgϞ���������s��WڮrJ�[�� �5?���Ju҆�f�|�Dǂ���5�/`�l���.��~�o~���^�����z���q6o�����ŝw�������W��q]Uc�R���G@��R�8p	�D�
l��o-�\2Á/+��0�����I�n��z��o#r	R�X<IR���w�{��ί��p�N+�B��L��������cS-���lٲ�Ƥ���S���gx�gx��7YY^��j1�gEt�v{D�R��<͑��n��^n>���͵`nUz\Y�F�*}�:j�ǘ�
�
���C)v�	�<H��x�j�@Z��A{���.��o?���}�>�Q����`��6���!SD��d�HhQ�+��HG���
㜏{!�c��X���5�
�@�C6ǩSg9��	�ݲ��<����a��9z�8�x�8j�O/WA��$ؿ�	��Z�t������5�u���@��ź�R��z���-.ce[k��hS�9�-��^��5�^�R:0M-�,dy�u�Q�_���(��O���`�IyFُ�����u)Mί|����;��#rA�
rӡ9�$��Ī�p��c�bI�iJ{�da�M����M9�%��5��%���StCw���$��,�D�&W��clr�/�֯r��9~2�(���J������U�_�C-}��ZY�@3�׺�Yo!S�t�e����ۿ��>uzLb�����pth?`��c3ɑN��>����cI�����ש2!�?�r���	1�q�y+v��L���
C�������>ȆkfpY0W��"�_M�!�M	o._�}8�{B0IR�t�P �H�S��ae>��['��w��O�	Ν��j�njc
�6�糟���y�vNѨ�W'[�V��W�0BC��������~!�q�!��䡨�jlf+�s]�XH-�-�<���e�ՠ(�k�Y^B,Y|�FȳJʕ�
�C���J��M�9?{�?���`zr(�_|�[�z�e�c|�Ŏ-�0���tPB���v{�;w��2w�u���1f�[D#�,�0*�
D$@Y� A�D5�RJ���w[�s
B�1Hլ���Y���*���s�t��'.���S�{�%��d��
�i5����Ĕ�^���-�GkM]�Ik)i-%�2z�v���Vu��s�
����U�BEv�B��ұ
%JD�풷�'�����q}zj�n�CG��$�G�]��T�zWv����T�*i]������Y ��H;s��jJ�?�\���U"��`xk
Ɩlظ�-�f��������
8}j�cǎ����Ғ�	U]dC^R}cQMjD0��
�1!WYR��2�q8�-��ӟ���L��,�0d���0�6]�ʐ�4��9v�<�;��39�gN�EE��@Ǌ��	���̶��ذi���&Q��
b>0ǽ�8� E�1P�Ժo��So�����Xj/0Z� �c�Q��l�j�+.�]f|!��G2a~��z�5z�6ZK>����2ֹ�r��ǊayX�����,qM����[��>g�\��Ŕ���1�0O#ir���]��j,--II�#   IDAT�rLN���4G�\f�u{��.��$��Cs�Ր��>�E����dxf2+�E�����'����/��o��v����o��og�u�ػ�[j�l��:�a� 7%eY�#M��H����(�T|0��%�ej��Zs��U6�"0:$]R
�
���K���aZ�1F�c�҆0�H�%t�QTټ�������$*�W@�`;�@��	E�>F���_���-+��)H�7ndj�I7�p��iV�+�v~�>n���ٵ�M[729�"�J	�����H��<��
�L��r*-@�(p���>�O�Ꜻ��6�E(�*�9������c<��K�p�%Ο��p�f�`�6�B��s�s���h�^�GQ��Q,�#���HE�.!K���(��x��s��F��8@�u&��(��ǎ��ҥ�V��02k�4��曨7������'$冬��w�? /����j~ W\�]��j�p���*��ғ�	+��9�z���S��� �H����[o2���@�T���q�1Efދauf�
�f��-U�vY�J�������/}�k�ن�z�ݿ�Q�Y�?G�5�J4�Դ/<��!���k���@���[�j�FVI�cu��M�g�n��6�x� �h��zm�*� !$E�cJ��1R�������.��fe�M�6
�$�vPB�n�]f�b��P1��G�̙�-�v,�d�߷�O|��T�mxv�;����Z}�U/E��^�?}�	"3������DX�泩 \�w�����(�X\^F'���(��g)]�-0536\�B�)=���z<k��W�Y)En�:�F�N5�o�x�'}��{�7��I��Q�"�i��[�r�]w����ޛvSk�x�i_좓�(	΃���J�$�8��@;>���c�)���e�Wg��rm�����g�an��;y./<��:}�V�E��xr�E���_� ޻%h����Y�+�EI�5�n��W�a��E�7�f]3>>�w^=�2��s\�M|�w�����ڽ;ؼ{1�ci��E�a|�J��O��B� }��wde��֫ܒ���{���e�/!m�j�B��^y��~�C�����tWz1=>C�kP�������1��YN��E*�R}0��|����}q�?=x}(�C�.~�U���w�x��ri*5@E��Q��4�N����Y6l-PJP��$���ʶ�[Y<�Ƙ2p�\�hX��>�A9 xy��\Q �)����J�����������}�QeE���h58�p���r�͌6&�ARS!9)�XS0{�"�t��c�3t�F���,��k} �ն1% Ht��^a���^�32Qg�
;��S��E��H�2�+KH�'J5'�^���?��G~�q�&�����Q�P���:O{1cq�o�~�^x���~�w~���݄)� E��
�,� �C�³~�S�'�\Nzj���]bʒ�hk
���
�I�o�w���=1�{[���SZÝ������E�"#p<V���U-#W:⺢7_�����96�߀BӬGt�]\a���@r�kIt\f�q���CQ�q$��P���:6nZO��#~�u�vd�0�%�����ռ���yZ>�ߙ�>����0�y-�펌7c��.r�����/���Z�j`�����bM���2�e�o0E8$�݆qနr�x*��.9 ��w�/�΀J9"��C�sDRq��<�����_Zd�9�s�b�nA���l��&)%������
���㞬..W���"�d_	SII�AI�5:Y��,h�XȬ�f��fy�7��<���˝w��]����_O2� "��+��
���2�Uȗ�8J�X'p��R�(��'+�He�bA��[H�u���Or�y��#�v�5:+=�������&l�Ȼ%��
�3!�؋ ���Ę%R*��$Z
��D���Qܻ��>���U��pQ�?���pơ����,�- !�K������ٰq����"#�5��QG����e�!��a��jZw����_��w+ �V!�f7^���z���C���R��t�4��@	�+
���;�Po��h ��XZ����b�X:t��{$�b���V� 
fB&�E��-i3&MR;����o���
#����I���
Z��H�x�go�?��G�;{��w�~f3yV�Yɨ�!�&�5[�D%��찰8ˉ�����^���������n�f&H�%�"Tᝡ,-:�p±{�V�n��;���I�	F�Ԣ�NiW%txy��T�(��H�P���[�*��{r�l�f#w?x'q]�D�#�U	��Α��D��X%�t=�=�:O=�u٤&[�ܣ|(�A�Pd��~��\m�>�R@
A��hԚ_�n����5Rgf�d�q�r�p���8�::	c>�s9���U��a��%�1y���#��o|������3��L07��q_���ܯ|����L4�(WB�$�B'��V�:��"��Cis�uh!i$M�>�z��;]7��� q�]VV8��a��J$���UHڳ�?v�c����i"�!�[k�w��i~��>O��*�+�TN�Y־o~��xwjـ'bC��P�����ׄ��~B�'B�ЇМ c-ZIr,���q���.195�����6���̧>u/{o����x2���ʖWˠ��q�$J�*��`�f�a�U��+))Pf��m�C�
�P�yx�c�������+}�M.\�/X7����Q\C`KO�5+�h�Ɠ�x]�g
:�h֛XW�l�މc�*�2��??wy���8b>%}[l|_ecC�Yu�V�"p�DSKZd�2�=u�[����QL����1�����/�N/_!i�HL����q�*Zrx���y>���w�i�o�{���<�5�P.���_�y�R:����|D��j�'N'��4'��xeX�.��S뙜Eիy�Щ{���>u�f2���$��Q^�$	J
,�`���wwU���M0�P�Qu�Ҭ�87�L�jp�ݷ0�n40ݕ$7�4���t�b�b�?��?㱇�d|t���q���t~	kJ��2ƕ�R<��W��
�������1f�g8��[���o�����߱���D
�u}=�Ø�ZL�7ݺ�n���wf�,.#ˈz�$k�U���
��]�
�J���$Z����^G�-�� 6�z�M����<"��.@�"��Ba��Ȼ$:�t��pd�'��0g���O��MV�m
SRo��*�X��r��7c���}��A�F�ݼ��k�q�$��c�A��ꆾՅ\��Vw��9֭T�@�%�F����(��������~�/y��LM̰o�>��6s���q�~�~�����2���PN�t�f�jՙQ��"Ru�z}Ѕh������E��x�sP�V�Ａ��4�;��H�<���|�?}�����H�qt���t]/�.�(��F	��p0����������� �W��>�>�V���S/Y8��Pڰ6�Z3��H��
N�!I#����7��{����71��lfqPI ��bڣ�åm}_�������V��$�	�u�R!�FIA�+�d�k	I#
?sξ3υ�y��s|�;?�?����l\����cD:ƕ��r8��������{_!k"D��t��}���ܪ��2P�,���u����{�>\S���q��PZ"��F�j��/�x����Y&7�R�J��9E\K�s�nT�ȳ.BX�h#��b�ŉ��]'?�9X
��-��}O@� H�
$����7Ṍ����B`�V����%�7nct|d� �Zk|��>K��I�«@x��w�> Ϫ<m��.E����6�F���򞴖�n���oD���Ǝb�S:�
������_|��SғEР�u
Yi����q@��`gI0�Q"�f�:ƛS�}���������Y_C�	�	��q�g`ll%%E�G#JC�VU�pŌ��n�X����b��w6�[G�JX<���-S\�M�DҐc�M �� RRRKk$E�DJ�❷�p���$*%�RLQ���R*JSvq=��/������Z�PdN����z=�ξ"�դ>�C�^���@Pts�+h��㬠��������/����!���w�	�n�N��\�x���v^���{�����m�|F��Q�հ��CE
U3U�/DW�����hNCw�Xs��*��X�ZHJN8RYÔ�(	d��_8Ƿ����16��^u%2�cQu�8�p2�/��r����g@�V/�5�u�y�~��VJPL�p��9[�HEZk �����e +Oi
LV�����Kٿw�ݼ�[︅n��ĺ�`K�-A(�Ыײ���u����H��
�u�XR�eBirla1�!b�B�D�$��:��8��	���8��+�?���5n�} %�RIC�KU=O�!�h�䆯2��1�7����]��.���x�A켯F��I�=h��NW�D���<+�-�S���q��4�cM�'ǘm/�A��\m��Vw�b`j���Ai}C 7_�hM0������
�������.|%M
$�c�ΝLOOl�sz��2���
Jjj���T~`mk�]���*讟���	�v��X%u�t6�Kشy3[G���הEA��о���CΝ����z���tB�c��XS��Ú"�c*�$x�/���ɓ�)��y�'�q�����+ģz���3���0�`��-�H3י�53�1&hI�e��TV7����R
U9�9<N�U%����ع�oD*��M�-ƅ�F�ǂĲ�/�YK�&�\�����y󭷈TJE��	h���y)�֎�(��v:XgIkJJ�8&��5�� ��2&r�!���J�ĵ[(��4�#��,̶y�Ǉ��?�c^z�&ǧ������p��c��L����?��|�S�[?FQ:j#2��Y�����]�����r(.�	��������[U
��1yYb�#�!��������1�=�3��A�U�z$�ޮ�!|@H�o�p�Wg�⽾�*�g���`��=V�G��@x�y��@%QXK>����>�OY�vXn��E&
���s�ز��=�ʯ~�?�эI��-�,4b������3cJ�R(�?}E��X+D4�q��@"k$�`%M0l����^������O����Ⱥ%4�M�qZ�y��-���
�&"@���[�#:��}];�օ��������I
Q?�*'?K	"�Y^^�#'���}����xaHㄙu�ذ~�'�(lI�|�wԴ��X� >��9���ϵ�~�����*k����ݗ�^������|*��������v������7?�ȑ#��E8��۠�
�tS6����[Sׇ*IF!�FV*���er_�m�V�Z���!�ȕ�.Ip��1��2ITg��f.�.P�%�i����1��eVhT���!&��_�Y��
�p��Y���ⶻ���M�"� g-�W�~$�z��$b���� ��H�>H�7�ڔ�H
[2�vw�ɩ	��Vf�6)�L���c��u�*���HG/y�գ<��s�;m�G��+k-Zvx(Z~�xߏR��*���t�ɺ="�j��m5��@9�J�S�bLa��i]!c�k/�����������;X\Z���I&������k|�W?�M�]K2�1+g*��Dޯ�}e�����e�b�\�C� 	F�{��o-��]~����d
�X��Ty���9��_P��r���Ӭr/�T院�����P�����������B���mO�^��j7G�p�+�6��l����ɯ��]lۻ�H�Pk(D	"���#-�u�eH��;����H�-%Zʪa2]I��ޓ7a<��H�Ԟ�R�g�|�G�c�}��U�N=m15:��%��+,66�T�"�V�}�{\ tS�L�0��
ѓ�@m�?�E���y��2ʵ7�y)C��T�i��9�=���
����,'m$�O��q�&^��Q�%�8X�;�V��e��RP���ns�°!�" ������)��`���*#*���a�e�9
�Q����0�#6˗:�9}�#T��eL�_D*@��=������˺(-i�����uɵ��	�*竮K!�!�"�^�sO>K��3Q���=�D)kI:�p�8�(!�W<
o�9\eS�nf��:ċ�a����H_�*xT�H�\7�N4Y�C*A�A�gT���\�A��V�T║���\���z�-��hB��(E:	"��'C�pK�]��铼����6g���"�R��)�9�,CU� �ڿ��_ U�`%֕\�x��(�$O?p2����;�	$#�D	���K�u�K���o��N�:M�٤,,gϝ�k�s����{�`�u�29ӂ�� 
*)pN[�
��_�ιA���.��p�/��X�#�/c�[��0��S��h�Y:��?�.���wi�ӈ�\�0G-�!�2L
�V?�������]��������2����0pq�KX�����?_k��eY�l0r�QP�ıF(Aoe����w�9y�8�4���n�����n����)�75�7	e�ݾÀ
*
/~�&җB{!����H��gm�p�z���!�DaDPT�~'����G剟>��wN���Z��E(prS�|�����f������{ ��#}�r��z˭�\UZ�^��+�/�cj:��O.��:[5��wPRPO�hq��,++�L���p�y<i=b��
Dq��Ț����]�|���b��C�RZ���0l�/' *�
� x��2�s
kB'����@D���Z�}���v�4j���8�q�(.�U>x8�w�D��3���q����c�6DL%e���*EO����.���2��������!���M$yB��aF���	��'6'y�$�
&G�9��+|�w0>3Bg9'nH���ܒ��LQ��`q",2�p�ߍ/��]����z� Q	���[��Kl�f;;vm��#u��2�J0��+%R�0���x��)=�"��.���cs�]�4\(�^��d��V��B��͠�P���<�]��r7BW�J!������wA����6y��>���o���L�Or뭷�m�vv켆��=��k�12�^���(E`ڻ�:�����r�� ������؝����l���m���������=��?x���.;�l���n�f<욇$Ѳj��/��_ȭ��:�+��]\q����@�v?|��zYx��uA��Q���P/����Y�7\�;�J�����7����w�s�6�m��t]E:�Y\h���J��MUx��o�V/��^$�Q|�8J����Y(��"���%G�8ơC/���r��;,-.�LA�%�F�����+���h4J'�Ra��x`!��2+
���AF�UV�\S�+X>,�_���J�}�4X
�@z�p�(�I�����e�Q\��#�ƍ�7����YW�-
O��j�*>\r�j��wU� n���5UڻCnBB���"���i��
%-JF�N�}2������0�6}�R�$�q�,O�v�w�`����S�����TH�iP��07;���H%�^�h����,3zY��,Q2x������ �K��9����2��'��vr��,��o	Έ�$jE�}V��B�� �X!G�*�Wi����V��JD��L%���],1�~�k���E�U��ݱ)K� ��U���K-�
/>�
g�9K�VGk�+��_��c̠����V/�A�*�uB���k���������xe*��P��CK�
��7�O��7���~�˯���[��_�2�v�f��k9p���n����JFT�P�@����c��F*��������t� �VZ6��t�9wl�����?��ôj#l�����%��l�J��\��r��瀗?w���@���.��×>rmmT��V� ����qQ"I��<+2:�6E�Qڐ�x݁�\w�n����vF6G�{�x���F���t�Uc�ˁc�j������t�B1T��ɪ��-(J9n��=�"o;�ko��*����8q#�G�&�R���
]��(��*ƹ�"���V�?9�Q\���W��&�]�ٻ5��k?,�$�L��U�Ί�X-�E|<jI���ξs�늝��ɭ�7odbr���[�2����*�FZ���m�E�W ���D �R��:oT�*c��bjz�8��FӢҁ����p�Z�Ռ9�jd�7��Qౕ@�e������0�F
k�W�(��Z�u�<�"�s��F���C�#VV�4�%���1cL�{��u���ʁV�+�"B��^U��������TPӭ��Q?L�2���Ln)�JW�T*�k��"_��}����iw:\�?�ݟ>ȁ�7��DW4!��*�DJU��r�Ptasgm�Ϟ|�K��2��n���qO���,)��F���v�M�V[5/���QZ�i�IR�T1:�H�ǎ�M�ӥ)8�QIe2�|��8ǅ�<���<��y�MΝ�@����~�{����4*=�s�+.���D����(85���g�
.�5�����{L#j���"9���� �R �S���?�����i��D
%4����H��Q�\/*��2��/
�
�­�����?PU����0����A9�VЬ�9���D�1�diq�����]6n�ā[������[ٹ�j����P��$��ǙJ��ÈAz��	��~�sX;IuEVq�U�/=�R% ��,��/����W��ȫ'��Ԧ(��(�gf(�^����f���dY��rg=��:D�G�(���k]@De�O��re����Y_� VX�P����lqWy��C��'���׫��x*~�4d�
�� �U>(�ED2"��;{��RI:W�c����j;`�(]�F
\��$>ȥ?:��d@}%��>P\��\�=�!�PQ�Zu�o�!m��*ٌ��p�"���p���5�ʡ�x��!�txQ\��%���%�Z�/��J)��
�U���(%�d��aGQ`��Y��Bx�4X��,��3��M�ݚ`�Y�X�T�}�4�jVV�(��r�#炵l��v{!�Gi�RDq���˜���,t��a¡d�
e��ݼ����k�V�w�X�&�]��z���-!�Cx0�g�|�7�%�u"�`
��#�p�s�*�����o�%����l��+���[\<?��]�A�d¬RHA�m���������kG8��+���̿���3�ﻞk��1Z[�k���p��X��"�����e%
�8/�&�?�����I�}9�W@P�����PU�`��R����͗N�������o��ױ}�Vf�d9S�S��=���i4�x���e\�_� /k��`V6p-u��#}t��2
g��
��	�t$�FȈ��9���aٴm�wn���7r��w���-!º*}�X�������.��*�,"V-0�T���}�	R�XEH�B�\�m�:4X�`��<�=��/套^��K/�0����F�Q�f��TV�HjԢ&y�ci����}�Gג�X��En+�dhZ��h��׆�b��	A�DatI �zq��C*A$4yYV�eAV���Q'+�,$�y�z+�:
DZ�Z$���S �5�������)=�1��R�]��w��sg/������@�.,Z+Z)S3X,�
y��6����B ��C����ev����z���zZ9���s���dp8r���q�,sj�I�_���X��m�z��?3����Ԓ:E�A+�uXS���E(�s�6���*B��^S�LL��	��+?�D���Z��f���I�8bll�4�^�Ԋ8JP*Z��o��: 
*R��`LI�H*f)�,.r�5r�!�"���Q�p�+Ȑ����9�,GGJ)ji�����1J��-F~���˴<B+l�(�	�
�0e��u�g�{�dSP�
Q�w��H`R�Jz�u��#�FF��RΟ��7�.gl�|
yےFqu��A���� ���j�y���C�դ�wh���O�3�|��o��dύ;Q�b�R������ ���sh�����*�����B�5N�������9�
�������B
��W�SBW�(9���H��>Y�br���j-����@�M��p��i^z�e��|��}�=��c||JA�1F���,w�%)cc)y�
:�5
��4$���?�j�{���_�����WB>W�,��~�U�VhO��[���l��0Y���� #�G�ߴ��n�˝���M��ed]�2Mu�T�i�"JU>�~�atE(=��_@R�j�jMl%!M����
��V8��i~�ß��#?��'I��l��-���YiS�Z}S8z�EU~���4)M���X����B��u�,ɐv'%֚�RV8k1�UŢV
c\�7��6Zk�4��h%�:�h���"IC�_i������w���2����ꔥ����B~|���R[�~>ޯ�ӄB1��C\������)l�pv���%6�B
Eֳ�X�ND��{
?���t�Y?���J^�R�U���h��ytH�4�� �?�1|����x\�C)]/]�*z���
՘��F�p���259�
��0�6�����`��P���5:cYn`|1<��;��J��L�"##Ҥ�D6���8����\� �7ǚ�{������.�e��k-I���x�/.̘ӤH�,�{A��$*���bL��@�+�%VV���O355P ;�.����p�G	��U^���.gК\��T��-"��߸����9-+C�t�~�' �݄��o^�����5R�w�X�'����'1>���y�F¦�[Yl/��|�����>����$�:��?BIZ����`r����?�R��b�~���Qk�(��$5a$$�q��Q�@+=�~�l�
��Y0����u��o��k��O��K�:�޶�4�a��w�
�ΓeŐ����^!��_.��W�V
����e�--�2�4�9�<��K��
��h�:dE���4��\w�~�ݰ���o�1�ޢ�(ː��b���˩�Ճi�>1C�.5@X�E2�u�"j�����ny�b���.��K��̓�x�W�{4k#���*QT����[O���u�"F8Q���+����Ε�2ǚ�J��2��H,(���r��(���i:BY�<\/���ALV�Ȳ^��[����,(��5:F���q�uɋ|�B����&��
�BI"���ǂ��+Xuk�� 6Z�4��*4|�ޙ��V��8�QJ�Ux�i���:���15�����S~G�H����>�O �:)b���~��{�F�Id�`�A
���bz�H8P�G&�%�=w���SW5"������^x��W�]�	�hS��JM�x4���hi�[����<+%i3��{��_�����J��M;�v3J[��
��q��"�2�Y��kMi�u!�IS"�2�,�/��.7����ef�ك���jP
\�0�30���HP u��UT�����p&�wdE�q%�-�`��u`�C� %v�eڗ���e��eˋϽ��B�T�NW���XW��=���n��ds���i^>�
���	�߲=�F�z+
#c���+ȋ�Yt�P�*��a�^�z�{!WN�2���x
 Q!<��*H%���R�����T(b���b�O��4���x���6a׶-4�ea1���	H���؀p�(�
�&�(������.�1�2��Q��*�|��X�alF��ı��[a~~�
���Ɲw�
7�v�o����M▆��������.PQ�u-�����g�C��"� {U��)��H�b���$
Mg)��_�^��'x��7�:EV����:EV�Ή��9�۳�n�K��Q�EU�C�]�ZCi
��`x��\��p�GI��*4	�QE;��h�	څq�u!�DiEY�����!Zi�,�Tq��Y��Ij)K���(P������j�*�(�>ւ��5�ּ�Y���8�qLi�&����J���syIڈ����n��ݻh�6y�蛁cҏF�\:�e���uL�G#�VS�e_��o����(�ڒ8����6������N�åKst;]�q��Ƚ���$Z)��8���`h}f��-5�u�27(B����9��j!t`�
�1'| �8��ݛٿ�<�*�l�z�EY�t{mln�R�$5��(,k�j �����u���lԈ҈R:2z�-��odˎ��A��j�78X�̑N�}��J���e;��ZH�L�d�{2
$�`�lɭ�	O�ס٪�w���qX���.~�&�j8����Vf3^x�0K��L4�Ph���p]b��:��X�~��
���R��03��'�x�����[>�'��������hwV���Z��we�ջ��,��9wc����t������)A�0o
=�X,*V��>�����y������fbt��㋐x�8
�H��D`�_��<���� ���%����5i=����κ(!Ik)Q�x���1�H���os��;(-ٷw/|�A�{�.��t
#3����2w��CG�Jj��_3�,��ǉ���r2��8���J	�R�QM�B�_~�<�ӧ8w�"�]��鑦5�4arb
-#Μ9��/��xs�/���Í�_�S�?���BP �0��>��B���@�D(�(����c]��Au%�$+y����(����U Vآ$�R.��2A'o��K���ci5�H��]���Ȭ�IO#m!�&���%/�W�2����㹠�W�:˝���/#.�^���NR_�c��Z�M:yw5�҂���ٰ���<x���?=���@��� ���8��*6ꐈ6��6�5�z�������j����v�|��d�k��S%��Km����_C8.�P8΂�$�b�М9u���6D$ȳ�(�A���9Y�����ǹ��N�y�m[w�&)�-:��^FVZ�I
��)��/$Y���'�Q��t]V�Eڦ�̺q>��O�~s�I�%2���C��"֞�8���,�/�qb�Ƅ^
_��Ly!�+IR�".�� ��u:�2[�lf�5P��*�jt�\eKWy�B
(�쩋�8��@,��)���9�	�BQ��$Mh�F��:,.�0�������:�����}�f&�7()�&l8������p�\uD�,�`��c��\����� �w-�w��:��Y���Š"������'�g<��a:+�hנ�hHcM$+��!�(��am�%o�
�qbH3/��/�f"v�������i0
�
d$��𱓖�[�,
xG���[^dbj�/��k8p3������l�'�/!�3$�HR���pc-�
���b��;q.��Ѹ�`J��Q �*U�}e�s��|���G�8�����x�i��Mʢ`~��)Y�i_���p��{��[H�&gO��;'�uM��I_�Tu���W]E	{k��E��t���@��m���P�@�N����K�eHά�j�BS%����R�z�z�zE@�4Aǒ^���8G��D�ޠ�6(z��@�0�t��&���^["*2���{Q�
�쥋\���5%�%xUg=�	��!t���AS%W���en_| &)Y\����^h���_) v|t�*X^~����.ӣ�lذ��3xТ��,���t�=d���+��k���A5�#�ĕ���f���=�N���Ia�C��,ĉ��<Jy���;y��|��qn�$Jj6�����K+dYI���V�G�,�bMA��Ш�(����Y�TCr�ͷ�k��9ZS)6+Q�5J�� 
8y�4�O�&�0&�T����~��Q�R��GJf�Y���b����V��
7��xeX>��$�GO*� �P)ɗ,G^y���E�(
��V��� )�0#B���F m������G5~�Ǭ߰����HkC�)EV�4"�e�Q��c�����u  _͎]kn���~W-�+8����4ؼ���H#,�2z�./<�
���y򉟱��fˆmL��`�Ŕ-�SxZ�@�J��l�����5��sH��B��/��je8:�z��ha:t{%2
$\�yޥ�� ��٨�if����M���λncz���g�9�	<&!C1!T��3�6�!@�U[���C87���<��v�F�I�c�����y�'O����:��+��������$��K+���6�7̰����v�.n8��;�:HTe�-��m�F^:Tca�q�""���A��
&�U�ǜ^�ᜤVo029�XTCE�`#� �ℍ�L͌��s�.2??���I�'g ��x�n7#71�G��?J#rT5�3S��A��\����B����e�PBk��h���XO�wŘ�W��[e!đ�0�	��r.���mw������^Tp���8�#�[TjT5�Np�����o�{��
����_��'4�wp�-f���I�旺�%OEj[YZ�[ٹcGh4名���;w���y�$J��*	�i)�����w��V�i!i�[���cǹtf�ͣ��q�(�	�L)r��tL���Q�/��N�}�ZZg����Q���`O,�(2���H�iw����Q�^��{m{6��b��l`�T�%�����RK(J%H)��_	����*W[ ȋ�^��CG�yv�&&'����:��Ct���p���yU�.x��sg.���(��z���A����'N@^�q�!_��L������]Z�Y�ͷ_�{��+����S7�b�)��b55$QU ��~n��GP�(������?`�W�u^�8�*S> .3�2XXG�4��ۯ���Ǟ���_�嗎���e������ ��+9����Mz�e/#�B�k�s��}(kd�(��3ޚL7��_�P蠄_%S��.D�z��D�`ʜv�Mn�����hq�޽�x�~n>���_GR&Z67��d�i�u%*�x�,�W#�`$������	�������\��AVj����y��ü��1�|�M^{��.[�m��[�eqe�7�:JQd��8��k��e�fn��:n��f���
Lޡ肊#F�k\��F�Z�8q��e(c�[V����s.H[+gBiҸFkt��	~��d�����#��Y�_zR�`b��z�b���C^|�E����ߋ������_����n��D*Ear��˖m����;9p�V�Ο�5��%T\���tf�	��Z4��4|�\q�V9�>d�(0���\�t�/2�i!}���;v�a�::�iԨ��Z���d"�?2ꔔ�+��G��+_9"z��oS�+ �1�k�Du�X"��2O�j6�XWU���mΜ��f�������nܸ`�9��60-廄t�xyA��JrR �H�����_z�ӧ.�y�4I�(�
����3`$łe��i~�w>��T����G8��+���ertc�I�5��Q��ƚ^�|­���y.\8���$w�s��~��|-eQ�!�x�U�,R�^�W_>�-=c��0�(
���Ӕ̈+߶�:�
\t��k�f�av�[�od��M�8x�˚0Nl�WV�X5�rU����/~���6�.示�L��� �v�Ra} �Q�ZkD03���/񍇾E�Y��{�EDE/��.�>�j$2\��!�C� /�%�ǿO1�Ojk����q�.�v�ۯ��g���3/��+G9��Yf&7�i�V�AE��$y�a�^���c��b��~�!֨��l �����������Lq%>��Xb�>�0~,{^x�3x<����H��=.�]���c���v����Ş�{���kۘ�!H�=H�N:�aWy���(�ib��/e�	�@i�� <�f�@P�a Ù���s]N;�+/��K/��k�����i��6�$���́�L�L395������ｙ�;�3���H�9Y���,�Fp��(�wo�5���~�|��Y|G�5i��&VQE��eF7�R�$�cz���{vS��a���'��B'�i�# KJ�q����``v��Ò,+@��dˀ
S33���[���Iμz��;1EY�T�(��c��"���đ��0�8��5S�rf����H��h5FXYZf��B(����ß���mL�Lq��j���ŽG�чx�/�^�=�=B���=�g��b�u�V�q��M�@X�t�"#m)�)�)
����瞹��,�w��؀(e�\�,�J���N/D��7<��R�*=��0��yJ�YZX���`߁]��SLa��햶@�$�ʥ�4S׎�>��M[����Ox��C��2��YA���Q�>�c����0׹D2Z��;n䳿�)ny� �Y���2J��H,enB ��S�.����@	��N�)0Y���Ees��.[
�ށBPOc��ı$39��2�n��&Q��d����D���|'�J�yfO�q��Ef�7E)B�A�ˇw���F ����TG�M����eF�Xa��m��l����|�/�G��2�~�$XA�q��FEz�?��:D�D)�~в6�ˮ�4ǲ��w�*5�[5��QED!��zN/s�S<��z�y>�ܥF[�ܴ� ���4�L�5��
qd��HdoR(���]�-���;��o�z�����'�D�רR�j����n)�	2�J��RY����� �rU�ԡ�/}F^������ɗ��0ō7������bz�(���)s�����2CLб+E�(��^��W�L�U��`�#Qԣ5�[^���˓Q��r��Y�~�'{��/�̙��ɺ�����;�>E��5�+K,��Z7�o��o��_}���#��&+�r���h��r%���A21�a����P^��`F����AI�e�(��W���A�%s(��◾ȗ�˜x����[oGˈ-�7��+���d,��,N&0�a��[6r�\�Q�r���CƂ����Z��r(ۖN�aaq7
#:
�Z�W)d���q�Id��U컠op�w��BФE��,�5V��`ey�K���g�=�:��5q��u��79zd5��Xb�+�j�&���]�}%�@\�F�
�����Gyp��Q2 ֞e�Zl	�+���BC)2F�FY�m2�ae b�uu�2.�X [(ѭWy�o��@	?Hw�M��;;��p��R@�+q�ctr��h���S�ް�[��G�bj��[��]��/-�1�x����^�����ѳ���a^~�0�O�d�]R�̕���i5LMNp�5�qםwq�}�1��I�2�)��		
���£T��%*V,϶�ޟ?����IG�RaD�� �)2���0:�K���ռ3T�NxJW"���FE�s�M�s�v�z0�Q�@HUyPW4�꺳ޢ\��W�������s(�EBYz����fQE��x�������(qjiSV�65�Mo�cy��#���'�޿�G��9R͊P������*D��q(����E_�]�6��_>�
Uv[���*����|a��^�$��~�
�����#�2�0�֍��0��Q�#�
�e��D��V�Q)eeU�J\���|���ډ���Z�e�*�f
�ݫ�:���kr�׺�!Yo�/]V!I�x����!KV|!Q�`E�y�NH���H+J���^[�ߴ����g�ݵl޽��h=Ya�>��^hl!����㾁�kBoK�wh�D�s*0�	Fh +h�!\��PI6����b�'�?�ޏx��W8s�㣓lZ����:yVҝ{�^OɊ2���u�F�;��MG���C5u��_1�j�S�"Ic�߼�G�Y�@�o	�Z������+���F C��;'f1������
'O���J1�8~����c����ۜ;���]��E�2�����y�6�<~/
���{=���������0,�Q��lձ�Q�׉����)zZ%Ԣ����+Y�<��ɾ� ��V����k��^�V1�.,r��)0 �
������I�&��R�P*�E�!�a�5Q��K�k f��z�Ђ�6��YP�  �S\�~�'���z��X��u�����N�7��-et�
0z�Ǿ���2r�]�"h�����_A�e�}'�;�
�S�ʪ�YZ�h4
I6���`��C���ݝ�1[��}ٗyY��g���,g8 �n4@����J�"C���}8�{Df��J I��-��"3#������J��R��v��Q�p���g���[i-H�� �d��ø��b�^k�4n���f�7tX<x�[�:��.|��hH����e��6�Z�o�~����r��n� �QQ�C��䪃I����\2X���7����g�>E����qސ�	��Ԧ��d����H���&�rd݄���$�MՀ�r,m۞�.pepr\����/�N�r��1������乇TF�%B�h��h���v�Ǒ�G9y�M��׾E+�����W9t�.��T7��$���r<��P�*r4d�&��E)��i�x�y>>�X1��p�qaeȥ��͊��8�SO<�ϼ�s?~��[$I����t��SZIJ;��iJ]��U�.~~Ǭ�;�|��޿݌e���hh#�Y�^9�pW�/�����*R��($@�!g��*��()�G�1G;�H4������x���sϽ���O>�-�ndy�"����P�-HZ9RC��"K_ཥ6.��F��1�u]�%-�a!8�9E���#iI�g��H-)6k�|�$���w�޷���˘��J��Gng���"��a+A'�!�Z�0�!�Z����*�k��a���K�H��]У"R��"(@T�����tf�l�_�NkL:���`�-b��ć.t�٘�):�Y�l#��:I��T"�F� dB�Z��t���5��5p������F��~��\^����.6��lָ�ϳ�{?/��&3�	����*Zq���� ���S�U�����mT*8#۩�9�R*�A��k�CO��d?���j'��:�Ti��1R�������H<ʫ��3 \8�o��c���/�Á���??�E�P)��7�"��u���,˻��"�s/=�	6�7A<5��@�\�!����((�
/k��O����.����Le�RM�R��_:d[� "���Sz{���4[@]�Hi7���kO�U�3�j)���aKH�
p�-
jF�rq�����p��y:�.��0��H�"���e�Z�H�p�pޓ�	5��J177ϑ�� ��ِ0M������CgN\��7^��Z K2��PY�"MLY������.g��GS�	���+k�h�9�{���*66/�G�U��W��g?ʃ����=j[��Jq��x�*��)4��H�6>�s3��c����U�r�:����%��8�K/��k���[o����K���l\�<��߈�pi���Z-�,g0Ĉm$I�>e{N�5�&#4)�&|�
Ɗ�;��"�+9Q����3cR�N5�P�f-��
[J3BDF~�N�fs����*B�ѣ7��O~��~�n�ߺ����hQnM3����1Zc7I�fF��/�YFYl�PiN�;8HVP �F�-8��s[<�̳���y���x����A�������
�p��,,I��iN5`�an��-kN�9ū/���C�u��"ȭ��!�����rp�>N�q��T�b�#M�X�~�k�iP�,�pJ�lE�Ҙ��X��j�����y�T���Keg��~��������7��O��+������o�Ԧ䡇�#Q�'�x�;:�M�����m#��%�#����x��$�������(�OZ����T&Y����g[�Hƣ��$���qP6G�(�����ݯ�;]����_��}
	8�l���7����={&��G ��7�F�y>l#� E�Ra�5� m��y�c=<����s;}{���Xm(�52�t��`�)-"
� l�>��&T�Pi��y�(6��eE��d�^�:���P"��Z�<S	�NT<���x�p%,��H��ʙ��j���rA�?�X!�q
���:��{Y>�0m�wVtx�-)W
/<�2k���u80�M4�w��g�Ť[m:�������8�t�2�}{pq�������<����_��Gn�W�3��h�����'��Y��� o+��P�F�7?)L�	ˁ���/r�Ӝ?{�_|�7�|���u@�i��i/����2�?�S��[Y�>�0��a�߆@$�UZ�or8�ì�]���.nѻ�)�ؤ+l�.��t�,
���YN����o��r��z���Y>��{��'>��������Yj�>��&tZ�W�T��Xԛ��K��e`�O6��A4���[]���kj�,�����x��3<��'y��y��q�W֩
��	�V��NB3�����9�V�Ũ
2�xݔ�(�(��g�}�+������*����f�� 6��3��c������,
�;��#GUW8gC.�$T�jB���89�E,���)8�VE�(�񮦝'�rǙӧx��O�7���V����R�#�5�۽�ێ����9�x�
n�g_�&M�Lƿ�_q�U2$�nnm������VXF�j�Naqq�v�M]WH�I����w�� �9-t���G��C�b�(?Hf�O4����1W8��A�i�Ô���U���Į]�'H��4��.]�(+���x|��(��Djl�����0�Q�Fk�H��녧_����?fמ���
=�A��<2MA\m� s�&g;��67�	����#$J{T�K�U�$�;�+4��|�H�������D0�	ȧB+�W6$h9����>m����6&�C�p�MIs=&L����ۖv�b�4o�:�O>Io�G;oQ�!�9I����z\zS@���u�:z�9��X__A�07^�[f0�b�����wx��׸��{����y��h��NG�Y���6?
���c�39��T0X�\<{�㯝�7Os��y^~�UV/�������]��<kᬡ**�H)F5�� ���.Zck-�n�um��hW������H�w�+�WG�r��@��$AJBo��b)�)����h�b���y�7��m�Y��M������G��o�v��n��Cʁ��D�y���At���Mb��y�o�]tN��5S���<���Sي�L�N�Oo�����^���_��7����*�V�^w�^�(�Í��tZ�qʨ3�V�+��T��QZ��$�n�g�y����d����l*�s/Ķn2d{�Dp��w�d���{�ST�&�
�&�Ʒ���ب�p�$@#%R)2���$��H)i�$�D���>����ħ>�W����>}�4M��g>�������kΝ=K�5ƒ��m}K3
��?���6�R"u+oQW�˗/s��f���7W,�Z�77�օ�,
E��c⥀I\��Y�!�ӅR�~����e���
�M�y��-�PA��=âOov�]���Ʀ"��Ϟ9��f�v>7�N>��& �J�oH�
>���|an�s��o��gt[-���_`�
�B�`6#!\��T�8����9SeH!0mg�d���U�~E4�4A3X�y����W���Ͼ���wR�*��&�����o��V8L�$�8�}z����T$�b8�[ns��-�3��s|�Dv�t�T\���z�-^y�ev-N�P�c������Ww�pr1*pv��Jp���r	��^X��%~��'�������{���9z�a���Oov�%h����W�q0�+c�PԜ?u���.^������:}�S'�p��Ξ:���K���vzdi���np����F���bPa�!�۴ZI�RU�Ѩ��1f���ﵚ�:���tl���$���P��F�}�\m���z��5(��i_���8t� �<�0�<p'��3�����ԛ�:t���@��xD*Q^��Ck�I��d��z9:c\��%�N�:����K2A�2Ν^ᅧ^�{��	O?�<g�<�����y,!��ԕe4��ٻ����k�M�z�.΄Hk���cB0N�$�E�������s��y>:F��XϏIlc�P-È�xn:z#�n�[o��:�q�=�����;m�z1F+q>*���8z�.B$YT�ѰBkͮ�%�������_��_瓟�(�������[o���
�����5z3��nx1EF���_6�$�rl���k��b���t:3���3���86V�	����E����t�u:i�w4a��}�c�@��Ǉ 1q��&B�+����~w�~��E)�*aqy��\'��E�l�UQs��966��ݽ��7�IR�T$2�:�0��SP���2k������������[�q?�C�#�*���L���(��{RE�Y<`��ad ��[�p͐�화�Eǟ}��|叾��g8��R$A^e
ueQYp��N�e���6�r��Ǟw�c�fϞ]=zs�@
�+RD�p��P���α��š�7���V�:�bp=�b�|ı�69n�q��ӔL�XWSU���9������y�ѧ���rǱ;��c�ݳ�<i��g�.�
�!��p4`sk��������X���ŋ�x�Ũ Ir�{�ܰ�F�7u�&��� ���-��C�dd���4E)�15��BH�,#MSʲ/H��/L��A(�ռ��e�6'|/q¢�tB�%�k��T����$W�[�k�D2�4�=㡇����Б��P��*P������B�`�-R��k�P��d�6��"^�Z��<w
-u��7��-�.`k���K�x����w~��?Ic��V���R�
΋NQm�qh��&)�ʘ�HJm�	jS��¨�cc1`Cր����if�3ň�^?��L#Z����Xc��S����.vٻ/>��a? VZ���Ŕ����!?�%J5�mܣ���DW�
��TE��[X��[�4�<�2��(x�������x�a��{O���~�����-t�N6�Q&;�\�mtԿ�B`2t:3��x�d����ȉ�_�gyy�g���I���G����8��� pw���߯`��d �k�^�0��2??�Ly��$����5��I���5��&$C�$d���`%����-�$o��|������O}�C�2{8z�2��T����b2�&���P
�5�
l��Z��Ʃ�o����������,/�יg��&�n��[8�0ggLfk�v6U�V�S'idJR�o�>�X�D6�F/"��"҉f��s�.�n�qցudiNe-΄P$��>aީgu�N���.^��n1ӝ��KRgp��(J�� �478�у�2*��;q��^z�#�2�,C��x)��5UUR�#���fn~�T��i��7����(�#gK"�ʒa����E�wT��.+�x�Fu]�'�s�<G���n�����kFڌO��G��D"O<|Bڌw~�_����S�t�Jk��Ő�h�!wNT�>��=�������]w������A�X%u= )"Ӥ�)ٔ\��ذO(��\�B����i,1���	�JPJ �@0����xn�g�x��~�Q�}�y6ֶ���{Id��g�*GF�\YT8�Љ������L���-Lm�J��ߺ�82��B1��RA;o�֛'8wb��/�*��1GC\]̡$R
n����z�ʔ�I)�b�))�PMe#�sS"��:vū-R%h�q���Z��?��z��ϝ��m���#羇�F'�o|�[�s�u�PaV����yבş�`g�=����n��r�.�|
d�Y֦��PVUhe��	��
����ZN���wN
 !f'����c)�����*��z=ff:aV�j4�n�X�hT�h�P���9D��ٞ�-�ho)BJ :G �P����C����<�ç��/�<��Տ��g��q��B%n=ޅ��*�P
��+��[�hB>��@:�n;.����������n�gy�nq��e|�Y�%O۔E	և>_Ŏ�9���5��N���i�P�i��o�����Zl�w���{�$
gΜe}}����&Q���a���t�d�'1������QMHo�BS*�p0�8C'��m�ɲ++��T�DN�r�?�Jॠ����,�^��u�^�A�H�HUF��C�$r�Dʄ,o���
r�rP�\ު$iT(���lmni���^� Ch��	0lll��Gkt�q��,ǈW��h��1�#Z���c ��Gh�J℡,Gl��)�v�E�K~��~�O}��ڻ���ET�C�(qΠ��������?7f�+)�wE�!�B�+�����9���[R�H�T��g�y��S|�[?��g_�̩�J�0�̞�C�r�4hR|���"�FZA*42դy
@Q���a/�vN��8g(�c-I�QJ#	� �*�����r��eN�<Łۗ���VL{Y��n8�Q��n��F�����JA�5α5�')Z���6
�c�v6���j<�g�����E�����r��6��ݵ�7�x�G��#��������g���#���GL��f��=T�
Qő��D*����F�ד I��R�f��Xی#��i^]�
<͓($�8����:�[��?��! ���I�a�8�LHҔ���h4`v����HH2��2U#8}�<eU�j��v�= �Enҹ�X�����T��
&��;E��Ȏd���KϾ�����W��o���x��О�hͶ�l�QA��$:�Y���+d�t��K�|�����?�./��*�8v�v(�5���z9�	����<��/��h��O&`^�
=��KZȄ�+�ٷo/}��`����k	]��XWG�\`��������3t;=���
���X�5�D�#q�z��6�w���a��e>�*t̵c`t�NXp.D{6�m޹���`������h�=͓� �$�����>z��p���e.|R�0f	�+�,A����E�h6XIWZ��ʉ)���Τ�լ!���_��h��{XoA#�i���(0uM�g�y�s��p@�?`vn���,EY���B�t:x`0�B�
��ር�-�bH{&����糟��~�V�ݰ�N�e|��jd.�����M��� h���
�|	��)�R8稪Q(ƒ�5�Dv���DP�-'_=�c����|�Q^}�52�'&����>#��H�P^��@y��ٸ
�5UP��0b����T����H�&1�9TJ1��ban�~�S�/�Q�L)��Y�p|[g�l[���o��ß|�[�����ݲ���.�E��0/�X:���0��	�7�����2$��,ԵE*G]Y|y����r��)�>��O�s㓰%�����/�TD�Im
#H�����9
�F��	���9쯺>D�\��#.��`�a�.�����[��l����s����i�(c�b֊2���+F�2�����h���}�
��� �RblAqV��DkI9��<Gon&V����i6�61�
�s�,Z6��)LL�6�j(�L�:��1�I�t&a�
�~����������<�ȃ<�Ѓ�tӍ���Htph
qW~J��7��/�����������}���8��s���6�w�'-��"���u^��﷥��/��g���'�S硬k�3��&}�݌�}<��pY]�d�Ж�hE)�>�����
kVD[i'/#8aM w�:�Я��K8,ot���

s2�k���D�����x|�#&^�Z��C`$5���b��Y�#�Ɂ��f�o'F9M��_-�k���y�j���߭ hHpR)�Ò���zy!$�aIeJ���]K �k�����;�`#."\\=Gm��;9����;�ࡇ���=7���=��*�6��<�F�0
v��^�%�����6�B�H�H��*�ryuQ`Jhg=p���#^}�5�����޷��'�"�םC��2:�au��FLZ�HED�m7��!Q��^A��׽7��5�L�E!akb��jFU���:����F�����~�r?��]�N�u&$B��Dł��{� ���L�K�J�AA]�H�	��ϳ8���F��**�f��=��3(r[���ff9}�,���:�~��Հ^x�<kS��bX�w[Xe(%�΂q���K2$+:���I�t. ���TC�X��s�R�Ny�����p���h�x�G| y�q����`�׌ ���LGI����21e�3,���g~~n���x/�����\��`��+�[��������4].��$I�L'\��|�WN��o����g���c��}<x�Ç����¬��yQ�}�/op��y^y9h�ϟ�H�/�f8�� ��,x(�uiIT�~6rĎYOA�iC��9�	��@'IL�N�E��ᒤ�M���hG*u��
	I1�ln�Md�D�a�T�$��P�]/���ۖ5a*7˱���� �1�r*�g,�l.���zGHapS���rj�ڼ��m���֡�������"����e"�k`w1}h�('�+���t���r�����B�t
�E�)�n�5����&*Q���H���
6��d����%�$ass��/��_c��E����Nx�.n<v��]s���aZ�2�����c(jt$�{�Ķ@h��,I��r��D�����'^=ǳO���!O=���_���3��i�]�a���XG	�zl�����_� e�(��ߋ�A�߅0ަ������h	���ܷƱri�ՕMv��4��g�y>���-�JЛ��=ӡ�+�����M۔w�R�R!��O�5��s��5Ν��3)5Yޢ�RhZy���/��Kk8㘛]`0��c�p�7r��i^|�5���d����֛��\��\ߤ��HtFU�$���.%'��:jE<�I�
��=qm��4	���&�Z7�Ux��3��&o�߼���Fp���� 5{���]�Y���fks�^o�����9�2
H�.]�(��s�!6��J�Ɠ|<c�lwDm���,̧!� Q��(��(ؿ|��Kll���+�x�S�̼���"�s�;�� ����ш�hDY���(X]�L�;˭7݌�
Jh��X0�̢��@X��w�o?�w�ڧ����W^x�V8_",--2?77�T��IT2fhy��2�Oʠ�^�����
�r�Vgi69��[�P�����ψ��>�}��	�h[������N��i��DJ�M����Y9�yh������L|���Ο;}����xf�Bl+ ���9�����e=$�S�,�;�`�EU�yJ��P�d�����]=�,aXmp��y�����C|�Ώ��O���c�9xx��Yx���H���5Q5�̦����`�$���A���;b	�ecB��2������_�����c�q��S�:y��֐��K�wK����Ш�M�	�Aw�[j(��;>�bG����ō��]���H��Np��%.^�Įg��t4���p4��P
�3-�v����P�5�
<.���s=�aks���M�gO_�����p��[?~�,k�%Δt[]������7���\X9� R�����^����.+�/s��e�Ғ������7Y�[��5 �;h�`�E!HMmL�co���͞��S[�W68���?�U��n���1T���?���R7�W�9�1]�Zcݬ��(lrۼ�9��Pð����f��G������ŋÒn>�UXi�b�ٿh�Ԧ7������-�KVl�q��c�����2M2�1�	.dRH��qv�EQ�a�@
��V��l���]�s�uUS�U1Z����$*�:V��՘�����Za�*%��!�Sv��Mw�6;A�Hb�W<p��L��F�gmm�˫�ԥ���qJ)���ɏ�溓��#CS#�����j�x�cz���[\�gO�
7Nͻ:e����秬�N9Sf'�]ʝ�3�O�42�����'<c*t")
�`��Z��l�no�����B��cʊ+�(��%���}�]|��壟~���m���V���4դ�X?Ń��z�+"��P+��ю�N	��ֶ6�a�ڒͤ�T�I�tv��^{�����!o�z[H�ˮ���r����%Z�������ale<AzN����ZOn�T�W)}h��s�1��	R*��ֹ|i=H�e��`
;���s�p�mɞ�{���mT�4�ϼ��j�ޟ�\��'s��%Ν=à?�Վٙ�v��2ӛEI���=��%��RH��yڦ�9���&Z&8p�K++H�bk���<K��%����B�F���c�ة���$S�a���UpG�Յ�!�df�K��b���G
9���|.J!���TF��5ٵ�
�{s 
��J�v�E�J��0fX����+�����̵�m�m�?���8H�9�֚$�q�>�u�Ѱ2�22̩\��,c�W����fs37u�E�P(l��%B��bMIT�R��e�:����6�h�師p����^UU��vٷiK��%�	��/�ly�	-tV�͍-�A@P���}쌛\;�_	�g#�+�펲J\�pxWJ�U�:�`�2�j;?����/Rv춿�b�"����I�<)d4�
9�
Y�)K�H�ޝ h�Z0���8��D$�w2�����:[�5
'�ޒu7������}�#�q��t�4ؐb)��Z0�3�
���p���{�����;6�q�,4F�J�IR�)�l\:w��~�
���x��X�D
M�գ;;�)=v�(G&����*HߤSQ{�4�6�M���J3�$yW>
r[�2��zl�� � d$�zG�3���������B�Y�:�U/|���$��{������z.�%J"��������[��R���^�K��"�,+�ʐ�Zy�Q9�*F!^�&�x���ޮ`s,3�g���	�꺅���JR�����L47��æml��q�%)�X.�\�:ҭW
��L�\_ϲ������
�N| �UH�dr��,8o���Rq,#�am��@�s:�V �4v�ؑgmu��,���q׮������hQ9�J�I���s#g�*�"Qi�ގ�B��13�Y�1&���	��IL*�E��8�1�C
I��h%9:I��1�@K��+����N0΅w���TU��}�ػo$��Rn�C� ���)��y._Z��H#��a7R��.�e^OU@s����YtN/?u��*?��{�u�x��N���v\W�wz����Ɗ�Y�t)�R~;���,��U$����bL�ŕ�l�7�ts�;Զ��]w��/~�����}=TK�u��g�X+A��$19��*LUd����z���r�6vWJO�㴋A��ĉ�<�ç��}�g�z���n{���ez�Z(�Q��%R	���\��(�p���Ȉ�4.nn�N\�:'�.�*���d��F��C�&�S*�R�A���K����N�Lxj{G���Q�u��Үf��8��d@ʐi?V����m�5�`&��$�4��S�����Q9*Љ���"��T%V�z�C�1���ryu��^}���%M�h5r�<UY�)���^�G��k�w��Փ$i����˗GE��X8�R���j��}�p(2+d�)9?������)��3�c�������oHG�,�b~��+�fS���M�JSJ����S�e脥iV�n��;��@�2HI��a�7ݵ�B�!$E�u����2N`pK��PJRU�Z�`�U�(�P�Z=����]^cvv)<���Ux*%KS�����=J�F�SD%�UY17;����8�E�Jd�8Ɔn2���H�RP�%�ϟc4*��k-���m�X�F�C\��͵�������f�~j0���br0�qR���
:wW_$����$���lz4+|DVĕ��9�;����(�����/v�J)�T�u�<�D�)%�����Z�CC���������k��0[��!E�gi�7=­�n⾇�����"zN�k��7H��� '5u�P�,KBG���a5>��|
�Z:�Q�.�h���[g�\�̓���?�S�V��o�����<k��V�!�9�åD�h�aeͰ_`���n���yI��^�$�9({䶢�]�tŋ+"�C�J��� ��6�X]Ye0(�m��E���OB^H��gqVB33��N�9�n�
�*�,ItB+�IH�&6ei�xk�h�:�F�-��	UY�����U�~DkD]�QI��H���P�+���HT���-Z(*�"��zڑ�������P�$�~�^gm��Sl�C 0�!��6���쳩�J��o'�/��I��tg��y�A�c2���V�ڡ�����y
&�^���-8�/B�Y��&ȹ���J��q��R�Evus�5�.�x�2�Z�ء�f"&��5�
�5�}+.l��3��K�E6=�k`�	��Ǔ��+�<�RQ��v7�=�Ouk"�E��؅hpUr�Q�勗(��,k㌋�#/��-�6�ҷ��5�Ϳc�<1Ii:4�	�͵�H�w���෿��"@ 2ʉ�C.�aB�����\�ņ.8B��;��%�:x9�sR#]�&x��NV�f5�nZ
I{�C�K�7V�6���ᡏ��'>�Q��N��-0��������9��T����x��E�A����'�z �"g#qs���NC�T�+Ν<ǳO��O~�8O?��C��K9�N:���nZY�rXQ�K�,O�"�8ck*[SU.���V��:xcx7�	����Gxӟ�j�JN�ua�L�@���I�FX�Glm���
o�-G���M*�����i���!츀d��/c�*�T6��9��&�i��:A�ݥ*-�}�M��ek�6�i��
ʰ��E�Z$:����;]��.�\�G�Zm���!�m��mQͥd�M��u���J��,ʱ|zZ��V*��y�\6�3@��#����V��d{u�ϻ� �`�ѝeY�����5��QZ���:��ϭ�jC/�A�W��,E����8����4K�nP���b���^|�:�.7:�W�d=Z�����O�*:z	N�
?���ؓf-��}�U��}˸Ҳ1X�3�������+��W�����?������,�<A��K�B��:v���u�a�τm~�/,N�Դg5y'��~H1�ZŠ5镽�W.D�{0����/Q�tg�p^��x�dc�q����w��� !ކI"v�g?-y�yv��x�?�����i���媇�ΨJC��3�8�H'νE�ۢ�
,��8ʢ��*���:��V�2aiy�v;4��]��p�d�9"A���.k��6I��l�U%�a�q�?\�o��ص{�������r��������2T;���:�r-��:ɺB(E*���(�Jb�ؒZ�)z���Bƕ�樮¯�KO��w��=���;{����TE��I�hw��0,G8FrRj<P�
IZ�I1��@*��Hi�����O�A�����w�S']�62j('bD�
�~�ɑJ�ttJ�4�+��eE��8���b��Q��ҙ��ЭV��|!-��i�?��i$�9�}J�q�H�6�aJ�wr*[k`d����
��HBS��h-��-E(B�	;�����5��5jbɝ��B� w�Ϯ0݊n��W\r��N�]�kz�Bx*W�M;x
��V/1�E%��/Gx�{�N�eq*�O���'[4�1H푩D:I�&���I��钭�>8ȓiC6wH����� e��#sI��s+'9|� ��k�g�x�	�x�u:�N'��S��Rjַت�U�E�|�gi��`�R��:�f��I-�9�
U��/������7�tz�7O��7NP˒�X�D��~X����[f������9�/Ɨ����C�ea��DR��O�aG��Šdk�O]�ly/����H��-��謮����������FU����n����,��P8E][R��JS�M$��|�L=���Ő<o��ΰ4����ӝ���������s�?w���g.��.3�ڤ�V`<òLv�ܚ�f�(H���v���'x��7��'�ci��MR	��@���@%�f8��D. B\v�j��>JJRlrkk�kK��(������]�h)*A��_]���#^�O<��/��h�-�Y��\gԜ�[+��"	M��0�k c��t������S���4�ϿJt����Q"�AT/yK��ڑ$	�Lm�
����&'D�E��Bև�%��t�4a��"�Ε8�LcEl��4�HR6^ ��U*��pXH%I�gm �E�Rg��$�� q;G�c��͍`��Y;Enm\.E熂�x����_ �<3~��b���M�=	��Z��Sd21|B`��B�|�Ɛ���;m'��hJ*��T֐f)i���$������:���jL������ğ�K����ې%	E����?���/����?����g��.���)�!^h�,%��Ѫ��Ut����fDt��uRV�W(l���"�Ϟᡏ<�o���d�M�����W�����~�'�Lv��R����e2���N��.�>�&��>��kA���S���R���Q�)�� [��)��D2�ߥ�������ꐷ;��{y��a2
Y^څ����dh�3mJ7dk����y�n��v����
7d��ݴgü���'�:��7N���}�G�o�t�(��DB;ﲶ�N�?�;�Ŋ�&"�D�0
�����?����{H��߼��S���i�)m��I�*��誉��M��O�M=���BQ�v�7�M��l�H�e�+/��ɷN��o?���$��[��2?7���BhLm
��I�\�ˋIZ�sv[������6W�jZ�_�3�tW�v��n�H�1/�����
����ʨcRz� Bx�Tљ��n����(���U/�Ѐ�R�i2�nB�gh'�,&��bB�N�d즹;Y
1}�]���T�䝣�|���n�0:�1I��b�I��{C&z����x�3%r���[t:�q��X�⡿5�Z;����y?�$��U�����DJ���,���O��8�Aɝ�o����,�W�|�-�5XS"�,y�RR�$i��Su��]�9�4�J��� oe�������~�������{��Ӛ��r�!��?�O<��%*�Q
*r����88 a'"�?5�~�^;^cI�17;G�f;�i�(���O���x�������#�߁��٤[�bH�˘_Zd}x���-����'>��>�0y�aޏ�DP�XBX�����aϡ[�����z�!v�/��.\:���>f�9��>�ZZ����Q�Ie8l\\ߣр�n177�J<�eNћ��5eQ�=K��Ù!w��Td���JSQ�
-5Y�%�K������P���>��8��?y�G��{�Y�k�3�9z�m��6[����#�r�%-�V'
��0�v	����|c N&���*��h��U\��p;DOAI!ƴ
O�K�g�;��J��H�_����T��[����wl����Q���.x��Z'\m�?��~���x�P�|`�D#�S�������N77�\����[Xg��*r��ZL�#�ϥ�t�rί���}G������}7��my���0ۛ���ϟ�믣ɸ��`5���XX�ǘ���bb��MUSqJ,��`dJZIJ]Y޵����׹��Ô�5ڄa�j�G?}?_|�����ڕ����`@;�
 ?�\��sB��7��c�v;cnn�$ӓ$��� ��;�� _{�Wש�-��𗚲��+� Hjg�U�Ն�k�(����������7݀� ��+�Y|�Z�ԢDf��%����wz�7��׾Ke
P����9��f01���@@��3�FH���e�z�	�x`��2l��@0�6D*�t{�"��bc��g���zCi��1p������K8�2/=�?�ѓ<���=s���h9ǁ=f�u�֩��V�C��`cm�������w_L�.�_S\���){�G�»��T��,Y]]�:H��&�P�S�����fgg��m�.��m�(1�k��>|�t ��!0�,���F!��j�\=)�v���������o�J�R���<�i�[�q�s���~gm��t���E!����aeIo��C���7��9��|���H˭��W׾H�򈗞{��+Q��i�NE�%J�X����1%1�a>���Ag�M����/��έwƕ��),:����������<��S�>q��{�P��Ph@tA��o��
%��.�\8�h�:��͆P����_��d�6)�B�3l�oF	V+e�]\��ѿ�f���ٷ� g/�d���®Zs��������M���1Z"*I�i!��+��i�R��[�D�9x�2?�����UN�r��h@�ۦ����qv�{!:H�z�+[+|�k�����O�����Q�T�N�$�E���W�{��0��cj��cr�T:�
��p��e^z�?��<��gX��N�w���f��b���2��>s���YX��Ӟ��oI�;�������A�q�ی[��g}6��k·1`�$�e���F�sVq�ژ|M�'��<2 �	t�9Y��D?�>���a	Ь�,�8K#�r�,˃?��cO1����wC��^�h�5٘�"E��8��$Mɳ���l�]x��xH7�i<�!����q�����o�5~�?�L=րȂ�Z�
�}c���W���|�_���s��a�<e��*iڦ��al��|�q>��D�����(�4_����=������$Wip�F���o]�c�z������󋳬�l��z��\�
~�B���Sњ�s�,�i7��e�ZY썟A�.w1@CI�]ԩ�����?���K��=^H��6��/!S�m����������{`�6�ڒ�	Z'-P:G9�s�
^�B!�Ö����'����������s�q���jΞ?G'��D�4�2��TH S	��9~�8���7���!��}������B訨�$����Ox�OBH�[��sK9�x�G�����|����v��������]��NckA9�3ʑ�kؽkot���E1BJM��F�hTF�]9M��d
�.1e��t�#�
�S(�$c���1���'|�\Ʊ_�,N�!]�孄D'�%�)x�Z��mf�����/1��*+ʢ��p>�|�DG	o��K)����$�~дC���_+���_܏ҜuTU��!o�)S����zGYx��`�?8ɏm�m�5(
CeG<�Y<2��,(Ϩ���-$���s��e>q�#�x��<�<�a���졪��HT�qEↈƱ����]Z���r��È�3\��;9BZ�
nz�!����_�<?���=��lo+��/��Zx�Os��,�������-�}�wcK[[��7)Fm��W�܀��xW�>��$	z"��s����>����g�U�����|�V��Vl�Ye����>:U,,/0�4�P�>5i������o9Lo�å�g�lI���u�T��5�9����~��}��gγ��҅���`=ʹ;1|�}�����Em��(Й��-����o}���y����H����I|�u`T{�y�`��h�����y6771����������$�kq[���6p�N��ƽ1:�F_� �r����KTEM�lJs�6���@���) �T�
;3�ug|���7p:��i������@�'�dhF5o�.� ����z4����
R��f����7�{�c�A?�w����
���>�v/G���@k��Z�X\p��<�Ξ�ĩx���-��m��a�ߖ����Ƈ_t`���n�9u�$���������Uz�rF�J���c�VX��;���~����)'O�`qn7�vXg�v�ে����k�=��>X�J�����4"0EM�f�=�k'�Ct�/f �r�L�)���q���\/�Z�V�Ecr�������/�ſ�����r�V���7���|��B'�%B�8�H[	7�r���-Μ?���2���Q]��D& ��ԣ�I%�l�v�ÓO>��/��]���G�i�o#����ccÆ��@�T�j���Ko��O������ko���^��gi%3h�b���ȋq����)��jk+dYdiJ��x�kHt���rp=�tǆ�~]=�b<�o� cǸ4�4����Ui&8mt
�n�dK5e<����[�i���5�x6�!�� 岑`6�����Lא�cA*e̶��#)��}K��7�L�	l�G�4#�24�!B�AQcck���'Q��;�4��J�^8�g~���|� |�*�X�I�a$�G������q��Yjc��͒&	�k�e	� ���ɐj�Ԥy�Xʪ��
���o���@<�dcq΢E�)�/:<����;��s�bL$2h��*N(c�ޘ��P�2UW�frL�������'�����kC��":#�l�'DO!�������;:���H3��#{��	�*Q��w1�N�[�����߲���T	�O��;��/8~�*O��`�-�Dz���%T*
T&�\�'mkj_��~�'��1�����cna���5��V��G����Ir��-��I��[8p!w^���nK��Fş��G�G���O�ѿ�w�+|��?a�|���.�,��{�l�N��"
-%�;����$n^���$oY�k�V���Y���nzl��_��@n��K�$������E�31k^�qem�����"2˸H҄v���c�G�����ȓ�������q���Ҵ*�D՛����5l8Z뱗D��"I�1u\���!s������I)��F6m�*$IL���:4
a�UU=^d>�U�뚛6^�R�\��B��*>|���3AN'e0��k�@�%g_��W��k����}[A1Q�5:IBױ�d�F�}?j��1��1m�կ|��w�O݋�	���\�`."���K:r��_~ck�$g[P͎��=��bW�u�NT��N&�dSU���Q�1����X�:�:Z��̲�֩|�y��clɨ�b��2��/��Е��+,I��O~�4/��_��o��Ξ;Ǐ�'O�p�#`�鯊�T׿Q1$�d�fsk
�$�!��+<p�/��/�3_���j����7���LZ�=�{y�y��9t�ް��*�]Hn�ƅ�M-p5�?s�Ǿ�C���x��["n��]�Ht�`TX��h��t؆�7���v�޻,���ׄ8ܐ���Ҙ�;�������/h�,��x��2�a��6ؠ;(�
SZl"	<bcJ�	ޅ�/%u@ �GMt`���&�"�37H��ۯ��l�Y�cB���~�d��p.�M�g�^ZNֽ�fS!�B^^���d��1��ń��R]�j��?z2�R��:Ho�����M�"�R����q��[�IN�ݡV0�RֆnogUY�P1mˊ@Ȅ��2IX޵�FTe�믽ɣ���o8��x尶F?*zs'��d,-,���H����ʜw�3��=U�I����K�6A5cOϦR��T���	l��!�������\B�V�(��Mς�!˂�x���q�NΞ_!ˆ��lr�]��<�*PY���j�K�����:��6�+��mlr��#�Y侹;���>��~����?��/_��53K-�glnl����������{0��[TG�u|xG�z���7����_䙧��'?�1��|����b���H�D���%�ה��:�7��oLU&Z�1�&A�j��~���1ֺ.���:g��ظ�p_G�@�Q�RM������!k��T�4y����6�҇�w���2�&��9�sa�%&g�6 �-��5��z�&�`/�WS1�R�+��|L�SO޿w����
�el�,�ݿ��]K��lC4�Å �N�_�ܳ/p��*�doC��"���]��]x1N�LM����5k�-666y����p��.�::nL2�  �=�a���t;�qT��g�+ �nv@bl���s�$0�!�)��C�&�zݍqTU����������� ����g�7��h�͵M��!P�V�I�(F݁���O������r��E��_��_��[�$v"	Y7�,j�|�)^}���Y�s]n8z���'��c�|� ��58ǥF���ItK�I���m�f���w��^~�/����{l%�
\	�+[�����S����x��
�,/.�ُ��uI9�<�A��U��Ԗ���L�Ŷ�ǐ�&U��ʸj����w�8�ٿ5f�*x��Ɉ.�N];9v�v�Ӊ&���X��/�	��`H@H�
i���ܚ(���7��(��=
��_��p�����21���CFJm�'���w���bʂ��$���*�ڻ�wћ�	_3`qx�@ɱ��K�>u�V֦מg�U�ܼ�V�rX��)��8���VÃA c������y�Ź%Ο����`��7-\l8̳4�כA+I5*i)5�ضy���Vڿ��!P�) �����a{t�R���X�_WŁ�N�K]XΟ9���>~u	(h�ý�F�[n;~�W(F#~��'h%9���مN���:������o1*Gc��}w�׿�e��(yG!rOU�/�q���v-QU�յ-f����s�\���WN���}$=M54�|�<��~���|�<�c��v-4����{�R�J�%�n��`�
	p!˚4����mN��K!�zv��q�ٖn)&����9r
d�ZF���/�@"&ѳ.�=I�����,<A����c ��"�]�j1��֝��#��Qn�$7z�=�"��ڪ ��v��cX���|�yn�uS��w�k�~!���^^
5ힹ^���÷�!����R)��l�m�zy�4�h�fXl�mM���RS97����P��[����(!(%VZ��$�b��̙S'9w��8�L�d6�{�֒�v�D)��D�x��{v\1x�M�{O�e� �f�^L�M�Hs��N,�=�څ��5p��1p;v�I����k� \ml֐���a�����s����`�<����LBٯ�{>��p�Σ���	j��c�H:0���L'a�l����s�/��g�W^y��l��?v"s��S
áanNS�>��&U]S׆4���T��X�p��'?z�C���k�7������}^x�6��`�0ߛC˔�,l8[�%	Z�h�m� %HUB�jjSb�:�[t�qT1W�˺�+W W�;w=>)W�lS�}�E.E�ì�&X���b�IPMe����Z��i�l�>�ꈜ:�|3��q�����K_�7�m�w���u�7���j�݊ȫ�.5�r�*dy�J�P8�ԁy)�aԕe4��|Ǔ�\-
G(���9����b��o������X��i��.Zq��%V/��"9�7�����,�:�.y�b(�q����������Fk����c�'c�Pt�_k61�em`*�����N
��
����K�)܀�~��=�į��g�ƹ-t:C6��*���o�����B&@�z�\���V�o}�1��?��x�9�� +�q�B�@�Q�d):��$í�'�z�s����v���J�Lw�յ5R�fnf��_y����_�s���s�9s�^w�N2�NSz�Yrݦ���H��j������FJ��"�=�d�E4�3�b~5(��A���+�8�/h�ʯ��Ѕ�=٬�@@��n�Q:M�|TiH��8gbW�����ʂM��}j-���Xr�j����э��׸ P��v�O�1l>�`�"4�F�{�0s�`6#��,Dת�`��3-��dI���Z�,�zF�$d�\�:��i���v�!�TC��8�$A�,��PY��#�s��$J���#}���	�]�ศQR��)Ӑ��3�=!&T46ȍ�����T \}-� Mr�fY�_䵗_���-�=x��w�`r�!��X��:G�Αi
�R�!�;Zr��g<���\^ciag
3��9�6-�� �Ѯ�r��y��-�z%)��[�zs��y.]:͉7Ob�Hӄ#���dB]zl�͒B؀>9A*[h����m�#3!��H��b���������ʾ͆�s��4';�B\ߣ�+q�"�FY�4u��`�պH����\LTu]�q���@ S�>�Jt`�(����J1F��5��] <R��3~l` Pq��t�>���`*`�]+����.tRp�9��]�����a*�M�	�ٹI�P������҂
y�OBPr���b*%Rj�z��"�`ia���n0\�u��d:�qc.��~���uj
��0Lv�ă �5�Һ��^^�$N<?������ٽ��K��J;q����n���|;xo;Ü����d�E,��lL��(��㔰�M��B	�)�-���2����wcP��������O�V�a
Z;����G'�DVT��:�D��C�8�����ܳO����s`7 ��'��(W0
x�7�F8t#�N)����,mSW�Ze�Gͥ�Kd�M]y���N$BD��\*��amE��D��`W-�UȰr{�1L�֯�S�&A\Yt>&���NC�.�ȹ�%d��ޟa׵zʛn�A�3�Bw?�,���!�6pts}����QZq���Cb��ڍ�8����j������1�wXqm� �Z~2�M<�&��&�g���x1n��4����x�%"���ڙp�+i�0�G#z�����ՖD�\���0����y�$�Ɛ\whg�(��E���:^�$� �"�A�}�wXc@� ���=u9`0\��9tp7Xp�u$�шV��JR`T���3�,�T���d&�/�ԁ+���=N�h"���qN*�>�6\�f�4�~H����7Ұ�N�C.��������Mv91)^�͍�ܞ�8mz��I��U(�,Jʀ�Đ�B��m���Np�b} �y��
�J�\�嚪!�M�<m!�%U9�8��J��ڠM���9V7.��Ko������ʧ8p���Zb~������R��-ըB�)3y�����?�ُ`?� 'N��~x��Nq���8Wc}x�:~��^|��'�#u�J������˰(P�a��(<Rj���Z�Ȓ�A��9�q��lp�l����Dp�`,&�Dh�{��7�R�,KS�c�i���{*_.�f	�=kp��RT�5R
�V��0����Z�,�|�����*օ��g�D�,Ƽ$"\�����Qq��t��C��Gr��%��U4
�9>|&nuS�ׇ���<�`���2�%��'�S�4�����eH��W��,���| �O�*�� T�oN�1�1%;i.������Ā�6ݒ��:�;��
֙��ʄ���/�,�T0 q�`y�<"�÷�#�I�dE{~W֘�@8�N�V)(��5^�	J!E�&������bn��N,��5���}{@�P��Sjc�҄Qi�K���
,S�{" M�>���i�����N4�;,q�W��1	I�Bhj�/��C	�75ޙH۰�i�E�m��=�nV���^��qoD�P��>��!��	15y۾�M_s1�I��J�U�mUaL��<k����j�JH���c*MH�Ʃ��j�A�V+ems�N�C�ע�pH�#S	�NΦ+mm"k���G�fS����؏��>�0����ܞcxi��c+Zy��_C%I�تF��V����m�v�V7V�e��ɺm�qdB0ڰ���	 �7��VD.۴:����dYF�
6���b�d��H�eX�B$\T����ū�1	^��m�'��y��:�w��
q���ԁ����M����tpīj��Y �FC�ph��!R*2�c\�s�4�`�e4�#S�fgM���6k�E����>��8�����	F@B8�q�YH�4��H�_�e�	�N�I
8!v��S�/S���%�;�w'�P���R[�X.���i ����i.�s����;�dQ
����zwo�����}�H=��b7��)m{��l
+^{�5�����Б�h�iw�qT�ОIٻ�-Hd�����#��Ҥ,�/"4u5V����%i��ZP�b@Zzt&Y\�cna����N	3�}C��[eE�՚`b:�d�5��	j��N<��g�}�!�x��E*��)�?�G�0+�����I���)��"w�qe4�h�U�(�1�EA�ʑ�7غ�fY\ �&�@&�ʗl���Z��V�pӍ<��=l�mr��%*[�DJ���iu)�ݙ.���*��"amu���(�hwg�_XDJ��uxV�'�T������h��r��kRJ:3]�Th��G)pN�ry���5�M��#Q	B�&E�����
�B���t�Xc(��bX��!��x]���+S�Tۯ���L��|z�/w�&��15�5[�gށs5e=�ؒ�|�[��BQ�8��K�V�u�@���QEL��܂?��E��60�#�/��̸n�"���7(�$4�Ƃ�O�#q����২����ӛ�4�"E�g�-��iB^��������ǹ�Ѷ͇��^���x�==V��\妀�X�$	�{Μ:���V�`��
UiA12�$��k�ȓ?~��{_c��E���s��et"����/,R+��P2��4â6Xo)�nʡ=7��u�����y?>� {�c�yx�*���s`�4\<�͵
f;Ka#�br07�ݶS���&�U��v�|�}�2]�M�J��=ȷ�c��i���,�+;������T�LT���b��7��t�i����:�kwZ9333�[R\<��,ؽ{7�-���y�U���F�,.�����p�=��ԧ?�-w�;_}����xiɺ9��y�z�$�*ٷo/H�C��)��9*Ypӱ#��/�2Gn�G]W��5!��ڈ�֘[�Eo�����:�C�ÒuZI0����xG*2�u8*v���m��|a�zXq��
�l��!�6�x���TUA1��̐e)�V+D�-49}m�Ց����L�g4^����5�qZi5騫�ʔt��L����h�g~~�Q!�-t����5�]8�?��ߥ*
R�p8 �y��I]��$�zQ��5>�JG4�|�=
��OI9.pV
-�'���u�q����J~�_�I�>�W_�m�������G���Q��7Y���~xp ��1
*�>� ��o��I��������G�!��`|��T�>���~�˿�/��S�=��C����AV�o`j�Z�V��"������2���p��|�����8���T?Aj���;)�K6.�s��Y������F!�)�͡$����=�!EYR�A�Є
��.&��^T�@u���ۺ~�R��Jf��"����w�)��)h
11Ʉ��&c,��m�v�,�8kX]����%��Q�����+Μ;�֠ρ��O}�����p䦽��[����}G���;�η~�`���	*���,U�I�LkV�6�gS�V�G>�Qn��0R���I�vN=,y�����fin/�<���C:��-HImC�윥25KU������q��.����Gy�㯝�ŧ_�g^�����g~�ݷ��Bo�sg�SU���y��(I3�;vv��*�;���K-� ���v����O��x k'�ӌ����5�2�k.�������}��x����3s�ݺ�<[�%$J'aD&�U�r��������lrb��Mc�X�C���6�M�\(�&(�r֦�,�	QmZ�����l��5�}ZML�
ל���~���Y_����M��M:Օj1�<��M�1f�@Й�-�أ?�?�Qݏ+<�XJW�&�,���ֈ�?� ����[�?��5O��8���_d�9DʄDdԵ�ta&^GiBzt��iw�np��7�|�_������/1�Gկ�1g�#e��![ �$������s�:��5�RW����
z}�;����RPU�0eR|���]� �jV�NH�t*��_١��!�u1�W����.v\_?)�1ɓ��'��	7�"�c+�%:��aLIi+jW��X�(ܐT\R��[�1,n��V~�g���>��ܴ���iWD��g�Ԁ݇��������|�n����:�����F�hڝ.�ϟbm�ʝ����K����C��$�s�=u�?������=Z�O>�2���c����c71��&�	3Ⱥc	϶��a�@(Eo�Co���ر[��>��7/���~�G��^�x���������MF���Y���*�s�;"�~��j�;/������y��o�2��T`)�:��p�ٳ���i�+_�"��+�����!��`c�2u
Yμ����*A鐌yeq�����,���u�(�Q.ɒ8W�
���?�=��K몦a]L�|(�vM��2 ,;��}P����b��-����������a����q�*'3��>��Ȕ�N���^�u�,˘�<��'9��i��B��L`�w�Q�t$�����_�O�g���8q�8����Ez�E�P
Z�7[���-�q��Y*7��~��O��oq��]���A��B)��I�tj�sϽ���+,.,R�,i&������Ȼ���l �k�P�1)���(�$!�10S�9n����S�8�wۮ��?���W���
�6�W����2,�T�@kI��*e0p��)6�VY^�q�#�x����𑛘[j�����Ǜ�r��3Ԭ����wpE�����G}�
D��f��]��K+���'>�-��	~"wu*�G5O?�,���9s�"�-Ϗמ��W^�g�⦣G8r�!�{��ܲ�D+�L�Z�r��
W{R����=�rha/T{���[���;���>����$�?�"�����<�T���M�4EJ��^~��m�i�ߎy�W�;LI������E�eH
�b[�,�c}�"�Ϝ`ߡ=��o�
~�K�g~w_:0��0��`S�$h%���v�\?5nW)Z>Hi�d�7���5�#I��Ѝ	��BO�Ts��u]Q�E#|8㿦ȍ��o��v�܆Db����;��;&���*´�X!����o-hN�U���e��|Ǎ[��w�:[�ٺ��ݷN\��'^�O<�jKD\���A�8�7��`f��_�k��
G�'_�3~�#ږ~����M�ԴZ�<�Xð�pN2�0˭w�ȱ;�����*7ݳ�j��[�注�08g��#�2��/��٧��T5��.�;���>l%��(rUUGY�x��;���~�K-H�Sow���$޾ S����Y���΀�����꒢�uRfz]���*�)�V;�Б}�=x/����rϝwq󑣨y�%����$
!a��*�N|�-��ȯ��/�������7�i�R�NjS��8m��-��@��F�4!���.��Ϝg��:��8��f�U��/����~�mn:z#���w��]9�Wk��*H\�,~)a�B�x��g��>�������<���?���3��O��E5������_�|�@�o������ӨYPxi)}M>� ��Թ7�숏|�~���O�c��z�IO�SI����*)��X�e)I�(�Q��fO���:?�Aa�ɒu4u�k
�[�<?�E/�)�9���g� �)�2��:��P����Q���K*Ț;9�ʪ�Z�ӏ�o�0n*��  �?�Dr��y-K ���c�r�"`�{\��{�bA���ό엠e���3�^���{A�J�,,I�A8t"��
!��[|�g�[���o�WN��kg�pv��4X[Q�H�n���"��8v�m�q�M9z�=���с�$�h�N5*I��E�+-:�|�O���/��9UQ�i�Bn��s�ԣ�〧T ���\��t\q�:J8c`�6�_�� ��3
����w��Chj�TE����&�T�P����i"��D�j�����>�+i�Sn���=� w�uG�<��[w��z�������c��eMQ�0��6�.�,�y�cwӝ�S�L��S!(�����-���>���ؼ	��Kˋ,.,��yfg(%��>���o�l0��Is��'�%iy+EHp���;��L��jtl��?8�[/������,(]E�=C��ƚ �:�'��%;���n_\E�2M�G63�(��"��)Љĸ�Q���=>��/�_�En��(�-
*� �o(G#�<�(j�j	�-EU����mWW*�k�D�_0�
��#�x��� �ڌ�����0T(<�<��o4��5������G ��_��B�hLl(���эU�>6�A#x
 �0�ڈ��u~L�SJRW>fv{3�f
����A����M����n��� KZ��s���q^x�5޴!<��h� ���5�v��`@Q(%�^p��=|���ƛϞ��ɋԅe��[�Q��hMo���}�س7��-�Z�����
�6�T��ux��h4"Ul���'?�	k��8��&LU��b s���O��M���6(i�m��D����Y��F&^nLh��]w w��v�
�߹�S�^��Bi5.Ž�VAe
����V��H��ۚA������D0���֛n���������;n��'�OU�#d�L���SBzT~bQUԶdiy�jTR
Kr��g�n~�_��x�f��HQ�VxQS}�s�^;	�;lU���l&�c�r�7��/s���y��,l
W9|x7���_���<@�+L3�TSG�<w�V'��t��eax�
X?3��ky홷x��'y�{?����,/�byy��K�NJI�`�#���97���Hɸv��@`��~�#
���`4�B'�;�9Ư|���g��J0�
�Z��(6.^�����SI	Zcj��+�w�g�*�Ŏ�������D��'bt�	�1H%���NX�r���t[y�� [�Zʢ�{���">L��#r���gY6����̘���1�Q�v^���z���=�#MS�1�UM�e���XW��Pa^X��V挅��+��H��YW) �;
���б-��a��*����9v�Qn�{/�j��@&
�%�Vt:m���e�T:�ͽ��;r㱃c77k'�dR�R���	�[�,��g����Sp�����G9��y:�6���-%���v;ն�:�/��6ὧ�J�ax�����Y�M	 �@�0:�ף���p�3��!Z��M�E�Ӊ���K�L/���8w��H�1�u6�3H�H�oJ �ǹcFaЉ�)�!�a�e��ff�˃������8v���ڻ@ޑ����� ��O�Ի�i����p�(A�ɰ�e��%����Ͼ�-�1;�H�@"���dcx���>�D=�XtKa�A��n>�/���r��:�?��n��h�,���_�e���/��أ��<	i�BP�%���x��I�,��ӟ�8��1T�"O=��>�/=��L���0?B�=�5������iK��L5�=�v`���u���gu]�E�)B��p���
H���h���e:39K�|���7�O=�.��?�&
�,Nz0�ߡf��}Lm�A)&�O���Y�S�|��hw�UB�o�ڗ�-*Ո4MػoO ��K�s��� Zhj[�m e��0q�OE�Q^��E?t x�{�A}"'@cB07;7>�sH-�2`���1�#�N�"��6�惏 �ه���vP|���A�x��"8PM�k�DIR��-��H���Q�����9��$3���]�Af!�G�����r������5�����_�Ą<#="��b��E��B�)UQ��v�V�K7��X���W~̿��D1,Y��C]z�t�ݱ�������6w�w|�s��ٹ�,�hv�(䭌�L7�,�HS(�(�\;Ŋ�n� >B�>"L�ߗ���z�H��ǻ���RWeX i���'i{�1ʪ��T���<��}�����ei�<��9�#!x!�1���Ṭ��~�ظ=zg�B�hM9��QE{��=����s|��?���Ef烕�����"���x�[n=�0Bz��5�Wt������z'�<�gϞ��������zU;��H�9�9*�\8q�?�ڷx��t��>��=Y����Sg����C;��e��h��x���1`X[���V��0,�P֤Y���*"1�`7�$��X_����G��׾�����-�LAb�oȻ9i;c}uO����+*F�)$I�M���N4�rjM\��/�
	P)2���f
�D�\A��tz�0g���Hl;�7���}�Vk�_H$�xs��(��0ո��L2@"Oi�u�v/}�v�&z2@�1�7b���J7��{�	A�������爏�l��uiH��%|�kƑ���˿�3t�T��<��҄�,(�I��g9y�!�Ajc�D� ����6Z�v�f��p�O��,�>�p}���&����xk�����y��gٿ� �|�Q?h�)�$��q¦���풕R��0�
T����B�7@��H慠��Y�_?�IGc��JM��X�W��t>zkN� 7Ņj��U1
����$[yﱢD'	*��77U#�v�M���g>�Y��1vZ`�=9x�����P�<�9PO[m�{7N��bH+��u�<KB�e���x�x��7�x�|ܸ��^�������C����G�5�YKkv.t��E	����ƻ���V+Ŗ#�v�4����<;���(�<�&-�%�-^{�8o�p�,�i�9�o3(6��vChNn���1���i�����#�Y�e���
���`����]K��V�����u���?���yn�ss3ɜ�V;'�4��5Ο?���\x��Q���>E�f��q�듼�7��v��{�
]gl@�|�m"�H%��!�S�w-�S5=a������U(���k40Ԧ#��V�����JӔ$��?��>6���e��]N��a <��**���S����C�<. ��%�b���=[M"�?���J�iw8���x�('Ͽ�?�o�1�䋿�� �ۨ�Z�$��[�� "SY�j�6���!�|<��xo���B>��K<ouN�+H��j.�2�_�����g_bivs�E�� h�1�	��8����7���ok.�x���=?��qu����
׳��{�%Йfqi!\��D)��b�0����A�����i���oaLM�'d��$
\���,i��9Ze��E:ݜ}G�r�=w��G⦻�g�.�^�[.�Y5�Qu-��c�_����!zŦ�t�.�9ʲ q9*2�8v�1�?����(!1�c4,�̴�����:/=�*7ܶ����-�D���������[z�ם�o�/�ts�
 �P�9$ f3��)��r˶�q�����3O���2[Ӟ�v���v��`Z%���(J�@
9��P�*�N�������s�
��6/>(T�=�|;��Z�]K��D���9�x\mAid�8sl�<k����Ȟ|�����x�\4�IN�١��Q� �̶�t�e��RGK�*��j�ศ=�������̲!�(�TՐ4�䍄��[a쐚!}�Ds�
W��O|�{?~;���l7�`"�T�$m7����_�:�6o�+�aey���,�{VV�x'It�B'�!Oc|>�<w��&�R\X��;�1E���2����l[$��F'��:�=
�Db|L��am�ǰ� �� ����ih4S����K�à5S#3 ��u����	q"�{ǳ=o��@8XG��BHʲb0�
�clÐR2=5xjcB���o�^�t �c-+K]��MY�K���"�������v�n~�5��TU�/Ϛ):Kq�P����R���`���(�2R㝧����05;�P��4f�O�����!���_`8,�|��`��G"Ӑj(�������-��X9.B�oQ���Q��,O�1�� ��Õ��C�p^��͢����c�ʹt�����C<�W���umS#,�l7p"	�g��X�����a9���F�V�p��v�-�}�=\v�Nf�: �uIٵ(���7�~�E� a�|��R�a���]l0�p��D H�Q	\�p¡f��1ϭ7��ї�`���p����Vz<�����2������>JYt�q�R�J��u�!<R%H�H��v'�������/�jPs��+�J���y����G�E��*��p�,�ct���֋�Սs8��ъ�Tk����-�Jҙ�Y[+ػ�*QpōW�=��(����l�~I3�_I/�Y�A9�L�q��� ���o	A8�%q"�'�T�`�C��D� ��]4�yvL�y�^y����>$"���O,/��K�ߥ�i��[6�S�YO�ؿQ�7,#��VVW(��Մ�����p½��9Y#]��"�lL�_ԦfD^N&���}2z�E"
�3Zz__(�N(*�ђ��2J,�tݿ	S���M�&\�طϯH����bn�R	�;��)���^�w�_�'����w�2����$͔buH]�H$BC�S�w!�S��F�z0�h#�]� 'p�G')�sT]C6�И�y�|�K����g�:~��[/�ՂrP��[y��i4Za^:�s��
R���g� �t�gum����H��d�>�J�D ����V�I�:�P�/<yw�*" ����@��L
L���v��pz�$�O�؊�/��
����>pw�66o^`f�|t�s�
/<y+CjOU!�^�1�AL��@��rݷN��ހh��kK=0���TB�SN;	N ��yK3� }��J�x��]��m��Y��	X�de ��j�L%RH�KC�7���h������<����id��L�%[�K��㧨ʒN����<���]d��¯��xX�Q������ɤ�u��y�i4R����.QUC�v'��{���?�	���r����0_Z�v-�5��$:����������G���Êv��Ђ���>��� eJ]8��tlv�{�1�Q\8}��j㸟w&.>���K�4annd(P���>�YAX�I������R�%
������e��) y(���\ȧ'P�� L��sp�	��m�#�����G�_��J܆�)����(�
������Rb�����"�N�Z%��6�+K�s�2l��̙�����o ������+o�	@5(qUM���*a8���ц?���o<B*ҤA��H�x��?����x��gIMƎK.�Ӟ���/�j�Xt����h�9�	џw ����'_�#�eQ�uרʒ0�5��bE�%�С����sssT��M�\� J1A����Á8.xbh��pq���*V+ԮD(��+.�+/�=����w\Ǖ�n�>[SW=|呉"�IB��
�5��0��p�%�v(���b"|h�vp�6�%��$3��)�#�$}�YNY��_�;IKQi�d�젴���<��� w}����4�[���d]"QC:�૔o}�	�����|���{���,�^rݕ>�~A&�8�i��E���75�N0����^""|�ɥ ��k�o�ChY�e�f3��j������).߹�?�ß�?�q6�g�R+t�y蚝��D�Xjz�U~��~�<oqõ7��
���Nt�
N;�s�D�T��
��,/W�j����H��ђ~�|P�DkZ��N+*���Rl`,�.
G�|U
Y][�(
ڭ�w������Y���ugƑ��Ԗa1"L-�92��+.�!�G�� ��)!�ZQ��\U�u]c�CO��# ��H�q����,blZ%0�᭣ݜ��3+$2a��f�v7Ͻ��<r��>�u�^���2M�K0QCP�;?a�0a�)cηʣ�c]�ѣ����{����/�����dZ33=K1��B�feY#�"ъ����i.&�0�9
���Q��ui�q���U���7� Q
T@2p�j����!M�`bJLT�ҏ)Zq]���~�|޹����hF�9�2(���!�� �)��W_�������q�]7q���[���Y���R�}t
ICFs�gC���r2��\%�@�
��$R�Q����p�"�@��jh8u�/=�O���}�!�x|�l��]�	Ui��Vཝ��O�g�UQ=��w��~7�'�Gx�=73�i�v�Ig��u�������,��q�������aav�+w\E�[�8z���i�-V�V1eE�դ�l2,��<v�F#ga��������Ƒ�r4.j�w���.���&���>�G�c��ad��ț��y�G�ˇ>��7�EMc&�eΒ�)"ϰu|׫!_��?f��=����5.���~E�i��@
�g�:y�MS�i�M�+�8j,���0F��^��� �ֲ*JL$��Р(����f(�(R�a�Ï6�11���j��)�l��w+��w�h�b�Ứ"ɦ6��ǡ����:�����Z{%��"��o����hr�GU�V��(��j��cxsY#A� ���
m�s�]0��Z��UZ�6êF!h�:���@h.�|��2����O��ٽ��}���9.��R�,��l��䐼�1���0\��.8yl���x�����xn��(������Qy�~E�7�ә"U���i��eŰ@	1^�j�qr���c.�� F;��*$)�����pQF b'�Nxg{A�o�6S��j["u�1)�X%�Zw��z�%��q�#��(FR�ń���FS#�dR�*��+�5O#o�RMQY[�R��)f7Ͱ��rˍ�u�ml�fi' �� �I
2ZU#f�8o0&f��$��z����� g�{��D�p����;������?��}����hӥ�q�]H����^o>k�=�<8�g)��.a�w�_����;�>��7^���$�5��k�����w�]��}���y�{�(�o�_�t�S�*�=ۦ譮r���,afn>�NV�BFC��p�������4���?�Ij�bw$��F�T8Q��4�s��+mx��>Ə�����K���2,$IB�l���k�P$Y�g�z�����������Ce���	��ۅS'VPZ�T�&D���"Q�t����ټ��EɄ�P,��"��ˠc�B�5LMO���F}�p1iխg�P���e@]Z��SX
)t$f��si\x��5�_�AO:{<�<�H�]?�mm�*h��l�Gɨ p��No�u/���~M�}����$M)��^��NR�TL�;�;|���Ut���XS�gz���t�=��Tu�B��7�ĂH��"o�8�Ȓ`�S�L�Ʉ��
1CSuHU����}�av=��;�s�5Ws��װu�:�Mt3���$�L���TE���gxy�+�}�e�ߵ�#��P��I�5Cn�X�^�70&\I���.*
���~U`�zQ��(�n�OU����j#L�cVY:���b�%��G�$8�J#[�e�T��S.ޱ
G��ya���!BId����D�uiPz��W�u�qm<�!'�Q��Źh��B\D �T�XS���(M��SGeB��T,-/Q��ˮ��﹝�����
�3
�i	�a��jb��D�-���$�"Mc,�D$h��anoI"b�"G[%Z�!PʃV
*8ut��{��s���W�����(��)��˯�B����[y\
y��q���5h$eم2+���|���,U5��Jv?t������*m�ٙy��rf!�f���d`Q.�"������@�j㽣 ��r���yw���'6<{�q���!�U��Β��V8[#�
�}BYt�Y)Ns��Q��|�/|���w��K���1���	�P9AYX$	J��$G�W?�h�s���h�xS�hiz�>*�Ƴw�~��r=���� K4k�5��E�%�9�L��!3��s<q�%a�C*��[Y�F�0	^@��GH�E]�Tg
_lϥ��K�R��*�·�A+�	��^��+'�ֈ���aoM«��+�h:#
^�����DQ��:�l^D��K��|�~���(��$
��倴�<E]�gƺ�y�w���	��/N߄�aA��
�wY�ʒ6�zvu��l�r�Rxo���+f���3*&Ĉ�u �Bx�3!:�i�9)9�a�3G�X;��Wv��Σd͔�|�dJ�RA�d(���aE��!k+]�k}z�!����f���6���)��������a'*&ǩ������s��jp)�^���; �i)6Z�:��t,$�vȆb~�<S�mz�d0Y2��[<:��$?v	�}�K8����b,�Ba�c8쓤9�<@����u]�D	I]���	Y��73��(��XY"GY9}��)��k��>��?|/[�o"K3�\"�2��m���;�2d�[S�$	Z+�$'��X[��Xk�8a��d�3kC���Bh�\!j�
�yz+}��S����C^ڽ�Dڄ�M�5L�gi�s��� �}3
�с,�녳���x4�,���,C��&�tjM#o�T-��4]�,�e��
��D�Y��%>'�A�vV'���6��f�a��*+�,A(����#m$�(ǩ��I[���3?��اiM5�
I�R����Pڣ�b��c�5C#O<J�K��~����1?����k��om�蘈�R�r��C��E�	���|��28
J~���7��jUN�c}�ڄ�4�]�V���<I������D0;~���ԞD
kCʾ%KZ1s®3�1-���Z�~x�'�Y-i������=CGe<�$|�^��;"�`0R ��J?o�YUBN��z�p)�I��2����#)��� �m��^B�LMM�g9�]�����md�'����8�2�-RIڝid�f(˒n�8�-���g>x��$����Y��-.>,)4�Tk�Dg���S�rX �"o���?zM����LS���r������
-�5�<ɑ�]�q�Np{��I`aq���z��qޡ��Z�.$S��>��[��I�a�0��~��(���"um(���T�J$Z�(Y�B'�=����C�0x�[k1��R3�wi6|���}�.��bfZt�[$��S>��]�vU��p@
���3��*�sT��ct�$i��e�*J�����Q�_ɱ�s�G��/����X>�J#oa��~wȶ�K���fد�5Zz�LI��]}���Y
�&�4BJ�4%M�q�$a�m0:#Fs����u��ճ.D�$MeJ�1��)և=*E�cui���9��/�y~�'���rKZh�<��o,������A� |H�����7>��q�|��}�u�]M�m
I9(طw+k���͍i8�$c�2�����,�L2��
B	��Fb:��k�[�lݲ	��K֝ZE��1����n�8�A���*�p@��!��:@�R|7��qk�4��iE�f� ����%}��ш��(�x{�L/�w�xL�Ԭ��z����}Y�ޣ�\�|�B��
�Lӊ?E�.]0�0O�gTuE#M.L
)F"��m8�YD���D��b�An�+k����<H���V&��[�g/E����)��������㛄`��f��s��ɠ��%"0���Vw,vp�8���iff��g���Y���ZOy�-ү�n�0�Gzx'��*+��TuP4�	*Ux��GY�YHW���{�y�(�K4y�ض�bn��:���J���jg k�6߇���M
�c]H���p�E�x`k��UU*����W}G��(�	nwZ)�[��.�?�4��~���|����3�dI���F:E{~��
��D���xA@��چ�/���s��ؖQ��"��\��1~�f-������o�45^����
,�$Kѹĸ���*iC���4?��화�>��&2��=�p4[�"R���C���F�������_ I4������n�(kd�uUƸ�`��r���#GH|�$I���>
���,��_�d0q�Ұ֠�D*VC��ml޶٨Aa\�Z�d�hD��c�N���B��fS���
�����k#=h�4�fn>������Xkkk��`���3�E����oK'��Ӻ����ow熹��z,S2(ʓ$a0�������1�B"aaq���QCi�*.�7r��v��&#<S[*�~�F�d�bm�p�ō�B�Zj���j��%ǆ��s1�
�G������З<kr��)�;�����R�ߋ��/�/JdT�	a�v���Άє<ѡۯ��Ջp���
3��
0�8+ML�%�QX[��z�$Mh6����E���U�#iH�+AX���>��ej[�u�Vn��V���*v^��k����+��Vq�`{��&K$�2����w&t�Z�rX�=��Bʥ^G0b=眧r�
)lZ&�����<���<���<��s?|�^o@���ҭ��UB9,�N�UNQU��T�q��B�(�#l��W����Rj]r.���y�]o��zcj$���&B1�dR(��>2��M͠�2�z�f|�����O2��S�5I� TбX2�P��|SXlm��������3���������r�5��]Y%�3���-�UJ�lR
kv?�����4��JQV#�G��l��+�<>�����B��v�c��3�fz~Ԉi���u4J��z1�d��Ǐ�����yv*��J��oXq����U+��~��ICQ�i���lx��2 ��.�� ���Q�a[����'�� �s���+?|��V�d���o��RD\���J%�����ItJ�7`uu-Θ��v\ش@�g��x?{�ʳ�Εڨ�vΎ=R^Ja//��#��[]�D�<�8%���NŘ
0�b*��l��3"x�]��&�S�����)˚S�O�떴f��I
����q/׃\:SS���"d0������˸@�3A�u �p��3=v�;�*�Σ�f~~�E|�r@eJd"hvr�fư쳲z����8gزe3��tw��6n��vd&l�����H�(:ՠ�0��\:l:v!刭_�#u׌�)T(fMpO��YX�5�Z��9�s���]�س{�����q�i�aI���kh7�K��R�2�,%���S�ب=�����<��g��#�nkݻ�;)� ���
,5�N��J��G���+���Em�g*Z�R�&�e��%�v#Đ�%r ����Y[��k�����/�G~�'~������?�qΒ������O=��V�v�=�k}�RJ�1cD읺H�1�Nx��$��V�"���L�&�/*�5��]�)��T��:���cTeI���t%%v� z�G��K�
?7L����X��3��X�k=���0���<��� x)��ޞV�=�Ax/~�mݸ�GA��R����V���.����E3���_����,�+�vr2�Kr>�NU�cu�R�{2��Fg6���%���>@�X�:%�i�z���v�!e����oy���q̊T'tW��:~�ŋ/�b��D�^ �
1�q���lƶ���h5��5� �t��h%�c˺a�y�s��FnY%��0�8�<��na�a��L���[�L�㲋���+��۸���a�����׹"ɂR�,*���I��\��=al�@K���MkUQ�D�`d�d{p��)^z�O?���y������e�\k3Y�����!Ir��
�����[��12u�*a�#�$�-^�Н��v]�0��$���ۡKy�_:	:c���(e= i(���Z>�ß`�E���Rx�1uMm���V	�ָڄ�Izt�0�֯�._��o����O��_�5���ң�l���D��4[���#��s��Q��iR�F�q���^#Q�)��Q2IR��ϰ������МJ�H�1��6f����x�=~�cǎ#G�^?�=+�P�
��,��~�{0�s��HiΦ�[g�#���֥��Sx()庱���Z�m�K(Rm����'~;U�h�Z"168 �ȡ	/�!�n�j���n7IKP�z�/��̄�� ������s�.t�BE�ux����<(�Jb���Q*"��&MS�Fi���ы������X���w�ى��	����Nr=��b9��%cSP/�v������n�afv�e��G9p�%��~G�!)ep�M�ι�"���%G�G)A��@'/,êGeJjW��e���y��}�亻� i�@[�%2��a�Gg 3G3�b�S��[+ؑ���9���R���,�L��
s��/��#/��������ǟ���gzz�����R��%�l����j7�ci�L4��ɲ�4M�����0��ԉ�� N�"̧O8B�~<QlXA�׽���8O��ЩDʔ��2��[�����[/�w�aKR;P�4k�_��$���>�/��/�i����or�
Wa
��L�|��T-$��!O?�<�N-�'3Xcq΍����6 -��g�b6�T�
:՘a�����Y�\��ja�TA/"�b!��h*�#��*X9����**�QW����6Y|����l%ׯSO�ǘl<�z��j�
���V`³J�����0��o)`�{)���f�����B��H�y�_R�(6���Kp"�H���bX��L����n�R��^q���J��D�m�הH�cz\X�J���x�94.z�K%���L�Y����0�s���|�c���}��ɒ��j�C���=�2	p��F��\|����̶�۬�飔�T5U]�%i�H�0��S�oB�%�/pc�:v�]��%� �6[Y���qj��)�x�E�x��p�5��3��!Y��-\����Җ�ښ� � M�8����D��N�U(�T, ���(*���V�Ԋ\h\	��C��9��O<˷���<�8�̘jͱ��$2��6dyУ���i6�/�B2=5=އ5��&�;�$	��z1��M"�����I9�T'���-��Ş��Tx�5aIu����i��Z�����~�m$
�|I@��!I��_V%��4�W�R	��_���]]�������#�[{���/,"�`���f���ؿ�+K�lm̌��$	?ט �i,��b)4YA%nQ*�{GY�Log�E�!����܅�\�T��ua|���St׺dY���
c
Ze��ߑ.�q���_���J��Bgz|T�hzc\8oj��j�5�G)�����/P̑/<������톎�F-XXUU�&>iq��>N�<�7M�{i��
.ٹ�<��
�$i�)�C�I
���+$��	/�u#�}<(.����U+�(M!tT.�͏�I�|aB�7ąXL&+��܏�G�WWlZ�̮��G㧓l
%}�c~{�~����*�f�8x�ü��K8z�I�٢�����4I)��F������.e9Dg	�F2ʣ~��c|�G�	i �^�KY4�)�W�����j7���+��=�s���p�[�Zh�g�(&
���t�/� �
�>J)�,����yx��`CI'i,T�<���+��<���҉.�<�<�<�8�<�/�y�zhY��J���AB��$�l�9Z�ԅ �W��xWY��H�l�P�T�,W�FF��Y���ݓ��{a�C\{�7~��;J8���cNZ�g��R��v��?t7���{�;	�����A	������Yڤ,���kj�N��#������կ}����ʏ��М�k�Cڔc����6u߳��y���D��p�h���;z��3})�
٠=��]Or�������G!݄�21�<N-Eo ����o���N��ƫn��P�4�m�a�|7	�u���u�-7������\�sgp͌�t�����r�~���	��It�����ـ��`���G�QV�%���vdk�6�
��..���M���^��+GW4��FG3==�N����xŽI^\���z
U���m�'�����	Z r��6+��1N����Ĉ�;{ g�B�Xc8y�+'��no��	. B�?1�0� 34t.np��s��Os��I�4a�3Oo�Gou�4rJ�l4�v�8�h��m�Ez�5���y�܂Ы�5������n!j�/>�֋��᏿�;�o���wl�=�B#@������&,*�;�{<li����>eY�f	��1�-�8L&!Ҽ��)5�x�FB#K�_���_���Ǟ���XY��*�U���6������QW�NdJ�4a�ġ�]��f���9H�"�'LN���'��7�/���˯g��a@8�L���q�M��S?�L����'m$H%�=���-��B(�"I2\�T�����g���/_�����'?�_���`vq�<I���:��8Uϐg	KK}���y��}l�ۆ4*�EĹh�;��0҇��:��T�����4�Р�0�&~F�#�\�1�J�v���ѓ!H�fP��;�Ը(\�tK&N5qN~w
�|E��r-�!���m�6��	*� {+��@�tЦN|��K��>bὗ��yt\ �z��N
����<��y�������ݵS�Ml�,��{ۼe��T��.@�������b`c*�km71��4�
�Bʘ���.@�#��oי�q�; �2<޺��;EɋϿ�{.�!�y�E&2ڃ���F�Յ�v\z���,�,�m�v�R�Cfgg��M:I0��u��ck�b@�蓤�T+�.By͜��SC�N�
�O/e��-��_�Qn��:��fv\�r`H�?�<�"l���{Ơ��.�(����Y�%=��P2�3��]��=i��J�n��JP�:{�1��C=t�}{��tf�T7hw�ɛ
|��A���FJ������%��}Y�X@����*�w���A����Y��8i1�"k$t�>�V�����s�M[)��Aw@g����۶^`���5q��[����&�3]~�>�����r˝�������
�����c���h+�J��#�=���x���h�v�zv}t��q��Dΰ>���_v�q�v.�fK�z�@f�dxt�8������1��jM�Y���]�����O}����'�9�PPZ2�XX�a��[����+?�f�,w鮮�qr�Ǘ����K5 ��[!����aG���UO
��޽%�}��]��
�E���z��2g�,1���:&�:�-�6�l54���Ξ�gu�⍾���xt1�Z������_�!�W�Bĉo�ZX����8~)#��nw��y������p����>R+���Wq����S/���cǏ!<����eu�K��'mf�jSSU�J�r�\3?5Ù�?}�@'��l�57���_ƍ�\�����;yxO��?,�7>Fi����3��(��	2�\�(m��y�ƕ>�	x�\S�NX��������G����t��y���"RhD-0Ɠ�I*0�	ݐ�B����ƴ�'톇&&C�F����D���|ؾ�t���\�(�t,/��}z���t&�aXڣ����uI�*�$I�Za
�/��_�_�������~���:��|5h��Q2��T�D�d6W8�ٔ��N����%N^b�����$i�����Q�ZP�k-)M��3'��+�q�ő*�q,{°�s�s�
�-�<����.�fc,
��*�~��:�������G�p���Q+�Jo�-��/��5��"h0�,���:�W�q$����[���@ZoQ����Qu�yY�r���=��æNXZ^��S\���#4lZ�����/�hNτj�mWr��}J��K}�������g��i���[�jx���^��
���Rw��v���N�wA�9�+`�#�����?�ˮ���o��o~��mގ1�f��]]�٠�}���y���V�,Oț	�e�b�K�k�bvn�K/��ͷ��-����7^E:��Ź���D1���`�#�{��=�Ţ��(���J���\LHL���<��S/��ѽ<������,�%O�l^��<k�gY[
J�����l��r,�
:�8y"��<�p��^������6�k��w�	�U�e�Z9�E[����^/���F)��T�^�CX����:e�/��tf��7���?�տd��"�o�-������Q-�[	�yjcQ:���
�V����[_�g_d��@.����y��+����a���b��gN��>ŎK.�I"R�.��#���=�5\i���nlm�i60UM�6bj�����l�9�_��p��,������J���N�:Mwm@3�
�cNL�/�c޻q��[( =�!��~D}�_���5���Z��׾zKf@�os�r1�/�����2'�WG����h��9���pA��~�uEO��ڿf��6 �g=�w&�!�3�kq2���y�u��b�X�͝��_X' |��鲑B_
�u$3����L���2�7o�ז�j�fޤ�l�:���KK�^8�������Ah�-�������u7\ͥ��`��-���W��[�m�ЙD�U�\�����5�֥�^MhA$WW
H�<�R-ޅ	�%*Q�����3�xe��}��x��������7]};�j0�(��(%i�M|B�����v��N7F���B�bA���H�|��;+�{���Ϡ����{��#wa�����]M�5JKR�P[C��2מ��S�ܿ���������?r������"�
�w$Z�SE5�1��'��}�[��������"��Z�`b�Ȼ�c�ܿÒ�)u�	�^9�ٌzhI�2[�s�c����C�F
A�Sʁ%m�!9�}�S��đ� ����֤�Fmk�Yܴ@�RW��3l�+9~���.3s���=ޡ�>�x�Ɖ�o�%J��uU����c �����l�:N�r���]09R�j�XY9�ѣ�6vԱ����cv~�W�����������r�2��c�fTk�($���?�_�c�ȳ)�0FfIE+��/d���"�~��c��H�(��V�Kn��j��^�{�d!���HT��0��$k�5�R4Z9�J�E1����������ǹ��˹����O�9f�p����
�T��1�wgMHR�)5�˳Ͻ,��v{
o=����N�3	)�5Ù��<�ͧy��8y�4���̴7q��eh�bj�B⛘�PޢT���T��L���2Y���%��'&&�K?�'Lz��ڄ��<v_�C��li�4;v^��>|'ټ�:�H��A]W��B�0z���,k�<C������g�	�����>��SC�`+�ɤ�'�k,JI�O>�,_��WY[^c�̥(�ihE�s*��_(�rٸ�:t�`���sŕ[A���IZ����"
�p����>����x<{4B����T�{�
�-�l:�l��IKm�=�b����]���5 �?nVVV9z�eY�sۊ	����(��+�2�� �����Ǳ�ۧ��>�V� Dt�S��xq��^Չ��hq��*G����!�P��L������y������
��������9l;j���M�9?�G�Z� .�&]4g]�B�NɊ�j6�ꂗ_z�[�{I�����b����(TP��)����;��ҙ7�����դ���Tp�>s�C'���o�'�ҏp׽7ўn��*�bW�)��a���;Q���QB��&�=̍3a~Y���l��y�[Zp��
��!�_Z���>�����=r[�a��%:������%Ui�h�$IZ4aR��
S�W���AJf|��[>�!yn�z�0U�	�d��7�8r�N�^?_0�����#�R>���q�������h,�X[[���p:|捴�s[	��Q����+�8~���{�����Ú�� viF�%V�u���<�����{_��E[/���L7f��x��5��cj���Y���UU��}��/�h�t�b-�yKI�ZR
��z6Fn��uL��h�b�ݯ�~N#_gE5da�&.پ-\�@$��I)A��gue�J�X�ˉ�ү[Q�����B�Z�=��/t��Jomo7G'���B�R��82խw���<kRk�O��zG�T ��S3m�t$4Q�d�_�Ҝ�J�w��	�v=�_�(�f���@��}P�hNE�9\&.�6ck��xI�t���*�>B�+I�$�8����ۑ�G }BRמC�O�?����=E]�n����P*��2E��yæM���O�E>����y�V6-.��0�
�҂�H
^��r!�x��]Y�ŏg�
�%J*��L&	�	HďY.��yq�w��G������x��GX>��Tk���,
E3m ��$IH�kd9^k��ز*(Х$�	�K�3���sF�lD�1քl\�r�|�H�8���x˾���?�򯱊.��b��ϻk�k���5#ѩ�Xo����˷r�=��ޔ�l@�F�O3k��1&&�JPZ�?}�����Yz�?��1?�W>I��eA{���+�ʐ�9y#eح��͌����?��or�}�0�/М�P���်*Q
1�����]��,;�'6�?c�+�]�9��L1\�cm�-�����,�y��'ǽ&�(�**�t飅���:�*k�4������	�J��'8�s ���Fv���~�Y�H��?\xuU0;=����PU�,ѸڢR�(�9B�
�6܈R��
 {��C ��
�����x�\2"��
���c]�C�t�8�l	B�S�O,�r�����ڠ�������Y�N����Z�u$:�n�\P�W�Fi�p�ǣ�g���_7���h��.O����Ι5�����'���x�`�+AY�E�*����c,]�3�F8���xI�PJc�cG�X:�ʗ��<�g�"Iv+Z�6Y����`���0j��Kg����x��tӍ\{ݕL�h��Xy\ii�%�2�H��B�C2�`%=Z�Z�0���HoQIp�����,l�_\�'���c׮]=r[[�g��8���.*�Աڎ��şmA��.F�n(hD��r�=�z�D�z?9S}6�?�;����N���c������Yh��g�R���\�!{�=-l����T��e(�R���W�A{Z�
�>�]���m��Q�>*	>�4H�H����ҡ��'��$?��!��2���_F��   IDAT�?�I��`ii�
Ed�*�UE�f(-����M9/=}�����9u���E�I���x>X?D���k��+Z�"f/�����*v��H�#	nqa�x�H�/k�zk�TpѦ�\v�E���X��A&1�\D�roQBG�2�j���(�L���a
T�F����5h9��M\'��Ol<�_�|���]�2����wݘ�s��̑�K���A�N�֐�
S[N�9�%7nb�e[Ay�zHJ;�] {�y���gض�58ڸ���D)E�Zy����G��y��o�Z�뮻.0�>f=�@do���'��+�Ԁ�񔂺��Y��4,�Zaf['D�z�W�����:K�J�/��tE�"�������V1ю�U�Cr��/�~8i'����l_�n}�/{N�+��������Y��鏼ve��F�b��pW�f�,�X[=͞g�����l�l+BK�5薂T���{Wx��y���yy�!�r��3˴m6m����,k�U��߅V	�]��kn�Ε7]ĵ�]ɵ�]G>��O�08�
����D51�E�1�OI��4���uTE��3T��H;����8���r�08=��g^����s'ٻw�_~���Y�����<R��;,:��Ư���ov
���P�5���bG��ms�C;yPg�Ig��]k{]�-�ʓ��J"�0�V�c�+�nL�Q����*���(֣��YZ!�T:��v&n�gh����.cq�,�8�L�>�oc���6�橯?��������e~����O����X�ffY)Ns����]B[dTC��/�9��)��?�
�>s�ŹE򬉭��8�l�*�C^��������&Gp'PM!�{܏�}aH��t^����^<
u`q�
.����K���D@	'���zr��	�j0����j�q+�{��@�6��u#1'8��{=W�j+����{�A�"4r\aU�@w>����a�:�Mm���3�af�4>�3�щ��~Μ8��m��
�̸酈n4���B�fCeGĤ�W ���x����#�a{p��5!��ʰ7�{�)Mj3�}�0�v����S�Ns��$6+�=B�I�v��ѣ+4u�М�,ˠd�֛�w��o8��)�M~�������ح�E4RE:A��贛H�r��
����lQ�������y�Yz�I^ڷ��3+��C������Y]Y��y��G��;�r��|�Cws�-7s�Uۘޖ���&�2���$B����h�:	�n�v���pΓeY�Ŗ�ǖ�1�"�KC's��S�?���z��x��P��I���f�4#���ᐲ�I�$")n��;��r$��Ш��~�W���ݐ8�%6�Q��7��~�'+ѳfo&�х��ƂF�u�ũTc,i�"����fHs6��s��+\q��\{�5�i���0��6%�|*̾b*g&9��Q���O��7��?�_~���?N��Y=�J��Q:!Q
G5�i5�(Ԃ�w��������������q���l�e/�m�V��צ��w6�bX�PC9���X��})(�i�I�A�u�^˦�3���JH�TX�%��� dL)���^|����h�a���$�ha���u�}\��U*'������?8�x5T��X�K:�~.�0�$b�9�@����b��E�F����QS�$�be�K++�Dc�����������Ygp��_\���9~N�<�g�^ݧ�Z��}S����ai7.�\�D�#m�Z���r���[C�d}��,nZ`q�"��� DpesNE� j�>x+���s~���rH��׎��-��y�#/pƅÖ��Z���<YR�_��:�%[K���~|�Q}�1=�3�$MȲ3�s,-/�r�333,n��ҫ�r�m7���4��y9H0tD�C�(��a�HI.6��u�n=�v�C���Y��-�4ǻ���d��0\2�{i?/<���}��/��ɓ�(���<�v-u�cMLoT�ۭh�a_���­��E���?)���m*΢���K�|���۷Yżv�+�=�X,Xa{�T�� �M5�
�~���n����q�W�y��j�JP�j�������+������G�/�������r�bH{f�Ɔ¡�L����T$�����7��Y��}�M3�1u�!�N�
���?��|M~w=����3�kLM�p˭���&x�ULU�)�*^��gNDR���+<��.z���E]�y�$UU�@k}N�{�'�%ҟ�3Io�w�=�v� ���m�W�;����!,�Y��T�-[i�9�`��s����>~c
yҠ�f"�T���� �7��BJ�M�%�} _��o:
���\/����?$~v���7=	���� ��R�;�����<����8z�h-ӁV@ӳ�l�����I�c<u�1��Y;n{��nB��G��G�g�U8�wc��@^���A]���-y���3�|I�9���W����u�G�z�'�~����Z�X^^fee	kk��LO����+���?��>�:[P�d���Ge񠉛B�to.\�b<�6��m$b
�W(�i�:��k\e�/�T�T��ye�C/�⑇��+�'<�Գ(�p�E�ٺpy��K��a-c�뚺�C~�NȲ����( �N�L�ˬC��ӆm��"��_�H��!tc>[}[NI�*(��j0�!����$i©�>�n��:�M��Z�k���t�%��E��W~�|�s��>�i�ǟ�زc+U��"�9x�v���������\�?��o����ʋ�زp�ʰf���'#�GUַ���QM?�-�����=g�v��Zfum�[�� �^�-<�ңE�+�
4��`�EJ
.F	%9t��^zSTSQ�e�	{����׽�#E��8+�M�6��xמ�##/?�U�kĹR����˺�33ŦM�$�3�cP�	g����6`�98~��80��o� P����Z׬FR�k��'����[Z�a�����P�@�c�"���S�V(��|���*�3�lۄN%E]�U+\�n�,
!^��to�zw�P�p���ՄEl��D4��֣UF�4R�dJQy�=<�ؓT��s��}$i�Zo��^�Xش8ϵ�]�������]�ܶ��J�����%�*�V�1
8\+�����	n|c]�[��#�朣T$y;��$	h���c/���������k��|���\��:�Y��1X�^b��!I�TH�ȲH#Ŏ4Ժ��|��p�e��?_��Z�@�����v���X�g����먪�0ւ�yJY��,/�i�<W\uQX?>E*�pX�H�I��$��������v�������l�b��>Y3#�T� F�K��$�A�d��<Ϳ������sťW���a��gA %� v}]
!�(#�
���I���M�{�p�u��Lm��u��Ha2��b�����%�3X|�UÁY:�����BH\�����W/DT���XOg�N^�z7brTܝ���?
�B���ZCU�,Nͳ�8�Nc1a��Ů]�S-��)�j��;w�C �7o����߁������P ,�&����to!P����6l�8��VX���Z"e��J��S]���Dbk�Ҝj�e�"I��/�H�&э���sv=s~�/�
��!��ҟ,��J!�
���W�5Jk��TU��m5Z��&ͩ�gΜ�����&��~����憫��yf[��p�I���1�2!I���(�aF)E�ֻ�p+�%m�A�;��}�yLJJO�L�S'�����������#O��ܧәgۦT��:*�h��0ΰ�����,Q�J)�
E��P���'����3	�n�6LŊ��]��?
��(w^���f�$NL�(U�8�p��V����
��[�{�|�D%*����B"y��_��?�x�?���{�z�����H����YGY�D�,�$��*�������2+�טk-@%�Ieuq�#r����_���M��;/�3�H��������/�l޺�u7]�R��琹�Д�(����8�������X��:C� �+����I��Bൃ�B�ut�,f6�GH�M:��v5�o`�n
���h�,B��u�ea��g2�F�^�
���E���ә�,*�H�_rƜ�j:J��,�7>��>p_%t��B��M�~����l���؝w!%�J��8r�[������9�J��hu���a�! d�٬�xgc$�_���j#��?_���q�1�	d����Bx�FN��؊<� ���4SLM�15ۢWvyn�3:s���w��?��|�dǥ��_��'���<����Y𮶮B8�Y��PV�nHۓ�Ŭ�)�x6>�f��N,m��7�d��=x��'x��g���A�N-c�d��6�Ӭ.�вA#m�EBѯ�B�0�	A��C����� �
�6:&�hl��#b�1�
|ָ���}#�f��|�(tjRE>��#f���..�PL�,������*^ĤFo����w�Z�������th�D�$ 62�}~����r��a��_��|��A5B��2�"�o�(-���K�|����/~�Y=��U���#L���^�5#�SLL��j��`x6�����X�8�|'w�y�X�Ju�9���D���h}��y�%�z�I�4�b�'IR�\��,�(�q��_�;%�V���y�MX���bVߙ���$κ8�:��e��nbva:~.�8�`�SG��k�T�*�����*�B�M�������>?{#V��YR-z�x*`x=��)���hE�9`MJ�Wq��)|������4�t�(u�¨��҇��ֆ4��I"��(v����qk)��Η+2¨���2b�[xU�5��E��PVCJS�SM�\��K/�D�M7^����Oq���r��W0��Yx$���*F�bQ�᥊.W	Ke�ට3D�Tj��H��	7C��x�\�������!���_g����C��bazy��:AYR��h0�ʕ8'H4�DQ�u]�9J�	>�1��N]��
����8k�N�.F�

tƎ�ߨ^p19���(2�EY�{.n9�zG���?�*��f�A�X��cJ�,��o&mh��(���A)�Ƴ���W��>��?��~�{���o{����k�L"���ջ}��/�Gx��j��� K����$R!�X�J�(����'Wo����ze�^���>�JFku��L�)�N/ў˹�[��O�¡2���RY}���S�� �@(���>�~�n�yƉX����/�2��ހJ��nǚ��*f�]/d̵��i�q���Le���9�n�\����9�Ԟ�Kb�2����Оj㽧*k���JMY8p%��ڏђq0b��M}<�uN${&Q��M&������Ћo:h�G��YN�i	JcL�K/��C��Դ6g�T�eP�O�Mq�%[yi�+��=��)�F��r�fڠ��0�w�:�$�<3��;��A�eYƎ�1,'�D*�
�%�Z��1Ɔͮdp��0^Ҟ�Щ�0�W.�t�\���<�]{=���M�yϭ\y�N���� � (TIX	c�^x��R���Rٱ.�E�Q��F;1��;pU��dCB&q����y�����xi��=NUW�M�3==E�S�TC�1�R�F����0x/H�Ba(��1߯��9����6�x��\�T�E���S����0ݙ�؊�(h�
������YN�e�����ۉ�F�JB�D� S��\�n{֡�"o4�c�������:����yy
���yO�$ԶBkE�
ʪ�[��K��;�3�<������?���/�������[�*�V��St-XE�-Irͣ�=ǯ��x�g�V,�n!!�����`���Q�|޼��\xAV�D���"����� �@*EU�$ZS��4ϑj3�+���ބ��[�L���#�S
��@�)��f�R���2=�(��B(�$̯D��	�b��
���p�X��Yt����ԎDk�fk��4II�$L8-�i��%	e]��X��u�bI��!A��h��LͰ*H:����t�-���gL,�t}��	N�Xƻ+Q�pFHF����z1� kVEV�	 ��& ��A�}�}����{OI!��V2�9l��$$ƀ�	�v�<�İoh�!�_f�f�z�"��L|��Xc�ڑf	����-&�Ͼ{�Q�m��{O��a�뚲.QJ�E��u�:%�F㖡Kw��
ɠ����C�u���4���^���\��7���7]ǎ۶B
v��|�R�w�#$�{�Pj�02�?�Tk��3�X�u�m�.-��h$��P-�_�#��8p� /�z��}��w�f��*��Y.�|%Y\���(l� �4'�	d��g�RE�_ �w��=�^N�f�pxz/�k`(��Qg�ʡr��/B��5`I��c\�1����Md��^PWu�J�y���	u��<:g�+GUY��h��A��F�^�`g��E�d��#]�9���Jp�5W�jgan��Bj�J%++�|��ľ�����g����`k��Al�'o(���O�� ��������h�3�:�l���*��MP $r�=�(&f��,�y�����.{�<Y�S��7q���
ӳS�����|�l���sB���K���lJ�hY���z����g��V�#�<��1Z潧(�X�N�D��ۘ��~1@��t�$�����KȽ��A���F� U�����P�]�.� �߁f�%�:AXR��	��#$��N�yۦP�9�T	.N�=z���5����cjG��	[?��Z`��j�^	%v���K~�-9Q L|��/���H�6B�tt��}Μ^�V�ǑU8_Ӝ�ش�	/��0���JZ�EQ��+�4ùzÇ0Җ|'��Fp�s.\�ZG�����h��k�$%MBBe+ʪ�9����}T��3�`�5�s�{o����+�����iTK`K�:T"PY���h��W�x�8�ס)榽��u@I�*��HR��/Ԇ��j�N4I[cV�������}�Y�|�):���̧رm+J(��ʆ�S��P� �{�	�#�sd��z
�gqfom��t�A>wކT7o���;v��AI,��j�yq�@1�PiN��h�T�
��T���$��8�pJX� Ȅ{��M.@���A�~��(u �:�����3S,n��+�ːL�PB�����?�c�����}��I��S�a[z��4�� ��w����p��,�[P$T�
2��8
-�F�z�m����dy�t��}+Y�n=I�\J��F��c\ͩ3'������wI��Կ �L��D��FY��Wg=*S�U���8���4
�}�~#An�b��	!�6��Ƙ���Di�W�,gz'��t�Sȴ��)�qXW� )����(*Lm¥#U�/~7)�^%[@'I@F�!oeH-�
Q�czv��\2u�l�\mY]Y�{E�r��D����z1�'����/NN������|A��#8. >t�>@H��u&ĭ��#N��3��x� �U(���q��1V��\�l�|��$Iʶ�䍌$���$͛�eY�i5p��\�ܐ�&�����t���?�2��`0��<��@�	�I�,8ڙ�Y�pXQQ�!+kC�z@֔�u�{�s� ��~#۶o&�R���CJpFs��~,0�A�/D�r3���q��@];���~��6\&��(��b0(x�}<�g�����q�@����yy�F֌p~��.� �h�b
�6�d'EC��*�
#I�m����\ c=����^�����@h�=��^���g��t{+[��?��P5�|�,mo��ڣ� �rڭ+++�C:�)���R�5B��$�*֖c��!ƌ�`��>܈D�9�<u]1�����v�$�MR�Ǣ�d�����_�E�,�G~�Ǹ�k�k�� o����$��5���/����g���s�,Z�t�L�%	)_���s~�x��v1j��6cl�У����(-������K�e�a���^�|���{��bj)y���<����$��u.&΂@�˸qb���c��P������l�q��	��V�V�~���A�=M�LQ�)(�J@��
���vq֒��0�� �_!��9O�]������mmfa�\����#E5�9y�4��4��j�4�ڤw���� ���ar�� ��� �����^sYJ���7(�bⰍ/:z���!IT����ӫ�:��7��Hc �M��y����`4B�GTF¥s����w*���(
�6�:��uMU�Ե!ț�3Ԧ֨�$ki�7�rd-ŏ���;o�3� i��T��2�V�T�a�g����9���$�$��<���w5��It�N3��Ⱦ�����=�$_�⟰tj
S�Ts�M���$�(j��1�
��u�F4����d�C�s��Ҿ���\���qdO�F*��*h%)?�~��ｘ�Ɋb�p��)^ڻ�g�y�Çr��2+�}��2�cؑ�W�>��J���)NX��f�f��V)�xz�.xK#�p޾�+��T��?\�S�x_��u�5�:-�l���k,I#���:����g���s�{��Ԗ�W�hF+�ұ����������ӝ9�I2�S�*TL'{x�,��ξ]I�o���*�S(�"L�d����]{-w�y;:�at	i�����Γh�)-�i����g�z�#��%�9Y��Q�q��sI�uK��s��a�����3������㻸����ǟam���`�$2#�sp�~��;>�ٛy���W/ �k,^�3('QR�����K��<���8m�ap������:�,���#��m���u����j���8�哰. <��?����<N���Y٣���f��N� ��i0
J�**QA
�`����#T����u�fnn�+���/>�e�f6�%����Te�*�����Ĵ�Փ�,FjX�5i�"������42_:ʠ[ck���f��������e�M[����(�:"z(I1P�V�4�����I!�25 h$�xX����X+�"P�<x��>��3�=�׿�M�����tz����`qv�M������mN��R����� 6�1�.r��Et`�V�*|�B?�X`mM�H(�_����o��$���Ҟu,\��������*SRK^��
������ۻ�cG��]��E����<m��;$2�GY�DA�4ӝ�1�uu^�r�M6g�����uao*�� ���j�n7�|���<Y;��+G�����꛸��{ؾc+õ�$���é�=~�s��g�?�nL�0�V�P��T�#-��6� u����F�5��};N���Bx�1�y�Ԃ��O�j�FƠ�EJ��ﻇn�o<BIdxy�pPH���>�1��-D�9��O>�t��H�%ʥg��^tJ)�sX`z!�X�T����Ϋ.�����뷀��Wl�ￓ����=��=��gB�������Z�A����ҡ`s�]�����
#���U! MS�n��fNRj.�|�#�ֆ������U�r�A��9��.��n���	2
&z��q, ,�v� �� s��ނpd���{{�,H"UJa����Kg�e�F>��T�NOs�7�;_��T�C�I�X̮{-�]��	�����_)E���!���q7C'g�����]E%���y��������J.�efz*�0�#�C��,�Ƞ��yJ3�PJ��Ff��%K���9/k��<K��G����<��n�~�I�}���}��j-�m�N�9M"20S;�$�P^�_]��
�fL�D�4}t����Js��l9϶W}�tB���{�э�zO�'��߸�>>���x�,�~����l��6�`����+�kCN�\���3�8v�#�����8r�}{_�����l���ꐧP��!a_��í�m~f���m+�2{!"�>��fj��Nո�Hr�)=����}{��or�w`�0�S���;���?���y�S̴�.%S����U4[�0u1�;:��늆F�b��R����A�SUH��˲`��-�x�d�$���DE�lK]Wh�9%�0���Dh�����/�L�3�4�TH���[��j4Bk�~"�(/ʂ�*�~ٕl޾)	���ٺs�-[�����K/�[�z�'}�c�ORV5��0=5����a�v��֊��w�)�_��P�`��"�'�m�F;���&��Up��Μ:�s!�Mx���̈́��H�(�6�o�� ���,O
 �) &����-	�y������*d&'.c��==z���� ��K�)
I���*7ob�7c��F�9��Źb�Q�wd
�d뺎H����$:�yG�7���W��rχo�[/���n��ۮe��[P�����h�~�@QV��Iu�18*D�@�~Ҟ7V����U�U� �΍�����z�%�x�yy�a<�3�v�fnf�LgTÊ3'������O!���ޖ�iB�x����M�Gn�pH�8
r$�YW���]�]�#��&�|B7#�!�S���G����q��1�����,�w����i�јIi̤,l���;�t�z�8x��GN�|j��/��#=΋�_����S��$��S��Ao@��f�#�w� ���.i�9ss�!&Z�7>$�:�������_����j��L�[�v��O��U�������I�z�G3i�JOeK�gB8K'8m#��8GC4�5ߤ��F�5� ��UP�{����y�]�|{�J��Ag�P��1S���@�h̥�=v=�,�+K4�NH>TQ8�%��T��5 2�Yk��m�I�9��x5;�ڎj*|���
�Looq���u�����>��ڀf֢Ә��lP+jS�Ή��W+2�ug��Te�P�$Q�V1��{?�~�Bx#Y�TU��C�(ˊ<k��m"[?v�J�@a	�ƁΑ P����s
����uƽ%�tq�
rB�_C���.祽/���+#3�C0���6[/�̞�^F����p�p����b�IO��g;�I{���8*��]�'���eއ�1F��V)���ۙj�$S�?H��eqa3������Ky��^˶�,lZD�d��8kѩF7b�P*I���.M͠�H��DI츗]���z����`�,�f#E��^�{��}�[<r��;�J�;d��Hf����[��*�W[Z��+���I�.F�$E+Ƌ�	
>�b�w B��PDDJ�<��
�-������ѡ�PX��͋������֛����0�׬���f���iu`L�5�%I�����̶W.��Z���px�NYcߋ���g9p�Y֠Ӟ#�
Fa8��q��*�y|4�9��m�7!�%���'���#��$�R�����T��3��x2b$j{�'0��{>�q��)5΀��f���~�s���s�M��iL
�F��.-Y� #�0���>�ָ���Q������맢_Wv{�f���a9$���b����;�w-��C���2#�Gp���.��s�E�f���ɣK���"�ހ��UY��f��w�)��X�QUU"� ns�R��f���4+U�
�\�M�k�fS:��}�4!�3�|�	|�f��ʧ�R��]�;A�٤,J�j�F>41��{g�vD ��"�
R���U+z�^8	PZR%Rf�f8�v��˝w��lc30�V��*��TC���*eY1�M�gX@���D�{;�W��O�F�9�H�$�lrDI}������F���C�~�	��#��4T�6�l���
�����\��#Mh̦\u�e���n�ea��T� �	���{F��Ĥ��>�E�qn=�:�ba,M��/�ر:FQ �
Jl	i�JRۚ�T(�!�TuEQ.c5NXv���k�����-����a&�}㱅EJA�L�$؀��'�G����$O4�W8��\�udIR�i���il��*�zn�����ٟ=���_�V	�� }ʦ�M�[-��5)㨛gnv�����"��Pg�����pXt�����i!X���c�p(��:���W�����X_�Ks�%S�� �=:M������������֬�V[[��y��G�v�6.ݱ������V�|2�ȌP�����.���>z#p���<��<��Ӽ�� ˧����
�T4�V�A6�'�Y���
��h�2\�2�wgpƑ�c,BH���4���E1(1���n`|�p��L>��-4[
���\�����闸����@@� ���W�����EKϲ�<d�9��)5�I
W�EŹY9Y����}�3d�mEK��q���(XPLL#�_���hynl�Ñ�Բ�t�?���ύ��=�У��,�� ��4�����k0��~���܋4��ת������p���
;k��f���A٣�nP�����|����o�6���[��2���mE�'�{� _��>r���v�H�zx���,+K!�pf�Ck6c��*����M�a΅"�9\�1�B	E�\b\���������D��)V:j^K�hp����3����
���2O?�t|�i��%
�3@E���6SF���)���U���6V��'��W� �����~�������@ӃG5XD4Z�lħbdO k��6^8:S�<��s����X�_��Ѽ�s�
����b�<�|�]t4�0����9�-��q��J'<�Q�#��3�"p��b�/A�Va��P�bt�s���j�L�4$�:V�N�/z$yH>۴����\�=����>x/�-Y@z���ģ�B�j�Ƌ�H4w�4:�bF��@��(���q֠E��`�aIK�c��>�+/f�ӻ������'��6��.��m;.aدYYY�\[��v)�����,��7TE��A�jG�hZ#t�b�#a7
��<[,6�<k�C�ʺ|�h�=a���cZ]�ǵac������m�g�ͣ�|����{���0�;t�Z|㾯�o=���q�e�q��Wљn�
T�:�����W-C�P�i;n�$����o����u�ݏ���g_���C�E�Lc�T�`'<��(�`���5���63��a0�d�S�6�a���BQ
��C� P	úF�[w\D{>��p�]���౗�ȇ?�W]���9Q�ǿ���O~��\}��,/w�i��U�JL���#�$��q'#�YT�dp�k����@n�+]�o�!Z����@74^;��>BkSΧ���2�}��k�)��>�y���i���!<�v��=�᏿���-�غ�\-H�,^f&�k�OLt�(�7.T�Z��w8i��	G����(����:���P�Y�w�'4�
�����
gN���+�E
M�ۧ*+��&I��2��S�.��f۶K����RP�Z��X�(��+��dDRc�(�x�\"P��w}���L���G�$)BX�z]�5\��b:�-h��@iQ*!8|�8O=��d�5��o�6x5��@�Ř�to�d�RHa�Y)����&�U5 �� �xH
��7�8��<�l�﹮
"�v�E��/���^��<V@`IR�֋���4��c
�
�Tu��������^�?��0o�#�1b$�2��B��
�$�jSX�<!)���K=��TvHg��
7_�M���-w������ڨDP%$�@PL�����<lA�Pc���1&�f:Q$���{���,�.4�X�8ul���>����� ǎ��Ӝ��n!Ms��>/�ۏV	۶]x�=�֚Ç�j����g�����F�A�����F}gJ<B�)�.&4
"R.�8��l�|1_�ϗ��%���
�ݸ��,i��я~�]�>ϳ/��o��?���|#W\~9���v��!M��I[���xK�R�
�Jn��zn��F�>8d�S/���O�{׋9p��ӧF�J[L�g�[Mz�>���k��!5��MmJ���4M�����Y^^�;Rpfe	#+�
�u�P��������?�
W\~9��Ǩ
�i{�8Ŀ��_dsg���y֖�(����ږ�/��o���#B�II��d���(�
t"YY;C�����O�y�&L�
�:z��9
[S*��DK\�	����?$[7o�G�R��Ԯ������]��h]W8a���6\�(�|����_����.�Z�$
��� EWN�ԣ��fq�6�^�s�V�EY�y�yn��Z��=�y����op��Af��$�M��P�y����x9J(��|,����vO�������B�)�X�����+It#�~����H���v�6Ԃ�*>

��H%cAv�y�f qZhe���G���~�����3�5�q40�������'P�q�95��p)�[mԲb��=9t���{U���Aꜝ��`��mtO
c-N��;��bi�o#�+^�	��"��2���i�Ta��(-֖h�i$9y�b\M�K<����ˠ���E��.��6n��f��ј͂0��a3�ѥ��C���P�bw1
	�"8o����D��"O,��8�$�I����>G��������彯��B���if
���N�ƚ`}y��-|�bfv����~v=�<�B�h5�J� �Q�ST/M&����*Z��G�&I.�t:<������O]����
�w�u'W^s
{v���_�*ߺ��y�]|�{>���-�\�34x	R�4A���ꀔYOUY��|��n���ȋO��M���8F�\%�I��w}4�d
�geuHQU��L�iOQ�=�r����diN��dPpx��no�+L͵h�r���&�vj�{���������o��49/?u�_�7�e��i-��Q���!�D��{w�ł�S�GgO.ʺ$�S*3����\~�>��27�����X�X����;Ȳ���?��{�M��Pe�
A��ͦiv7�f�mu+dF���������
��(F1#iG-��oz� A��E �P������5�����2�P 
�-���Ȩ*0����{��������|�
Ͻ+�6�p�H2yf�{�vE�Y>���\����$����7��J!)��Y�Ӂ�3yq)��X�r�!�˕�BV�G��ġ��<L�i�*�
��<���-o���|�|��n���{��?�K^~~/�H��&ZT�b�����q�7�f�D���AP��o���!#�<�D�o��Z�
%��Gj�x�"�?�<Z*�*�2NO�p��)�����c��߅�s�����]�y���+^j���j�6zS=躵0A�e"��*�N��v����(�n+-����A��v�_=A7mS����K1��A�	������&�u���$t�6��/�HI��
Zi�n�AhA�=�|{��KG��>��>�n�ݶ�Z#A$Q��!4GTE�+W:����=�K
p�
��
id�"˾H[��xڭ�zSC!�SAT���yj�+<������k�?{l�;��:i��g�033���n�y'7�|#�ܼ�kv,E�%�{O=��f3��"|���Ţ�x�����.��/�E�p�=y��z�Zvx��|�����������:�d.'������+سg/_������㳟�w�}'�z�HE�i�/��<��`��Q�G

��ö[���m+��'�ϓ������e�;GU1Z17?C�k������E����z�����adx8�D�c�1�����O`%$M�(�:mD vy�������dt9��oC�@8=t�?�ÿ�f��k���L���(L�Ri�E�����ň݂�����p�J��� ����ׯ	 �	1܅uhi �R�o�,��Y�7�}oGOc��Z������$�M�%2� CA �v:mҴ����s���QUA��`;lsl��dP�3v?���mID�l.C�(��Ħ�Z����lg��A�9�]�ng�-�x��c<���<����MvQ����[���_�/2�B�Ϙ���Y���9����zS����]Ɨ��e�&*U�"���8=��W�`tD%�B�t�T�5�{i�+$.;K�����]���7m � �>����UB��GN|��O
簙�^m06<Ξ��p��)�]�*�L����ƍװ+����� d�o�t�R`��"�nUG�Ų/zd��+����Y�Y/�z�J��u)33�L���[t�FP�rí������V�d�(��Q���\T��ݮ��㕪�h��8Yb-�E�%=�uy

���nءk�0
�܌���9^z�������/P5UM��i6��
�<�ՙ��vX�f)���u�;ظs9�K�$,߬`�ͬ߼���u�
�o�S�5�����R�Q� ��壗h)KǺ�V�j#K�,e��}|�����;�gLdp�'��y�ֆ�˗�|�2֭[˽_��?��?�G��� ;�����&�Z��k=�$FiI�Y�Y�J!�	���J=a��r�u�m^�sϼ�c�<ŹS���thTi�Z�--H�HӜ(�4�陛��tƑ�-��+|�
-�:��ax��3s<��c��v#�\#��Hg���m>�7_`��
�p6��4���!`���X��O#
Pr�
�����R�h�st�9��N>�s�%��2��eP���S�/et��Z�z���I���J/�&i;C���US�Eӿ��֋�
�`�h0���)�F����;Y�(�F��$�l�б�w=�^<�ӏ?��
��aD���utb�����wx�����!��k��K�G��;7󑏽����<��'piA-N�y8{!�T��r}��U~oy��h�5�6G)I����ڍ�_1�LJ�WƤ;8q�,�N�e���4��w��[ �b���m�\1���+���� �x �@</��!
����{	�.�$�X,���D1�W��ؑ�:|�u׭
�oc��lظ�����i�F!����/���'��6Z�(��@)�l��X��c��
�L�03�|{�'nj֮����wp��
�y��.+m�Q�v-�{L#B�@�)��n��Y�6�$�R��>�j�Q��ߜR�{#�
�CPFa�О��{���O�yN�<���Ej�,���y��9N�>��M�ٹi'7�gǍ[�v�J��Zсn;��<�)�^7ʯ��/�o���gb�"�C˙��[�|^�ן��U�]���R�rA� .��#���Yj�CC<��Ӽ��nnx�6�w�Y���4�p��Z����u|�W>�Ν�y������'��f��K����[���N��Z�Q��iF��!���W4�u�N�ݺ��vl��w��̫`qŐ�RZ3�T�:��Af��I��(Ҝ8u�<˸���P&���>����Y��s�����h$$I���9�.\�oͱt�;�~�?����ek�e����(�)�,4���E���z�J��u'��R�U8z� �M>�>ŲUÁ_)�͐�� �����k		Jyd$��'�x�g�~�u�6@�h�tIL�(��Q�j�K�ͅW+pޑ�)�͈�"�i�e�m�}�;�"�+A���|
ҙ�W����Cǩ�Q�nj�qȡ����:\�w���ʰ���+�t�uSe�*V�:P�;Y��e�Y�=��ͺ�Hbi:\�ʿ��}��R�nk�JM�}�f��8 ���
��!��9r�8��Ħ�Q�(OP��\������= �큹e˦��K
�޴�A��GP�7^����9�6,��<GIhq��A�<��30q�O�{V�Y�5�ױ��CX��q��\-�"r��!"6��
p��'�� �t�|F'k355���q-�n䮻�b���Y}�
��J��5��2U�H�2J!�"�u��Y��=�%T<���T�Ԯ�q6hx#)�>4�3�{�g�z�G�r`�1f�fh�f�5��c����d��\���+�p��M�x�u�ٲ��h _u[�PheБF��lD�[޶���V��S�0��9��fo}�[���
̀�����6�7x�C��O�z�Q>+����eL�]����,[���k����K��,�N��3::�;��N�n���=Σ�~����=n��F��g�+׬ O�g�iU��1>M�
��A6����:Ou$���؊A��<��Ӝ8p��j26��	��3D�f�;G�S07?��P���~CC#���
S��QF�g��v��b���E9d�6;w\���2 v?{����ϑ�-떯�;ץ��׃�|�-�4H��A��ĥh�O]�|ɉ�Y�����sXrn��Fn�{yn��D��(%PBӳ�v�R�%M0��Rɑgx����v2�A�s)E�AhWz�xw�]�h��C�vq�@:�|w�8��y�6�ݲ����Vd�EX��p����>�!�Y�(�ZH:�ҳu�f��X����i�+R�B`�*E�q��ϼ�'γz�Z\^�]���E+��%_\腗%@,ʽ�-�*'��Y:���m��h|��J�KRʹ8z�8�a"SA)C�e��V!��e�]�v�pJ(Y��ص���{�F���j zPA!ҧ��3R���XL�{��G
�V��`-���I
�'O�a�|J}y&��ᕠ>�|���p>'�j&.�Ѩ5�&��iq�_��z)�*cY{-��s
J��=s�I��8LnSV�[�w��o��شa#�%AR��iےT
�������/�-^H���Z`{9*;�(�O��N��R(/|��4�%����/�٧���+�rh�~N�<��
$	�l`pp����s��JIl�ؼe���庛ד4
ա �e��B�Y�9҇�'��|N�T�ү}�={���K�pˎۙ�΅(aE���ZmkR��c��8��Mf|/��C��!#E���#�!�}�{�Y>���P���c��R�ڷ(
:�6cK���/��6n�K_�
�>��}{������[Ѡ3�1?�&�:����u]����TL��p�-�\��իX�d)_�����kG�BѬ�TXS	��n�%=�sӼ�}w�O|������k���S���I ú_diƝo���e+�:��� �N�g�5[H[9դAֲ�Zm� KWE�Ȟ'��ߘ��6;�����SK&wGQ&)Z�z̞�/�t�>��
(Z�]*�!
���ti@U�:��I��%{w���Y:���\�+�4x�ZS�-�TeJs��Z�C��i�2��i�t��nXC�Tt�
t"��l���$�z�����_|�j� �ZҢ�1Q�M����!�߰��h#���C	��4��E�U5|������χ{���
9��_�UpiR�|�×��`ZfI��wI�6�+V.AD�v2LS���.�������jM�u��⽠�,&�!wአ��x�tA�����߰�� ����On�o�S"y��\��W
��H�Th��m���yl�9{�<�N_��teА���1��fccC��6�K�f1�/�:^��C8\恾�T�҆Vzr��Rx���9+%�n��\�t:�X}�*6o]��w��]o;˯6�tZiQU�-\�䩰�=9^����/\N���c�
R*��l��\E�$J)�R",��Y��|�g�����~�����v3�:��WbD��l�Mݹn0Y�"+����$,Y2���8d�G�	�mԄ�v�6G�`����9��r�G��S/|���>'Ϝ`|p	�m���F��ۥ�9�6�H��濆�������0�gy�q!D�;M��t[<��������t���ı!����[�ְ���m�m�6���Σ������/����?��彼�����o�ڨR�E��z�
(NX�X�Ӛ�"������_��%��|�Ͽ��<�m��r��M]a����m,_5F)K$o{ߍ<��k��'�Ϟ}�xt�����"g`�I��t�2$����a���n�Chtӭ�6�� Y7��u����"�WI�Ao�S�O�5/��#�wtӔ86mȊ:�L�L�����p���q�
�bE�%/��@��Z��"sD�f��S<��G�;���q���������ܥ^���Ѓ��`}J�^E�I�/_�����$Ҩ�(�-���>�C>���<�� y�S� ���3����av�rQ5�mS����"��g�8}�_��יoϱm�v�vN�5O�R�44��
"�:��])�\�<��XX�eX�Ǌ���.����[�nA�Dؖc���\<?A-@yC�-��u��[��r S2���K�da��"�������� ^<&�|��x��Ţ�^�,"�B�Rcj�RhΜ<�у��v���|;v^ǖmx|�S4�&�z�y�/aOi@Z�1�ϕ�ϥ��v�Q� $̷f��j�r�0�b��u�p�N�~�;�z�ztM���kC�$*VxQ�[WZ�3���,��[��I`�jiF��[�o���,L�.g{"�̉IΜ���G��ޯ~�cG�3>������ZiP��p�NA���;�1J�D^<��\�ak��<�.�����e�u�$��h�,X��4.�����_�yN;ý_��C�8��tH)�Z�ɺx��F3�n)�XP�3��=н���X�� �,'C�B�¦��{�o�ݣ��Oa$^z*�!�l�O�v����z#h�s�󞻹�����~�?��?���~�7y����p}��!��IM�%����>#��Db3�H<�|h�#�A����cOr�|Nm`��K�禘���S���Kk�`he�_������J�;1/��'v�	�@���,�C��Q�����Gx���E���<�A\��e�o��'�/;w~����l
[�26M;H
�z���((8s�$�z����g>A\�X��w����{K�r��(c����M(f=�(P��w�胏�f�5�ԣ��N��/�@�R�}��,�lI�_'�`>�H�axt�[n���[�c��,�S�$"X]?���|�ޯ���HT����I3��3�����7���kЉ��vQ�˘N���|���8q���!��n'izoj��M57��LeR��+W�.R)Z�R�bll�
[�R���JL�;��T8wj�_�M�]0Ԩ�5�N� &q�S�"��{�.�,����M�a.���_���\I���>���:oyS?��A-W�M�!���,/�iN7�������s�����A���'o匯bd�` j�t�hQY@R�r�ݢ���' �(V��r����=Zq�II-&/R�����cC�~7�v7�~#+�]J\�8eɻ!"W�ѡ��T8���b���>�PA/�E�:R$*0���Ԭ\�D� r�>��������n^}iO=�}&&���5�۴���1�4��;���+H��
�xgɼ���K�裏������c��`W\�.�
��:���Rā�)Ah�� $uû���;¾W��~�&"'O�`t0�
Z�#�#XLI�� �+�ԕ����!j�
�� �N�_����m����I�J\�QRК
�z�N�ݡ�cy'��Nn��+�|��<��#���?�8��̯�i���m�῜�Q����SK*EJ��D�X�n�
>��'�3<��*A�1�Lk����w���p3����|���Y��e+�����V�2?=Oc�����̞i����c��&�j��/��RC��,�oNI�B��N�'N�`y)�uf[3��{.\<�����������FA8����f��"i�N CZg�C2�/>���x��� Ҫ���׮�{�~�A�M"D�@����e��ĉd||���_��{n�}����]Q�3!CbgR��{����6&� QE�.r�^8�����T�*����2h�d9��xi����hj��8�SO|�4�(.I��WoK����ֵ��WBX�W���ze�4��S,]��M[���n����Nr��y&'fP|A0���-�!f1{. 2�#�^\��������n����� � ��F���V��z���
Gk�Ǖp����KJz�"�W��#u"m8z4�T�L�1�;�ޞ�
k6,g`��|{AX���w�O�Y޺�(	^V����3{n��6o���x7�z=k7,�6Z7:A���E��ZG��W'J�{�L"����U� 	ei�-
��hm����E!P��+Kw�`�s�y�Gx���9w�\p���$Q��TH;i�E��(iб"R�<(}�"�tV,�у8p�����޾���$��K��
�� �4;�q�"����TU�߹�#��d�k���y��k̶f�TLRI����Qo��Y�<�����,�,M�T)E�(F�Ǚ�ms��I��O���%l�y-�\NRmV�2�J�J�g6'���#��X����f��k��������_y�{��;���l[O��ɭ�;MU+����̷ZTu���8#�|�f~��[x����1��Ѭa}���,���(X�z����M�n�9I��g�4�{��C<��	��9K��(�I�9R����n��+������?�<B
�,E'��@����f�H�������u�.�\+�GļH�%����e]�b���}O�ڞ\�~;��L�B%���W�F�P���aL�L215��mXv��|�J�Ԓ�V�$�U�~�Y�X���a���H�>L3����8�oYÖV�#O��
x��*�+��>�KϽJ�:�pu���0�����m����[� ����������]AR	FocK�ټ}�Z��6������Z�:����1��
��R�L�<��Z	�p?���i]a���l���
 �?ŧ�����On���WR�z{E�;l��a7犐��1F��diN��"�d��4ǎ�bt� ^{�s�J����yx�.�~�eV.]����B.�cz2��U�0E~!TBT�n8��^��
qCr��w����v�Mlܺ��Α��B^�jDT��>�y	�nR��(*sJ��{$�46��EI�Rq���_�C��@5'^��C��./<�gN�cvv�"�(g�M���R$��|�"
ɀI\�ViPd9i���X�r��3�%^(@��'I^ye7O=�,���]�ԢM�����EHr��W`�G�I���������<���c+���`��<�� k[��W���$�}��ZS�TP���v�r*�kW�cb&a�C�e�5�����I%�3[5"��L���>P'��8W��Q�"�(
��Y���b������~���}?��η���?ŧ~������Td�[bi0qZӚ���Q�[�����g��Jy��$Nrn��N�b��l�#Cg�K�AC�b��$��l�k��3|��_�̩s�^�##:�.E��8���v��邪��+��~�$E��#���1��+�霟crn�;w��]-	���{rg�Z����H���x@
�+0(���gٻ{?#�(!��B$��l2�@��s]/�T99�6!�c��}l޼��o�)4�Z�EPqD:�V�����6�d��+�p`�~��4�L5�>8��#Gi����G�GR	�� +�H��*J%������~&�ϰr�Z�!���������B����G��{F{I����^�<�ꈣ9Pc��kh,�cmAd4��i��r��IΟ�`�2�"$�Jderb��͕���
����'�z�7���L�7���S�ر]n��˵4�w.��`�b�eA �E�BH�
F�$/)y��鴩�j�Y��P���]�P�n�MT��ãC�s�����q 
lVt��E/i˂���_��D�`�!����t�6w�s��O~��~�����Y�q�PX���^	���X uR28g���A������ �;�L�hR(�E;�t�P�Bt%EKp��y���?ǽ_x�g�x�����b]�b*T�&I\e~j���aT�Jh�TjF)�\��%��\`�涠�l0=;���[7me`��0a)|�
%b���B��F*��w2D�/`�9��?��������R
d�r���Q�5�aR~��-�@I��b�VEN��/hTj�ID7k19u���%\�qB{�EKї��I��R��\�J���p�v�Y����i|��<��g�D֭Y��E7G)�zq�����-gْu=r�Sg���Z�X��
�^CT5�	�^%��䅧_��p����w�@�|������k�_K�ft��;�$i�b���EG����+��~�� -%s�T�r�2ۚ�9Ti����7���M8��E�n:�>���ٱ�^���r������9Ǐ�b��jl

^!��o��J�x��Œ�0�(�
&18Qp��	~��~�~��£��a�!�`zv!$Idaǎ�l޴�f����	�\8C����#�i���?K\�h*�������ڊ������� ���GCĪJ���B�ȥ�?=bQ:�bC8q� �Ҍ͹ 7�2�-��BY.L�fɲ!~�b��5��#�0�ji8u����G��bx`%#|!P"ð���(�+J��A�	�_���|{����IO���^�����R{���5 ǎ��[��6
���@_�qz���h��u�t��f9Ic��z������]�����ԃ�D�8Ъ����<��KW5�0!RU�'�d+�C�ڕ�"oN��xS�,c�=�����?�A�660�,a�`�kچ�EzҼC�v)lV����-e8�}O�.ziF��CXD���nTP<t�̡	��ȋ|�kp�W�ͮ����#gpT��W�B�ur�h��y��L���v�Ck�M�f!5,
��d�.p[˝ �Z�b����c�q��DW$E���P�n�e5�<�͎�}٢Ђ��1�I���z���Y���s��R���!���b��X�SY��M#� ˲�Q�di��]2��3�S�9u�KW�j�R��
j�5��N�E�m�T��9y�\�%�T�n\�-�ތ����x�G~��gγ|x)�#c�����{��1I��%�E�(�F�G��?���'a"��m�Y�~%E���
�J��+8}�w��f�ܸ���/�'��/8w����T�<�0�+�H�.Y�'q)���[�-����: `mN�� $8Qpn��t����w��Nt�l�D�0�u�/����PH����!��|��������1��Iޱh�!���N�X����X���_��8
�_<˲����o�+��c���r>GG����H���sK���z�
n��F��q'w��y���,��*�лy���^(i��Z��"]c�T�{�� /<�
U�$��3h���HS���=YMʥ<Z\%���L)
)}R(�.��7c�W������o�"�j��."6� $�x�p�`}�4-
~Jh\Q�hȂ��w�|?➾��J
 �{������^����!��j z��%+g�o|ZI=�{z��(Iz��
���,/'�6�J�±��9n��F��G'�M�di|!8~�4�N�'1u1vb"ti!��(C�~p�#:��2`^�E���e��V�Z
�
�޺ELP��� ��������I�.�(�Bfw�Yv�E�
z�j��I['����_��{�qO|�I�>���� ZDh�E 
J����$����ڐ��$2FV��om� )J���L _!0Q���S��l߹�f���2Ȓ� �����߁��	T,Y�v%�^9��}�V�8+�2G�� �f�D(F� /!�]��K�f��c�nu�C�������Q�cO�9��9{�ɉi�n��ȪA�V��(0ƅ�BV�.d��(�hA��6��ڭy��z�Mlڰ��'���Sϰo�^D.X�b
Qݔ�p.����p��C�	����.gjb���~��^bx�ɖ���56x��~�����.��/��o?��߼���0�W���c�5Zi��dy�a�HـUV����h/.�Lj�=)<Q��%�r��sl޼��/~�ڨ!K&V�8_�,ι>����DQ���{ɫ/��&��Шb��
���׋~3�8p��o.���&Rt�6g.���{�|�۩
�H-(��-Zk
W��(��,͂������g˦-�I�o�����^X���]z�{�PU�>�7�� ��j�љ�P(b� �D�����N��M���$e���DJ����d/�m��������ކm�xW c��5SSs|�s_����f���DU(
P�`S������$����mB�	��b��8�B�{/>9�������]}߳��o�m��ѝ���k�E�=���n���$E� W����n��Ԓ(1e�8��2���M��@a���r/CCC�;1��=M�6�x
!,�Y���O�?���/��k�C�r��AV]��[n����p�.��a�
~�L��&�|����@+�,�~o=>}�2YU�Hr��y�x�G��_��7�η�=�贺4F\�(4���$җ
����p(zG��x�1�P�VI�`%l��9���R%����q�!%I5ajf�ɩn��F�#y'�[{'���UrJY�$T�����,]΁׎pqb�z�I�:
Q�xO�;!�Q�A[����i (�̃�O��"�*k�*xO��D� �V{�8V�O��n�a��Wam��8��T�i���:�,�;�i��%��.�!a����~�m����+{����s��*ì\�S
(^7sd��D^a�'���9x� {����$�f��7�$Xv{�V<���h�w�ȇ>��_����y�5j�&�����
���8&�"Ҽ�u%�q�����3���������y/�S��\�8��u����?g�D�B!tp�Ε!�\g�d�u�#�FL�m��׼���D�F=@� ����G�/�j���m]X_z<ݼKs�����/��5ج�����`M��W�Z%&+2�<#2q�z�=�K�X�n
7�gl�0�z�.�L�Ǔ����y��W�����M�� E
�)�1��ْ�_�Ԗr����_��� h.��a���ePz:�<�slڼ�O��GY�v�l��Q�M+8v�/}����5K��f�e��鴺H)�#j�L���{
��uy��ji�u��_�7��{�.v���6 �{�㷎���_�X.w���K��=�B�_�-�`R� ���j�(-i��1>6Jjۤ����~;ZH�:X]q#av�ÓO=�p�"�P�@�Ģ���[�ÄB\���;�C�PmT���[��T�n��t�6R{,Yѳn,���@�KT�F�3A�Bǫ��/O�
Ξ;�K���_��/��o>��>����Ɔ�26�#|�NP��#Ͳ`c�D���PR��(h��t:��![[�����Zg)
KQ�dE�ő)����<���lݺ��[VS���&\omD�����9�Bkp!�l��q�� {v�e��!�$�;m�*>w$Z��u��JbLPZE��da���U��?�
��B�L�|�
5�)�$Y���i�wwDI��J�Fn=�����L���34>~��>_x�(FK���N���R�VQ��T�uLdH�]���h�k�Y��m;�09��|�s:r�N;ght��с2�HkE��	�u=���h6����e��CLOϱm������"�%�}������Μ8���x����U�b�h�y(E�eCR�h|��[q	y�n ��_��s}2b/�%�0dY����9�̈�S�bj�_����߄����O$lnE��Ȑ�~և�=�\���������El*02!1Ub�uS��}މ�/��LiM����Ǘ$:J�ZO�r���ع���.��T�] Upb���"*I���<Q�1Fa�&�Ddy���*����%:1�C$O�*�ԁ�|�/��+/�F��D�(N��e�5�۾6��"p]d��y�N�0�	Q��!��cmJ�Z�u&y���>�>�t�6�R�\ ����_��Ƿ%c�q���l�ц4��F�u��@H��:I\0f���"�4�Zx�sş�6���{�����=�`���S.տ&�j���T,�3����`_vfR�,;r���9Z)�ќ:s���i�o����+� i4&6+�����<��@�J�`�\��Fx�
pv�%���G~�k�ӱ/�SK��199I%����-��_����	K���DT&R��)
1����R�t

��_��gL�=���������p�����TG���wyǆ�A�2�"�Zk��wwx�m�p,f�
!JXU�j� K��&���*讥��(�!�$br�"����m;X�~$hY�,��RQ!{MGN��Ὁb�l>Gx��
��t�g����I�/[B��P��J�l�"� ��P��x,ݴ�� ��k	��R��H�B��Opq����9x�R�
��� ��a��� ���fn��+��ff��ڕ�!�Ǧ�"��
J8����e�0*[��A쯍bd���u7�r3Ͼ�<��Ρ�GY�v=˗����܇k!����W�fz:e�+�9v�3�s��mwP�U@
��^�-��w�ɓ�?˷�� J�hVFpi�G��p��=���(��"�%����_�W��4^���O��[��:ۇ�I��K��L�4$���O�_|р��i,"�E�'Dd�ȳ,�T���DU5�8ƿ����ԅYF��2d�x��d?/B������9�K��|�����x�Q��֨SXI3�ڈ��!:�6�����0�D+�+�8��$S�����h�K��-y	
�+<��c|��$�+���b]Aŀ wY�D+���8�s��(<��W	
X����bjH�p�EO�;��yt�񞏽�߶K��)B9����|�8׬\O���p��
���*Y^�:q)�!|���ש���㾉�O����  |�S_P_|��l�u�Q�Nw�5���3��|�K�S�`���w�6�MY�n%�o܌/�*V���9s�<O?�������9��h�qy�.�Ͼ���k�����Ρ�f��m���ڑf��hқ�z�	l�q��e6hF�F���ݙ������������y�1�&��+CT�IԠ5�M�4�J�Z�^�hYl�"Bț0_{���$Y�j%��B�\�䍡�i�)C
�gg��8Ö��i����j���γ��l�%56���W#�	���a��=z���	�G���,�^F���v����,HA��(V�6�"\6U��F��M���b�<K�E��дAR�����9���;8z�8&h�2��D���e��B*�m,9�����E���r%�/��jĺ
kٲe+�\��}����o�G{>e��k�VȻ��4:t���fX��.����s/�g�:�ۀ����팏.g�7w��cϒDCHC�PR���[rf����~``/n*�"ñ�%��2Hk� ��p@�զp�z�N��p��	r��=|���0�v�;��uY(�ޒeR�`���ru�9t"�=���0�|�9"�PK���g�a�ڿ�\ߺvqb�Xl�.���#����CG�w�^�?��Iے��S�d����(��Ҝ�i�<'I�r��8i�EQ����k-�uh��Y��h��]Z�6�v�4O�JP���`�5��5�j��V;�<#ϲ�8L��*��K�0�" 1JH|���GŞV>��5#��#�b���}�^52�"�}�afϷ�[��5����g��k�������:�?���ǽ��Gj �ƶ��Z���B���u���^;̥s�Hr���R�&�ƈ$ya�$���.O?�<X0Bәk�p�YV��H��o�����8���V�Ū5K�x�:�s���KFr�x��H�1��ڗP�2
;_pl�)�)��W_�_�;^zns�m�J%i����TɄ~�O��ӛ҃y��*�H�-S7 �I�=j��&�Yp��^z��˯�����$2
�w�������2
y`K�E��4�*�Z���G���s�����y���@��$3/
���~ܗ�e��D.��*�������MT+B�e9R�j�eh��#��sg9|�0�sm�-[F�^'�2�AJM�	A�(�6�@UR�����	�-r�s,_���[���ڵ;q�/~�8x��+W322��D@���^�09�8p� i�enf�-��3�t����Y�j5��.�?�/<����%���|���{"�s)D�X��,>�E�9�o�f��Tk����G�z�V:ǡ������G��7X�qy�=�@���B`tL�w��G�r?��d7����������8kI���1:
�"�E1y�/�����S��'撯)�+Q�J%�՚���C<t�cǎs��)�.�SQu�jx�EJ�̒$�`L��:���G�`��T�&8�(��z�@!�btl��[6�a�fV�Z�6���	.\<K��
�I�)�$OnSf榩T*���{I��%�
���A�d�EIP9
�"�iOq˝7���C�Y!+r�82ش�޿y��|�Ƙ(s�>��jI��{��ڟ~�S���ڳ���4 ǎ�� �Go?���B�
���?��y��D���s3\�c��-)�pȋ"L4Z���C?z�H��HAHb�/����[j ���l�S��S�E���;��@�2�[�>,)�"oA�u�U�������W��/��7�z?�?�2{�`rr)5�� �J�JRE��m���a�jW:��>�z�ε)M��X�˦#�r����	�F+����t2֯�ȒuC�B��g�`�(����G���"��R���P��n��@���C�h)I�k�� �R���B�jw��S��8�\��J�����#6�����z���aff������$�I0��������N���m�MM�
~&2H�b�/�~
�ّA�!��o�+PZE��%#�~;�f��}���}?�C
�_=�n���a�`c������v{�-[vn�1<��!�8^|z7/�����%$Q
�S��a��L�ʅX��	_
����sc˂�T"�j���GObź���?�un�g+�V��\J�P�Z��@�"��Pʠu^����H4��=�_���ym�^�.[Q:Ʌ���rA/~�hk1�4<3\���'��D�[*��� �1a��-.��=�ٳ�5N?���y�Fh6����2 ��ǥRjtTA�(x�.x: ZE�1�ᵘX3���5V�u�z6o�ʒ�K�m���_�����:!�s�z��u�v���b��W��H��ʀԞn1��J>������ˠ&)$�R�����|��O3�	���@�(�D������S�ۃ�A���  �.�+���5�e䶻��6���W����$^z�fgb����*A>�dȒo�+�Lwyl��DRӬ7��#cL���`�����Vk�j��������p�-�1�tm4E�T�$y'��q]b*��)�������5�<��W^����I;�8�ѨR�4�"��<�^K�CZ�V.n��U��{1��R�H���	A^�ìQo ����I�044��C�k�ٸq#�#���y��EA���yy(�r=P��ӄ�A���c�G8~�83���'1RAa]p\�:�,��<���X���W����4 e�mL�����A
I�^�V��I��251���9�� U�d��嘦�u����z\�"EX/8���4p�6���$�(rڝZK�Ǘp�M�ٲe3�/������x���ٲy+�\{
E.H����bU��'����9N�9��7�Ċ%�q]�s�W����/�J%n�U���m���/ѸpC���Rz�'�V�x��6&R�C�;���Ej͘�����{>|g`�{�6�D
�J�0�!���$,� :xo�>x���>yp�����R�,>"���a��u��M[�(oߣ8�ҕ� w;���EQP�Ti6�QL��LOMq��	^~�5^|�%N�@L�сad3?���H� @�(�6ʔD�T�t�e����P���rݎ-�]���+Ɖ�����y���,J)� ˊ��W��������]����31{�M���s�� CK�Y�48�њ�.��y�1��(�O"�����w���w�&����{W��1
���e>f�����6���Ɋ��n�����t�����Fjy�Q����A��`'����M��~��I
��� �9?y���an�i;ġ!�R"�� ):�����ȷ��w�ݗ��_��I|.��B�0hX�����-D%L${�v�2�%9/i�
�[0���Áaߪu0cq>�#�,��hҚos��A�jµ�!�Ę(�)��#�� |x*��-<�H��]��)֭_E�4y��=t��r�!P&�dͷ;�� ւ�,:�1F����dԟ�������YNkn�Z5�#y���A*��fdx������	��;������zp$w%�BN}�B����]?-.�R|i,�\��1�֮��obzf�Gw}����^o�b�:"ip6gti%4���m&.^`�6��
�i,kО����{x����*���ڟ23(��|��0��<N��$�$D:&�t�gϝd|����_���TE�m[j�)�[�D�&�*>D<G*F�*�"�(��Fr��_�ҽ<p�#ضdhp�n7#�
�AҴ K3�� ��_Y�J\�wq9�R�M�븂��~���4�4�0JӞ�g�+���K�y�}|��LA=��hT�U����l�(�TT*�X���v�%��D�d�E(�iV�[�-w��M�����K�Rp��&���@�T��H��a�[��!Ea���#+:$C'����򾏼�;�}km�A�+�-�c<Ó�}�X&$�B�W���{kT$�+���}��J��]���X�䮳����X��3��z����7me�eȨ�b8�Ԓ8�>p�cG��+KG���/\WeO^z�G�an~������o�6�?�gR�;�C��>������+���>��Y�|
�k��E�
�$]A8E����d��S��(�J��%������������M�'��ҜF���`�;8J��![���	.N�gl�(CÃ��	ޅW�
�|X#�`���-J#�9tfs�!Ū�+�frf���8q�4K�ךD:&��!aQG�쨜ZV��˞��� ��A-)rKd"��&Y�159�s>� B2;7��� kV���3|�'9~�J�h֚��I�q/I�x6�XT�������(��T�di�4+LL��R�����o���}�^y�	*�֮[���fĪUKx�ɗ�����W_d��l�y�T��W��A�&Zi����~��"�W���R��9yPZ�PaA:��ER5|�C��W��'�G�V�)=��8�����BE	Z�~�7�p:���w�ዟ�2g�]d��Z�S�??�1��Am���q%C�8o�,*���3}~���c$���8��4��
y��R����!V��=�S�{��_�ùStfr���QBG�-���wޖD�H�NS��%�&��"#W��$�§-d�M�X���k��q�&��133�w%�B]����I�
	�҂,h�������s�ٲ���(%ёD:ɑ�g��W�ͩ�g��:��ͳ��wg��G��4�\�х��Op
���x����axd�M�7R�<�A%�cbmx�;139���R��!��7����Wq�5��:�6�V�⚕k�pj���z��>�4_�ҷ�ڗ���GN�n�6^��{�/�P�6G�1�Y�Rd.XJ*�B�g��U����DKË�t�j��\:)_��)*��,h���"/�tL�Z�̅Ӝ�8Ú�+Y�bB�Lv%J[ѐ� e��Z�(M8y$kՆa��U���G2;?CW�TkHi(�APB��=e�p����9W?{
@�(,JH�(�;G����P��.Zi�(!���F�3^|�%����y�*j���HMT׈X M(��h_�wh����p��hu�H��,_���o��$Jx�����Iٴi3F*��X�|
G���W^`��
��6j�*�Mr���u�B�ȟ�@�' ��_��q���bEݼ(�"cjn��`��|��c`iB�A�h��Y��2T��v�t�����_�`�������΁���:���	�Z��Z�8�BS��y��
�.i����%p?68�Ey����x�(��,��Ҕ<�H�h�|�J���k���=|���ph�Q�&ېi�5$:AUB���#�l�,)��$���E��f r�,p>#K;i�҆��cl�i7ݺ���m^zy7�s�����ޚ�1�$	ݬK�w�7:�<ӭ	n�e'��{��%}K_!�e�s���ߦ3�Q5
|�#^�������
�O~
���H%I�.�
7octY��[���(��ޯ}��'N�r�*\!��
iw6�3�����#+��ך��]��gi )V+<��c��_�-O=�4�MQ�140�(�����8�5Yj)2�s�Br�)��9N�S,8���
z��O�x=XQ�$
*I�����y����������q��>���Y�r
#�`Gk�.<���4K�:$aY+�"���T3��*�(�5��܅�ͷ �1I�E]����;�`�"�"SыA?� �����	�q�0�h�t��w�*U��h�:���h1���cGN�������3)q]�R!tF��BIDP��]���8F�T��)ڭ6�ZV-_Ɏ;H;'��f�ҥ,����a�����cǱYΆ��Y�m5�)/��2�ϝŹ#
J蟢w��Q7���MJo��2H`�(�>c�3M�����o���S��<���<q5{�EP69o�mF�"� %�i`�+�p�l�D�/}�k<�퇨F
��a�s�XW�=�������$��Z��a_�R%�D���\D�4�ު��f�J��"�{�Q�Dh����*E�I;�l�
���� �yΝ=Ǟ�{9y�4��[)�Z��`�J¹GL�
�hgN%�
�,���at���\7Ȭ��<��s:t�$�#	�g޿E)��IRa�5G�r�F�0s���$?��p�]�QQ0r9H���{�]?��1ո�/�yu�N���#7 ?�5@ ��48!%UáC�ٺm3��[\���i8��$mwٳ{��.c�����=���|kD�^@F���_>DJ	�&'y��ٿ� �vJ�*T�&�����V�!EW���$�Q�B�eh-'})�����b�
��*���p���X���!��!$%|�@����{�6�yNs�F>Hdb6\�����,/�օ %O0�����20��p�#�gS�W�u�&�O�g�>:�)5�J�"w(!�"GiI���y^W<���g���FO�d�=챪�W9>DK�����`t��A�q��	�x�	v=�8/<�*g�L��ZRA�`W-l)�T��l�ކ)Q�]qlشq;wnc����芧�4Շ���n^x�96^��[�qY���'����cT��H�x��bd�Mw��Er���,��C��{UR�.H�u��I%H��Nڢ>Pa�3�\g��������WY�q�:�z�7��D�WZ�̐��q�լ֚�c^�3�7���ӿ�C�N����P>�B�5��}i]��A_oL�R�,�(�/E�$�#1Z,a���ǽͣ�=D��#j�PE�@IC�c�(!61��pq��^|��}�)��>@�6��5T�[����(y��(�B�������%�*A*���g��?�K.��d�9J��%�⠳�R���?Pp�f�zLc��k�_�9R���/�q�P��ϗΝG_>�W�p/G�bd`��TiwR�����J�����Ek��#����䪮z���Ҭ�\{![w�gpY3� MϾzx`��_�ͅs��+��1Z�`!�[_K=��Ѕ�2'�5�'��*����� +�"B�ғ��>�և��������yX�3~�j����"��Yz1
�"�K�R�o�c�	�<ޒT����cǉ�
��E
��@�Y��-��%����77&L��QQP��||�v��'N��J\�yG��c������JKM�T ��˟�@IE��̳(�#��N�^tI��%qR��clR"��:�<~��}��|�a����x��gx�9}��%L]�g~:ǥ�t�F	"��>l�U4��*IbPB �U��eKٸq��z�4���p���#;~�<��"	��b���]�Z��j�Rr��((r�P��x-ݴ�P���A.�^���{��.>������c��*P� U&�^����{'4���8��M���'2�o~�!��O��$�� ��PDha��2�+8��E�JxU��)�
Ib�Rbmx�:�-�"G�`���-
(���(J$r�k��D�R	˄�CҠ϶���Ddy��Qq��!�u�<��S�M��'CĦBR5$��Y���ss�x��u���N�d���>�=���t���0�N����U`@h�T���u�y�����>��`�.A[xV���{��W�E�Z�&v%W�y�&f/����~���j �u��1w��H�?q5� RJҬ���F�F��F(س�5�l������
����i	�r��q��?8 ^�j��*�:��R�){V��h&e�o5��rQ0�d!/P���.=���g!�\\^zť�'.���ޫU��7��DK������o��w����)^��Ά��?v�k����KBȉ���+&�ME��pDe�l�j���`��R�˅���;w��Vn`�M)�,x�~��|<�g��n�/���Oe��n��^	[��<Zi�&#Cc4j���)��8͉��9wf����Į�����胏��G���'^ⵗs��9Ο����I.�����If'登�b��<��6�ٔ�lJk���=k�[ŀblx�-[6SiVqi��/<���U�ĈJ�Z_� ,?�N/l���0�L��eyFZd�X��#Ң�|g�;_��Oq��%t�� ]�ؒ�$e�w�{T�e���s��<}���������t�����u1*	�_ȅI�GP,ó�Rh�Ȳr�7�8aRY��e)Jj�*&2�2�̺�$��G�-��d@�zMA�`׻߂�	�uD�;Ϲs�y�彼��k��s���6�� �z5$'J��!�4�	��.���j\Gz��#��W���c�d�jT�WH;iy��u�$ `VY����������Xu��Ͷ/<2�L���_�/=�2�c���JR)yT�*ݻ�w�������_�_P{�⏴���m�v�� T��Q��H��yo������[�4�Nu�p�</<��w}�m�.��^J��pÍ;��#Os�T���Y���*$8!�:z��c�D������*윽\ ��"+K;?�D�0��E�b[���T���U���"��J��������F�{�);YN�4��f�ѿ�s�����;�О̨�����/=θ~�a}������؎Ǻ�koX�/ǟ �T�����L��`[@���(MRIBl���
��^���~o��&4�_�Xlc���:�nV�u��pc���e�}I�*�����Ӡ1�R`"��I�
&�$��M'�k����A���x�{�>V%�ˉGb�ٶ�F����חwJ!��K����4�`���%	F�,��uRP�d�h�3̶&��;��o~�k���;G& ֢��X�ފ���2pYJ<R����L8��9�����O��������Ȉ��(E�\�=�:���������2^84y��� ��MHY���KLu�F�˅�:�qgߢ8�
���&�S:i�4����
�̷f9r�8������s��m�&�߰�5�Vc�sV�yX�J�K^;���Ӭ4PIgY�Kk�E�Q�7D?>�H���Ip��
ǖ���q��^1��bޢj�{��w�Y�Z�359G�^�:G�fh)��W:W8�������{�XˈO}��]��t���;C6@~���n���ͩ�kt�H�d)׮_����[��S�.�&U�=ũ�g�%M�
��R� !aq�tQ��YL"�H��^-�#.ʑ^��&i�Kv��������<?��+X���(�|�eږ!���QI�6��Ҕ���Ms6]�����α���E*b���{����uP!�(���Y2����r��1��&�"��`��N7$F�`,�,}����X`m�� "/�������>�cLD�+�YA���e�(�8B"��WY2�����Cԫ
*��BS�E��53���'9}�����ȡ�>t����q��	�9��'9r�8O>�&6l�e+Ձ$p���ރ�ݳ��T��>	wqTwo������I�@b
�!<qEcb����\�>�=�~;���_bˍ���iZ7(�|����:�4���}�[�����g�L�g��y�Q���`�:�̅i*Q
%"�,�����衩[�<�2I��E�08��.g�=Bu�@(�'�Ҫ�:G���'G�`��Y�~	>8����} ��y�W6�K��J�>@�:@�f�f9z��w����p��	��,]��H�JB�d,hM�|�k�ǾO#i�D�nA$5RP:^�R�$:2�u�k�_�;o���\+p*��yP^�Ϳ�6����ٶ�z�Ut��Z=8�fA
}>�FZW�z��sa���U��`��3R�Y��j����ъNg��Y���9~�˖-�ַ�ԸҾҹ�z�I���ګ{���g�1DQ��zk�^����2�y��`	��oi�A͂���_r^�:����_aC/.kw\M&�XT .�B���{E���� ��Vm ���p��� ���
Ea�n���P� �sҼ[N&A
P�'<�N���ͺ�ؠ#��C5���5k�!�-G��c�V�d�,4�cL��l�d�Y��^��B\��E���
�Cy'�@����$���	�#ͰE��: +Y��l��)���W�4��1Xb�9�P}�Fm�Fu�jR'�jUA��<���9���g���vl�(EG'�����{F�K)��oS� z
@��{{�e �Y�(
�T�H�69]d�ظy=��_�[�XM�)�m�D5A������)�(!�&�z���_�h̜�����|�K_a��*jq��'�SK�ԓ:�N��Fz�蒛@QrB<Z��̴(#�Tb��L�L��#�D%bP��
�_!�K/��J������@��A�Pt��V�QM���Ԃ,w�̑蘊�Оms��I^{u/�^;����iN�kh��r���������c4k�$:�v� P�U�}���� 6	�͙�;�������0͑*���RL�8��q�������i�/��	h'`�5�U�zo���s���K{��Cw����~��e(�l{��d���J���7���G+AI�i���Y�8���ST�
���F����E�%UUe��{9��0C�c�)�\ �*��P�{V�}V�e���~dh�S^Z��H�{���W��U��M��z�wE���� ��V /�g`���r��q:���6��#L�C���U�u;XkC���v��o�!O-C�u֯���$LOMs��q�f����l��d�Zi�,ȅ��g� �|Y$���9}�6H��nF��
R/�0J��_��
�,�hC�R�QkP��Hi;c��4�����:Z�H�HUJ��ƻ��D
j�&���;x�z<��uk1��z���o?����H(�2�O{E�?G��ä��DI;m137��p��~�=��}�M7�	k�¡*)�<qaTؿK�ڐX׋�u���r|����_�������|�ps-Efþ^�+  ��k�H�_�e��c]A7m�j��i�(����� d}Z������u�)q�
�7a�����/B	|i*�ML�ޤZ���9�S�t�]"�y�_
.s,[��8}�_���x��Ǚ��W���Y^x�e��޳H�i������[��c
��4�07?��,���ݼ�]7�G�:�ޅC����7x𛏰bl%�3�4T�5��[hcH��"��:2)�����h���&���g'�c���w��]�Wl�m�Q���UXH�H�S�n�(N(�#-2R�et|��׭EjG�͐Z#��V�q��98��yZ`�AI�[;+Hn`���\��-z�s�x��+�=��u;U��n!�Y\��M�����j��u����������F5|!����RM�&����&�&8��Z���!����5σ*���4��\��":Y-�ħ���d�h�nN�-����
Hq��)fg戢�j\�[AQx�HE�7�_W8��_
��1}�w%�8�aQL�����,]+���&8G�v)�IHs3F���p��,�ú��"�'ֆ���j��lF��������e�렎1�.Y����O�d���^�U�̞�p���tۖJ�������s��P�<w(x+s�YҼŊ�����⣟� ��\PLM�cI7O��.�h�4A�R��HH!oePH��c�<�����_���9V.Y���<�*��#��cs��AzhEqi����`��OC8�QE���,�n�իV�z�*Μ?G^H�*Q/Y8�Ъd��EU����(��E�$� 6��(� ���ۜ:q
�`ŊU���ti�:5�I��;�FzIQx��cL���0B^|�v�����6�brb�f�I%��JK�"dB�hq�W�Jp�g�5���𡏽���qqk�.�N���?�"��e���v�)s�[�	k�"��ҽ��ji�u�������p���cL�o�8v�`��:v�)��o{��mׄ���p� Jb�ԤyN� N�禨V��|��T�oK�2�m��8w�"A$�>��n�������\/,��R�0��K���09��ծ�� �`�[��^W��� ��` .�/�
^r�ĂK���vs
[�cCRM
&&'!�S^y�UFG�Y�f
Q�h��H��LL��B�x���6��%4Wb�䝂�`ĪU��U8{�,���gn~�������<ޅ)��]nO;�U.y����`�X��^h�^��K½ Y�n��.���qر;�+��
_["i�l<�/ɭ�T\xAU�ڔf9=-yH��*F)̯���I�U���Mq��E�]���
��������g���j���5��
� �w���D��{���8�x활�ȹ��o��_��`|M�"u�H�*�r�"�(���ͻXo�
���XHA1O<�,�ʙ��iTi�v���������`�����b�b�Ӓ_��}��t�ҴC���n�fb��F�;�{7���r�m7�z�*����9u�'ϓ�.�zB�Q�(�X�0��C����/A]����h�[����(I1?;���Q6���Tt���5��{�1�@!ɻ�SLON��Qi'#��^腤V/.��e�͏��m�%ɢ�����h�6����𞟻"�4���$R��}�G��jh��<s�9� x�ǆ�ިH:�~�?\�_��{Ա�� v���w�����o���Z�묷��xxbw����y�$�:B:ݔ��P�k�-���5�����K8x����Ɩ��
ݙ6���M:/d�+�R���R{��� ����8�����D�'�/�7�%�z���eq)���)/��rq庴(]���o�G�^����E��H��
Nz�w��JY%b&'g9t�FUX�~���Y��
�r�+�D	F��1�Zk�J�nZ���vr���lX���0gΟ�ĩc�y�8QE�+C�Z'�2�4�Q�(���<��Jdb�,+e�?ؤ�BR�³X�5�R���ͅϫ���7�m퉑8v�BI�R�D3�l�E�&J�"�E��E0�)��9[JC��{�"Pe{4�K����iJ�� ��8��0K������$�΅�39v�4M,�NmL ��j ����s����g]���
�B����QdpEA���kU���:4�k?s�3'ظ�>������=��`q�����$?!�j
%A�po%q�i�f2�
V��ן����3yv��kHD=8�E5$�!2Z`����"x�7e����\LI�uO��H���c>����#|����w��ϲ|��-g��ul�q37ݾ��o���k�`Eʑ��ٽ�E.N��ӝƺ.&���0�D
�����*Ac�w���F#�p�9O�$F��M�3����K" ���Pmq���
K5�P1>w(F��!��*@�r�P6���V%B�����(�D1i���T�U_8���!>��d��1��i"ss������y� cC+�
�k�
�LZ����-��^J%��'R'����';���cӷfITZo�=S�|�{x�
w7�P2�Z��v'�Ǵ:�H%����b���wΓĴ�<���N��MD.�R�;��e-�C\�������p�K��KO�0��`؅����uY1y�������9e��go?�+
2|�:�DQ�"w��V\�p��1�b��u�q�17Z����Y���T�"UR��)�Ra��5����׮`��դYʙ�'�oM�xUaH�]�����t����<�F)$Y��3���(��D���]Yt/'>�n���i�5O�5[ҫr=�IBv��s�~�'q��+t�'24pBx
��K�eY��"%�}�����Y����V��n����t%��ԙ�đ���y��jih#�J_�y%"k���qX�{{�]� �c�����R�UБ��i��Ee$Q]qj���m��Χ?�i����3�4�ӱ!�$�=·$E-�Y�"�H��!�\���+(��HH5/=u�?��ƫ��e��Z�!|.���W�X^��	�nQ>H���B8�:��w��&���In�};���~��[V@�	DC���uVnZ��׳����q�fn�c��q#�W�`|�0IU���1=;���$��y��J���bm@��������x��\F)�u�J�\�w!z<�6x�EQ�����@(_FU	���y�e�8_�آ�^���SZ�րއխS�U�WRrh�$��:�z�U>����_xZK���btL1����<x�.Ο��Q���p�E�
��{~k.�����������?����5 �5��6~�k�oH��=ϼ�׀��ˉ�%8E�A	�8s�$H�M7mgx�
t���pC�LṈ�}�T���`��m��:�Μ���K��������(���֖�)�I{r-!C��1�(2=r����128ƒ%�$��d��T�O��B��1�� ��4� �;��b�%�Y��&�/r��y]AI��"C^�8�h6T*U�i&�/�gz_�\0y��3��)�ň�|�o���i��cQ������!,�z����w���Op��U��8v�8K��s����^9����KjQ%�QL��YS�+4Zo�y,'~Jc(Q:
%IӔ�f
��]��3�L1��S���O7
�������eny�V*u(
Oa%B�6=)�
�����'"�ТP8爵"�/=y���?��W_�M#i2P�pEF*�,8\��e����N�`��C�Ғn6O!2N_8��u����w��߶�N����;�,'��j�
�+GY�5\�vn��&vް�
7�d�2Ɩ�10�D'��t�S̵fAZ⊢ڈI�e �S�0Q���9O^Ձ��!��Q�w�
!R�`q�\���K-���ы#�E�_X���%"%���NQ�Po�ɋ�Nw�j-x\�<_���?��w���r�#Gt&�|����3�ɻo
�*�ץ_�_h>�[,��YX�O�N>u�:?����E J2�}������;�G*�㭐��*@���p^�M3��$q�6�vw��ً�4�q�V����!T��mV����g^"�)hT�� +rL!%����"!.���H��>�T��nJ\�RP9HG�V�ܹӜ>{�Fc�%K�1q��)4q��w��Z��.e�{����k�8�W�v�:*Q�S'�p��i"e$��n���A�&�yZ�6J��'�����I���������3�z�����2����V[��.���u�j��p$�/<�����Os���D�W_���3g���$���܂,���8Y�����
�w�!�C�
C���ͱ.'J4��ɋ.&���.��ٓԇ���o�:����ߴ���#����2d��ȋ��P�T�kS��_d���+���A��/�����4�HX:�<��
׃�pޗ�%g���^�EO�tY���RM@9��'�4"�;3|�W��݈�����|')$�	\R�lf�4c�4Y�v9�]���o���7og�
,Y���Aj��(Qd�����O�ffv�R�����AL��^�s�:V���Q��N�<<ߺ4����s�Rڧ䢳g�_�`A��[ƕ.�JEdE�Қ�Z�pi��D�n����9���w�s�|́*�{t���P��;q��}�>8I-.m�c�Ш>�ۗ�1�	X-#i}�܎���{�G�>���ʳ���>p���B���䙥���� ��R��oM35{��n����A�u芢�)$�J�GNs|�qW�[V�dy^:�����踌X�}�07�b\\\�0(Q�j��K���t9s�SS��K��i�V��!�����;ڲ���E?3����'W.UPIU*%$$��lR!��1N�������;x�������m�v"�`� D(��RI�T9��g����>�����ug�ҩ�מ������ �%4��#�%��9�]�3��H�5��296����w�ana�j���5S�S�ڋa�-���
�!�t��!�;�]�{ڎ��񿰳��`I�2X ,�i�3��u:���>�sll�C�Bs��4=�0��T+5�k"�<E�e/~��7.tyaj�4��ic�Fĉfv~�8U�6�s��a=�y������C���װb�0�p���#�I�>��q��N� ����-��
�"��s�N>��Or���3:4A��+��&�B{��^��K۰�Y�E��S9Pp	%�mFn:�6È����M��W^GsE
/m�y;�(�/t$�b:tH����yL��2�T�b�W5Xw�*�߶��/���^|9]���F�*KNfZ��L͟���q:Y;\�T��i|k�q�n��grh���qA�/E)��O�� � 0[�6�8���
k[	<�v�f�5Cu8�����`3�9�T�l`�ł���C���[�;ЬO�H�T4%I���`�y��H�g��߳V <�b@�Cv�R!��`�Ӻ��s�T���8}�_u!I=�d����P��<Dk>tyJKt�HK�����o�����O��+w���Yŀ(���"��$����l?��Q6���$67�g#�������RRa
�i��* ���:���\p�L�γo�ްR���jL�V-�'�tM�F���X�(�����b��,.M�A<����
��A\��|��^x�)�4Hx�Y�H+�
Μ>���,��رSc��%�C�Z'�3�=�� e���H'��(�z�D/\ȧ0h��X���2�ƈ����\z)���7��W.GV=HD�2�CO����.��{�bk=�x�{e<��n����?��G�0ڜDS����.��F�����Ǆ��E��"�D�����J)�M���V\r���ￗ��Q8���,i5!���AcLp�� ��Z�H
��� ��%h��Ij�)�
�l\�ŗ_�կ~)�y�5\���X�z�Vg�#sG�QX�,t�Yh/0ך���(��+�:�$+Ք8���pE��	鞒���gm0�T,}�m�b�P��@���yF�ۦ֨����)P�ˮ��7��U����|!�[9�K�݌��ˏ���C7V |��1JD�)�m���>��*�{�%1න�
�~1�(Geo.3I*�2Т�;.�>T��m��·x�/���c��, �$�D�H0Tk���Ü:v� Nt���˸1������S��w�O� �	���Qxκ���T�
Z*N?������&�[O�Ш(��@bM:4�P&G*�LdHh��"c�����\y��[��}�vs��!֝����!�?2�*y��j��HU+�PH��Q���g�,��E) �1� �(�b�5��q�AHՓDI���4I�u��qD��A��l�GȈ8
�}Q���8N�=8��h���K�[:K|�E{_�8�DO�q�ɢ�3�8E^���?���������6m[��8l�q��AEIcs�������3�!lHa�5�
����_}�]���4HuWx�sVN�&�t:]�(./� z���3e��,�.����E+[�I˯���\���U��2$eJ_�jB�ZO ݳ�2H�+��8�B:Q����,��B&�Ai���k7��+/�5o|5�y�l;��:�֮B'%�f�&h1�7(��{��Dq�D��\��<_ PE�Č��D(���Ơ��ddY�J=EƎ��,k׭�Mo}=]��yѱ� J#�}������7V0�\Ek���q�=�΂0H�*��??���J�uŧ�
�߳Z <x��x�����IU�n%��gD ��2>W�ݿ�> �B������ݼ����v���}��#PI#|[�g�>:�q����$	�Qm������?� x�j���ׇ+U8���jZ�CQF�#H!����:N�9���(i%A(�	�Y^����BQ��������!I�>�5�Fh�5*l>w���b�q�������etdc-Y�ܞiN-�im��� ���������eJ^<
�������
�?�߮L��"E�ۥZ��'�8�h-.R��I�qT�R�!�/�2B���{�ɳ)���8|�S�ݕP� �ALf��F,h�W"v�<s�n��+^�r~�C��Uoz1��T�j(�m0.�a�vȐgQr��kF�2 ���a;}x���r�������~�#�+�>5���
��aZ��i��[_�X
���ٝK���bѱB�96lZ�y�6�:d�IGn
By�n�+קJ(�tՀ7X�h�[��{��iMkA���k芦2�R���p�:.�b+�]~	��b�_����70:9�L<��t�:�6�n�v�l�B��F��K�_�X/i@���c�u	��r�WX#8�B1)�L���H����Ky��^���Ź�h��q������3�?��
[.-C���p����>�S@���������gvr��L �[@�:���cW�F*y�36����Q_8fm��'�8�����A��v��/���t�ݐ7]�`Ն��03?C�Zajj�C�&�V�� .r���U�� ݰg �$BŬ4Z+�nF'/(
C�Z'�*9t�CGSoVI�)�z5`^�UD鰃5�V�T�z[*�Cn�T-5�{�L�e����49~�8{��axd��&E����tÅQ^�a�zBZ�x������`��?Ep�dI��0Ɛ�%�)/�K�Jn�Xya(
WNiZ�{�v�$iZ
"�^�� I��~q�0Ga-��%~�!#Oe(e�5���{X�f�����7����7#����2m���&(�@��AR�ݿe��q'��;���[��?�k�9ƆU�rl5�+��7F^273O%DQ�)Z_J)D/(kp�����ͤº�aЉ���8t�1.��"�l���pB�TbIE��� ^�U����֣�*/_�wW�٤$AJ���W���q>�|a����T�4j�)+֍���ul�x#�/����p�%�e�yL�� NRfg�8}�4Y��16|.}(��qǵ��5��	t�.a�L;����ӈ��ie�Lϝ�Ѭ��]�寺�a�L �ҧ��?�ç���#IX��P�5C�ٛ x��E��	��鞭6��������ş~��[�c�l|f����">���B�^�ӼF{�CA�"�$�(c�8"�"���˺u��z�y�H�LP��HQ��t����CN�>���$i����
��(.�,���n��*� r@hӻX{�g
Zj�"/N��b�0=3�C��8�������*�hCpH�c�(*�u6�T�g��[w%��[��H��/�����c������$IJ�gx MR�4%7�n�M�VH��"�C(�%�+`@�(Cjd(�� �@��d5�b�&�D���V ���^\���\��zk��Q�N �
ixx��ĲB�ԃ+��eA�K�%<��	�"Y��T�D#c�+"r,v�صo'V��_ͯ��
��ױ�'�è_h��\Q�A�
֙�P(�9g�4+���P�-�'?�Y��o?��l�u����h/��� �*,�p�޸�K�@Q)8}��Yk)�J������)�
ο�<�á��B���8�NA$c��y聇Y�m3�b<8e�^���-{F"�YV�*�B"d(�U�Pq�S�[��vXSTB7=4Re��I6oZ���7�}۹\p�V.��b.�~�V�y8�(
�C=����������E.��tWPj	 鉒�V��|{[.�l���72��	�R�Ln��U��=��?�Z�c�U�J"�o��R��t����󑊥q�����]�V�?W �w�C}~��S�Ư����[�tĀ�d=)T�ovS�D� ��"��u����E�8a���[��j)a��5�~��x��~V�ZE��ȺJj���n�l�2���_���w�����@�� ���Z��H�1�b
K��H+)S�S�|�N�b��L�Fxhχ�����R��V����&�h�V%�]�����H�z�$/����ԩ3�E�j�0��괉�b�٠[dx�h�kS��;[ #I����:P�c�e
������S�3
X����0rޕ�������*[��s�N�g�O�*$K�yȑPZE
��8p�Z�К�RPJ�]�c�0=�
[��-��~��;��%R�J��@F��D��Cp��20�E`D(��:9�A\��:�����z>��뙛Z`��
4�Q򖡵�	ϯ�q��uL����
/�Ҋ�).�5B��Ӕk��)L�6����c�5l�p�8�ܑ�_�ro Ph:�9w�q7_��F���Z(Ѭ5���$U�L�,�R�Z��:

/�Ġ|���7��׮t���-B��$ZH�C)+����՜�n_������P����Z��G�/<���Ǘ�����b&|2z�D�dnq��*y�o�:������m;m��2��o�÷n��Fm��\��)�J�E1�n�����i�(�)I��G������܏���YS�?� ��.w��_0��R��v��tb�{\f�y0L'��%�_�GE1�N�drr[�mF��Up����Mw8p�gN���F����>�'b@?�	x�@��_ʟC8��B�����#2�]�G''8q��<�템��(c�M��&/r\�Qօq���[O����c���@/�f�y:���6��җ��s7mE�c�=���,q'	Ɨ�U�)��"DI��4H����3��H}�x�,ڣ���=����S:31�T�����÷O=M�_��zy����8\�R�5C�����>RG'�r��a��O3�b�W����~�7�ꫩ�$ĵ�����.��R��Ş����I�
\�pi�灃�͟~��|��*eÚ�̝Y�\�j�zH���%�Ca��u��0��Km��z����z��u{�W����۷]��dh�)::��� sT�U\��s_⣟�����оc�{�Ctf;�*�B�sI+dUb[kT��,���s�lއ�=NS���]]�`��<��سx"��ɭ��F�ɨ���Ȋ���	7�|��^NI�\���~�#ep[,�fi�֘kO�~�j~�߾���m 	*�k�y��?�%��>�U"��e��_J�ł�g����(�T9���������\�~���g� ��N�a>,'���'F�/�T���N�ߛ �� �䀀5VP��1�p��Qt��v�6FV�^9Bt֬Y��]{yd磌�N"E�8�N�We�_yI�4�~� x�������Pr����q�G2+�)�a��b�u4#<���<��^Fcl:
I�0�&�4�j�3�n��9���(N�p��s�k�����"/y�A(uΦU\p�ԪU�yN^dXkX�,��Y��l �`vn+���Β�9��C�C�|bJ~���82�X����6e�(���� �iX
��8	v���em��IRM�:t�:���9�ȹ�K���}������:��ztЯ�".P��4hا'hB�{Ha�>���6����/��o��_ert�+i�tPN��*�I\�����~�%<�7hMKԅ��L�QK����iLZI��>C��r��Aj�a^p�D��t˸ecK��B�$c�c�Ls��qڭ��{����n���;px�1fNΑu
� �Rrk�P��ǀ�
S�u@�z�T犰zsa�`m�r�c��B�����?�O��ɉq�G'h�:%jI�tP����r��+ �ﻑ|�PN�����c'S�����u.y����Z�����_��_w#6S4k�x��,�R^��N1�V_%��Μ����GO~�]�w��,  &���#n��K�h��z�OG�*�(=�ahr�����a[8�)�alt�-�mD�o�0�N�`|U�����DJS�+��:T�*Rh�����!�I�/��`��}`0(�{�(��>/�7	PX�Ⱥ]Ҵ�p����LMϲ8�3>2���C�@K�ӈ8N���Û�L�
�^@��T2B"L!�����x��[7rŕW����C̷�5j�-��ar�
r[�Z\��Y*�H%���k���d�����L�'�;����(Sϭ�c�����EѡȻ��A*A�D���O`�=˚sVr��������q�e[�
�7��R��s��]pX7���G|����;�!�OjA�H(<_�����?�{�:�ڕ��5l��
��&�#�*OEQRm/i	�[�ݻ�K�^.��P�^�(�eo�e~a�
�33=͑#G�z���ٸۂ�&�v�A�)��%�j�l�Lw�s���b�9ʹ����}{������.�у<|�#��R�J�(��R�Uy���M�"����xk�:���I��b���R�L��}ǹ�_`�·Q"�Z��Zl����,�ŞT��E�򪗦Exp�|Sa���n�S�W@���y�5/���{���u
d�2�8��1>�/_f����
����(26�>���Z&5�r����Oe�oc�*������v��W�Y��*�Nv���s�~��wh�{o�2�Е�DoPb/{��P8��(Ni�:�ju�"g����
kY�q�C.�W��d��*N��aϮ�$���l�ZZ-FW�_�.�E7� OV ���K��%W�R���}@�1�'B��#P�j�����CC#

q��A��n�n���Gs��E��Q�¶y�(��"��Ɣ(
��Dߟ畧��lٺ���J�
�����,Bx:�BK�jB\M@���B��g��K}?���. �8�.�=}�X6`[��:�r��d��O�-elr΢cIZ����U����Mqz�+Ι���������/~+�#* �19�Ȉ+�R%qT�����I��R#��fA�	Fg���_�.�����e��-�Y��cg(:���$�+����X:
%�B������/��r�����b��p����"�j
��z����Cؘ�\uq]�o�*�d�`��O��n­��A���M0>>Άs6��;~���9����ۿ��_t��;��{�3>�9�U`O�錧�Z\�^H��@
'@������w�	yd'�C#���4jM��d�n�����_�h-7)��'�9�c=K�� �=Yޥڨq��Q�V�������!�ft牪	2�`Qp��Í7�D,k�6'1]����(�Aa��$��Ar�S=R����(�;���k�G���. �"@]���_��e�V�{�S �¡�Xu� 菾�@��c���	Iqñ�G�+/�ȇ$�D�n[�#)����}�r��I�!\��>��[�D�}����S;���H!4�/����a�S�*�Fpt,��k*i�4�❣��P�9Ǳ��x��GX9����QD٥�� ]I�Jc�"�y
I��Z:�kt�RKT�0yAw1C(ERS�L��~�.��"�����G���Ei��Q�;8pa��D��m���/^.%�c��=�O�(	���#��O��[��[�#�5q�16g~~����Tk1/{�K���}�k^�
νp
��4L�|ȴב@�!} ��^V�/�[�`*�����k��>��T��
����|�3_�c�q\!ش~3����3�T�:���-�1}b����%A�.�M�x�׭7!q=�`y�笗u~�<�PBP�֘�:�P������f���l�b�f�-	�Q�JƁ`tl%j<���,.�8sf���)���!ڭ�[����q��_Ju(	+2�Ȳ,`ڣ@b5]WJ�X�e����^	TEҞ��ܧ��u�]Ok�M��`ժ՘�"��G�͈�d���.]�B}�_�(ŸB�
z���<Y��M��F~���!��,]
�)c?z����yh+�ב�:�6����85B�����:�u�n�(�'�<y�T��G���w�C��	���e�ǋ��%�)��ѓߣ�2ث8KHȘ�"F�1�E���cj��l�z>c+�ACa�EXi�1?���G���w���R��_"`=_ <���~�7��(__)���ᵖ8݅a�/?�r�s4GG�\9Ia:<����s���q���TF�������v� $q�����-P�Ϝ�%.�ɕVe��@��4�cc\��p�V�F�a����#�<}�4��4
��E�
gɒgi!�/�@�>je0F{�3�S�/��{�%ʵ� ��	K
&
���y�v;����f�*^}�5��=������^��J=��j�]t2����6X�0��H����ϩ�=�t<&�^�S?�ޏ�̧>˗�t#Y+g�>�"F�
���3��mhT��!��Ǘ{i/��f�L0XZ�Dҽw�'��$ TIДBR�U�&���s4�M����t3.��2�f��'<�?%$ݶ���lڸ�cǦyt��5�\��j�����^��W�;�AF�6qy7LE o8(JbZs-��n�N�bAֱ��@��
D䑩E
�>�m>�����822J�-p��̩Ҥ���h-vj�\0YB|I��0]�e�V1RI����:�ŗ^̻��6\8F�g�.I#��ݙ��~�f�u�m�"���ȺR�(�gHi��|@5���30�~�Jཱུڿ���wM�`�>���O� � �y�?��_<��U����]�G�C�B@Y��a�˚���k��E����M.y�x혚���*�פ���6ط� ��Qo�k|@���tz�e"����A ��rK ��p�9�t)4]�����&��RI*i��c�c�њo1><���q���v�+,2��^Q��Q�%J�!�������(N�*�Kl��u�SJY�a%۶�ǦM�066�P���9����n�H*	i�bSfI�%y�F���|�����+(���h<,�"O���ǫ���gu����Ų�F,��P��v�9<�������ؠ���1�"�)��=���"�@k�Z�e�5���)��\p���፯�W��˼��/��+6R�F�
ѳR�eJ��
�>ɲ�9Wj�E�9��=�#�9�j(�?6�
���ħx�]4�!ƆW��u��J�d��	��Zb��
[��{Z�(��[p�V��Q��E����8R��N끶D	��eq�F-d(n��*ya��Z�N��AF��Wle�X i�b}������I��y���4�U��Ǐ�T.�d;׾�l��<y�Aj�TQ(�d�ν������>��o���}�ά�=��0ki6h����}\�/�g���LN�d�ʵ,ηY�o�UL���N�d ��r�������g)q��y��XW�cEn���u�p�� 2"S�D�u��Cs�����w�s7l�f 	�	H�C��&U2\�^�bP���ŭ7<�����|X���y�
�2�@l}�Cқ
)�O��(�XIB�R�eYA-a��X֛��
Z+�,�d�a�F&�5���E�u�L4��]n���RT+u
���EQ� ��"�V��b��[��`p�\^K�a'�Y�����!I���C��6���C8I�*�
��Yȸ��rx�QƇ&X�~2��]KTMPZQӇHYgBѨu�?�����*}�IM�H:���p4�#Vme���lٺ�U�ǉ���{��avn���Qz�v)+���pe��,=�ޅ�8�|q�1�����;C/�6`O�'��E���/x�\���J�+<Ai��;��ȷ����JQNQ��9�s!z�9�����h���
�+gN�O�q����/���P*BY�z�$�E����,o#�'��D� 3-f[S�,�f�}��*����x������e�~�KX��UT�Sln���Z'![��+Y���X�= B�,�~�@����ߑ�� 7\�n��Wٿ�5�d��a4����"w8C�ਐ�����;�LVK��TIkX�h-�It��, K�ƀ%�2��D:��V
��j%XS�.Qᅧ�/e�@Qd����ju��=��l�9� �ZH<)!�C�����0�a�c8xp?'Ocӹ����~��^yJ��Jf3�<'�R�Ph"�ϴ��'��o���Ӝ92��xl��o/{�ϱ�3���!����8z�U]G��Z4��L�TW�TJ�>��
�T*i"��$8QDp�&'Қ$���h����:C\�>�^����F�^8�H=��i:����׸�����Ҭ�brۏG����9���{��/è��r5�sp��u���{�$�r';��P ��S_��_[�Ư��*}�S��2�R.��e�u�(����#En2�Dq�͡=��U���Χ1VA;����MM#Iy䑝����j�j����|��G
���@����O2 �b��y�������)x�5���D)J(l�F��XTHU���9��Qfϱ~��66�0�I��h.U_v����ʰ�wA]�uis�:
���(�\3����r�%�j�J�$"�3fgg��
[`JV��Bֹ�9�MRu�(�O/þ�[�VD��ZVċ���+;F��Rv�e�ЋU2������ R��0K���,J�SXߨ�өK���}��R��*[��j�qR �r�"������%^:�,p�,:�3�̞���q��[1�E�m�ox%��㗹��W�������r�"b��TЛ�\��n����d����;�*G�Z
�T1���o����g���w��5��P�
gsYA8�- �	ZEXo�B���^�� ��,��b�1� )i�"��9�8oȋ.ݬC�Zj�,�)i�kt:m�<'J�ը�h�<�qx��Q�u�n���;�Tp�Q���<��n_��9B*�͈��	~������.֯_˛��z�𫿄��0�ҽ ��£D��x�t�7��?}�F4�/c��:Q��3��8t��GN�أ����G�99
�$�U���,�T��.����<�j���x�id贅�=ۡ�v&� ��u�L��z7�|�U�&#�rt��.�J��>��`1b��jZ���P4�2`_��t��A����)v��*\v��w�����|X~䧰�N
��\xq�ĭⲧ>x2�q	������K�'�t3�EΦM�X�~��F0�j-#����ϵ[	.K�:i��,��1�O�z~�\,�#дDW��LuQ^���J�XG��1��N>�H2���$��ʵOux8�ƚ%E�b����A�;[��C�[clHԚ�:�6m��^�*.����gi5�_�e~q�n��	C�H�H�P��袂��C^��j���nɖ}�R���]�A�:m��#����
�t� �쏖C�K�/�Z�.F��̫2�&L-�Q�J�����Лz���[&q���#/2�+p�m��g�'�]�0t�s�gX�q-���kx�o��y+/y���8��(��`2�P��:\�*
�7c2���i
�wU��R)\�c<Q"q]�÷���7|����O�6�pc���%�~���EXY���p"XX���!,K�Hx����H����Q�����"�F������YG���6R
j�:g��p��M�+��e�/�Z��yA��,t�8z�06�g���%O!'Mb�n���<�F
W�'�B��#;y��^��o�G���>q��P��*Q�4������#��O?���9VM�C�_*Q�JT%�S*Q�j�F�T���rV&�r)��7��j��FR�AxKsh�n'gzj���XgYh��a��]\�K/彿{-���S� �R�"L�����ā�G�&���3�	������t�J(���#Sw�iv�?� L��ϟ�ç5���!g;tki��j���a'	ϑ���r��Rm�dEx��jĊ��w�Gv�!�)Z%�Z(�V�J����0����#A@w�R.�g�φT�B653����ׯ�9:�m����o��Fc�щQ�(&J#���mK{���:6%A�{��aY�	{Jh)4�$t�*
c�r���w��	�~틹�/d��ԆR�D!���.�i�)Z%h�"#AR�Q��0A�&�'N#����A�(U��9�XcPR+Uv��݇4�H(�ѩ�GR��-��Ọ?�!u�y�W��"�>�ϗS}�Kp�_
�U��:!/r2��ې�)%/A��0���>T�>T%�%��Xl�3�8�Bk9�/#��\t�v��eǻ����|
�^��j#ź20�z�	(�(��:��yQ�3�G8��~a�/��2q���^Y�s���������߸����d|b���1�v��L�Vka\�Ⱇ�Ж�P(�ʵH�&�b����iL�w��?�J$qE�*U͖�����K�[����V���0]0�����+K��"�z�	~�:F���x��dy�����_J��8:Qt�]�8%�	E!Qʳr�
&'�pŕq��u�݂$��ҔH�a/�<��<t�n�����ddh�4�b��I��I��ŷ�w�n����d��4Zx�8��-�f�z
4tm����$5ɿ�����+���H�8��#�hv޷�����Қ�Ҭ��ɟN'�����?�iw��I��� OR �R$����
6����*�#Ü�=�c�p��e-y��:OG�ܑVR�&{v�c�LP�b]�8�J���n#�,c����sX �XŚIc��3T�)�ׯ'/r�L�aݺ���C���/p��	F'ƈ��TV@@R���vѿ|���b	K,K��!�ͺ�+�u!!ʶ�Mx�u*i�Wشu-�_q1W��r6mYO��iu�[����V�IR��gk+/�H�#�ԡ`��}ȗ!#J�?���JQ����.��x�D^{/�N�/ \O�\�K�6�����R�v��{���`	�q�BЋ�dK�P>��c���7�% B��|{���!!.Ux��]���M�_��W����x��x�Ws���Y�q����;�nǆ�G���8�f����9yn��W��?E�S��!�Qj-<�Il�yl�Q���
|��s���J�zm�����'Mk�I.Xz�y�N���� LwaJ)��W}�Fn$��R ���H�l�Vw�s�]���Z~���3����c����u�iu�R�b�Z����
�tz����(#躌c'��y�lټ���Uk�&y^���I�s��X�j%�k(�j���^Pt@Z����|�>�7�r3�m�!\@
�̠d�vƔk�r5Uby�nd���t���A�9
Y�@ ��봋.^;��X����7��k��(�0�!�Gtr��S�Ow��C��ajq=�7���`�m��� �h
�$/����n��&�"��@k��P����9���"۷mgr}3����t
���Z�ӱ�޽��ۥ�hb�o��Jg����(������(���PvsJ{�� �q���dt;CCMNOMq���p���V�e|]�K���Z)�K��^M�p�d?уxȰK5�T���WU��+�0�Nj�cu֮�dӖ�\z�v.��2&V��k2��˞�����aPq�^�ik��&�0�L�C���uxc��w���m�<��R�˱�P�=���ڥ��k�K��d�i]�1HUz��j��8m+����@j��%*�8i�M���,�9�/:E���)��:���4#�M^�ҫx�[��k�x
׼�%\q�E�>o��c:"�?�GD��J�
 !<�05�>'�S+�W�;k��B��^7AѲ�T�8sh�o�6���u�}�=�-��u�4ǑN�0�H��&Mj7G�TD7+�š�$Z1�[:B���:����X<(��h
�x;��V6�K_q;��V�x�%���lؼ��\�wn�6h���$�:N�<M�T�T괻Yȹ�e!R
<{���d���+L��r��i.��BF&�tr�:B5|P�+��)'S�$DX���� ����&��O0Tc�6Jg��Y�[A���R�����KȞ���ç}�u����j�"��h�v�b�3CN�����~�l޾�G!��N$JD|����?�qI���6w�P��sV <�)�S( z#�I��1EQP��t�����C֬^��/ڊR��@j�y�z�pm����Ь�F	�y���;
�����;��
��;��^' %��4
>��LĂ�V!$眳��XN�:́��û�e�T���^[A%g�UX���eԺmBA��]�1p�a]G,	]��!-��iN4Y�q5��=�5����/��z1�\v	��:�Ϝ���}�<}�N�H��"THr���U� �
�U@�:[M��]�KV˾�p���������;����mgB��*��H�']�Q�����P/�C������ũ�㌎����x�k_�[��f����p�k��+/`��	��5t��6���0Qp�b�
jz���1���������gl����=�S8l�I�"LKr���_����ͯ�Źո�ty� �&MjT�*�NpN�gEn���
2C�d����(U:�B��8��/�*�v����cE�W��U|����_v>�;��SŹ�o��)n��͌�����:J�QJHd�[?b�������$�*ɾ�{Y�r5\xq-�劬KG�B)���N�@K�NBaU�M�Q`ے{n{�O�ӿp��i6���N!\�`Cr��ԭ�fz�$�F�=�@�_���	T"81}��.yǯ������T���*
l7L��;�_�ǿ�؁��]M$R�u�P��sV <�)�Sx��b{i ˮ��鰸�H�V�>�d���h�������w�J���R�T�9=Ł��h�:D(���3^2��aɊl ����������Ɋr�
�<�1�!MSj�:y���v�^or��	ZmF�ǨV�8z��u?;ޅ�:&FVRO��
��k��H}�&t���ۉg���	����8����cs���h�՛F�|�Z^x�v.��B.�l+�\t!瞿�U�Wc��t�8
ӥ[t�dm:�E瘛��R����3��!���vZ`\AV�	B[l��Z�u�/�.x�J�A�:,��e��KZ<�@Y�*��tJ�bw���,��y
�Q�'4G��Z;��W��_~��y��^��v
��ƫ��e���4F��8P�OM�x�!ra�$�l�e9��E��ru�%!s����ZV'R"��hY�H����7~����g��
7�w�l��
��#T�@
�v
��<,��J*�`�8K 閁���F���!�� a��X_������1�F������{'�l_M�u��wAn����a�9�|`;w>���P2R�(-�
���Z)Ap�8M%�y����7ob��	l'���(B�eQ!�(_�N�����Ǿ=�ٸnE�2�c����S'iԆ�[@�	����K��(�P���39I��EE^zZ�"D�3.z�6�����b�BB��aG�*���>����o�m�v���8J���_���9- �M|�����)h �1DQD�,,,`���h�e�N�j�N77���r��	�/:��h��]�IV���Ա�<��RE)8�Pm���E�"C����sR ����WI�(ƻ�O�$)i����(,En*�	�����f<p��<p�N��D>b|t�dHc3�{��v�m�S!��J����
����낒?t�k
��ĆRq�%�x:���YQg�y��%�y�K�⒋/d������|�l����	FƆ��Rt$p�`\F�����3���̝afa������08iQ�J�D%Q%"J#t��҈(�$���|�Q\"nc���M�`E�Bg�vw����̞fz��:y��gX2�0�)+�L�a��m?�K.�����E\��K���/�]�{/z�%l�h#�G�S�-,���D k�X ���(L��6��#
6��pN��9�X]G�J��ȿ'��r��J�=z���g���,��r8�ڕiT���vZ��*��*�-ք.U	]�HôA�2�˜[���GA�I(�<�r|YT�M;�g�yx�o�����[;L���f�Y�U4O��X�
6p��Q�9���B�
��$J�'�H�>gM��F U�5�O%M�h�V*�4D"{�OTJŪ�Fe䮮)f�w��_�[o��ZҠ7���^��$I�+�e����9£#��>p<���d�A��
`�Dҵm�Oe��\��w��+��KfLX�xE�j��n��>K�`ZA��E��O�  �R>��?���}�\���?N���?��DU?���)�T��,�����$I �XG��e통<�g�۾}+W�h;/�Y�je5$í<oo���s���g��Ǹ�x��3���TX�fr���Sz0���z\
��7(�P2F&	�n�N�K���)�nc,��qd��_�e��q3>��z���3��ʗ��Ν�p�k���]\��a���H�+���i�+Pl���)�16!�:
����HE�c"?�	`�JCa��蔴IBPVne��/�4�L�1;=���<3g昛[��n�k�nΜ:γ��H��!���wmr���0�a��EPQ�R�
D�|��)-I��$���J$Jz�u���P��i�1C�:��9��a��G�\1As�Ic�FmH#j�[h<�S�L��e(R�rA���z�:8-��ZKns�NQjB�f�r�/��P���9��������e�C�ٽ� �~�6���[���e�6b�b��[���mw��Y�R��u��P%���+Bab��xk��"�C�0�Rb��[dDVR�kx<ݢ
�W5����)d�K^x1���wpի_���3�E%��X��gs��q���k.����_����؜8���Y�^�C��:+D�K<I�-p�S�K%U���7oa�y�_���{Dr��L F!I����g��
��G?��Fm�4�bsK��`fj�"�����,
�({��<b����6�OZ �ρ�s�����23w�7\�*^����B1�\����9���[������Z�� Qx&��i�w6��2�{��v��-����c�\���e����}�˝E����)�&�;���]���3�̡(
j�p�t:��jU�u��*���
�1{�_��l�p��S`-������_y��?�ݼE$�,t;$Մ�脧?x*��_�����h�#UN	<�� AGa2�<Y'C
M�5y�`Z]��nL�pm�����a\�у���?�3߾y
/{��y��/�6�4����eה �n_���}���`�h�L�2ޓ!4�J�BQ�p9H�K�5!�P�J{G�k8|;켣!��p��M�@���`�caq�N�C�,.,2;7���g�g��]$�rN�:��SgX\l�0�H�Ȑ�����X钯��q�axt�����G��b�#Ì��026L�9D�^�#cu� ٩7�����U�T*8~ГR�_�
�X���(C(Oa�����x�N�:�΢��`��� ����;�p�����~ȣ�&�:��t�J��H#�i���E˄z-)����Ӊǉ�zk�%6�gUo2 E	��WP9�JJ!:��9NRӼ�eW���/�B�C�$Ұ�v�!�"ouq]KZK���Γ<��Q��
�Ѐ�ZM�"�n����	Xu�x�	Z���.��L��f����M���׼��s�py���#eLa,E��Z��b�=�{�O����-���8�z��#,�w0�3<<ȗ�Z	�q�2�-����c�E���<���/�A�^����l��<���kh�$,,��d"GKɝ��߽�N��QDT�*��)(cG��s>@ �ͬ���8k�s���;�)�����n���+���3cܳ����:�� ����"�f�V;���ͥ�^��M������@�1>�x�;�ȁǎ�������VNn`q�Ca3T���{����(y=v��K�7���@�%�Y��Hu����#<p����/��[��&�y�K_7N]� !�U,ϻ!--�y�c�#��ȗ>�H�Di��8<��,i$qb 5A�v�2VV8�׾���ާ�d�;���DCK��
.c&�_D�,d�!�ָr����{�	�Q�˹	P�"�FH)�֡U�R։DDb�U�p%`Q������\�%"d/�G���+�Xk1���r�R����D*.A/k\�I�vsڭ.��������=����|��������}�&GW2>Ԡ�.���p��d��	{n��z���8)5Ζ�GK�����7�5j�6a��4�f�L�е-���Ʒ��_�����2���N@c4(�;�-�$&J�$���c�����կ�����I�eX=qNȺנ8W��!+!�:��-E!#��4ju�sdY������a>�����_ �py��9^z�D��i�)<JIV�^�w�C��r�E�T�	�3Sx'�V�Ҧm����_ų-�O~����/�j�JE��;�(N~�};��E�⌧Z�Yl�"B�)gN,r�ͷ�؞���f+�+8u�ccct]�v�����{�T��/�����:�Ǽ�>�Ǩz������|Xn?�p�j�;o���B<���T��n�MZI8|�0�O������!tE�d���'������,.tI�*�N'�	Dѿ��}�!�l���>�Y�5>���Ji�(��K=���KSlB�9�T5�d�.߾��p�W8uh��+�Q�U^�S��=N���b��-���������>�E��.;��
��({���
A7�Kv��!Ah�NQU�qU��5�f��XJs�Bs"eh,eh4�9���04Q�6�RI��%��Rj�)ա�������U5*�Ka����hC���EI��=�2@h���{+zTľ�S�Ҷ؋�
�k,�*~���|�A�ǚ���B��{�sçn��>�|�+73uj���q���t:��� �.��4ҫ~BaOy����S���EQ�:JK�4�����EF�g()��+T)�GOdŚ1>�;���בֿ�i�ZQk�8�)�I��֊�L�8IȻ��^w3���߽�ɱ�\�u;x��CG��C
�"�9C�u�Π��K�eR)���#�c��B��իؽw�����/~kGpy����
�D��)QU�=Ή�'j's��qB�A�a�Nb�Pg y5<��q.���%�����p�0�:�k��*���[hLTp�+/s�(��o>�׾x�h�DV�^�
��)A��9�E)�(��~t��釹�����sU  L2)�4��b��U'��v8�\?��Y( z:r�{�B�;�㈃�p��^�+��!����LLLP���ڳ��G�Q��H��|��{�q��_?�v��3��pO]ݏ����nQ�q䒼P��h@�,n�VP*F	�������=�7��m��?N��8�Ro����,L/`rO%(<��0'��dw�<�R"}{�~n)��l�����������A��{�D8�u�7��������`Y�vi��X�4={�w��B<��6��=忓�5xgK��e�t�g�r��/?u�Ȼ�g��K�G�,�$�){8�r�%y�bڞHJ�u`@z��%�O�s��I>������<��n�N�"���CT�:�����J��ͫ��q�t�HO�b�	��\�38�lBI��}���A�t( f[S�:��W^ʿ��^�+/%��8�Pq ����J(t�yE���E>�7��c���8#'�1�V[�I-MPZ����iQ��8�I�ܻ���8��5�s���2;7K�V��/&��Օ�E ��pv(��&1C���]�����m*iB��8���n_�������X�6�d���v$\CNxf[3�^<�%�o�w��}��yY7#�y7#Jb�H����?����΂�
ۘ>5G-��l4����bѱ��g'��]�Re\��_�������R�������;ء>;���?v�+#�l��ڧS<٥�<h��q�X��S3�yh�\u�U�]�*$e��q��)c�<�� �|���qҸB�
��&v��{�V��~܅���峡���������ʈ�%�Oy�p�����Μ�"�RF�c!%�)0�}{�s���b��}t�$�F-nP�W�U�;L[���J�~F��r����(�B���A�i(�5��:Q��2��y�h�D~�Gy��
(�-�)k�ˡ�G*�P�t��08�$R���PD)-�Z��夂%p�q��/e)�~�9b����yp�e!��3�D:����vB�
)d$1���Nr�]���]w�|�v��&V	#C�5W2TB��N#(��ǅ-�Kʗ�x�����%J�C��E�Z���"���P�j�B�^EGp�#wsf��~���{?[.<U	|�N�!Jutq���D�AGrx�	����rӍߦ5�1:4AU1���Bu�E֡�j�
q���3B�TB�������#�8anv�Z���G�f��sY�i%"�آ�����{\V��h��nN�>���(B�<+Í��9��^���z����o��r�!"A۵q���^^��KC�w�H����,����������q��KP��N�#Z����x�\ ^
%s��]   IDAT�33�8��S�d��?�}��Y���.w����_�_#�[�>+��u��P�"fggBj���"�z���V�\ͪ5c
�B��X�ԓ!���ǉ�N��.�T���N=��g��WK���opd���kBADN�,"�z)o�v;#�*i%I����I5�#�fq���#�ٵs��ǉ�S�"U����ZX%�"x�
�Q�,4T	��=Ll�w�tc`4�{V��.��b|E@��2M��JȲ�Q��%�5�w]/	�e�� �S ~f���-��O�KؑH��ؒ������$&
���|��PN�ǻ�K_�ģ]QLjq�];��7��W��
�������p��I��a�Y��fm�4����9�����(�s�%e��D���@YЈ^�:�\��!����^$�3������<���>Z��w����=��6N��t�[�<G+����F���;v���$�}����h�BxE{����z�F5� q�<u�ٙi�H�|�M����0�A�(�X�$R�X�1�14<�Ԋ�'�a}�Em�>^�o�BaH�A;l�Q���S��:�֊n��w�Z}�}�5����|`z�L��3�����.x�5/����2��/@�aj��	v�r�u���6�:���Jf��Ҩ6���	�/>'���_��p���K;�ꦝ;v��;w���
�0�N}����:��s]�ԺeO�O04���v�Q����Sj�e��G1d\x�V�u�5D��eA��z�*�2�����mC�2�����9WZ�A����l��e�z-�xܸ�%�@!0إ�I��}i��ۯ���{�-�(A˄���Z�6'X�j
B��L-p��I��9��w��w=���gp��ѨQO�R��^�����HY���Y��̣�o.t�A�:��T�
�Q�ȕ�=R*��e�}���>Z)�D Ƥƻ��rJ���p����|��J�+�n8���j��7;��b������e�u`����������o�k���/~�F~p�8|�(���H#+i���"v�nA�Y��H&T+u�(
n qva�[Ǹr%a؁]�r���J����v��qi�P��PJ���ȩ3ǙX5�o�·x�o]���;���2�/�R�u�8"N#�˭_��O��g���?�h;jQ��AI���8�{�;���׼��;o3������4����NFWH�*���i�u0��H�V�QBa0�ę�Z��u�V�Ԓ��a�������h����;zSW�ku�k��/_�	?��yzM���'���б&6��C���8g�*�)l(Z���r`�A��?��&�
��(@��N��P�$�ᰤ&��p��N�HZ��j�=;N��d�G~f���Y�;�@��-���o? �}?��s� �C,1�^Xdxx�n^�C�Y����]��<̊U���u3:���NH�c��;x�c�N�� �R�q�!�ޗ��Ҏ��:ɟ�z��~?���� ����¾���L���n��'H+	�:��8N ���bI��9�tr"��iR����'ٹ�az�~p�wfq�F���4D��(t���܆�\ЃX�9^&��}�ņ�~����k�^����}=`e�C��z+	%{��4G�J������C�����<���PH%p�rm!w�r=1��-�ס�	?�	<%	�I%N����w��~����|���K�������Y"324�����F�6]���n� ��$M����NpƗ�t����ua	>̥ߏ8�YY��Y�,�F�(�i�Z�;DI�֋������/�6�q��E�߳��)��HD̞Z�+7|����'س�1F�TT���d�DaL��MǼ�W�;�>���2��>���1�244T�(I���(rZ��(!��X���C��b{��ٓlڼ��kV,���X�Cނ�Ȳj���p�w����0�A%���r�ue����A���ڇ'���+�V��4�L�4g��7"�����\
La��k4���ӟ�,?��V��C�v8#I�
󋤕�(�t�6��g� �Z:o~ﳏ�Ƀ%���OY �ʭ~��������Ǯ����R�T₟t ��ȁ�c����qL����@Ԛ��caf���7�r�$E��,ĵg=ã
��#<��^N���RI�ޢu�-�*q�pg}8��g�t����=����\ˏ�ޞ��I�B��,t��Ӿ����.�ܳ�st��F�d�[�J�j����n��a2��!H&�1���F'�Bq��I��G|����c��>1���y:�CG)JDH�^#��zkr(��>��z�-�����|9w�ڻ܃�1����w�� ��rrR^?�rU����!�B&�+=����cb���[�0 ]��K��[�*�Ta�bB68:�a��K��hO��7��{�p�����_����/��O~��S�XK�>�pu�#�h������
E)Q��T��cyaʃ]�W��w }ńp��L%XA�DX~�;�S�W4�isr�8N\�W���o�ſt!�I��B���'�jj�G\�S��?ɧ���\��/0{b���8���}�w���Rk&=y��g���
|��ώ�&��"�4G��ڷ��ǏШ7�u����	��M��!��$��N����	6�}{��r�J.�d[����n��;A:pK���|��;�[�����QK3�K��qX���C���������"�E(��e!k�W������#{�\g0&$p������ħ?�y��I("��H%y��$Q�p� +��� ���f7}nן���P�s��Y���g}���y=;ء��wZ�z�Vј���q�O�� 'NK���r,	�O�b�Q���ѝ�9��c
L���8G�dl<
�9{���� ��V��Сn���U���mu� ��ݖ����e�M��2�߀<l�{�잃V@��{߽}9bɖ�Ï�裵F�8�tJ��#X���H�2��hY��.��S�0Tm2�C�p��)����>v�hG���u���4�>p*��$���F��4�
]��7�\���F�v�_XJ)��ܱK��j�˽�t��|�-1םpe�U�}��
��3A?ٗ
?�t��
Cn��XZ �X�p&����e��[��i
+�;�������'��[?���ɍ���۾y7�=zi֭����jbQA��iQ�gD麈P*�MH�
z	�<Ε׏���2����R�8�,E��R,�D�*�!���Q����<��'��W^�o�ֵl�p"�E�JH*q����4Y(��c|��?��_����U�Ԉ}�$N�'�cT�+^z1���w�7]��l���*V��c���?�XsiC��ʄ��#㘤Z���:J�2LDE�Nͻ9'O�撋/`Ū`��bMQdĉB)�3�������������)*�B�2Dg����8DQ{�� �/v-�|�p)�>|քh�<R�Xi�<�[tAy|d��.gfxѫ^���`duB��(�H��v(%y�G��?�$��fuM�	>GJ��+�R^����%q��7kz;�s���]�^�#��N(��>[�T[A�!(G¥`&牤&���cC�l�dL�iE!���Y��N=�c{�P��ȳ�=��&�X�%*X.�ւU'�E$K[��_O^<�_��	����Ki�r�l�e߾�������}��ab�\�[!����B*�=Mh����5���/S��xl�!}h/��� ��AN?����D�H����}N�"��4@� >B��k�J(tie���-/�2�؋��%�[�������Y�ܝw%�@���\_Ⱦ0ϗ�����
��Сד1RD���$��D^�����e�D����[��}���;��'��w��]v>��#��Y(�dJ-iP�4��
$��� ���E?MN���%���6���l�02��E)(
���&�{өTr&\�So��Mƙ��T�Rf�ٰ��Ç�=�5HVX�p���!�&L�������}����{hTGh�Fi�g�*�V�:���I����nr�/��w��\~�%8U0{�L���"�9[�aaj���{�Fe��k8q�$EfX�f
��D�e�ًN>|��$iʁ��|�E�l�6�1f%&��:�8p������Ѓ�D�����:<�(������	����_��>����t�m���X�V�ř�)�lX�\w]�y���ΕWo��0�@�`���<��G���|���.�+�e-�pY��υ~���'��{�KTE.��/�����������/��p�_��v;����������7E*ym�r+~�ŋ��܃[�r|�tĩ�g���_d�����Ӛ*�k�Ҵ�9�Ω�����#����jt5��mF�G�;��&���0&[>�(�[}����s�%=�����c�0K"�e+��j!���#>{�K��+�GZI�(
�\c(L���<gNO��c���d��\1��-ٶ}۶_��M+I�ji-P�㰽b#.M#(�/5j�K�_��g=�^Fa���r����w�'�a�]R�
Z�޾Z��fxE
&X�.]3yX�GB2st��;w��C���=���,�N��H��$)I�P�5PJ�|G��?n&(zрF�f�����L��o�A�A�7 �X&\��<�Jhp�4��i�?r���Z�t���5��R*��v�y�{D���^�b(б����`���
�y�ռ��װq�Zd")Z�$�I*	�	:s#u~���&Cz�/|�>|���֑w,g�N ��r�q%�H�˷��:�hr�u�傋7���}���kI�j��e�D�۾�=�y��خab|%EfÊ-B�(p)�,�Q
X�R1<h����cKn��x��Sĉ�ox/{�%��+"���2�("_�����q�w�i�f*���ǣ��O��uR(ilv"���������3R���;�!n�V����n
���ğa'�Ǐ.}�e?W^�p,���*=y��.��j�CQ]H�X�~���q�=?`��VL���ꠄ�;0y��Q_��Ü�\IO�.��<S���]�_gB���˝����]���`i��Ҟ��s
�$Z+
S�e9�{*�
�z�4I�Jal���<�vN�[�g[��w�;��n��|��wq�]0{�������XU��]��8(�y-��z߁����`�����`98���
��2�AE923l�c{4CJ+#!��T��Vj�K�QH�QN#��v$s'[�}� �߹��o���~�|��_�7�����f��,E�"�D19��ё	�8�9��.�$q�B�=9��c�w����(�
���[����C-�(��ܗ)�;Z-��Hk
I3==�·wq�E�26�(��g�PE�\��S��evf�Gy�(
]s�gԚu�$���#��8�{~����_ɺ�k�J�3(�$�*8(�oAE�ZR�ԁ9~t��̲rb%y�1={��#��'Y����f���:�����i����m�Lဤ��-|�K���/����ǩUT+u:�)b��>��G��kv��^0U`{�xl�Ro��:R�D�-:Di�^:q��^�2>���b�9�r��q� �$��|�����?}6�C�&V	����a�}���{�������������Y�~.�[����q��������WVU��<EA���$d9,�]/�Q���̊��%ٳw/�j�K.��o��&��U眻��e��w09:A��hu�Te��X�J��(���9, �Rǻ�#D����(�d����;���5�̷�D�}"�S��.E�c�'M*��\C�2�	Z�8#Y�kq��)v��ˣ�����<p�����r�]r���o�!N�f�D���]�!�����*�*�ܧ�q�V�DF!}OF!�7�5,vQ ���(J؏�2�Z�a!�Z��L�ܙ�g�L�g����u����������捷rӍ��[_��;n��{�w?��C�8r��$�����C��+ä"A��8"b{+���T�Ņ���jX�Q����G�-Q	�_6%\z���>��|P7"U��+�r�n,E�q��1LW��͌�WA�Q�
��T�Ǵ�ct��W����g�r�Qo���'�.<�w��-��m�����PK����*$[���R�B[���O�3��09����Y����:N���F�$��p�2>1���i"�p�5"�錇���'>�i��:���J*�:E�pT�C$qB��s��������H)�,kw�\���0u�R`���cE��C��~�V~����/^�Rᬧ�-�zʁG�����޹�
k����;�����VI�pr��ϸ�`#�(㺷_����:ɤ�Y�~�V �U��!-�.3�'��J�M�'x�E��Z�w��9��\�z�Ia<��(s�f��Ư��-����p����4oy��ٷ{�~�{��܈iH�V䝼������a�_<�_�w��������Y� �=�(;������OV���1t�4MI�$Ľv:A�'��BŴ��,�0�#*I�t��x�!�@E�٩�<E;�RC�&4���O�322L��P�D���z����##�5�֫T�T���$
:.�@G\zM���X�5�ҡ�˸�<+h�Z�#kf����cn~���y�N��khʹi-t���gff�V���!�/�	iT���"�r\^`۞���=����ad@s��o�\X���
*ZO�ߐgiK���#�R��{�~G���yQj]��gJ��HI�zu�I�
MP�����X�k��F��+!�N��c	��-o眷m��������9|z�Z���/5��wr����ɂ��tT%JS�P���C)H�*�'���ջ��?~�C��zl
�~�%��C�vʝ�._1�p�_�8@O#ãt��N���e������_���,����u
��n�ɻ9���V�V�B���{���l��=�_���/��]�a�AJ��#�س�]o増l�Y�1g3�$"�	�ٜ��˗ٿ� c+i-v�$%�mI/B�s߳��g��xgs��w����+��y;�w�S~}���o����^"��l8����_���+�G2pɁ8���ژ�����?r�O|�l>�?P�WI�q%�L;c��1>���p�Ü>1���*L���.�U*\�?H��#-�=/?wS|�����[<�S��C��~�z�'>q��}HDK�o-�v�5iZ�Vku�1��d݌jZa�9�R�,�hw�8��""�Fj�x�o�Y��O�s��i���s9RC%NH+U�4!Mb�8��=P�TH�)I%1��5P�0�t>\��f}QXcp>��0�a�P�d�n�63��j�8��N06���a�g=gCP��*���8�x	�	V��)�*�h�
ySz�a����7r��|�����Y �0�@F�a�}�V�B*�u,t;LL���0���c���53�-_���X�z�׼��$#�#|ϞVA��Skh�z�e�<}��S'�:=�k_�K���c��8,����T�`��$�E�5����+���ۙ:5˖�[�hfOMѨ5Щ���eQZ�M�5�N�A�G`�t;9�nN�:̑G��[w�zb%w�~/���w�ԙ]�5��k�h�J�ڭNx�.� ����.?��{TO�����m�$a���X�,఼����eW_���������6�x���o��wo���Z�fe�SǦ��d�>�)���	%���e�gԽyoc]љm��
����W_�a�Ƿ�������<�;v\������m���u����M�
!�޺�K��ng���K]����ch����ܝmM���>��k�`��Y��1�A�
X�m��>������F2����k�
c�pp۾��{p�e�翞��`Fx���e�|X����	������׼w%�! p��=���ʋ�D�J�(Bk�����x���x�N�"��DI�֒n֥�ui4�PJ����� ^W�H ���Ƅ��<��U�l��	lobI�7ɥՔC�+ .�cH�H���U����K��hj8'C��s}r�@��F�)tZ(�8EE*�\.�c�� $��gM�*�ֺ��c�M��=�t����#�2r���WR��W���"�$�	Zj�/��������LQ��d-�tZT�5�Y���N�~�Z��:Ȋ
M~�?�+����[�HBg�u��I��w�~����X1��_~��YY�v]8S�.Bz �

�LfAp�]{���_涛��/<kV�"U1E�����
�32�d�5C+�P�+T�8�-Di{�YQ1���Ԃ8�LϞ��m���/���|����3Z_E-�YKn
$��P�8�$t�ֺeO7 ����I��\��E���*<��)�ι�%���?~��uCdyAT�E_@�j���������zh��1RU�3_��+C���^�%��gO�����;-#�ݷh�e��'Z�s���l�~��;��ٺ�[�
c�+�����Uۈ���则�N�E�҂8N�_���VȲ�{��/ًY�z�
��w�D�֭!�8n����LL�����|#�E���i�N�y���� �N
QJ�{�z������4��-K�c���x`!uIe{�'O�=�y���J��	e�:j�:�����,�9�(�zZq�B\���"/�E(@��{�Gz���X�x6�;L)i��
��N�2D5iPKjT��N�T��i�e�VQ�Z�-""��$��FU*q�jZ�ՈdB,Sb���XU���!9�)�+|ώ'�Ϫt��A(k�'���qxr�S䆢0oR�uTv�!�;�c�8^�˙0�S��� ��G��\�\j$������(�}��GZc�	L����7	"LotD�����c�q�����x�nS���Z���?�˶-���Ca��Ѡ�֐�1��C��f��5���r�y�i���"��*vx[�"/
�BҚ-�������_p���g��l͡f�g����Z�'y�ŉU4�u�Xc���LaT!����j�j:�.󋌏�3?���w����<��m�m�D:�'�v;]@'q8����iR�4��i zP*W�re,)�AF+
f[g�v�V~����9�&q�"%Y��Ropb�����p�w�F!]L�5T����nw��E��D,iӸ��	�$�̵_�󗏖�7?w`�sz���A���wa��gb��պ����e;�t��x�nM)�(�Z�2?7����ٸa3�7����b�U �f��s��
��?EQ�h�j/RI�XKI5M�t:�yN'}���_?�W���u��\ɲ,���F(bU�nW*E��r�^>#�5_�)G�R��rQA��yy��R���B���E`�+����<O��6��<�3P�Q���r��=U4!�����
)B\n�o/�xWF����ҪeD�"��c���!(&�1Zƨ�@񻥏UE*䤗�i�$ނ3`�@����� &��Ȇ�XH����L,�}�~R>9�M�ɼ)����N�O��DiDa�$!�
k�L���(s��[m&W����p�q�n���KK��K�$(�0�"Jb��"�Fǚ:|��N������ob��C$��j㜣RM'B
T$ё�����l�$�BPd��fNe|�7�^���ƆWP��P�N+�(
���hwZ&ChO�ڼ�W���ߤ�hp�wocvv�����2)S8��$Ql�y�D2To�D�5����֖�<
Yj���;j��!�Y�P.hT�RX��d��4G�,���
QAR�y�~��^u!>qt�� �Ԃ(��9:�'��:n���t[+����w���yߋ~Wy����A� �"�j��eIV�,G�eŶl'q�$7�sr��\^�sor�؎��r"[.�lJT�$H��)�X ��ݧ�m�u�X�̞
R%щHq��@`�3��y���+S�H�Y��Z2�ȍw�*;�b�8
�se�]��nz��p׮�~��4��?�
 �m��zuљ��;1�}�V��-2x���
,V��Br�zfJ7֒:a3{z!���>ݦ���-a���#n���Y�C=̝w�Ik�����s����ciy���6�?� <�H� 
4J)� Bj�vϊ�^�������ZaLI�ߧ,
A�AK{)�Nc �=Tmly��Г�c����B�_�Ө�]������j���r$Y��H�YzNT�_Uf)UV��C�Ke�W��
�ʝdU�P���'E���������j�|ǉ�Ⱥζ�t����n�:�b�,W��y���"g�~
�=�-D:�7��4�	G���˝%f��=t091Ii,K��4m�����R��+)誸�a~s�oZo���X��$��04
�<�ԙ�h���sI&�����&�C�8j�����8��^�Vf�"i�y����n�7�Ƒ'�+?�.-vh7�>�"8={����,-�sr�$�����[��/�a��[x����	��O�Ea����TU�dY`Q�u��g����>x��'�o�z�>zJ!(��u�t�4��8}��x�ɹct������-^�既��_�	b��Hts��w�w�ifO,Ҫ�i5Ơ��)4����Ƞ8$��pVH%�-OK����ӯ�}�������
@��z�~�ow�]}������<��C���d�"|Q�^+8��<ʒ8���gG�"��n�L��~ғ��a�%1��>�ѣGh��	Y�"�����e@=�QZ�|�=���HCh��'�(B�O��R��Qڢʰ���q�%��p��t��� $�b�1�.\ȳ�N�\cb���~Z8�o4A��ix�X(�������� ��?z�I��vy`��U�zx���7P�ȳ�A� ��m�]��9Q��>���Q\��P�%��]����}2�=+��,C)�x��Gؿ��"��:9a��bА�Y�'3��Ks��ԚIf�N3�0�r�C^x�Z�V#�7(��@U�I�Ic���*�D9�߿��E�Q�!�A:�/����_wҊ�ʫ,���*��7^2�Ơ�&N"$��������M|��[(z�f2�t�$�QO���=��1���r�C��q�:�_7�?��U/cjC�,a=��籴����Y��Q��G�$�]}��y_
��*�÷ƿ�4��� s�,I����DqL�QgnyJr��ʒ̥�Y:�k_{��׿B<�1��	C�+ ��=�(���؞C4�1&ƦP���r%�j��*o@���򽞽��!u�2T�d���{�䎟&������nw=׫���bv��UK�J�`\ax:��a�~��78\��~�h���y�pe�X\\`�R�Cο�"�zD�lp�k�1�s��grf��x��Ǐ�f�Y���"�j+������9 �T����1~/�CJ)
�S���uĵ��g���-E�(�ZbL�Tl�i����Ρ(K��wdOj��>Ӎ$�W��+FQU|1UN���CrvP�
	���#薓?�X9y+��8�؋�Zh1@ �z�Q�v�f'*F��nO���+�S���D�H�E*&P1�JW��)�KA�Y$
K�rw�Z3a��
���_ˋ�}!���#G��n7��ZI��Hx�w9�B45�|��KtCzu���ss�Ǔlڴ�hRc��F�X��Q9�)y�P�p���n�n��w�j�!R	��ZT#B�0 �S�4�K/[��Kw����7x��_Bm"�8��(����X3��G�<��S�����L��ZZe��D!GP!�VV�Ҳ"����nU��h��_�i���eJa3��2t�����]/�����abS��b�K!�И�$�f�-�?�0_�ҷh�Ӭ�\G�#�^�5�$���_^R���%ē��g_�?�w&Ա�Mz�M������V4  {�����'���;Ο��eZ�����[��C�VP�ZiLY���IjqB(N�>��㇙��f�έ8'�{I�p�H�ff�8�����8u�$�֬%��q�z� K��H-��x�.�J60��ҳĭ1,w��4�+^�R^򲫙��`�MJ?�}z�.I�g��yN?��K�^��RK��"��Cj�*8gx�9��pC2�`���j�Q[��V��m�!�(U�L����rյΓ��[� �U�,�o��h���{px
[�pV�tC��-��C� ���3�Z�D���E�+bE��$˽9�,�`9]d�浼�o���|�ǋ���sy���x���RO�-�BW���ø[u��tz������{��RZ�6�Xt27?�����UW_�̆qLn}AU�587Hfԕ�Q�U@�c������r���2՞b�5�+}�r������p}�����.����k�x���>6��K�Z�1�aj|�vm��'gYXXbyq�P����X�������tUzDg�	�7U��Rc������2��l�ȋ���gh��T,89{�K������l�d��IK���!y����Y>����:��5�A��rϿ� ��h`��(J��!WO*����Ӻ��R	g�i�_�œ���4C�Ϛ��.����*@���d���v��b�Zc�N�T��z���G8z�;�=���NzyT Љ�����₋w����v;J(l)�N��2D(U麟/����97$�d?M�,�Y������*^��rՋ���s�05�&
��&/�?u���Y�8��nҨՇ�W���;u�F��9U�~�rg�EE~�g
�Cw9��wO�Cz�J>�71���,(��`����)go#��O.���Ί���9Q�'�
�cAV�tRH�qt:=��X���9�t���������7��_y������I��pc��c,,���(+X�'��6�=9b<%��ݓ�^���AzC��YV�y��Lml"�]�a�Wq1�i�@͗?�����߳e�vn���b
K�CL���I�p/qM��7������afS��4�j��}�tD����:��/�H���v��h�/�U �fNP_Y1�n$erpM�ՙΝ�0�*qQzS�P��)��t�'�>��L������U/��<��:@�Kz�}�$���w���Hއ�3[Ȼ%6�jk,�Z�@�z}�u��5otd�

�

�����ߴ���i���U
�S����W���'����#�F��،CE��(������#����.��ֺ�U�2H
Q0=9��B�[�}���HBΜ��Qo'	��W}�Oz��~��m�
|�^�.(�������*v���ĭ��-3\vՅ\u�l޺�$��;s����R^�-�ٟ��s�%C��#�Bb�R6��Ci���'��>\`*���	ޭZ�>u �ٰ��W�Ю�>Ŵr���w�ʰz�]�����U��T�?�r�߮�m_�D�V:�c'�4����p��g@���.93��t�-���W��_��w�_~�����S/��:�[?Ñ'�s�=��15� ���Wߵ®j���4h���:]���� 
X�~
߽�����7���ܠ��PU~l���J�"MNw8~�8en�ZH�H�l���	�O39����|������`y�CQ��X#���������eT �M�������J��f.7HĬ<Qȃ����zM�P>9RX��2l�$��{8-P�f�A��r��At������7�8H��稏%|��w����̟^b��&ʾ��@iB'1q�P�%˝�'|�Jc�<��.�v�z��\��2�y6A�Ϫ��U�Ή�^��<�J�m���?3�W�Ι��ZzyXRG"��)�)Y�.3>1A�<��1��.�I���YJid(X^�0==��M�y�����!�⨎T��d�&F*��r(v?2��gy�gh��e��9���������K�݁5��l�G�ٴ}=]|ox�k���kY����ˣ�����I��eQ� 
j��<4Z�a�&���]�A������`h%�z�T&Fd�g�ޠi����kyEZ�TR��ݭ�����=$�1�#[���8��(g��˭Lw�z*7��mP����V��?���O� K��Błk������_�oy��E%������Ё�P(N�>ɱcG�(t�V�lOp^�0�4V bU�
�P��Z�I��dE���8���.'NCɐ-�'��IwRU��J���w0�6M�~�\�{��8x`?�F�Pk�"��Of��I�����
�y-I+�K܌�L���j̈́$���i��l����7��i��`i�K c�
�fEA%Sü
�)��JVt�0����'>A����!)<��i��
2N��7~�=����NT��2E�
�
�^N�\r����ş�-��k'7�]D�+��q������>7Cb+>CزB��?h1嬒ZZkN=���g]�����u�|E��B�:��/9l VE���$A�)�0���O	Mg	��V�ə3'���ÌO���mH)��+�J�����	v�w>w�~7'��`�ƍ8[���HO"*��[�=�1��֟��o�ߗj�RR�U�JP����ױv�Ƥ� %qiA��
5I+�ގ�x���u����p��W'!�gOr��1�Y�J*!ͪ�;B����`*v#�1H�P!0Bb�(�`��;H"�r!tT!4U#`G����&�|����z�+����|��@tFM�F35Vo<p�*H����|��=����F]��>iW����a�#�H#�%-z9����|�u�9�'��r��I	e�#B�m�C�^;��#'���{hFmz�d�
���ab�1�r �w1+r��(�"#+R
SF!�n�}{��e�V�m�L�/ѡ��N�j�$��z�$�]7���u�8y�c'����d���^�R���]^�K�M���\�)A�#o�lDg)�'�����}�ä���I�#�Up��&Y�~�J��Y{1U͠��O���\��ʋ�%*���S,�fy��^�{~�zk�~!��˕�(�s��i�������� �m=�+�����5k0�$�s�~��,�J%�@��Zg	xʕ�S���(�U銷}�?z���?+ �]�������&�>�����%>��t ��Е��R�C4� ��^'Bcs?Y��M��9p� �F��vn�(KG�^��EY�~��S<��>�l	l���<:H� �r��>�z�@if�N0�jS�EB!Fv�T�S� �kŝ����& �s��dH��؟����z�|˵膣�Kt-���KT��?@�#��@@m���9\p�v.��������&������짛/�[?�#Ђ�Xr�(-X+P:�4���Q��j��]NIӒz���4/�B��J����k=�;NT�|B'�q0yK[��7PQ0�nB ��C<ێ\0v� �'���
?v����7�a�<�H;�EJ��({�8�T�w��9�K����H�,A J���Kj���i��C/�35��-�!�<���
p%��@cJCc�A���~�
P* +
"PH�Os��$�&�^�eP��^}x*�E's�/+$�I�)4Y?���=���Zv�p3Y� �5�Ð�=/
�O��r�M��w~�6���wٰm#���_���~�_��n?��K�z�y���D��.��aB�b���������|ʹΣ41}�@���>����'���
������!�B���9I�Ш�Y^�R��F�cna*��I斎��W��qï36դ�
:P�3�l)xb�!n��n��^�5	D�$���3$B�U���\�r��!e�k:7�>����.n�_���?[ �����z��ٿxp����:����������*P��Ǥ�� �R[�!�E�4B	�fY\�069κ
k�k��N0]�l=�"{z���Y&&�	�:yn���,�R ڍ6����ˁC�@�V=�s�N@~�p�&)��f�	����a~~�����Ȗ�֑�*��!/2�t�3ҥ�8i�d�(�9d�hN�9����8�_����nfr��P%�g�pb�ݴ����lqL��!����Ӝ�4h`�C*��!�,���Y֣(R�P�j��'	���~���o�r�BU��]	S��I�u�jbG����пn��6������H�,W	�պ�"�&0y� c
Y^��Oד�T�Z���)�C$� YTӿ�i�}�`^H[�9�V���EҼ����gb}��c�Z`m���ʽ��02�4ZM�:�C�?�Xk��n�ܔ��r���;#J��;d� $���=�V�b(�'�9��$�s��Ü>��;�c����y�-J�X��}�O8�ɉ�!aMsf�42������_|[/��G$��4��u�ޓA�愪A1/�k�|�o?�-߸�X$l�ڈ*5.���r�����$N��k�;-�EDU�%�J�Uh4�@��h�	���)"M�ӷ,t���/��/�#�ŕ�E`+�c���%_��W���?��l�V<A B#����w'�!���|���v��C�(�8�U��-�/�ѥ�����.�M=���p7��7�_
K�.���u�
~�����;��rg}JjJS��w|�����q��i������I�~N��H)ɖr�(b�-P������]j�6Y�yހt{]�RLLLb�eyy� �Csu���<�&��
����]�H�>�zdiF����	�Xf�gx����ޥL)M��M���3 ��F��P��w4�u��Nr��s������ٱc'I-fvn�#Ǐ��Y@�h$e���i��[l޴���:K����BMYZ��BiM��7
�Ca!�g��z:$�z`Uj�_7�
]�L�g�T��>z����B�%�
��T�g�T�Σ­��D�'�"�J�����(x�*�De$��/�@I<y�Yof,,/q��I�l�̎��|'���
h�b��IAc�Nх�_��B�5eI\i�� �K�$��%b�~c��CY�ǃ�)YY9WΎU���G1����gl�N���H���.	��VL�Ls�5Ws�_��-k��Fq3����,�(@8IQXj�&���'��'>�9��N�SlX��HG,/v(*���e���X�\��J��CK:�j-"�@뀢�FK�v'`nq����l�'����K�����o���-�3�$�>%��/�|����K_�*��0�ک
��:��>��$I���49����X�W'\&�7|f��i��N6  �q������N�z������O�J�BIV��P"5�:u�3gN"�b���Lϴ����0�R�&c�n��©��^���5�F*��$	RH���1��QoRZ7�1�dg����#�~� 1�o�I���,ˈ"y��9RJ�=�Lo���ÂI= �(��z�g4�B�t��A�OiqE���~L��֜;�E/���]ζ��شy=�FB�w�v��������,�+	"�)�h
�҂�QHz����0И������Q
M���>ϖ`
AP
��&,R��͍�����vUB�S#�w���Y���Xx���4��@~^Q�U�PZ 5�@"�'zYg�H۪	��e\�g�ZQ�ei��t{=t���:�9������L�-��8D(
x�}Y8t�i��8����� SS���u:�n��x�{g+z#���F	rTDP_-U%{S�fL �R`�%$s�t�lۺ��d�"+���5�:�
p�2!#���ذqS��H!}R����>Eah�7����z��7�ͧ��o?��9�PZA����ߕ,���������Vl��(V,���yNE4�ZdE�Ro��%��2GOd�[����u.��R�ł�ښW�t!��$_��7��?��8v�q�`����1�^A��G!������̬(��T��2�ן��ǟz6B���`7��.n�_:�호f)��ϗ��!���	�,CiE�D>�K�D�AH�<�ȣ4k
.��B!�}G8��"_.H&���
[::L�eh�h���@���L�Ϩ��q���j��uDN$���gp�[ �qL��`zz�n����'i4��iʷ��mn��v�>��C'�,v��bl�O�a�OM��8��D�;�B��B�!�p�`X��Pc�������W\������6�zD�H�P��-���ǉ〩�1ҴO���,��0�S�)�D�B� g-ea(���Q-|�Q����<k�!�R`+0�������0_m��ȝ���JBxv3�ȵ7 @�j�����,�B �Ch_JS�Y��h�
+��L?(�C�'o �e��%c:�&&'I�	��w�S-^r�վ1)} ��s��`��9�PW-���o�h6h����͡d@���9G��Ui��
&�79���6+�j�?���$qH�^g~�4>N\���mč�"-*~��gE�1%QX����%�V �N��x��_�[��l49��1>���o����̥4�6���
)��G��P�e��Qe68���U�ji}b8��8g:!(�F�Prf�:LL�1�|�3�'�z�F����&/�5���/}���:��
w�r?�������ݜb��:"�P�
&�^�!���9}��%�+L�������k�
z�����֓V=���Av�]�n�_��?|g��U��*����i�~�n����ZH��>�^���1gN����S�l?gZW��3U�)i�kq�Νdiɞ���Y�=ަ�ft�=��'H�Mz��#�B��z:��p]�s�X�]giJ���qL�Ѩ�`zz���)�����������oq��r��"����9֦>� ���*b%�f�n�Z�y�5a"���=g�	��t�����U�\��sֱy�:I�X�I��!�~���}��u2�-�C�R!-B	�-(ʂ8��a�
4a5Q+	Rz�3�"a)����w[�f�����z�����VM�l�A!��.�Za��X���c�^�>����'m"��<(� 
���'�ҧ=J�!:��Ξ!�.��"�n�򉆦@H��
����yA�L��q��,�<�(��a�0��RV��G7Wk�jW�*���郕�J���g,���O�̋�cǎ2=5͖�����À�:�(��S��G��5H1��W$̈́|��蔴��<����?~��|�ԃ6k��cRK�ˈtD��B됲0^g/R�U�7�԰"J��P�!љ�pqD�
�g)]F�
�m��œlں�_��_e�믥,2Ln�[1�rA�j3!�~g�����c�h��i��Ƴ��^A��(Fᑔ�2��V�@:[��/��So�?|����|Ҫg{�8xp����uK_ѥ�^J=a1���<E�G�^�8K�߭2�^)��A-�q��Q�?������܂���(,�"/i�4زi3���x������!�Fch:dJ[�g����K�^�?�(��j� XZZ|r���<'N'К����0�#�1gf���;x�G8t�0��KLLO�o`
;t8����TIhRJ�z�'Z���wI�.��C���l��[������q����w�>��f�uS��L�~�G�-S�)i�L'[��9B�T��Xk@UȾ�׺��L)LFǄQ4����ҭ3�G�]U�E����O�D�6 �)���
EٻᏦz
�V8i0x�[�|C�%B�0�f6n��(F���'k �yA�� ���361Ng�K��e��u�8}�^��K�{!:���4(囫���P����S���Wo��ɓ����v�YN�[�8�+��k�#n�����]<LΫ�c���0�Q����'��07˺��lڶ�(���"�W/
-�]��*U�P:�&��$��;��_~��|��Y?s�d��FP�_�J��'n���0@ ���e
v�/���I��J
#��C�
	Ғ�Hj툅�,�O�s7�Kﾞ׼eaMҝ�CE�Pǚ����|�;�s7��M�>�+%.E@ 4�8L��u�0<c����J�7~fϟ<�l��=' �f�N}��s�;�x� �J+Jkȳ̻
[c	d@��`vv�}�<����^��8��$7��┤9Vg�s������J�l�XZ����qmh��y*���[��p�g�p8���YF��4u�c-�1�a-�PD�A�z�E��D)�Rg�'O��~��<��W\Ʀs7��E�PCݵP�]z�egPZ�I (m��6Kq�E�k�4�:_��׸�h�mz�!$��1��G��Dnzt�N����1�ΰ�]�)H����GZt)L�uh�=�d��C���`�b0�X��
��ӕn��#���n�ߋ��/|R���R`��0����v�?�-(ˌ��1��z9$�V������W��� �� )EQ�1i/��f�Y����3�8u�������L�,�0��	���7L�k������Z~��s�@R�ժ�G�j��;�-U��_�U�X��'A�QC���dnv��.����&���*�d�Dh��M�𖓶4�8@h��G������#OQ�ǠQ."_Ψ%u�5�l���8㈢�4Ƙ� �QP7�+�jh�tVX���O�H�>hG},��)�Y�n���������Ҙ�c��0
�0
#�,�����O��W�M$�"]��Ȑz� �E���)J*�θg���r��ټ��5 {��d>�3�
�:ײ,�΢�U+�I�i=AJ(�R=~�����fz
[����q@�3Xc��0��s�������0�NJ�9F�>�S)����Ig�id�0��n Jc(� ��n����,q155���"���f�'Y�v���h�����+��Moy#c�-�i��?HY�	
�nB9�BBir��&.A��E��:��}'w�~/6��$I��8���!�_s	���[��������*^���p�՗r��3>5Ns�AT�(]N?��ϗ�l+����E�����2�09�'J���@�j�wf�vq�U�?_�D���d�;o>3���+�G/�>�II������#N4�FBk�P��Wn(�"X!
���[V��j%���;��֡T@���l��a@���u%y���/��BI���G+����V L�Zc<���=J�=(�0&�eY�Z�
\<�AN�q�5U/F#�@k����j,,.������$����α�����m۶R���e�^�3�u������_7�$�ģ'�o��/�����SeHчH%D�+Laq�[(�@��\Z�%Be���n�Èh[-���,�U+5KI)KT,X�-p��l�4�{~�ݼ������I�j� ��V,��������W�A=l�
���U
[8L�98G��0D����'o �+�K{�UH�s�d����]7�O�~�����{i�ko��^)���^���UР���Ph��䅑��>�S$��>p���>HҬs���<�8�;�2/	"͖������f�ŗ�����1V��ȡ�D:f�ڍ�X�[@	A=����=�@c��~���PYk����"���(SKG4�&��ў�%Z\󢗰e�F��9�\����E(бDQ���w T"B*��-��dl)���v+�lް���FF}��������W���s�p9��3Μ�����eN�ߧ3�g��"KKt{�t;̟Y��I�e}z�>E�S%Y���] �g��aJK�oL �"�1ACQ��!��Ѩ
�'��!_�%B���N�Ca2�m�a��u�@Ś5k�31=��t�F��V��ջ���o�lי;�A8h��qF`
֑f)a$i��,u�q� u��I�T������C
�5-��O�1��r�׿�-�}�5\q�>:WY�ZD^&'��k.��|^��9q�iޥ��rG��C8���ѐ&|#��9A�$�@��qE!EVT$�k���� d��::|�+ߦ56�k��
&�5Ɍ��~�)�����K����|�on��_��$cÚ��DkI��2Ѩc+i�
���g��'�Z1mZ��i!�����2���Bi�&'�}:K���DA@f���e�mX�[��{�+iL&�)$�ys,���>��'n�,����0�"�n��:2(z��(^abq^�"%�YJc�ʅ�d�U����A��7p�|������9��KEa�����A���MY�Z���&7B�\^f�O���'u$��<O j�h�m�vN;͇��c��/�
(:��H
k��s���{Qa�׿����ǙY7�!�K��hj�%�~%aV����o ������("�#�1t�]�0&
z�)R)�$!��Ԥi�5k׳��͠�d�K��w�����˓�s��<����d۹k	b�{�i�O�a�ɡ��Z��R�'��v
����+�BQo׈u����.9}t/��,A�QuE-�ؼ~ݓ_pe��Y�0wz��Gg���R�����Y\Xfn~��r�������@�'�@P��B)����A_�|3��9�v��_�r^v�5� ��LLM����V����yd�~�Qz���a�UP�_�5�x����?&�����AEY���0��%�*���9n��m�8+qK�[oF$F<A���@Ċk_�"n��n=v���i�A���d�>��&����Y���:&�c��>�&/
�<e�=F���ZB0?�D{�N�>N��2{j��}��L�L�so{)�h%�T F����������w���o�6��o�߱��SڭB�}C�[����b�]酕�fdά~o�/Mҍ�؛�Z+d��MF�Rd�P�C(C��Hk�����:����јLX�[$P��a��e��G��+�����$�
d-"��
�O0��V�ZWb��ov��'�;�r�ѵ.�������A�s'�]?������n�����HƷK)c�n^��9J������+*�^�]�u�$��;t�e֮�@�hr�����4������䖬(������y�/���b����MƢ6�f�S������j������� �����g�1(J�����TJ��I��E��f�A�R���]\v�����s�O�)La�����_~�c\y��\u��\z�N�o?��d:ݬGYdDݘ��fy��)!MK����:B
�2#��č ���Q�ø�ܖ�қ���aJ�i�&����Z�ʹ �x(�d�gY��g9���yI�\p��)���[����r8�{5�����nh�қ+t�(��AL����k/e�7�,
��P.8DX}_ұ�M��/��[����:�$$39YZ"�$n'h]���t;�J..��#V��{���Z���w�<�kM���������/��.�񱽌���7�ڒvS�(�+�s�����}t��Hy�:[VֲrE�0��U�ɩ5"O��+J��I��00����Z�S��3j*��g���у���g��Ժ�~��()2�)����_������w�o�$a�v}SB�[��h 
#�
�5���&��g�O��@`�(�(���ᜥ=Ѧ���-� iՙ�l3�x�مS�۸�׿�5����`l�Ng>%�Z��k�:uq���>����ҙ�3ޜ����oɻ)JF(1PQ�|gRxd�����*�i���O����wq�~?�
��9�x*>��g����+�i��:��~( 0$�@%s��;�<c=AL��n�ØhN;���Ǚ�ZˆM3����eA��<+v��d��
��]��6N�>���i�̞9C��[chR���%y΂ �'�'�t�AE<�D�����X�/���V^��ˆ��R�ᴛ��p�@qh�Q>���r�mp��	��<��=~�(��i$��QOb⩄l�૟��{2�Z�"�8+H�>�]����*.���Da0�J�+��!�ƿ"�I)��OhNZlj�Y%�RB�h�FH}<�1Q�5�`b}���{﹏�?LE><������DֈQ@P�c[JQ�/z�ع�]?5͵u�~�)��U~O��D�t]�n����c<��~jq�$���9�@EJ��9֘�K��	�Őf�Q;o��p���[R���˔G�����_y�7�),:Tk+�Ȓ�f�湕��;o���'�ظv�N��x���� V��E��Z=�R��)y��O{�ID�D,.."p���	��=M`%(�w������.��r�k�P :��3K������_�;o��@$�ꓴ�`��xƼN��a�b����#�t��*�p�,�#?
+*��$��с�֨���"���H�.'�Rk�\����˿�f�6��ϗ��Ro�с'A.�s�o�˟�
�>| WHB#�Bo�,��(7B��$d�B�?ι�L����o�����si���n `���߿w�ĕc�N^\ڲ��|�Ck���ґ�@	zi�
���αn�:��?�0���Ȇ�3�-M�zA9��5[�9o�v:��?���a���(�0��@H�1�T���7 ����Z��� �J��>ĺ�3��{���s'��
<�78����a)R��K���/|�D��fr-�8z����m|��o���'X^�aR	ݐ������̩"]C�%B��9���5/y��\|�y�@T�}�`1de�3�u�%q>��9�4ެ&P�j2��0�_W��A��S�|�������5��:�_'��6�'��� ��a1�����_/�u-W���F@�Z���X��Q�`�����#�|�ߦ��zۛߠ��֔8k�AUl�OtqWCQ�y�����؉C(�ѿ�4�ro�/����Q�7�I�Z�9��H��	f��p��#|���ٰ�7 8���0�KT�E
�9��KLL�Q�%,-/���Q�y��2'�}���Rx��C�,���=ˎsv�l',���|�����,��h�'h�'��c�\��d�W!I�kJ��������U�;{AT����H�]4�q�5�3�.�!�+�S-N/����Q6lZ�{��+��ݯ�9�v
E�����|������GY<�!	���[R�
Q�T���I� 1s%���C�2R��o�ľ?|���Q_8���$��9� ���M���Ή+_���只X�C�O:��B^~e*�p�����ȀV}���ω���q�v�֍cRG�[�H�g�"+���撋/"��y��}�:q���)�K�]���M�M���M=� <�o{Vsi
D �V@'[��/��7��׾�č�O	B���-Y��AН����ݽ���Z"G	��)f&�	'���_�:7����G���G5�N����A)II:�2����z9��_�u�VU�j�g���E��	h�
��"�^78��렁��pa��t�9u�4_���,�-1ޚ�)�rXd=�~u ��2����� Z
^���K6UZp���E���DV�W�D315Ƒgx��C���������^FB	"�H��wx�Pw/��OQ�i�kG�	����5���|Y���V(!)R�xd�C�}��3Da���W��Aք[k`�U Gk�A?�27{� ��;4j5�$aqy���%@�q� ��,
EaH�l�Gr��)�!4mn����������a��&��aKA���ga��EQ`���M#ſZU�Ѵ1��^�>�)��H����Z�����Y%͉:��q���m��ݿ�.�����1ӝ-p֑45ag���/|���Ս<��A����4��N���QB�C`�����c��]��Y%�rΞ2Q�ޓo���!`�{�x67p�<>���@���ầ��Jf$�|������(�:K��#�"�
I;)Z��7'��GNf�����8���A����bY��kۜ��|fO�r`���Ѩ�P"$�ւ��Ǽ���<� �
�x�PQ愉BF�3K�hO5x�?z;.:��au�㞱��^Z������}�œ֎o���^��$��-C�~ɩ���[fyq�Z\G� gD%
sH
���̚I^y�.�m�:�	�B`��W�H0��ZW��YF?��)����X0�C74�9�>���Z���[:��u��Wh�n���Ԏn�a�9ky��v1���uPR��/�A�C�@���!��W8j:af|#߻�!Μ��Qk�qe��JVaGe5=�g�*�k�G�X1� ��(3�����8���x�װ~�lnI���/��gG���Y3����]��ۙ�F�k,r����@ET� ��Oir���Zq�E��d~�K���
�$&�^&)�_�Y@(�"�K%q�%Ks���[�������O�6���sH|<��� �C�?H�%!�<:��<�x!�b&5@P��F�%%N:�i'
q3d�3���clپ�w���y�����J(������Z�?Up�w�ǟ}�C<����؄3
%�1�
PB����*)�����%���U�O�v;'��/L�s�z��� r7�Ί���
 x�����e���ܢ�z'��U ��=FD���G�7C욜C�5eY��?�i6ڸ±<�e�=���}����;v2>����_ j�����	��r����S��Z2F�Z�~AFP��=��>����ԃ8 -�,��\~ե��/��z�Fn=D�/:�#��"[.�����[� t	�5��a��"�O�AB�=����k^ʼD:�T��%E�y�y��a�:�{���
]�P��,�f] �tTaN�0�U���v�N�
�ר+=40r�qGT�b�}�=�'o���ZD��(�˯��#�<�9�8Kj�{˜�=ɋ^r
/�5$�Nzv�Tx�ZI,>�Ș�3�uH�-)R�̦	�Nt9z�E^�����'Z*�{xy@�Kd��u��M��@J�P�ӳ'���dǶ�"�}�J
�Uʉ��q# 1߷�<5�6U�q��:��Bf�;y�,O�����x7o��W㲀�o�:��o�ND�i��Q��,-P*�Vo��"5a�]�r���n�4���usL!�" b�NP���p�x�(1z�I7⟿Z�?���h_�z�#`���b��kXJ��l�<�/��;x�;^C�2�Q�
eQ���|᳷���(��d��&�3PJ����$aLX�1E%�ug�{�J�u�X�bx���R�Ҧ���#���إ?̇��l��|�I����go<�s��{��"��_i(�ߋ��~LHȳ�4�F��(���w�A��-ZID �=<�އ���ٰ}��׻}�X!���
&6Lp޶m,ϧ�uǽ9r�F�E����4�1�:9�T9�7>�G5����ڟ������gtV�e)fOR��׾�U\���	O��Ţ���҂(����⧿����"S2$�b׌Ĕ>5�Z%5i?�Q����,Jx#��$�zy���y�+�����˜/��
���,������ܧ�Ƚ��Gw��[6�6�>�D�����>�8@J��ڿJ *������S��u��.D��y�H�Ҕ#Ӄ��J]�Q-d9]bnq����-\��1��cK�(鑊�dkI"�Q�a��DZ2�Z�އ�s��a��e[U6��(�����ބO�b��{oW�|H����Jsc�eiy�z#A)8|�0\��s.�@�l�Z�dIZ�Q.@��;ʮe�9N�����B��,rP ��)�,l���iN��k.�7~�=���o�k.f����ɗ��u�8��hp��I���q��X�p�4�z,-Σ�db|��_Ȉ���Da��c�����'�
O�����u���^J����g�� ��է`1?��(��w��[:JYRk'd�ϡc�ٸy=��}�«��r5�N�|��)a�1��_���������`��z"�@䊉��X��pƠ���3�
�5j�V����o�v�EԂ�L���}���w������T>���s� 8��*4��;o��N�d\���#��\^,&��������?��SJ�CM^���l�]N���4�̆�X7=�S[z�������9[6a
����_ L4J�1�5�qdi��(�p�R䙟Z�H�ʈ��`���	~ڒ�*��X����ޮ������j��9�~$��^��%��5-~�ͯ���7"t����K�D)p� ��<�g?�EN/1Q�!�9�XѬWo���;���>�B��-֓Ь5�It��r�;x�u/��N��CF�_�U\�Ԓt��k����M|��y�#��^n����s���Ɨo�o�ǡ��p�����Ή�/����D�4�
��y�[�q�&6b��
I�`�%/��wΗ~��t:?���@ǒ3�S�l���g����S���m�zP�j��P2��� �"�B���&f�}�<L�ץ�l���S��y�)K��ݰ��H;\O|�kǎ�uVz� ���IT׽��e�ec�^�Z-��lp��A�&'���K��O�2P8��/�(�	�ߐ4B�(����e��DR�P��t����Y�&nH�~�e���❿�V�{�K�X���>��=��抇�ǩ3g���(�t�U�#P!��2+Ȳ>RB��-p�4'c���,K'-�Y�
����!К@k�`}����-��B}�p�$JHb�
t
�4Y��r���͗[[g�w�}��k.�w��{y�k_H�b��^WX�zD��}����pr����):%A�T5�U�"����'G
��9&�Xv�}��/���t-���ß��G��k�
������Y��?
@���s������9yպP���h��ա%�ܮ�/� (��+QY�Wz�QI=jѪ�q��	�:����vl%(�%Q-�G�L�k�/e||��ĩ����4�q:)eQR�����p�G�~%}�sFV�H�rX)<���O�í���H���?�7�V�*�a�XƤiJisj��.9�׾�:�V�R��[Xa$��(���w��7�"�5��	�����0���h֍���ab��Oh�қ9��9\��_��^B�,���k R%ؾ�;߸����Kh�d��C���{���]w�{��|gݹ��o���� ��� ޽���z�=���{�3�x�C�=ơGNШ��d�-�z�E����S����4X�4�����I��5y�o���x�,-�c/�eA�"L�(��Pǔ�E�$�(�_�Y@j�̚u<��A��ȓ����K�\	�$��J�%�jV�
�����5�b;�H��p�@#kK�3��灘��[�e�9l:o�t�P�DDo)GkM����I�(`qi��F�f��3G�[>��MS\}���5/�������/e��iҴC�7���H�P�vf�y�cǏ�nM�e�)��0��t�0`����Ut;=����<�Q��WV%+E���(<פ(=گv�
)�a ��o�(�	U��o.$JkA;��!���b���).�d;��w��K�x�O�,�_��V�幔�|��|�n��=i�L�m@��@b�]���Gi�I�P%`�����E�Ow�w&P�.m~W��^�����{�����E����Fn��vݠ?�������o*ֵ��O�.X���F\�[����K�愉f�����{ﾏ��cĻ��՗7b�nI���K'�4�c���W��'?�i�?1G?w��`�٤�LX\X ��4[	��F��:��xw
ccY%f|�=�*y�%�(��(
c�mf�O��u9��sX�q���(V�����4ߝϸ�����v�M��C��,�p�]��`ﱫ�#��zW�B�}��}��������H
��d�arr�VPG6gشfa������]����r������R��H�h6Ƙ_��!S�3$A�8	Iu���t(I��Y�C��S���].�a�_t�vͿ����x�yg�������0>1Fi����jV(��ab2�
ox�|���ҝW"
��#'�#����ȉ��<�d���0�W����v��&a0'Z�J��cS�n�Xc�㇏s�-ws�U�'�O��Ш7#U���HӘ�qյ���/~�G��ezj
S3S\��"^��%��
�dbSW::ˋ�HE"�>�'s`q��k_��ç9s������!J*DY�*[
*l3���(\�d(���y�αjY%�Y7���P����9�vZG��8�-��"��/�"��x����Y:����f�����i�Ntс$��SP�%Q-b�L�O�K|��E��u[�=��D-ej|�ek��.J���)7�⇝?�1�
�u�~������`O��l�����p7p�8�n�+���*�d������!-
�R@H���wâ��ɣ8��z���nD��Fi�����6�e�9L��y��Q���>�~�ř�S�eJ�U#���t:�Mτ/
HY����
�[V�?]����hC5`����A�}����z3���#�[!���_d�����'R�3�DK������8��kk���dh~��N�~':p&��k¥�dE�Ӗk_�".�b:��Pr�KE�Ђ�g�����q��gR��ҕ䅡_�XI�Fk������q��&���"�b������_��^�ҫG�g	��l�� ���_
��0�D1�x
8��+�s�v ��,mE�(K�����_��k�Y�a�O�3�"Y�*IS �a�ux���}/�"�>h�wD�/����|��8볨�D�a>� �vp�*�K
GdlX�,Q�%�n�ʺ�g0�%�Q�P��&h�*��&8z����c��
��o�c��[��K. ����0y�Uׯ;Ρ����Ё#̟Y$΂)4�zdIV���g77g���YO�{����GL�V-��ݿo5�B���n�С&+z���2a]`E������~��˖��	��͕�"+k!a#d������|�S����S(0њ��h�0��3�0�<�����J'�����=�=׫=|�g*f�g���n7׉GO����u�\[�N%�	댩�;�A �C+Mh�,���'1S3��y���Ⱦ�DQ��W��'CQC����cŖs7�u�6�;�8q���9��w�=��$qBV�T �����˭��*@�'��F�HO~ʑ�?���R3P�㧏p���˿s=R�Q'-�H!�*BK��}S��)��O��;�c��&TEa2��#�Hm4 �g���E	�{�u�w��J�/}��[�ǸRp����������vf-EYRR�4(M�`��Ș[�PEQH�$�JCi�����	���L	� ���	9l \�`
D�8�x�����_fj]�77�x奓Jh��?��>r#��._rI-��%B�$KYE�fݜh\S�}� ��f����Y��4�ᎇz+�œ������Ũ��kǹA�a��"�Ih6�t�]l	W_s*��(БFj��9����� ���a۶m��
�c�k���&A�U JI�5a@�#�P�0)���6��c�	NX��G�1e7���L��*��b(Ϻ$œ�4bt5�
-�[~p�8�0U��v�ɒ0�+NHN7["n(��?� GO>��~�W����oSo��vz$��YO�nH��=�̧>�9n��̟^��P2�5i��t;�U�'��'�	$JH����������^�ȍ?s�꒟�����\�>����[���9;��V�+m�a%�R�{4�u��NN�lZ���y�?�??��?�m��D��c�Sݙ̷l��t;�������׼�B�����*R�@V�g�E{b�U��䤗�<�|�F
��@w�BTE��?N���N�lչ�W�)\�w�I�}ލ��Ơh	gu���H��F� �
������+p������$R3\xF��jA(H�g�S�/:��%zf�B�02e�;�|w�ԕ��t�
,�1�2�DY����H�D�ّ#�"�"�zp�*�?�Lyc�)�]� �[Y��MY8��y[bk(��=�q����������C��^%��%QMR,�\��x��_EV.も��a��r�!�k�R�����?��%\��$����vcEa0�r��9�H��E������߼!$I=���#2�i����������]�y�^w
Q-`�LJ�̈��&���ݮ���m��N<$o���X^·fb���[���<b��t�}�|���z��S��V�$��*�:;�K�%*�5X�ƨ>*)9x�Q�:����M���Z�M�FH҈)��Ɏ��Z�������!�]���i/������br�M���p�Ɂp�d������?�m׮��b��E �c{��\�>>��GwN\�u)�;����?�
 /Kv�@G�Xc�v�)I�:Z>t��=���z֯�P��A,Z��y�3�������b�{8~�$Q��,+tm��9�wAڕ��T��o�J�8�އ���{� (��09�8\|����b|Ck,��������g���?s;ߺ��Q�fR��
�@ S�������v�y��x�׽��L����C�r�JE!8yb��{k�k&°�]`��������^�^�EF��x�Z3��F�亲�
����6�,0e�S��zDC���O?]ZQ�����x�Ͽ��^r	Ư���{���O�&u�k?w�rǎ����;�Ӝ �L�oA�p�C'5]���Ӝ<y�n���8'W��0�����Ԥ˝�
��Փ�� ��4�j5�ԯ�&'&ȋ��r���2Y���!��vSx���ړܬW; �1�C�A��k��X�,%!y��
W���N�
�?x�/��۟�-=�0�	��l��t�R
�� ���<����81je>p7�`��}t�Jo�[:M}�FX�<qtk7N������V���5( �4 =�3Tyl�������!]Ι�X�V��PD�YI�Ϩ'	A�����:�`�Ti��}r���]<7=��o �fp�������Pƿh��#��g� *�� �%t�;�{�V�<y���I��{ǎ���R䂝�o��NcM�0�f��О��c�v�(f��}<|���iZ�1Μ:��� =a��饣��
u?��B��g[6���?��s���K�X䵯��׾m��ґg>���[�r
JN<�_~�c̞��UN~�!�S��g9�`'�r ����Skۼ��/�5S� RV��{��Rlڴ�\yW_u�]~)�n?�m�7�}ǹ����� K�R�r���>v�3����]�qɥ�(<�ꬣ��eIS��A*l5I�!Ra�y�2t�E6���7��ulھ$���O��X�P��
��� ��9�e�J�nz�5�g�`r�k���)�cm&�&���{����a�K�Z%����jZ+
�՞n`��_� [ٍ!��x�F�^��)
�S3,.."QDQĉ�Ǹ��lܼƛ1�Wxh�#����q�3�T~�c܊|MHK%�J-�q���#'���۹�c�c�7v�o�#䩗E:#|��(�=)Nxpo,�~h��3��v�<G��FĀ5?�
��cgX�/Ӟl�4��i^z��g��}�d�5��t�����ҡ������?�+>�ٯ�J�ٴ~+�=D)���!�fhc����a����P�%�tЉs�qP��G7�����P�,�@����{>X��u�����������i}���}ʥ�OXдR(��h�A8La�B3V����Bú�M?~�������xۻ^�9��Mf	��,
��>ck���{���D���������������$&�:m�\i���ZI�)ͳgP�H��0��RZbD�Bg�u�������}��%A�#^�� ���;�����%4Y�!*(��\�&P�8}��YGi�ۜN��g[�fLV�N �'�\���}̮�:���O�3��׃ŅefϜ���,K���:,�-r��K�]���ȁ�h�j��?3O�Cm�@c��B�=������1��)�X�f���S����[R���J��9'��Q��f6s���}��x�e�"�*��E��
S�&�5�悋wp��p�� 7��=)Nx�bcR�p&k�g���T �;�q�>��VWu ���>Z���X�_+��������o|���8���&RjT�0e�)s¸�B���� %if+�@�T�~/�6� ��3|��۸�{xt�c̝���8g�V�DX�4'(s��S ���'�'�W_`���J ���A� �P(�$F����(��Xi=@?��s����~�M��![�(�!�`��2����-�������ዟ���ڍ	l.��:E�+|cc��� D
G�{�3y.90�N�����M���_��u������?��O����w�]ܠ�x�?�}��Uǔ��~$���At��k<+6�	tH��!�f|l�,+9y�$Ji���,-.���c��"c�1Ƨۄq@^��*�1ITعs�n���Ӌ<���aH�� �di�Pk�����Y*c��:7��|��4x�ϙ��<�8뿟 �p����"�|�g�����x�ż�M�16Ӭ�Q� 	�,$�h���|��w�ͯ~�f�E�b�~F�#ta��O�r��? �9�P���liI�Bdl=�~�E�Z	�(�"T���c�J9gR�5ST bE�I�"Z͈�-�ٹ�.;��_x!W��r^����_�e_���"��?A�1F#i��I\�L�]����UPU`q�a-�9�ȹ���y�+_�S>'!+�8k	T�-
��G��ٿ�:i�P�%:r���\���1�4#Hb�u(�1�E� �$Zh0=�����c �2 ��s5�,Ci�R���
3�W�yv���`q1l�����.����e� $�b�u&���1ο�<6lYla�g�4B*�,GJE��Q��8��W |��-��>̭_�.���|�_d�cOP�K�6���i���AB���	k��p��W�?U�M����%�V�����J[I�B	�3�E��I�7�K�8g���/�������{�l[Gia= �B�,�K C��p�o�O�����׾E�1Ŧ�[H�%���Vc�4��q"�����h֑Z�R�g�pΕ��ua�?���?z�
� ?|��?�$�|�3��۾������:�j�W�(��zX?�I)��
�	|�K��B�$��P9�&ǾG�����i�clڸ���h�0�9(�f�|�Z^t��H�y���v;"�(�p^� B��g>U������9�T𿬦6lR%i����J��t!�v;��6.y���养�DaA�3���Y��<y��ޓ|�C�`��<��8���YI�#t���c&y�?O��ZU Z����(Y�,�"�5/�������bM���>ז��ҷf�����@I�4a(�=P��r��2���3���o�
n��v�qjQ���8�W2Xy_��X?�Q�,��x���,I;⭿�\x�Vr�#��W��}��{w��#�)�ḯ͕����+��)J��J�8t� Д}C�
���av��C�RҨ5�v�����lPK��%�c�ت �'O�|_�lހ�:������!$YZ���$���	p%�]y	I+&��	��"�sߔM%h��ơ�q2������s�}����|�/>Ρ'�PL�M�-"�Д��LY��
jYm��Mp���9pֻa�_�5������/3���v�V�E^�t��DI��x�������w2��E�,"���2���1J�uR���|�~����=ƚӬ�9ad�	e�),�t�î�#ClYb�CV�e���E�kAi��}|���z�W�����|��u��{ܮ]7�/����s��
�N�6�(?9'�����L��bhe�?
���nJ+�$�(2N�<���g���k��C���^Jj0��_Ҟ��⒋��^��G���,R�'�d��Y��(�}�q�4!D���â_����&`Txv�D�HӔz��s��4�B@�%A���K��2�_~9眷zo|!�'6	�+%J:����|�7#��ԩ	�
ɲ��4H<��Q���(%+x���l�V��t(eʋ�{�]s:�8�#�G%�5H�Wy���8�
�g���̕%R99N(
�(����/\
Kg���۷����$q�V���B*�%%�UIq�`~y��x®���sv��nlҢ�D+�3ay7羻�֯�K�:֬�"iF��?���<[�oe����,.�1���o�B�w-��Z��+_�:KKl\��(
��>Y���<�p�!jq�_�!�����\w��`�20� N4A�8v�0�^t)���LB�_�a
K��"O+��X������o�ƍ����������:"���>Y��A�"��|�Ԡ!�2���8:���ʃ)H�*�!	�����H��0Ԍ�dY��(����֬%��_������p�K/CJؤk������L}�I�{�8��ė����=O�?����ٸny�dy�C����C	9BF�Ȇ#���D��+C���*����g^�}�i��Ѿ?�C>���fv�~�����������瑮i�{�vEW���&މ����wS4����D����c}�����[�ʘZ#���,+08�����o��?����ȩ�.G�%V�Y�6,��I�|8Q
v�&`�~2��"@x�v���(
�[R�!e�s�obێM(�}�'�TR7�2�tf��݇��]����1�0��	Li�i�ߝ�
B�/�y�}�Ð�,I���gj�/����uv� � �k4������NF�+�I��: �c��	�X(���G���9s���e��>������
z�(���	,KS5X�8hl�̚	֮����Jbg�W�H%Y\\���4�uj͐Z3�ި�h6y�ǹ��ߤH
��Bj��^'-yQ��c��kx�˯�Pr��1T$����[�$'LB�3)QZ
s-�t����J�:B t᜗b}��3��G�c*<(ЈZd]�w�x�3�!�8+H
��Aѳı"����;��o�?�O���o�����q=I �N�>�3��g�N��􊝪
+W�
�b+O���s�Y��χ*�0˻�Y'
���ь	k
X�M�勔.#�%�f��,�8��@Gl;��ս�؞%�C�f�PRs�-{��~�O��9=~�8hR��~��J""�D�~ϦjT��Q���]��~���O�����<��}�G ���nv�%���Ή�6D��� >�D����*��[�Yw)����hQ�7�҂�GO��#��8�aǎ�����ܢB�uPd��&b���kٶ�\��<��Q�;JR��l7�˂~�G� !���1f��P�G���+�Qf���:�)}ּ3XWVӷ��Ӵ�

�}�.�~����\��������Dj�c�泟��K�5&�/��LMz�6��Q �a�`�e(囁��A�&���z��o�����1e���8�3%�����Ry��rH�3�\�'�9����bW��` ���Gg���ws��ijI)B�}�gVo!�k��@�}��X�s�K��5�߅�.�U��'���O���4��!#
�qr�2t�e��8ʖs��m����G!%EaQZEaA�a�&��8O�?@�����R��"K3�W>��L�`D���;#S�b0@]U���f[�����Op�������"�
a%ǟX��/��_��|��q���'��cRED5Qd����4�(�4��ԫlyW!�W���80�q��G«JW
8�y������7��,�1�0���f�A�}�Z!|�I��k3Q�$Pm�+���#�������_�6y�05����u�a����v�
�b����	1,��8g��T������
� w?_��o ��c{��&`p��*�d�s)��oM�)Z�Z�xYkZ�X�]�L	��G��v|#�Nb�ä�>5MH�����\p�N6l\��3�����33^�$�A5��L�����y���k�p�ۅ:A(16CJ�,.����y�;^���(m��B�8�!B?
Z���v77y7��
�d�"���H�(����Ϗ���4%�0B��Z�c��������G��&GI����@#d�(i�(o�"�7�4��H\�V{�B�0���i4��w��n��Źq�@	�p�D���M�a`K	�CMiR2ӧ9Y�?�2.~�
gP�O��+}�$)%w�z�W�7�h���_:I�
	��O<B/�q��So6��]+ҴX!f��R��[��x�K�>]/
���?S%�I8����V��UFA�a@��U|�!��	�U�������𞽴�&�������'�)ɉ��|�����?�W��
�s Qj"\
�����MHbK��yI&ԢEV��r�8A+�1n��6 �b�#��'�&ŭ��D����v!��N1;{�̚i֮_��X�$С����������Qfy��غi+�.ۀu�1��K�����?~�c�O3Q�D�MD=n�e��Jh�
�(�Bd\)�bՠ�L��H�����)�����_K7r����Ս���}���{D���Y�+�a�A?�1�I���*I��(A��)}
E�L��I�1Mc�N'_�[_�������nv��*��<E�DQ1�#��m�5?Ǻ����G?�m��;�X3��FT�B����v��^����g�u���o>z�{�}�D�����FR�������Z�r�%;�x�:����
�P�.%��\������9������%	b�(�冲�k��|��~�g�J�R!�Xϊ�f�$��U{��q�BxgFT@Q>���q�v��L��gjr��v���6�m�g&h��������bO�&$����F�:Z�:NX�0#!9)B�`�W)���8��ٺ�J{^b�_�����9������4��'"����4��L��`9)����jJK��@(�
eQ�\��`]���W�܋9��!n��93_�j�y{Q�e%�	��)��-���VO�U���`i�J�޴+Q.�ݘ�3��<����[����}g�����7n!�$a�z8F=� �Q@�X��]��)C�(��b-~�G���
��ư���@����R���w�e]�8��.��k_�ŗm�ތ�� ��w߃|������3�Ln�����=�
���C���?ƺm��V�?:�׿y����|�`�El�Yϩc�X�[`٥4�
jq�2�1y����`�u�~>nX�����Qyz������&����K�����H�A�Icyi��1A�Cj�Ȼ��L�ױ灇���?�����_|�������?{�/�U�y����|s眻�VDHD0��q�fX����ڳ;�����d���g�{lÚ�l�`LABB9�V'uN��ͷ��9��y�n�VK�d��W��oWߪ�T���O�]��dơK!W]���Teͺ����{9u�,j `�0@+5(���x��� ��ET�z������a0�`m��� �\}����c�Ȼ3�u%����q��X�-K��Q���iI�n������z��갞G��P�Z�R���AG9��;�ܯ���46Ky�у|�����VTֱn�:O���b)bdt(J�2#c�
V�U*�*e��-��3ϜĦ� ,z�'瓿��!싖)��V�u]�n�X�z-7��H��#��G6o��O��O�c�.j����eX�`p� Gm����_.D�ȼ2cR(7��q���q�}�r��	��jq� P(��s�S4�<ݤ�X��[�����̵Ҷ!nelߺ��G���o�O(�<���<��i��8	&`�2D�+("3I��
�v}�٩9J�d(q�����sV�Ȼ殔�O55�eC��;x��:����QA��qv�,Q9�W^�O���\��2��-�u�V2~v����t�@���e�:L���=߽�m�nF����۾ç?�9�.q鎫0����YJV46�X��#���5Ds9��;��}
:?�2���/ �q��Rǹ�!w�n���9/YKEDdƏ���2����m30Re���<s�)���ў�m?�&V.",E!�$��j\`ټs5k6��ݗ��?���cT�*c��=����T���a�!�A��r��T9V�t�/M���<ٶ�m
�kS�v�I��d)�֭f�%�!rč&.��(_x����=�Ǻ�!��!���c�R%�
�qsq{1tR�`Bh��c2��`�$�с�6P�0�w���h�3l>����زa�3����8����0?=��#gYh6	�EJ��0�T+� �\*Q�0?�@��Q���y=h��O���@F ,A�em���2�#
G+�V���E�Vܢ�(E
�9�5��2֭]��U+��'���]6�u����F�p�(I�i��6u�v���[y�
�bzv�,�%�IȌ�]�D7qw�/bi1�4�^X',�08��� <��+��	���bX&�kWm������>̙s�	�CC�(�
Y
��PИ�0?WG���r2eh&1a�����&B��L��ixZ�%���*�%ޢ83~J��XC�&(���,�(ٸf�z�m��0Y��[cz|���W��-��9�
�����s��$�J$��)��
�"˗�������#��8�r!���̈3�Mj�*��J#��fA diBz7H��N�L�r��X4��'�>�'&@<;��.oُ�L�L�B'�F�$M��B��6�K�ܒT�b�
Lj���8r�(�GW�j�Fz�)��"�@���
��u�6f�g9v�8ʹI*
�B>�5(��B� -4Y�Gā��,MI�ԛ��O��"�Ϟ �����GQћ�8�3�j�)�E���j^��k��U8%pF�d��L���9�p�'���<���5(��*Y��XhP(	�&3N��/����V��MC��&��Ndl�l#7��U�H�AK�k���$q��=��bdp�4�u��e�:�@e��.�lt
+�VSP\"p��>�`jb��t��BMD$#0~.���a��D�y�'2�ͤNF�[���r&�Z�f�BX���s�I�iJ��U�,�i�ukL>�7���H³M��V��Ph��q� ������)�j������R�bRG�x�nM�B� ����ܢ��{�@�E��Bt��EGbZ,�t��cB200���$G��Xh�z�:F�W��Мk(��6��٨����%� "�2<�Ak�Ғ$�Iӄ���8n��{I��wN�]9�,��b
2��CM�R�9C;�Q��ޜ� ��ܻx�ۮc~��'��3��?�7�y�O�b��ͬڲ���
��!N���Z�P(F��7mB�����ѓ(16�g�]oȠ��gi���B�B�Hf2�$F*�ʯAs�K��+ ��ɿ_ �����*$.�����b�ᗔg1� �Bi��)Y��� Њf���3��
�.3?����s���ô4����X�p�w��1�I����f�Q^u㵔�9p� ���5�8&�Zy�V���PK��� �G�d&%*��@�]�s��>�M���t=#vI�PF���[ĭ���16��J`��(FH!� U���_���|��w�"�(����R�wlsү,����4~9��w%�
RӦX�Hm���Tռ���qի/��6������CjI܈��_���i*Q���ʈJT��ũD� ��f�ig(
:�Z,S+U�d�&DY��@OO�0gR8�@(/�'
��&um��7����ܯ���
Yb�a^�%Ƥh#��X�̓�J�"0)���_��RHIֶ��jg$qB�썰��铟� �.�ԉ��~�w(*TJ5�U(�E���yR��a�ƽ�eJ�3B�罷�$�Lg�ߛ��갿O�&�P�H��b�V���*BU@�����W'ΐ��c(��tpX���B:P8i�FH���|�Y�m�9r^!��9AjR���#I;n⤣2P��lЊ�r��	Z�����o0T��۞�s���&	���׽�z6n_�m_�_��ʱf�*2��N�Ԇ�RK��A�Zy�((bS��P�����J�
<M35)N
T�?ۜXL󝤟��������#�<��h�~�� /_���lj��
��rf@�!г�
��+�n�J�,ĭ�A�2H�4��g�����-'
�%�./�!2�2��&�j�m;��e�v�Ps��Q���!�bg3S3�q���APo�ɲ����Z�������Oe��7�_t��|_�+~����^o��)AR(�H����o~�G�z�F��M�(F��5��tR�?��=�ˇW�ȑ���uN��w��2�]�f1d&Ai�Җٹ)
����ī�~�6��v�
�5�1���O���+�37;G�\�W�r�~}if�2�p���ݳ����
qV�a��ʹ�2�6I�0�'<�$(��)3���u���7��������$ǉH�]���^\I�B�n�r�u`��K'B�֚0��֐��4�:B*�҂Zy���I�~�i��*A!,��,MA��x�3N��r灴]���>��g�]>)�R-��xr�M):m��N�:�Ƀ/{��Y_H��Fp��{��z'�PX�(׊�6������3s3LNN'-(����c��({����p���A�g=�q�c���K�#�
|�kw0q~����1=5�ѣG������Bh�U�Oo���$p��� |%֝���3۟��ǹ,ҥ 3I?���������O����\=��U�َ^�KʙBx�vc	�0�S�IӔR�H�Z��Ĝ8u���399��M�X�f����0
H��Y��K!�V.c����Y�g2�=�$'Ncݺ��Z��8��7�ԛ
��D���U�U����,�����u��{�ϟ�vP��Z�؏O�RT*��2R
Z�s�9�L��#<p��Ob��!%�F�:��S�����[�5n�[�<P�u;G�Ǳ�%��K҆��uY.��Q(DL�LS(x�{���m�����b<��~�lb���I���/13;C�RAiIjo"%�i�J[H-�a��d�ui֦�n�n�i��8'P:��C�v�b�`I�9�:HMBjcD o}�[����tĉ2gRx�
�Z��!���i�DbR���cP]�!i<��&"wԃv�Mfb�B��W����VP)T�����h4��kh�rIk��!��u�Ha�]W�gu1:��}�Ty��R,�D��z��|�/�j�O9��ޤ�!�DiI�X`���\��W�r�r&��16#u	�&�q���g��e(���;��Cp�����l�t+� #�e��Mo��_A�3;3K�Z�4E!�9�ƺ\`I�tq�~I��,�ml��V�zw?����=�bA��ʎ�k�h��:g]��KR �b.I;�i���|p�Q��r��v��gO��#17�d��-��#����pFx!��u�&֮[�����:{
�2�R�^4�-.u�Tޱ͛��
�������]����^�e'EA@�f�Z-��T+UV�\NT
���b���O�������sG����a�9���wT�\�sr��1_� �X�)�U���������r�����e���?���Z��.rC�yߙE:���y>�я��'��8ϡS�8y�8�4�8�!#APQ�D>XR,���U2��U�*D.���#+�z �
4�����2�z����m��:�y܁B�5M��A��H���S���J!�B2���[�WIK0=�@(GX��̛���*�&C^@*���0�&y��'�K��$C,~:#�gz��opxY^��}ŋ�	�(���}���^����9���U(��:���$�]{=�y�;y�^�
o��W��V����<}`��5ڭ�0+��ݏ�g��Oٱu'������L0�iO'T���b��kƸd�V�.瞻�>�@�TA
�?B��/� x��9҂.i���g����M<��'�<�,��x��\���C��߷�d���eXg�@�$2�/��
I�m
��R�$Mi6�FS�Y�z�Sgx�飌��s��>��}'���*=k�Z�u)R	.�f�6��]�����'y��}�
/gղ5Tk����4Z4-2c)���$YT<X�g����-�_���G�^�6�I��4K}��e�LQ�al�v�E�Tean���x�J�B�
y����\6ף�MOw!��=+7,� ��G)����o�%
T��
�慛����;vc-��
�˿���N� ��>ߤ>�dzr���癞�e�>˩�g�R�%��,Q�)������8�u�]y?u@x���:Af�4�B��5��b��Q:���O,�̐&)a�(V"�I{���f�&��g|����:?��B�8v$iF�9�
������
�!�J���0��M�KI�W������G���Z@�"N��"X/�����F����ȡ�r�Og �@���[ZPw4	-�
87q���<o~����>�oZ+�����^�3GNq��a��2w���;F���18Ix���~�3�����*d�U���k^͎6s��6��-g^��Ϛq�|��{���R�����}`/{�-�r���/ ���C}(ݳ�&}�7�}��(��@T�͌B�$�
��1����g+����s���R�1<0J�Rfrf�o|�v�?����n����W!K��"T�$É���C�����;V�~��}���IF�S,Uh�-�42J�2�bH��9?���tK��^��%�&={��{��j�(]#ʪ@�$��u���L�0P��k���h�Eyz`�#�HsG'Y>_A�y�g-J�^
N��XP2d�6DX�|���<��zE`^>���=K����8u�S'O355���Ybq�dn����q��MI��n���%�B�Xudd=�@*EjR���R	�n������ٔ��qyq#e@j�����S����1��ܩ곳�m�/4��;���s�����23;O�{Z�5^MP���W��1��^l�Y�@zy��!�g�r?�7��O�J)�Zu�����k��y����������=`��sү6��و�@E�XRk���W]�����F��8���߾�
�����o'i;��J���� �Y?s���v�F�?��?ch����9�M�bdx�>H�a�_�	2X�r%s�sXcP���5�����l�_���	�d�b���[��o�t�}c�~�����,/>�����@G_�*�L��B��7�
aHAG���f���ŨH�P�2�����`u���1>���)�����}.]K1��䥠�Z���Q�E\����u���!���_��;������u�b%@I�#�y��y�e��]<+�zn�?�����n{Yv}:��0Ѫ�IF$h�uD�X�8�]w���|wd�m�^��--�2ʊ$�(D%V�XI�?�^�y��K*�J�n%���A��
��vq�����LN��XX�>�`a�Ac!�[_��'=@9
0�E8��R�	���GjS����e뎍��X�682��3�L�7�ڗ�˝���ęN=C�� D��BQS.������V��U�B�q���<s�<��!��W)E�ᭉ�#11��Ѕ텄R����:���=�NͣCE�����r�{��MC����]�k�k��u{^��m��|�&�E`�azn�����νoftc���M���7������_�'���Gy�o|�:x�5kֱv�Z�����J�2_���99u�m�s��WE��O�e	�	�j��^���；��1�B�K�>��b�\�B�@f6�������{٫���ŉ>�E����W_����O������|K	�%u�X�	��<p��L�ը.�F
o��0
NR_�S�"J�2q;&
B��
�O��'��>=Ǫ�����aCk��
5�jc
�zLT
ؼm=7o�V�0==���8B8��Φ$I�Mi��ZB�(��	AG�]�	Iv[ �E?� �A`������jc�Q-U���'1��Qo�l�PR{�?��N�v������TB\ğ���p^eOz�� �~:��ʫ.���]�(y�7k��!;�u���;�t
2�l��I
i��$c,��X�]3��
c�_�����rp�)�x�)��
Y��]'��k��GlPkׯ��|#�H�2�pf�7�2�5S����{y�ɃH2\e��]l\��U�W36��Z�F��ͭt!8�!�b�@kN�<E����Kv2���0���$^|HD�I��	FFp���cnz�je�YE����X� ���jױ�vKt!:��]���R�����/��:6���&��E���s�b���w0X+s���}�j��3��������c�Kev�����9��R�9��&����\ɕ�_"���c�;3Άu�x�
o`��UL��q���azz�0W��S����9��ž��9#�RJ(c\�������?��q���x��{٫n9�'�g��V��w�.]����n��� �H~�P#��*�9Z��:�9
��R����!�4��X IR�;�ѣG����}?�nV�_E�VF�K;N(�2kIӌ��׳n�ϲ�ҝ|�_�;��O2T�V��\eO�l�1�#ul�E�|��'�Nǳx�\�!��W���Q)�ZS(���i;F8A;���iJ�V�b%�R�Z-��:7�=4����yg){'���	�[���ې�k�1�B���Qd ր���{e@�;?:�� �H)|���yǘ�#��(	N�U��g�G{��l�!���$N2���V�t���fX�f�r�F˾5�iQ*A(�kd3����I�9t�񳓬^��Zi ��#m)$�	���e
V2�hR���Jesm>u���O�z�A�p�#C�J(�q���7Ī��So����σ>��H��H��^�u�r/����r���]�x���-�;_��JJ��H�	G��u�J%��Sl�VB��
�r��k8�M�e�9ֱc�Vn�s?�`xl�J�;��s��	�Ɩ377�ƍ�_��o�p���~��~v��j�_����׼�jh����|�+_a��M�:$�
�`�������3�
��f&��O~��wϞ���9�g���G6����e��u���W^�e�Z�۬3YOK�Þ3�v�w��� s��5:<2;���&	&�'Q2""\O<�4��8�Y�q%�J��Ri�Vh%19ޠXٰe
W]}9+���h�r��	�qB�T�%gm���e��%}'���vVi?��.�n���� v����^z���K�+�I�u��=ԭ��)��
�@���mK�8�x�K����%5)Z+����SSS,[����*6�^���=eP�)sN�
%){B�}�+@ʮ(
����n�� m�V�J�NM���}�cG�z�>��dW"���0ΐ�G+��Hy��^����AH�����5�B�������n�e���.�
����3��B�7E���8Gm`�zc���	V�Z��m˼�t[�"H��X ���MfA�3S���ԉ�r-�����x�p�S�ʿ�J{k�4M0&#*Da@���t��.�"N�4�
Q�֊���=w��XD���9�bHf=�/I��9v\���칆�`��}�[�x���u�_����Mo�V�RYU�R+�n�*���*��f9?~�ɉ���W��_��B�Y�|�_w=�zﻸ�5�q
������_���|�Z��͵:ؑ�$��麎�?t��jg���f����?�wϞ��w�������Gp7�O��־�{>�c���`����pܤ.�^Hr��s9E'O.R�.~�g����+�F"Q2@����0����w�����n�z�nZ���y�Z�}r�ƃ���%���̮��Y�l�F����4��F�Q1 *�XgH���$��\.�#���[iEF�a9�o	�rpto��R*�TyA�{�允��@�%����7'�"�;�u�B�����+V�k�n֮[N0�]�~�/:�2=*���u1b�-�E��*�gL�x�)���5*
8}�4w�>&�MR��]�!)D>��49�R2R�HY�z��|כY�ii�I��PQ������
i�p�����Ԋ���]��A~��E��E��;66�w�Zk������M֬]Æu�ͱ,̶9��4G���Ǐ������+������o���\�BP�������*��̼8U��8�I�MQ,	��+^�/�Ei�ٔ�@���j095���W^}�^��뮻�+���f����S��&�V,���9��k����P]]�>ݦ���7�ͯ����<p���{��x�)��2�a��c[x�G8p� [7]��;/�\�E%V_����Ü|l�O~��|���ıS�_���ѕ4�d�C+M��ǒb�EI���.�M@�o�����e�����j���_ ������&y7�?���/l~Ŝ��[�5?.�s����K�L/hN�#d�;U�g�� 6��#���8~���y�86oڂ��̤��@:���΂֒��v^��]�\�@y���9N����C�qIS*(D�v����ehlf	�������J��]�x�T��u��_<���-�$��2Eϖ(vxt��rf2:�.��!
E�L���c��$���O��M��WR��*���(�o�y����.mf�B��|A����O��}�27]'
J)�\�z)��+(�-Xẖq�z��7P�1T�!I#A�(r���}�[��BPF�R	F��E�]�t��D�8h�%#�Q�8N�7Ȳ�v��ٓgy�ѧ��g�����Os˧��ۿ�]��q���c<t��<v��B�Pug�v����s��p/kС���oT�(B)E�٤�j��`h�M�,Fk���V�d��M������o�5���W^	���ʺUX6����q�g'�7Ёb���X�m%�˥;.�W]����������/��/~�Gy��+ֱj�2JLO49v�8�N�g�|LA��i=y�o~�N>��;߹�$1�\�
g%SSs�1������הI��@޾�BP��$��������9O�������Ǹ���&n�7���޷�:#���@�C�I~`\@.���|�sN
�#�sg��NT ����L'`xhk*�;}���'���^����kwS*~m,Z(\�T��~�f�oXϕ7��o��7��-~�r���e�BE��$s�&r=�@(���)ҚE;�"��M����r�Cf�|��Y=�Y�}1l��$�ӳ��<��a�D��R�H�Veph��A�G�V�J��p��F�Z�j�J�ZFW�]3����2��jq.s�z�̹Y�V�A�3��ŢJ��aX"Ib�q�]��ʲ"h�B#�&k�dΠ�*R`�g�8}�,Y3#,�8C�\t(g�a��8(����O>��@���bU��c�9r� �v�Ƃan�Ef-�b�J����@G���1T��l�n�QB-��/y���x���ιn��j�XXX �`��O1�Q�clF�L��b������~�=\�g;�89Ù�G��7m`�5�)�˿��j�������~�Ռ�
�~�
���_�߽�NZ�6Ũ�}�ߏ����]��������\�1=5�#�<ʽ��˚5˘��f|�<N:��(#�vF�9��(����-|݋R_9��BI)����ͷ���ȩ~���/ ~�������?���}�=�~�h@�I�����0���A��t=���A� �H��Xk)��`���q¢f���>s��}�6N=s�}]�+_}׿�2���҅�9�R�I�$YBq�ĕ��ɶ-[�u�&n��wy�G9;q�@��(Del��2��An.� n��$#���
A?���
9��{T	w1G���{�[/H�/�j��dRz�����`ʩ�Zg��\��H�Ԓ �
aT t�(��DŐb���� C�C��08\�XV��V���at���*A��ǹ
�1
��2��%2x�^? l6�L�NS�r���)�L�ۗ K]�	Ђ�\��#�Q�a�KLK��o�#�G�wic~"���ȴ[1����
Րf<��Le֌�f��A�����fL���
Q��|�,IQR�2�=*z����K����sN��4u��� Ф��Z?{���R�H(����\F�P�+����}+W�q;s
�����������I�}�+��_�I�o]�[��*Μ;��n�:GN摇�q��8/Y�~|��x���:�7o�V�"�$Y�"4M��Ԫ8k9z���'�YF�#�������J�V��5��=w��t�����h(�$�ӭ��#y�o�?��M<�}ػ뷯��}!��W'�mĳ��/h
�H��vB�����l��زQ������P�/����u+�1yb��?��)��
�x�%�߰��`�V��i�D�"H�SҺ�8������\�7�x_��W8z�qܦ9ߤ\�Q*WN���v�DQ(�(�$~n�������a�ns�s�]� pb�z����4WJu�{R*���+���U8�?������'k& az|>��u��r��P'ahd��˗32<��p��@�J���� ؐ#�N�,XWB�0�{�Ξg-�I�VJ[���Ȏ� ۊ����,�����O֙9;��LΞ>��T�@�Єd���-in�b��%�4a��s��iH��VC�Ȉ�6�,�|xa��6�@#� p!%A>yj7[��*Dti�\,w�y�j���zg��j5|Q���qn�t�vܢR)�X���R,q��Wq��vҜM�܇o㋷}���=�B����s�����g��!~�_�������G9����K_�_l�
�fhh����������W�x׻���� �4����J(���<۶lG���z�`#Y��Zh�ېkVt�$����0�O�o)���4����Cz�WV�P��2E�2���wؽ�U������%�/,,_���LG��}z����E'�?��^o�*z
�S���(��˴���@
�r�r����q��n�x� �E�X=��H]Pd�73���y$w+#,(�_��k_q+�/C8A�d�h��4�-�b�HF8��r9��/�?%IxNyW^�-^������7�=��L�:�o"����OU�$!NltN���Õ�.��!Qh�Q"D�- @��2B�E���(����y�>s�����w|�/��e���or�7��{�ч���0����!Ѓ��E�D�bhhO?y�Gy�o~����o�O����g��n㶯~�{���NN�0�BR�j�*B��%X��'c<�Qx�B�O��|��s� �,�v�f�.�\�P�d-K��+	t�
��\�@��p��q�8��ba��'~�	@�q�s����T*��o(
Xk����ݎ=�5IС�P)#?���/�9w����>���s��3�߸�嫖�h֙[���^�Ȳ����S�;���q��6Vme��e�El�H��v��@e���yo}��Y>ȃ�y�/~��LMM���Tj��(�ij�3�Q�rk$zW,�Y��v��s��26�����?����G��g�H�~��7:����}z�/�~�9%�[�T�Z����Z���=��� ����.����.�$7diB��BKE�X&m%�g�:�z��2s�u�>̉�hU�6XC� �:�ޔ�9l� 7I�Ԋl�|W]q9c�+���suf�g�NP�
P*���F���A���s����Q;�=N.��W&�.�׮s~�
 ��w�kl�sQR� c-i��eYNK�45`Q���������YF�-4�h��""�"U@��Ű���
֮�Ⱥ���[���rB]&�E��J �`5�
����)Q�w~g΍s�=���_�=�0>����@!,1X�V&�%V���V@XM("L�h%m��R�e�_t'���+�S��S%�(D�
� �r�BT�Ƃ�BL�O����lf�`�N�]�&�c4��I���T��#����yr��MJ)Ο?O���t7�/ݍ�v�4�)WJ��<�

?�ޟfltg�ǟ��'��*q�W\�O��
Hac���3y�(8���<[6�`ٚ
;woa׶Kٺm3�|�;y�{��������G�����,c~n�BXdhp���i�fh��P��U��k/d��Z���1�w��������:�R�*��I�rr�C?�Շ>;�����|���� ���3{٫>3�Wl��[qC��Qk���YtT�Ģ���jz<ǟc�i�ѥá����7NTH�\�I�9
�a����Y:¡CG��k3Pdd��$d�D��ۖ�f��P���W�}�vV�^CPPL�Lr��1&f'(T
��c��YT��:\��rrٓ��/��	�+�cY���f�E�C����$�n��.H,���-��I�����^tu�5�=b]�X{�T(��*������(�h�Q�PGh���8yQ��
Q�0,B�ph�������2�Z{T�"��"6�(EE�)�)��F#REj�!D&���VӬ�QJ#����a�x]�"w�t���b���bl�5i���f�$��=k$��M=�>
P���nb�!��(:O�"�{�i�����;��̾Խ�S�uU!��4,N͇�SG��D
(��4��>s�5������3���7R����i�RT%��F�y�f��!�g����8|��f��[���e�l_�铓(%���>�4�N���8��Q��^��H��+�ٶc3+�,#x�ۇ�o�$>�JF�ʃ:Ħ֯߄�R�Q,�p��n�X�6�T�����' �W 8�2�B%��76�W����������&n���������zӀ=��_�����F��k���*�f\f�o% zR��Hѳ�u?�ݎ�3��o���΀�V�|��ȬEIE!,���B�sG&���0~z�
kVS,�P�¦2�Tl�<_�썌Vo^�+�l��k.%N���ك��:õ���,��9HBU �E\&I��#h6b�� ��P��ydi��)3L���ȼ#5���d��
G�]�9�;ɡ{�r����o�:��Jz��zt�@I勲�qк1���Ҋ킛��7�a�4;'^�غ�9m���,gk����T��1��BQ)����PD*BY��-&6�����΀^��y �����yv�@��t>Z�\G�Ts>K>Zq��[,VX�˰�4��EJ�n��:E_^
X�@d�F�H6���DI��!���;�(��1I�Й�j�ş�1��?B���&��9tt?[vl���~��^���m!�� ��g�L�l�,[I��<��ü���NyE��p�M��s�v���w��_x�^��s��Ň>���C�ۼ�cOMr��iZ3	2�������s�q&O.0q��C��㋟�&w~�~�>�&��+(�	�P2�����3ڽ�=��fvoq�8����ᜉtQ;k%Y��������^��}.o���/ �	�8n��W}v�}��|b��5B)�:��y�Ē���x����{��䖰B	/Ej3��v��;'�RS����&�y�ᇹ���daz��c��"����^Ǿ�h����PU���e��;�}�N���/�0?9I{�N�Ơ$Q��B��:�o�#��R�Q,� A�զ�jb�#�4J��q� h���k���ΊP���>�_@)�"��gA�9�{����p������W�S]�A���maz��ݢ�aN&u)bk��������a�|zb-R)��?��^��bj����G��A�����-��&b!���:�EȰ�,�_8��pΠ���uF���������ߕ>�<��N��b3��J���ש��y,زGG8�]9	i�Ti�ضc+��o�*׿�R"k9J�����G: ֬]����3S�[����62����K���+��ʫw�|�(���~�/��O}���n`����;J���r��N9����s׷��{����I�f�Q"��	u��?�v�zKfL^\9�dع��uJ/��-9[�/�{3!C]��$�N�����vxϞ�t_ܧ_ �#��7����������+�xC���[	�8�|'���v:׎ƹd9���h79x�Ǐ��G�3uf������JBj�Ҡ�ߓ��	I�r�%6oZ���\��K�1\F�x�����ILJjS�B@u���q�.Ř�A	A�T��X�a�J�(yN3^�Fv���B
���9��uQ�y��˹n]%�g�@P[ty��Dj;��{o�.x��eǢ��"J=���҅_�)w����O����NV򷾓�B��S��UP�rB��Ų'"��鮔�s�4�X
�G�X"3���<2�'t�
�s�Rù:��ki6��j5������o�)ǉÓ4fZ����q�m�3=;N�Z`vv�J��SO�ô�(�P(P*��n��;���$���7i5ڼ��d�ֵ|�����
E��*�����̐�,g#��Pi�O���;&E�����U\{���T�i(�Ȍ���-����?�@����/ �񬸙;����&�թ�;�}�ڿ�qi��s%����V�����7lbbb�Ç�s��I�=s����6btl�h0DiI�L0��T*Eڃ���TY�~%�����[7�l���ʹɩ�S�O�!��b@���e�I���#�0�8�4�X�G.R#�	���pM�|Y�7�M.�@6����uoGt��=�ҞU�̓[?�W�ȓ��t靁��b�&`�S%��<z-��>���奉��]��h�:A�IML�]�T.Dc���Xlt���R�C���i���,QPa����/��bÖU-/s�ɣ<�ȃۦ:PFG�g8p� '������S������_�:O�{�$NY�r5����-[���8ē?A���'1�4K�RR(X�b9�R�����m���+�RoF�su?��O�ΙP��搱�=���[���)����}� ���W�*x��G�/\	8g_�i��&\�K��,G��%#F�W"Q��w�|��g��n��"bxx��P(���Ѯ�8���,��̈́bE1�b�
�6�e�fV�_Mu��%ar�'O�њ2�@R,�B��1q�
֡��)�(��!1V`�Xl���
�[cd����0�޷�����/��{���"��G/��Ci~ɇz�_v�8���t��N1й�*�ªg" �N.ެ���D^4�U�Vh�M���H��r�����::>^����;~��r��wQ�T����(�	]��?���y֬[Cf3FFF�����s�s｜:{��
Q�@��9s���魼�]�G������?����i���eSJ/�Bxw�4M�TL��������|�Y!�uQ�|:%~��|�������{�_ ��{�:>�+�
��vz/s�h��G�Ji���$��#�mC�N�\�2>>�#?���Ӝk���T,UBϓ7�����K��JCm���K7p�k�f��P(�$M�M�LL�1O�>G�%����h�1��Q�2O�#�;]_'Kr>�0݄-�ŀ��D��N�ТD���*x��v���yGKN�\�E��R�=�_�ʻ�������Q8���%� ����7H�d �M��Z� t�4�T�~/I�
�_#�J4�
&��P*`vn�-���n�r�9q���$��M�X"��$�a������f������q�NΟ�`��
���3��^�S��k��&gNLP)U)UJޤG���<^�3�sGt
|a��z}�EH��0��� ��w�ޕ�����F8�6ԅ��ѩ��a����d����L��r���yZ��r� y��a�q�׹��X���b�
��"��3(I��x��H�C��$+V�r�U����X�~
##5��7�I�6B�Ԃ8�Yh. �.�Xّ*�%�*�z/�uLN�tHgw�.��tF�ϖT��	���N�� �[ ,�{���[����L8���������-�:д�6��B=����R�P^@�vq!��Q��W	JҎ[8��#8遵ar��9j.�|��e��6O=�$�''��i4�Hr~b�+�|7����l�d��soy��Y�j9�g�|�C�w�}��0�B�0��!$�Z�;-��$I<���H�un�$0���?����#]R�e�,{߭��֛�I������ ������G��M��ï��R�JI]4�d�`��#[�����I��l�	�"�vg-�J%$�O�����b��yB"jCJ����wpI��j��p��@4��
�wlb�廸䒝�۸��@��%,4�i�M���6&��ߑ*@9��s�3�iXT���~�+��:��������2DG�G:��w��Jp�_ <oУ6��N�T>i�9~��ڹ�"L
o�-��>���3%� �4RK���@�a�:��Bs���P� l&� B׃
���#�f������:�7�,�Os��X�u�R����r��a��F)�h�7����e�-7�y�rP�` $�Ӝ9:���O�ۿC�0@�<�@c���l`�O�VcJ)�4�v�2�u��NQ�C �eJj��ƙ�v�}��_ٳ�&���7�G���/�J���o��U��ȫ"U�`\��j�/�zG:��n֡T�V�O�iLh�0�G���aH�2���sgγ�Ƀ�w���)l,)D%�	� K,ZHJQH�5��Ę4A�B��������%��`�.F��L��:{����R�Rz�T���4�u�p�@�9=���������A�@��I	���^G�U��|OD�=� �6728i�"鍆��ya��5�����{bRI�T��B��G �D(_`�i���,��Gx�O�JZq� R�i����Wm�B�X��t̳Ql��)��H!Ȍ��v�1<<B���8��U��r��?=��w����W^~
�Ξ�R���
㓸4���i�?x�����?�y���/�ck�[�,3��YRJQ��Bt�;��+a�䊅?�c��vΜ16�{��?��S�$��� �ǋ9K`�M�k������?^mK+�|��Z[k^Rl��  ���$h-�����.$&��
��H�4H�X���L�3�&���!d���(�
�W4�
����3��g��w*�T��Y�y[wnb�%[ؼc+;vn�Z)q��=��H�Ё@P��PZvw�a��Q�̒��aX@Q�Yv�$Bz��s~��w�ޣAt��̙����h�J=�u~�V7�O��B��?�s��{+%QJ��H�6*�� i�
�� 
�K���R��mfg��Uʄ�&I�'��e������Fs�Ԥ(-h'
k��o���}5C��n�r�����V��"R��ۭ|g_�T*�j���m�0@JAd&#Nb����j�b��Bc��G��ʝ�ܴK��A^}�ky�����禐(��y��#<��>}�Q���8G�<��Zm�Ĥ�g���t��;����������Jc�O�6�����{�I���}��� ��K�8~�����ߜ���Խ��{��rw��u�e"W�Q��;�H/��2t ��bl��t9�����*�d`R�"�X�Q��d�`��'�������8��A�f�JTM!��
�0i�[��H2C��j�e+ٴu5W�b;/�ʆ
�Y�|9QA�h�395����v�}R���8ɰ�Ӧ�(br� h��{i��.
� �s�u�_&X?)PB��DJ�5� 3�?��KF�K0/(K�̫���Ƥ���I>5m��0���s4Zs������&��T�e���x�%(�v�4M�
Ti�����@)I�\��4�.cxd�zs������7p�62X���3���򯾟�[�s�ݏQ.U�U�4u��a��Ī�$�2�4C*����h4[�P���Ǿť[�q�
�P��\�y7�z�U��d�d:��G�%)�r���9�gi6h�b��*�(��F ���:@?���ڋ�d���z��»��vΞ�6��g�����X�Z����_ ��%�����=7�<�{'�v�旹�kp����F@^z������eߕ�u
k%&�D��bT�X(�79s�O>�4�?�$G��Т\�P)WRy�{����4�8ҏ�;2�֤/d�U[�s�ص{6�a�ڵ�K%��&q���F�A;�s@c�
RkYh�ɜ!�Iq�p�9��ś���N�� �B�r
V������r���uc?f@o"�����-����,��M�VR�
��@�R֬^Ɏm�پ}{�x=7��z֬Z��C����"
C��9��P��Tpڄ��BЎ��<��k^�
�l\K!ذn#���w��]�1\Y�'>���
�e	�x�<���8A�@ÐR��R�,�h��~~Ӧ��޾���p=�l@[M)�N���;�ȁ�8Q^��T*Q.��ٔs~
A��r��҅��z|�gu��;�'����?���D���^��[�� �o�o]+E��Zצ�M.%��yRdH�u$�<��-��:Jn2Eٜ��w���.gD��ll����}=�#C#��'n��{�eö��ٵ��@%��=�O�nVJ�V�z�2~�+�ȗ���f����0gNNR�7�87���if�2�"��@�V�\*��,�;�P��`2K�f(!)F�q���:�{�sdi��R(�^?���y�@�Ek��o_���/�
�bߧ�K*Ո��s4�:+V��:XA+׬`�
�$�_��]�v10ZA	��=�����33Sӌ/'�B2c����X*R(�����lP�T)���.L348��v/7��Ռ�(*���<s�'8���-4����R�bT$nǴ�-�Д�E�,��F�($IS��4Zmy������Ք�+��u*��3��;�u7O<��0(E?UȽ':�G���Z��*�/�T���Hef�3������)�={n�w�qs߾��8t��xG��Ş=7�[�������
�����Ua �ڙ_J����[���n�s1ס�y�x�k�����>� �#!A!���)��y�v6��Ή3���W�ࡇc��Ml�d�wl��+/a��D��?��#vi ,F�A҈���	T�pX��b���y���>�p���d߾�=z���i�f���d��s��JAi�j($ljh�ud�N(QX���V� ,�^�e��"cY�~tr/�4�_K��b����W_�O������`t� c�kPR��mf�a
*�*
!Z���V���<*rLΝ��.�r�*6n�
���	��l۱�W��j��Y�I��q����(�j��3HZo��XX��@'
������R�y��b�D��Ed.c�d��Su��	���oq��3�=3���2��.#M,�8Ej�]�N�9�f��n��a�$^Xׯe���$�-v��?;㛎O�;���ߟ ��G%n�&y37[�w���mZ�?	d���&�k�ҽ�R��A���(Ѻ���5��0z�Z���&1��<P+TTj%t���������bd� �6���w���]lھ���5
�����9ω��d.v��-�D���Q�!II��XH9ub��������#�r��~�0@K��~<�-5�
�(*h�N��	�,7"
" �zw��Izζ�z	w��M�/����_��s����;��̴9u�?�s?�o��_�"8����7��w���,�w_���^��3)���S��;,[�S���=��o{��
I��n$�u�=|��R(D��5�Q�V����r��
�>��O�����@m�@i&'�3?;���16o܂�,'O�$M|w>08�E�n��Tj�-�f����k����9v�0�=�gN�!K2�-_NR�����XŨ��<�tq5ԣq �/A�7B�"�M���g��� ��ݫn�����?�ǏZt���=7���q�A�-���[�*P�>��U�iY��_9aA����T�=�.@8�rw���r]��*5)Z�D�"EL��j9D�!m��������� ��8A(X�z�W\s9?��7�뚭�Q�PY���"�bT\\U8�� "Ԋʊ��+\r�j�-�g����'����'�����:y���@��(,aE�t
�3�9o;,$:KP*�L�.�����t֚����>�K�=/D�{@��095��#3T�ET7�H�x�����?�s�9r���1�y�r��H(De��$n�u�&~�W��]���J���)����v��������i��������z�m`Ų��95N�V�Ph5� �\��w��y�u�aS��>����h-4�z�$Ms�"�儳�O����O��h2:<�ЊAp���0!ʙ(�-L.�â����V�Y�P�"�*8L�#m�I3�I��|�ȇ����w�-��~��G}�?��0n�F�瓿�𖑫>%�VB_���#�ŕ!��j��kx�'d>��a̋���l��Aj(#2�ӤK�k�)�fB�^F)��EH BMk�ɉ�'��[w�O��m��LC�P@i���'Y����h�m�!i�1��P	)
Z^e�1���̥W���������v�a�V�YI�1?7멉�G�)�Ҫ�&�R�v����wyYf�H�EzU�K����\��/��l�*y�㠔������f�#G��۷�ɝw��Pu�M[��N���Oq��iƖ�1y~�'{��}�[|��_a���a/�$3^�����_}�f��t��n��9u`��v2���=w<�w
��l���Cw��׿��WlF��C�ٷoQ�D�Μ>�B}�+.��w�����f��"eW�;��E�Y�T.�n����RK�(�������U�(����i�۔�%*�2�f�,MQJb2Kǯ����}޷/��9笒J� �˾i�~�3�����f�y�}Q���?vӀ/�q��W߷�w>)-�!��kS�0bь��y��e���L��ֺ�]/�X��JS��(%��{QT ����l�@I���"�a$I�:��SL�?�B��'&��/|�6��\��W]ƕ���u�08X�<UJ`�5H,��@�X&5��� �R��UC�b�U�	�u�3M�8{�<S�g8{f���S,�7iԛ���23=���<3��"�� �j�r����hp^��Y���lgR��a
��k������(�b�������Q�(w��:=V�$߱]B���l�u�����=^��p��äY����f`j��so�`ٴs5�C5���f~n��� ������TKC���$MaӶ�8�8}�,���3G)��Y�ri���۾���R	��)%N��,8VoX�%;.������k�
p�����i���d�l�q΢�$ˌ�*A��&r�r�V+AjI�V�&)�80%���(=�4�Bުׯ������iĝ���tQ�69������?�H��㎛Md܏��?�� pb��W�������`[�GȫVs_�N!�Cm ���u6��&9`���K���8p�Ԣ�"ԡ��	O"R`��$�s�]�u^�<�S�4Cː���Y��z;���3�9u���p���x� �<��3S�N�P)P,"���uLg���&�����&��ZDuE�э�l�t
�wme��M�b+;����Kױv�
Vmcͦ��ݰ��F�*��5�kNqn�$���Ĺ���<E�bb�&6-�6�С

id�Б��_����py��_!�����l`��R��v��ץ���,��1��H:��"�t���!B�
hKFL;�So��l�2_��ة#��8M����r�C�kY∂�V�E�%ccCH-�V�\��K�v�&��=p�r�̫�{
7��
���?��k9r������k��%Wngǥ�!���6��od�e�(B����5����i��2��ǆ�+ֲb���(R�W����孬Y���G��̡g(e���9��<_��9z�8J�H �B�ܖ�yb�Y�P���-�(
x'�,5D�"R(�%�G���pH���?��?G��@EJ8���&n��g}�.��x��o?�1G�O(z)���_/ө�w ]	$6~���!ʂ�����	���N����λ�w��!�7r����h5���S��Y�|����6�gӦ
�^����6�l�T�f��<L�E��H#��+�����!�4��R�% �Z�,!NRL�a�0=1ǹ�g�����yN�>���g���'M2Z̈́,3�"aF�d�i�sk��MA��R{uz%�: �:�[�: 3)���
���B�.�pɺ G�w�2�6gWk�&�n���BHIf-s��pƯ@�%�r�@�B�P+(�2+FV�lƜ9=	& 4�j�ňv<G�10T&�E�=ϛ��:����3*CeN>ʱl�r
e
!|�3��_�
6��ɖ5;9z�-5�[~�5��/������;��o��3-��>�'��S$�e��À������U�ϵ�&$��!�8|�����	�	V�\�e�� IR�9�Z�h�@��$H(���]���ѡ�zKm�`]�����	/����?p��0JZ �6�JF�o>��O�������~Џ���޽{e������Z���B�7z�Oj�@������^OO@#�c��T,��%MZ$i����Q���5kW�i�6m�Ȇ
�X�n9�+F TP̓F��{|�Z�kQ1�HM�uY���@yy� ˧��\Ԇ��&�VL��䩧�ffj�f����s3s��,07�`�� i�d��
czV�?7!JJZq�$μ��C�C�pdn��1Jɮ�c� �PR���Ns�%r�^o�#��(���bQS�`Ūe�
�0<8�k��kT��z�>��>�O��ZFs��ɚX�F�%�hrٕ;����5V��f�sS��� m:������?�`e�u�7Qo4i�I��%�\��ݻv28Z���u�	Y�r5�v�������n�}�9|�@�o~�y�ϼ��������3<|�A���w9r�Z�6�F�V�[�

�ʋ)�S�g����Lgϯ��l��s�?t8�jߋ�*�Ǐx�1 �������^~Z�������};~�g��m�
�����Z?�%�!q���6�M�w�F:0.#����F)���gy��i�[T+�l�W^���[X�e-#��)�
T+���0
J��Y�ءI!*t;L�ؑ&)�̫�I���e�D��X�]9ĦKW���|\o���V#��Ӭ��=?K�� M2�����M_HdiF�&d�_c1����C��؆K�A��ɀDi��p^�.�t����r�L�Z�R�R���
!AR�
R��(VC��K�
!�31�B�+�Ä��3S'^ŀ�m��@���gQ���6��Yh6����|�_���&��N3}~�$��QM����=N�RCe��O$5-�F��{����*�c�.~�_�?{��F���Z�������G�'��&�G�������g����J�#���̅�?������*�el:���B��O�y���&n� 7s�������t�0�`���w��[3��R��P��^|���y�	Bb �y������*P4�uq�Zy�����2f��|��w�/�h����+X�n%۷na������y��J�b1$,I��̱���zY��
"�Ù|�H:�*/.� u ��K��
�Z9��,W���L�|�߫&�O�sX��Y�a��S�1�]
�.v �Cj��"�;�����[C.NE:.���s8� .Ȧ`hl�e���*E,F�Ȃ`va�j����
dd8?}��'Nr��9��7 ���[�����e^w�똙=������K\y�+8��(?�s��l�z	?���'�{O|� ��ݪsɶ��d3B�O48}�gO�e�6��k���ុ��o
#aYiaX�Z���%J�2ufg�)��]׽ΐ��#^��o:�ߚ,16��,�������N��?�@?�IF�-����}�$�r�o~�X����H�%�MP�Ǣ������q��Z�$#�A��B�$.���6�V�f�$mYΝ8��CG���wR��Y�r%k֭e���T+UFFX�q5���(*T$< N �bdqڡ�B=��\��N1�����)��J"��-BD�ɻ�n�Z,&����^-C=sqz�3N���"h���\�/�L+l
�1�,Z
d�pZ�#]H�H�)U*�%�2DՀ�5�"�g�%R���l4����	CP����9v�
e�3+#�f�+��׳��u�{�w8u����*� ��nx�+Y�l-*PP�E��g��}��LM�Q��0�$�%V,[E���X�M�]gE"i�ۋR�J?�Z�Sȗ����D�
*�ijL����>���=�ߏ~�I�앷��q��[���T��%����B@�˼|�����;	V�,dYF�fe�0$Ib�g[d&˓�"TUJC����l͸�|�I<�3��!�#$IB�X`͚UT�eFFF[1���V�Z��uk[UC
��\�x����k�x^*�
%"XʒyO*�R�1�E��R�l�W���]��$o��)�!��>f���|MvQl��j�3��X���
d��%�w�
YXd^��@h�B���4��c����F�IL�LXN�9���<��!�m�Ac�Χ��yBo����b2����Y�q5���{��~�aV��b���p�J��ĉ���|�kw��O!�bhh���6kZF�lf�J�g�d�������BQ*z�43` ^��'�@E�a������?��|�%|��/ ��g�/�س�w�-w�|������?��;?V�����bҔ�%(��J�ȣҝä�4ZHP2G�+�B�J�N1Tc٠�ZK;i{��8#
�u��=�4�PZQ!�Z�Q(���l�b=#�c��e2X$*��iT�"d��J@�w�.�c|?�5S� ��������ɕk�J"�9P0G������;�s���"�#����v"Ԋ�9(�&����T�V����Ldh��vq	Eg=|�ɓs��b�������s�Ɇ��شj떯���hĆMX�z#�̣>��gNR*�A�l}�H�	S��R  YIDATS3D�B�X!mg��9ӥ�ƭ͸�h���V�E��Q�b����F� �R=�?���ח*�;�3����e���I�����{�~\�O�G?��h�@�up�o^�ѿ��V�����d�ݪ�'� -c��
A�5Zk�ԐfRJT�f�~ci���P��'��6�0�Ҕ8n#�B
If�v�F�I�ݢ�q2�6V�6T�60@�R�Z�066Ɗ˩ժ�V�YAm�F�X�Z���4Jkd(J�	m��^}��?0�s���_YX0�a�!&IB�٢�j�&�N11>��T���&gόs��4�sM���-ö�	CE;[@E���2�~����]�a��!O��gg�Is�j�$&�#�qn��w���1?;O�68r�0ƥ(-.��rl5�.�RLNLS(	�Bk�
��%�[X �� �Jc��c��0��/��K_u���/z◑t8��K��o�ۏ~Џ,n�&��}�G���2�~���4R�|��<m��1(|��j�w,Vr�,M	�p�$�<�@�R
�,�^_�a)�+���R���9�.s-�ύ��6I�h4H��0��j��2Q!�R)S��dpp�J�L�P �B
a��\N�RA Q!$��Ћ)�WJK���D�8݋�z�u�:����
\N7tP���3�8�BL���3��m_�4�7��ׅ:�f�8NY��s���fJ��VG)�/��2���0&��R�f1�YV�[����޹�Fʛ%,@<�e��|�s�&9sf���19>���Yy�Q&N�P.!��"�9�@j��!i��8��uJ�"��82�M0&&��T$Y�s�)%Y��$Z�a��0�9�/J���~����y�G?�@?^�B���폌��p!L��{ńz��=����sO�g{ �.�:�H�O]n�j�c��q��(-�;�m�12�
Z���,ic������@�Q(PAH�VF�R*�@F!Q� �J���~5���A긮����:Yc}���A�d��1�8��'��O�$I1�`C�LH��v;�٬{�?��bA
%j� �� l�@w��I�¢���Z`f~���A���7��w\G0 8wl��G�033���,gώ31>���,�f�5�PETU
��K)gHes��u�.@���R��*k�!
��� �E�f��'d��rL�^��K��2�����/ ��#U8!�H]ˬ�p��8���� .�{UK?N\�q�K��Sh��n���u4��,����K�.�m PRv��"��u%}q6�9����&�q]!�z�Ib���,6��=J���Ry�a��BG��|�\:Ծ�p�s^7�9Ȍ%M������J)x ���rX���bs�g)��չ���:s
h��,�a]��4�M�R�066fgg���%IR�d�M�)�%��Wt�!i����e�
`q�hT4�,�W;Dw������ȹ����"]��Y x�>�Ё�065 ��O��� ���*���5Jg�&�R�h��)�MM.6�^�7�Ap1�������(��>5\x��aBN̷9��� �	�r=�.�GNt�K��ҝp����fE�Y2���_�\����E�x�Y����Ԣ�?�#��s��]����刬�EB{�d�N�Ry#���S��D(�r������U�bQ'_�	X���L�nS*G(���V�E;��V�-�C_HH�e�RJ�(��Y
Y��<�)~�R��!�5�����[0`���?|�pV8��J2$3I��pZ��O��������?���O^���F����R �K���6�
�ˉx��9��
�\���Nw-pb�W���{���(P.�t�%>|=��,�3)%R)�\��3��WG��<5�`�l+:I~��/r���z���ZR�x
{������#��%��J����pGL�S�8�����w6D@{������!�d��â�F(o���	u�B���N��;+1��G	�ֿD�M�� */�,�Ǫ�
�]�2��s� �krh(%R�K��!�اs������G� �Ǐ@x�`�L�-[~#�h�~!�/H!�(rt��}w_������gd�˿�A.��n�D�@�ً<q�	�s���J=�^��BXٓ��c_,N�κ��W,5>r�3z����s����q�' �{ʻ�h���"�2���TΙ��o']-z�H0�U�) �"�+"���_2:ɟ#gCTXZ��&ijp�������FB�P���kK���'(�WANd~
 ��/Q4����� wN��� �ʞ��}��E�E��/���!RHR?)k����䟌�:_�ߏ~Џ�B `��y#��N�@5c
�K-N8|)ދKm�������%ٓgw��)���	��/Nl>&��}G6�.�^8���J�yN-s�����90�8���ʻ�ܮs]w9��O�.�1��?�/�L!zU�\�aH8����LRd�?�9x0i���� Y�����8����,k#�� �t���b	�����_<8'�X,��8�B�I�� �;=N�ɞ�H�p���UK'C�x�>w�p��R)-�I
B|�9��z���W0��w��~��G� �Ǐ��k��O�[n��u[�	���B�@jS�K6x����|��g�K8�����ge�'�!|�\o�Z���s8��3���1DO7�k�:�-.��y)Q�������2?�x�c��7��兎 ���*do�c��r�Y��ϭ� �E c>T�B����eX�� :�Z�����9݉��V�A��*5p�K5ԁF��n7�,X<��v���8Bb��e�s�r ����u��O����3��=���{��\�  ���Z�B
Ej�q)��4�O?u���;���;~�����/ ��c{٫�+9�[��FT
o�f��oT��xS�{��zK�Y�I�=GQ zR��|�g� !r��w�ҧ�y�\��9"}I�"�t��v�4�"��y��f8��� q�O哄܏�9/ڗ�Mߥ� B��]@�O����~2�-��t�r��U7I���"��ar@�8^�{� ��#�Rt
�d96� \7��"���B����[ �&Bw��� l�����|���'N	����n��h['_�����{o������`���� ���K���߻�wv(%~xg*��4�
?@1�n�&{G�Nѕ���X�h�nR=�.��OO��,�� ,����Eg��ȹ��G���$�o�D�W�R>�Z�����<�k�s���&~gų���$�3�'�ri�8�Y�nRJ���]����n�{�1��K�_a�OJdg� U	�⩇R�%�g5Xo���9�¹.0��c-� -�~� ��?A� ������Ñ���I\��s��u��b�D��t���|��pw�@޻W������G� ��?���^��^P�[��FTU�����N���%�)ι�E�z����|֘��u�}��{�l/�4��}����~��s���^@��&s��/��;�/7絣��_xu���N$:+���Z��_�@(�IM�	!�ǉ�������?{E֏~��~�����I��{��
�g�o��Z�!�9��@E���R���*2ԏ����ʩ� R	-����s����e����w��� ����M���{w��]8~Z8��	�Kˀ~1Џ�xv��+�씳|��G'WT��a����~��~����C�e�����V�oB�|�b@����x�ߑ�:߅I߸씀۰|~��������O�]�<�����/ �я$.�"x�b�:CfSp.sB�@؏~�9߁�9J�@x�����*n�[�����G� �G?^���^�ʉ=���!�*�}��B������PE� ���s��@?^@η�yu(�� �����~k���|��Nn�[�I�����)�c��o����^˰�����OB'�c��7�����B	
R����9q���'�����'�~��~��G�XB�ϖ�Fj�J��I������@�V�; ����g�{����N �PR	�w�	��R��_tp_/z�'��x���������I޾y�~�^>��%ns&}�����B��2�Ed2���̢Oe����_L�
)�R�NK�# ����ʭǾ�Ї��g�=7�ew�s��ߏ~Џ~�x�r��}��[�ڧ���������&�78�\
9�e�����3^N�?%�q����&�RH��Bb\����R����۩�����6�����;�ָ�(���ϝ�	iǩZ��SIm�|Pp����������<�/~)$_BT�dJ�D�㟑�?��{�p�mf�T���R��i��sg��^{�{�B7mv�<A� x�~�=��IVutS��{�r��x��_�� �4R3���f�@��(xx��dw��Y[�[ ���⧏��W��5%+�(�� @��~����u{o���fw����K����R����L��QQ�j�~u� � ޣB���W���}�c��?	�h]P��ϱ��X��������ӧZ[[��<A� �q �u��Ǜ;���]��<%
��	��Ix�JhB�N���0�l�d��&�;TGU�f���`#�>�14�
����:�w�G;�(�A �bԷ �N����.����Y��˂.yF�i������K��c�P;�ƴGd�V?����>�!c56��� xU��!��%�)��+�~��o���kkW?��X�]���u��! �ྸ�$
 ����w�wl>��_��Y2=//�<i�Vbq��v�_p��.� �h��!�UL��=�,�:<�M��U���r�
��l���ͱ���0"9�|ˬ���Ǻ�������-���A� �D�]�M��}��ٹ'N�l�

��1���F�1Z6Z�t͓x�J�}*�� $������
�PȮ"����	��`-�{�h�&�_@� ���WB_mo��k-��xb��aj ��A� x��x�6;K<�}��O�N�	K�S������3h��VA�k �H�^!S[p	"���V����J@}�y��4���Q����P�n��������߮���
0`{�m�ժW��>�1Q�y��)V    IEND�B`�

--- public\images\logos\cosmopolitan.png ---

�PNG

   
IHDR         �x��  ~caBX  ~jumb   jumdc2pa  �  � 8�qc2pa   Xjumb   Gjumdc2ma  �  � 8�qurn:c2pa:9b60624e-d229-4944-9d00-894b2a9a15b1   �jumb   )jumdc2as  �  � 8�qc2pa.assertions    �jumb   Djumdcbor  �  � 8�qc2pa.ingredient.v3    c2shT��h�.����IMu3   lcbor�idc:formatiimage/pngjinstanceIDx,xmp:iid:09e2c0e5-63d3-4ec7-b011-d0103c184ee0lrelationshiphparentOf  �jumb   Ajumdcbor  �  � 8�qc2pa.actions.v2    c2shSvzU�9E(��=�  �cbor�gactions��factionkc2pa.openedjparameters�kingredients��curlx-self#jumbf=c2pa.assertions/c2pa.ingredient.v3dhashX `
�1)�J��O�3�(�^��/�L/K:�factionxcom.anthropic.claude.providedjparameters�xcom.anthropic.origin-confidencegunknownkdescriptionxfClaude provided this file at the request of a user and may have created or modified the file contents.msoftwareAgent�dnamefClauderallActionsIncluded�   �jumb   @jumdcbor  �  � 8�qc2pa.hash.data    c2sh6�I�����V5��f   �cbor�calgfsha256cpadM             dhashX �W�q��e���_Ӣw�]��N`X�>�2bK���dnamenjumbf manifestjexclusions��estart!flength�  >jumb   'jumdc2cl  �  � 8�qc2pa.claim.v2   cbor�calgfsha256isignaturexMself#jumbf=/c2pa/urn:c2pa:9b60624e-d229-4944-9d00-894b2a9a15b1/c2pa.signaturejinstanceIDx,xmp:iid:9377e388-ead4-4642-adde-3d6f2b99e754rcreated_assertions��curlx-self#jumbf=c2pa.assertions/c2pa.ingredient.v3dhashX `
�1)�J��O�3�(�^��/�L/K:�curlx*self#jumbf=c2pa.assertions/c2pa.actions.v2dhashX ��9h��I�c%�r�|*�y����������curlx)self#jumbf=c2pa.assertions/c2pa.hash.datadhashX  �K"16��}ڄ�g�0ۡC:i��#�m�.4Otclaim_generator_info�dnameoAnthropic Filesgversione1.0.0kspecVersione2.4.0  8jumb   (jumdc2cs  �  � 8�qc2pa.signature   cbor҄Y�&!Y
0�0���@�
��9о���B=gU 0
*�H�=0I10U
Anthropic, PBC1.0,U%Anthropic Content Credentials Root CA0
260807184356Z
280806194356Z0D10U
Anthropic, PBC1)0'U Anthropic Claude Content Signing0Y0*�H�=*�H�=B �z
k�P�4�B�9[D���ײ�J�з�+3wdw���<Et(�.:}}?�4U��}�J�7���X0V0U��0U%0
+��^0U�0 0U#0��Q��Nd[#���Ϛ>���\�0
*�H�=g 0d01s�z��U��F�=���lNf���O@e�?<E���$���@��U�0p_\��a�bJ�/���
P�(��2_��=�Z��,Ï:2��x�S�TQ�G	�cpadY
�                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              �X@�rD���ǿ`f�t�|!�����u�O������h}?�PX�S�'�JN
3��C�uP��7�   IDATx��w�U��ſ�����>ԡ����cl1�{�k4���cI4��`A��FE��H�00L��{����c�3� w�3�y�λu���>{\�pњ0Y0a���L6�T+�W��zs��c��`���3"^c�T�ic!0F!2A�^���	Z;3�St?�L���?
[÷B`'~B����Ek��Q!��u�0��+,�7�Ԇ
�����,a�(*(`&���4�j��ٶ�.\���'.\�2�g���̹�f�`��Nr�xl�7/۫B���4R���Ja�+�҅�Z�A��B��-�B��}5:���q�V��C�0v���G��U' ���,AJ��5l[#�j�e�e�JFV��Z���`�RQTV&\a�+ \�h7Q}QY���=Dߥ˄�7͟k�펖�4j�Dfhm�A�T!D��@8̦����q�T
�;�e!ٮ�-�vGD&L!��=Zb�}�h���@G�b)��b��u��"�[�P�d����)�f:sV���L�p�
 .\����eB�����V��!Z=�j�ֺ�"GJ#��β�����	ߵP�pBlgZb�_���[:&^u�BJ�h&��V�Q*�4T
!�	��jX-�g�Fo4��ҝW�p�
 .~�=1ART&b$�C��c���Y�n�e�V��@�l)��DЭ�C�ZJ���h��f侯އ:!���c#H'���x*U��@.B~��[��Dy�+7,�Y��dYT4S�r�� p�bg�_T����	F����;!�N�0
;#z�a[��o���ο�Che��]��K�#
J쥡@���kکK���@��څ+ \�����c���Y����X!�!@
}�4
Ds�W�*y��.ѷ�0�:~�BH��(P���-�'
��MK�W��� p�Ϡy�ג���;75hDF
m�������f��Z�.���`'�� !�f[UH�H��Z�O��JVO��r3�fn�����+ \����ɂ���Y���	�K��9>k�()�.Nq^"��Zc�d��k�X�Z-�0ds�@ّz`0[㓀흷b�S�-6QTd��.\��E{��'L���	fͲ�����3
l��B�C4z�b��&���Fk[i-T3���{]�-G0�4}�JY�4�Z�Ɛ�mXZ�"E4a��\_�����W �p�V����cQ��t��5��'ɉ	m��5��]AO$�������Z跴���onKw �VrŀW �p�{I�_�sS�2t�C��H)� !
'��lg�=�x%�{]�D�X�#�� �5�I >�B����Ջ���b��+ \�h��t�dBK�����4�ˡhN���R]�e�טּ���⧻Ns&��4Pv��L�|�2�%ۋ�	K�ݚ� p�� Ym��7�[�r�n��b�C�QlW;�b`�����p�?.�j4��/*�lo]�+-������!c�����X��Ā1Sh���hQ3PTd�)� p�b��a,�߬���3�*e����)
a���}��
JY�������>�5k����'L�n���+ \��_Q�����<�.�%&JԉFK�k8�oi���u뢽�!�!����Pj)B�-�������u\���>�	F�h	��E�Ô�g�>^JO�Sym��������ŀ�І��@ٖ��B��LK��z��:�p�
 �Ƶ��C���ӺD,=Q�BC��(;
Z[n����HĊS1�� e[��\�	wH�W ��K�X�-�����-�}�,�,��^�.�VW�E�`�+ �3��W�~ S�B��+ \���R��{�����8��y�c�Fc��l�ž'��v\�ت��Z�"�za���'��nz��+ \��`�K
���wR9�Xf��ۏ�ѾqW��1�������SB>Y��9�n�	�+\��E�����R
�~���<����0�ZY(�l���w�⻴�ӊX`H�kA�>B<�D�ݥK�G\!�� .��o�߿^1~[Q���p�\�Bh)�G�@i{1��<Ѭ��:��"s�q�.\��E[������{���@!$JE\�߅�_{[z@���\k^�����/lu��W �حď�j)�����
�p��[���E��忴K��Ph���	lq��W �ؽįl��m��~۝��1r�̯Ck�R�t���-XA� ��
)$R��v��@�u��=��Eh���0c�]!�� .Z	N��K����@8DoY6Q�&�b�6Z+�И�����������51M!��	l�ƲlB�(��E$b�X��R�Hi��xL�c`H�;����+
v��Zۮp�
 ���F|��K�m'wm�R����(Z[x���� y9itΡs��t�%/7��r�HO%--��� >��׃!��[��QD�(�p�`0D}}#

A��+�ZVE��
6�������[���j�)�V�4��zLC�W�[!�p�
 ?�c��t �6�s]�o�(_
��V�B��0��df���=���
2������#���x��V�d65յ��ne��b/[ǒe�Y����[�h
٘����k:�RN���nF8r�ڵ�k��z�=T.\�b'�߬s_���+�n��s��6�v��u"}����MSS�
���o��*�Ø�C<�7�³������щR?!�Bl�(�B`�j47l؀�.]���N�!0��Ow]]5+W�g���|>w)��tK���~�~/B�R���! �4���Tt%��K��>-�s� p��_�F�v��HnB��u��G��Z���)�
���D��~�~t���遐-	߶7��z�x<;��Ncx�y�7'��k��������O������f���h��ۑ��B@��N�`sTV�3�b>��+>���U�ʉD%II�>h��ܶ�m����ZY�5ܹa��緹����b�E����N���>]JӣT$ѕ�=P��� �`�`���T�Q��8��1v�(�t�S�R
)%<� ��r
yyyh��W4�}II	o��6�1���<����3v�X<�n�D��� j��yy����`�7��P�0��$'a�u�R8�
��Vh��/���
��ž�my��='��>���U��+;�����"~C�����	e���;��9��SD���wx}II	�;wށ�m��0N��o�޽;��sO�g�G����*�ΘAuU5Æ
��c�e̘1-��F1M3�P��pӉ�5���SW[�G3�d��3�싕�5ؤ����ضJ�
.�@ Rz��
�~Zh�떿�r�`��+ \��{�����
:}"ZO���W��V��%�]H�����F����ѽ9��q9~,�)逳����K�,Y��W_��p=�ƍKD�qX��i�\��?P\\̋/��������/��B�+�����SXX���o!(�;X��*f�k��8�,Yʋ/�k������$%�x\!Ц: ��4�R�h����)"��m�N`��}n^w_AQ�	h�nwp��nO{_ �B����Z���_IuM*��I�aƴ�y��{9��cHNIǲ�y����n�3�dҤI�7n���xd~�A��x�3Z��7������_SRR���w��E���/%RJ֭[����w�=�X�<�������rۭ��F�Rb�ql�5�
��ɿ�÷��֛~G��^**�Gl�O���E`�����:�0<�5�]�mФ��OQL�`���� ��+0Y�-�����<ۧnB\,���������BMKHj�H�k~s�.>�$��`�7���x4h  ���:��{/C���[o%++�;s��Z{MUU'��[�~�-RSSw�z�5�ea�6O<��\s-Gs4S�{���,�J�9s�p�m�s꩓�����#���z�8��W��/��"O>�$���NS�^qW�����_z���}�k�HII��3�,׉n+?@kmK�4��w,�æ�/-v~�.t��=����pڹBp��f'eG�<��<�ä�>��!�?��_z
#F��|6ѻO�p ?�0\puuu�q�t�A���<��=N<�D.��b�<�ȝ�'���s�q���q���ŗ^JyY9�������i
 c���qX��a<��ü��{����ߙ���T�o�����s�����R\�HFz�����hu��Pʎ ��������!�{�� �={#&8�2��.�O�m�i�J��$�ɶ"NůK���i������������ߏ�Ɉð���c���~���n���<�,~��0k�,:� ,�Bk��} MMM�r�- y�Q|���Z����
����gݺ��W��!C�t�l���2d(�=��a�f��Kx��W"b{�(..��s�eڴ�F��6�B���cn���4B�9�;	�i\~�Y|�ֽ\q��Pv�uM���
]�d	+AHeGmP^Czn��޹��zt�б��������,��)*2��u��?J)���������"�,�ʪZ:�����38�1L����Nr�ݺu��˯`��R���Nmm-����-ǉ�4M�{n*S�L!;;�^�z�u��v�����>���:�8����p뭷ҩSg&N<������^�u���*���y�w(--%
�vJ�B,ˢ���y��a+�oO:�MMMdggSQQ� ?�lJ)��:r�-W3�q�u�3���2�����M7-�6OЖ��4�
i��}�i/ض}��Y/��E�{�)w�E�N��`�i��RzF���Z'�o
F��8��Q���ЩsW��P���S�q���ȅ<���x��GY�d1))�\}�U\������@�q1!��Ce��Y�m+`�̙r�!���#�h4�q����kغu+���С��K���⣏>����K.��5k�`c8���



x��5 �m�A�����8i���->�/���o��y�˵�]��/����r��Gs��������b��h^x�u��E6�6����R��?��K>��U�7oX���@�w��#W �h�0���Y��MHq���N���]q�HiRU]G��d��|�>� ��>�������n�:}�����͛7��^z�G}�s�;��ﻯE�<n�ǉ���<��5k���f��I�{�w�ҥK�����_ƨQ�IOO'#x}�������TUWc�&�{�ީ��馛8��#(*:�P(���I|�W_}�n����O�����;��/��i�?Oٖ-�����d��o���-[J�r�c�4cI��x�ҭ
hK�������}Oj�J�w����E�����t���Κ��[ݿ�a���i���Gr��K���Kt�3��+Wr����{�т��TWW����""�,�s�=��>�.��� �z�)��~��X믵�?������:>�x&k֬�k��N��v�K�}�1�q<^��y�W0#A�B������n�a[_}��_~�̚����A����w�ݡ�P�x���"�9>��V(8��7������&#�Y���d��؆�5�V����K�>�� p���[,ן��Nԯ,!�ڎ]�4����ds�ͧsꤓ�m����c�.���;����d��o`�&�sZk�x�	^y�>�t6�;w�9s���j�6>��S222<x����x�lܸ���{И���ͯ]��w�y���2����I'�HRR�d�v����˩��`��;�w۶�Zs�7r�=�P����~���?~��M�61u�T.��r���8���	G��R��oRTT�ñ��ԃ�CJ֯[�u�'~����L�������B��`m�LѸ+\������0M**k�h��j����	r{�ᇙ7>O=�d����+++��{�����|(�8��SX�x1��,�v!w�q'�]wmbI����y��'X�~��)(���?NNNN����Ԕh��Dhjj����p(���ؖ��n� 
CJ<��H$B ��񐒒B  ))��m���os���p�(�IJ
����UW_�g��4�Q�u���2dH"�ok��2������)޸�G~8�ض͚5k�۷o��Z���c�U�����=����7%��2@k[�n�+ \�5���u���:ߍ4�Bk7�o�C��_u%��n4w�y5I�i-,��X�n-��<���{�������3�����[���q�_�b�������ӧO�D�愹i�&���HJJJT��TW���@4���`zL|>�C܁ >��׋i����;D�JaE��#Ql�"
���D8"��D�z�222�ܹs�����ضMZZZ�X�l�`�Ȝ�>�Ï>b�ر~��<�裼<�e�|�D�¥K���~�����-��m�tj1���{\}��5����U��
P�>w��J�
p��]		��)������0�!�9Z�a7�oR� ����~��8w�$'�K/�������ߢ�/�����w��\r�%��ك�
>�d6����C9�|�^�z��F�r@|�]ii)���h�IMM%3#��RRR~RӞ��


���Q]]M]]Zk233�ر#YYY;����)e�}��'�w��|�`�wv/�����#�>Ʃ�&r�	'PXX�R���z��n��w�}�Ν;'܀�˗s��e٪23�ܺ��!���cj�J���ݰ���w*]��g�{�}�o�R�t�A�]%0^B(;��vJ٥7�!	�mL�ģ���3Ϙ����դ�D�Q^{�5.��B���Z���|�nݨ��c��Ә���l�P�رr�e�q�w���刅f��֭[Y�jk׮������z��I�޽�С�����l��S��lRJ|>iii���SPP@nn.�eQ�ik׬akYBRRRZ8
��'����~��t�����'Ѧ�06o�L0������M���t�ԙ1c�0���())�������X��&//��˒%�Y�������.�$��Z)[�.��w�9C�d�����zz��"�
��: .~�L�e�?��<-
�H��o��4
���dh�~��=˲[���i�7�ٳgs���p�]w����7o&s�}�1��3fLBX466�~�:���t�ؑ:�hԜ�۪K��:�o�Nlݺ�ͥ�466���A���i��g��5���Z��^^�u�;�8 �o���g��s�>K�.] x��7����?�ŋSQY�����3ŋM�ĲB����㹗撛��:���h���5��Vj��-^2�3���+ \�dl[c۽ߤ#1��Bz:*;b�\����������ԧ�B��}�����&�`���,Z���o�����y�'[��C|���0p�a���½����G�֭[Y�~=�H�:PPP���ہ��K[�x�asG$�RRR¦M��Rҽ{w:u�x}����ɓ��{8����;��^{��ٰ~]b;�ؤ��n�����7=�PV�ZE�.]�4i'�<��Դ����A�˔��G? ;;e[.��kÖ�ih�-�oX2�~�7nJ�="�&�c��t���@��-��+�m}{������ѳW�����qB���aРA�}��������z4h�m'lq�����ǅ^�w�AVV_-X@]m-=�wg�Adgg�XAм�~���}��;`�&ذak׮A �z��;�SO=5!�N�p2O>����D�Q�=�XV�Z͸q㨬�⥗^���g�-�P__��O���￟���ӫW/rss����������G_HN\�y7\�`H�=*=g�����W���\������o�#m;���-�kM��7����:��|����{���ɓ9��3g�<�L�y�[}}=_�5���>�{�+�ko���q����:V,_AcS�z�JX��cڴi�v�iq���d6�P��{�.8��.��W^���Ғ���ϟ�C=���a���\x�u�Q���}���������s���z9h�0}�R�*-�9nJ���%�v#�&K�eu�7�H)�i�G�V�rΑK��F�uA��J����%����V�ڵk�7o_|1��䝒b]]�Ξ��0h� F�EfVV�Roo���u�������#G2b�J6��駟RYY�N�h˲8��Sy�_�b��yh4)��(��m�S'M���������k�Q]]�SO=�̙39`��|�͌5��S�bۊ믽���?���
�ᮎ�}��0m+l	A���n�N�*1]ЙX��u �ulˍu0�!�ɠ�J��~�Ð46F���ˌ��Kׂ�F�;[���{�1nܸ] �y���N�����j

�mOk��ŋ����_�~t��q����+߿��r�.YJrr2ÆO�:�"����+��=�͙���
��~V�\���F���_��x8����[��g�-�#�x�Mrr�3fLb�����[��清���*P �4|(e��
uq�i�n� �طQTd�t�S���
<�Ei�&km)�m�+��CY�iOO�N�W��+Σ�(k׮��o�a��͉�ٶ͸q�={6���455�D��֭[���1M�C=��;�5��u�B ''�C��H��`֬Yl,.N�GD�Q


x���������ΐ���J222�ѣW_}
��M���'�4X�SWv�q����mϙ#�/�³���
��:��*�����%�y���G�OޏY�,�&�'�u �E�l2k��c�Q
�9)�>�]�v�kU�+�
B5�ʴ��a��F��(>v�����]w�n�:�w���=3g�b�_&3s��!�ꫯhlld����7{{��Cn@|�C��|�
B
1M3�`ݺu8v,Æ
#)��������C��k�%^��n1g .&��Y�hs΅��w�����:�����1A�ke]�a�O�u�1r��]6<dw0�\�9M�Q������45V��Wrh��X�����_Jɽ�����O(f�2w�<�p�
L�e
�s�P�3^cC�^�1�o���~���fϞMVV����|�}&��!7 �{<�t�B4囯�&55���T,�";;��������9��;v,�>�<�0YYY	�'��߷w����G�ٜ/X[\C���ڽ׀D)[�R��g�ʨ�x��X���[�l�πI�	i^���V����LӤ���;�|
�]r�N���#ʏ>��q��s���1�Wo�@UU%'�p"3f���fW,_Ϊի�Z3x�`~��Ͼ����̝��h�4440o�<:v�H���wh����SPP��#زeRJrssY�z
�}�-.��҄#�by"ۊ4KJ6q̉�Q^
~��R.���BK�+�m��M=ɭp�^���!�f
[>"�yrl��p����W�p��#��}�i��<�5z4G�?��o��H8����'i�i\p��߹6ٲeTVV2f̘D�K�?N ,�?˶=ztl����ϧ������n�7�gŊ<�䓜��455v ��Eݗs�qҩ���#��5�����gje��uކe/|O��G���F�m�O0X���y��>�3�{�m�����2D�_䆤�!�~�sx��[0R�H��e!������^{��������رc���Vs�7�h�O?����ȑ#w����{"�fǱS���A�]���]���zBp����p��g���ū3f�l�R>�9�s�9����%�[��8�
5�)%�eSе�����)))�܀�q��R�%����ك��Y��*7�: {
/�,X�X�`��c��!�̲����o�ض�c4��k�O�>;]�MMM�q�$��TR�֊iS��������G">�=�={ңG����e˖-,^��Q�G���ƌ3��8������FII	�������y�-�#����D�t�i����ڌ	 ��\~խL�����t�(��X�xa�Z]�~��G0P�W���e��*�&<-�?���3dٶe��߆�4i���SΡO�>���;<���_fѢ���~���y�g�?>�֭���!��<N򍍍|��'2�=z$*�]��s��:��ȑ|��TUUq�'2�㏙;w�{����?��Oy�	�&���?�{�~�a�5�E:���4w��{�ˤ�1����j'OKCk���m!�G�
8��^j��6Ņ� �h6�g੓A�
��r���Là����W����{�����Чo?�SR��!�5��p���q�	'����P}]]s>�èѣȊu�ko䯵vn�=L�4X����aÇ�����o������D�an�|�����A(�����_~��S�r�w2nܸ� " ��Q2�Ww�d|�t�v�v�����P���4�&�*pk Z���ć�<f��k��؎�rɿ��IA0lѭs�?��� r'�{q�ٴis����-V._�+��¤I�HNNN�G�j���O?��1cƴ�J��g��9� ��K�Ν�?>���$''ӯ__�;�\� W^y%K�,�N`�ԩ\��<��s�t�I444�`�N<��.��$ȦK��h��{}C�[�ނR��e��o����R���RW>�ɭp�vG�95SX�y)�#��Z�k��� 0L�j+y���w����og�&@$�w߾���r�	�3���)**Bk�b�y(�O>a�ȑ��㟩�������ߘ#�_(r�Ѡ���B���DM@<�ߴi��/&5%�G}�nݻQVVƚի�D"x=��x'Fˊp�o���ŕ$'�\��οeSi����6-yi^���=:��9��� �s&�E\��
0M���ZN�p`��흒��|>�L�ΜOg#�[��0Z�{4j1��(���o�9���
y��. �cg�UkXv�)4VoI�fOr�~?���/�$b�H�.]�������M�޽��ߤO�>���R
�׻��r�s�����m�`Ȱ�$�}�S�Q[
��T���:y��E���� h_����6`�iˏ�4GZVȭ��-
�m�t��Ƕ��ζ�$�Q�F���ɛ��/�F�j�;!�}�)�� ;;�W�&�Gk�����Oz�I~���_O��v=
��Ǟ$���),ܟ�����,<�h�ѣG�����Ͽ���ۏ��:��_l���MJ�m�>���Guu�M�\���Pv�F�i*�{]L<�YS���"���
�ݏ��=̚eut�H!̏��#�q+�wä�����@n^>�!1�G�Ɨ�=���$2$�-NJ�ܹs�ܥ3�:wj�䏓��_�?�uo3��pV�x:�~���ܟ��5	���E�h���΢_��̙3'��׶mn�<���A��}�(/箻�ܡP\6��elU��W�I���QwU@;Z[
�2M�}����f͚e^�q�/|^����D���͟�kut�HSy�C��T�B��u�����!ȁ#�cʕHi�v�Z*++���),�/aǉ%��0�O��y��O<A�^��V�X�e[<�ݒ?�!��%�R����u�L��h\��.wOf�HK�@~��c�{��B��"==���F6m�D�N�5�w={�`ʔ)���'~���yJ)�$r�����g���n-@��@+��2��i�J�/zf^�0�=<����_Td2k��u�ē�䯵�\�ߍ�B�����0s�|ΐ�Cy���0m�4�����i�N��T����N�o�'��#�c�6�iR^^��-[�o��vL�άB����o!�svԢzy�����*�S�_�d�~XI�R��
)..NL����SNIL]���?3k�,JJJb��qA��6O<�(��M]]�w֋���"@��JE���c�L��Y8Y�������9k�,����L�}�2���5��9���mร�c���(��ѣ;�O�Ɩ�[;�@6l��������w�-[�!%UUU,_����;�˗s�g&�>��p��Doz�n+�5Aݗ (��)�2h�
�|ȁ�i~��H�_�����4�,h��Ѭ\�����D$o�v�;;RJ|>w���>`MMM�D�Ψgi�kOCAk�Kڷ��ڶ
30�ۀI�9ˮ'HW���{~�O�
�O��0��)e٠p�wS��##<t����梵&--�~����y	�\|���k��|@�^�0` �������0�m;�_�����Ӈ���أ�>_��;��5�ͽ33O��f�f��zz�p%���	~�fR�����#��祔���L���D����8�۶͇~Ȣŋ���o9唉<��#t�Xz��z2& 
�va��%|����$�U,��� @*;5M�ȴ��k+^|�M��� ���iHjk�9�7#0`�8ٸ|ԑGq��Wp챿&))�'�x�V<�ēh�	��(�Q���u������ԩS;o��TӪ�&�lO�A�;-���CP�0�?FzV��m�a������$?/�e˖%�w������Q�F3w�<�@Sc#�s6�e�ܹ�^ ����'��ٸe {�u౭�e�'`��:� hk�w/��ˆ�d�eMh��;n���w�~;�\r	���C|��l����x<�b�P��k�2|Ĉ=��7�V�h�,<y�L��D�d�\�:�on �����iD���X�~������S[[�B���z�>7��'������ë���i�|��	�g��
:�c�N�[��� �� p��aH��8��B����;/ԓR��������~shQ���.\�����1���?6��z	Zl��LC� ��Ѿ<�R"<ix�x����:3��l�;.؆
�c׃�֚O?��s�9�5k�Э{���yeƫ6���>a���	�o���睈�c��{{�"� .����n����S\p��hv��.n~�at���#�
eݺu��1N��7oFA~~�0���Y�q")���#�]��$t�_��y>zR����H�tG����������IOOg����:;z���%''��n�������{�=�q���{	ї�Nbu�������op] W��%���g�/%�
M:�?Ç�E�b��n����x��wx����H�x��� ����+:th;���A��H�a� �,�J's�2�v^`J<Ycfғ{&��E�ۋ���S�q#�P!�vo�����\t�E��䐞�N]]�y�ߜ{�9-�x��0Jp�ǀ���� W ���;���*̙��F`���B�vE^q��ݻ7#F� )9���+Z�~������������8�0��0S�m������}<釀���K������g�àg�,_��o��իW1w�\ 233�ر3g����:�I3⯩�a���ضM�!0|pg��nw@W�`������+M���w�C� ���2��˝�Ǆ�m�X�������mE$�mKbE�������5>W�) �&Z���T2�wJ���䢢eht�Th;!
�ԕqq׭{w���ill�O�>�6c����w��,����.��?�s��aݺu���UUU\r��z([�lA�
����'J(؄t��"�m�
����M��� �`��3�/��䮻�:�t�����ߨ���0�D��_S�Nedl������Vҥk���gE���P�-�е�VV��B�sOx��n\�ބ�nŎn&ZF��KT�l�(�ի˗-`���g���|���u���C��ϧC�!����͙g�I�=x���8��0bC���ͯ蘟L$j�̱ǋ�)��h�ኀ�p5Caᅞ͟�k��;C��uɿ��V��;�\Hff&ZkRRR5j%��L�e�q�~�-JJJ���"//)%˖.����?����q+V,g���g�����Bx�T��𤁑�~��0Ъ!�E��h��H�L��h�
;��~��a�=1�
�5��#]���4֬YMNNN"���ߞĒ%K2x�� |�!�:��k�����r��>�:�(:v�Xb+Ejj*˗�`��
nc�=SH����	�L������),�гy���C�G��"f5�ҵv;��K�jHj�8갾<��_QJ'���ֽmY�X���>����f�j�J
y�����l��V�X�!%���i����4�/?�6#�G <�Ho.�(��#�f. ኗm���^ ���J���Dα�!�i{��!~�KKJ(+/g���	�'~Nkkk������0f�=�P ,�J4��6@J��}�	���陨�)��=� �B����/�q�&�̚b��� 1L0`��|���ۿ= ���j��"N>�7��Ծ���ۏ��Zs뭷�F���ۉD"x<��|��g�3&�Jv�z�� "и�Z̴�fG�'a����R��	HO ѪOh\q��`%c�H+���$�?�
r�3�����>e��Q�|>�����4[N�׆l��b"l䰣/gCI�W� {��Rz�mG\�.��ȿg�S���%�v�XD�6�S�ա���ة�Gpq�W)E4Ų,�̙ë����Of���i�&2321Msϴx��D���0}`�����P�
��T��i9���u��'��G� �s3M�4���*���&��{�>6�C���_����3���Z�D�!���:ض"H氢a��0��H�s]-��l��>ֽ�ĳ�5Ţ�B�+ �iL�0�.rj�-�T!d���wɿ�^�B��dTao���Q�Y¦������/OA\�AZZ�׬�駟j��/-)�G��	��7j��F�z����[�
�D���C�С���"���h�}paH��1�>/�-����FRڄ�[�x��a��n���'\���
JJKK��S������cj�;%p���R�.�NɂǢN �
�}���S�3���{RC���nad{���@�Q���0F&�,ܩӦa��RJl�&�B0s�L�2�x���Y�~}bݷ��䔔V#��i�Ԃ��FrWR�݃U&Z����v
V�:��bT��a��6"���*h�����)�7�evi�G�H���1W��Crr2[�l �PVV�8'���}��@���t�E8��RD.Z�(Z+$���^��F�����}U ���)ʃ��axG�v��%�v�hT�����#Z�luu5�!9b�x *+�0��KyY9�'�������%K� P\��N�:�j�+��w?��g�� �]|�+E��7�@҆�k�M�4�].���Xe��C�����3+�eU�F�Y�Y�t�m{��5k7Q[��www�ҕ��Ҙs$(..N�x�(N�Zk,�¶�(B`+ErJ�G�!�M��
`+��T��ߞCŐ�	�'�p_�i����
���4<�l+d	!L��h��C��LA׮8�^�a^QQAEE%��N��38��y��9`�I�;�7#F8⡾���;&��J9�f�&���������(M!;Q��Ϯ��
�6�����(�>��*�j�*,��a�Ղ�y�՚�k��-�#a�=HJ��e�c��
�����g/`�����)A���a�Z���M0DkM~^<3������/���ٛ��c!h���4�p��`Gm!�\;�o��gd;?��D�>�Å���fM��
8��\`�a�����UH"��G�GH��MۧO�,Y����hll����>��7�x��y��8�3�裏�ر#UUU$'%�Z�u�{���B0bh�D�_���,Hu]�u���.�q�y,9�y3u?��eD�l�jE�N�PU��-!�8oMRRn"�c$&�.w�����7E)��v�;f�P�,[�/��dfUkG�ed��i�F�@�N�ꪫ�Rr�)�0�#8��X�hW���<��Î���)į�������aY��CC�Q�0�#=�/���?r�^�"s��Ǣ�'^ �w�m-7��@k�0f������s���Z���o����,^��*�}��� ��������V|�8�V��2�2��HOM<]�����\d��:ʪB�F(�,'��#���ɛ�)����Ƣ�^��JQ��BӰ�����!�Q
���#������jì��@Ye����B����T:w�e�5	gg�g��;u����0x��Y�f
]t���XQ�����������Wg0{�lN<�$�Ɨ�]�v�w���7
��� ӶB�4=����h��}H L0`�խ��1R���m��	ѽ���{�Z6��I�'��n�9��\q�!6lK�.���/㡇F)�eY-&�544������n�ITUՑ��NjjR�X_$H�4�ͺ�u|���Ҳ�XZ�g
i ����p�����#o`]8�%��nSkv !y�Ϸ�n�V6�Փ~�8
�8�ن�Ӟ�͉��2��լ+�'���^���)�I�deRUS�X���M��q���"�b�6��ɼ���~��x����~n��v����k�s��L�6���Zο����ml��0L�ڋH8��t�t�D��#�a�/���U0k�Z��\ɱ�~C'���_�Zk�w�C�W�S)�#��O~^^"��~��k�.�
�޽{s���SUY����1�iƺ�I0���J���=���&#=
����Nw��MS���vU5s��JiyӶHZ�x!P��KT}�w�g>@������P3�A�_�	�H�	2S�x���?�n��>8��<�7>��YP=�Q�����\�l��ŷ�,^]Mc��i�M�ΔF��Kvf:M�!C�����@������߃9�;n�˶�����n 
�^s
�e��{�l�2n����u��.�7�B�)���m�����W0p��X�X��h�>��vR 95SDyIH�[��Z�{�R�h$ʐ��������W�4y��w�EߒH$����7�`ܸ�QJa��������u�eS0�e)RS�1L��Ǘ�ŉԐ�)�����­dg���#���@�5�7���{u_>K���Hj��~BvMuf�4��r���p�N��H#Z�o���љ�Q�������?OyU�Uj��
c�&IC�<�w�0I��R��������Ԥ֊� ��Φ������D�Q� ���
���Z��ٳ�����u�����9��1t���ꫯ`Ƞޤ${�m�����D�Jj��&��5k��x�8W ��'���Bs��)QaM|�0�[N��-��#a3h@��#�J)�~? ��o~K��Z������]����mj!�����1�f����� °�D{�5�� ���2HiY���7��4�
mxP��/! ���P�?jB ����Z�ډ�
ZzPZ�5��Bj��,Y]���&�!I�{0M��u��7o��IJJ2RC�nȮ�g�YYYlݺ5�x�;뮻����f��i)���ć|��$%%�.��Ν�鐗Fɖ0^�-��FBk[K�ɔȗ������k�x�^k���DXx�S�7�������m�B�{��ԯ4~�A��=Z<ܛG�Zk�N��駟���c�ƍ���[<�̿� @8"--m���u�?D-��CR���w��aނ%XJӳgO��p3��;���+�c}i��g2l@.^��" ��PR�`��A+4��7�M$ja�N��aH�H!0b����h+�L��������j(b���rVע51�;�+��}>�^ӌ�.V옚����!��������mYX��������a@��T^~��.��~;'�p"���t/�gm�|� �v�{��ʎ�����J��'����Wʽ�X �,x,ڭ�)gK�J9��\��#�9X�MVf�
�{ݾ��c����s�=�=�+����]:s�'&����&���(�U:���mk|>_,ڕDm��k�v}	�ο���K�y���tt8��/�j�d��D��laՆ*F�H���m�,��zcc���B������!/?�̌L223��5��T/��	Q[��)DeE9ee�l޼���,]��A����W$����iٚJ�^ZFc0Jr����I��|I�=�8KJ�s�5t휝p~?>���'��?��茶�>1:�y����ϓ�ݻ7�����,�@�>]�`�r$I���W>l�(�w@���ٰ|�E�I�� �c0Y��k���i���
��oO�'QˢC~YY�; RJ�R�=���*.��R�Ҽ��K�Dn����@RҶ��[�Z�����*�X�"-5����4H
�m��~��i(l�CCSp��I]C�7?^͠�9��n��t���mŒekX�t5y�Y������O��t�ٟ3O9��4Ѩb��2��,�����˾a�ڕlٺ���z*�k��)��tѫ�3s��K�	�=|f�Gx��mc��$����c��5\z���ꞇ���y	$�,����L]mm��o~m}�u�ӈ��W�N�R����1���黰k���ڸ�G�V�7
 ��!�2��KH��UT���E���E�N9���N�bK)�Zs��Gs�G��9���HII�f-���|ARr �ϟ�۲IKO���N8��DlBa�P��/�~���b:�e�_��-��)�1M����n�������#%ɋeۤ����?of�q!LAԊ��TKu�VRʓ��۵H���)��d/~�I4TO0X�R�>�Hu��N;���Fl�8i�u�y��5�"��d��:����`[a6o&==����Ҥ$%���D}}C�%���Ʉ[��h3_5=-�������uc���=:�������a(;j���n�O^�a�K_�E�{� (*�l̚%,aM|\��v���`�]��Ti���ި-����;n=746�z`\V�Irr2�X�"��,�J���f��E���[jj��e�&������'�E�q�B+Mr���͵<��"N��P��<(�>t ���b����T�p|^?������������u������H(!j�����h��)Y����>^��k8K�FKѿiz)-���/N��1B�]9j�=�H4J�~CIN�b[��������������LhӦ_��{��y$�N� {ib�E�6VL�����1�t��bW�^s���> EE�m~���K�{	4�];���}q��Y~7��99�Za$'�H
8��R�ċ�КP8#T��eSQY�@�vާc��Z;
�>�-�
���Rl[���4
�9�`¡Hlܭ�i����σ�k&r���$��!
=
:q����1
V��d���0�!%�e7��;��y>�t6_/Z������o����\Wװ���󒜚���6e9�@ ���y�=����L��X�r3�{��Z[JfO�@h��Wq�^�3�Y��X]�O/�w���?{�� /7�E��C���x*��m|>_�|n�4HMK'H�9 �"g�ߏ?�Ck��9p0�u#7;���q�9����g�x�^<��cBrR ���nźJ�Y�3ֽ��qcIN��l��y;oz�S��B2v?��SM}c��?\�!c�0��x}>���Dp��@~n���,�����O�ss�w2�>?��i���V%�X�iD�9*?�)�d�'a�N���^/�
[���6��[`��75	�[vD�t�c��|e�g�J���D�K�v����g���gm'�lgU߭��CZz:�$_�u���xX�l����Ё�H�̬,N8���C��C8b�1�A4d��Y����22R��h����#����ퟏ�42���`�ꍤ$~��m۷#?0!�>�j#u
aғ��|>�M�������С�� �2t�~�ر[��蘟O�^�QZ"��� �!l���O�?�LZF�����۾��`0��\�x�b��#;3˪���> �0����N���g�fM�`o��K�ӕ�ųRz򕊸���"(��y%i���,B�`3Q�[1�l��5IN����	��5Y�f3��}%~���x���T�
a"Q�C(Ųm�X�.e�ҵ44���P���.�������T<����:���`H�|<���ū�?�g�C��y9�5���0_/-�kJ<^/�W/�o���^��2�����C�ݻ7�F-:t*�G���t?��Zaj*�J6s����1?����uzx�m��3M����>�Z+��df�����[a�@+-�|������-~��	<��%!{|
��c��N��7޶����^��Aي��KzZJ"�in'J�F�x̶Ӽ�!IK�����q�p�5���^ݻҽ[W�^O�g}|��aH� �Am][+	$��zM|^iiio,!lt����%�����CF%ֱ��\�R�>�/:� �hE�uAL�D�(�}�!u�a�� ^��pD�h�jk�1c'���H8�I+H��Ӧ�ƳOOc톍x��Ϥ5>�IJ��G��"Z^�����WrŃ�̌���@�̓Hj����|e�g��u�/�p�y��3Y�a������Cr�/�o�6�6�8���cJ�S�3
/�� ++�?z7��B#	#���bE��|~�Q�'�9U��H���Z�8��4�Bx��7USV�@^V
�
@��lg����*���D���X�|3S:�-����d�*k�
��4$�M��M�CR��N_�"ǔ�$n��uTUU1x@_B!��i����"4��m��
� 
�|K䤥�6m.�!���?�ۀSnٰ��[�� �-��K���I�������u��~�����*ƣ��l;��4$�)�����zP���D��Uk�߬/)ݼ��.y�I�i�)�l�&���Gf�~#	�-�����7�X�������4�7_�����R��^F�tk%[k�z��E�s�1���445a�^��]z�������[�?o���7�i��8��H	x��p�(P� �i8��������孇��|�m��>���z�=X L ��'�y������5�U��\'A9��m�P
Az����o��m#�@J���Zf}����U��5���������EG����!�d�!������ЄR�D�>�,_���
�!�`��t�W�K�B@$j�!?�~����n%��{=!G¤fu��3�as�&l�&';���:��'��d=�<�$��"7��o(����M4MMM��II-�������0�N�y<"��/�Nr�/[
��'zA�z��������+�C��� Gqu�?�*ix�+����fଏ7��m�A�� � )�!��i���:� �?�7M���aP8!3#���<���m��������a���T_I�gb&J)<������;����7s��;
 I8�o�ndf���fպ��qv���!����?p���G��(m �dk�f6�l!))��Ϧ͵��7�z18*C4kĄvPj���T�3��
�Ǯ���M�\�%�����ɏ�C��h�ɥ{�#�G ̿+;�F�{���O���zOASS�p�&��#
�=_�[i


�DBx}�����L?�U]�ݫ;��
EB"��x�z/YMyE
�5df�Pt�aFJCmm��-5��%ѿ_�3ӱ,�;�b26diȠ> ��6�iK5^O��IN�Q]��u��"�Inn=zv'55)!�0`�P~}�a�\����C�deeaY
�O�����HC'�i��H!�t-���#��) �6�5 �q	 ���%
��
�O�l֬)����i��'L0�"�!����q�.ګ E�o���!�x=&�6�0�����{y��IIM#	���IQ�AX�"��t�j�0���d���46E���֚o��Ķ�}��m�����J��D���t�g�*�ߥ�0I�~�(�RC}C�̬$|>/��/cƛo�'�����z�k�=j)��h��z�L<e�u5x����bz\#�䁇�bcI)���{�t�4����	���&�݀�H$�v��]�::2���4�*r�;ŋ���
��c.�=̶� a�]����azG(�q��}��������z�ՊZ�Շ�D,�ر���C2d`�_�%�mY�,˙_`��Dǽp$�UH	�L�IUu
h��%�� �xL���F$ݹc"��mR���գ 7W�l�G�弹D�6IIL���3�k�R^Q��dYѨ"-3���,K�c���03�z��_z�⍥x�h��6��!¡h���w����
@c)�T�zZa�X*���t ��_0��å4�R�[�������h4�m9��?�ĥ�~�m� ���5�E��߷��L�������U#p)1��x�̟KU�f�^�����"/'@SSMMM�74�1�����F�ݭdkE-���~}������H ��69�t���߼�&a�+%�ҹ3�`�`(�eY�#�#��b����)lP�;"6� p�-7���w;� CQC���և�Xm�Z��
p���Z?�a��>��mG,��h��S�U��K{J
@�@ݯ߹�!B��*��%�H�/b�j[�����x�0
t(��`�P؊��wF��[�崙E P|��7��t>ee%@�3O�Hׂ�ض�a����Ɩ-[PʦK���f���D�aHjj��"�$�ٽ�Өg�n�ӓ�c��c-��*j1gpc0̨AJɺu�x=���$�
�EVVn̵м�Z���9�Q���ۛH4��Q#b� #	�[�7���
�]�,T�]2|(�����d(;l�yS�_�5k��{���=D L6`���j�^����>$����ш������x~�0���7M�hT9����w�2�vCBzHINa�ꕬ]���=Ҥ�@���C��}�Z��R[_�`k�@cC���0)��v�@ �K8-Z� �Ν�	��p���FÌ-[Ԅ��>�1c�(�������lEj ���|�/�I��]�
��ߒ��KfV�#�3
ж"$���B@8jY��UmO+����I4#�����FJ�c�����G/�Y����kE����X����QZ.��[
B�(�p�g�_���ls���#aC��m+��$��Jr�Di��B���G"��P[UƢ����lV-�������
HA8�1V<���EzZJ����J� hl
������Ɂ>��H��`0[�g`Y��PJ���NzZ�c�k���4d�g��r��K�M4b����m��1�?�

M��@.\�`�v�2L߈���?1}�H�w���]8�q(L]]=9��?{��?H����z��,�<��{�t[�H�.�466�����$
!
���2~����
��+���$3�+�<��#	X�J�HKM&33�pxG�q� ��d&��p$�7�i���\����.Bc���E������'�H$B�^�����X�|�Y�_8�@R����G�P[WOmM5�k�^G�e%����Ｇ��.�O�U .Z�S��<оW�s`��)*(�*
o/�-B��ھ�ck�u���L�&�H�m� b�{	6ֳeK9�w�5�e�Ҥ�g�����eE����Z��QC#%��>V�+f�7�I
xQZ����)s<�dg`Y�W+��c�����#Dcѽ�륪l���:�[+E���7U�i�f��}4jӫ� ~{�o�ad��Ŏ��^
-/������moe�V�A).�k��l���=K�ay�O8�˄��*�_�NE��,�׵��meM4����I���.$tb�Nx���q�"�|&ZY�m����w��o�lˊ����thiiID�M45�D#��Η�"�:���9�3�R;��$5�)ċD-�m'��
��o��y��B+ˊ�Z��=! 	�ǖ/������*�M���6�~l�ƶ�_4~XJ��U�uͦ-�p��T@�-�k懲�* @a���?�t}�}V 8��ֲ�D���] �`S0A���^8��l�Z#O�������������g�$�Aّ�`��4É\{s�##3
��X`!J;C�RR��8�V���
E�ٳ7��>*+�hhh�������k��J4n$��Y9�C��[��-�,���-"��D0L̒�9�=��P0DuMcL �����^熶�6�qC�A��r���V���`����'�M��Y��l+d�F��� ��l�����I����9�Zq���̆�%�WTөS��" XJӵ{/r�;P[S�����Q����jV�����q{Ji�^/����'�gu��3�b�e�$?��{�&)%e��>UQ;��p���6ӱCF�5rk
����Q�GuM-5�M���[��nW�B
o�~�ɓ�`��v��CU2YN�~��c�}��I�[7�/Ck�6n���Ͽ�RRSilhh���|��ˤ���/�-�k:� �Sg�.����<ə4#8ݰ���kn��I�N������|���V?BrZ>c9�C~5���c��c}~�9�z%�6me��b�2S�ą�������ԝ�Ύ�>~�PV^E]C8&^�{��w°��%M��ݧ�8��	0����X�
&O�*����'��]�� N��MĊl~���\Biiiβ�6r. �r20L������6�{�,�gnә�cYQ�mŖ퉝�+�?������o&�#�x�f#�-+JcS�`�p8�V�ώ�-[��>��*�k���l!�Z��������Im�e}�@q�f�a;�
م��W�VQ���6pB���3��u���i��9K*�^�� p*�K6Wlj�E=�����l;с��� ������jm1���?d�yHI	`Y��e'�,�N���?\vh��c?�����|��� �i'2�il��"�/c��'3k���R�V���RX�d-3��1�A��,~Ԏ��0 �P��������OCC����D�ј豾��Z��[���ǯJ�Z���0E1�vu�' `�.rj���ZE�5��E�
 �cP^����e-"����}�������d � Ґ�xk&���>j�霟J���t�E���d��� �N���)bCJ�(��)���x��6�O&7�5VL��J#��KR�GFZ2=�e�v�n����N��mq�766b&��E��Rβ�ҒR���
�q�v><����%H�'.~� 5����9�ǀSf���*Ў� 'H�b�ۤ���u��B5$��aV��H�^=t�vg�*+*���j�>��h�~/]�t`�Ut��[���9_1dPors��z|������En^>��9�deSW�����qֻ�Ӑ$��?�3:��~/�i�Տ#6X1��� #=�d��6�
	V
Yl)m��i����G0L�4���nu ^ XUUErJ�NϏ��s/8��},�=�_v]r�
�)Q*�굛[	.~ĕ(�RiqQ��ѳfo���/�v" �nICN-��&���.�#X�|G�/���ڶ��m��h��b ''��˗� �V������4V�)fѲ5$���5��'�I��H`��GnN&���f��B��Dm�bKY��杅p��x�&II���-��QѪ����5cK�_0h��X6�IO2�(���߮f՚���n���������D�D"))�Ҕl)���O'99��ܴ&*++�ܹs��ŏ�#����+�����|,X�C�H\��UP���� .~��K*����o����j/Âډ X�LD��=R�L�"6n��EK�0L�]�6FD�M�a$���|���֚��Tg�}$�g,
�>H�,u�ݳ+�M�;Ͽ��}���n$Zo
�������yAJ���z�&�~&������&ҳG�o���B<�4��E
 ���X:b(��m��II>~a��Sn�}�It���%y�X�r5��MB��z1<��`E-��
Z��ҩC��x!����9i]����� YYY-D`����'�ȄS&����D�p�)-�?��!X�����&RR�Q�voJ?IhUB��
��:�xQ������(���'��(F����br��|,_��P� y�5����o��w���/�̳�F+��� 55���r:w���k��D����g��g�HYy�[*X�r�|����|�j���<�$'!�`٪��4�NN>�8~}�ql.����v���l�HK��{�u0��F
A$Ŷx=NW�`M�;]�p$B��$y�?���	��$''���J8��)�֊��Tzv�L�]�ٽ3#��e��df���`�����j|^/�a$��V
�`��͜>�T.���~�%�@�󟝕4O9G�o��h��AS�p��m%
_���n�)��`w г��t��������;�{�&K�X���A�� ����O0�9�둇��|����8p�Xz���¶�С7n��nm'���,�r�>�/�~{$JiV�Z�3��滟2��e�#Q2�R�R���/�͒�\|�t�G���f���V����aH,�FJ��m��xę�D��}!��Hfseh�ϭb�٫�37��'�dS�f233PJQUS�m�t����ఃGR8�?�:���l�k�j�⥵��-[���k�k�!%O?�$g�u������+j�`�<:�D���������� ���.��#
i^T��ԧ��O�jwڽy���L���ګ��메���]|�Z���F�_-m�7��%K���K2t(}��CJ��͛[�@vv6���6Z��L��9WJ�z�+��׃+/:�f<�����I'�ǲ,*�j�L�`��������f�bzuTl�b.����n�즢�&1�;�܁0uuM��f;m����Ѩ���g������|�]�UT���JYE5�
M8�'Y�}����'&����.�����G�u��s�����C��E��cS���c؈�g�Tr�r�m7,Hk�����Z-ـ��o�aR.�J h)
a��ܔ��C�nt &Kf��<�7Z_���r����ި��>���3���v���2i"W\z)�eev��>��c�l�+_JIZZ[�l�K�.���Am�������Ac�sИ�,Z���~��o~B���u�}L<�D�<�7�-�L(ƈ�����hq<**���n��8�B�(�u
t����s�ޛS#!/7��d>�O>�r.���74�D9��E\v�o9p��m�R���n��?��x�^<�ŠJ)�;�|�<�4���"�0�P��
[�6��e�V�is
IIi� p�K`(����x�uK�Mߝ���m0E���4<�JO������}��f5����;�Vl7r�(���?�ԩ�R2�o~��k�PZZ�n�OJ�b���C����[��ΈA����'9)�i�_执�s~6~�����1��t�3I4jQV^��4w����ʫ?똟�,Ԛp$B��<T��)w������BEe
cG���aꣷr��ah��t��>lk��blg7n�D�.]v����F������8��C��GN84�k.��O?_H(��5Kr���_�B�QJ�QT4ٌu�-�n �%�l9�a����w�c�>���M�,\���:���m�1Hcc#�����x�.:�|>|�}'�
��Z����m�466���SR���sG2v?>�� ��\B�0~�9_~�?����d�>?^�A��m�n��j���qH}�������Ҋ��r�SIM���ک#e��s�_��%>�ɿ��Zޛ~?��R*�+ߞ8w���F�464�����݉G��r'��[n��F������+INޱ��z���Ex�>�v����s���>β�)�郳��X��R�Ha��~�.~����h���^�߆aPUY������/�Ĵ_�G��g������s�N�_��9�G!`�
��ß�?�7������`��U������1?�������7SS[�a�8�^�,�\��t� J���Cn�6����V���c�����³ND�X��H���D���b�s�[���[���g���|8�c�{�yf͚��>��e4�76ld�ҍ>�r ]�����N����].�n�{�|G�A�*��]���'!޾u֧�bYL��c999�������
�Z�֍Gy]�v���
۶�u����\˶9��B>��/�ޟ��Y�n-�~�)�邔21x���N�������`}�f,˂XW�a{��x
=�0�顾��+��o�t}z`Y�q2d�6�6o�L��="��8غu+�i���J׮]�8i[�lu��N��ǳ�RY�c�&��]� ��miz3=:rLQNQ��� L�``�S�����@��X���E��� 1^7^ܕ����G���q���'{���ӱ��RJrsrX�n�N���O!0
۶��9������I��,Y���r�I�����W�v��R x()-���<q\r3<L{�Y���`��o��{n�*���4ۯV������$''���Z�O)%�msHQ�u���_��?��?�4'� �k0���<��`.��s��������UT#����ՁY��m��m, b�����I�w�;���Ϻh%4��w?�=�i����K���k������W_~��7ߌn��{��Eii��7[)���x�;8�h$�:r��%���$��ͷ+���;�/
�iPW���k?��u�7�Gy��k�򢉉��R��u��ӧ���N@�AJJ
/�<��O8���������o�Z)6�g�W�HN
$����P��e�C�aB�F�myG�{�>ʧ��Ik[�Z .~��H
x����BM	{�y$��f��#Y��׼��̞=�h$ʳ�<�(������������۽��A��ǳ�L�O�{�N�?!X�z�֗��y�7o����y��ݵs|��M����8˲1�Q��E�[�l��������f�;��j�J�}��ӯ_?222v�������~Jeu�ǵ�]�� �Vsb�!�����)����	S��͘h�~ڶ������}�^��.����u��8|6�S�ϟ�؃�G���׏�_΍���зo_�7lأ�x�?{Zj2��w�:%��fΞO}C��6�ѱI�_�[D(��N�����7��'��nז��{�U�����)��\w�55n<o��˗.�ч!%5u'��@)��ߚ��p���h5
���R�>�n����7�����ʍ�]��G>Z{x���!;4�Z�� �>?O?�$+V,�{�������hIl���;�jժ=�h���R�?�(x��9x`j����ǚ��X��Rg��i2x`�D�=���������r������t���#��<���5��<�l222Z���cE���}�7�6���w��]��Q�)�����F�Y�o��i;�F�.~l[�����f-����ě�bvv6�]y�6p�]wѭ[w��V.<�D���ݧ����I�{�#6�F�����R��h�ǝ�>�B�Dy�Y-Z�=��m۬Y���t���+���G1�w��/y��i<��K�n��nʶ��|M{�}"Q�.��h#��uڂ����E���TT�y����`�	��
����՗_��/���^';'�ܱ����}�����n��'y"��i�����'�޵RX�"U8iq��w�KJ
���Q]]��r�"�8�/]���]�z};w�v;g�sϿ�"[�n�+Ϙ�����Qq� �����w?�����D�(.��h�Z�6 n������d^zu6��u-��ơ���}��O�^=�t���q����;���fQ�֚Ν;cYeee;�^�#@��w�vI]}#���!�Y���>RRR	$����F�N��� ��m<���KZj2�%[�>�}� +掴�}wȿ�����*z���"���"�0�6p�QGҵ��Ǟ|��7�w�O�5x��w�Z��1��.��h�Z��&b7�wѪ��{X������C�'���&��������(N�-�9��,]�۶wH>�ŋ�����t�<�,Y��ϋizHMM#%=�>}�R8�#i�^��QӃ@�D�R���/���N��W�㛯�a�С;������$�:�h?�WL{�9���2�4���"�uu�<��,�SRZ4�r�bosZ��w�����.
��ڎ(܉.v9L6n�Ĥ��c�Ga6+ �7�2d0s��K^~�<�8�F�n1!.�ǃҚ��b:v��.s�N�*hhl���>�˹�Y�d-_}��n�;ӳ�3��s�JO%�'	6ֲv���v��n��r+V��W���N��]�HI����U�6�p�
��R��Lm�I�?�&N+V����ѭ[�r�J)���s���r.��̫��J��=�ᦛ�Z���<7�5^x�K��R��?m������hZm���'ai�]��yW�x��A�J��UT����]�bM���J��"N9�8l�n��-N��t�V�QGͿ|�eK�r�9gsʤI;X�B>��Sz��M��	j
Z;d5��b,�@r��&'0M31ZXk�-�"j9��aH)�E,�/����	�ѨMff'=!hg��|���Z���+�կZ����_|�'{�SO?���9�{݄��?�r�K�������E�_ހFȨ0�~���0�U�H��	�n��S
��OYaۍ�]���l��~�
N<~<��͚����u�ߜV��e��q��7p��wӥKW�|P�D���Q#���def��z�O� �6�Z)Li�r�*�! �Ao7!1������wpI)	���5 ��v����̟ϨQ�vpp�+�z�	6o$+;�̬,�>�\�Z��{��2Z8
�a��Ko�|U99YX�k��h����4L�m�o�j�Z�V$�	f�쁏at�(�n�>�b� �~/�6�ѭs
ÆLL�kN
RJ^|�y*++y��G�ѣ5�5̛;��ǏC�v�� �i�����o��{��=�麺F^}�c>�l!�K�P]YI��	bGC�f_v�+Ċ}����Z�>�
7��0�X�h5��.ß�'//s�;q�6w�\�v��ø�8��|���v�rss���s��sظqdee�D	��j����L�pK�\�6�/@���0�ɚ��h%����	L��
:�P��~JE4�ѿ��$���T���k��q$��� ��G����Y�-[���b��<3�YgЎǓxO��0??���J�������Vs� �o��XC��JF�\��й/R
v�[-����X�͊uu�sjw�i�	Q��|(��D"��k����8񤓸��k�6u*��{o�s��=Ð<��WX���ܜL7�w�[%�R�6L_���S�%N��e+	��&Km��,
��Z�w��V&M �a��j}�%���l[a1<�����y�Y\r�!y���F9p�hy�1�� �x/����石f�z���D�����&BM�,��kD�S��u��O�����߯/

}HII�M��qp6o�̖-[(**��y�R���9z4�>�hn��ͼ��[<p�?شiݺwߩ�()��#O�CzZ�[��=� R+Kk!��9���~{ryL}��[��3���3�7�������E[�4����A����tOD�͉DA(���p�_��iS�r�5W���O��{I��ء:\�̙38p�w�έI~BJJ�x��O�m���&l[�AkMjJ�a2~�H���[��������Qt衘���͉\k�'�f1h�`l���s�%��{��<��3;ݶ#%������\������E����2L��T�
K_���h�9k�kp @X�˄�Cc�e�.���T�(n��<��ml��_�eY��~.��"֯[ǰa��ۯO=�$K�,᠃&���x�;v,�?����%3�����z�u��=�f�I�i��<�5�M!�l���.�U* ~��� ����1c�xv�q������k�����S�y������B!|>_�c'��?���|Nf�k��hW��h�����͚uK��R`W���CN�!,�L�<�՜.v�0���`��q䑇%����E�2t(K�,�����c��K/%���@��������l<�@RS�f�|�ol�X�#O�AS(�ih�;K$��9�(��Һ��������l
w^�ׄ�<��c��ח��T���27�?�2�����n[k��p̉W�hy5�I^wݿ���؆�3��Nݰt�����w�S��m��)���ŶB��tO������PئK��ORR2v��=� <��#<�����\�y�Q-���[�~��p�m&�E�6��E[�k�4<������4�0{�l�B^^��:>��+O]}=��;��N8�P0��7��eW\���CA����}�|�)�[�g�7���[J��UdV�~��{��ǈ ��wR��˄�Z+7�w�[`���\|������ls�����/��]w���/������x�)����v_|��Q#���hS'`7G$m���P�ٳg3|�0r��v(��,�4Y�x	��^� �~�dddp��W���Ʒ�d��>�&���
�珋v�(!=R�~�a�ԙ�:�],��9� ��'JÓ��Z.���-�,����|v&~4�0s޷92���w�a�)4����ٲe�S�M����}�h�͝KeEE�L�&B�����K���M����|:{6#F��)�+��_��̬L***��ʫ1�gRVV�m�;T�k��@$⺛$�bH\�w�~�_�b��.�0a�.�����W�����m��b����O庛��|kbY��������Of���SN�S�N��Ӈ['�B(J���"��Ca�lܸ�{��k�������
n��j���r���sF�INNNb	`��_JɌW^�?����:�)�p��)����j�.��D��W�RR����d�������;��E����*����1xb���'ۻ*��E`�ST�A�*�Y�TT�ꃆ\��!B���K����B����������c�;��޽�p�����#�����ϷC~8.�~?��n�Z�-]��@����鑿���kײh�">��w�Z��QL�d��Ox��Gx��Osť�2l�0�}����*�y�Y���wp,�X�㙳�������t��.�
��R���h%.r~��.��]�"&Lxɘ>�d�`��i��d[a���E��i�TTTp�_N�ҋ��i=@s��������C��nk1\ȶ�ļ���7o�<l�f���u�~�����믾&
r�$���n�-�9�3m�T�u�ί���ϴg���o�a�qwAJɖͥ���wx\Ź�3�l�Vս�np���-�0=���&$$!LH	�M#�HbH��6��{�EV]iwO���]YƲ���l��>�b,K��ٙ�ޯ���eo�$b˰�?D��g�0�V�z�̟�u�߳y�ݩ
\!fϾ�4���Bs�V��П�<ϣ���ۿ�w�~^��?��w�5?��.�����o���0���{/_m3B�m:�`p�O�NUu���ihh���B��	B�-�s�}˶8�����\���SO�n⊫f�[���=FEE���'0p@k���Á�����~���]b34�!z�֞��=L6Y�����N>ig�`ƌ[
 !��I*�����XBaX�|��b��M�q@�� 0�ٛn�_�~�����Dx��3��r�i�q�׾F��� �^���#8��y��WY�f��B�[)%�6mb�ܹ�=�	&��N���>��|���v���$^|1��~>���q�
�s���#�80�ׁ������s�(O%�B��=�� B�|`\�/�"j-�q�1xW���0�+�ҿ!�I����)˔	����w�%}��(��������o**+��'>ɟ����~:߸�6�������f���A^�M�@��R��`�\�O<�D^X荞�[���-���:Z)�L��m����֭޼a����SO�?�9�֮���۶q˶۝
Ph��=㳷�CEE���C��#m���1q˲?����#�b��M�#�9�?:4�!�u`��m�]���w��J��t��q��?�y�=�<.���jk�����������~K$i��~~۶m�\���2jԨ���d��yÆ
�_���Æ1d���Z�7�k�����2~��_�[/ ��z<��������!��C��s��s�6���6f�j�	e�N�Ba�_��J����:�o�~��0�$��w����w_�	'����'��e�N;��}�"��b���4�70v�Xz����!m
wmm-˖.%�2y�d"�H�kP�Zmm-�������og���(�Z��]�啗_��Oo�9
�.���݊��X���!z���Z����7��ŀ�)�˗�V��\�W�
�"�)��!�y��L$y��eX��3N�����a�cmb���~�����������Wn����C���܀��A3��(����ӇT*ŪU�پ}�d�X,�j��H��_Ass3�-b��m�7�Q�Fa�f�!��5 7�&֭[Ks�˲()-%����0������k��=���b���q<@��Rڕ8b~Þ+W3s�����K f̸�ܴi�JUO��aFޮ|���C���'�<����hN�~^�ů-
-�F���W^����q�W2����'?I:��3�����ݻvS�*mmlk����b1
�!%+W�d��ݔ���F��,�F�����ҥlX���3y�	��oL��m�,��
6��y�ر�G~�ys�1f�Vq�Cy�[�l������x� �!z0PB�j�����t/ش�l`�NU���� P��*��ձ b�$�<�2e%�������n�B�߼^`ʴ��3�_�}7���L?�$�{�
<����+�h������R�R�իV�c�v"��Dba�w(�d��!.<���Y�l�6m�W�^�8���y	{OA��^x�yF����N>�G~�O|�S,Y����jN;�t***p�:���۸�=_eݦL��V��8��F�oE�	�����4Gy?B�L$8���B�'��!z��
Z���*��m�W��3F~f�������Z�s�|���ƆF���w��#���3�P]]
�o�k\�
(F>o��3.́rƙg0h�`֭]�/���
p]�VlH�c���PQxORJ��ؼy3���c��e��Ջ��:�aÆ��L[��P��.��񟧟�C�?��u]�R4�_���p����?g�ȑ��=��߲e3�����ӤJcx^h�C �|i�%����o����g�6�Qe��h��Jy�a��{��ƒ<��+����2��o�����D2Auu5�|�K|���4^�u��3�+����(�Q�- ())a�������k�N֭]�ޚ�d2�?x��@w�����!߳gk֬a��5��ψ#=z4��T�������wl��;/����sK�,a���8e
Zk�;�|F��5�]�ZPy`���i�s�7���MͤJ��q|��Z��j����G�G|gΘa��w�!��J��0��''B���p�'/�k�|*!P������x<ƨQ���?HYY�͞Myy9B�/[��yL�<y?c��ⷶ_�Z�c�v��A&�%�Q]]MUUUk��������}�q���a��]4���#��ӛ~���vL,�_�������?c�E|�ӟ��?��9���k��C��֬^͉S��'��n�_�����Bn���]�(IFC�� 
����u����mp��]�� ����]s��SZy���!� �I��n��~���1�h����vF��O>�%]�3��/g�}6 ����y��G�ӻ'L�n��uj`{�q{co�����]�hJ�1�d"AYy9���A���"ZkZZZhjl����Ɔ|������݋��j,��ﵶ���#_���8���	�8h�w��O�����z�Ғ����~�IX����䩧��G��'��l1/,��0�ړf�T�sĚ �9
����\�GiF��{ٰ�?�q�`xP���/�%��{�z��I�5{v���W^�m���5�.�}﹑Ǟz��}�rʴ����?1z���I������������L}}=
�����x��m�D�Q"�%%%ضM$��,�a ���7��yx�qp�MMir��L�q1M�X,Fi*Eyy9%%%<���~��
��ч�fO
W]{5�\p��wz����e�ؼy3�i���/����z����<�D����-���*ŶeX�⭄`@���&�7~���.��(�=�%YٲJ���J���8I@]}���p�O���I�Z���X�ů~�K�.]�O~�3 �{�Y�%%�q�7hinf�I��ꭷ��$x0�q��Ass3�L�t:��y47��:�W@J|�E��a��52ň��X�ժQ�H$��?��?���z�*��8�W_y�����ŋaY?�я��w�u�~~�ݭҽ3������6����o�!UV�*���V(!L�ҧoZ�����a�s��%��3��,)��Z9��o����Q^�dÖ,���|���3���[
`�!� ����������o�k�,^��n������2r�Hn�������]w���U+W2n����i�`�!�]���PRRҪ0؞Q~�ࣶ#�;J>ڋ&�Q���������x�ϙg���E�����Y�t	%����;������2-���ﵮߛ���m[����Ss�RUY�R*t�C�ͿFI�45�+��3f�s���w�`������uY�įHi���V��8n��&1��?��u{�s��'`Y��
�����d���<�裌�0�A��_��?�{/�d�];w�u�V��|�;��k�m�����W��J����Q�>)�~�7�Rx��U0�Zi�����y��j�J���Z&�x_r	&N��^����	'2�o#UV���6�G�����UU풝�CJ�3����6��沈�,��-��YZ�������Wޡ��-fϾ�=�%Z담���B��}�!5eeU���q��c�ҥyO�<�¡�Z3f�X~���|�^�{SRR����f劕����w��?�sW\9�ճ�η�����j�
��0�VbP�۷%o4�3ڇ"����J�VQ)%���7oڄ�o�~;�]r)�H�l�L&�c��lX��/|��rY��я��w�K��	۶9��۝���J)��,���O���gO��%[e�C�xCj�))��ʞhf�<l��0SdD�YҰ���/���8�5��GUe9���+��/��)�Ƹ`X��<��(w��Ox��G���>ʧ�����`��]\�����������ٟ�uߺ���"�L�u4nA_��a�=� B�F}�C}�@,
o��/xᅚ�ys���s�1o�\&���s�#�����(�s�)�p�_�姿��\���rο�B�.^���ˇ��#���}I_��^�,Y��3?���8�d9[�m~!B컟���D�+ f�w�v���B��V�R�h�Ba����ʫ�8v�{�F�Z$ؖB� UUU�����k���SN�O���k^��3Π�W/�͝˂W_��7���M���-_�.����2-��<��%K6|�e��{�҂�.�D�	F��lۺ�h4�c�<�]?��\z)���x�������aV�ZIEE%�e�8.W]s5���X�v-���?�~�I\w�
��ݻU��������N����>}�/ټ-Cyy)���q�!B���r�i��% b���j�����?��{�a �[�mk��$�IV��a�?��u�2yv$�R���kt��ϸ��)))��;�dЀ����������K.A��g���=��q���og��gs�u׳e�f��÷��&W^5��|����7,[�8���655���@2�l�,2--d3��RN.�����͛9j$�L��~�3�?{6����>|8[�n�+_��F�@)Ŋ�+���ٽk'��������y��̟7��}�X�ɉS���n�o߾�
�9X�_@Bs���#��.���2�X)Ѩj��q�JIiV��|��f�֠��'&�,�g�RZ����C������6O�gO=�<���5���~#xc%}4�O�뮣W�>�����ssx���8qʉ��{8��s9��ؾm�{�������S�NE)�ȑ#����8��۷/��3r�(�����{�ʗ���>Ʋ�K8�����W�ʯ�<�4���e���������KCC=O=�$�v�`�Ν̙�,�������ѝwr��W�i�zV�Z��y���Qݫ��������1c�8i"W]}��z�i�5jq:��b�"��[6��o��[�y;������U �"D��9&�Ұ
�݆���OΘ1�شiΛ��V`��@��|aJ�F	J��xk��R@UU9k�7����}��}�Z�N=1��ڝ\����A<�����UW_���,�"�H2o�<����p=^y���r ���oҜNs�{�C����˗���x�ޏ���~��s�o~͘1c8��s��moc��u����w�������ͣ����f���t��{����c��0M���q9w���D�1z��M������������%K��?E߾����K�SG�}����޻a46���{���~�;��(++C��B�!' ���G �Ĝ9��0�M���9��#>q�sA�h�C��7�����x9O�w-s���;�6�O��LƎ��h@�:�VhG)�e�\t�� |��gŊ<��,|�5�;�|~�q�W�FeE^y�;v���s7�D:݌�K�ؾ�T*��i� �4y7l�O�><��Clܰ��~��؏�(���$���^�8�L�����_Ƣ�b�&�&��߀�\x��L�>��/����_z	Z�_{"Bo4�-͍���r��eպZJKRT�G�|����ah�i��0xµ�7-+9�� ����k���n�����a�\�o�ShH����4�I�;/���{'M �B���x�������={�0�0�믹��L�w������1`�@��4�>��'9r$x�{�����o������]�v��#�$��q͕3?a��u466�{��o���?x��^����>ˈ#[���{��E9ڒ�� ���X��<�o���W�!O�Y���p��qgD{�5��~v�ʿ�5cƭ�7�
𦆼�$��^�yð��{�P�?D�� ���M$�ϝ�{���3�<�B�M���!{�����655�f�j6o��)��F�>} X�����Gw��f�y�ռ��+��7�ɹ����Nڏh464��?��d��뮿�4�#�V��]���/�}�6�v�����9�^_K4� ���J"D����2�r޴���V	�:�U2s��D�5���J�>T�K|�ijjƒӦ�+�撋Τ��W���d��mHA��v�1o�������B������MK��K/���x�G�z��[H��b�Wa�_�E
�x��՘-���=o��� 聣��'�X#��뀦�)�!:�Z�n��:Y
(��N��K�䔓O������B�@G�����@P�Co;��=���������nc?αi�&�xj.>2��o&�$�	l���U���Q �2��޵iş��̙�>萡�3n5�̙�i�}/��!B��̏�M&"�d���������3�/�}�w'N��������`�����a���7$��G�7��͛6����x쩗x��u���c�)b�d�*~!BtQ 8�h����f2����" 3g�ݘ=�*�ث� ��{���Ł e0O �ɑ�f�E`İ^�2}4g�>�)'�����B�}�A��"]"���7��E�%͊��x�Ņ<7w1��nf���i�ǰM����!�	JCj��No���]:�1�b�1��9J��a`�E��)$��l�!��b����G�a��L9a��g���D�D8��\�&�C��O^I�M���NM�^֭���E�xm�-���-��d�e�E�L	����!Bto  ���&oZz�!�����h�DC#��uh�C��ʮ4� ,���c� �d}^|us�m����*�пoÆ�e�ȁڏ���ҷo5UU$�1�0�S� ��dilL�s��n�����Y�f3k��`��j����RZD�"��}ꇡdo�G��k��e+�\��1�V9gά��3�s栤�´��a�?D��&��A #����|��Mi��Y΃�-B
�mI���8�I*+JH�T��PV�"����ض�(����٬C&����L�����mbomu
-44f�d=</(�,�6��S$���h��B�86 ��_h�Y����Y~$)�� �ث�a�軔r���!���&_�'��0�8(��}�W(���&_&�z�����!�B"�Qæ!1LC)���aX?D�c; �Z�mN�iԎ�p�v@��w�l�ԙ)�E���a�?D��{������ϱ�`�B��ߚ����>�2����w�a4?D���+h�+!�>vs�d�EfΔ��Ĩϔ ^Ƙ*��O�a���"1����R��
���h������?T������	JH�@�� ��=�]��.�1#�f��!��֨pIC�"D�B�}�*��i߆�K 
߬��U�d!B�"D�� ��G��6��	 � ��zO�!�c��!B�"D�
h��f�ӨG_��p@�MG�R��a��!B�ѣ����4M�8���7% �o�3����:�"D�!zR � �3 ��8� �I}��0�"D�!B�0���zZߩ��l�7���	��V��ʹ�bl��	@�!B�ѳ 5J#du��a@�� H@��P!�aa�?D�!B���J+)͈��t�3n��  3�Rj�0���!B���r �ŔvCm�R ����֡X�!B��QNhOh?P�G���P (D�!B��ѐZ{h��aS���Q�-0K����8 �"D�=<���B�~�1,�ҭ# qR�0��
 C�"D�����0r2�/���� }�0; "D�!B�|2����J Z �� �"D�=�|!�V'���� �+ �İ 0D�!B�8.@P(��#��([�e_��� 0D�!B�8>(��ZKa�;&#�/��F ���j!D%h�!B�⸀B�h� ���� PK�	iĵV!"D�!�h�5B"�� mj���Ek=^I�"D�!B
5h�þ����� H͘��"D�!�'�(4�:�#�]��9s�: `\�"D�!BW@h�`h��K�Ѐ� ��ԏ��zX�"D�!Bg1�� �s^Px����
����a@�!B�q�A!K?h|�Y)�t �,��!B��C0H`h1`jz����t (=,��"� "D�!�#:�`(���*-��G޾VC��!B��8� b( szi�`A�
��'� !B�"���Z!��ƍ���٪�8`��
"D�!�S
�B�˲�r�f�q�>�0"l"D�!�O��VR�1r���l�34:��!"D�!�Kh�0L�U��\f�f�UH B�"D����k���'� _���*C�"D��e �(o% B�I����"D��!��N 1��  DJ��� �"D��7�E �&:�!B�"��-@�5��S?b) �h� �"D��-�) ��͙�<�	&D�!B�x+� �G��'G���T�G�a`�!B�q���`.�.K���d��o�E�P(D�!B�8���BJˊ%�S�s��' �"D�oxn����LBVh�t"D�!���PBH�P�I!��8`�!B��g�֖��n����"D�!�{���+��ӄ
�U	"D�!�k�_���q�t�����!B�����cX���@xኄ"D�o��Db
�Z��r�"D�o�(���j�F��a`�!B�q��
n�q��ZU�-�!B�"�[���"Y"��nh�C�"D���;"�$ "D�!�RPa��p��!�>�D
JU�|�Э?���]������Z׍}��ZY;�o�ߪ��v���������A��ԽЁ}-�=]4�f�R õ8��+����Ǒ8��W��0����R�P���,|?�9_	4CjLCc[
�PHlbu6)�ê���q
\O��@0��4�4�_;��k���Ni��T����y��qy� Q�w*�w�'�|�&��Ɣ`��{yx���\_�T�!����Y
�ȄV��;�ʐ]��i
�����O/��-"����3�}�E��h`~ O���/�|���������i�uOT��F�E���"o���h �drR@Y�ch���O3�_3�3��h!�P$���"KyO��Fi�
�-���ر7��]q6팳uw�=
6YG`�X��6�]{�^X�g�4R���-&�'�-Mu�aP�4C�53�o3}�2�*ː�kb�6k'4�7ɴDi�@M}��516�J�a{�v��"d�e*b���R={�<��|h��)!����7ˠ�-��W��9�R������=�Q�3��f�ݵ1�qg��;l������!b��"~@�T��P!���-v���Q#CjJ�1�X4gL�9!��5��'󏪃Q {9W�ə(%I�|�Weҷ�!}�һ�ޕ*SY��Ƴ�Zߋ��М1�o6�Uc{M�
��ߑ`���Q��=� d	���{�{��Ը��!maJ���͜6a/�M�a��:V7I�`�7�"�x�w��}"��@c~֢�>��m%����yK+Y�����6��$b��Q~��n�<aj�����S'�s��N����U�AF�`-t��S�|�؟��L"*r&5�QVo-�<���EkR���ؖ"����F�_;�dL1~h����2}�^�
idPu3�f�+_?
�����Ir�m5q�mH���*^\RɊMIZ��X�#f��i�h
���A�[��������C� *��.Ο��8��N�ԴdM.8i7'�߃�
�^Wx����hM��ؗ��w�g, ih|?�O5���L��3&�p�:��i����۷�U��}����	���%N˾=���*^\RŪ�	Zr�x�#QaT�`���ת���a���٢��んv�[9u�nJʲ��r$�'��޷�E���-Ԇط�� ̥�R`*pM��J����<�\�.� �1(���fp��Y�5��ZL@0yD�����O����
���J�|�D���a�]!�Zf�usL6n+��W���sX�2��CI�E� "`H����l!�`��F.9m'L���!uXI'x�D�O�֔����+��`
���ܴ���<�b_�ۏ5[��G2�u�/M)5���N����ș]�B�H9�;�՛��"�0B��<}�s���Z�<I+2<)��k4�c�N�����iY���jx�Y[9m�zU����
�ki�¾m�s;{����iS־=�4Ex}m����#���~{�����aD�
M{�[z9
����MU���r�E�1��FeM\_�n�BqU1<�B��V��3X���?=6�<ۏ��AY���b��ڈ���)5|�u�}�.�d7g�d�x��k�nRj,ۇ����<��7�{dO��OiJ��1Y[!��ƴE�֜7m�h#g���HI6 K93 ~����6��:��͈���.�c/���)"�O<����{��I{���psf�y�/��9���~2{)稓i)�%'�8,��?���(��"�}t���	��t=(�چ�MU���s�r�E7�6��f
���{�
 ���MCaD}05�{<��@~���-!�\�f��E�o]���9k���=o�3W�dؐ:�Iri����b���/�u
T�@�4r���^^ɏ�6���ixģ���5����&��'���kWq���`�x-&��BF�0t����謉��ӷ1c�v�އ�u�,�$���ꘉ����\r�n>9s'O�
B�g�k�'W�^��S%��ϻr2����՗�ኳ7�9����F�lc��'_�)��9��F����c}��]������R�uΙ��H2G��
2��z�XJ�m{����4��o��'�XͰ�u�H�M�FHw�����<��}�Z���o�O姳G�~{��8:��T��z�mo9ޓ��6ڌ��Ͼ�:�z9���f�$F�BWt�k�2��s
��A���~�f&O�`e%��DH����iMC��lR�����
����>����s�|![����]7�1P�dȠ�:w��8,XQɞz�D��[���6ڌ��G�Y��7.a@�4N�������m�xY	L���flC
���W�z�u��0�0ܧ���ߌ�e��_!@����@M��i]A�-7��u3�3���k-0#>K
5 ��ֺbE�jmN��/���\����z�:��^P*�Ӗ��2iW��ǱyeE�D,�&�G d�2�!m��K���g̰���V���!
��s
<�`�Z�}�v��.��U)�Q��.�(���6�N��_��y�o��x��!閖�7�l� �1�}8a�n.?m'[v��pM�X�G�א��dl>�M����?����w�nk;OJ��܌I��9����2����U��&�i"խ �|I,�cՆ
^ZQN<�5F�p�g6g0zP7]��w�A�D%�krӵ���Ͻ ~
��}Z�K5/cRw��̭�0<�KK��Q9����<�o)�B�U�1��Ǘq���I��&��A�1�z
��5�T$���ks��u�hh��@�辋KkhL��t�z����֯�l}����;�nR@�!B��4��6��`5-��MHv��5MK� j	~��|��/��r�v�:�Y�c䫷��N���G~8�KN������D��
Lۉ���8��2��s��%��ڢ�
�Ф3���O_�/�5���Z���T�����l�?m3��p�O��y{��{�d�O"���ny�_��\������T�8-_��׸�����=$@J������/�wN�:���ə8�g߻��|yRHr���b����U���\�q�:��6�/{ąS���l*�-�q�|�m[�ۃ.L)4:krҸ�ɐs�Q�H����9�����c"�ә�U�69 ˃�{�N�D�>Ҫ�p��頶&�hӻ�����<�l�
�c�u�����I!��W^�s6�����S=�"@���c�-���_E}:ҥda�����
׿c%�z����'d�#\v�:�2�%�:]K�I�����w�2q�n�uQL�����c�����;7���׊MbW��h�	5���QػR�b#�73e�^T��{��k��:��|�9F�%�X��=gO;���i��ٗ���k�k�{̽�\ ��#v�iS5{`ȧ����G��{��wl첋X��%���U.>{c��D�H��d뢜>m+���1;P%�\��^��Κ���ud�"�����h-q[���W���=��\p�.d���_�L�`�	5�ʲyb�3�QC�d�F��z���k���h��>��I|�ï���R��֊� Ms��O-�37����H����=���}�sO��>mu��Ō�:&?�i!����{��0ME�>ʴ���[^$�/�Nh�����Æ��x㿏�`NCV��}��'���l����38u|
��s���O(
��O�	�_�[�9�9 ˟f�HeI�\�����A���X�'߽���v���:@ ���G���6E���k��mk��G���營y�����o(Ҧ04�i��?���/\K�8Y��$`Ʃ���'Ӝ���7MC��׭洓�}�����
��%Q��'�}�����c:*$D��Qի�����g{�n��9G2�o���E��jr�$�T��/ѻ2M.c�s��(��&���k���]�6Zo	p�F �\8���߻���C�u0���~~꟯��/LT����Rj��ɐ��|�=+Ig̢\j���m���|��e�(]R��v�ڮ�_��3��3߾���\Om���WF<eB=�����袾��6��w��ITz^×nXMS�u�G����;�V�n$,RjZr&gL�!Yނ�����q
~�5r�t��ýO��h%�=��s�2qX3M㸯	8.� ��*K}���׃�R�,j�MAͶ}���J����-<��Z���by�n��u����0wI�q��>��z&�h�{/c�R�`�-K!m̶߅u���h����А�����_̂Ue�]ڹ���_�n%V�%���j5�|H [�}W�������c���~�P�M6�t-�� ^_�D���ѻ@���{�S�Д��RwK9��`J���ƅ�$#ahjl�p�:.*������ާ������Gp����1(-���]�e_<_��6�� ��q�y�M6��C�֒��b�H��9m'\@�u{	�֔�fK);j�x~ I��Wy��2�����MDSYp$��Y4m|����kW1�)����~���$�9rEd���2���&]g�RVn.e��{�,���I��͌�ĸ!��V��'p2�R��!�JI,���O,�����E ����hj1�1���v�6�+���4V����%��\���I��Ӕ)0PAY£_u��7����fP�q��k�'>y�Z��ͩ�c�)�8��_�4������j�n�k�����qA���A] ��68y\��a)nSqk>�
�x$递l�Y�)�mM��&N:�k��)�2�O3�60r`c�3�`�f��)����6�&��׭�_��*�;ng�Z�Xb����&S�h.��7𞷯�m��E2�J	L�GFs��wg�
j�m<��mcL5`HHD}���0��=\}�&&�كʘx^��
�q�mN�������˕��d,�3370}�vr����VJ`[>D�VT�ק���z�ew�L�@����,�F|T�8���\{�&���(�(�%��-F���sW��+�8�B��K�=3��P�⭟�"I��t�=<���ϒu��5Y�^pA��/�9�[���{�����z�Np�[�Цah�f�N�Ƥ#Y�1A���w0��s��]�{n�n�ĥ�d�&�M�E��% �=(�\p
���R"Q�\�m�����C����`��rj�-\O���B�+x-P�=(��O��5�m��On����[iѭ�{����++J)�dt��d�Sh�ou�J	n�zU�m*�E����z4���������x>$���C{�E"�i}%X�-ƒ�C��A\s�6���%�&�8E(
��߾��^��pXS
��$��e��U+�Z�7�<�]��M�{&p������#�G4�F�\s�^c�Gs��y�����{�һW�h�	ij�&��c
���q⑎I�����1��]�l�r�JA���y�����,YW�i��">�x0���}h{�M�}�����Y^D��fr-�Y?ϗDS9�y�v^[=�d,�:F�%!����ɻ�J�!�u����/���k�w�wh��|��O�N�HP�(R�0wA���8^^Q��x�;���ߧ��$yi�8~��0>=s
�|
�W�E �"q���z�r���S�YR��BD]�H�I���1���N��a�e�c�w��Λg��G����%]���V�<
E+ 1[Q�r0����;�x[��`G�N�M
��2g���F6Ҝ��RӒ5�Ļ�QQ݌�Ea҅q�//��%�=��?:���L9D����u��yh-�-Me��my���\��sxqa?"���* �jO���իq�`8�A���Q�TU7�F��;v���N������-1*S9J�F~:�A��/��!My�K<�r���x�Mg�jc%��[C-%�HΛ��ҸwL�J���o��Q
d�][�U�����{b�CH� OЫ���3W���(����>?��$���,XUJY�C*ܧ�0��xԧ*����টL佷�Nc6��R�R���:u�����f��B�ds���rH�&y�%�vq6����ع7�5_;����*����V<?��]�e��$7�:���(�T�.2�|��p������ÿh������!�\}��fi���8�yy 3�r*[k,��rA����U)���&W��3o0��� �иi��O��)���տ��}%�2:�y^oA)��t��c�����Q��с��QQ]�c���|�T6mOaF�NWTK����1���#�i�[_��}Ο�����k�S��R٫xİ;`��f�k�� �u���ti��~9���j������ާ�=b���,�Ћk�z&���]�bT�4�x�Z�}��Y�X��_���0��A͜����T�u��
>���������]��'�J9,X]�7~;	3�;��
��E'�ȿFq��T���7�(��
E0^��ˊ��|���&��:�n�/�G}���෧�hy���-��TJ`F]>p�<�c��24�5A&�)%�b.����ߍ��4�Ft:�z�T�cӮ��k*�6�E8�^��L�t�^n᜜}�.��]�i]p�N�GU�������Ƌ6�s��}_`��������oè.�A'����y��/.+�#�:O�:���Ը-&�����i{hl1��(@~ɥF��C
�����ť�� Q��icA˕�t���1<�r�)�h��I*K��� ^]����L
��3>����K�\ �+�W���gmAe;���Z�Z�>���4�H��*���Y�5-9��Sil�%�"
��1����L���R�Xԧ_UTq.Ka���1����4�׆\�ϼVɃ���t;��z��l
"
��}"�������d��If���q��=��9=�Ԥ3&�M���ayￓ��WA�߼Wp�=��L努���I��T��{&b%�N;U�(@(��`R��~���
$hѣߛ��j��O�^��XQ�M�����)+q��<�SHp<����E�)��:�1��{�~i�ܩ��ۯ/g�{5?��X^YYJ*����%�	�������1c�O��s%���v�NZ�	D ����D :eL��S�;��%�$bů>VZ`�>�<1?�y�,! %�;�)5��-�+�u9w�.�k� R�����ѫw:�w�&(\���-@�=i
���9�W� BuIo��I��r��CyiA�x��<
8gN�Ř��9����ڧ��R"ܞ�c
��F
hf��:�\��Ĵi+�~p��-l��!<�$cϾVŦM)��*ub�%'��K�R(��'SJ��O�htH��X���_?4�����E!V�T�8���A,]Q��|*@�\r�vQ��ݣZL�Ƕ�@��W�� ,Ŧ]Ij�lLC}�)�R��/a��V��R�,�L}�WLK��s��$�wY�ւ���zL����2�_�M؃�v��W~����^[SB2�wYK]P��֟��yF�Zϓ�RY.<i�(�|0���k<���== �&�L[K$��t�_k�#>;������(��E�b�LMM������F��ëѮd̠F��\��l�P�<�W���ՠ����U`�~��j�LL�k���3���c$�RVRj�����u���k���S�7[�;�d�`PQW���45�,�X�'5�U�C��3�Ds��ؾP��ec��3~H��
���Μ��p�>JS[r&�O�KIE�ӲŚ@���&�oB2ֵ�����=�.��`A�I��7u'[����Z HK��~`�Н4��h�HD=�x��k"A�ZW}:8t/,��saB!��$����i�O=��ֵ)�ꩨl�t�r+iږ��y})��]��������/�f��
�"T�{��N�8e|-9��g�k-���ԓ P�TI�T����^q}ACS�<K�4G4ud�X*��ʑ*���L��,1��Lٝ]\#�əL[G��i��ΖeK���Y'�.
�U�@�=�;�u���"�
�{
^�]�Ш���a��!�'�s"�B�y:H\�X@�ԡ�i Ot�_U

�ɓ/��0�v�*-�X��J�4F��.�>r��W3�2b`�yK��Q�}�'��Ex�J	D������Ʀ2�tKO�e��^���޷�Y�h�)��r��C����~��L�26}e:/�qd*�F9��7ѿ:��]-vX]iA,������G.�T���yW�ۃ�Bh�����O��7u'?�=�S���Ζ�Ο�L����8JÆI�j��H��*J\NY����)5�1����1
�[ދ�ɘϋ��Y�����jpr�Gy�� %eY&o`��>���t�4�B�ƶ�sM�ptk�F������v`�f�kt���p����Y�.E���d��~��T��akM���sx9�[�
�#�5�A$��hDs��4���O������#b)�~�7����S��\ɸ���%a�C��&h-�:��&+b҉�$��e�:g_��h�TeQ�,���">O�Z�Cs{��ۑn�F`JE2�uK
�R;�`io��L��7s��|��1�8"H��ܔ V$c�T���}�.�üj
��غ��{��W>�:N����n��i�W�ໝ����=6l)��5)����tis��_���1��:5�Fi��9qd�?ۯ�G �V�79R�E.B�z��YJ�Λ^�o�0a+Vn.ew��mv�13��9k�uO��޸��Td��\BL���aH�4t2��&��{�,^��_�ݳ��f�ڜd��d ҉�-�F���U-����xo^%.�&�H6�J���bQ)����{%3N�cO]�TE�t��xģ�,GEʡ"�;CU*G*����R����s ,��ܬ�K"%9�>��l�=ov�3Y�)��/���UZ@��%��6D�Vݖsj$����^'��V��xye%��f�'��d(�.���tT�P0nH#�y�Ǿ�DKے9X��� ��\��Q{�1�_�A�[��f��Rr�(jn�P^��	���Ѫ�v�ߕT�rXV��ຒ~UY*˲x��x��a��ڜbw��etoճ)5�i�E����܅�'I,�2�w�{�)���\z��#�l���#.���|ΜTϮ�(J��G{�����;�h+��mߗT�7���J2�Q,Sux���Mە��.ND�� �o{G&<�b_�Q�(��#�])���}��"`���n7,J"���M%��ưL��'ا���ߣ	�P���V�*#vs(��FD��*�e�F�oؑ�ֻL)AS:��p��]�đ=b	#�1�Os0�M�h\_2�*�)BU��k+6��tiz���,ې*�6��|�n�?ě�F�T����G-L��3�N5s�����7�����5�)��	��N}AYI���c,XY��v�b6�Fe
������-d���-��s�N�Iٱ}g[>�������^i�FOSk0��\�����3Y���۝� ���So�qg�ɂZ�F��^eY*K����SO�Z7���֘Z%�@�=�"�@uy��u�v����ݳYMC�bs��_�Ӊ�ZL�ggM�݉Z�����OUU��a��dq>�#���f���`����=�U��X���m;����L%+��8&����^犳7����������"���q�S�1�,PJ�����q��o>ד��2�9y�7
!=���Q�gN�c��F��*�>7��m5QR	?߮�]^3X��_e�褠Up�5�#l��viG�!�ٜd��S&u��+p2�X0�lӮ(�%＿	04$07/��~��
i��Z):U*��(\�ɘ��3���3�k��ރ�%q���_��iVX���t�&@u�8������|(��F��6��+��jU�sX�e�Mͮ:���և�U�ΙP�q�R�x
6��s����wV��'�����غ;�my$�>"_
���ѥ���V����8<�j5-
1�f�h������#C:�vR��\0m"��g#J���7�kӭ��Z��
j9���^�@>�i��"��>"��aǞX>R�I���V��@[@���y�Rh߫�D|�	h!�%=���X�E�@!�9+�U�I��l�+"��] ��l��F{�M6F7��7^6����A�1�Y^�Z)F�,�v:Ci�m)���\w��A0��qLt���O��SW������X�6E�$�;��tdj`O��.�T2˲��,XQə��c���w����1{һ��{m�#��|AY��)���X[��`�>�v�0oq%ɘK<�t���%	:���iL�d�q�k���3HMi�;��.}t�j1�鵁��F��ɝ ��(��t~lh[k�M��Ңh�CN! u����и�$���d��X)5ٜM.g�ܝ0�ĳHqxZ�JA"��Ҳr��r�d��#�����I���wY���G�?��w���/�BE�O]�MC���O����Ѐ!!fC΅G��
���]�������&����������a��܀�AuA�"����>l�!Q�"tcj�P���|�A���[�`��Q5����X��E�pR�g�;N��C��}k+�1��z!:h�#��!�6�1-��=��s�M�l<D1�� �Cv ����>w�mgOߎ4t�դ�`�k��04gN�Ιӷ�{W��.��C/��Օ�쩷�pr���W��A~p���XA�k��j�u1�Q'�혵�`�N��Ā#�{2�Gr��]Ȩ��;��o���>t@l� םGʔ`����Ϥ�;G% rX��=7��gϯ�d�Z�� l�
��C)�j{�҂D����)~>{,V���u]K���V�f�\�E�TW_�����O�5��ߴ�w���T§�ɦ��jm'�={ (J�4O�6�ř��
��tȠZ���q5����%�;�Z<J�>�N���Z`�>۶�0Y9������@�#*��I��g�[�.��a�7��Z���B�`9�G��C�/H%]���qѲl��S�3d ��k�q2��}��mk�����ԏ���/�Υ��ƶ`o�MK>�m���f�"� �������f�G�Aeu3�����p )!�3?���C��rf�� "�}�w^GCc>�X�熚C�'F��h��J <iex������X R�?ߛ��U�DKs�B�F��12�lҷ�����号���?���^���ͤ[�*m�Tjw��
�ځQ<�1ga
{�XVǊ�t>�{���A@Tt����\�s��ƌw|F�yd�؋}0d��i�t��C��hE.�ز� x�J_yi!dKhB�q�G�!j)���|�T��ꕏto��:O�DZL��k�S�/��;����^��3v��A]���{��7(����1�-�� ��i��'�Oe�=��1_A2�s�ԝ���?h-0#>����r�1?�HiBԤ�k B� �{Yrٺ� Q&N��B�(|%�G|�4X\���xl�P��R�R��/2���@C���S7��[���<�{/ي!$u�A��1�ȷ�%��|Y��4���KG�2!�u��I3}L=���K���J3~x~��P��@D�y�5
v^g^`[Q�feC�Ȁ�������ڗ�҄˅0�[�'C�8�I@����4n��T\"�@m�h��" �� E0yd
?��K<z�s���x�ICs �r�����zkA<����*j�$�-��i Sq��]�%]�d�s���Nv<�oH
�����b�~�'���},��Έ0(�(�_�{�4dV¾�?�5-��Q|`����oø�s������e�ޣY}c� *�dLr�c����_�_ߝ����R�h�x��C���� $"y�)��޼+��%Ո�ߡn !5�$3&寧���޼��W�(.����c��X�u�S,X��U��B
� B���F��N:�v �ԩ�@�B�D�0D�bB�{W���s�-���̶�	�)������{�RQ'N�����?�y!ե���1&(Tx)�Dv?C��<�b�@G�C�|��L�odʨz2�C�Iٜ���LQ��혈�ʏ�}��>�m����r��hDa�2K������~�*�i�̿2��[ ����Ն���|A"��]~�� .��9���I4dl"�f+8zGP��N����\}�j��Y�=c{#yu�c�V�E�V�����ܥ���Jbu0
�4���i��t�[!���=A��߱|�!5*g��K}�M�U^ViI<�ð�P�%D�	�/�w z��eB��<���eh�	g�]
P�5��"������3��󿎧�%Қ�}qT'�I�f"�)o�7_��w?��3p<ql�'n�����Vl�a΢�G� ��'����!�B��\0m'�G�_����ה�;D^����@�"���
��,`��B2n\�Ǆ�Ck?�[z�x��
0
�J9l����/�s�g���?Lf[M�H��sњ��0
��8�&�z��e�1MKN$@3��z������Jv0
�qs�60ix�Ag�|�x����Ee���ఉ `�<�J_���~5ZC,¾Y�!B� H��9\Go��@Kf�� ��J�F!d��B��ۥ"`[�ʔÎ�w�a|�l��Óyuyo,[)�a��5*�݇S��P0[��S63���,Q�)oG��Ђ�XC��UyQ��T�sG��X�Wu9o�n�h7�aHM&gp�	5�S\�c��L��36O�ԇ����.�5�b.a D�?����XY�jy�[���Zz��0D��E��o�;�xW�r&�=2�=�� *�p-���"0MM�>��1��w�|Q�㉣7 *��G,0�T�k�65;jm�,썈t,
 ��3e'�q���>����L�L��H�_	̨ϊ��,^WJ���ˏ9��rA�_� B�BJ�ki��-��J̜9^�,%�-�N�!�0�(u�,��U��;O��Ϝ���<�9���U���Ɯu'0ME�1¤	;��g�y���� 4Dl�̽�e���~���J��rc�40~h:?���BΑ�a��TG+
X�'^�Kc�lWy1n���E�[�!�Ev47h�D!����:��ʀ��"��$�n���Gy�CM��o��_=��?{߸{
�.�
�6d ���q�Td�#\t�F>�
�7�GO'@	b1��Qz_^)A"����r�n/��U�*�=_`�Ι���+�3�RjZr&gN�������C�6�<�Jo"��nC�
��dT�F3B����0`7�^do��6y)�9s�N !�©�o�>Ʊ��/�LME�C<�jK��7�w|�t.����q��/����@$�ە�Æ�xi���_��ai��F�����Q��6��
� �eiv��<�z���[
��7u'���W��S�.8ig�-�R3�tm9Kח���<G<�	7��!���f�̚��l% 0;؂>�������	����q�52(�:ݦBT@)A�VT�l�c��$w�7�w�r�t6?��$Vm*ǎ{D�Np���
�'I�f���8�����l���C�@nGG�j�����u��/
 dɠ�NW�� ���4��ܗ�Đ�K!���v�.�
}u�8:?Y�-��!�������І �CT4o�J5��o}:�	���E�4t�#�̣;T�2�#�Z�y�_{Z�*_+�u0k�"��]�mL��?���ϝ�{n;�Ǟ��Hi�O5
`h�f�K��´1
�3&Rv�ZDlE�>p�o0"�畕el�Z��;�p=�]�cƉ{�9A���W��6���ʖ��t`YMC�k���+����'�[�v�
t�zz*��Ÿ�`�1?��B�*�:j�y=�Y^!<�E9kU�k�
�U�Zub3B��=�@kȹ�hެS������Ah��C%�UӲY�(�Ok�i)Jbnv>
�K�D����T;���&�C)yL;J��z�x$�(�y��^��ӹ䦳����j�H��*DT4���x�k�ۂ�ts@���r�D��1�a���z�g��B�����?u[F,��~�����J	��ǢՕ,�XT���������I�'ɹf�2�N}6hA"�b� !��*��J���
%�d�=�CC� ��&�+i� hK �1	��� ��N��1�8ɘ�ajJ��$.э�5�H�,�ӝ�[�C�s��)Z4#$,��R�Uͬ{z0b�,���yC�����f�Cy�c%2 �T�%�pX�>��~4�K>w�wv�
�T`H�Κ\x�v�V�p��k,x���Ѫ���4}�8F�t�QY�G�2�39G�z��YN��'����M�c/�%�v�%� ���e�e��~o.g��l�(��V�J�E�g�(1��R�H�M�46�ǖ��^gA���Ë��  ��w��'�(����( ����\��mW0qH3��7�\yćE���7ڼ���]���=
VqX�E��L`XD������"m��c3���
�@��{7�I�|Vl���oN�����۟XHU�'��u<Ǡ_�&�����)M�ݦa��O1;�|C�0�y��2�mN1|P=N�<�H��I�eΜ\��̓�Bs�=T�j�Iwl�LS�i��̂^Qm�~)��"��d�{" �GR���輱T���ĥ<�n�bM����~�-��M'�G��$�MV@|{Ha�R���rz1�	q����9s�!m,�������.v���hQ�ր���tk�RӒ���;�q�+�!G�V��]V.��y�9���"y���&�,�-3�:��:
�>_	��k�"����K�U1�]lé�@����3�پ,ߘ��Y�Է���dC�e��2n/���ݭ�I+����c9�J!��1���
6O�ڇ�#jQ��{���L]0}'xt�*��U��#	�z�zs�x�=h�04Q[�Ft�9r]���1��S!"(>M$TgY�=�O�t�*����j�]0
M�Ŧ�!���؃��R�E��ݺm" �$��ˮ�#f¨F��P��q �fgm�(ƬV> ���x�ӀX��o�pZ�#�X���FQS=��X�bkM/gvZ�U�[��n$j�n������E���<��ݱ@�E����XE{/��wI����r���#�9�|w�������&�ǶT���.t ��x�;腬5ئ��/��#�Zݡ�.�i��c�ү*GS���I���	�d�|��+H�9��J�?'���rݚh5���Je�Ra����3*��
�'�U�0�O��Nu�0|�4D�k�0
�cj ���ͤU��������! A!���4
�j�F�RJq�G43۶'�v�·4e��5���E��>�1ME���yߛ�3��1+p}ALX��5X�b{M���QzW4b&�H7�F��Q���S�cO��evC�� �?iX��S�h0�"�l�iW�l_@Fȹ�!����א��ԅ���o���I���2�'�L9��,��ŧnXL��nW����>͔&<7�ow��$ f|`��w,\�b��2F�=�4� \WRR��	#�k���7��d�Հe*��b���^�o������24�����i�QϚ�[��7>ԛ�6�)�v��B�uLF���,���\����olٕ���$u�\p�h1EaHt���֭�3;�`��9�<�n�� `#����i*��R��<���#f{Bh�c0r@#��dذ=F�V�V���B)A2�ӫ<�ᱢ��6R��.���*���6�lܙ�w�&�ۙ5�5��l�đ�<�Bo"���
D
Ms�`��&�K�u�]��mg��{��f��}�s+Ix�>m�Ag������!x+JQ��.Lߗ$c.{�?�l5��u�pR�}IUi���ǖ����n�x�r�y���i�x�վ�]��4�֚KN�Is���􄭄�ˋ��vk�d�9Dt.h���G�.�R�ޜ�m�0;���L]Cu�CKN`tSTU
�|��j����su
�:�S�\II��̿�!�����Z��Í�l�a��@��B@��6��m6�L ,չ�U�K����:���ӱ1�Gd<}Au�C��,ʓ�j�+����!ۈ��lN�h]�[j'���[�'���kr޴ݘq���-f��b��i�M%n}_�k�p����G��4ۨ�E2�w��\�߰#Ί�e���h�d�J�z�Jr�����$��>��Sy���K��3�q;\R��-.;c3ל����X�,O������Jl�'b�y?����҂��ش+ζ=	���#��q�ob��zZ��)�=ܨ`*�q��]��N�T�|�µeH�zL�_�`Lfs�nA�~+��_��9[��\���z�$�4�9k�l}X��9Hxd�����C�B�և�K/q�����6ꦝ	�
��//��K�!֨���w2�w��#�%���P^�r��[����ɷ ���"���;r�@���,��=��i*�ʢ��r%�v�'���E ��铈�N�I@������G|�-e��2�h�Z!��Ra�^�
�Ib���8ϾVM�`����+A�v�l��uH
���F��k��V�"������b��n�2�&�58e|c���f;W���-
Q�MN��i��|��8((F��Zko�F�� ��f�����2�N�͔��4g�.S8"`�SG׃�u:� �F��|���!<�Q��Ue��c���<� בT�Js���Hg�.�o�����a�𺠭�����n7Y%�}h�ؐ���$�+N;Fn�Mw��A)A}c,I)�!A?���m���~Ӻ5��4�<�R_�:���t�KC)����[Z͆�v��ZkhʣTc&������(Ƨh����1ah�����=����x�F��:�>�Ȉ��
el�#b���ax^�'�
s�n�:
�/�����
!$�c��Q)A4��ʊ
�u��p�����;�����xf�)��
�����';u8�ܾ��!ʖ]1,���t>�ew�WVT�R:�j�x�:�U:�XF)�ۚ��k-��Eр0#�7��bc	1�!P�' �{�����K8�)#k�J���>]}Q���j|������ �x�0>_�X>O�����	��P�c����Z�Qy`G�K)A,�1wIep�Z��K=O/���w�ϓ��)
�ij69u|=�����#R( ��޴���p�z�Zk!�ȶ4�7Ԩ5�?�P ����F�P���b�����@F:�tf/mq��9���ԧ�NUJ�����
I3y�^��٩z��R�ݖdw���&=�A�V��c����
h��W�����2����5��x�&O؅[��� K��K}i��ơ�uCh��m���B��L�o�qu4wu�4_گWsQ�f��%����.�����A�Wڸţ�%�KY��3?5�+�%�R���ܢ*��7�}J��TGE��p����ť�ȨW���m��y�zΚTKC�U��t�%��{V`�^Q��,C�#<y��
Ǯ�h�
o	|*���]�)(�����j�����B�[���BU��2w|d	����DQ�WR�*W��;�t����������7��/H�<�YЋ�;J��R:�������Vq�Խ�5�XE>��4�����7.���P�2��(��׏�a)���J��Gϟ��m=]��$���&
m�g;["4�c��	�K7�H
qxgGJM:#y��~`�.��)�2�1wI/6F�X�I�ix��}�j����9��D!�X��7?���M���������?�o���[q�;��J`�|�/�f醃�o>!�о��ܸ�9��f͚u�Eh�D�V M9o�ҪF�&��؀R�d��ɗ{�gg	�]c&5N�������G���l�(�t8Cj�����悍�͝�0��&s�T� 
D,���=7�;͘��!|~���v��tq��!5�'�M��}�u�J3(����/0bϼڗ���#o~�)�WVV��y#j��S:��m\s�v���A?x�a��ƴ��'�O�F��H��A!nS��I9v�Z�/O���9�et��-xl~?�>��-1�+A2���+U��P�U�H���\���q���ǖ����F,SQ�`s��Ÿ-fQ:E�?�>=��i��B���&=����& �h��D���J!L���Z�mk�����!c~Q�?���5�\��5���
j"h�;�,�<�5��C�(I��y��R����sW��W��0��B��OO&]�,B��/k2�o�m>��>
�&�ٹr��d��M��5�N�A��*J�\J��~���a�-
��פ��I`Y~Q&��9�7?�:�Mh`Wm�TE�(MCӔ1�+�M�-��u�<i�Pl��Q�d�2�JC,�|c�ū+0�]�
z�}jv'y~qe�9��c=,S����Ǉ""�)z+ܥ׾}
���r�#���#>.b��?ed�_�%l�C��I)��X����_�Mi��a���@ (�nN����|�_����}
!1������O���8Ƭ��l2��
K���Kq]�Ɩ�c7���u)4���9��t��~l矾	'mw��WyM�9{�co�:�KXi�G�7&��3C0.��\�\�ńQ���w^`��fv�E�C����!e��^Y�s���d�r�vQr��X	�g_��s�*)�^�Pk�X��{����:(��lE���Ʋ�{�\�q�nj�d�:깣���a�P4�M��o��*��4�a��V��X�)E�����Οgh�J�x�/�]�PJ �>�/�Ŷ=�U9^���$\��� �l*ÊzEi}+ܥ�v)���E�A}���ޖ"�G<v�E��=��[�S]֌��~Fk������貺��2�AZ�e͎��R�p# �u ���Wk?�PbQ�e����Т��C����^ο�;���5R�h��l��{�MC����4�EZr5uQz�y�᫯��+V���x�B�g��s��9؎�x����Nݞ$��eh�ahri�Q�jy��s��5�0����&��%� �f���]OP�h��Z\}��k3�o-��/x��cq��FQ V���(J�P� �^����[���/,d��i��&��#[��u����������b��!��1M<��8y�v�"EO
xiY=`zH�5d�<�j/�M]�(�q<:�/=gp�~a`lS��������oƃ��k���U<���8w�^�m�,\O E����w�����$���G����^�"�-ʄ���,^֋���G*���?�B)��g.��8�ݒ�Nu �jx�V�!���	���;����G��3�P�jAyFQ�AR!��v��w�������A��*�����*�6$$c>�5�Ӷ�6PU�&����-)%�bKVW���
���U�j
��b��?�=�[?��\��Q�)��q�1��֏.��7r�Ӄy���l���Y8r7�Ӣ��oU��&��6r��]�
rM�3��/�����_c�����R�C�W����_�bъ*&�ٍ��a�R�yx��޶�w���g����}ymU9��Dij6�|Ak���e**J]N_˕go�36a�n���������/,�"9�C�Jc�WnJ�pu%�L�A�]$mϓe��ڙd�Ҋê�?��p��S����L���h�d��҉#j��7��W�����e���!�}�6�jH�}�m��Swp��׿7m��E#�Bh4�o�qG�J�n_��/��h�i�S�Wz���`�Y�㣇/0Mq����
�$j+6��?������8Ƭՠ�������ز���R��Z���Y'�ވ	�ʲ����A��؈�t c���U)���P���Ҏ1�|Ay�ï¥�ng��E3R��m�1�����^n�6ʪ-���Tʖ�	�4D�F (����̨AM�ROye(p��֔@�Ȣuٶ��o�y4�ؑ]�Rh29�O�1�_mO���i�5�ئ��gl��36��eӮ$�v$�V��.F}��������}*[ү��з	L����X�]ä�����fK����#����u���S�n/��^H�=��7;j"�w�T[�D�����j"�`o^�8���q2Bh�;e3睺���IVlJ�fk�m�4f�|͕�W�aP�4�70jP#V2Yc�0�"i�x�$Z��/���Tu�)8�6Pki2Ӽ��q�� �@�٪# ?�y�yӲ��	���h��y| ������D�1�Q�P_�e��6��^MP������yq%�lV)uь�R;�jU��۩PUA�?��#?�#byh�8��`��Dg�4=&��äq�=Zh*�%:'ɥ-D�u/f�Sp�/'��֢�����W�T���p��8���E�R�Fi���nc�˸a{7jO�{n�5�8Y��F��p�A��ϏF����}fш���K
Q�J��)q�%���7H����~�KI���)���n������u��ޥ��ޮJ�p�4g��~�z/W�K)jn^)A4�~]%��aɘ��7
�a[�B�o���o��f��(�H��9I�=�}w{0W��?��c���S���W\�`�]�@9ƾa$mZA3^Zs[�5a L���CS�q�F����1�E�J��/N䮛�k�0���(�#���3ZsСE���.)*�|A�,���<��^�Ee�󃄤T|��xl\
�H�'�T�R�u���D��v����b���JI����/O��밋'��Ha,�zK�WWTq��m��7����=�m/e���?��*u���Ø6����� ��RO�\�]���w��Yr��g�Bm�T����O���h��гf�08H'�!�z2����]�G���|^{����t\e"�%C
F��KX��R¾/��8<����|_R���x�������˿�'��u�0̠���P��姞'��r<���q�hʒE�"�����Mqn���1��]�'�D���v���"k!4�g��?��W]�{�
R��
�/ES �>�}�7��,,K�� �~��2}>��X���h�k��`�=�^`Wܥ�@�Ȋ�|��Sxaq9�D�3��
�9i?�����;�;�W�g����~���˼$�	Z����"���V�~<
+��G����"�v��_�'byES_S������ߌᡧF-��y��<O-ɱdyo>��)��O��\�����{&)sQZ'��u�Sw�?�9+(I�<O�Ϸ
��j��4CD

��c��`�X�Z^�Ӓ��q
��&���[�Ю3�r��&�QQ�������-�-;<�a����� �{���+����A=�T��y�?��l*v�k
����(R���3?�����U�~f�g������<�'�&Z���zx(ӓDK�n���N!�
����ן��Ǒ�}�x"e9�=z��Aq���@���Q���k��n��(�mK���N��k-�">������rbQ�Gz��"L��ϚmQn��T�6�z<	��3-������)/��ش� ���Vn�h��J�Pv��`Μ`t`KS�c��q��F�ܸ��2�������M�J��z䇬u��e%|��)<�re�����M	B(>���<��P�A:�'FP��e��*���i�7�G���ZP�p������'`��HC���$��,��V��N����:�B���c���a'ވ����3zSSoc��_������k�K��g��.I$������ R���ϗ~9���|]���l�9��������>��f��-��xq��g7a���؟���C��wOAK������q� 4v��wO��SQ�u�*��o���9�?�c,�2�u�|O9���2�̼�t��Hĺ�;���������~�r�I$��X��pr��^\��S��h���Ժb��x�c��*k�kH�v,{�o0f�x��P�ry}M	��,Vo� Z��Q{����>���|���ID]���5B����~���� f̸� ��o�����^�r�����3ٶ��hi�?�C��/�,3���O���S��+%�$ض�g2�Y?��4����<y�}�a�DR.yp4�|��%����aK�i��|A�域�k+z-�aHݣ¦J�b�"ǳ�r�Ng{�ݥ$��"Dlņ�q�/;��*�_�9ł�eď��{$�,�v{�w�|�?7�hY.(=�߷��k�$\2��'�}
���(R%�cӓ��4�G r�����[���4(��p�ʇ����ƭL9<����}�,~(���e�yU�c���{���{�q�{���C�����eI��ƕ_>�5[�s^)���8�s67}�d>}�d������/����O��/��w~=��"R�Ck���2�{v�Ōh~|�d���d2�[HTw�����hWS��`�<�jj�̢��>V��ḑ)#y�7�s�/���H"�QǘS��)5Ѳ�����7��ާ�S�ʵ����ZkC�=���f�����0�A;���y��r;�0%=����^�4��x�tn����j�-�!��G�
�o��R�'���Ϟ�#�J9�n8
ƪ*��%e��������D�N��eSj���$]��;�K>{�{d eI)�N�pQJ��?���Ϟ�O�����+\N�J���,�'�rX���+�<�[;�r�����n�Ģ>�/��~o���:R������T=ff|���ئ&u���\�����z"��L�;��B�z� R�#�|��'�/�β�q*{�J�ߩ�B�riՔ.}2�Z�7݅����3�n��-hP�|JH
���^#�&s��#��3g�뿏'�DR��Z7ow��UJ`G<")������O�=�Nbk�My�{T�S<_P��:�/�b�}���;+��$$�[��K՚��:,YWŇ�q:�u�wD����I�|��T�r���#ߙ��7����EA$��2����x��uT
�K$�uO	_��i\��3xnaU)�8���vFyaq/d�:���7��pMi���y��ʔ�µI��ʩ|�{��fk���sQ�nu�
΀�H��a�?����=�9��(  �AIDATo�qR*�1�G���-�!�l��QM
�=���N���̳g퀮��?=�F!���Ae�CM���?���{/��;��Bu�4x?gU�b�:�(��S�8"�N�%Y���??1��=3��
&e%hqLlX_	*S��Nrì�8k�^�����7m�T/g�b^��B1���C��d������z�MI*�@>�wlp���lE<���R�/�ƔQ#��-���m���|g��q%*��^��kk�~���� ��3X���������g�^�Tҥ4����Z�W�����(��)!�����mgojݷ�K�̈́�W�P����xV۵�am���{~0�Mk���xt^�5c7\��I#����}]PM-ܥ����04v�K��牧󻇇���
lӧ*�k]��Ri�l����a�U�)�9>��'}?�(�]J�x��25�k����O'���Gpɩ;y��ۘ:j/�R'�]���$�/��ض\%ڹ��:`A��4�R`���$xqn5�z�?s^���ɠ$���D
�4����YTγ�3aX�����O���!��1'(Cq�69ֶwl;����v�̓l�Y³�����0oI9-9Ii¥,y�a� ���uI^Y1���6�'�p�);8i\
��Z�����,	O<�}�>���Қi�`���c�eg)/,���s�3oI
�ɸ�*�\̵�:��n�:9�9�b%��i5<���Q��U��%Y��x�צ!�� ���T�Dk��`mb���z8R ��!�����(up<���=��>=�3&���3�q�����C�'�N0�R�!��{��ѐ����A��b�xu5�����s��|c�P��S�Ǒ�ߺ0BH��qJ��}ؼ�0q���j�w=bکK����8�V2�&�H�3&Q[3r`�S'�rʄ&�g`uѸ0Ztp	��e�F�-tp��J�cP�e��$�֔3oi%��,g��(�I�=,#_���MQ���A�1I%<&k䴉{9i�^�n�OE3�F'�jw�D~݄�TB����5DX����VU���J�,gg��a(�1)�q9=)4B��J�3R�U�4��S��e��zFh��,���˳���"��7��7�!|��1�Uc͖R^[]���,Y[��`Be"��� !�&�����^��3��W:���^���a$��{�Bj�Y�O^��Icj���oB ��Ϯ�$���Xt'L
���u�]չ�?k����qI&�$�k��P�����m�~[��.�R�@��'A�Ĉ{���ٲ��}f(�@IX���Ӕ��9������K��p��A>��u�zV��Z�t��K��[��y��@V�a�����>�A�=���g�3ml���
xa�>��B��`��Y:\��$a١�/ţ�X���V��fK-��"��H'��1s��e�1F)W
����Y9R�P��T�7��^2ˁ�aӄ��^W7��FG�8L"6jZC�W�+
)��&d|k��c�LS`�"��J4fB2�7Q~��
*	�%�\I�;���?����;�l�J�5��XVH�I%"�I����q��TMc�N\.�0�Ĕ1��)0��Lkc���&�Pn\�@�V��	reA�P���[�2lnO��3MW|͔Ҥ!��;�7�p�bg��x5��i���ZfR[�����m.��X�!�I����]���b�B�	z��M��+>w��)��\*��U��s�8�r�ϞqV(9�)���I%�g���R|�����j�&�k

��xm���}>{`������TVDZ�NF�5U��?K'�ik.�R_�6iH�+�<���Xt*I��Ӵ�&�ґaKG�])��A���u�N��!3B9]���-u��vf�V̝�W}z�r�`��ImM�O[�8�:s��&+0\O�CIT��ģ%�28�A��q^x��
#�Z��A
p��s5�+�aI�6׭���BAH�HV�Gj_)�`1�0R�#�A)�Ҹ��;����!�� ��5��QD��9��(P*b���p'|
�K�Na�����q⳨��x>�����j��٬}θkq�_����UϵJ� .����3�8�;�ZF� �HK����y���7/�&L!��@f����u��O����p_ ��1򪫄3�&3c^��H�e���`{6�����5�Ǐr
7�j�_���5�rHA`F�y_�a��D�b!v_o�c _h<��{�s��k���g��¼����\�qNw��'?�R��۹3F9��l����u��s��]���	0�yH@�8�\�»��C������6���v�&����B5�����kh9d��>d'�D�L��GFG�+����1{����7?��*���ץ�JY�f�X,�s�J!e��e�d�>�W�WY_3g����t���t0��r ��b�XY�o0H)˥BŶ{���}������UH S���B,X,���|"��t�s���s�\���g��g~f���!��V-��by��RF����k����L6��ٳ�W==k�~��N)�9�wX,��r���D
�7w�������?[��s� ��gEe-����X,��9@(�C��?0w��xf�|��pG`�P��{�Jv���6Z,��r�1#T��h��
g�K �Ra)W�$�`�X,ˁ
�#!%�����5�6��<8 Wi�B1�� (�BHe?��b�X`�/AeHD��_Ć�3��Ϧv��Ƞ�hu����c�-��b90��ad9G�,��W@ēyϽ Ě A��Z�#�� ��b����1"�����O�̞]]���8 �#0��{�?*~�CJW=�����b�X� �7H)e!;����/ ��g���v|�̚u����_�S���jX,�Ų���R�]B�#��/������5@vpկ?J�l3��b�X,�/�G �UA�t�Z@ìgm������3�Ƞ0��/�'�+�m�X,�e?���|�כ��_ͳl�۟�Ȃ�r��QTFXa@��b�X�E:�M]�cI��m����O�:n����KP�n�6Za ��b�X�U�o�R�R�'����a���?: f]��r!��:�!�`�X,˳
�E�1T������GW
�?ʻ�/W?��Pv��+�_JeG-��byv�?�����z~G�����ޟ�z=���ʦ���GP�`�X,���L�*B�\��Q�/q��~k�߯�zs�����렀��JZ,�Ų��?B:�Rɉ���%l+#.P���~w ��9F��v,-;�x�`G-��b�'�o0B��٭;������@8 ��
�ڮ�ɒ���Y,�ŲO�Y�(ˢ�/_���w�p R��9!��s̲��#uT1V�b�X,�����q�G_�?ؿ�$����m{����@eWH�,���|C��@H;
`�X,�^E�B��^�g��G�
�h�?@Q�\�1"7����l�f�i��,��by��)Y,�����8��*-o(A���a� ��b�<B�(2����߇�Z�R�U$�>�z���z�*�lW�u�U] ;h�X,�D�J����E>��]l�
�R�80�
��_�[�o��~o`�X,��p��u����y�{�K8`��:���M��֯ˤ2M�q7��b�X,�`p�����d��"��0FH�@��+f_!ᮾ ��!�0vI��b�X,���e_fs��0s`���"P�Mm�_�.�դ#��X,��)���eO�����Gܣw@��B��̞}��W)���l�b�X,�j�#dyP΋�������͚5k #�j�ʔ;�.7ᦍ�6`�X,�v�_��/��bn�;"]�
�$�9��ϕ<o���q�`q�5ZG!m�b�X,/��_�(2�����*��y�9�>'K���\���qM�IǯMeZ��	v"�b�X,/����hph��X~!��y<���:gf_!s��o���c-"	Ү
�X,�4�QJU�e�������?��ϛ#8�ږ��%���TmvS��b�X^H��1�q�@߶`���X��Y��d���מ/��\
�r0��p�����DX,����F�RjH�����0x�'0[���7��0���`�������\e�@��b����)��
�KA��1F���|a��� X#�H%����sH����b�X,����#���QA���?��[�W<���a���ٳs�Fu�O������������b��ῐ��*����D fn|�a���b%R��f,��r8#�ҥBYT���l����<F�kk�(��-[m��u�1�؆@��b��h0��{�F]Y�f�c�'�[���۹s�1F���KY%i��i ��b�f�p�P.Ai� |X#xS��w����B�qɦ�@��aH)�D��b�X/2���P����wͅ��s%�{�: �\��������b�!i�-��rE�F%�C��}}������u�f����L��pܴ�*"Y,��rH#�ҥ(P}��~�Ю߳f�b͚�=�=X�l����e�`_�v�xΖ!X,��r �m����;��Ȝ9��s�,�Aec Q���h�(|)�ع@��b���� �k�C����������ym�ۓ�Hxg���
��=�7:�I&gI�l)�b�X,�$B�(
���^{��;?	�%�9h�����`�ԅ_-�������d�6 �=J��b9t��T������ЦوR;�>h�8�DwLu.2;Th�@�)��`�X,�C��K�D�B�*��z�b�wx��� ���P��F�c35���a-��r Z��w�ޤK��
�C��A7�~�չ�Ly뇇��;�T�
`�X,��>�7�R�O��} ���/�}�F�1KuVt�>���0'�t�-X,�� ��H��r��z���6��;�c�qZ}~8{�lEy����B8�E�X,��FK90�h�	��7s�H��f����9��I|~Z����2Z�NX,�堊���Q^�?��ܹ�uBTn0�Ԣv�ྤUm��g}a�6���}��^Z����b�X^0H����;}}+犠�Jcf9����Z��s#��B�û8 m)�b�X,K��B�un�6��6��N�s����c�8ujC[㲦�1�0
��`�X,������������_�E����!� @!$,ٔ�m�\)�+)��NX,��y��H�D�J�3�`�&{��4�J�:�V����C~���� ��b9��� �9dR�t��}��u��0̟̑�h�j)t	�dx�(�-X���Ң���*���r#���;-H&B� s'y
G$®�-N�k��B�0�H��P�  h��?��:�?R,�TV �b�Xee�J�Wo�[^I��
ȃ6D5H��Ҁ�o�	�0��CN�F�g%
�U��L��)�Ȯ
�X,�C��;���$o�N��#K8af7�#ny`,Bj�A�d7!u����a���0;:��G����������L3D�
Y,ˡd�
��	f_�ŏ?��0 ��r�	�7�ĭ�|e #�P�twn5An�+�6X-9�6��
�j�\=]�R_���z#���[�X,�C��+C��+���ǟY��4F�8��>��Ag�
R����&UZ�i(.ØCV�^��g��Y<��\*f��֗y�dd��	�X,��j���./:��_�yWF�P�
$�+���)��k��4U	@H�F;��M7E~�'c�-<T?uh�mf9�Vʓ��ԧgJItg6,��7�9����r�U���@a$�}�=4�w~�T���J���&��aʮ]m	�_s|��!���p��pU}͘��6M���6� �A��^lc@�-ZX,����;�0���o�Ocm���`$�|.��t&~���P�#��IO���l#EBwt,�<��\���;3 �̗ �~��a�jzG:Ո֑x>���%
%�BɡXQ#�@"��u
a-�ao���#'�����gTc�� ����5�yӜ3)U ��b@����J���KY���m])2�m��G�1�xQ��F�л�S������j?���:�ϦR�/S���(y�/�4DF0��Hzp�QC��N.=/9��Sf�i��{t�%@<7v,��pCI�P�a�h��_��rTJ.R��Y�no����R	� 
eŸ��Z��'��%'���#��ڙ"�����1����+9}��$L����?>P=�����P:�8nZ�eJ��C�;�ʐ/:�<Û^��7]���'
!�c�v$��I���Nc��4����޲X,�dd��`ʘ2����L��O�袔AkpӚw\y��=��m%�PP�(j#n��3���P�T�g���-s��ᵵ����>/
B���ٹp�_�q
�������:���6Ü9����}�|y��u��)P)�`��#������Wm���B�K²CXQ#t �K��x\7�g�b(�b�&Rϑgk�X,�Rʾ��#r��5�F�N�8��.�mib��iH%��_~��ꡒO ��q4���s}C.����q�����cpMW���_��
0�a��0��U��i�?_
A1L&�oK�4�:
9�� �c-�<���� �۲�s�S����;J#%h-�t��/�p�	�Z�����,��@c� �iVn�a飣x��;Iz!a��L$������vVmhfkg
7|e���I%�!$�!]f�<Vm�P���@	CIr׍U��u6 ��or�ٍ�������a��N��
p(tF�b;�]��4DڄR��������%����9�����(�p�߫	p<M�Hn��#
:�#�ʒYg��ak�7ԑNZ'�b�>N@&�jk-Km�e�tR��	�ra�H%^rj/=��ӎ�������B�)���sX�%CcmH	e(V�>���,Z�D%�γ戮RE��mN����2\^>�>u��7
���,-F5��g��`���mR@�WL[�O_y����c�Z�z�5�z�D���c��/G�;'�b]F�ݖ'�U�p���1�����8�aX,�3���rOqv�6��t���5<�H���I]]��?/�P�J�k��]� /R�$x˜sX����ڐ (e�I�������rt��?�Kŗx�~fN�%��XpT�E�6�=�/}8~V��=���f9l���eQ87��D��~��!~��%̘և_t��	�dH�P�~��q��VC�Kg���G���LS�#��EJ�Fغ�����H�l�b�BE�H�+��Q$1F!�F����I�ljO3o�.>����A�A�8h��HC>���y&�,k��. �JB	�P����8����=��3����ȗ�}W4 ��S��w��m�h�pE�����b�a��3G�}�^�ݹi�!�)��y؇�.W\�ι��P�i��t�g��������i��i�	H'4�DDk�O>�Y��	�F�Dkx����4�}�X,�C#��0�uI�p�N���U\������4�a�F��ڀ5��\��sٲ��D�O��RR�8���?���m���B	��׾E����^̬3wPJ�:���p�q݌o-W���_�D���V5;^]���>\?7u���D!*�?��+jR�)Sm}���.|���hi(�ø� h!y�W��G��P!�$�Ă?��qcL�%�^t�V<B���oa� Fn0���b�dQ�����������\��^�����a��,�[�����վ�X5��tx���xf��O[[�� e\Z�|��G��r$�>�F&�
�}������E�)%��w"�P�uιܳ���L�o#�� ]/��X�*CK�K(�	b?/p n
�N��c)ޔ�ejj"��J)P�x��������KqG��^]�5��/n�Ȩ�
A(�ԁ��e�D���[�q����)���b	�P�P�&�)�����b9䌿J<G��O/��o^EcʧRr�ϥ�˟�L��Uf$��� ���en�<g;Ȅ	C���	@ Zp���íGD�~l%��|=��J���yp-��>�H�z:ֺ��ҫ@|�����^ �4^$�m,��S��TM}dt���|�ᝯ��i'v�����::����NDI��F:�����,^�@{o� ��`٢K�w�Mk�C�j��l�#Wt��*Z,��Q5��o����/�By0���'�qk�	�u��J��6�#|)
��<�PQ���sڌ,���\��ˠaErΙ���ËN��W��R5����|��3��]cim�F{_�V��p����H�*��>C�s\燘ي�ܟ�u�'9ɦ�e2n���Lڀ��������� ��?���-�q����J��j�!Wr����n.='��OkmP�H6w�p��6�6��S4�����;�b��ѿ4d�?��
f���R
��`�˄l���=KG��3CϠOFU�q���%u���/���˒7�9�_}a1����P\2P�!���~ �����#�4���i���q�6T�}hk3�MD١��߾pc��a�����BG��er���ǜrY2UF:xFN@In��}�0���/�y����E��e�}�C)7ќtD�/�w%��R�/G�j)�M_O-?�q?�����\}��1-�e���K��㺯�K�� ����]߻��s
!�6"��Q����iGe9zR���6��:�((i�!$�~v)/�`3��=�t�%�3^mȕ?>��͝�h�j�Bʨ�U綕[L��`$�q��8q/�sk`�f���;��7�|�&p�T�3��0�L�n��@ЛU8r�^/6������W�㜓vQ)8Tr���?��}�r��<��)S�KZ��\HmJS��
���r �<>v�:�Ǖ�x�����>��c����ާ�Ώ��7=�:#���?��C\~A'}Cqv �����w~��z�t�
��a�ת�^]��~y"ߟ;e�2��rK�tѵ��~l��j�����  �UWb���.�ؾb��&^6�N������HC����
҉};EN��Ͼ��_|�ARN@%���4���^"$Y瓬��L�qE�?�Ego��_^@M���N
X,�g4��Pv8e���CP�+�^:������
��TFJ#ATU��Lp�������hk*�����^vF/}�.^U?�u�uC������G�h�3��Y�D���;�o\wM��}n���;�	v�!W���,_�,Ő��k���\: P
�^�m! �`����N�9��>Je���ޡP2ޑ}��A~��E�� ʉ�����l���������:5>B�PHr�q�|��+��j��_-�eo�� ?��ul2�6��x�$�����uL�4�y\6��?|��R��F࠹��8�,�y�1DQ�d�J|�����%��jA����Õ�<�ƺ�>7@�Ѯk:;��Қ�!�C�c��g�^��� 
!v�޻�(}y��5i�6��Ҁx�?_�x�;���H��ةY�/˦�5�0�������Q��&e�n�Z�
#����$8�O󅟜��>��w��������'T�}b7Zǥ���p�Q�����#��B!��r@*��m/�Ʊ��	+
Gt��эGқuq�� ���?��ݯ��5�Y�К0P#��(�$����݋��ޗ �ЄZ ��s#ny`	睿�?��h>������3x�b#�u�ܪ*ō����V��B�,��,�B��ݛB��2u���Ċ<O�=W��#�ѓst/A�E Ȥ|^|j7k�4�n[-劢�K�H�pw�XG�_|�z.���r6���6�;�k����ZI&"R��d""���9��O� ��Dʍh�D�4o<�3�¶X,��'Z�+���
/���9"?�@��L�@<�'$�.�z�f����E��xŪ�a���+s�ɽ���q���G� �F�[�º
����R#�>�t���G�����+_^���xj4�r�ټ�/�ە3�5�t�D:z����G64s�yԤ+DQܱ�X_⊋vp���
GO)0uL�
;jP*��+��&��#K�@H�������c���
�������S��e����N�K�H"�����?��v�k�X�)�>��p]]5������s;�1e�(Pq`&�GF�Ȧ:R�x0�$�[�\|F;�X��K�z�ƴ�I$B0��whi�s�q���	�׉���#�p����}2�!UԻk��\v-B|�p\���>g{�懆Y�Ѓ�������l�t�D�y�c�
�<���$��i�8�^Dd���6���-|�c�����Sox�Z/3Hi(Woy�6��%�0���18��/��D�������%Am�����\��4�X10S�3yL?T�Ƞ�b���2��8Z�e[I'5aU�85iA{OS���
�8�L���jR!��m���x�����8�K?&���	H7V�SJS�{�<��_}n1�D��_�FA}&�>#�����鰯�]��_+��|I����t��� <#��8%Գ���
�.J��B�C�Tm��R��U[kX����N뢶���%���XS��?��{&��VZ�P��ʻWR�1F�� �	�g�D��ˣi���T�J
(�W��{�Օ�N2�·�X�������q���X,�7��y�1M!?�������r�cH%��rߗ4Յ�꼝�@��A�i�,\9�
;Ӥ��H�2!�jD.k�˿����"V5S,�8�.��2�@1~T���O�gh�r��v��~cp�d0���v=r��+����'��x"�85�se�����p����匴��6ඇ�y�'gq�}�p=C��L��'��qS��ԧ���h���e|[�0� Rt�p�_�?�@��:�G!ڣk��'��2�:���XQ+��Ƭ��光�n�A���ߝ�Eg�Ԟ����w�j;�B,ϫ� ��xhu3}=58n42�8���r2�.��z���
?�i
߽a-�e"-i�/�Ma��dDIT"b���v�Hz�3W75�I�C};ݾ����{�1s$̵��: O~l ^!���u,�v�o���靀H�P��3�[�|���,~��<�|�nm`��&Z=jD;%3&��p���&CVohb�FjR�ηJ	��dƄ3&V�4(i�*���jn5�#
��C���Xq̔<�N���R�8�g="]m��X,/(�4D�	>r�V�~�^Ʒ�伸:�o�9�Ɩ(���Hx��]	n�?���UR����G������XV�(^�I�Ԧ�(Mg�7�x'GL�'(��h�j�Z�F��b��gh������;}�/"�_BN��U��yڌ��O�\�V0��}K�q�S_?*�B�y�P9������V5p��&��!��=䲯�����=�!��
��E�)�$��>I������拷���T���ʍh�esG��at<�3�w9�A�w�FN��GcmA�Th�:�q�8n�gy��̾oҲX,��P�\I���'�^��^��0���iHf|r�$�������3���!?��4.�`;��%�0.Tr���?E���C���)�@9��+o���o~h	�qz�q#��i��k�d���Cf8�����u.\�K^��{���K�d��� ���R>'e�i��d�tcE@A�Ӥ����N�HO \pb?g��IXQ�IF�s�$Z�H*��s�����G������զ7��&r���Ȥ"�ͻ|����?Č)�Ը��XO&0q\����������:Vn���a�������K�������T���%�}�nl�-W���ZH%�x���/A6�+.�AXVY�%);L�4�k�oǑ��������ѓ
��������DaБDk�W�s�g���ڨ̈́�������};���A��x6���3[�}o_��	﩯�	���<]�|��;�7]5���ߺ]0�;]�k�����F�q�#%�|�#�R>�b\�S�`|�R)
9�W���W>��� �K�H
�#��'1~�?|�^������&�X��L��r8?�z\va����JU�C�>�owL��]s<CEAK}�<"� K�6��\w�8��<���y��X�\)�_�h�+1�K���S��ep�fR[�
�. #A���Ë����R_��gb��p�o��ױp������	���Ґ;N*�TM�i3O}�7O�5��U'@��&����D��WGj�j3M��񽏭ॳ�R�{(�g{5w/�w�?��t@I<~����\W$����Z^:�IG8�ǀ֒(��P��v��Y��5
�S6`�N�2������w��Z�'#�����%C�|�ړ�����D<fiA��b8JW�Aҋ���Q��N9�]Qh#�����LD�4i�-E�tT��TC�u[y��$_�j_����?6�,��5��8 N ��\�������TM�3v��1t��x��݌jͣCE*ƍ�S)'�uaJj�	��|��+y�+׍c@(C�|�ۧ�;�p
����3�����
��6Fܻd<W�n&[��3ul�چ2Q��� �Y'�p��qt
xx��`� ��p���P�����-���XOPp0Z"�A:�-u|��g�[��P�#E\�,���>�����{i����'��u4�<8��܅ㅄ~,$d��CIɪ�xn�[0������rH'�H�t�#���ڝ����[�@;Kn.���IUwZ��14����ާi����AP�h�Pr����m��YC%p��D��^~��e������v�GZ����/O�/��h�	1@���S{y�9;�!p��-;�y���a��z�^:���7��KL�2@�+t$I�UhH�r�����Ţ��b�Z@����O�n-I'$��Zt37�6����΄��P�(C�e��2���".�`g��C��f�4�dT�셄q��V�Ŵ�%&���$C�0�ep\��qR�}5\�����OgR���ާ��H�_v�ӷ�~k��ə��`_��l	s#����1����e|W�nHC����Y��l�ԟ�j��[��t��ɤ�Z��
��;b��P�l*���{�>�ڔ�ޔ��㽯���~b!���qzoͦf.��y$���P����kq������x𢏼��[2{� !_tIx�dD��]��b�<�_u*茣���[�Ph�bd{���|�gq�=m4��t$y�9�|��im�S�&H��w��/�ͮުX���?+�&��^^yv;�NdT]Wi�.�;j����<0��]	j}bg�
J%���]n_ϢE�C����s�	Xvs��;N����5͑1��Wi=!�X���m�u�����1��Q���2)/�/;�4h-�F�l*s�=S��wN�u���ER@�
\W\�ŝ�a i�g��FZ�H:�:��/xdC3o�d��
&pY���yKG�ݟ�s5�@2�%��o�����u�QRWǂ�i�
#�$#��Ȑϧ���8C(�p�c8��n�|x�w�������/"�TJ.R�#���Ū�5$�݋ǌ�G��Ԭ�\�-���{&p�������-S���Y���P3����q�N�׹��zxQ�� <�N�����R��!
ó3u�Muu�>YC�1�*�������c�|K	��"��cF�T��0����N@H7Θ�7���)^uf�ME�0.`����ܾp=C.�����ѝ�>k�4��?=�\݃I/^2T�����л�q���i�Y���ξ$	��sˡ��:��lfBc�I't���(�dj+�4-�'���׭&,(�(6�Z���Z�q����p�c�������~�T�JDqI�,)��@2�NFH�>����SRyaO�*'׷�6���Eŷ��: �5��L�X��J��=�W�4�ic�>9�\�������ض���c���.�C/��f�'��`��V>��S��_���B����0�s�{�e5������S
�p���P�-����[�C��G*�.@ŗLi+�,C�I7ⴓ����]��d��g��e�X����s"�\<�Y�
2a�A��qb5�q��=�X
C���%�x˕g�lC-��`Ā+e�"-�ȇ��_%�q��}����H�=���|�#�
��(W�Ċ���[�9�8��c�_�m}�5���L�:��g|x�oX�������GG�ݛ�0Mo��[���q|��G���`Ͷj���R��on��DĒu��0�Ȍ#���1e�IS�(�-�!���xGi҉h��x�p�������S�	K�\jK�ք���SP#cA��9�KC%���;�P�%�ť緓ND��w�D���S�q4N&������9�\QP��u�HJC�@�ל�CkC���҉hߺ����h�Rݽc�S�.�xo�~	k����h/��`����3]s��[ƍ����t)��JB-(��H�:��&�$akhgR!J2�1��Ak(U_�NExN|O����>���gtS�0p�C���]_>���?��� .5�A��[2el�ۿw	7��z��W��;���o�BC��X�kdu�P�c��}Yg��醻�_uv���~���1*x̹�D�x�8j3A<�	eBA�����n�,egG/�����I�<�e>{�E�tn}X���G���IUx՞�x�٦G�hI���*��/����ҍ���8�$���dw�+M�f�=�k�7�`�C�Q�
��-��bK{�1x��{�ck{=��h;:���9{f?�o��B=�4��.sޱ�SN� �6A\�sS!�-��F�N>��/�A
l��Ų?��0�|��;�����ٗ��Q�Ï6P�ڻ\A&�t}=�p8�]�X� P��o(͜_�D��iX�l�/)R	��'�o\E%���R`Ƹ2�o�l$}��_WJ%ѵ}�*[ދ���AY�o��

�BvD~�ݕ�t3�:7���7'`��m���Ԇ��5��U�������oX�y��Q's�'�	���g��z꓂3O� ,9He|��Q�r�[Ef�?)
���������Ď��ߟ����I<�h�S�.(:�*����u,�go���bS�����-彗�%�BN�1�-�g(��ZQOkA:2o�(��Xbƌ޸\(
a(in-p��<��5�t�C`(�̩E��r���Ae(�����<����Z�{����cp�DT.��mwGQ��~�Z�B{�p�:
��0��c!;p~"�6�K&C��3�~"�*�$?���:�]QY�#�dY�f�n�P�
�"I2qߊ^|Rc��DAuq��満�H�wׄ��B��+�^���t����!P���Na��ǎ
�(C�P��tq���oh�PV$�h�ײX,�d���XQ�xd�}gGN�Rp	}���c"n�7�I��'~��:��,��O�H�c�A�aʴ~2������/�����ڲ�s�H/@��熛g���>5B=>�^�:U��e:�!�F���� Ԙ��5�pc~h�D����i
���l�p��o��q��9��w܈Sfr�}�+Rɨ���/���oЄk������U��K�Sg��+�~<B��a�6F5�F�L��/��A!�ȿo(��^��}�a.9g'�N�'WH�vk_⹶q�b�w)F}.8����"���V���Ƕ�
,^[O&���x�k�;,]��e����=-%�e�'v��]�����_��Ư8 �1Rr��Nf�/�&�x�h�<=]/�:���l0��� ����: �� A� ]��7.�K�ej�F-����C⑛G�������@���Q�9n�����ѝ�{��N���g�v�ƣ9~���[��-��P��|�}�9��8�y��i�]>�ӏ�BG�R��g�N��F���2�a �������?���"��ey�;8��~vvղ�3�kw
X,���V�l�a��f^��(U]�]�;��n�oق���"�Ьߙf`0��f�$�w��H�ʳ�9��NC�%�X����w}�,�x�8���j�o���H��=����Ka� ��v*���u A'`� ���J�k(�/Kմ
)ed��羀'�Q�׾����/�N��9"_1~L��g�S�6��E��񅷮"�"02n��"6��g����¹��9�
��w� *Ǔ6N&�_�Mb��r�ɝJ��\���DQ�4�Xg�l>��w=�g��~�A �z��*�)3�yhiK�דJh[
�X�A ��lޕF�p�ٻKq�>
��Ÿ0\,Ƴ���6��T���h��8��H�� ����z�DC�}����+�d��Z���}(n�SFG�������_a�7����: ��0�#���!���h�Pyq��)�w��#H%5+7�R)�x�y;�	�@Q��9���x�v^~��NDT�_F�6��=����P��U�*�÷>���S�	�8ŧ<��~u<���Q�6���7��������Tv��ëx��WS�zH!F���$3���7��t��f�-��)�Ȕ���d2b��ff�d��,�/*��ǖ�,Y�o� S]�{�ќ{��&T��\ǉpS?��X>�ݓ�Wu�0z��qu�\��ۗ�Ji�UB���[u����K�\8Wic�����Kvm�kC�Pr��D�c�%���>?�i2W��4ܤ�Kh_Q�|�_p	B� ���q}��e�� �
���Eg�$(�K��d��͍,z���&f�W���ST��h�PF��f)o�l
�AWi��}�V���_�Ef$����O)�fd�GV��
/@�X�q�o&Wt(�c����wa�����R��Ą �K�k�Z}�����P�1|�����M�h#�"A"P
<>�ͳ��ώ�sC���g��8^T���-����w!JW�����[��! �b]��gvn��@��])Ǎ �l��i-�����M�y��c��&��>�t�ٍ�U�#
��2;v5�o�N�(q���|��
HGF�HD\w�d"
c�˄� i�Փc�WI~���\z�F��IR��|)I8g������p��V�2�H�p��8_t�JP��(!�BR���ydN������0�Q��/�Lr�i}\xr���܋����6���z���cp���R��b̸!�z�ةx�ד���7f��;�|�����cH������k��,�x�X��+���/iS���N4лMum��C�����8�oo�� [xn��	R���J���A�O�Ԏ�}�Ϧ/�A&��7�3�ή:kC��� ��(	}�7�9��|�$�v&�I�%�l��g���7��/:qT�j��|��'��\�]�ڄ����}�$�-ofLc���,��wP�K�i,�ns3K֎�i��Hƛ%|����ҞT�P�e�ᬙC��6��xϫ�𦋷��s�9~zl�J�+:�vz�r�/΁�l��&���V3�}�8m��s2Z�Y�'|�A2�Ъf.�9Ȅ	�Ka�a�Q}l��Ȓ����d4�Q�bE��݂`�Ҡ���1�˅��o�M�_=���	�@=��Q����{�תl�� x1�u����9���%�b��%�S�i{��&Q��6*i#A���Ij��+2��@:���;��^ˎ�$�dH��DՈ�����9��v��
��|�7'�ٟͥ�w��܇_�$jC^��f�l]#���>f��&ߟ������-�����͏,�>��d�ϝL�
W�>�+eʻLW�K�\����	� B	��2�@�l]3?�i���T2����Xi�������b#5�%ʃ	��>_��)|��i��W�*�><�{����yHO��՗�%�����u��C⨿?�1����/c��z>�Ѵ4T�"Q�f\tj?�.h�IV��j���tPd�����?�5�ϟ/B0���f ^0�J�l+EA���������D�64&zV�c�%�T�������kX���m)�PP�
�2��
����W<�_�k����]˧�9�BYr���r�v�$�|�����?����m�׬o�M_:�/�cGL$(�8�`P|ꇧ��'���4�\f�0���� 'Ӆ_r�Q�E(B_Ut������L]���ma�Gn�-��` ��+�Y��Q9JCI'�;%��O"��d�|<!���N8��HZ�f�w�H`��P*�������9��.N:b��V��qg��+7ՐN�{H���7�T������a_޶���6�Y���8 ���c~��c�#�5M��/�Y���y�!�E�<M��#������~l���0���ք|��r��	���Eg��� p���N�M�8� �\fɪ6^��Y��e[yӥ�$@�W��{'���RW �l����s��А)S�'�
���J�B�t��i���Ht�+��O���)�~�8"�wiR��`�Q���Î�Z^{�L+pF�����������T�׺��D\
��AƏ�c*��p�1}l����
uԦCzLU�{�O�u%5NH)��x!'M��χ�Q����J�}7�� �4B:Q�Vg�c�c�/���\e5����fX>� ����v����V������l�
O�K bA����e�w�׮'(� 
�����O_s��(�^uN'���MPrH�BjR�%�tS�[���x&S����=�)Ǿ��F����t
�x��%M���!Z�T�.�/���Ԭ��̃����Sè�
�:���0�<���et�����>��"��tY�K�4H��a}O�>n�� ��xt[-���i�2�@r��!�xx,�}�^
f)o�\�����@�a�M��p�1��4o"]�I��������c���<���]/����ޥmljO���>;���K��Qʞ]�e��
P|-�1|l��: �a-`�D�sOP�\P��(�l��5�1Uɭ�lȆ����_}n�����1�&�ۿ��=K��τ+W�h'3��'
F�8��ɟg�G	~���9����įS�&�O��&ق��߷����A9��u���^"�7���?�9�8���y���}�p�����%OK.'�ǢգX�3����W!�KN��ܩ�ڞˁz�V��e�|ѡ�+�@Q�(
e�qW?f!���-���E;޴E�nc��{�^���#M��{fǈ@PH[�Ll
��.�߻!-#��"^5��,|d,���,]_G��D�0�p�R�Wum�/��;?�ӱ:�����	��L��ca�o�4�#��:�~�x2/@I*$�:���n2`��>���q��>
#�[_����bi`7B%��?>�o�a:͋N��3o[IXt*�����ǿ
�9���=uF��}p�G���џMs������ɤR^��jz�.�7����8r� ��(�THJ	�z�8R^��]e_2cb�sO`gW��!� �#΀��-�+����h���<c��.l�M�l��vrə�;%�@��+Cɗ�����	͆����p�̞x�2D��i�<�j4w��p�֓9�Dă�[x�	���#�f�"��i�̜я�s�:n7J��T|�o��x>}��t����>��.!T�W�t�v<����Kb������`y�KY(^W*��J�ta��E8n2�%��g�����i�D:�k9jZ�kn��+�IGՎ}��e�i��������g�[���P!��L7DX�xu7�:�_�s
5��P���?o_��Gw�cu1��?��3�{Y#m��H�~@z?�m���E�&��RCCm�_�O�X#�e�<��62��Sz8fJm��)��<�(�in�-�6�/�0t�}Q;���G����r�Y�8��~��2��#8�N^��9�����V;2�j�������"�0&ΰ�ɀ��7�=��{�l%�X�<����/ځ .a��#p�8�_�|,����xO5逄k�Q�_9�+y�վV;Wހ.�v�?�[��w9��q�=�߻�0��"���'�
�1�~[(4�dRa��h���LdՖ\G��̅��>��襽��7_yw.nfts����%gt��7��/�Ha��P*&��N&W��*~PNh���w���Cث	��=S������'�D4�c�'x�947��"	&�f������I�l$���6�����Ի�5>'���v�ʳ:�6��(:�R�<��x����>�|�a|����{	z�jƶ	}IPv���UQ%�ZM��e�E;0�Ǽ�-$����k�ޝ�!g����!�&Ob��&�n�{�9�'�����k�xp��k;��5>���}����t�;4��BB��3� �D*'�
���Fae��������9�6]�S1�;!
�q��f!��Z��V�IG+��/b�/����eێF���H�����> ����ƍ�*6�>��Ǒ\w�8jbm�l��U�tq��[�#)@kŧ~t�.�c���D��f����@�G����o"�;R$\��+9�{|?�t=aEIXV�P��X��x�;y陝�5��̰�'OHےlyz�4ˊ������x���MT'h�����1:��K	��0�:o'	�q�ãH'�T��Vn��ҳ;����` Ri�W`��1��{�D�)1F�c��R�C��y�	����RvF�����]_?����FM*�s�3\��i�۽Q
u?�Ԙ�eqfDi֦��sl/�AOU$C��^��_���MU
9��D�~��3�FG��°6�6���kw%i��w
d�8���N���]W3ԗ��7O!�㇊����<�S5�Z�dȒ5�,[/,y���������	b��ǽ���q����7$2b�>�)��I����|��˹����l �$~(F�$�!�R�'L�	a(��~󅇙0n��P���"Q�i���l��M�t��b�Q�2�񱷬�M/��@.�o����㚛f �Fǎ�_r8�^�|���2O����`�#�&���4�+����	��K��B)t�ꧧp���fͶ4-�~\r�����qܰ������?�D�X�1UE�O[��l���)?��Oo���][�D*'2f��gO�Rղ;���H�iH����c�n���!��:��;2��r��9�#&d��6����%�)�������dlK�1ͅx�!qWH�*ޢ��`T��E'wb*j�/@ A萬	H�WPJS*����%}>�ޥ��ʇ�$
~ ���3�Ë��@P�8+� �����vG����'���3z(eq��	���>��B.�����㳸���xu^�����B�%_~�#L[��K�4�����y�/]���]V|��u�k��ۀ���j�]�V�����o=Hk}H�}u���V4��f�h�h^���ޟ���2�g��OL2�m��tm{�=����������=�%�C���@_.v�R><�M�9^2��{���#�l��]��ƛ^��r6�R�������I�Q�`@d��Ὧ�Dcm��:s�$��/G���L�<Wt���:y��	JN�T�j����/GF�(�].:����zAY!$(a�#�7]u.���Jɘ�2��2&�oJ�~dǍ/q��Oe=�XTg�Uu�[�aA"�9rAe�I6`lK�ImEZ|$���G���'vFǏ���-í��#��!���	|�'3)�%B�6��0��5���G��t������D�+�������:g��0�K�v2�Ҩ���ǭ��.��\�!�:��~r)o|�&��"��<��Q��w�M�p�$��a��4�a�0�zv���܊?�R���P,��Ml��������#��d� Q��R^��-�?hhm;��u:B�Q=�}O�0�
n[S�(pH�W(g=ܚ��\?�-�IZ|¨���X�{��R�g(w�?���:N�_6k'T����zK=݃.5�`$�:���`4���eKF3y#�����1m\�\����|a qC�?��n犋��['�X�?fى �2� WqG�6\�UJ�J�Q�M~�Q��0���4��.�����`��,�T�1�+x��Yǭ�p��c�9�*�s�嵐�H%�" /�r�(~x�4F5��"��j*��CW����L�%(9��E���Y���ߦ�qW�T����Gsߢ��w�N*Y�޷�r#�kk���Bp�q|�����]�
弋(8��M�x�8�Tg�7�	�ɤ�3��AI�h�?���n_���B��R	l�o3 ��a�� ; ��r�ݔ����f'��9�� cbQ����r��c�Kf�O_��~�d��8!Օ��{�vZ�D�� ���I��&���EЎ�ӛ/9���~�H'��'q�_���5
d��@��p��W��1B'��bѣ
�6����?�p��d�sN�$�U�;in�7�1�k��xh0��X�9�>^s^'�5k/>��c���D<z�������4��@���Wo租Y�KgmgLS�D�@M*`B[�/���GG�t} y��;8if7Qى��t�
�M�E���ˢ��s
٢dk{=�_�t�� ����
��sI�o*�dGw-�/ځл{[�
2�`��F���\��L�8�_pC;#^��R&�_Ý�ZIU���x{w��H��R���X(K=����A<���� �����
(BWVJ����u���=��n*�q��v���
jR�7��������@M*�gС�Z��4�!_th�Ns�ԾX�8��#&�xpuu*B�{f��t���oYSMB�����]íF�I���XV��F���B\GSHr��V�^�ʑ�¦�
��6���j�d�0��P2~T��LT����XQ$�o��[^��	c��>�(:�3ܶh��y*+���X�c�
8�(~���U�0��7��gDկ���W6�χⳖ+z�4���j #h�K�r�O������y˛�g�8^|�6*y/n8�������N��k3!�=����&��K6R�zq٠�r���x�9;�4sA��s#D:b۶~p�Q�|u�p�W��y�+�j��wt9ف�지?W[s���C�x�S��i���l_��][V�y�8^(�0� Y ��TDS]���TG����("n�{pUBU�!��	x���pT����z"�J��{Vs���񔁌e*��y��ڙ�F�q���gu�n<��oɺf���H%�!�&^s��"�����eC����R�o<��߿�	�r�%�ʐGy(Ai0Ay(�_��i*���Z˭߿����B���Q��9*n2�������0K.Wh�{�Z�	�P!$�z�3(ǐ�	�Z���I�9#�t�g&>z�L2�<UD��;'���쯈����e��e_"����l~�#(dS�j�!�Iy>��DU�K���0XL�_��%��_�k�34���͐�q�|�C��������kL�4��#�����T{_
*�N��~�m�;W8Q�M�E�0�����NG�O�b4Z�N����1S8�FHCPt9��N�������̻�yH!����m�^���Fd��迖��m�H��H&�*s�	ݘ���Fp�u�O�/�Ƒ]��zn�P�����4�v�)Cw�|1�(Uc�n���r\'��$A�"~�'ܐT: �~��%H��9^�7��(�����	�	z��g=�E?�ق'5���|�ab�/�R��7]��7�f���H����՛�k??������������-����K���j#���#w������ŧԑ�F�N�,\�HgG
���Pܴϑr��DT�uf�+7���M��#�7���4$j}�P��Gs��.��?�b���}ߒY=xJ�Q�t�X���|`}�o{)��N��Z돰�}����s .���_��QȖOSR�{�-���S �rc�<ϰ�;EC��3����wC�2�����MK}Ĥ�2�>����%/:{~��͏t���?9���5S�A@���;�����U�a-(�.A���Kџs)W�y�����K�$B��촓�˝S�s�(ҩ� P���9��.JCI\7VGT��fB�l�� ��6�Q�1q�!(9�~j���{��1*n��
��/�7n`\k��tFQ��>?]�8����wĆ2[t(�*�B�Rb�m��k�g4?��bj�>F�j����2���օ���O�їd�����0�W2.5=9���uVT<
"i�0w�B�俇��9�Y'�1e� ���Q}*b��Q<��i��2����e�S��G$�� �����G�{*���$��gB�6�?�+����Cۜޝ�~q�70�w�X���?,�= �'a�ݙ�_E��[{vm�j.7���ǒ�d"�#�?��*S	�2W��N=���N�I�?��4~��)�����X�G�H*9��nQ$H6���c�Ϳ'�XO��⬎�! 
W�tW�d3�5���V�v$h����6�	|'���������Y���z;眱��@���܈R��u"7�?�\QQ���ub�{�*ڪ���!�;|�M����Q���H��)dCŗ�0m�w�u�\��Pw=<�\}BU�x�� ����f$�۳�1�98·��jL�&�u�ǋ;����6�egv3it����<r��7��^?����iU�2e].=o�'Q��%%�i:�ky߷N�oH1��<�Z5�������,����3��bʤ�8f���P�y��#!��w����ga��)�e��\��f{W���t$W~p	ҀHi^��w�<�;��dDS}��3��R�<]�����5�_�y�_@��Zw����bh�
�v!�w����Б��Zmӑg44M�񒑎y����H~hx��N�矕�:k:���rɅR<�5���Wi��
so��g~:��t0�˾dr[����A��7լD�:f8}� ӧ��~7%g���$�R���Ų
uԦ}2I�/]�.)�p߂�+.o��n[�DS���Зu��?ǳ|C=��}4ԔС$��E�t������ӂ m$��s.���đi(�dD�W$���i:���մ�k�
ŊCŏ-KM:����9����D�{��=��=�n���Ƞ��-���3BOE����S�54��+�02(��u�0T|Ŕ1%�o΃�"逞�0m������5J7qݭS�ޕdTc�?vQ<�%� ��X���m�L���S��w�b�/j}�t�xܵ�����͈"A}M�o�=���l�������K%�����E���!P�E~A���U�������_�݌#|���u ,�n6�cP�B�ݛ�}���܆��o>~Tm}R9��Uq��H�<O�/I�|�|��V�{�:��t�F�-!�ѐ�(dS����ù�Hxሒ�R�b�傓کo.Rɺ���������ƔJE]���e�؀��K�\�Ɯ_MM* [py�ۙP��2��H�|�'q��&Ʒ�G�
e�Rf��Z~r����%��8=l*��N���?M'Ի���4L�����\f�d妆�򧋠sE�S���/.��/�`6Io�eņ&~��)hcH'4�-e*� T!�!��H�5D�(7~�͐�#r�M�yOB@���v.�GƟ��*�'<Zp�i}� G�4��ԉY�ͻ��$2*�4Fບ�)�;��f*�"J�4��$#"�w���LČ�YD��Sqx`e	/z�,�\��3����7����Y^t�N^~�d��`k�+#��
�1Lj��fu��Z��'7 >��)e�����r�֕���B2�>k��R����W��K����s� ��?��g ��B�$hP����QT齾���������|����kc4�{��=�=ǠM�7��΍��岋v�S;�>6G&T�>�]�i�^����=�U[jh��a��:cbq����{b�O��{'�;&�l��c{hj.ƥ��&A�(�y�4>����%�T�����k���H1d��~�DZ*T����%u�;���lGFh#!�Lj�3��̎�IW�LOL���%��wՠ�ӧ�E5�?��LmC��D&A�Ϥ�?�;������]�����?�J~%A����J �r�b١\�CC���Pv)��l����m���1�
%�+���Egu�jE]�Dh�Y���/\{��N�ċt\>t��:+�8�K^���|xC����!�ak ��3����������DCm�@��q�b-� 
�k�j+q��$��=�)��j#���?�1���b#�ƃ8L_��rVl�E{�K�pi�Ŀ�ѓ
�>����"H�����\O�<�z�j)���iehm�F�h�8q�_!T���r{��;��	?�`U������&?� X3�#����/��u��3��W2uc^��6	׭���6�? �Ղ�:�]������i�m)�T_AU��w����:$M�W�P��i�3�ݝ�7Z �e�x�x�n}���ʜul�5��QE2	C�"ذ�����M�nD*�)WmMN>�QQH�
Os�=�%-�>A��(M�@�ޡ$�Z�D�F�I����l�H!<M
�}ƶ1A<&�!,�l�L��O���1�X�(W��ٓ��;��J:�I%Cܺb,q,�ރ���T��2��)���o�(
�x.�A%x�7q���b#.�+���Ƀ�����������+6�s�I���[}_"'���W���&ZSG]:^&�D�z��'͌i�qj+�4�V�X����u�z/�\'v&���8uob�k�n:�rK
�c2��QʃI\�	+��mY��r����ݖ&��Ⳛ��6�|��I�*�%7v`�!�?<���3dR�6�i)O�,��w�/�R�.���`�&�Tش
�
��pb��Q�u ,�6 ��:�B輸��|C���󙦣f66O�u�PG���0G`�v鹆d�Gk��뱭+9)z�����h�uN%
���E'�$�X�2�!e,��Q�C���Z�Q��>�?�1�?�>׉KQ$B��D#=�x�p��,��E��u�!�'�wy+I/z�.kK��{�w�H'$��`��]�@2nT���
aP�FMg_���d� �E� �\���c�A9���Q��'Б�ahF���ֻǤ�M��i� ��tzT�j_����
G��v�G�R�X'H7�\rz?�i
�ᾇ=^S [;3��Cu�M���^��?���}�|��x;��q�㖎.���EZ�ȄL]b��:�cr�OP2P��=��DZ�L��j,�f[D�WY �5����4�K��`Lk���_t�9��[�3�ko>��W4D��ey�k62}�����րV\s�h��.�~���8��+���ݬ�u�?�G����u ,/4G ���2a�M���+�:���v��ڦ	��E�/́t��&&�5$�jb�c��DDׁ����t��z�����(v�&F&<א�jo�n!"�.�a���mEd""��X
�
ٺ����i�~҇���wm*^�7�L�(�#z a$�:���B�+��hvtg̻xn��Mt�>�atS��8�﫫?9�!צ52�$8&.�H�$,��X{Ǎ œ����3a�0)���;?���"~U��Q{h�G�sv�[&�g}��{�u�aXSa$�c�K.S���������{2
5���l���NR@i&���O<ݵ����Iƌ�a|kVx'L�r��V�ػ97c�s4]���������FG���ץ���g߽�ϖ"
*�/�.B�P�l)����K�i���AM�I��(ǍB���z7���
��s?�`���3�� X^���q5��#]�r�`�����66L���RN�ux@����h�Ka(�'1Ĺ't��*l��_�A�aX��?:�(�^4��X�
����fgw�\Q=i�6^G,�Z��.���R٥?�H�j#�1>r�����k(Ud���2�n��6�"6�]�I���t���b�q� �A:`d�Y��񆋷T�8s�F��Բhm
5<G�*����ޙ�.v�qC]$8��>p4:�����rܴR^HXv8�>���c��2IG��,���zRT�.��hջ�&���Mp�śX�����}"��*Hi�4���c�{ջ��
�u��8��'�P��S;��/SG��Sf^�Y�S_r��>��3���8!�R�4�
=�F&%���RÞ�q�#~�1|�73����<��Ć_�8^e1�;�r��(�z�����mw��: ���D"{U����7��+C�o�o��ejPREZ��lt���Z��v���К���5�jo`���'l@�[��㞍�q�I�j�����@���X�]:���$��7 ��0m|�����߸�f����~}"7�5֗`x�"qd�=��c��籵c�Ȉ�����$���_�	S�v�'"�m�u_:���
 P�*U,��WDiC&�9�^c1|�~w�d>zy���P)��*���>z���n%;��t&��&�����;��:n � ,*���GX���U[2����=�x�����H0��@�s������-\��M�S 
a��ԙ=�~� V�S[�;x"�0�p	#��-h�����c�:�o}d)��BIj�(OU��q#HD��p���r�?&�J��� �
�r�H����w��ޭ��;@!V?|[�<��f�왜it@��Π�������}�?��*B:N?{��f��.�{�7r�/��W���o�Ao>��K����⦰gp �E�?��tv�x҈܅�O��]�0`܈5[�ȹq�;ԤC&��!��Z<J�﬩J?�Eq��&���.���^�\�����gjk��+������/hC]Ƨ6�Nxn���준����V⨉Y�J<�?��;O���gv�X��P��*8�GF7�s�#�X��7��t��>��t"~���	��(���C���5��iG'uU���GZ����5�F�!�|��xj�2�J�P�N~7g1�>���\�bY�M�ܶ���}b?��8�u��z�DM@�. Q l����</�؅��o��I�!|�O�2@9*�sC�}�C����;��}1��U�/�����w7
�
��������'��o�k�����QGJ��9���C�uA�<0��>!5O��ߛ�\Iî��c��%�F�b��'�4Uu&���9��n�R�E!�&2�F�H0��gls	V' ��R��֙���E$҂����L��O�]sqz8�߳�!�� ���?e?��6�1;�
���/9��A��e�9�d"����]=	\��^Ymt,+��2�Gr��Ǩ�I��dGg��Nح"t��~���c�af�Ҕ�.��߽͗����x��ln�a��!�(L(im(�R_a{w���Oy^�	����Z0�7�j�P�~��3v�7n�˿>���Ju�!~_%_R,y|��x��x�i;x�y����G��=��oN�k���s��,G��$4������ПuH'C7ղo��@*7�F�������įl������c'��M�[l��L3H��U���A�S����}�?7Я ����dLը�gZ�+�9��O=���'H��G��P�%p���+�#&p´�����~q)cC�����a-���
ບ��4�,m%���}F��������g0Agb�& D�\��WH$w�<�`(�-�ȓ�{AM��������S�VeϚ��Z�w#�ﬥ�K��k�0��u4���F���]����Pd[�k�� ]v9�~6�J�����A@e��ͯ��[.�EG_�՛��܄Z����k)W�7?��3Z�p#~����sI��#e��𙷮�[\C҃���@�#Wt�����/,�/�@�7E����W��oYK�\u���uM�>%\��u���g7O���Ʋt]a�s�>�8Տ�2����Nյu��ݹ����b��� �
?���a��-��<+�nG`v���w�
������;���Ne���F0�~��qL5���>C�UѕD��]��kF&��hX:��j���?���RE�;��޾��܉_p�ѿD�ny`�v�Hz�8� ȃ7�]p
ۻ�	 %��t1,���#��=w�d+�i_'�G����W,+�S� a$���8��~�U�P�՛�°�+Ŋ��H/�6���ŧt2������],�l�ܙ-c'+���N���_͎�$R�˨"���9b|��V�����j-^���E½а�ҩ�G6�r�ܣq�'LAY��7�����}f����x�B���=\��M���Q�����j��Eq�DM:��6��Χ�6 �
���h���U��(ǉt��
�W��=;��Q.����0�F�q�Z,���OG`n���#@��A~�)}���u������J�P(7
����~ ?�$� ����-SF��������;����8��!<�icK��3����V��bD'"?����N*ox���G����1�ݴ�?#���Mj-�@ev/�����$�@>�:��9��+F~��o-�O=G_�%���26KT� &R<��WiJɼe��qC�����8��>
%�{O��E�vteо�Tޟ5�����g~|�H��������>��%��&q�ŒL[�=�4������z�TRMe�P���Vr�Z�\�ҍ��U����>��Wͬ���o��xZ�@M*�����Ҩ�_�p�f���F9n�Atu�]ۖE���*=C~�X�o���yp@�X�)�3(�8v���+۷=�����T�r�H�X�"��#-��	��C����)$��e:~��ڹ����{�����ǝ?��7�|=~Q=f�S𿿟ɣ[3��ڀ��ش���F�a6��k�ex�����;�7�'�5������m��L���)�O��R�ӎ����K�*�
;kH&"R��{i!*�
��o�5��D���c��i�M��{8ʌ��3y��-e������q&^��X�<^�-�=���W�"Sa�=�0yLG��'8*�}�>��9�dS׉F��_QJPLR�&����Hx)��v2?�i�~���� H�h)�0|�۹�ٵ�n�g鯢�ړAW
�p��5��g�m�<KG ���ND�����Y���-����eꎙ�iK:�1H���Zp0o�7F��B>���;�ȩ'��2��k�E)���������F��C���o����>�ƺ��?���̈́Ll+�L  �@�; �ޫ��p�C,�cD�:�Sq���P�N�v����B)��?��T�:�o�I/b��&���GJ���`u��7s��.���.;�s|���ޝY��*C֥s I]]	B�	$�Fh�
����?M����8����	L�}�j�[>&VU@$�4�@2=�q�鮟� �4���ɼ��&>|�:F��q��z�3,�@�X�fW_w4�/j������{d�&�4�q��"��A�˯����.��o���{t�[,�����.�Bp���?�,~]>�~s*���L��*�i@9ndL$L��H8v�9 �ַbY�/��7?���^��De�0��Jn���WH���^w<W�j���~�P2��Ę�x]� V�+\�v�Iz:N��ݢHO�o��T�-��}���O� @�j��P��=��R�-
>'�U���d��x�
�3�&���5��x�BHj����n��JG�@*C�谳;͑Sc�"�$
uƴ���C���޹��uUw���>����g�ر�<m��@D[" UH��J�ZE��'�T��TU�U���U)(P�����*@$B�HHc���v���y��y����;s�b�!vr��莮}�������k���w�����dk@:�~��PH{>F;������F�r/oK��L���Ș�/~�*���M|��'���Sl��Ѭ
I��!?yq��=����$Na�bD���RF�6���t����$�ŧ��U�_�����-r%��(@�K�7�
�Q�kdݯ
:��
:�zA�w�͍���,A%t��R�
8�G�*��o��}o��;�g�i��ֵ�)���?���o\Ϸ��YK�������5�(�?�8N�WYX���An���9|O0Zp#b�9������PA� c�K�յ��%�!��05�|	�\zLi!�<�z�2W��H��Ds�m>���HlȊ��aj��[���������B�t��W�X^��e����`�s��
~�n����cS!�4[6,�Y��f��V̆Ɉ�����AJ#��V�b���{�����R-��gt��&N�q4ja�/E�C�m<'�$q��:��rԦ��B�u�߁�X��r�{K�/Q
�����<���,O>�%'7�,���0��js���,���V$S�.���s�0�f=�n�;�o�-=�|�2�n�Ъ�ֵ/����&y��1��y�8��b���+z�[�or�X�����o���:/m���^np�T���������H'�b��1�LVk	�rd���J��2�\'�h��+N�}�����\D�6
V��E��x��"��6�Hkɭ��_�M#��C_����,�!!k���}���s����xd�w|s��?!^I�^-^�N�R6�D<�|U��pݩ-:H&[	���,m���^c�}�K��(�E߹,��΢^i!�|����}k9�@,�s_�R ��L�@���� �<���9��~����N�N�6w{��%�775J�K�Z��k+����z��p��3�y��Ȯ��VI��??B�zS7����cອK\w��Ւ/�Ɔ�n���G+ܳ���$�Z�Mc��V=��F���b�8x�4�(�qT*	�ꭼ������6q��;n�[8J���7��T�3lI�zud���p,��Z�3:x��j�4t&ܶ��)j�U�7>���yێ���u����U <�U{g�
���y�7���D�ʄ{����hm�$����>jz�ä��G�}��a��|���-Q
��X������A�B�7��a��c���߫6�n�5g�4�1&���$�"�B�ډ�!�WG���.g��9�sP	���X�k$x.=g3�-��I[�6�U��uUĮ�1��f�L�U>uo��P	-6S�s헻>�^�xެF1���P
$�bo�����T�Mۗ����1�8:ο�5�X���  ΄�m���v�����4�(
$���e���kI3�1��9����|��dV�E}s]� �+E!J�O|a7���QSl�W-���E��V�����Bk�)�I��L�����D��O�le/d� ��D��H���%JP���X�P?�k��uw���ݕ���:�Z�լ�o$��0^ՊK��Ӆ#�k&�pA3�ώ0a`�������8��zl��1;Q�'�lgU>�7�$i�5�	����~>��:��D�,iZ�ߍ���Eߜ{��*&0�p�As�(����O�|�/09�'�{8:zr���:�Z1���j
���Z|��23�'�il�z�
{v.��S�72<O8��������Ls�ԀV=�+L�yШZ�>P�/�i7����%|!�����6�b_ҫ���`���AA�ڇ�:�,MN?�3�}�@
����K���M�Ha�������΀t���#���Zu�k�o$�[���-��b�����~{3_}�J��1VϘ���6����]����M]6o�3=�S����_����&@D�Y�j�K!q�ꜛ��{#���{?sy
�Y�E�����C�Q<{��T+b���G�/�{f�;n;�KM����q�q���L� *f;]ef�Gf:�L�ĚǼp��	ra�Y�d+���ě���=7��c>Q���:/nR	.��␾���1��LGI_�W��A�@ҙ��{�o �ώ�UI�%JP�
��6B��i����M��v�߹�����G������f�֪���hc��L�8���~i���F�wu��y���U��c�,JA8&sS[g����Fk��7��� ��	*p�)h���^@j_y*��~F��bı��I�> j��C��e�"��ZM)G��y�P+����ʗL���Y~��Cy۟��p�[��i��}E����B3Q��\�(Ǧ队�TG���ͰNѬ�|��;Pj'�Hc]^��{�j�����J{N+�5:��u�wRڧH��Q��`�U���~�R �(qY���,>� �|F��E�Ҟ�}��KK��B��Qom��YLP����N�Ze�K�c`�@�(����!�:��b�P��^h���yB����`�׿��G��bz,f�x��-�7���(*�e�t*)��`,�e�45��V%��6�q�"J�J�Ah�?��Љ���9����>=��|j��d��+ۼ����ڷ6S
b���9����8�N�9r��G
�sT&�7��Zq\�����G�Z;眎�K:�/�A;"JV�b_z�}�������ɯ�2�/q�A����e���h������\�!/HwT�3T3�A�M�B��Zd8*���c�U1)Od�pP@�)�L��.�<��R�k'��w�B�� ͚%0�z=#���~e�(oOV�/w}>�����'�`i�F�*��x�
���7S	��
�{�>O����D��9��W9r����v�I��bS�L<#k�H�f
�_*
��<"N�I�e�k/0X9�M�:<YN���Z]���̖��o�R �(qq�ס��|�`�7}3��Z�1�f� l�U�ۯ�'9[ry	�󊄢�~X��.0
v힟S]��֎z%;+i�DѪ��#J�R�	s�x��>%y���� 䙃�}�#bG�,¯-�$��PZ;�p��5i�f�0�H���Ľǁ���J�/Q
�%.	1��sw'x��o�~�6/�7k��*
ª�R�D�X%��:z�3#���Cp>��|�]^�7t���t��6fd���,�md_�o��(�sGJ�M
T��3XZ"N+��c?�� ����~I�%JP�ĥ!��q�����-0}Z祈7�ӌ�z�EX���5Q�XD���2�L��E�=(��z�C����r(�Y�S��''�O�vz�Q�H|A����3%�(@��.t��i�ug,\܎�ޭM�ma}���Lԧ	*5��6�E(2����Z���	��n��(]��[���7 ���.Qtp�,}i?|x
�=�U�_� %J\nb@6�g��׀�A�j��z�f�:9]�7	�
A���+���W��LK>�Q��̊_OD��T*�B�d/Jp65�MTԝ'��D��k�H�{N�>
������bX�Lr�.Q
�%^���a���V�d,�x���
��[=	��&&M�[T�M���ўhm\�԰�t0$�5")o��A������)Qʸ��s�v.�Q�&I���i⤍u�i���؇ɇ�^������t�(@�o����5`pp3:|�lإ%�6�+	�!�i�{5���=�P�(����� �V������D�1RʈR"��"��e*K�%���ɢSd�-K����`e���s��z�/��%J�O�%�+��w�3�a<��� �	*o1fbW��M[�J�0Tj5�G{)~P�=�V�(
A9�Z;"r�F�����v���*H^�c�r�{�8�$Si��6���t$�B�qdW�<�~Ȟ��N�5�V-ꑬOI�%J��D��?����<�жx���X:`��Pᛐ�-J��	��	�7�.�R�����*J��0N)�P�HAZ�`	���Q�gw/��n���x9ק�f8� wD��4@�YQNRe�L[I�Y�MD��8�@����q՗KG��`_^����g9Cĕ�_�D) J���Y�-��3�5����`�ᵶ"�k4a˫M�����kB0��5p<U�?P�J8e<�����]�s�YJ#b_���+�9�QJ��.yʡ�5�E%�A�E)Q�Z��DeD�L'��"�Vg-֭���m�\J*�!9
�>��_d���T~I�%J��D��\�FFR��G��5n�a!�My�rxc&�7\�|�bNP�
z��IB��l���?��:"���4Y�-P�[G�3���3��<�4JҤ��X�p�#�S���)%d2��q�'$��J��E��q�O�>
��@<Q�>$@{5�!��L1�Ƨ$�%JP���-(��#��u�:������o �䃻�����AM@_������2�x�"Z�
����G��|;�4��C���!�K8�R���Hbm���A�@R�?�nZl�c`�����+��[�Xŧ4�5ڥ1$�WJO�(Q�U��������I    IEND�B`�

--- public\images\logos\muara.png ---

�PNG

   
IHDR         �x��  ~caBX  ~jumb   jumdc2pa  �  � 8�qc2pa   Xjumb   Gjumdc2ma  �  � 8�qurn:c2pa:40eb15f7-b417-4201-bdee-47776452d616   �jumb   )jumdc2as  �  � 8�qc2pa.assertions    �jumb   Djumdcbor  �  � 8�qc2pa.ingredient.v3    c2sh���"	P�&Z��-�   lcbor�idc:formatiimage/pngjinstanceIDx,xmp:iid:de0efab1-3c9b-4811-ab5c-8c8392eeb274lrelationshiphparentOf  �jumb   Ajumdcbor  �  � 8�qc2pa.actions.v2    c2sh�'c���u�@ܴ��  �cbor�gactions��factionkc2pa.openedjparameters�kingredients��curlx-self#jumbf=c2pa.assertions/c2pa.ingredient.v3dhashX ^�LO;�u�]��s��*�#*�fvi��$F~���factionxcom.anthropic.claude.providedjparameters�xcom.anthropic.origin-confidencegunknownkdescriptionxfClaude provided this file at the request of a user and may have created or modified the file contents.msoftwareAgent�dnamefClauderallActionsIncluded�   �jumb   @jumdcbor  �  � 8�qc2pa.hash.data    c2shH��R�+����\#�;a   �cbor�calgfsha256cpadM             dhashX !��Ǻ������ui)��oӆ
sH��ׅ�0��dnamenjumbf manifestjexclusions��estart!flength�  >jumb   'jumdc2cl  �  � 8�qc2pa.claim.v2   cbor�calgfsha256isignaturexMself#jumbf=/c2pa/urn:c2pa:40eb15f7-b417-4201-bdee-47776452d616/c2pa.signaturejinstanceIDx,xmp:iid:d3d11716-9026-4167-9f22-1ad80b1bd490rcreated_assertions��curlx-self#jumbf=c2pa.assertions/c2pa.ingredient.v3dhashX ^�LO;�u�]��s��*�#*�fvi��$F~���curlx*self#jumbf=c2pa.assertions/c2pa.actions.v2dhashX �"]r�%Lf�RS��C��:K��y�B�3��curlx)self#jumbf=c2pa.assertions/c2pa.hash.datadhashX oV'��.��݄߃�Ȯ�v���;>R��xtclaim_generator_info�dnameoAnthropic Filesgversione1.0.0kspecVersione2.4.0  8jumb   (jumdc2cs  �  � 8�qc2pa.signature   cbor҄Y�&!Y
0�0���@�
��9о���B=gU 0
*�H�=0I10U
Anthropic, PBC1.0,U%Anthropic Content Credentials Root CA0
260807184356Z
280806194356Z0D10U
Anthropic, PBC1)0'U Anthropic Claude Content Signing0Y0*�H�=*�H�=B �z
k�P�4�B�9[D���ײ�J�з�+3wdw���<Et(�.:}}?�4U��}�J�7���X0V0U��0U%0
+��^0U�0 0U#0��Q��Nd[#���Ϛ>���\�0
*�H�=g 0d01s�z��U��F�=���lNf���O@e�?<E���$���@��U�0p_\��a�bJ�/���
P�(��2_��=�Z��,Ï:2��x�S�TQ�G	�cpadY
�                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              �X@�ċaW,�g�RS?bS�Uv��ܺy�.�gi����X�4荭N{��|�F�!(�j⣺�$��%�ŕ��   IDATx���y�e�q�	�"�>���ƜG���<���H��8H�����d˖�e/����]���:�֪Z��mWU/�m�Ģf�)Q�����\%K$5� �	 d������>�� $9� /�w�s����_ٲe{̈́��Uxn���ph{���3>�����WvY^r��'�:��n�؎
۷���X0@�oύ�������hf����)"`�D�0�
�?$�
����2�"��:qƷ:zTG�`�1�#ƃXz�lٲ�&�d�v�=�L8�>y��xj���gp7��?�v���_��ED�ĢaFd��;�fɪt������5X|�_˕��9��wO��KC���E���qT#ƀ�g�H�K�~�o��iЁ���c�-_4�Hٲe �-��?�@�A���y��zw7��^��\Mށ�mX}=�<���ā(�5��؁[m!n ��
�W�U���g�}L'����J Dӭ!��*LA�����1|ﯨV���)~��'O�|�1�d˖@�l�v�=zfg�Å]���ԃ�qŵ��N��G�.\�C4E�1L;B��!��*Hr��ȫ^� i3Pl��wTd�2�o�G�j="���/�#�Uʹ�1�?��~zK`�AA�l d�����#�r�*O��O��j��D����7���יI���(>�`5Ę���mv�r���(�@B�;��"
�H�H{<���"꾈�?�~���Q>�E��QS>�ì [� �e;���*�?b��7o nt�z �u��
U��o#y�N�埘�?��>=��C����� �#�����ږ,��c��_4x0�C�-�l�.�k��C�������V,���#�&Ln���c
FE��ѿ6��DS�˨��0�X?|�A����������!Ȗ@�l��U�G�s�f���_��½���onB���n���!�p��[��&P���M
!V/��ȟ!���㷿�ɩ�9�KlЧ#>hl�Z�-[ ٲ]���Q>�i�3����9��,����ހv�Hhmt_F�j���Ej���@Q�#��"�k���0����>�'�{y��?�p��@� �e�P#�q.�3﨧�z�'���N,�x���:�	�!�*���ѽ��y���i���I�Ϣ�p��P�=:�y�����s�@� �e��>L��Q~��G�CX���7��8G���g@�2�P�Lz�Z@x�7�ۨ|v�8jʧ?�d�  [�������㷡� V��7�:md����bq�l���S�Ǖ�E�m�Փ �����7U;��@� �e{��#mv��������{7��"ѹCSQ��k=�KE�
�#v�u�=��"���-��#K�Ȗ@�l����ɜ��N_S��8����l������ẩ��t`��C����M�-�l��x	��MU���)���;��m[;�$4��~��q�����`@?��_���8�x�f��O�3�ʖ-�l��u����_����;QwZB�g���� a�$��C�%�>5f����"Ȗ@���MS��z��avŌ#49}! .��e��� �|q1<��o����]�Y�l d�|m�
����o#�B�.|o�X�h�sN?�E	 `8\'��������5~�;��Y�\+�-�l�j����G�?��;P�:X�s�~�K��'"A<��.�0x���
�����|�2+�-�l�=�<r�L����Wߍ��h�����~���]�P��NL��������M�)�e�  ۅ���~�����g>�Ŀ�͸b2����
�A�
�B=�2�o���|�o|�y\Nd�  �EbGrS4���&��-���ݽ)���"��g�6�
i6A�b��A����N���e ��B���<4���Ώ���C��ݒzb A$G�ٲm��u�^E�����6x�%�Ζ-�l���ߘ�����E}1�h?[���
�)�'��_��_��0�����3	d�  �k���<T�� ѿ��P�H̕�ٲ�"(�֘/�!S�����o|׳d�  �k����:�a��f�*.�l��H��q�����B��W~��2Ȗ@�����
�A��g�v>��XD|��@ [ �^5K��gp�#ўlٲ�$��3Ȗ@�W��7����g�v���>�-�lgeG�&��J�����pv�ٲ]�@@������?|r�|��e �m��W�LH�~ǯ�
�9���f_v�ٲ]4@�y�9�����?<�R�;[ �.�
cz$�{��x��F�݈B���l+���J������:�Kc6��y�P �.O����Ѝ��?~ WT�)�����e��q@�.�,���'?� p��<�yG �d ��2��G>J�]-����?��.R�$����e����3J���D�g���ytS0�-�l��.�NK�}���� �w�2�Ɏ?[�K�Hz�'!�����>�8�e\ �-�l��%�/������C�	Ľ��ur�Y�?[��	ԈK��V�7�����
�Æ2 �v��ѣʃ1�ݿ�����@~�)�/BF�-[���BA��0������~arZ �l繽�S������F�O�r�?[�l8`\�!��=���#��ᓙ
�  ��f���}�|����P�A�C�ן�}�l�&�@��~��8����S��2 �vA��q���G=sw�W���/��B���y�lٲ�`I?@=��/3\�O���{:	f ��b�����w��o���.g�?[�l/D0(畺�4b����f6 �lZ��*���E��~�a����?��e����@�y��A��;f��-id6 �lN�����G��3�w�rČ&ן-[�l��n?��I���淾��l@ �^��v䡔��C�������1�A
�Gg�&βm��俜�W��3��+}�k������r96��~���D&� �V�l d{�����p��������m�~h
����j�V�ny)�|��y�t_*lـX���7� d;?�?U���;�qŏc�����MAb�mX�2q��c8�}�}�l�K����}��2^�}��1��g{����~��~Վ��<�ұ�(����&��y7�s=���SW�~����OsԔ�l@ �Ν�n�w>|�j�?��Q-58��~�Ϳ��)��x���;��7^B�{���m|�+y����!�W���tl�U<��y�Ў��<�ښ8��� �yoa�4V��Ք�pV�  ۹�����q������lٲ��fP��w ���ڱ����'����3�@ �^�59�����~+����{,��f˖킳h��s���f�����_YJ8�l/�Ɣ��w��{�ʏ�;��Vk O�˖-��I�TX|ׁ���OW���%�S d;+�X(���K�G���a��g˖���,��R�A��K������K �l����s���>�~�=6\�����eg��z�Ǽܶ��y�3=�-X5����t�������mUv��홾�K��g��^�b�W�ؼ��������&^����>�n��)�Ճ�P���o�ݜ�  ��M8��ą����Dʏ�/�[�^#�W�r�� /�6�W�*w!�:��� /�6�����Q�/<FM��t���_nd:�e p��$����~D|q�̠Ի����69��y_�b~�Vę��3J�m�O����>f�>W�0g�������$�97B>����%�&^��n�b�"�J9�U���~��N��q<�2 Ȕ�g�QϿ��is�R|��6�T��v�,��7�S C��G��)�@K@0I?�80�ޠ'�*Eib�s;�I^b
a#�&gC)���e+RX���	gI�O�o&���y��� �oa�g�^��k���A@ ���_x����Xt~^\q�U�c�l�1%6��Fg"�C�dCt>�05�� ZWe
�� ��N	x���"D��(ᴛ��E�����?
 0�N �
܄5�i �5�4?O[}Y���� �D�G_Nu�����0B��w������/�~&�d p9� ��������6����Vj$;�3���)ɦ��q� �6��� �I1����M�m�u�q#�(gU N��Q-�БO�)"�X�N��
��}���`b�)Q7|�)g��5n�mt�� �`����6�%�E��K� T*$�����\���� �d p���>��_��;?na1dU�~�:�r���¬��G) ��8M& @'��& `c "J
��4�it2��<u��FA�e����N+O�6�#���̗I��& � �nڹl���I�)/�e &�Z������퓿�s]@ ��5���������%E��6XIe���}.��?Q�qs��V��6�e|G������*�fا]i�'��} �T5[��-�aK@M�b�� $p`Hdt_k@K���[�a�ch_�I����t��)��1�A6��Wc�򺀁@-�yoa�g1����O�Пe��%�Ͽ�g�7��)g���
�"�� �F}�&Ω���h��m�,�����k�59�q$�2 ���7��>T�H�S<?�M���r�c�"m��T�`�
@&OE{�
�NY�����~��Z�Yo�:���^������ �Ұ���?���>�\�����jDs����N9� L�%�'M�:Q�V��p����z�&`1��÷D��j 6��F�
��o��4�`)��8�2�q�]1ql�  �X� �L�D�m�Q�΅��E�@!Wba�c+����:��/<�� ��;�GR�p�������Ib��*�%}/: ���ёs�ز��
M�6�P4*[��MB���ފch�M�+�w�
mfi�}�U���%���D
�L@�q0\��)�om?��8R�e���D�[��w�	82�� \TK-"��.V��z���c =�<�A@ �U�~�8��_<*��b1FDr�E Ī&�#Jc������k�9ԔS
��
���MzV�q�MF�:�i�-��D� ma�R v
 0n�kS:�}e �Ie&G��;[�
���\�j���?�MP*"y���֛a4S�:�������9%������j��~��h��#�?��O.���XD,L���{�?����%�@1!�jSQ��(�mm��^�f%?��mT0�` $��Lm�g��5�f�q��0����MC&� ۃ1�K`��m��Dezlܴ��
�"]w�t�
W?��+�]��y1�� .lk.������P�/��'��\
{QDb�S��lNԹ#��s�`5�H�F'�*���pDKdP�
���
�$c
Mׁn�qԹ�S}�I�'Z�tb�,���1K�u��q"���tn���Su���X/�,bJ1��6�N`h:iZ�_��`Fh>g1��t6��B��P�F�>Z���8
#�bC�Hs�u
Rc����3�$r��K[w�3�b�J�W���?����*� .P���ۃ��;R��kå��/
 �m[�8���?���U0"�6L{k�x��c��b��E��� !��#�(�-)�_�
�sf� ���[�rJm����������I���ɚ�~M�@��DA<Q|���7��
a�?�P
�A�C�M0�72#X��6�"�E#FCEQq��� �pڌ�@����&� �UA�g1��{�?�ß�m� \X֎�����V��iw�U����RY$'���|���u�Q�����ب( �)�n��S����F�,
��"ցh5fQ��
T�e��xINzԃ?r�-+ ��s�D���~��'�;�F�DD#Ĉ�༇���F�hF�SkI���*�"8T��s
Dq�D�o��0,B4�ѨCM)�W�8�p�q�k�:�
�S��UĘ��X�� .��8ฅᏭ��>�A@ �5�T��?s��#�[��+�/�
(U��H�>�i}����S���u:��H>XL�AFDbD)ՀaV��D_[Lt���J�N�SS��Q���}r������� Io"n�($F���H3��!9�h���+,F�PSU���`@5R��0��L�u�C �B�n�Q��H�����QM �6�tX�-[ Ę�"�A	fMw�����h3p�A��S�]�Z�ѕO��O�/�7��� ^�ȿu��v� ;�K��Ll��-  �Q��4�*5c��0�
�U�,��^
��S*�BYx:���^��^��L�N���¾����(�n�N����Rv=�/P�N١,;
+������Q�]E�{�צ���D3��kkk��� ����u�ԑ�~d�6�>++�,�������ڀ~Ȱ6�:P�F5��h�z�ӂ����֌9�֙'!�!2F��EQRՁ�6Bd$k�\�s._�5 �1�=g����|�~�I���ј d;;�?�������_5�?U�e��I��b�0��H@5���B�[b�"�>u5$�!+b��
�!��'�ʲ�,\r��s�3��t���ٵ����n�����,��0;ۥ�))�2���)U�(<e�(
�{��}��xNu�=B��Mw��@ ��t���&��PGB����j�A���X^Ycii����W�#�A�ɧ�fy��pX^Ye����z���>kk}�5��,�;�uDDp�S=��$����U�D�k�\�"���l�� ��ePWh��W��?�QS��+�-�W���}�c?"�����O��s����HI�tMTi8"�E��Ŋz��Y���H�I�.]/�^�e��a~~�m�ٱ}���ٵc;��23�e��"����:fgKz]�ہN!���Cr��x���o8��oh~M��}F�ϝ@)�u�$��m�-dT��9>	&�Q�kR�_�*PB�^8�����A���*'�Wx�œ{��}�yN,-��>`}��+�!u�������5um����]��:�9B��uMZl)���E�(�m.�~j�׿�G�H� γ�����7V��$;�Kx�46�bU�+�@酪�ʉ��(��-3���^��^���윟�w��Y�ggپ}���.���c���U�Ƽ���-����h��*���TD�t ��)��$���)M1�kӒ�h��vC7�՚�= Z*4�������A]�ԝo*�'�$',�Р������啚��}V�|�+��̳�Y�x�9~b��˫,/���>dmP������p %����*O<OK3��*�,�Z�  ������,�s�/��
�ƭi��I��}k�'Ty�"���
�ЦF���dz��#�
��F�P+���8?�l�`��������ٷo/;wϱ0#,v���1_*�
�q� m�?�SϹ��{�j{���F_4��M�Ϳ&6�۷��OS�c:ƚ�{���70e��� �V]�%@�t94U|!� 6�#>���U�
�>�s�eBp9��r�Z�b�o�\����e�{�8�{�g�����:�<�<�O�PGe}T�-
��C��я%�����`%�7�9��;�%�fzm{��ą4�Wm���d �ꢀZ��A@ ����G��L8���\^��H,z	@�@jDBG+JZ�)˥�o�a-9Ķ��	8�����Z_R+^�)LM�+�� 
kHC���,,tٳs�m��޵ȕ��ma���v�g�;��X��t{0���m{Cc1�&W��mtg��7������4��L8w�(�V ��Wں��7k�mzVA�.$ ��g��;V �&d�W��(I!�4}��S�����|�6]HL�`�둥�!+k}B4����y�돳��ʷ�=ƱN����`�BͰ�=Ho?Ut�XQ����1�A�5-���a]!��e:_!4�ej�F�	eB���h�4�FP�\����&��Z�E��Z���  ����3�?� �#�ѥ�R+`�I "R%���b]r���,��瓳
�Fj���a�*�Q8A� ����h�F')����y�صc;���+pž�l�6�L�`~������n�Z*�#^�P7�6e�eR�?ny`���"�
�1��K�<�l��AFsb Z����7l"�!`��i[	�`�*���h0Y^[�؉U�x�Y�x��y�Y���s<{�9^<����+�(��eA�K\Q`u4�Ҍ
6�6I ��n	�6C��ͧb�8$u���Z���x$ �!��L3 ��s1����͗/�A@ ��_���#�O��m �@�t�%ND�)V\3g^���Ɓ$��NI�|a@�L����z@�XU!D�W�;f�+wβo�6���*^q���ؽk�����8�O��p��i4n4��F�^�;�TwN�����_K�yJ��^���!�����A4%XL�;B��(DXV�'WV9~b�g�;���<ˉ�5����>���`���IV�`�/;h�KQt�yj����+KL�*��S�DG��XC�
��~�$�ʬ�_N\��E h@ic|��� 2�  ;�K�4��@�l�I$��M:z4�v��p��C0)��!����H7	B5 ��^*z�����ٻw���8t�nn�z��:�ٽ����X��ҧ�NF��i�o���F�W����_L3 8���cDT=��w�	rd�*��d���	��k^X<yl�o<v�/~��|������_d0�0-0)_�E���4��#�bQ�T�ùYb�U@H
� uj
�Jn�t������ d�@v���&&.̖6n5�S�^dB����;&���/M�^U�SW�8��u+�/0X_b��v�g���\u�^���
��� �vlg�b�sJ���o� cI��M>[�;1�����$jC�eq_� �l>��Z�uT�7��(+C��q�8k2�)�P�������ܱU�u�9���<��3|�O��ǟai��+{���h����$I���,Ўֆ�7
 h�7��IO^��z� 2�  ;�lKW"A�F�B*�r�:r�ӗ�L�w�E\=��H�t��㐵Փ�K�.2?똝)ر�����\w�J�;t����ˮ�s��*=��`�}�<���;�TX�SqjL��DDb��J���?���-��4;Wۄ`�,�ҥcn�:�`y�x��5������cO�ǟ�ǟeX�� �$F�ຸ��"%�Rm�	� ���f�6�^l|
��iS����v^A@� �9��������ϳE	�����TU���W0��,�6UК�7\C�u��jD��lH��9�w;����[���k��0�a��v�(�-���C]W@�㽝�= b��q}��6u�s8�l^^���� ��A(����B&
%'�a�`!���u&6WE
T!0GtP���j`"O~k����o���+<��1��;���0�P�b���3I�1�<EIÌ"�`��(�h�@h @�9� V V��|����O������2u������{�O�
�.>l�Zh���8�7 �G @m� h� X���+Ԉ�D�Sө�q�j���l_�c��9��ō�����Wq���,�{�B��ҥ^{a,�����k�|!m��H|�MS i4�k�܎����2 8 H��Xv���s"D#�
n4�`<
96�j��B�FT�%E����c/T<��I��'��7�੧�ű^���+(�-�2O]f���ň�H#���n5�Us\� � d;?"�t[?�/W>�w�I ��i#�4ا�;X\$�d��� *��V�TA-!� ����,�N"��P	��UHݧS�1�C�/�qݡC�~�-\{����{�,���.�ޅ��)��GDU���h�j�Gmj%��:v���� � hh~���ټ��6�(F��GCl4���S{��Q*�~�DIE��`�K��y~��~�9���G��7��xvy@E�J��FI��`�E��A�#�A��ƥ�l�@��i���T%�����Ra��a;a���_��*F%F� M�
J�AQB]S
�XU3�+�!1���5U�̰^�,`��8�o�C�vr��Wp󍇹���X,�P�V4_R\�!��L��h&�y�7�:V �\IG��X�5�y�z�-��R��|n�kKBi���X%��j+�-��!f�!�
�ԞqT� �5�H�
�����O>��/��O>�|�x��'O����N
���3�t	��
L\�j1i ��Ta�pX��ƀL^3�Ŏly�>�W ����k�+h������]�3��,O�{M�����J�<��5�5�X�-鯟`m�y
_���
����������+��}ػ���fU#No�ڸr_Ii[�rE��6i�+�YYm_x^q/9d� �tu!�X��;j�������+A���Q7$�jØ��W|�+O�'��_��}�q�}n���`��%ҡ��C�@�;L�:��Aؼ�4r�ђ|�hRA��΂�͚�t��(Eυ���Y���X��� ವ�
������P,~F��ݪ��h��^3 ��Z�
1RW�A��8�ea��`�$k+�SNRCv��+wq�᫹���\�,vY�ݲ���q�$5>�"8��
�����$�W̍���S������M�ͦ�� �y�o�[hd�ٌ&��
%��8�)�jX�6�P�Wk���|��O��W��k_{���u��'k�b�ôR�SG�b ���v){]���X�6V��v$�m����!�s�"�A����?�ßk� .G��#����n7��^\y�U������8���� �n�x5,Ѻ�N5<�L��媃;8t� ����k��ǁ}�X�+Y�HI�YM�@�8
)�HPL�aNt�ݐS�XOģz��#�~j g� l��l��V'i��A/�����Gi
���V�7�PQ�>B�2����>�<w��}�Y���'x�+O�̳'Y
�C�����Qv�LXҴp�IV�71Ƒ�� �<� W(��P��w�7䳗3�L��"<(q�~�����
Nֈ��B^[S�B4��UCJ/t
�*�p���	�kؿ��W��֛�ᖛ���58�'Mڋ��`��"��@)է�(��S 1D$I�Z#$d�9��S����N�Ч�����U ii4�'^U&Rb�h�X#��b�Ա"FC>���à ^�X��o<�ƣ_y��}���_�'���k�ӛ[D}��00F��Ģ�ƍ/���O2g�ug �2/��]���v������5�^�r;�c�+����c׆����b�U+��_( �"�*z�0��V׏�_9F�}���η�����N�p�-�v������@���P4y�RK
-q��u/
�ё<k�#f��d<�U��ʱ�N_2�v��6�N��T�'���'D7���mRc@pΧ.q8�h3[©ǉ��S�b1�I��<,.v�w`'�gaq����@U�QUk�ח�V)<���P�Q�*��s�si�r�XY��CmԔ8ueD /�fb�u��������
��}>��g��Zk��5����G�������inl�!���t��}b�N��1�8���A��&n�������]�;JG!�H���+����+��Ӹ�6�cĉ�hZ��0�;ө���SG��L� �e{�sn/-�oŝ�vr��J+��Y���S�#P?�9��1��#��j��b*l���z�{�k��Ϯ�<ɗ��u�ړ|㱧9��IDK:�;Yc��X"�P
�uia]1V8�pΝ�
Щ�4��u��R.x������w_�j��p��<��o�s���h���V�֩17o�
u(�S�O�U�������������n�a7;fK�'I^� ���p�xK�j�H��/�ߞ">�<��F�Gl<lH"Q"Qk�4?۔���t�=d�[��� lL����6�Lr�IK ������:�	!ҨL��%ۙ
�L2h�:Q�KA�4��{e�P�uعw'���bqq��S�V�����H���Y�($��E7��q�d��7J�R�.��`�o���?�y�c�M*�� Gr��������7Q�|�X�U�&7��7��ۮL�٩q~�6N�7T��)�TdDyb�i�3�V�V�a��8t�n���;x׷����r�ݴ��;f�%��(D��~�8�C4B��z�zT]ڸ1b��7�nq�FƷ�k&NRҭ�[�R��$p�|�@�T�U�j��f��f�5����6 ��Z��	��F�_�wɉ�fBu�T�/�p�m�f?��-��qry��0
�ӔJK�$D4�4˩�j$$Һѱ���s�5(���f  ��������u�q�����C^�����x�����5�A����k����F���_C%No�qj�f�{7Iz+qj�l�x5�N��^iq<��I��C�)KG�FC�z�Z`�\c϶��W���n��;n�+v0�%��(���t+�^��ԗ��ݺ�Ta�|Z3�f�'P�w��Ѳ2ql5�D���?���O�h����jF�O
�s�����Yq4�A� � ���-�lAH�@�:M�E�
jB3�(��NWŋ}x�����S/����_Zcey�zt{�T1�8�hc�8�(\RȬ�ˢL ��d�٣����6�5�Et��!_j	r�⻅
���������E(�2  &��,~���P���s��De�	 �z�-�ѧC��׈��j�
A*�9T,�Vbt��
��X�!�f;��u�k�)<�ٹ�
��q�=Wp�\w�5ر�ѯu]S�R�R�q<�w˪}9�������n�1._�}����TZ�\��IF`"=ۉ���@38M�l��	�A���_>�~�Q>�g�׿�8��ôǠ��X�:���>�YpOo�G����uPt;8lp� ��4?�����K)'�)4��r�)��!�~��'���/���K�	
�;����,��?��Zνˆ˹�j#�
[�m`�m�~9z�D%52�jA�( �^=��D�(5R0�Z���1
�9|�^��ƻy�[���;���ٱУ�ov�!�"ށo(���&��������3�-�"/񵲝�ؾ��8w��6�l&㔘�k�q�����WpD,T�u`aa��;��}q���kVN.��t�I0�9��Rv:h����HV�kbm8�F�J���6F#�e��K��6�M\gF�ww������>�y�����w�v�����!����R�H�5�{7�֜Zmmr�D4a��e�M�"�`J̈Ր��l�S��d�v�R�ݵ��7\��ﾍ;o��kΰkNp�@��
ڨ��6sc�b}E  [�3��Vz"��ڨCD��9Z#���5�(�<C�/G�_��7��/|�G��$�:������"Zv��J�O%��EA�@u���1����N�t�	�.O��x�c�b��z��V?�o�����G��p�2 M���>�w���gV�����rw��(l*_:�ƴb��Ѻ_CP)q(>����p���!�ZE�^t|�����o���x��x˽�r��ݎ�!
�IR�S��Wť��&���~��M������ q��@d4<�-�3�Q�5U��g5|uH@y�'���cϞ�����;�#VV�XY]J�D�-��@�(}� �I574Q�HJ��p
�C,G��>�J�j-�*�����׾����4�QS>vm�}�c�w��0�vI�5��l���eB2�7�К67i~�m@�#��QQ
U���
���l�ҭs������;x�ws��7qӡ�QJ�!1�J���(ԧ*i���O��
���"���l��b�0'��vnD*��	��)�OJay�s���gػo����8G]�Y_]%Ċh�����9�x�i�P�&��h֤����,�4Z�bi�lNt�(��-�{�3�����q��.Ip	 >
���a;�����CZ��?`c�,�7�
�yH�8�BP
G$�C��
�`	/딮��y���n�o���n����J	X�P:"�N(4
���~�#�? �}��^%ǿ�
�@�5O��D+���4��$�%qjf	Jw��:��X����l[܎�����҉`��H�X��~�6�Ќ�n����h���瑶mwS�C^7��H�#������������9�㑇/)���+����yG]��~J�ܵV-�HV�;����Mj'�M�Xe*rh72'J�/���T�����8�a��,7:�;��z]���̳��$J��P%9VR��,i�c���U�wЊ�D�r�zy��ٲ�tT`���XO2�R��M]�jF�*�T�EA!�ʄhB��cA���ع�F�\`n�����?��p)b�xסי�e5F"��4�MrbJeh�Y\iUZ�˫eʳ�4X����w�
�y1UW^:� ��clz7{���G���^��kP�]N�'�'6�&"�������	�,�!Œ���tJ��H���s���^Žw_�ݷ]ō����s齝����6* L�+I(m�~U0#�q�g=�䳜��Yˬۤ�L�(jB��8Tz��cR�R��2舡�1�C��~���`�|�O��_�	�V*����;��ce}�E�݈��P5}���#�Mk�i[<������A�r���˿�Ȼ9b��/�K'�(��~�g�-~�	�d��3�0BjW�nJ������5^
�u}H��q��z�k���+�s��yۛo���r+�]��^]gt%�%�-⢥J~-Y#�H����Υ�H껎��d"E1J�J&5����(nuG*		��������I�2�Ƥb��p)�8�o���27�C	ĺ���kD1�(���'���jb���9G��Y"�"��9�t�i^-��a-����u����|�R��D �Q�d��q���]fł��r��:�Qk��2��M�A��,
'Q�u1����@!�Rh}�0x��^�[���z3���7��;�{��0� 
1<gI�OL��`��H^H�>2�9��Q����0���l��Z޺�~c��0����8�i������b��25B5�L�ʎ�W��+�bq�G�Vx�ط���!��'�Q+�"e��9G��L��~Fb�N=sqr�]�'_	àe�����a�����K���  G>�<"�sӇ>.E��~lJc3�u& Ш�4����1T�j0@1g閎���`}'5��3�lx��s�;x�]7�7��ݷ⚃K�hz��()�w����{`\�|��i��2��|���ش֐��w�8gm�EY��
:� ��Qza~�Ƕ��f
v�X`yu���}��;���"�z=ʲ`um�~@Y�-�����X0
��� ��l� ��S\��?W}�W�fuq�]� ��Oy~��0���}D;?l���� NԌ��ڮ���VU���U��1�Sh�硐���Җ����������s��pծ�9)�u��B��[�K���Z���M�{g  Yw/��p��_W��R���j�6Q��5��Va��|u̕�s[��8x`����I�N�`e�E�݂��9�X[['�@Qx��
mT�φ���[-�g�	��R��c���_��s)�|0��.�o��?�n��?m�zh��/s�^~ ���H���
MI�[ T,���6�a���
q��������]���}����7_ŞO!�J��H!��f"`+&4�Ǘ�Q��ng�2 �v�}������'IX�&X�S�p.	j���0�-پ}���Л�����8y�y|�(˒�`�յufz3�ff���kbJX&D�2 8-�k����/�z�� L���w��f��d �R �� Ny`K��&]s����<�f����";��{׭������o���W�b�L��QN��B!B�:�+m��m��^`���&&`����m,�l�6�R��)��iH�JS��P�^<!�H��*���bɮݻY\܁J͉/�������z JUGP���2��K�L����-z�(���������� ���wO���	 ���f�����n��Y1,VM�:ZQ���j�}��y��廿�-���kس��b��E���U���Vdz�:�?kj ����(i��G��`=��l� �d�9dm"�iU����Ӥ�و���8Tј��\s�v�����Ǐ�H�_tXY0�vz9�M� _x� `�sS�{Oy��>6���r��\� ��C��o���Kg�R�6y�S��vʫ��L�u�E�cq�>���
�檽|���ʷ��^�i'��a�I��st\r��2b0\��8�i�Q"Q��*�D����l�Γ�s 6c��ٖ�6  ���L��j�+��%-�B5�TD�n�����]����k�V֨�������� �9� 6p9!D)��Mõ�_����]���� 43�g>��w�/~Eꁁ�i�?���]N� ��vt�4�?�*��E4��K�v�[o��w��-�����kf)1��Ñ @��BS�O�)�m��GP!���C�m��җ��ZM[��Ϊie����I�ٖ0Bh��%����6
��Έ*k�t`��v�;�+fX[��6����A3-0�y��\�����{d W%k-n+�����>��c=�E L����#Z�����B��� 4;��6f�[�ޖ]��/M�,M�T��h��Vё
�/!�K�Y��[����~���v�+���@��Pz
M }��CHՅ�	��
�� `R�'mMz�!%d{���I�쳩��-Wh�O'�[��I�2��x�Rb��T_*�������ھ���,gu��C$֨��TK`� �����v���M6t	\���l�!�Q|q��������5�3Og��uZ���a	������܏38�ɼ�L-W��]z @lB�t����w���ӟ�ر�5j���
G�pBa��}\�N!C�+�ؿ��w��-<���q���Y�UJ7�IM�����Y�Q�����o$֤!�͇F;pX���v�2 ����M����㛎R�v�u�a4B�sT�<��2��o���x����Sǖ2����:t�A;sh1C�f:�x�X8o3��qn�k�等���i���x����8�=��x����h������;����Tk'[n�>m%��q�t����0�	� %W��D���vQ"�������W^䦫����x#��u3w�x�=۔�Vt���
G��H���H&�O�b���?� ���v�FK����T큧|����������B��c�S�k�"�����.�p��	bm����"�L���4��n&TAǐ`.�	��a��@SH�Z�W���������&p�  ��
�W�9:���bq3u9�It*�^�|�
����ۄ��RӀ�XS�QH���K,�W���{�}?��m�q��yv/�ܾ
��H�!	�jɹ�'�  [�3��Q�nr�1��h�z�W
�l�>˞=��<��q��<Im�:O�#1FЈY�8q�` & �m�)��~�� �/���o�7|���~�鋥5���s����.?���L����s��o,�L�$(c��-���x4����2���|��[0���Јa����|;o�
\����S+R]G� 
N5�F�G2y�-�y�6 ��:�+��@�5��f��[oG;�P�R}�x�T}�f�0�G NL��S8�S{��r���	A�P�?͏���8N�ud��[�����s�t���P�\�߿|��Us�h����m*����"���
/5�T��*���gw�z�o�[���o�}�BC$�
ë��Pm$G�j�W��2�Ȗ�����N�t�ir��_�C�=;�wXX�A�FM��
EY0�F�L���_M�I�l���&ri���� ���յ�݋�X��\�� ����s��'Ed;1� ������*��A��~�$&BSd�J K�,�m�R�`���u�u|�����r������ph����h�CL����]N d�v���YLy�9T�B�c�WB鍅��v�bǎ�H,��k�Ki��8��q����NT�6#�"��/�5{& �b�PEq��7~OJ\�]v
�ʃ�w��?���u�*./�-��H����i�,6��k:ΰj���9�]�]�o}=���Jv�� Q�*�"�j��4��ꈩ�ř7�,̔-�+5U��V/ �q¢�v�f��0�qƭ�fٵ�z<��·X]z����B� !u�
��Z�z[zč}�aT	�Os�7����BN\�δ�������i��I�W�4�_&Z�.w ��h��A�� V!Q3<��a��;fy�w����7�u%3����C����ȑ��4'��HUO+ϛ�l��e8*�ᓨ��XPD��I	�h�K�"���l�������+�8|�[���m���1�8p�3 ���X��Y<X��Ï��?��S( h��.�R�W��~��m�i "㱽#  m'@��b�`��K5��X�X�[��ɧ�9���w����ȝ��g��DpV�e��@!!9i���_E�U(��e �-۩ׇ�@5�)W�q)�/�~W�ĶYlju���H5�=;��z/��9��	�x�"�Q��8�0�`��+� `b�2!�(ο�{��<<����ѣ�g.�Y& 8��÷���_ҙ��T�AT��ǌ�b'Q�)d��p��S
�ޒ�&�,@��;i"��wF���8Īu��w�x뽷����]����"tD�Q(�F%�%�㖠�D����x��;�3ݲe�v�5*i6���^�AṴ��c4
�薊W���c�"{dyYZ[eu�$�X\���X^Z�̘��I�c��	�9�Kܿ$ �
3����[��W�G�Ʌ�x������D���ݠ��0@$�o�ҍ `�n�KP����i[�L��@�  �5+:)��z

fJc�Bɻ�v���7q����[�#�@��B"BRԦp�vn���qf�&�f˖�\���t;)>�j���~P��Hc�Nضk;������4'^|�Xה���)�>��`��v�x/��d . �h�X��Y8\>�o?�}�s<ra^x `ϭʑ�D���/��^O�(��� `��OR��M��m��P!qHG#]�j�j�E:2��+ws�7��w���n=����)�wD<5N"��q��CpMk���� d�v^�����7����tD0�X��*N��pཱko������<��'X:y�n�Ƕm��!r��2�;����2n�C�KR�l @���7�C����_[�3ȅ46�� G���m���D��w�V�kg�g 0��C��t$ߙZ�[�@=\�X�:::$���{w�x�ݷ������o��|א�d�����o@��$z۩b
�P�
X�?2{�-�yvJ��=���2�̚�k�V���E���������!k�+�}�*0���:���dTx����� �X�R�-X�~��?ΑO��\@ ��#��
��ʏc��H3-;����l��'֌��]����*��wx�m7��[���:�|O�Ĉ��J!���:B4T
�����h4�'�e�v�wM�㴦�>��_���Y7���(uWa���a�E�g���y��gx����d��m� �2�M��KX��e2 "�ԃ`ڽ���Oտv�7/$��G���ʃ�����>���o�S^���4�F��fG������$Z/�oG��w����q�̗��(XM����!Â"����	�a��ճ]�ٲe{5��֡��@F�c�.b����N��]P��*Ր���������KLAm�����}-��ܮ�����O��-\02���=j�O�j���׉��+����T�d`�%�6L��J`�W�,Q��gw�r=���7��{�c�"�*�݂�
 -]h��W�z��~�y~x^�ٲ�7ǿ1��a"S�A$�uKR�mk�h�JVB�gv�����N����^<�������l����c ��@�`��A����v�g9r��\�#|8���t�T�ӛک������g�m;�s�
y��^�=�b۬������'
� b��v��f%[�!��<�l�.0��gd��?� �ќ��5� j��OIE� Aٳ�����"�kCa��Ee5JlS
��; �y���(�zD�O�O�"�|��������8�އ���?��\;j�Rf �7;傒F�1L4
�� J�a�p��r���x�����o:ā��UF�"�n*�%��D���ڮ��z��  [��oX��g�P�ќ����A+�mB���W]�fC
WR�냊~m��8gQ�cem�c�=K5�����kj���A:58��hmb۪7HNt2mr_�@:b��������?���B`^c �(������W�F�*mL��sQ�^4�ʈ����H7I�'�k�i�68�8%xĄ�FZIJ����� 1��m@!}�����+��{���ﺚ��@�(�׈JL���%������q��������e{
v�fw#�����t�$9`M����G{h�U��0�p/�� �,�ͳc�<�~�q�ז�uME��y�(IE�(�bx���!�ĩ� �gj $$�@&TĬ tRQ� �c�躯����-~�����k:,��ܾ��)�_y�P�"��p7�4t\3�/-�H�AӾ�*��66��Z�#�G�����t\��e��8��t����x�=�r�~�����8F�}�į��|���ӳ^ٲe{��m��5-��ZwU'�d��:���J���:
�s�J��a�6��7�{o��+�ӱe�Z����C��Q׀�����@�%M��0U��@q���`h��sK��ˑ8zT��F�]�/�0(Ni,s/2� �hj:��]س d��7��
�5�v#^@݆�a?"��J�bE�֑�g�J�X�9�������w#���2=�,R���cHQ���ĳe�L-DM,�Ŵ��@�%U�{a����ȷ�{��>�JL<�:I��.$��5�C"
�бh�8��2���i��	��} #��B�����z�_��^˶�׮�K������-2X
�J��	;��lL6s-a6��Ӣ�j�Sz���g���y��+�r�͇y��s�~�ԑS>߉�|Ϭܝ-[�K�Tc3eݨ͈��@R�,`�;n8����n�_����y����.��.R⩪>���pаc̀Ij_��|�����#����7v��>�Z��6@�����^�������H���d ƴ���	D�|tS`#�)  �z��u�8Xb�b�w��>�o��+�83
!�l�mAeJ��<�'[����,MŢ�h��?"����,3s;9���O}���>��eYRiN�z�	�i�De"� q��m�yY˙��+ %�
1������s�S��fm��
��="�������B��_���۰\����A�N�X$�!�E,T�-�q�2v����n�ͯ��;u(�ViYy׶��֖�ݟ-[ �`1p*�6
���0*��]����ҽ{a�?��W诟 t}���o
`�F�i/��v�
s����S��}C�O����/��,��g ڶ��=� �w�z=4I�Q`|�2 mѫL"Jv�Y[�'c�?1tO ��XM�G�֩V�3߅7�q#�}Ǜ��������P��Q(8M�o3l���e�v�yb�Qm
�%�:5����%p�-���y�����
�_|�z�� � D�H�T�
�(:���L&;�&���K 1"� ��,��u~�}���<��xi�[�(�Q���jbm
�  	�M" �E�^�	��.����ԔR��:R��m�s�M�x�����_w5{��C�B���v�7��hM�n� ٲ]��Z�#�Mt@�jS��pE?
�f`q�6�γ�����2u]�����Om�"�騡�hS��g�O���7h�" � i���������[�|N<�$�k���~���S��4f�#tk��>E�1r�� �дK(b1�����`�W������:�p�5�^H�43^�D�
�X�	u�����[Nd�v�#�$���M� �FAȈ��bM٤�JpѸz��{��-o����X=�R��.��Ir�!ƶ� �X�h�B�R3��r9�i����g Ƒ[�k4v>�o�����]�E��IfN6���Xn~��%�h6ꏍ
�/�D��wx���Q�5�,Ҁ�(�ÉA�NikTk/rp�6�����;�zW���
�N*��5I�>�A�M��$xf�v����Z��#M��
WBL�>��jU��Y���,�˫<��,�טt�(�U��cn~���%���W��i?M0����?�%���F+C�-\�=�#ϟOq��1��#�[s7R�K*C��A4�H�D̚�IûQ�"6Ԛ551iFw�L
Cb��Q�q�p���xӽ���n��M#}�IQ�n�|A�C��y�g�l�.[�	�o�H2��z
'D81z>�]�BW�����[y��ncaF��2�"R���5$Vx�ڟ���NZ�h�=6�'vY5'
�� �_�oq w޾�(����SE�#`���� ��.��Ռ�a��|����tz]f{%��j�
�B-�	td�|1��[S���v��'tU���럎om��vN)�-[��l�uI6�/���C�P' ���f��y��:�O�ReQ��>���2�=���B�U�o��I�� Z��˄h�kC��\���8?m�GLyP�}8E�������G�c4���/�jb=`�p8B5�^P�>W_�ț_w��y%{=Ħu�bݴ���Юq��Y�Y([�l#�6��7i*`j�0�T��J{gp�
<ul�o;�O?�+�(�Q4q�
���6�@� f�] ?�H1ס�� ?�#�v^�˗��#�{���A��972U�G��1�Q��4(Q�B=`��������^�gH����x�ݷr�׳o�@���CUC�$�͵"���f:�'e7�e�vٺ��#Jֶ�4�}�/��h�IdqN������C�v*�k�S���;f�u�a�U6�ps%rC(�jė��<t#��W���G����/}�݀���r"xb��U�Fc�
V�a��m��u�a����j�����f8�(iҏi�g;�G&ܽ% f�;�Ζ����v?��qT�7��3�M��b8*��ȵW��mo�����vv,ԃ��ZQ��z��w)�ӎ�&��]�a�kR�^�/u����.���r�Q޿�u��[�K��u(5`�U�'Y��p��������;���B����:�tD��nMC�F5���v�P��eˡH�{��<:ޗ�16�Ñk�B�yD�(�s�۷����^��x��0`��k|�N	�F4��v��(�����lq�����Y0��X�8o� �n$���
�Z�b�a<fb@1�Σ���q�
�^����z^�U�t��P��J��X[`#��7��:�IR�m�e˖��u�[T�
�Wr��&�!X����q��6w޶�7��:��r/T����U35N��q���r������W��|�#�#����g�_��裍�����" �j5��ӑ��q���]��Mo�mo���{�T}������b}0D�^� ���15y8Wd�v�%�:�?��]X��%�/�"!�8q0��+�z���^<�Bm
�d� �:��;i��Rg�L��ږt~��#`���1�ګ��z��SD�U��s�����tc���[j��jn��%� M	RW,tK$X_z����q�{n���;��3J�NYP:?Er�����D�55����a��=�bd�v���iϴ�3no���(��I���Ļ2����@�!E=����o���o��n'R�+�B�BD".Ik	��:R�5/�I�� �%����z��V�6�#����t�b?�j�Wt=���i�g������# �,���4A;Bx�,Δ��G�e��j7o��vn�v'�1�B��t�.X
��3=
'IN��I@4����*�l�2�0�Gq(���&�� �)��Hڋ�U��Eol��
������f�6O��C��s��G$���Bhd�/��T�����_���G��,؋  y��D����{������?
 �,ri$1��^(e��1b���k����n�+v�s^�)R�4zc����P�䔬U� ʖ-�YA�S�̘����R�R(l�w�x�����۹��}T��T�U���cHX FQt;]�+�aG��bf��,�xu|�� n9b=��x4���f��<`)����<�R���'���y�ͼុ���m��R��e	�lٲ]�~��*b��Sn�a7oy���rõt���'𱏏4�z���$�!!XM�^7�̻u� � ���go��{�j5�����o��h:u۪D,�/�-�k����o��v�8�2su�C�x���d˖�2p3!F���	7��m������ʠ�RQJ�#�D�:��ؼ�S�"X(�w��������W�(�?B}�����i���
s`���1PhĪu��e���=w��-7]ŶM9�H�#�u�P�]�l�.u����H�n�v/��u#�
X��5:2�W@�t��eWxԻ�r&��}���˧�:�;� �����~�Z|ժ�~�l)�o��o� �*G�؀�ǭ7\��ﺙ���Qxâ��H��F��ٲe����7@h'��C͈u�"���;�����*2\Fm�0��P�qޑ���?�A����ٹ!b��)wn��\ڑ�$9��-����&O����c�� ं�g�+�r�U�s�
\h3F!F�ԈW��m V�jɖ-�k����ь7�P
���nߢ箛p���s��N�\M�~�8X�0 �����2���q�����T�� &��_؅��
r�|x���X������q�Ukt\�-���b�!�)=M���>ĐH�l�.(G����cB�p�j���g�q��7q�7�}��#5�:��%�aS��eG�f��x���D�<t��� �ځ����.bϤ�����]T�����Ρb��
Ά��%�Zኽ۸�u�sp�,EL�m� 1$��)�L�d˖��6դP�,�Q8��j�thoxݭ\s�n:��-a6����)�4�0���  ����9?g��F�D����lv����1*�?���ֳ�ϯ�?�B�B�B�t,`V�)��Tk�ٹ��mo����w-�f�Ґ��E��8�(�.����e˖�5� i��l4�Dc�����l�
�_�=w��Ν�,�x���qb�'�@��T�w����0��t��0Їùj	<7 `R���^G���?��H�^հO�HP
�Q[g���p�-�q�uttt=�j��ܞ�RBٲe�v����c(�S��9�;�S��n��7\���:n��09~���:^=^58oDV"�������}n� ��(Z(by��f�s�w�>�� a�^��f/o~Ý�rÕx1
�R�i�k�52���Zʐٲe���v�DEգ��}�,�,7����B��+�p���8���w8M�Rf27a !��q����  ���������� �Z.�;5B�qD�
�x�ٽ}�[_�M��k�G[m Jh�4��Jpe3�;[�l�.�8��\JD3�f"CT$� �a~{������~z�3�eI��VS����M��0���X�w"byH_���RkՉ4|����j�]���j5/jİN��\}�nn��{w/�,"�F�p�T�7:U�L�ȅٲe�� @��cZ�V�$�����������q��ٶc'!V�kT�>1���m}���1�n9�Q�+ �~ p��<�w	�s�*\�fkT"�7b�F=\aq����]����m�#�%y�[3�'D�I0��f˖����_#&��y��ओ��pJ�A��S�0	�1�4�-��4@�w��_�����+��Yy�!b̾�6|�V�~�C�O�D��?Vaa�\��k��������9z.���f$f�Ʒ���l�.���R��������g'�;�&��7O�;�>���gyu��L��(�Nq�9�9 �^�?�?����?7�-��i� ��=�m$Ƈ
4�*Ҍ�BUc��*&�]���曹���u�#H�Y-ӏ�xD�i�-[�sKOϷ�����^��݋|'l��
�H#*4��J��&"k!�2<���|��|�Ͼ���ٿ������"�͢!�.��u����k�e�y���́zY��  ����P]������A"2Q�o���FB=*��X�f�^g��+�\��[n��=;
0#D�S���T����a�Ӝ�k�ߴj�/��m�!���z��1&�ll�*/��7��i?�5���j#�:�7�(�&��\�u��c���
��K�z�|�����R/�ɿm�5��zi�^$b��SP�)QAEX���!O=����?��O=w��~�9�C���<�j��@w��8��'��meJF���XY{'"���C.i�O p������隆�c�\��K�p�`M)�Hq��Fÿ]������1U��3��`Հj����6Cm���w�|
o{���|�NT
3�9G�.Κa��q�/�8a�9�:�M��ƍrb�=��B��&n����Ǧ�jo��#l6��N�Pml��)l�Ɖϡ���W`���K���y���T:s8������Ӑ
�`"M��L���h�Iw'#o5�#��^r�=Zat��G�M_Q��M���OӰV���Ѽ�����X���)��(�KꨬU� �SǠ6��̀�������_x�1N,�A{�/^�Lt�3��q��+��8�ɽ�gB��c�'_I1��w�<�`�o�&_��(9xE�Ր�[�l�Yt�*�u���RWX�qވ�U�Za��yn���_w;愎D��8����Ĳ��!�ϝ��k��Z�/��S=�NV�.T������h n�a©ڤ�v�2�L!�T�#!,��,P�/�ԧi�}k߯Q��
q�4�����9�4�Bڷ���2�Φ0�<�m�%[?��(�R�f��a�C�{u�@ޣ�l@�$��xE$���4��R�B���x���
������G��ן���u��X +W�1$��D0�\�tf���>�����^�g�ٕ�|�^& 0�A�|��[��ݗ���{�E��n!FP�����P��JY��e�^�֛��
������p&��S�
��gX� ���VN��9U��Z����8fS�km�|m w�B��Ub�&�H@�\;F$ƈ��G�*⤡���YT��h��L��ki]�?�z�(��k�Nm�
�M�}1*bA�M��)@��ѷI&�t�%�)���M^�ӘtnE��Jbqb�M�DF
��x0���8A��\d��<�\�'����Q>�Gʗ��8+�w��.��%D!�F<ht%�b���3��1ʹy��A�F��y �Z���ߥ���&��hb�n��I����{�{P�(�*�{%7]w�[n���sI��
m���yL�L��f������)X��.�^L��hXLQ�4���/�㇫�7M�&���M	�F�ڑK5S�bX��[����w��O7�
`�MVH������
S��hW��ݣ����{�^͐��}�Ā}�����)�O�L�G�L����f��L�Ja���d
�lX�"]3��PDS������?~������?�s���9�Za����,��hz�\텑rLyo;���`��GF�� ��<�������.��t��r�f�v̂�CD��ͦ[��T!2��QĚ+������q`g�QC��B��w*�R�
��emv����v懍6��߷8SqЏ�ZIR����SAlL׊i#�Ҽ\ludD��K 4`��+Ȅ6�R�<����y�6�cr讐i��E,@e`P0�h��� h��h����E��Yt�*��P�+�Tŏ6z�Z([��6q<�
���/��N'���)�3b�$0��L
qPGeiN�x�kO��|�?���/��A�7�����vY�">��LT6���:�gq	8꾡�]�魇�
�j��^R��K Gr<,���ގ�]Oݏg_}�F�2����t%Z�]U-�!R���bX]S����`��������og�xRΫT�2��H0D\����{jnh��߼_O�9�2�m�["��
����6�|�%Qt�����TM���[��v����%�i�/Q�ȉLc��~!Z���m7�x��g��M�LL3�>L�Q��-��)'7}�'���¹��N$I�����"6�:70����h��O� B�UM������k������7���<��I��C���n�}���SEcP��I�),MDVj9����/|�dX� �3��2 G������f 6�,Y�h��V(�QG�f)1P։� /��}۹���8�{'3^( _(%�R'�?�) ;m�������_>��lt��(ؑ�o��h*��q4,&%H���54|[V�^���Y0PՑa#�a��h�4�����P8�y��*��+ˑ�{��(�>e�����mf"�	Ȝ�P���m��)�-0�q�}�����q���H��a+.f ��H6\��r0F�����k5_�y�!_~�)�����/~��<��'h��
���Q�R�b��RA<���umX���f\����_�C���#��<�@�R_�%������6O]�����
��kh��fs�p�8����,s��p���~�!육��ϐ��*�xߤ�"���v�����e����c~vݏ{�
M��&Ķx?Z�	7�*Q���\�PU����׬��Y[PU��K�,��2�,�������j��������8��̀�RzG����%*�8���}{qN��ٙ�3s,�w�����:�' �(S]��b�=齚�T��2�@H��M�D�?��l���T|�� N�@m���I�
�}
���#ԢD\��,U��7����:�|�1{��z�y^8���-��2BMm�Rb�A*�h���$���l�L��
T#�s���{@��j�4 p�a�aux;���j-&�wl�ͅ��6bmS�6�: f8U:�RH h`�tس����k.�8��s������3��	n6�2-v�n��s�FVMte1�����Z�;6�Q#"6՗B�
j�o�0��@�?�ċ'x��y��c<��1��++�,���>��U���!��gh[���BL3�cj��^(���W�p���L�ö�9v����]�ٻg�s,l�r��t:B�S2�st�h��t�o=�8�o�^�Ķ�l��&`�n��\��eI_ee���2�����@�[�Q����0��3+���=�g��?㯿�8�C���Fo�~�jehc-���M8���]�9�F�8*T��|{���"�����s�_ҁ{�@C�[8��{�|�Y�*����z�q[����vZ�iQ��,�z ����:�r;�x�xgH=d8Xf��r��Wq��W�}��w�'1�T([:�lh`�W�[\���쌻��.ޔ�1�1OEl�m������f�X	��R#T�QՂ/����s�VV�g�-�ܳ�x��2_z��>�J�?���9~b���U��Ú*F�/W���t��)S��RׁXU�/3�F�j�N�V���*�w���$��s�t��lw����C��g��9v�����o�N�-zf:-#��K��u���f�G"���C���TS=������@��"��3�n^`�sg����lES���e�-1��$��-2M/�Sj�Q8�:��o|�G��4�ů�/��^X�v=��Y*+Y]Ĳ��.f���Hқ�H/Dkcsk�1	0��Tu���l�� ��r���KM� 0A�W�{R���B�7��1�'����Q�&P�@����,��mn��������%
�~��e�)�-Z�_m(���(�ɸ�̚M+mz1��Od�%jE�qle�AU�*��� �jN��<��
ǎ���^䉧�ᩧ����%�YYc��Tud02i�͠ݒ�9T=&>�bͦj"iR	����r���H����5f�*j3�XFtu'���W���g��"{��⊃����}\u�n��^da����|w,6S�PŀJ�䮝C�D�Q[$�5�P�t�
����?�r�/��6�
��<[0�,i>�����Qx𢜬��?������?��x�O|�Ͼ�n���v|1G�2�~
�A�;-F%������x]�TC*�Bfjo���%D�aq��/'
p� `��/z�.�+�,U$�ꗢQΔ�Ek}|a�Ze�+\qp'�_����B����)����ש[��6�l���S�����4ׄi�3�
��H���O�*��xs�ʔA-���o>ϳϭ�̱e{�[|��c{�'��YY�ZU���%�"2E���yp�Q[���DIL��ލ�P$8�����
[-��-`R7�F���V��"��YZ�������3���صs;��f��vl������m��>ˎy�K*���p�T�����a551��C6H۴锦���ɓTC�[��uIl����E����j��༰����7��O��(_���ȣ�duQg(z;07C-�$裞�ס�6�+�1�z۠�1nuͻ��M��է�/�e%��z鲩�8ԁ�D�	�l��m]:�5W.0ׅ�o3c����I�r���e�>g^(����J�AF�t���&��M�$�
��'P�ԧ_�R�x��!�=q���?��_��㬮W?��z����h��t�!fDI
l��8b[OЌ�V�- j3ɠ)�3#��N ���v �� ��`V�>��Ի�)�@�u{H����A�,�_9�7�z��^i�|�\}�>��z����=��X��W&=�ڌ�0���K�t!)
�:"*�o[#l��n���rX!ө
����j
0-��&���h����j0f�)?|�ڋ|���/�"_}�)��Xc}�0���9
ߣ�S�J�SG�i1�m@b#m�q���<���k�8K p9��2�S	�����N�֩�>e�>�k8�8�/7\w�m�=��>*�B�����cмeYo8#S��\GV�q�
�W��"c�_k�S�o�(�<���|y��X㩧O��G�ˏ>�O<�cO>����J-z�����>�YJI��5L��TVeM�������i���j#����'�K<IR��5��ͨkф?�Tw +J�jh Ð�T������G�����\}p/7]w57�x-���˞��v�QČ�`H\�zĻt���Xᰭ4��w�r�,7��i�;JK9��T$A����C *,,(+<���ȓ��_|��z�+<}�8+�@p%eo-f1-	(�:0�!��e��fC�
ٲ3muj�l@�����ՑC����fup7��m�� @K�W��ˍ�?&�P^%��h�n�[e}}��=���q�=���:�O��hjč����扊޼0^+(mn6U�1��E�P��Mw���a,װ:�{q��{�/~�|����cO��Ґ�V��N��!�#���L�H�^S��,qEA��g�
��4~��ɫ�`ڒ���7i٨�7�$��v�����q9���s�u�
��������)�����,?�s/<�7�/�����׹����|��\u�N���c�++�k��-�T�X��l�'FǶ�G���
J� @LF�Q6�]��C+�@-B���|t�O�����?�3���	A��<�)�8����$kF��T�$u��E�V8RM�j:V�p�r��
�pp��M� h_L»P������2��kH3,_8o�։a��];����ٓ\G�������%�A�If�̭H�YYKWeuߞ����27�y������c?�Ȍ���YZ����kUfe�ƝA�;@�k ���9f��`v܏��A8*t0�=���1S�OU����|�G�.ӷL)ʛ�[�zd� ى7�K�?k (/\l!m��CdD�Q��=�"9ژ�6'��n����y�=N��.~t������r�_������1Ĉ����Ÿ�k1Μ��f�9#��YD�FəZ�
�����;E��\�euc�3+itPPL�2.X$���5P{e\�	��2}7 ԛ�z��K\��.���;�^�����}���x�Grh(Y[W���I3!N���p�g�S��B��FԄ�h�6I��e�^U�I-\�:�^x��O~��7���� z��bH�I����Q�u�|e����{���fl�)�]輜��]�����'�B��PᗹVwW�_�$�����������v,�Q�*�Z�BPS��KC���/��ӏ�4,q��Ѩ�l[�i���PL��{^��	:��+���M�c�b�ރuI<��#n���ѥu����y��U>8}�s�/QCoa��2��ղ1ISj��t�T�Wg��R�`�4X���@�Y��7
~:7�,c"�D�;��:�
Ĺ�j�,ЌX��Y�a����,�~o�����)��8(z������5Ξ������Y�{�$_{��y�|�Or����h&E�� ��љY	�Ah�I�&�h�5�~qI}#���O���+���y��_��j��+���+�̀I��kC�[���	
md"�I��=V�ze�^L[�&�rɬK`/q����,a��,����u�8	k�g� 
�����H�u�D$�_��Us��*\i���(�G�1Vk�\�O?��f`������l�[J[U��:��P���o�k����b|1$��Y�����kqJQ��6k��J��o��ͷ����/��[�9��>�R1��}"��R�
��#�Ȱ{:1}���F}���,��h�XI�?�y���PN��r�I�7�汘�S�B#ʣ;���;�����|�R��gJ[�1cJ��1V��
�RC�+�!~2a�{�����S�O���9�ͯ��~���8G�*k�Hi��0�Ŋ����g�$�o%&���]����mi�U�ڞ3�`i=C�ed19�I�֕O]����׿y���^#����W�n��
Ɩ�\"+��W�8-ꘐK0�ԟ�i�e��}�u��];�Ű�x������O���@����'���qUo��Luϥ��R��S��]#DD|>\��bP5LSX�1~D��T���G��מ��r�j�0JϚ�n�NǱd���|f�]��v:8�6JI�(RK�F+[b.�BT�>T����P�=ʢD&A�=���_��s�*'�?�[��[��ܕuF,�Y}kS��P���JtѺٽ�W݊̉����j�a��d^4G�t|��Q��v�����d�?��zh����%q H&�^�ܩ��ԪY��R�P:���8�Mn�s�3����U��G����*O<:�׳�}�a�ZbP&�:���D�j�����3�F������{G��}>��o8����&#)y�(���sd�{^,���#Ѧ^��P#T؆ҟ	�p��'N|�+�������Ue�#��h-!���4FM�R��<�j����*%w6���w�\�Jn���N�OP�����'����#��O"G~nY�������r$��P\.��!`5�M��8��Gs��~�lTKI� �n;.���A��á�ϱu �=g���с�o�rK��8�@�I-Ԫ��(\���x�"�~�
^;�>���1���� >�\�oe�.�(h-�,��_Z~��y�������z �[�ڃ{܇�~O�,!xʹG�H�y�����A���'�~������X1�q�ƈ�'�p��S�V��w���O��C%��͐k�-�&R�
�Y��������m��]At���b�
�.��I=Fq��F�z��b�G��ǐ2����K�TF�N�����x�ć�<�!�O_ec�3\8J1\f�+�pf��:��Ј�0k m��y�I�vK��6Ϭ��b�ڤ9s������?��;`�w ��3�����R>��4a��B��dt�vM�n��_$�	�U>|��9�����
�"A��xHw����ݰ��m�a�*z[ɧ�屙�F�	FeYR)|U�׈��
�;����������q��5�r�L�\b�%��ʶ��5Dv���������^�)v"��_��A��ːS���%R��O�;��¥��9s�|����O��#��
�,����J�7Hw1���Io>[��t�Yڄ�M�h��	cf�����M��-��E���BP�՛5o�w��_���_|�><���,R��j�kb�KhD���^�3>�����4�T�sbK�����	�� ��/-��S���pH�9���G�,��H��tɥ�}
��~����駾́e�7k�����f��p����i�u�����gOϕg�U�
�`����Z��W����o�^�3��n�D�7�b�!�n��V6	Z�1(����p�����.����͛׹~����7��7gߡ��BB�8#� '�t|�L����������`p�	��!o%�i^ߘfdӡb��Bb���D`��q
J�zư�y��
/�_>�ً78wa���@Q.��������]����$�I����S�� �I3��WSV�0���W_��f�hr��$�k��_\����K�`� ���X��t�g���
���a��yӦ�F�ay�Xg�#�*��"�*��1/������3�8�&�X2\�G9\$�jr��5q�scj{(��SמQ��]����9}���?��}�����4���<Mc���d�G݂V�.����AT�V�� C���3
�I�cI�#�x���1��V���3��/�ʉ��xm
qH����c�h�AwCR'���9������ߖ���� � ����*����>Qiw�b5bMD��B<��cGr`!�,��4��	��ŽCn��bX��C�3[Yʲ�JA�0�T1�����+��7/�?��ۧ΁R.>���2��b2�\���E�-��b{=��h��Jk,>q�Hŕ�5Vn���+���]��?�_��!�,8����,�3���5#�喘����1~jL�M-���J"�$�$��J�
� V�|���;gx��w8��{�|�C��O,�pK�r�H�x�ԓ���Emw�w+V�_f�ܓ 's��, �[5�L"��0������~M�,M7� ������Ø�a��=�ч�s	@t�f����>�(@f�#YC�ZY󞆵i��H��N1%���W߾���K��o���1�~L��C�2������#����D ��d�s�����L��������X@�����*�t���Q5�&��kOayI�E�j(0�������i+,�G̧w/�-1fN$���rgS*����S���E���'߫©3����I^x�uN��+7G[2X:�-�)������Ȣ��������E�bPR��
p�����W�a ��_���?ǖ�8�T��>��ʜru:�T�$M�q�9rh�x��<r��td����0��pbg��]K�|7E_irZ<����VA���.�+���8����e^|�mίL(��2X:ȸR֫�nxze���~o��T[���;���)K\1@\
1�h��:`�2��!V'\�>�~�
Wo�����}��X��3ʲI#v��6D6�-B\;��&Y�w�@���Z�K�	��ߔ�'I2��0��z4\�x������|�C.\���z ����# =V7G@��{�+)ze*#lnR�!3�uv_E� ���̑+c
�y��_$5�m�o�Lc�7qm
X�>��/�!H�Gr�� ΁q�
zϐ��0��/�ؓ�Ѳ�0���ę>Q%���	�����_��7���
��-?��-�,H��T�㚁B�,>��tg�-/�� ��hR�&g(�9u�ڱ��60�"�OX�p�k+/r����ڟ����9�sxJS��4c�:�R7���5�n�����)G����ň%�I���}6օ����K���7y��[���T�R�3�?����/�)�%A��UMUy����w��E���'�(?�_��!�������]w�/$���|�'���x��5%���$w_OZ�����!RI���X��=y��<zt?=p1eSU�i�og���v�υ$A&����`��X1�O�qP*�S����?�����p���Tn�၇����8��aK�!�E�I	!5wE1�Gw��h��`�!�R���\RQ,b�h-U��,�q�>���y��)����_���k
�3X"�g�ic>
��|�c�?g��ܘ�ū��~�q��)%)>$ql�X�b�T]b
aR%V�߿�鳗������{��#�ǖ�-���j�>�L�#�I��4!�RE�]�_�*B���p����v�9 h^\�}l�~t���"�)I�'��d�m�$Ʀ�#z�V��H
a��R����8�<� q�;����ə�:����4��'#YW�H�J�IZ�pMd<1����/w�_����t���!ÃTf�h��`\��A�+L"��#I�V���=��Դg���}y�_L�Ӌ�}�EĖHY3�><w����W�Z)~�����z5M���G�s{s ���y��f�? ���J���D�%���1#�VG��s�<y��_?��w����U�b�)�-&��O2�j
�&?rۣ�+)�M��璮��D"�t���n7u�����/�.��|~)��FŊ�,��ƈњ�(�<|�ǎf�7�5{����aw���GS�A-Ei�.�T�����\:?�~����˜|�<f��¾#�����:���L�ľ�0�錞/�zwM���5�X��؍b1���'�!'у%k�ʅ�k����a��MK�U�'+PO�\?l��i�ܽ��e��&�!�K��c|���D��؏1�!�Xp�Ƙ�?���7��������g����/�����jP
T
�ة0�%����ft9}`C'7z�l"D�ߚ�h�w ������?B�,M�΀CqFQ	H��ʗ��O}��J����#��<�G����n=���K�u�꘺����&\�\���y����ݏ.qc3��/��2
���8��B��nj�
WzC2��� -/L��D&'��rQ0&5h*X�ǉ������\��ڵkll�T�|����藺�R[�!F0���zC��dk 0���H�$���*U&!���(zpcy��5�x�}�:y�w�����]a4
��}��2�Pd���HQ�g�3��Y�!�}� d> y��~z����N} n�Ё�I�_��P�����^�ԛV��jf��5Z�X\.y�Gx��2��K�i������t��^�n�j�;	cj���95J4©s���?������3+�9p�0�VVG�8z�!�J|�U�5�>hĨ>��Y���j� �g�3��4s) 0��Ę4
+V	�S����_b�-���g�P:%�a�Y�X�ߓ{5�HC�{�(@; �f��@@R/p�dm!��*����r�ڈ'����o�����|m��H��n8`a�CLb���I(�!���0���o��ӈ��W;I��b���~x��E�� ��K� y�P=����M��~�#���W���O L8|�0_:�0����XLShh�U�'�ܽ��Թ�URYiJ0M�\�Ξ��Ko��~�{�x�,uy���Ce�jc�d<��^9�J�����3��4�A�Ev:�#���E
E4�7��:�FK�<�8�E�P؂6���*��X�w�~�?V�Ň�6�1H#�ܨ�1k
��\!7�ms�9�(��>���
�pB��.l���+���[�v�>��Wnl�zK��({��oul��@�iC�t��ϴ��)-�Q�Li�#]u�>̀��W�xi:ڿg 0}Q�gCCU=�����_L�G���*B�h��	<~�(�>�5�%N4����ͬ�jwK�����֪}Ns���� U���XW�y~������9w�f�+��^��
�`���EʶB�Ĉ��a�:LKj��;Cf���4���rbÑLe�(�4��iK�:�-�'���7���3�_��#��.KT�%����נ���(��
A�Nl�����pc>8}�^y�W���[����5F�bˇ.���TU V��T�����L/Y�Wj�̐2�H����쨌����2��/��q'>�펽yQ�(��. ��@�Ę| J��@���ʗ���#��Vd���Fŭ�d���ũ���o�Ye��&9�:¥��7>�ŗ^像.����!n�7�'�z�>�AU��*4F�F=3P5泵[�;
�dn
ӵLA@���}�ǐ�~��s�pa,�B�Q�E6�k�|�4Þpp_���_�ȲŐ��(��6��,k>��TE���D}XcY+��ƛo���[��;q��
㉡78Ba��D[RyK�h�Jb��9�h(�3Z�	�C�FjyZX�.����ܷ�IR ?؍`{ ��F���K֛��ʃ콦ud��{��0��I�0���}<��C��V����hF�;��!��� ݂ ��|��EW7�W߸�o��*��]bQ��SII�_�}��ѨB5����ڲn+�3�kF������b:�C�5t֠Q	�c�ú�eOU��"����{��^��;�ٿ4�_X~�ܗ8�l!���o�)�Wkx6Uݒ�O�&u`&z_��
.2�p�Z͉��y�����{\�|�͉��=���[DM�:�:q�u�1�� ?&
�3��,9�՘K':�x��RuO5���3�Z�a�1������ ���U�H�_��+��IB�_|�O����e�1$�?����ȡ
�"�ǠDI"$�0	���ݽp�)GlDX=��Yc�%F�����o^�?��������$2X�O�%!�A��3�`������_vqfɳ�E���q��ۗ)s�լˠ��ت&?	�
A ��Wl��s���U~�қ�XS��}�K,���	�,�\"���c� &�B�r���O���cm��!+�eN	1ܜ�[�����o��K��ᩋ\�1���\�?<@UmP��Ө�A$����R�"��8����Ll�&2U��4���=�I��A��bУ���/b�gq� ��_�¥y[��u@�~>�����-g߁el����%��6���]�Y��=�8G�/��@<��q��-�q:�:�DI�A�l5Q+�<�c@�aRYN���?��-��]�^a��P7 W&$!|]M3��(�IWTm�
v�B�݂����n���1;�<(���4��P�M_��>�/V�&����}�C�u�̕�'Nq��C<�ȳO���;4F�ֈ(vZWϟ��m��Ab�B��U��0%ZEa}3�:�x����wy��7�p�
�\�X<�a�1�xM��js����W��U����I������*6c ��R ��������| � �~c�f���p�M�}1A��#�*�����C�طXR Q��!3{u@�g��4�ӛXRK��kzX�c�ά���׎���Y>x+l�o`)��\��=p�i��٧��V�o�K 3ǩ�*1+�P[�
��-�_8�F/��=',.�9_>�é�QyJk�ے��z
q�hʧ:(Q�U(]A��f�"�%F���7���7�;�?���x�\��tg��'�F��D����is��3į*�Gw�N[���$@7RC��ىh> h�T��?�
�i�(�X�{Ѐ�B��ȡ�y��GY\��&�-���u���s v�M�B��&�4WozN�w���x��N�!�,����
��*�u+���vD������O�<��+n8d�Z��{�	Ո/}�a�{�C�T5�L�|�k�^��bH{ۈE�ÈPZ�VX�D�	�@�"\�T>8u�W^��^}�����g3���GQ8ꪦ�MB0�ksIC[�Z3�m�(�����[m5"_�{f����v#��&������.(>x$�xQt2�$r��>y�a�"Av���B���>-KE�ז&A�9�#�)�ű6V^�#^x�M�_���R���lnnP�'�!��'1e��}awP�W��q5� �-QۧR��W�����Cy��X({��T�L�D!j��ġo����D*NFب��WƼq�C^x�'�|���/ps���|���X���H�L���Fa
�7���)���wv��r&:���^i���;�>�%�;J���3?�ׯ(��G�g�Pp��>��y��J#Mv�
F�-�����kE�1Ri@�
ֽ�ޅ�����y����ld�@p��͍}������HfEP_c�p��#jM�#b�2�w�z���o�ǡ�Y^^�'��,�}�E(�";a���f�Q�Ƶ�z���5��o�������w?��ū�mN�d�ra?�>>X���1HaS��d2A�M�S����*k�1�tv;�=G��^i��7�i�0���7 ��Tb:W�0�N9���:��b�4'��L#��N�-0�a6�LQ&*IYN�s+#^|�}^8�\\�
R�_<W�8)�D_��ξP���!*�~[�4�k&��:z�1Ԝ�v����_:��?G�l�*����Q���2��1�M/�M��Ν���g���'8��;\_� ���z��
��D�q�9�D|��\����r7qb�l��Q���>�fh�j�������, h �|�k ��m���Â��z�G���Ç� ѐDJ�,:ϛ�+|6A/r-U�8�q4�lx^?y�_�p�/ݤ���(����A�n�'���uwU�XAb��E"%�8j�:&-�F��Zr��u^|�$�9���y�C������5A
��&�lV���#n�՜�r�����_8u�"�����]¸E&2 F��r� UU':`������C�bh�	�S�i�n���x#�F@��8 �
�|�k lgP�5�^Aa��O�
��X^�ঝf�����DV�(o)��hbgw-�%��R.R�Z�3W��/�r�뫁�����
I�ՇDcw���*e�����
D*D�)04g��k�
^>�6��|��[,�jO� �2�K���B
�Vj�8y��o��;����>`�
�\@��R(�D���K�@��l��Ň !b����F���bِ$lӴ謳���V#�e@ׄ�@}��j �O�v+_M�:���rp��
)��S5�iܐ�C$��F��{��c���u���������[���ZC�D�B�Dc�1��&L��� ka}� c�X&�"�@4.7���%B"����p��5^=�.�}�k;�+�JQk�΁�������s+�q�^y�$����WoR`}&�Pǒh
"%�Kr�NM1�B�
\�K!ݯbm&��S�C܉����n��6��&<
��4� ��2���C�=D�w �y�?jf��&[��ȯn�sչ8Ed���] �A�ڍkhXc���/�����Ez|�1"�%6�aH�;pF�O�>�����8[`�*��������œ�q���C�[bcQ�9�J4�&���y�p_���OȄ@�d��L��q�׊������Xs��U��^�ȑ��虇�٬�(aT���c�:y�?��
��Wnl�b�0o�kC4=��D-�yܴ��c��e"a\�4��Φ����
����h'�E��NvD���^nH�R ��g�_ ��ĖC�(vi�,xR�8�f�
5�A��>�2mBk+Iu�dG��^t������s�������=���lɨ���yΜ���%ޔh��K�Y0]�t�k�)�]���_C�i����CJ0JU!&��囼{��=��������Ȼ�����o����>s����P"���#��@Iĥ/I�Ӎ��J@U���	QiIE�s�4�˖;o!Rg��΁���P�g��W����Py��� 0��)���Aٷ<�С%��#N�������v{��\0�������*���1���WƼv�]N��
�ǘ>u4I�y��0�I��`�[�/��72e��V0 yV�(X�p"�X�������
��}���'�s�����8o����}��g/��_܇�/2���D�e� h�B�@�ʌ�X3�x;�����W3]4���P��n?di`�`��붠��ι-N!P�U��r��>��O�B�&8#�ӆ�m�M)����J[�zMQ*5DWP�p�Z���?��wϲ�VQ�)]��V`�FM� �L�.���S_;�z+��׊ňb�, �������>��s������W�\1	J4�K��є��P&�#E���#S.�0������~�]��ց�[N��:���@x��������#M 0� �#b�& �" 1b����p����b��Wh��vn3w����WE��E��`�0�k'���?���kk��b�xo0�S�yD[R>��)�hF��0����t>���B���)-�lLƼ~���6/����\���1��(�C��S�,�S Cԭh��n�֧�����v�;>n=`:��7�+<vd��M����
	<�Q �9U,=�^ɑ�2��2��y��>HA B@��X��^9�6���6�ɀ��>��RM<Zl!�&�X2ep�HL����~�r�s�Vc^ՙK7@��Zn�u�9su��h�jRq����>$��Z�QC�u����_�A`���Jl1�6��鴞9x�����v �Wlo��(5�-b��(���>4� �,m/M��*�P�0�s��E��Y���SGQ>P��qyw�i���GaL�"�x��U�?�WW֨=����)�*6�Z��D�@l�r_Ƚ�F�b�Kkӄ�F$�s%=�GԠRP�Q�3�>��]8�T��B�88��a�l�@�$��B�{%b�/VB@�����=m�Ү'����!"�Xy�_��1��� �O`�ab����f�����/����<�+R�Q�v���"�M�o����.ޘp�݋����n��
L����S8�DM]�
Fs	@s׌��t[�J�uN�
6�u
�s�v���/���h��1�}�O�<�*%Q��g{@+PT���F,!���)�}6T��^����dd� j:������$@�o �~L�O4�Փ)��/���Zx����GE��DK�����Ņ�1�WE��x��n5���T���N�Pw����̋�ԧ5�횉^j���z�<kc��x�@����R`�,K�L���6f-��y�z���4�ۂ֕�%�&U���
��+�։2X� ⰮD��!RW���b�"���g]:-��c�]hw��� ����>�~A#�|����X?� _I#�����7�{�ȷ	�͌�EL�oݖj�2í�@�ͣ�ϟ5�H+P������+H�������e�D�Z)�>6׈ՄVƸ'�ٞ�[���(����ֈ@�5�`�!���P�Q����wo�ڛ��zu������PG�����X<B3����!�	��u4ϟ�t�4T�mןf=sxO*�[�1b�EU���@�
�9�C�5���?E�4���wk@���$?�P��F������Q��v���Yٕ]�_�V p�u<y ���샨 ��mA�Y�#LаI���a�~)F!����4��$��)��d׵�%��S���h���ΓfaA���[���D�¥���묎jF�`(��L?h:��i��Bf�yM�?�;H��ώP��V2M�� B�6��g�|2_��m'�	h��x�w�^gw-�J� �������vT9��h;[Ue0��8�p"�1c@�]q�����OCңU�1I�������裏��=�$��Y(�i�#kz7�x�;'�Յ��^��>��5��~���/~�����t7��i�b�������8ǔ�GHN�9����k�9�ζ���
�l)�l]3��*Y�	DV7���Ϝb<����Y�5�1Ik���n��e+�j�^�u��}��4D\9`"_���e:͍:�s<)�߷�ľ}�se8E�D@��s{ �݅u��ߥo�}%����%q�Ht��\_����z�`�΁��	�:����y�u���(�ss  L䫸r����;m�`�@a-���8�oi��7b�"����鵞�^L��7�Pl"[50����+\�x���c]��E
R�����V�-�Yg��
�����<
,"�u������ط����3�6����^pBgw���ժ��5Q��k���4W�� �a�b�G�t\R;����㍑v�Yg�}�Y
 "f��-�#;�բ�1��,�&@�8�<��vp"�}l���
D� T�j�����O�e��:�(�E��P���3a�֘�m�U��}g�uv���&D�m ���=e�4.@�ק�3b�o��41���u��k�U����͠��+B�3
U���\�r�qUc�0����C�#�"I�!��Y!@�E묳���$J@�8m ��"����L�ș��EMٷi��[���o�m�,3s,:%	��p�Y^r`�2E�B�
�JI�����<�ވ��.w�Qމ�]n�,֣��	�X��LjC4����N��������)�T5���25jb��C�������Y��hb����Lع��r����/�=���wٝ��(U�;Xn�y��+Kz�#9C�m	���s�X:<஬��*�b0�$��<	 �oL8{�*k�cD
"!J�KT�
%�,�ۦ����h�
t�Yg��!k������@��^��;L�b���"�^a1
�h��Mf�S��r��y2�j��nEm����s��J�[Y����U �*#$q���,�"&�h~՝¿.n묳��7$  �����|�H��Cߴh����a���A3y��5;LPl��.�'�d�
1��!h�c�\�r����a���Y�Ur���Kj��۪���5m̡��:���
�q����!��0	�|�1���D`aa��� �yj�Y�u��%�ww��$�55��|�kϕ�7�������E/��'���H+������w�Yg��1� �@��0�]S��b������X�)\ZXdy)� J�N����j���<�����J˂X�76W����9FL1��&�W�	>�  ���w�Yg�ݗɔ�ƀ|S$�� � �62�d1���m�Ć�!�ak� Ր㇘��;Z�O�L+��!F0F(�P)\�:���&Uj�S������Q��Q#A���o��'ݚv�Yg��ӓ�)��?5D-�������A�(�~ɰ_N1���ȝw����$��6Z��5"b�L`��
kk���C;T�4�v-��u��h��H����)�<��!�*=W�+bf̿���L5l�����.���^?������R{��&U`u}ĸ`��k0k��̖�)ꀨL_���W`s�����K&oR>�U�J��qo�~3}.N�ᖋ�CMZ�װ]����۾�]h���X;,?@h�_�)�_�Yo�pE���hh�}gJ٠q&KDl�������c����q2SL�cR����7��t���K�=_�׮���	C)�/I����q��
|t���l��_�󅙷�H�NJ��I��/n{��O�"�^o�׸5�AR�6�3sNLh�I���[N�Y���n]k�^q��&�n1��l�R�v1YT����� �NO���N0 �С�� w�ݑ�E�ց���V�����<��q��E!X�L	�z`�7]C2#;n��������#2�]���P���f������\Q{�@�����T3���>$ޥ����5�����6�"ӝ"�p�͐�,���,�p�Ul%{��8c~��DP��\�0��kN�'kB��q'B��yΰ3�E�G�]\���_%f��0��k3���c56X�\@�n���u�+9D��I�^���EB�v8�;kƋ���yn'%�_�%5���ppO�ᮒ����f����ڣZR�/fww�c�ܗW��@+�2��Ae��s�� o�H���n���4 ��!��N� ��sa����0ʖM��<7�����u�C@�
�G���n}NZ'P��[��g�-�!���w��w��{���Mt*���
3����N��<K�4#Qf���{l�rgUg��Q���(
��v�{��HFo�+p���66��Ծƺ!eQ�!Fv�d:���ƠMf��71?�S.��LSθ�qwz �i}�����[<�m8���=�%r�=^s��[����͖ǝ��Gt����=|�'����Y[�+���V�SB Y�F��l����o���z@�ڶ�Y�MV���,�$A�3�_g�N��h� gV`a<�TU����[8�J��.h��
�a�4��/i�[J���8��^��i5`5E�T�3Ӳ����ө����B��#�x��g0�NP��B�w
����=��������9��l���.����ȇs���t����5I�7�C���"�1@��((�bZ�.\�� sG�cD$զC�ɸ���@����J�n�n��|��\-VsR��7u+��s�i9@��>i�����L�y
Lfu~�� ͍�폑���s�����������w}n��l��w�a� Bwĺvw����[�_������O��o�$Tj&��4㟇�%��0$h�y��,ss��?��K���^��@F �C �5�~�sUI�QE	�c�C�eR����xB���B]bt���[�۳�1M5.$O�Ė^���5OH!L�I1ud�}U�
]L�k,m.�SgB��S����3r��q���[\��}�^��A@����z;��U���5w�~�ߟw5�����T�6���-�-����`w��uWho��*�Z���6����ݥ��V������Ǔ���IU�&5c���X�n�
L�2u�!�aU[A����:59�60���\�U"��f \��k?jv�۞c��J��{��iq@�����˧r_��-�l��;1fX���q��g������l�6���#�S�/1�b�e �%6V�����-��kp٨1Xc�M�]�t�� v8P@k��B]��N
b0&�kB��o��*63,Z#JRVi�U"�5N�Pu��-Ť�H���H.�&%�s����i�����^��wH.��Kt���i��N\[c�s������p��閉�[�_T�J@�|?�ߦ��$�=���0��?B�R�����6�8v���l��i�Og��w1�(3���j{djމuv�|z91���V�U%ͥ7��7��\]ø2�)t�� p���F�'�X���(_����+��7�{S
�fa���rb�ۆfD������YYb'�%�O��f��8IQE%�Ra�����Ǐ���A����<���w��߆@�e�:��<0���I��S���z�h�1��۹�� �&��Eb��áaA�m�[�J0����3-�k��v���dd��w��N���\`�%�NO��x��&X�$��J� v+�E@�C�px�S$֘j���R��K�O��qv%-��t��DDM&ؚ��R&!�"�&vx���玎w+��'�� �ͭ�{ �%tC`���'n�4#�2E]
�HT�K�� �O�<D��>"6��N��b<���إ�`ѝ��}�2��n뭸��t8�YC�����0��?ô���ֻ^eU,�!PZ���#|��z��իL6o�o����R�6RF%��/5ѳ����zE�b �M��{�i<Kt���B���i�l�-$����������"����',%�bZ�M�?=������zΠ�&�}����=����lq�z?"iM�@L�"Қ��;�ۚ�`!�xI"��]�bQH����������V1.`��8B$��v�G	 vE��>_���F��;�lR�o,H���	po�F(z�p��~~��g���G(e���8(�B5�H�i�Wjʶ7#�" SG��{�;��,�v6����o�mN
r�h&ҵ�#���e�(@���@s#�m���T���o���
�U� X�O�pɥ�|���l����@�Y��ٸ�Le�-U�A���y������_��������[t��%���w��Zq@��`"<!B��#]�3G��v31�z����M�n�0�����g��	���3�XvV��ib��b�8H���ܭ�M�&o0;�-�*����o��]�;x���\#��.�Zj��m������	4T�
��$����;�! 謳/TP� `�h�CP��T>fq �����ݬI���a�r��5^|�E,�3<��>����^�)�b�W����w�F�s�#��F����}��d�2*�Tj��6�H�&(��Q����F��Ai�Fb U��w@g_HےVn���b�����4k���pG#cb0Ej����׷ԓ5���=���Ed�}�����E�����5[�A1+3�=����l�[�d�|�ND�[eu����Fݭ%����Kvo�t��nED|����I�yG�f��܏��=v��әh̄T�$~	� �	�?C�8���i��nȭ :�:�[��]L
�qI u�
�.�- |P66&
�G�Iř3����˅g�����%��%`E���u����b�D享$���#;d�v¶���R8��D�L�����:y�\fG*���ֹ��b��s�s߉\Χ!�3��ab.8�]��[=g0;n�;��f(�,�K�#:խb�`

��}W�0X����A�`̌��0 �y��]��/͍���!��Q�n.�Ñ:%S�1u�[k#c��9�H���IA��C�����'ʒ���ڸ��7�&N�(���g��ؑ>DK b2�i��S����fd/2�h�F�c��\(ε	nϒ�ȜS�ɑ������mw�[���n�'Rd��<ζu�{�
�lg���;��.�-�j�C�~��I�b�ie��	�n繨q�������MS`��4 1�͞kR3��+���
�+pֱY��������: ��Ec>9�]�ʼ���ܧ!9Q�	��_�0&g	FI��-jU2*�n ��q�=îԕfL:Bc�����!��!+�7����O�aeǾӿf:�M~����M�J�qL"D	D��IUs�ʈ���Ǧ�����?cP
�a`FkP�h����'�!l��f�*f.=�Ą��kv����Lؐ��όt�� �ܼ�F8s�f���u.Č(����ER8a�����锽 .i}�]�r������Br����s�H�TZО'lּ	�P�D��'�|$F�u���K�Kľ�@C�#;*P�ݳC<����Ɠ)�eR֢1�Q5�Sf5��c�>�Wb�A��9�N������:�'�T+k�V%�V8|`?���Uʲ�6���Uln�E���`�娝��_f���^@�Ϥ3O(]���/���ĩKlė�-�O�_�O�!Ě�Dz�"bZ��[�Lbn���u*:$�|�7Ϛ'o��L��F��M���߲���=6{r��D��(ɀ�]� i��;��{����o�A�]R$�-��+��� 9o��% Jb�$Ni�s���p9�������!���K�
��Ɲ���A�ο}'�����B���2v[��;�ߦ����Z�ø�3Ag�,��s����0�(Ps���>�C��;���g�%
�Z�!F	ѳ9��^�
p��:��?����O9t���80%j|';�8�Z�+j��[��VX�m<�kr�q\ܭ��#��=��_�`��ٞ�]Y���f��&lʬ�S���7 �$�B��3�T���d)���[~R�@��n����U�t;Å�����D4S���(���3Ě� �K9;U��
�-
���\:w��a���1��*��8+�ZbM)���i�vǢ{�@�cnꬳ. �����\U�TU�:����Dn_wiw1F�xc�c�/-��U���[c��E����(5�S�\0����IUa���x�#z��U��_����3��1��
/�L��ճ��Zg�u� ���hڐ����!�s�ͩ��e-�ښ�n�^��2�q�'5.��z�9�5}p�(%jD4+��A�AT��$Y�7�}��;���%^y��M�~���W9z�G�HK@�.�c�Z���-��t�m�uv��nNroO��TUMJ�ٔ��Z�����:��e��j��z�eqq�^�!����qw�˕�2�ꓪ_>$OO(Y��bc��K���dRQy�O~�
�W�$z�Ywj�3�H#��#)�nY�n�:��� �a�N����$�!P�@�Yſ9�,���{ȶ����5�}���%�V'iD�і�����=`��jr�2�����%b��1���,���ݼ�K'�Gz%�_��g�±ł�H4�Dp$Lg��^��Ք���d����]  �:��]|;�m���O j�Dծ�t�_3+��n�;�>�ۏs�y�/j��t}��Ґ~�P��1O�o%��l�%Q��d�T�^���f�}�Ƹ�H�bp��j��_=ɨT��/��$�E깈A��F����c~?[ѭt3�uv�-r�����  �rݥM���`1*u��8kL7�0圕��s��k�U�η;��;���VАh�J',.X���5*a^�>�}j�D��	{�a�(����*�I�s���A+k�x�,z�����z�JAƂUp*8��)qO�;����Ygwn�����1�4Ae���n+ �\�v)�ek
�fF�!mҎm����j����=a��Ӡ�ې�Ȕ�H[�_̮�����!�m�w"�1�k`ii���K�h��.���nHn�	$��y��=e4���4�Lw5n�q5>���"��a2�@�|���>�虫	)%�ش��8eǜ�ٞ�\&���s����:ʜoІ#,;���!�H���,�1̈�:�5����_��x<f4��1�K���O9 vzf<���������r��2�~�1M濅ҷ���[S8�9��]1EM��A�#�a`��>�Xۄ7k������5��y��:&�`�x%�D����F+��-���u�q��Y���! �UMnu�iT677����B	Fl:�d���M�߫�5L�/���C��}�Ņ��1��^�󀯗i���/�h��L��b�DB`ΔD	��&壵�~t�j<����G9� N��bß]qm8�[���os��݅����e4��9�$��������4 N�� �� H��U�#b!
�X;���-p��M�xL!x�JE����`�� V "5U���y��@�A�+&�_;�q}����������=�p��LZ�,�3/�խRg�}ڇ�����7���8ƕgs<�֞_�����lI}��.�d�1O]�4�cL�>���K�zb��YPZ?S�@`�޴[�y˥���k�(k�첨SR�H�ߧ�4`ur����8�+~��;�C�>2��2	�h�Q���;&��:�ԏ׈+
a�z� ܆c�T��jv`��i��
p�&�EX�.��fv[3^�:���&$�:a��E:�u�C&���]��O/�&�_g ���gw��T18c��@,6�:���7�B�����o?��҂Db�i鿣���V�떧��>e�.w�t��?�4s�9��9�N��W�[��2�T����;�P;�M���i��9�ϯٿ\r��Q���\��E����{)���A�I(��܎�(PIA�A0֦��!VN�q�����p��u^z�5��ṧb�g�D��2�V�\�5}�-�Yg��񚈿;`�|�Ne�}`cs��hD�S >��E������w�ŬE�&pYLN,?|��!"���\ݎӆ@�j	�� x��d����3�06b$Q+� p�a��P���>Q|t�b����=�����_x���X�`,*&흆KkZЎ8���������o��TԻ����ﵹ��6Yf��O%"�Ea\Ul��ԡ5�G*�,fm 3���I�������|�/�+��L��L�e�����>,9we�*T8JT���o��J��9�g=�v�}����o΅�2��ϤW�!0c������1��S��ud� �鋗�^8�`�@o��3Oc��X
8	Xɳ�
?@&#��8p���z�n�u��N^P��a�>Wg��t�^���:�t���0��ek&��,(�4����"�b1�Ye�(���'�5n����Ya�KԤ��+K���z�X�'�dFZ4��]��v����G�n��1=H��L^b�o�?���t�?�ƥ����ej�X7���T���1�Y���NO��I4�w�5=~��t�U۴<6���b�=�x�A뼑�>b^=��G4������?��z�����<��������)d6�("��6O&H; �����JtA@g��n�#j�=�}hfہۖ�ok�̥:!�
GP���*7n�1y������!�(���gNGB�q�R�([�,=i@��)j�L*�`�R���fih�xyk��:�G|���1�/T�!�]X�SD�8��]m��U�C�=/i@�c�(+M�����UV7�<|�:�<}�~i>bTY,,�����ج�5�ܺFwX��:�l��Y�ț��&�vm_{௓!(�Wnp��
���3bJ�v�����?�EI�F�k��Ӕ��O�I�}W��1�a�u�3��`@T��x�1[��3�[���a���|"(�E9 `��p��&x�5��5N����$
!�M�^�4�@3� [��ԃ�̜]��Yg����C�E���M�5�v�j�5u�����&�P%���O%1��)��Ywq��$)���@��

)x��c��7���g�\]�Ш�P�\>%j�Cܴk��
L����d�@�:(E�pe#�˄��\��W)E(�x����2���}kp�C�k;�	)b�	�="��:�l���\u,>$���]�].���RU�����L	
>x����Rf������]w�FC�5;oE�M��Fj��X�<��7x���\=���r	��+|]"F�P#
3M%93�K�T��1�-@U"Ę�-i�1�ʏx�Ë���8+z?��ǖR�f�"�窄V��d=
Z���s�� ��:�l�M���
�70ej�l�K%WRGe}4Ɋ�Y(*m�I�a$�;�>~ ��ĘF�̸���:"�D���Q�ң8�'�V8!TT��
\�f�S���$��C���吘�R�k
>��
����(2+�Xf�K�;u�_��E��?�ĉ�3��w ��d
��i3���gw2	���=�n�u��Ύ�B��@_wi��]��1ק�G\_Ygc���	�f3~���u$ߙ�����f�|aQ ���e�������7.��T��+	j[} 2Ӕ+�h�Ѕ;����)�+q��؂��=*[�-�����*�O/�0��<��!�KyI*Ǆi��j�ス�&a�~��Ug��A `����������t�`�������\��͊���ԤƥT�O��Ml�٧�*���AkJq�9����e�|�7WW٬*�
�QkHcc"h3:N3":���;@k$uO�H �ź4j� bM+�b��"��
>�p�߽tu�J��7�| g,Q#��e�B#�
����2
��:��w�"V�}:r��� �l*ݖ���%5���'�����\�09�CK�Z54��ݱ�	���M�5hX�(��������Bi��C�<��G8s��.�cEa
A�0���\_n&�f�e���"�aP���$�SW�g{�%A�h��J-J�ק�gR���S�h���b�;,>2�4�:�\�	l+��\ih����@g�u6��XP��;2�<G?'g��}Mw�4$A�_�|�'<�66' �k�o�\
��#���ȃ�C�\�Ƕ���RZkSY8*EQP�B@cL4�����C��ܓ|鑃��`�q՚��I5�!����4�a҈�dT���w�*i�/�ği-�9��#L��R��1�@
}n�{�=u�߾���W/r��5��J�8��D�%6G)��0��Ը�����=(MY�ޝݾ�|�_ zv(\w�`��H5%�1׮�`4�K=�'��I�f�m`V���+lL���Ҝ�@(T8����C|���y��S��N�pN��| #���Thr��LK�! w��f=Q���Ac
po�QQ
�)�V1a��W|t~�[<zh���8����k�
��@�5Nkmw�;���MU��f�e4%��l΢@a��c��Y��ƥ��Y]�\(����`%�&�pm�����;���R�1���_��i�S�5y�@ɳ�x�'����i�VX	��F��� /�K%��i0K�X7�y{��iT1�1c��`�T�:x"��.�m���~�q��g2��@^`�6��?|�'��@!��
XĚ�i+�F��:��6̘�P�$�:�-�^;�s��IcMƔ�mlp��5F�	b
|�X���t�r�>������ݞ���1�v�jV�M|~B������O�[��*g/������'6�>�Q�f:1�Hb�Sʹ�]�v�K�L{C[y�4f)*��XUbT&U�[�H�aRo����ko���k6�P�s<�X��*�1��O�{|k�5{�C:�l�8=֠�Y �T����:;!&�8��ư���x2��Ť��mƲ���[�`�����D� ���{x��>?��7x���\{��'��c�2�3զo�jA3 �c�{��Q���L��W46���{i"U�Q)K�,qR"�`c2���Y�����'����.2y0���b�L�<#�가�:�U���ӟ[��߬��MlG�C��+�1��8��h���&1�3�Y���O;��B/4~4�gC
\�T�
�_=³�|�}K����$����S�H�Q
Syg��q�i���Q��D�$���G<Ak�Z�X�R�c��%��XF�eVǖw>��?��8�}�C�^
����T3qDB�-�+�u��.��b�!L֡>��i������	�)0X��������WX��{�ɼ�y�tc{�	���7�<���y���K6�W��G)���q\ͣt+z������v
�~AH���0��pEAQ�@U�Z�B�$�DY`�=���2���Wy��S\�(l��Q,�f���H#��Yg���k�?P8>X1@ }��U��ݬ-�Z +�+79{�,�n|���b'�3��>f��|
�;��q��	�At��jS:�G"��+O��?�.W7*^=�!�d�sI��(Y�)d&�<�
�G�ű�`bj{�)E�l_ MA �#��X�M�<�o&�
_�sCJ�g}�Λo�3����ؑN�+�5iӵ/u���l�9K]����5~�s�X�Z���|�~Z��\3�$��'\�|��7'�Ë��43 &�%��l�V��j��60�	�ԛ#L!���P�cG-�ïp��
�\�ĥH�R/����Ѡ
V����޶��W:X�!O2��Ϛ S �"��9��F,X��`��(
��xp+.\���o��z��x�_��s;\4Z�x�$���� ]3ng��-`@��r�o�q�JC�v"��|��D�(WC�3-�j�����.E���9$R�KLP&J�k7k�]\��G��T-E��b�D
f���[�T��Vԭ�:��s�<קX	H�X�x���o��N}��ͷ��Ʌ`L�1%�!�T>d���"��M���ȘW��_�	
D����Y�6��i��3)HU4���`A$4`
��j&Մ���V6���;��-��`�?���Z6��,�'��"�#�(b-P䯦����Q���Q^�/?���
�ڠK��Ǆ� �& ����G?m���z|�<�}t7&��!cz���	׮O��7i��N�m�K;���y��������#.�9�Kl�,X��c��w�Σ�pZ�4,��j� %�
[��j;�/��B�h�A-Erń$�T̜�UM|��L�����OM�����+)�!���֎�ά�O/���_��
��u��Jw�DB�F�6���lT� ��nwv�D�F�r
�ů��gyw,���*�8��]1����k�h�� Z��1b��*뛑:X�S쎰c��&ك̫
c(�����A���|p�4+7_G%2�5C�JAt��7�K�uvf�}��!�N^$��>��Ύ�ۭUVD�P�u�� ���~�7y��7�
4|�?��c,�TQ	����I���e���n����u��?��#�� ��I�o���m��3�c�j��Q�9��Xb�DUe��������t��c�E�?���i�!u�,�ΐ{��A���o0X��`��@�������ŵ�7x�ݏX_٤�t����n�l�6����^z�e����?@�}����$t'�<�!IYp\��t�*��
�#��𻏳<4�^�**��-��un6x
cJ����K1��5l�> ��iLD@o"��g����ۈ��n`�ύ���ZD,�\�t�k+�ĸ� ;�:[�
�Ł�Kzc�۸���P�GS�X&���G�~����r��%�\���)���&U�F�j����]���6S��vt��_5��S�g��_�����ؼ��'N�/����<�����c���+qb�
����OYv��q_)�	~r���MTM��_64v'ۙNg��o�!���1M5�ȵ�+\�|���(��6�=-&U?�棝�s,@r��L���7�{��Aǟ|�˜��[�U���M�V.aܐ��u0�zι��m�nw�҅�b�#����O�O���t�-�k�<��	�B�+��3���
�
g0%4�%{��nq:�YE��~��w�� ���r�:U�93� `�Dj�F���X���XY��������@A5��Ew�| �445V����I�<zh��?"�?����x����,�;����B%��鶘 A��F���� {�sJ FE��-pE
�F��hPb��jVn���o1�e�o��A������d*�5�4�7�C�� P��
 ~�K�@3	 |@�ƈ��+�r"��
�G]�)�����n���ً\�2�c��x��( ������ S<&��:���ma��{����������ˬm��(l�>Bٚ�O���Cç�,��b�ob������n����
DQuHc�RI��>��t}��_9�%^~�7�>�B?c��k��Dss��g�=H��&����N@3	`n��^�&�SM��ƺ>�9&q�8Gi�ll����\[�P�4fUR� -���0ґ��3'�/w�!��1e��Z�8�.�%|盇�x�����7?<���&B��CT'���z[�.���r�!v`Э17k�&��I���q �+��"ZˠW�Gk|p����eeu����?���>���Hi�i�5��D�����A:���60E�]�I�
^x��n�8)��������0u��%��"7V78}�*+��[N�t>*�Z�H�+D�����@3����g3@��Dz.0��:ݑe˟��)�Մ�ɘ�����DUcCY�����ړX�m�Q��R���KA�����o��D�L1�,lA���"���+���/Ry�p�',|}9��� !D0�����Ug�}�vS� �I�9� �Ǽ~�K��~�W1.�`��*E�$�H]׈uTu�R0�Ս�Ϝ��1^��J����cR�����.{��v���`�"�
�c��f�ǎ���s_珿�G<��a�F'�8��Y�4�|5"�36��7^K5��PN9����m���I�`L�B,Q���J�I�l�Up��Y\:��Xy�������;+�n�:d� ��L�Kc+�Н����}�Yg��bM��޿��Ӭ[ik��R�x��&��1���c$
��Ƶ�Yy�^����+�C�CUk�Ʉ&� �t�g�n��ՠ �#�v�1����V�A1Q�ʣ��?�?������>��e��k��ӷ�z����u�dDY��gg�C���]�1]*y���v�"�UP�S�b�j�Q�=Du�����\���?��W��ǅ�+l�'hF�*b'B����^?���ݜ}tv��1�����<�v����E?�I�W@����.^*�(�-
0�0�ċ�ܥ+�>{��<��%(BO�J�<�-?��=zgSz�g�Th0�晀�P����Ee����7��r�I�g���8���_�x&��È��ߩ�H���Էb��>�[��c�Xg��P?J�����F\���ˋ���}�)��/1,݌�W���p�f�S��ϩ�o?߱�w�gH�����������zS<�5暡ƔQ3�9W1�b��X�9w�
�o�Z*r�'�8�Dj��pܻr�[�_���3N�uD�a�P���A�_�)�����������l�6����enlL�~sSx����omF�"B��*�Ѻ�<�y]�r-L�9T�"�e�H�c|L���^���>.\�����0�ʲ��c��4�S�cl�y��^�I�d��M��Ց���N��T�:�92�:��+�l���F��zb
շ�.�w���(B�I�4D=io��G�]����7ٜ�K)����p<�P��{t����٘W��D�DK4��b�P���(/��᳏�7�c~�����GJ�\�O6px��PX�h���51�"���Bݬ��W��iH�b$x�	�W����!��K�ol��ɷy��w9���DD��4�2��G>���� �r@gۜWC�}� �
�� dr��y��bܟw����1�6�
���12�B,�*r��e><s���8����`,3��vS��>��?w��փ�kP���L�p֬ �7�S������1eI�5�|p���
z����0�H�5*��4���2����4'+�=Z�
k�>PM�\Z[��p��O=�CG����HoP"A�"N"ư��_�I泌��ls���� ����k:D��σ[a��+
����y)��ҕ-�u�J dm��+�:�\�r�?��+�x������K�����N3���R����(�4sǌ�5@�,sHj41�18@�S���
���"�o%M��g.�C�E� ��bf`����:�-k֬g.�� �X�1���^	≡�0�|�����;;�̓_>�B߶��H�`�������~�5�oz�@g�7S�8���R��%��������U�+X''�� 8�(�%�
���(pE����\�x�յ	�#X.R��H�c��-�������^.��!�4��V8�z���+Z,��*.l��[5�Udſ�5!�8�p��c��>��|���a߁%~��W8����X]�X8�B�����ӥ�-����͟�I����	�-�$��#����U*cv3���=1u*Sn�-�sn�.�Hv�Dm���;�Zoh�p#iO*ʠ�O������c�>�w��&��_��|�ËB��I���g����%z��@�� I�E1S��&���z�t�s��Z�#y�:����ߢ�S67A�f��y�ȶ�VZ{���9���/t����3��[
����p��;��Ö_"֟�@�uI�W��I��nArm��
801bĹuC�\��{�.󍧎��#�,k4*bm:�?O�K~�?���<�:�k�؍qfv(�8��tΙ�9|#˳����FQbL�*�Ԥ'Ba-Ę-c��XL;��]"��(9�PB��a��JI�"Z�`���k���X�D{b��o�%�ͷOs}m&���JP;e�OS��JfL�Dl{��i~���Ԩ�$�B$ �B��ؤ;����ZX�)�|��f:y��ΊI�*�HT���5-
5�֤ՙ_7�ٚ� �`���\c���1���d�16!Q�I��ꨐi���?�H@�g<A� R����G����~�?�����K��J��:�ঊ��
�d
1(�(�P��V���j0&�G0"�|��sEZCMm�u��å�HB�Ho��,�� %�+��@�1��gI�)�Ϭ�5�����4(�9���5ۋ��J ��% �{��f.�߹�&��o��}�P���%m��M����O��
I؈`5@��U�I@4PO<�X��2�np����ɏ���tѬ��x�R��6�p{r�n��SH��ǀ� �:�:��W&�;�P���V�tĮ d��� ����aXa�C��OX�2%�1b��E���rWg׌zK���P#�	NS��V���lI�K)g���,�c�Xܷ����ŗ����UL����1���弢8��XL���h�n�I�%gz�'&w�+k�`	�-p80�kb�S�fK�)2`�1�>�W�"b Ĭ��JTS����
�q�a��l,4B�
��j|�Xg��e'��;m�L��d͔���qksg��
��G&�uzE�G��g�����4_��Q�Xeм�
C�r��I-���#��1�b� T��>��om��|���fՀ��A���?��W(�ݮ���p�K����w7����oaG6�pP01$��{b��1N{_B�
O�_�_ﯘB�
t��\��s �T%��c���kl�e�P)��)իA1��`��+k��*�9��>x���|to�n�<
c�0�I��#j�Z	!ð&e��
�L�U�
;n8����쿭9���^��60mR�(��ۂ�kS@���
ߥ��	���8&� F0�pmu��*R,8�(�� �D�1�*lze0,x��ǉ�{�7����U�Z� ���s,�3v���'ƀ��q8�nв���P ʹF�
CB�AB���AD��	"%�p�&���X�#F	�grG�J���UMၙ%��{1$���bcB�H�h�P1X�#M���9�Q�\Fc2d.9Hȱ���,�:��.p��"_���<�ܳ<��}�? �RV|dp]�m^���k����Dٜ����L̉I��B	U0ط(��/�J�Qe�B"+�X��D�8&6����F��P*�Q�:���D.�D��j��
-�{=k3W�rj稸�\��}�$�
K����[��}�; hfE~I��O�40�0��j�o3lh��p�r�:�}p�o}��#u.)�|������/����*����G�y��{�oLpe�:*�ģQqEgbR��
�i��1��*s��Ո��PO0�M)�L�������=�,
qb���ł� �)ul��M1C�(^�H�����Q8}����.g.\�S]��+Q��:a0X D�d�X��gee�իk�oV���P����)�ǀ0J��x�E,`�d�?]��}er��bMHG�TG/z=�:BD�3�M��4�)nCF��Z}��B��<�	S$E�A��n��'��VYLR��_kS��D
S�NK�a��'yB�a�)ϕ� �L��ο�z��+R��:���͊�N_`}cQ���ML�XpiF�ϙ)8g�!��i.��
 TFD�)�V�	�C@�Ł現����\���>��ɷ�s����&�Pj�"8 b	R�K�b4`b
���璡���:�WC�<�D$�1�
����|��'9vh�^i�����R5��F�������q��#�,�˟8��Jw
 �A_C'W1�0��6i9IХ6�K��"8[������N����o^"Jr"Vc����H��j�P,����_�Y��������˩38p�("�j�	A(\�u����z���*�E)�� �?�p[����5���Wٷ|�?��7X,�
�gH�1>�&��c�~Q��5z#��.�������_���N_`T��8lQ�0R1\\L�����~Dz��Vl���M���T�5���h&g�6g�1*��)��� ��{U���"1��Q�Ƙ��jR�>�� L�w�J�)K45b19`�A���Q��|���@fT�0�FX� lcCB�4�'��h0ā֘�Zr�!���E1�&Q�N��L*א>g�u6l��x�仼��	|����cz�1p}�lZx�4���,��bF�:n0�����0,�+%���G�-0	?�cqp���\��2��˗9wq�_D���1Vq�*K�� ���`4"�ƨ�撐��c��RE��]��M�_��;|��޷�����o�k���2ׁ��{ߧyk" ��\r�g 0�X�o~~��s��`+N�t�Yr�������Ƅ��.�ѹ�<���.a��+1F\a>G�Gj��O;�	�����1'�=�٫��2d�%��	>�$��/�q�Ծ�5ݭ�{ ���|ec�a��倠JЈQ�����kcC-C&"� s�`�Č��
���g[��_�.}k������	o�������@���q�r�X���q������_���Zc��`���Tu̵��E.[���T�<N��"�E��`3;]�
�5&7�����Oe��R�Q�I��iִ�^�d���M>��D�Ę��!��:���M:���Q�I
���	�i���6+��Ї֞��+���!S5K^$_LseX}�@+6�6�\�A]oba8PGa�Y��G+ �Y(C����8��T��Ũ%�*�1Jpbyq��ּrve��7X��P� %=ոJj���Y  `cn՚��t���j���Z���t�2n��4,���~cR�D�.�����ƫ���\r�w 0��`^����ie�fְ!������7���9.\��G˄��"r�yڐ�����
(��(���	Wnn`�Kط��Cb��V@ d�:`�f�[���z�Fm�,��>��=�9��XRZWLB��N
V��M�4Wb�d�m�s Mf+��>�w�r��56���}Q.�g\	�*P�t,/������f�mz&��уT��$�#ک�h��j���� M�����E���-٬1HBPbL�&�*�NS�m���b�"��[,V,ʹx%�٦I�@�1>V�l@kk,��XC���H<�����$.�.�,D������~��4"����11�_r�����P��i��d4�i� ]s�"���#h�4���~�9&���5嫫����`F@�Ә
�6�b:�b�!����c�V@�$-ZqHb� EM1H�� g�g0 �g�my_u�����-��d�e�U��nFd�nu嗙�<���f��x_�mE�ͤE�J�F�q

�qЗ^n'%��:J���T֍ �>*UFe,Z6I)�9������ KYX�w9��jJ�2�vI��2��fC��$k%�~�Ƌ�Ex�[n�
@�]�W�1L��,�7(3��Ԧ��|�I��!ZB�u~۔Ո�v����G��O�����
�O6 ��`�>���?�@��r�3��B�> u;xM'l*�[���w����h�ts����njξ�y���?���x�b�1�uH$bRb���u�8����}p�� 
�{vs��v::m�f9_ JA��٠(�ņ� ���'x�~��g:�XD
�(���7���_��b̺t�y\i0N!��K���ʠ�� �'):���7�ju����N�i�Z6G�!*H��
O��wg��5^$:���6��E
�EFQ����­� M,y��Yj
UY��"�0��2N�1�B9���*�P)RJ�sl�%UQ�e�Ty (n�=V�vw&�j=G�ZT$�G*�sgJ��F�C8ֲ.Jf+KMN�:N�5 ��Ӻ�*lU�7��T��»
�Xa�D�����[�/�;W5.�+�Rf��d�@�44�+Z�����^o@������1��S�
T�Y�I��S`��@�jې�+"�C8�wa$�$�N�T���zC.���S�GݼE�g�
H����<�𡺣G�Oy�r�Tb6�w�e��7t���
@
$�w1b�T���g��{�O��wy���*���+
kx��}��?aen��*K+S�Q�����h��8��Ҧ��x�a<���T�yN�%t�=F��V�Ô%ޕȬBe��s��[�ߛ���?n _	��'#��.�^{�
V�$��6G �l*�s�w��G��D��U��-v���x�����޽��8�Np��L���
n�xpT�Kr�B�8��J����Gx:4@��F�,;���6(��I����g��0�\^-���$I��Q�	��Ca�Q���kK�0���~��h�b�m"��+42	)�U��E��V�J�e�d���z��x�b]`<�4�k��6P���J g��9������9<萦S�q�Dx�I���nPA���s�y��:�7 b��QI�t�B e(��VT��j�OE�.�^�5T�h�߻�����A*Mί-��*�:�
�p8d8���{��|�9*�`���j��3�HRAU�q��K��r��͙�T��h�)�2� gQZƋ��KV�5�/-Yޢ������J�j�����?*������ ��G��?��� ��w��P�ߦZ�y A�%���]ƻPX��[   IDATkR�e-\i9����7��7O>G���:t)ih%P�u?,�����3�L��x�I��J��0_XNO/�L�H�QJ�j�s�>�o����؍>Zݱw%*��Q��?j+�?��t?��M���P-^}������y?�����b�5A�'�ߦ/�<���Bc��˝B�����Rq�tΫ�����U,E����7�Ϳ�U����h7�fN���!eYb�CkM��(��Ŕ���G�����:�8�Sxͬp����'�qu5E+�郺�JC�N��\A#ӘrM/�|��O���=˭m2
�(IQ�Z��AV��pT�Q
@��K�[�L�W�2����TS���CL����(Q0�5��k����s<�X�fC`YE�㾹O�|�~������\j�?*��~!Z�� "�����Q)�vW��ػr�s.����*����$a�P|�_���يʖ�͆b��1��vh�

�J���%�ٌ4�pUI*%�=�$����*�n6h�A��	dG+��;�3*{k=��x�)�������������)6�
iC2���{�z�FY�ҁ�����=��#��Ӿ����&������ ����H���x ���d>�3���'���픋���쿋��ʔ��Q���l�˯��K�����CzyBQx��qzq.��H�
��/���F@�U�5*gH�/`Z	�/6��>妠��l�5K[pt����gy�V8y��m��O������3`=7+u����،i�>R:�*���
�j���܄w�ma��Ǘ 4��$�0-�g����'���o�6:IpvE���_����SO�d�#�A��E�>�����̳��v,�]���m���%�,*��W\^��7�h���H���z|�H
�d��C�5�2l�הB�ԭ�̿�W����^.|?bW[#��r�kXy(굉o��}&����X��d���;���>�dx�՜�g|��O���gv��E@�i$�=�g�o����(>��C����[=�~#lG?���9
+K^8�;��������H�r�/7<vx���>�Z���%����XC��2[.�5[������S<�d8g���޳nJ�:��wl �,�����'�4�D�Zܼ}�^/�P�4G@D�����-
�����\��C�
����ߛ~���'7 [�@���Y����o�P�m��0��Z�$��W r�
N.&ܻܐ�l�i��%���Cʝ2��?�C��t��>،-ff�y�18W�j�i�TY$	�$J��!��	HJ$�|�Tⷆ(� �KdI�r�H��ˇX�}�M=��8�
���L�&ػj�wƏ~���	�f���}�����|��Ly��4/�Cf2����އ�p���y,2�w�X��Ɇ�Z�f�D�PL}��w���f���adU�5ί�D���砧���$�rd���/�r�Y	�'�*�b%�������4���w���Gٞ�� �%$�d�2ꤌ:���d;��e�Ń��Ќr+
��Y~H�(��y����T_7[z�-�g��9��߉����{,��!�l��*���n���i�!g�{N�0O�Ʋ٬��5��͠��4<�]
I��T�{����F	�$u��J�]��7cRJR��'�V�d8��j��0)?f�/���G4�O��:����#�o���!��On jȠ����G&���g�P˔��H%^9�իG��l*��'�������7�8�?I�%���E�0@9�FB�ſ&�)�	&9�y./���o����A��a�v.���$�n�ǜN�M9���"v��>xQ�,1��F*��;a���EWF0�s ��b6T��~jc��.Ǟ7޺����zU��M�jM����ӷ���9NaQTh�h�`⃑u!��*{7��0���ge ! ?�������zA�*�rP�tZMR���'ld���H[$"}���znv�}ئ�	��Δt$�����
`��"�L���Y�NΘO�8kBҡ���!��5��0��R4�Xnt�yС�$BxA*�
�ġ�%�!�#�����8Ŷ�o��?�G���amWSCՃNj
����y<rց��JH6�
�Oޣ,$"W��5��>�n�������;w���H������sn��! �Gʀs��B�oE��6�/Ii�Ryɲ�\����
����n����!�<�)H!��o@�
���[<�x��# 2���O�� ����U���)�w��$��)�g� |`s�%���U.JF�n��%rV����?�������n�����{�O��B�Z�Xr[/���:����Wc�֫i�p||č��fh ��H�A�
�5Z��,֖�u��-�V!����H$͆&�2	pֲ^m�v7?�Z���'���L�%,
�;�^��[�)*�����p��&�?�$�vJ4"k?�֫����PF�,]C�}~)�1�20���9'�ﲘϐ"gHD�S����[\]^���3�ˊ���Ymhd9�rHgh�)7�G
;�#�o�-���"��͡�Q!(<�gg�,s�sc)��*Qy�qgm���H��+�q�bA�­�!�m�tik�D�_�4Xy�ѐ��@����ۖ��}]B�[�!�w�a`� �A.:
��Z�mZ�t�$�<��&\\�`�:X^�K�.�{
2�����EY��-��Dpp���q�^S��EcѢn �QF}�[:���������}6�%Z�XS!�g��p|�%� �T���Z�P�Vy�����Q�i���H��.r������ �k��?D��3�����jĎ-�-�XN�t�񖳫o�w���_��-Z
�R[�f���?�5@m�ROfRP���5�Ŋ���Vi"9<8b0�%1��Y�k�7�xp�����������_�hM��H�P^Q:�b��0O��PV�HM�����XF����7x����I�v;c���j��ꗿ�׾��P7k�I �y��㡗;��{E���ן��z-<N:
����qzr��rI�Ս���/�s�;���`ˊ;�k�?�����������%2���
����0��0���R�b�QA��E���6�rJ!(+��gL'�j4I���,Q$i��xl����;l��rEc�spxH���
�H��C�j�]�^�p{^[~��|�PS�ܶ�y80x�,w1~/It��'�� ��xR��@P"�>\]]3�]��z�̚F~�hԥ��v�,9����<i�SyA��8<�16����z{���ج�wQY�@�Tc��߻�(-I3c]�I����A;C¹d���.*6v퓫ɩ|RܨG���ӿC�
[����
C��?_�o�{���T���䳷O�a��8�&/j;ژ��mf%�zSp���9��i
e�x�����<��r���U�q�0-[����j̺�H��ZdYJ�?���n-l��:�C\����R|�w]�u= �&Ms�ҸB`I�V�aUZ�x�¡E,q�4�b��)��P���+^|�
�]"U��)�In�~�������]Da���h��Xg�Y��:�����f��V��F�? s �T)�P,Vp~>e2���h�kK���>�_�B�,�/�p��*�ܿ<��z�:�h�
��!Y�oߎ{.pq-��re�/j� X�N&�&�4I���:-��*z�[�.uZz�
�R�kz�&��y#�B����(|@t�W�ԎPa�A�����o���M}�O�k�U��Mv��_�6�^
������)=S,ֆ����Y�*����v[�)�'K�/Ǭ
�LC�C����O��J�GRw%q����]t�P e%89sq9Ÿ�T5��9�~�SOܠ���<��2�%�C�xP(x����)�V�����!��j �M���o���;��yl�,����݃�wfJb�:f��LpT���T�%��9/��&_z�ύ�1IbiJ����~RS���c\�^wR�1p5�p~u����s�I�7��H��S%)B��$gú�طV�^}���3�E��)U��$m#dF�}���8VeEI�3;H����_�0K��{r�╷����)�Ȓ���Nw���5�~�&-
�M FJά�=TF���5�ػ�FK\��P����U���d2�pq~�z�F'*��Z�����a�D�7�V�ڞ,ux�F�����0
�r��;�N�hU'NQ��k �I�I������k�.�(��s�f�O�T�X�PJ Uh(�j�u%��T3:<`px�Ԓ���ra�����hF���w�A�=�8��J�]#%��=\�xi#�5�?���j"$)
�
��
��|�����Ȭ�<�����QL���k&�5��������d��R kɰKv뫈pt$����H%)mH|\���'c��
'Zx��Z��p�s�<N���4�)<�$/���n�tf�w^<j >}���M�0A���o�_� ~�ۊ�U�w_����?

�g19���,� ���C	�NRl�ƣ�I���ٜ7޾���S�/�X�4�Bi�c�=��#�!��a�8*/Y/�\��$Nh,�,o�j6ɲ8�9>��pH�W�M�ٻqKю=��|�	��P���B��M��p��q/�z�<�#|�ӭm[q8U���\�Jx��9���&W�:�0\U�g����e���u�I���5�
EJ�^�c����Ӫ!%2��>���J̋L�j4���
��P�YJ��XW��4����Zb�T������
�RR������0u��z-`�:�!�1vv�i��(�����su=a<�`�����FB���v�I���P+f�	�鄪��D�$�~�v�x$C)!U�MB��aA������_��a�\2�!me_�y-���}��r�ņ�v����"�P(���@�=�b� �f��=��r���P�B��
s���k���DP%!ɲ�v�K��D*�(H!f ��:�nP[7K�@E��Ƃ�s5+Xl@�m����n��7��vH	���΄{��5=��e�#"৳DYt�0�?㯼�&��?}����g���n<����o�I���O���+$q���q�AUVܽX����\�*Fm��`i�pa2V ��v��-�������
EAhϽ�)�����J@��3쥴R���9@�2
%�j��ֻ��d�		eR���w0�p�p���D#��r�Pq�U�u,=ހJM�B���o~�=�l�
�s9�{?x��_~�բ���Y�7�M���gx��!��
$�!SBB�n�V�:�υ�a\H�K���uh!��z#�� �����٬���U9�N��"���Q�AJG��{�%WW�R�53��4Z��Q�~7%�a#E���8Io��W����x���d^q6�3�.���L�u��>�$=�FBY�������k6H�����0����V\_!�c�a�EH��A�!U��m���؞R����`��� �����iY{=�I�.xx��8Ol��JD���:&�&�%f��m�h5�M�nh.�k���cy�@)G�M�͐Vit�l!w!b�v(*�-�4N���RH&늋�#�｡�:
��F�Y kmu�ẩ}�[ģ��SY��G%`6��o}��[������Aج��Ҝ ���)9��}���b��đH��[H�
�l�;-.���ޟ��������/a�(Ar�t�X��8��^?x�ʚ&����я}���lA������k��һ���%��h%�u�㩛�)�ʣ�He*��"$�4g�Rb�C����\O'4����f�g�X�D���y���n������� !I��)%�ʢd1^�,��U:H��ƚ��g%��������{��7���=�Û�Naq��=�_�K�c�tt���gS�X��f�@�k��� J	��Kf�7��h6���
*{0}�{w�ᬑʣu¢*)|��ɂ�^<a1St�-V�;�=O=�e�M�<$:�����w߽ o���'���'G��ă���C��	�$0���b<x_!�A
M�%e��w�g�d�5YL�8�����������2����޿��o���O:͌'���z�

�I��Z��XZi��x�)C{�hᬧ�,I=�b>B� �0��?�K��$�g�SO���A�#?��I��zPJC+�T$��'%f�M��)O9<np�:�ukSr�䜫�)�F�
�-x�V������7MT��2G��S!�nl��
��IYa����ߟ�޽3�,����x�Ɛg��AS�%SF��PY�D��}�GL_��#�9���Z%1�C���� ���xAL��/���?���O��~z����J|�C����g���.����=>��<�d-!�	�/C�GQ�%�h����q�(����q5Y�1a=P�:��xإ�k�*d�k_�oDm�o!ֶ{��x!X%gg��Z�ak>�c�R� �5��TR_|�kUa1����ZJ��X{�£1H�&+^�}f��~�D&��3FM��ܓ<�X�v#̪B�*ǎ�.�"��K���-8�vlu��������[�b����Pl��J�6Ǉ]�$�ǅ�\�d�b���N����8�-I�?�+�p�p�f_��F��C)�PRP�����J)-)7�v+᠗����Ӑ��V�g������G��3���Ȉ�#B|/^Q��b�Q08J�)����j��
�%^h�WX�7�S��q
�Q����Ate1���p�pJk����Ws޻?g�N�t�4� ��
�H��pu=��j��un���izME#	 |�6 Jm|��z�a9�ɔB(EQ�t�b�)p�!��Y:��a�C��@��e�Fi�����[ȣ��iy��W�N�?/>���34 ����{����>��?uqb��:�,o��>���>GG_��D�{/-I���Œ�an��pņ;�����Ռ�t�1�,K(�
��mn�8��'�i��?��w�1�-��+\�_�|��ν�����{r���zCD9��M\,!U�s!{��
�mP�Z�`��m��`�`���wOx��W)K���M��r�SO>�׿�,7�RQGC'>��A'��<H鹼����	�~�B�S�?�.����H��L���9���X[�&	78:>.zB����MQ�B��yF��%����g��	�2?B#�զ(�����+�LªK8�F�m!�<,V'�gLgSt�`\ �8hd��H��ׁ��΅�J�6��I���y����k�{�E�1&4 Na���'*E*�6APD3!��j
��)�uN��Ћ}�ͨL�Jc��*�rS�}�.���d�j�7�t��;�,׌�s�J��!$�z}��:���ݧ���g�,���Z*���0O(�ML&�#�n���!i"�'~�t�#���e�H���RC`���*����x�O���7���?9C��g;�g=6Ⴋ���b��o��gn����hH(��+O'Q�������"J�П�"�K��k�J�z�9?�d:��yB���=n�<��<xIo��M�5g!�͌� R)��� \�Vy��Uߑ��%MS�<��.eY�D<eRD�y���4���_.y���y���U�����m�}��?wHS����M s*�@� 'H�f]q��=�O>��F3�7J�Y�|8�Z{:��L\\�Q��T�8S�6%�7�8ҡ�HU�|����b�A��X���}��y��>���q�����+�V����S���M�7xSq4:���Y*j?�%�g�,k�����\'�:���`DC���63��l���c7�(���Sy8������^~��B�ِfi��@P�r��TL�[+f����1p�g������X�w��<w+�@�t�r���͆�UK�����c��.X�
W׬�kS9�L0�888 ��{r?�O|�o�����P�'%W�W���Q
���p����v}�E��57��*=>�5&؝
�����O����0�6����������K����|k��/��>�#n��*�N���ʛ�l��i���}����y
�5�E�٬פIB"�V��dI}��q�Z#����h����|���5��q��kb�|(-'�*kc<diB��J���TU��,(��zIi����������	/����E���j��g�y���qF-�u���rk�Z�2u˵�r�v��w����eZ���#��l��4�]�E�  p�t�j<�z<���hd�n5����x�7\__cL�b�
�<�����Em���kB���! �.��0��5WWc<�F��\�
F�C`�R��j��,Y���M���[�pC��h�D�Ak'��{�"�E0��<�.&ܻXq��)-y�hz��`*æ�a=dM �'0����r�"ݒ�Q��B��)
�u�&� ;o�*H$�9hQ��p�o��cG�Z��t\]̹8��l,���lH[G�C]tL�S�FO�C�>И��l�d@��˫1��PR �Zr8r8����f�I�C�У���R\<2�T�S��B������?=�<��/<((y���E6𡝓̗���=�{?x��diD�ڕ[8�v���">�5���B����l���UU��㚥��ѐ~��V��͙�@��\&�y��!%��\�g\�g���8�!��y� ;9�֪:�dYF�шmaꯪ��jAQZ`��t'2�A+��ܽ���?|�w�=E��f�)�N�׾�E�~�KB J
�vc���[ƹJ�y�Wy��בJ�i����(ˏى����$}�u�����,8�I��A���hH�־P���.'\M&TUEYm(�%�N��nߠ�Ω�/����E�
���6#h�8��f6��g��x[��4�qԥ��T%��qz>f6[��1`-�n�A�E�*����p���b�)��;!A�烩�r�9��j^Bҥ�>��?F7:�
��H	I��	�T�R�N$Z'�$$*EkM�5��h��Z�u�{�`4�juȲ�JH�BE��W�%��a��S�M���������F��%�F�[��{��8��^�>r��I��2p=�s=��Lhp��HS�h8��m ������+��v���9�!�ԣǧ�a������ޜ��꧅}~z"_���Y=Z��v�ĸ��b����ڛWܾ�b�$��}��jլ�]�K�^��9��Tpy5���k�:�T�fƍ�!�V��7�8��g-V�/��늓�+.�g�����H;����]&��<���JJ����BA���H��dm9��������[L�r�b)I��y�����-����H>jԫ��6H�{��_z��z���,��ޢ�����Vo��L	\�W��]2_,���
��A��$: ��|ý{�L&�3T�c����CihPH�Sro���
pN�b�(�s��lA�dXSa�[7�����
}�V+Ý{��Wk�JXo
R<���6�����D��G$��~/}�~��y��ٲ��;�_]C�B��$RTT� �"I�4WaM3/��̑��ͦ����������x�r'V�%��8iA{�rXk�rI�UtZ��G]�i���������bC�3�ʰ�d��s���N'���T��@��>4�o˩	
ર\\N�N�T��F���98���;����>^E�F����@�~��gk vk��Gk����iV�������?���|��G4o��(�0�{su��l���f�
*#��SY��s~~��I.�T��F!�<} @ܩݝ�E&[�����tQr���	�H�u!߼N��N�b��V˶�$!Oӭg��
k֬7��!΅�l�C��K��x��o�����l �¸�Ã_���|��7Ȳ ��"ذ��A6ZRV��Eſ�����_�[7x��ǑJ�'Ie`h?Tgv
l�=����'�@�s��R8���c���t�����|,��CK�p��x�$%H�")g=��L�P��xPn}hxV뒻wϙL�f�b�
�oq��1'p
�k˽���%:i��.h�sn�:�p؉^> 8�G�Cq�'�-�MPO�,i��-7ܻ�Y�����lk��:ߦ��H�����^oU�kp:""�?�$X�z;�5�4�$:�Z�����T�rM�Tj���o3�6�5]Y&�SV�
Z�(��tF��f4h�J�
O��G�"��#����L�e��Ք�t��2�di��ᐃQ7�UI%x�i?�O|�f�À�G����36 �5��k����L�G�?L!t��d����5~�7��h�$�L�HK�-��/ u�'�gy!��_~Qz&����:2����a�Dׁ;6����6N[�wT6I���Ţ�z<g�XȾd��A��v�{IrZV�[����((m@�s/b6�V޻wʻ�RlY�c�5B8n�:��=��(0���Ѿ�J�ؐ �aPܽ{�w��O�{���}�kG��:��ZC���U��A�`��ϗ�7�KJ�jϠۤ��1&���f�>Q*A*O#O�;�2����bq�s�a�9\���z���'^�
��g��i�ؘ��h�c�	�냙�dVp~1�(
y�1֒g��>�^F"=��*�P��u�����������v�"d�l~M/���������3�X-f(���I���G^�eBU��$A_�?p}���,�&)֔�ɳg-UU����0'�P��x2c�XQ��V,��n�^;
6�N�Jow��5%DD�y(,���d�jY��J���ѰO�����V�{!�
��o��<T�=>𿦬v��O!�����5@��!T7.�>�SI�,xD-�۹xy�'���<()�l
��:f�1o�9����<�̈ç۔& ��0�F�[����v� ߇y<JK���+�.���A�,X�
���c���!OI��%�"( ��$�(,S��\�5��Fz2�`I��,�.
3�g]� D��ڸ(XG9��4��hRN����T�O�NPBPD�|�{/��[�eS�k��5�7��<���c
BXU����NBaU)PR2�W��_��7ߤ7r��mt��%�pF�h�o�ڶ/���6��y.&s�.�Y.dY�,Q�[
���&�tx7�5ܹ;���$M�i�y����|��'I-V������9I���7[��'p�n��
�<тe	��O��֤I����|��A���y��LI����.��8J�Љb�����Z���]qI�x���$�
��9�$I|���儳��鐨����Ô�n��g�y��Q�� v4��%��;UD��N|0U���$6"�2��f�m_OK(,T���$,���޻s��j����a�g�z�n�K�!�	VfICgh�vy|����j���������PA�H�6�n!��[rh��ܢe�[��3���������k���8�G$������c��N�J��"�A���	?z��cC����kM�@
l=��$���<q����`<����Xc�Ӕa�G��m5ݲN��wX]ڶÆ��΅���t�j]�є��06��59�o�uj���D��Nd,���{�z��(
���^oZ�tc���_��?x���ö*9���W��W~�s{:d6zK����c:I�����{���ы/3�.��8�q�F#��7�w��=��1�k�b���p\\�Y�֨D#�GC����7HT`zK!�	�t�j���
֖4�A�M�VfP���H�����"�5���=ϸ�FlJ��xɪ��4�,R%�[�z-�DM�,
����
P)A����m���C"65"��C�I��
]|?H�b�89�d�.ٔ������q��Q/�@+o#�R��~
�T�Y���	����1�FT�⽍k���)K"�V�Ŋ�\a�5�T!s"Z�lL���K��x�i�2F�nH��{��o�؈��q�/R�0�,��V��8gh�)�A�,O��맭��#���\x>z�J��gh�3��?;��@�� �Σ���6 �4���rN���i���k�տ�7���_?��$8/��
E*��=>p.��3�EW `������ˋ1�A"4Ueh�:���B�Iep�ۍ.�����8�q���s1^0[X��ʆ�]o+��Nv�`���b�}Vr�)�γZn(K���SG��p~��������	i���S��ܗ���կ���2]
#c=4 2D�ZϦ4$�B$�����o�ҫo�)-��7�q�1��CR�����]����|��E�}���q��媠�j�m���A���Z**�q�.���Yk=�+��3t�v�D9n�D=�N<b'��?PpJ�U��x�|Q�uFJ�О�Q���$����q���D�!5y#����� (D�G�ʻ�G�f9� �zP���ޝ�@�T9�'4�#��O�?:B�U���d�נ��[�n��!]4������n�F�0�	I����9K/�Q����:4 ���ɘUY�
V����4�[4��������:w������	V+����W���BR���G#�LGR�
��E���>���&�S �W��y������ �1��	R��~�q��7l\I�)�_��o���O��SC748Ee-B�@��6õ��\��E��O�g��_�](��z�7��tr�&���v0�{H�q��X��',�!�������m܇܎�lX�h%I��BZ��2�R��FK�T�-����w�#C
�f=#Ӟ�o�����f�Wx穜!-ޅ�)��+<�Sػw�y���9��&��z�	�84�JH�^v}�\4�jgld�g%��l����Z�Q���Ǎ�J�	]H�x�SqQ�,�v�O���OV�`<��]�.V���LW��`��`:-8=�d�X�������Ǉm2���ˋ9'g8/p.�����Q����1Sbr�u(Y���"6�����d�rJ�`�&Ӣ��{S
2��Bx�
���"}8O��A� )<�*��u�NG��,BX*S��5�WLǗt:
����1j7qe~��H/�Φ�;?g�Zb��7�]��43�Qh�;f�GIF�^/�\�ܿw������c����q|<���p)���~%|�������[R��V������|
�.`������$�_�~�����VX_ 3��Z�3�W���ۼ��c�o��<�k�5��K��?�.˃�"h�ϯ���bb����24H���'�����]�3�%�Mo��py5����uU�.J����Ć�6�#����$������"D�
����a^@�
���ޙ��?�1�ڽU���q��!O?}��Q��HJ*���Z��BJ�N���j��/���o��P��h���M
�����A�̔L��1�VnW7J�����.Y�%=!0eA�GG��65���Ղ��	�� %�8��.O>q�A���}��J�uLܻ�-�v扎y!���1�.8��Z��ZG#K9<�k%�T%\_����8�Cey���O����"��V`{���,���3./�h��%^�X�y��}����<�,d�'K$Η!t*�鉨�N��A�8V����3��	���*!H���
ޕ43A���^L���!�:|�i����x����UU -J[Ҕ��à��DuAXH�H��>�Ћ�B��ņ��K�˂A>ĸ5B�p0��kl	���%��?�q�M��P�JL�&m~��z�
����3�!^�Gg�Oh T����f3�*�����������?~�[=~�m�T�]��J,o?Q��H%��V��]b�C��Y�1�鴓���<��8��oeM��2.~���r�x�=i�zS��T�w��A�f1�hI��$*���|��,��9H�����揿Oa���Vc��&_������o��EKAC�X�} Xz�E"�GK#x��?|�E޻s�btp�h4�酐�h���ʃ7v�T;�_JAUz�^r=����X�)�{�8�l$A�.�(��z�d:�9w�^������+�^�r���n/|D&��� �BPU���	��S�kCs�j5
z��Na�Z\]�Y,CA���v��a�,a��
b�ߖ��O}���svr�d<�Z��$i3�k�t��ǯ����\��
k
��P1"P��|8G��3)J��͵B�}h lD�.}�aif���[,h�F,
�u!�B����)��cL̇X�+��.��>�V}f�P��/�[�|Di������s|�h5�i6�˹����O��?�m����J(�K^�����}�w'��� ��M^���@���@e���Z�����-@L�s��褉�0O���^���6�<���4$�Ш:0^�8��~���GNO/9=9CIl��g4�qxtD��^��x����e����u/,]�pu=c<�	R*֛��(1�@�FaK������! �:�I�:Gej4���_|���^�=�ͺ,��������׿��O��u��!(�a�A�T�Qm��q���ٜ��o��W�	�΀��cz�!R��E�.x(Q'��b�ua?�Z����]V��$ɨL�pt|���D�h*`�2�_\3_��R��C)�`�g4죵�O�p��w��<�~׻} ��(89=g6_�t��!�y02ȴe�{��1�����k�σ�U[F�F��:\�DB�x��J�
�	ʓ��
�뒫�+l�pVP�W�HЉ�T��Ӿ�	�L�ޢUJ�&��J�� v�
���mPb����aC
�5���D{�R� kH�[�n	�:�s+��rzv����$($�Նn���р,GE"�rǎ�����g}H"$������d��i�V���ƈ7�Hk�E�9���G��d��0��*�W��(̦D�W�?����ۊ�|��w_�'��y��m��=>��x�J4VV�-S���ѝ Q9'��|�O~�W��g��sc�����IX����tm�j�=������xLi����i%a�u�b} j��F���
*�\^N�����OI����*lD >�5C^I$$Rn�i��(+�q�)�g������޿dVQ���&�<���&î�9�
���Bx�s*���g� �{������x)h4Zܼu����ƀ�Te���Lz���^Ɓ5�eZ�J޿s��Z�6�ܠ����c���,8!��\�]�Zm@(�$K8�{��7Z�z�c���� !�|��02,���s�
Yާt�$M8<q0�h�Ei��1'�'���R�,��z{����`Z|��Ll��ʡ�d>_�\�V��,�Nvޔ4^J�s�\Hs֫%�ͦ�_-9:I�Hv���8d��
�w�Y���Ar�Ȅv#g48��l=@w
�ɒ���'�� M��,�
z�I�p��ȥ�9MX�ސ�0�/WkNN�Y̗$:)���8:>���!�Ll�5������G=�#��Wm�Ǣs�Y���|�m���|K�97 uǡ�P���(�}����;Q	���jA����l���n{�j��շ�����%k~�A@����R�`���b�Y�}[�����vB�5��p/B��������4��Sa�u�-Y��}���z�0���Q�T�r����V%V$h!(+Oe#M������{K W)kx;Ƚ���2/��pr2叿�2�SZ��Z���:��oq��MC�q m�xU��	U娜�+M�`m`^z�^���օ ��t{���t;5�?����7aIw!<�y�`�ʄim�6�]]c�Y�)֤��h8��nm�%0^���LY�3�F�v[:MR!">�Ɲ���cs����>>�x�7�x�`]Z�vN���%��^�Q;�����t�8�ؘ '�h�p���%�;�s�.Z��gQYoÜ7Hh�\�%�,��$�6��\B��Ę�媢!-BK:�VSޅ�H��Z2Vw2S'dxz��
�5x�����P�t�ʀNZ��$	g�T/�*a�4L�+VK�A3�˲��M�w�iC����,R	uP���xؐ�!��_X���ˢB%�� �~�A/�A�\�!�{g���������E=~; � �!���㷾�?f��Kj .Z�����?$i�M�����M��7_B|������xs"�CyMCwQNQ��PXu�̀ϻ\����ko���Ȁ�k2�Q���::������8���;�I��וA(�	��w.�(t�j=Gڊۣ���g�B���s^l�A0�H)0�QT�4m�\W�\�0"
���5�\�^yL�-����`�#4�)
^z�Jp(��t;
z����#�"m1���Lx�{��z��jC��;��/�9~��O�т�e��
�q΂v�$a^nX�Fަ����?|��+Q���mp0j��'k�֚D�&ƹ֓�&/��y��$�
�\0_/iu[�X��u<䩛��)�)����__q:���ς��Q���F�&R��!v9vc;�F��u��D�'�l�;��\O(���Ў�N���7I�@�gZH�M���NI�/�9<���f�A��8G&w;�w-
dL��a�:	H�zS1d��o�:_������}�
*k���y����&H�F�����GI)(�2����z�Р��ui(m�L,ւ7߾Ϗ~��g-�Z���ot�
�!�U�Y���%�w�t�#��Lg�	_��M�݌ć�{�L5^H*S��D�*�-�U�t���'�.g���%��s���z5�n���a;xXx\�:�Ջ�ٟ�e���=i�������_�IRjI��D��x�w�?��b���5�?@ȿ��V��́��Uص���'��*��R���+�����s��_~�C/�1&��Fp[�o��i_�푯Y׵θN�
|��邳ɔ�Y*g�UI&%�^��~��0��ྎڋ���(��l��Ն���R�X*��kGU�-B� ��8=��J�"�
�;���{���h��s2/��%�}���Y0Z2��}�&_����:��H	M͒�8o�q�N
���������y�6UN�v���n7��MPIԍ>��-�����D�!5�
�]���x���
�<�!7FAs_9�L�
ί�LWk�L�!�uZ�:
�
��Ֆ�3qb�x@d���d�Yn�߿�b<e�WҖ��^��2MS@i$�cÝ��RQɄLZ��7�f?��AEj\8vn��P�B��=�8v�J
H���a���Ui�X �@�=UH|)v�_��?|@B2-� M���x�D��k'H��拒,{�2T�D�9�ဃ�>Y��W WX�b\��ɜ��TuFP����Cn���iE����%�Y�V	њ1\�>|gFX\L�\n��|��xNi#Z�J�F��V�	b�:�e_���w<z��=,�������?��w�W��a�2
�w�N�����	2y�	�1�[�J$�m#ۅ�&!��ł?����54��/���5�³)�r$i&���������'%�p>�J'�����lFeeQ⼥�i3��h5%Y�KO���5�{�G��@"�b]��Ք�|Ai-y*I��`ST����%bw�*	�N}oJ�D���OT@@RU���KV���^y��zð�S,��:��_�"�=���"O�aM�A
��x�pH��Jƥ�/��K/����O�R���`4b�o�i���	�u�s�.�$M�u�PA�i`2[sy=f�\ 2�U�7~41�i�`+���Ɋ��+V��4h�I��f��%jǶ�ߕ`��]~2����[�ո���%��k5�T��~��Q?�앇Jp}����ui"���nd��hN,%�}�wΎ���Hh�"��$�M&j��v������{��kS��|�+h�)%Acs���f���F��(o9�9�HDh���(�r~e9�?f�\�L 4�Z�j�-y��B�Q��n�V��<�T��6Ea�w�>���(���*�y<��pD��*��x4r}�ꈐ��!���п���/J%��ַ/|s��H�����8��}�^F�\�g�,d���S^|�E�z��e��Vf����
�婋��;A�~0�A�^T���1��2�Í|��s|tH�-���>�*��ܾ�z��*Q,7���+��i��5�{��5eU����y��5�1�x$�IJ�d(�b�\�����K�y�M��Αޓ(�!��s�>��
�4�g�*c�6�����b���W^��7�	�HH6��(nݺͰ�#���{�w���R�y�M,�c��W����aCΓe)��G�}��\]�9��j�F	ސj���Ã�T��P�z�n�.����t:��䔲��!I"
�t��Q�p��5�������C��hp��
F��DT�m@���VH�H���!>�$�+0v�sk�]c�g�����5¯P�Q�?|j
�1�*�3�5xWb�
k7`
��bR2�����a6�	�\s<�q��q����$"e6]q��4�3%�;�4��耣��2�#MF�ui~�ʸ���pݫ`y�A�X�9==�(JZ�&Ɣx7nq��Mr蜻��G����ߢs�-���|�O�{^E޿��=2���S��#2��@w�ѾUH|t'sBa<�5Y��#���5?|�U^}�y�@/�J������-+X`��oчm2\��8�e��՘�,I��A�&	��Ѩ���7ӽ�����]��T�+��՘�j�^bl��n���
NȠIw�a������b�hM�2�L�*�U��sr���+r���)Ɣ�{��i�~��v�~�"��K��ֺ^`PT(�޽s�[��c<["u�J2��5JJn�<��̶���<Q�!���`,|�*0�˫	W��$IJ�&���ʃ�����#x01�-_O1�Bi���G�{���G����>���ϫeh���9W�R'�Z-$�,M���YNeBpe`�ڰX��Σ"K��jrtt@��@8��n^�3�7��-�������{�
A��J�'᧬�ME"Z>�3���
-ⓊD:���ł�{�R�&��`�

7F}
E�'�)¢c�\3��p&�@XK���֍c��&Kԍld�n�"�Xԫ�9�@a̗����;m�3d��[79:���_�=z|�:�H��|�[.����'���o����pbf{���'`Qx"�/���ǯ�k��z�/?��9KQz����{��sv�Z<���f��S逫�ӳs��e$z�T3u��t��U�l^�ס>�G߾7�WWʲ
�n*먬c����n�iְBݸs����l�  �dH��D9�1���i&��-�՚b=�O?�_��_��[mT$(*�0���k8�������/���߻�8I+o�t�:�6G�Y@d��w"�bxCy�۝��DLUҙ͖�Y�V
�K���a�4
M�ւ�zf���)%R���N����V�v��?m
JOlR�c$,���3�N�*���j�88�hfq�!X���	��
���FO���`�'�
�L�>/y�p7��g�76����(�z�"�N����C^��@k�]�f2�NYJj���+�^�1����*�y�]W���<���Ih�\O�,��8�U�ܺqD����<��ռ���P� D��ږ�40�-�L&x��V��-n�8����
��G��go��	��>9 ��D��֋�������y �B������S:�{w����_=�b�J@�����d��zשh"��v;�Z�B+k�z�ίY,�q��4���C�#w�b�y/��W��o��z<��jBil0�q`b�]o�q��% ��C���W)!՚T�h��
�;�F�L&H/H�FZK�*�}�6_|�	:
���W(,�0TPM�(E�,
^~�]~��[\�W褉�9 �t�ܾu�᠇�z�}�*���
5�Aj�p�J`2H�j]�U�������ѨM��A˘x1f�Z�upa��3�9:ꑥ{	�����9ϔ���#!$WW������f�e�Y��������$�BW3�-y��=f�E�bp�L+F=��v�?ȽB�;;���?wt�)ad/D��E|}��Y���c�j�g����x��ހ7xl��58oq^2����=֫�v�2q|4b4����bWNp9��;�f��Ȗ
�C�^�G#�B�Pl��ƚ{�
�G��mT���3#�o�@�Ʉ�,(�
�`����FV�N�ؔ�G���â��'���j(�o���ߴx/X-�[��[�T�s�?��q����
��x2��2������k���k������|���/�x�l	��2�ų2����t��<Z*R�h��Zyx]�Zɞܞ2q ������ԫ��*�� EB�Zo��O�0��}�c�	�+%����4�dIF"�	xʹA��B���L��g���_x���0}{��� h��7!}�"�V�.y�wy��S�U4[�H�*�u{�~�1�������7��w�ɪIi�]�*��Zqu5a�)�*���Ǉ�QI�������2"$�$��A��ahB\}��~�Cyܖ���S�	�_���r���%�MIe<UU�$�����^�-��tpy����S�%J
��H��h8�~H�ڢ1�z��� 6!��m�G����X�$������G>
)5Rj�C?마	|��-�zh���b����͊f�AYm(�
���}�
i�^H�\]��{���b�!h�
���E"<����@��66��8d�R�(<��bý�g��`vUl�yr�ͣI�ۨ����<z|�Ba7������O���O��}�ۊ���<����=>
u�~��V�
'��x�ⓜɲ��7���^|���V��$H�
/��Wa���6��"`��
�c��Ȳ����ld4[�4	�.�[�`�m|T4�`]8�
��������ZST����O��.J���!�M����Z��D�@�*�k��ز`����4��W�ȯ=�,��"ѫ_8����kM�4BQyA�`��{'޻s����4���B3�^�e��G���s`e��_�`'l��RK�����g���L�+f�Ui�*�N��a�~��y+I���x��Ř�d/Q!���i���X8��>��/���:~��	����K���򤴤�����4[YH�4�u	�Ś�|FQV���t��M������=�C�[}|(7?�H��J�6��K�W�!��L)���*A%��<�����'$�#œ�h��xB��x�`S��͜�TeI�?�;h����ׄu�l­6�A��D'dIB�ۢ�i�IHk� k-֔�(�ưxg�"H3"��xX�J.�ƔU�N$^X�\�e� �ચ4����
�E7�V�?��+�=/� ��r j���
y�_Pm� ��gM����"�Q�L-v��A&�{Q�g��b�Q $�˸D��]`+�����V`A�&��wrɿ�����v>��MO�=�	��8*��$��按�jnF�!�DkX9��l���5�uI�偈gGG#n�:&K$:��k�| m�[ṋ��\�7o�w��:��.��bST�iBe6,W6E����Ǵ��Yg��Vl�ēH���f�����
kI��fC*��<�_z�'o�Hd0Zɥg1>���=�b�K�$�`����%/���߿Ƹ�$i�\��Vkd,�7�:4pƓj��h��4�H�5�CܱLH�(��z2��r��%ZJz��=�Lc��y�\���rIQYr�0f�h���n�h�h/r����Ҷ�ۭ
�"�a�\m�cή�ɛm���TkF�O>~Ġ��\h�֥���9�Ɍ,ͨ���j���p��NC!\IQY�ʢoÇ��c��{��
�ED�B�p�W�Љݵ�w�S����>���w���u#"�mnS	
%<����z����Ŋ�yz#n?q�4�6�n��M	�U�t���,FXJ[��5y�[�F�mS�y���d �F�P���2U0�J����3�o��c�C&��fE��c8���%�@.���A�	�3:
%�x���Oa��������U����-|�_���
�m@LLk^�]����8
^e���|�y�����?{�?y�y	����8�^[���L������l*��^prv�rU TUؑ���$R�IW���Z����7L�a��`]�ܹw��x�f;*d؇����(�*�º ��ѯ��`��D͋�� I4Y� gK-�T(a9�x�'x��!�F�PX�v_��5^
Sv���
^{����+,)�KV�
UU��47��""F��� �5R���cD[���x����:Lz�E"�{�d |�����t��$����n�3P��Y�����������Љ�����	:�I�8K����Q�VCbX$�M���f�i���U��G�hh��]
��5#�A�h�vx��Y�&F��J�L$Q�L�$��Xl���}�i��?���+�S�R��S	����޽+V�'itY%"I8�u���
ȳ���f�/�-VE��|���ܺyH��n�e�h$N]�Six�mS1���s5鏁J"q��h$�m�L�-$R�&�?�����Ce�r�
��������OLj�IE�?Ù��#C����фkH�:���D�4�:A�m6�����o%|���F
2���HCH����aZW:��{�d�� S��W\�����T�v�I�ס���N0y�������
�w�vo��k��d�b�&��hv*ś6���PYw�A�W�	3]� �`��$d�"I�mp�$4	�fA���y��|�Y�F��Up�TU�!+��<ȴR0Y�{'k~��[���)�J�th�ă�4�G=z�V@*�k���Ţ�>IR|DE��MY1�-)�G�PlJ�\1���43�1[�����s��4m�#I�~�N+%�z�T���~4���S��*��L�3֛c���qt0��̷��-�z��r<ac,I�Qʒ�	���n�"�*	�6�#��n��	p|�=ZHօc��Hs���u2�-᥼��$ ���y�	�"�2�~��66�BH�X��;�kN��,J�S�G+M�ۡ��4$���DG�/+�^2�.@(�4��$�uZ��v�p��vx��
�P�Y�I�u�*B����]�\�)A��1�;���Tՙ~�����kl��;��o<��g����i ^����y	|�?~��HI?8��h�nN� �#��/B��
�W�y�r��������s�_{��o�r�BQj��
�-�:ة*�Љ����q=]p=�a���PȺ���#��4�<���g9j�����j��Ã�θ���)*i��lL�q�,��c,"��~�}��:�L���̍L��A�� (�vEo��K_|�/����
e�Ua���@H�q�UP%���G���^z������4�R �h
�N�c��z
0��~�|� �+�5ꢤ��۳���l����U�H�`�<����^?����d�����$i�����h�h�	%��(J����{(S���Eo2[pz~�|��%h53n
:q�%pv9���9���:a�)�Rr��1��V����1���;U�	��?!PY΢t���������R�n�X�X��i�#m1��̋ ��*�7 ~�'u ���S�ར2���	o�w�ٺ�	�rS�lB��"�Ӡ�}��0_l�v�|�B�����^'��-Bp�!k�x�.xZx�2�bS��?g]��$�:C�%qxЧ��rQ&����Y(�������OJ���E ^~!��/�����~�����/b����!ND�Z*MUZ��@E��$��]�
~K��3z�x5�B^zY4���Q����u�O��Q'.QB3���ͦ��� [��C�}{�DR����k��
V�mX��A� T�1_,��C�z*ڟ^kE��nWB����
�6 =��A��[O�����Ɓ&�5��Z��{����^w�.��_���i֥�9�-q����795hf����b��B���_!T �	Oe��sN�.BC����N�����F�d��Ef�`���}@#�ݐ54��Z�<�
β���V����C
��[
�x���z�fS�t��Y���n�
�<��^���� d����,h�7��Gm�s�܇{S� ���H�&���՟��?�7�V�����f�uYPV�6PhG܆��<�݀�~zZK���,�h���Y�&	���e����P�kڭ�7F4�*N��g�-V\�'TΡ�$qE�ݤ�H�[��k{�΍0Y_��$"�?�X���]a�Gi�f����9�;6��e����?,ISS��������k��7�_���o���/�>��k������r�>�����E}}
�Y�)|E.��36�� ��z�В�Y�Wߢ�����WF�£�$
+ Da��m�tf8=�f�ڠU�&�4���A�C�Y.����_�E4@Xm*��'Y��:XU�����؊�|Aa�b$#��-�E���J�3��k�p�j����/<�O>>��A8���L*\U�(\BCdp V����滧���[�ֆ��6:k�)���
ZM��A�A?³ rĸ٘b��1�eh �`��ܽw���%��t�:��&�#�,�9����qyu�r��7E�-�N���!i��z��б#�}H��}�D`����z�l�Eԟ��-�}���'A��N��Y�6dy m�F���!����H�ö��3#<N��FΚA]�������	�g�Yɪp�s���{��q��_��4K����{o�!
��$�g\$�)����x�Dqt�婧nЋ�����8������B���i֠���Il�`O-�e����u��u@G��&\^^b�����F��hԡ��(���a���S8/
�Y��a��?qN�����o�x�k���G��?��3��Uo�#t�I�E)��B��Q۬S�V�(炋�W��^~���$k�u���hᙗ%���KR��X2�{~�`2�s~q<�U���v+e8�����K�?�`� ��c����z��,�)��C�`&:�ڂ�r�i�����@{�����Ŭ�VC�f�)$�n�s�=����y������
��!}�9�>d,,+x��S^}�m�.'x�&�Z��
WUxW��3{�~����(��}XOl��X���z�s�������e:[ d�_���t88������|��{'���Z��p��aǣ��%��Q���(!X-K��σ��N �J4���ѰC���鯧S��?��I#���<o�����'ᦡR:�;}��I 8j��
0^���*T�C����'R֕%W�,U�^y������.7��NZg-���c�T��,��6K������<���G#�!6Z��f�������M�KbT4�z=���!<i���=O��0K�b�o�ܵ���;w�s=�PT������pt8$���^�dd����ǣǧ�w�mE������|���]������3������)o�R�#c��۲{hN��ȡ�(
>R�����q(�x���gc�����O��Ǽs��
J�q.�(��!G%B�x<���
)$2�ɭv�ѨO�U�xC0P�qnO����n�ד%���ʅ]�&4ރ�	*I��e�\a�{�xy� ��o�<;! �Y���@i�SO���_���܈N#�kwj��Yg6'Ee��b�_|���x��zTڠ����ڐ�&���i��c�t�����N�a��mLz�P�L��j<���{���N��Gk�pt�p؊��"L��	w��c9_kJ)n�8���[�A������x��rN&KN��g�.Ht��������a�D�5P8;���ʠd¦�h��<��t[	D4GD�������f'��OV
Ng�7޹Ͻ�*�q*giN7i����XQ�e��NU��g�%V�8���N�8UQ�2�|��9R�H�!T�R)x�R�N�E���i5�wr�8,ZV@�tz����,���:�N4���ܼuH+�M�4qd��Z���xZr��	��&�Sz�T39<�7���H��*��n�=~�c!��A��3 ����R���U�o|[����������}��=|��_�.Z�����`�!'��P��&$I��b�+����u��~�Yn�d)����oV8�qY��M�\_��ME�Z�$ƙ5��e���9�������Y�ن�x�r����ب}N�����V`Lp'�������H��֣�Gy���&��)*�����!�?�7���AK._9��;?vzJ빚�y㝻���}���6�u���T'��&v-�2��A�V#8�I�o����{h�-V���z��՘Mi��)�C��`�i�n�D��	���j����M�py��	$�a��~�K��d;�oDn�m��>KB�~�Xs5��)J�l����%����&)07���d���%�ґA�ِw��S���q��P���r�Q{�����l_pu�a2�`lB�2�q��m�z�`�k&$�@z�;�#��So�h��G���X�B�,�T�x'(�B
�f�ʔxa�r��f<}���Z�*�`�/���b%p�Qq4h�
GUUMLE�l�W�K��T�D*ɦ0�v�r�O�8$Rh�Ф����r0h�� �`l%�P�����n�?���-��#J�']=-ICQ��������o	��� �w�aÒ���(�;���I�@sַ$����{Q�����I���ix�����.�D�gs��P^y㌬�4
:���T��
R��A�d=���������<�2�Rs�op��{��a��x&�f�ʋ1��1X)2$�7puU0��$y�Lln��0����|�z�X��pF�
�?����&���sAN�*fܾ}�מ�'������a��r��H-�BR� �K���?x�/�vʺj�}�*�;E#MID�v&y�pH������~iurnSG�=%!c )�����ҡ�
�j���s��i(�&G�M���c��%d-t�f6���A�[���<ض+���>������w��
�=�G�I��B�HF)IEER�PbYSJCl�.+�G��jv\�*U\I�<��L�"K��d��2Td��d��3��7�y8���叵�9����
6�h �6���wνg���M�ag��\� l�����4�GL3O �F-�
5��n�L�y4�c�w;��SV�
��^��Yfu�s��S���Sf>��頵G'#�z�yϕ
DeِgIrXC�lh��u�B�J�1-��������M������@�������l���JEn$$���ɡ�T?4��"
��&� 8BP�ڃ1d�%4uT�̔�舝�޿=�z�pYΤ���;��nIc��<�O��
\]���Aަ!�%	d��i��U���#GN#ʸ�����{#T�t:}��1�AΥ�
V������\16K"m�i)�����݂{ �F	wc}Z0%�7�}�	�jd[�B��¸�}O@j��P�~����s�ǀ�|J-���}~���OS�~������w�ɥ�4�0�M����3H�8�F��PW�uð;@L���C����(���U~�#C6�}� ^,����pt<����j� ���;ȹ����z?Ml2��MC���򤂠5U3E3��Fg�۷�O=�~l@4Z�V�#�&��1�x&�
O�|3h4O�DDy�q�"���NȚ��i��{��|�����q��MCh�u����GO��{|�K�pco�ɷ	���u���l���KW
���%��d��x$&m�;E��e�R�AY��ᵽS�
��5|pԳ����h�^.��c��p2��[G���=l�Ç;\޾�C�۱�SO�,��b�o�u�7@
Ic^ɱ6c�݉r�h��h���_��YX�Y��eS1�f��\�9B�
��G9�(�<��£��C�����V1"H�2��%�)�
g�h�5��iɭ;����(�L&G�������G6x�!] ��.9G��c��R#�u�� �=���լ5��V73�������R�ᴊ�Hf���%7�K���qJ]��g�W
�9t�D `�>�K�~��Ia�#���s�*c��7���	U�t�.��Í5���j�\ɉ�@fc�|��[�Xu/m8_T�*�a?�ⵡ�k4x�5X�P�ƥ鏟�]�h��D��Y��,��7���s�i׿ �q�����9��o��.�G��;]�I�M/Z�&�ĪfZy���!�j�׾�4y��?����
��j"=��t��ۑ�nL�owr��j�� ��Ktk�\o�u�� V�Q��FSv�)+O-
�ԨX�O�Q�M���i�q� ��L]06��Z�ȝ����ӱ�G�>�.o��:�PXC+��I��O���f�3�kw�����2��v�������T�MM9�a40�w�X���`P���*xׁ[� EV�*��MfǧcF�M�]����0��sY�8)�OF�ge㠚�t���bmإ'Q �	�t��� B�V۹�"&��zF�f%w�i��������-;뫬
;:��g�~2��tB�
Fc2��6��mV���&"$�J�!�E��F̅������ΝèC�.~�96�:l��YX:N�11l��ez_8\^7H����K�2��G�BS�֓�1�8�D`�h�p:*#���J��W{l��t\�NXi{D6y{,@�R�I�m�Z�;�g\O��a�T�MI���ui@o �F7�"��u̺X�|�.�w[jmj,��o�t��M�6��Y�si���]������M����i����}��]����7�p�w?�9j&�2J?�����S6W�k��\�V(�����ڭ�G��ݧB�;�0���r����.�(Fc��Z֋E��9o����	�G���������W��@�)�MSS6eS� N,�f.%G@��сP��m�6V��G>������\'s�E���"0�T� �X�?��>����p�Έ՝����V��B�P�S:&ʻ�����1x��d��,�𗘀x�������]&�	�ސ��d���C2\�ƥW����ј����`)�1�~�իW��(H<z�Q��8׵�ǂ4I)02��Ϟ��q�5꺢�z���N��+��	c����{�����������ɕ���{:�HDËH�*X7��r�ǡ�KYn��e<%9�
ga}}��K۬�t�Y�U�hh)ɑy�z�i�A0�~�..u�h\�'Z�Cœ&��ޡ�J�eY�������:���X'ߥ�.
��(^
�8�'g�ܽƸ:Ż���h���Ɛ�΀�`�p0�A��!i����7��-�5����k	Ar\�-�����YJD�cRr{��o|���� ��x�ϑ��u;�FU���;tz+4����	_{�)�ß�ٟd��.�o�L��npt:�u6p�c�Tz����v���������t��FS�Y
'gc�eI���PҠ����O5�0�L	*e]3�j� yk����M�D�̩*���<�0�/m�G�Ȣo��������:�^	��{T򭧟g��5Y2b		��`��Ǉ���ln����F�Şs|�l{=� B�߯��N9<:��5�34����p��&��Ƅ�D���3�NO#?��Fczk�ln���g]T�k|Lz�B!/�I�\�)`𺐗>:�r�������j��ʀ��m}
��R֞����Nq֠>`ll�����s��>��K�!;��X�F�K]��f����Ȭ��k2�����
)�ԥR��L{Y��\,�:oM_�̵=�Lc#3��IL*3�5����OU�H���~'���+lm�3����s���H�@<Ar<pxv­�;T��*��_����%�+4���bG�Q&[R���N 湬,���oF�(F|r��$e�!�|b�~��~K���&��x���d�k
�r�z�C���[YC���:�7�+��������*��vs�ѴamX�l�50\鲺���)�~q!����zI�ۉE��n���str�xVb�M�ae8쳹����,�D�c(��IUQ�(׫&�5���r��!K������@��@|tD��LP��^�Xk)�r���g��o>���N6�d<Fl�AYO�L�j�e��eks�ᰋ��<��\u��*a��Ť�o읖�2:=K3� Z�:pig�<�-}+�r��?<��lS+������>h��F�41��n�ԐXѩ��
�9>>�'	!4�=67�9s��X9>��"P�#���!ۛ���Ξ\@��e��D0��`%�N�'Q7�U�e�3���+����2ej�/i��;��\4K�ٻ�%�f3����1@aN�
>&|�U�ptx���	�7�Р�ae��ʕ�����f.�ž�=����^�Ry8<�px2��Q{�������x�f��du�a%0����9�˨kŐ4���:7SBJ���R˞�T�ZL������Ix���aPr'��PNG������×7vb�.��.���W��C��oi��% �� oj:���	��p6�e�o�9�rƵ[���_dk�2?��0���hƭ�S�Zjc��-���&��e7",�f������Y���'g#fuI�gP867V�ri���c�g�|�dZR6
���2��Y��B�
�N�x������3&�
j�+�@X��d���O���/]G\�,�Y���%���t��	����!�w6v\Z��R��PW�|�<��+�J�����g-!Yom���5 w���h:���!ǧ#|��8�ln���:@4DEV��[�.�Iw�0���t\s��.�Y�1��Yn��\g}���ɼ��h���!4�u��5�N���;;kt�(X�<��-wH�U���Ϙ����{��T)��@�W����p�Kz�q��䢘����>���k�^���-��^d/�|&y���=���0O��c���1���E�!�s�A�ĎF�dT�8�˴���qr6�S7�&���'���n�A�D�d��	�d4>���RdU��8FM��,% �������J�w���L\0��y�DSb��.-�Nn1ꙝ�͔��G(~��W��6���ˡ��}�ꟷ�����]�7�L	
3�ݨ4�PW�ڽ�]� O>{����&&��ë�r��������xv�׸��%�Ì�ii���2�VN]
2��	�F��#N�c&uM�%�A���[<tu�k/� ��0�Rׁ�dʤ�i
��"�	+��.V�H4"JEw�k��QE��&1i�	��r2�~�O?�G�Ű˴*�
�<��UNOJƧ��CE��k\��ɠoc� �r�}�T��2''Sn��e:���!���wX[��[/�tg�h��[���&4��c8�y��Wvt�������ArA1Uɐh�M}nݎI�5�zV]._�dc3& ��i�[7�9::�%aT�X[���u6����1��v0���������Q�I���{�R�5���q�r��&��<�-jC�����$̫�V	@��XF�/#ْb1fi�`�V��S����@���I���!�ɔ,s	E��Klo���s��0�F#�!����D��㣊;�O�����T�QN�^��Ƶ;�f���̂�5US��gr�פy`�\H d"~��hD��P'�A�,5�#�/�_ch�36�9���|�}�:�i��{$@��7^��,��[Z���	��.��?�����K�4�FQg.�u`��Ɍ�?�<!���~����ZV7��*�fS�[k��2��c2���i>�EL��h5;��W*��b���py'VJ�NF�BdD�놲�L˚&��
1�X�nhu�Ɍ��l
��^�d�c,�fT������[3~�+�r��l��t<�t�y߇� �[�9�hB��ʠ�acm�^!�/�!�Y��-vHK���n��q�?��2�LXY�!4䝜K���r���0��l�9M�L˄���A���U��r�4e�iUh��I��]hl͚Ru�Ķ������CĚ�E�A���+��+U��(|v6B5�s������F� �輼��-<��I��V�8��`4�9::c6+QU�StY[[ask�J��o$=����%`����r�Y�=w��4O��(��=���t���N�j��9�(��x�\
k�+��t��P8� M�^���6��h-�xg��ӽ3�V��L�F��C�ۣ.K��2B�h���z���T��Kׂ$�N4\Z`'�w�ϥO*��42'h�7�������.C]��[��
zt��K��c�W��������M �u�/�W>MuҼ�����h��5(�FI_cbV�F��lqs���O�<%�2���!�ٌf6bkc��;+�]4�ܛ{��\�]���U89�qpx�KV��zF�����gs�1(V�� XK��������#��l���˅��iqaA��VU����Y����M�R�����Ʒ���t��9MY�x��˥�-�]{���(\��#5��6�
r��m���@�ǁr;�L
��EY+�n�r�w�5k
���U�^�"�u2��n�:���\V`����~o���5�����mAX���F�d��6��FL���̣�	�'��&Qհ�݈-��Ç����9<:d6��gݎce����g�ܲř:�d�Eh�D����PL������������pFY[��6�-��'��D,����*G1�kV�929�,�UW"6}v��`w�,�'
g)�S6V:lo�����3#Z�����Dٔs���D���Agp������cLY�F3E�*vDl4F�,'n�:1A�)U������s��{��xD>D
�h|�uEF��=rf�RY�r��ˬ�u	��\�`rn��߾{����o�FO�/>��V�����q�V�ӏ����������\'SU�+K��YJH۶[���EyV^�]����X�8�5#�<��t8��Kw8���zB�oP�%U5��g8#d����m.m" K��|�k/��T>�&xD��L����w̵�n!�Q8Ǹl�vrV��}X�E��U�5��n��I��P6
���gH\k.��U�������fb���5��u�V5�YCo`	*��ꈯ=��]�-w-tz]y߇���>JP���.��1+[�8(2˥�56�cw�K�.�!8�a�:��94c�K/]����^���Bͥ�M.�D��Q��Q��_���n2XY����A�������V
N���Y��k�w�����(��j�N��F���cN�#&�iԅІA��#]��9�P�����sxx���	�i���6�^F�����G���4�6�I��j��D�+X�s�HM����#��ш�j���	�\��\ec}�L<�������J��*�x�V�@�'+"�?��*��=����:����x�\�D'w�@m<U]3�d-�%���ru�����;��zt��)�<����I��N0V	����А�G}��;Td������8���%����U�Ȩ�������1O"@�
��	a:&{p��K+�]aZ*+%4
���!��7��#h]:��S�� oq�-��jx��~��7l�K���ۙc������Y�j��c�!�5B��M����n�ʰC���$$0�\����oZd�N�fe�y���b�PS8ǰ�ePX����a�m��dh|[e����9y����^L3�a���Kl]8<T�y�5^|�ә��;4(�N���wX�r��.g'�J�T�36�7���I�c ��3�-
�\��4�HF��40Wh�bMx�E�u
�n_��{'g�ɸFLb1���floY���6D�L�I�D1@.�Wڄ��9��K����*���1B�X�6�;�Y�����Y���k3���y�c{k�~���|�l�j�'�Iv�)!=�� U8<�0M��Q���[����QX&�Pj"���� ��K��=Ɖ�al�X4�Ƴ��3�& ֡x��e}8`e�O�%F��,̢��p �����;填}~�'?�{?�0��J�P������[mE�F�	�	���g������}"SP�Ä����>�fx�Ь��;G|�[�px��:�ր1�`e@�úH�TK�p?��>��@޳Z����_<�>����� 	 �)��j����������hfI����F��V�S��
�A΍B04����gTU��8�	@=auk����µ�,qB�η0�=E��=���ɴa���ɴF��Z����:`���҇�AN//hj�H*�y���"O�/�b[�:`��ǵ;,���D�@�����N(��ʭc����y����'+
$x6����e{��g�)�c�ԗH�q��&?x����޼j��� �en�������6�ۻ'�G�&c<�^�Υu��VbR㔩7��r2��0Q�=���j�,P�̯W��&8�^vd�������lw���l�v{_�冝K[������ܺs���!�%/�rF�ɸ|i�A�a��|gz~n1�p�1x���8�&�Δ��9:ᬋ�KFY]]�+����J��7u�,iʿ	�����)^��I�Χ�	�GL�\F�
�N���&;[�,1�{�$۫���]�i�'�ǹ�5�<�G>�����:\g�1���R������Fb"Q�C�9�=�c�^�y"�(����Z
_��!�������5!4�ֲ�����
��3�5�G��4��]���Q��wP�#o}���@��ӏ��c%?���C�gy]y���wZ��i!R��|rx��
T�ٌL&���a��͵.Wv����Qib��Vpуv�����~�xRrpx�\FC��J���
+ǰ��~F�Φ3L��a:�q]*L$�.%�R��v�U%:!�DU��<��-����Mq������<� ��ø<��wg⨢.GX	\��ɕK}���؎�diϧ1U+ $��s���v	�$e<e}m���a{3�z�j��w������r��6k����Yl�{��<uK1K΀&ƞ��g�îJ�S0�V	ž�ʠHJ����s��Mv����3�N�y f���r��[�/J�6�`�r��prZs��.g�1ƺ�����WvV�;�u�8��D��
�j����~����j�0h;� 14���Z���7���ԞN֡����._�ak��#`g���.w��I=RQJh*���9
VQ��^mp������Dc+�p�����	����DV�D�n�D�nah�)�d�s�+��vع����p��|hȭ�o�~տ�g���س|곖�<����I����Z�����g���3ԓ���7��L�4-�I�	�����PW�
5֦5���hMf;C���t�X�
.�Z75T"ڛ��3wb;=s|xJ]j��~w���5]Ka��[2�4uI�Y�BU�Lf%ރ؈">z��_����a���P�eq�`-L�[%O�p��w�a�PNG\�x��}���h��Ϝ��+/cMM��e|t�Z����þI�Z�I\�%%B,���Z��l�p��.G''���f�������;�Z�J��=f<.�.��5j��v���v"XR���{l����6w��9�Q�1��N9�cg u��>[�kE4^Rc8�ܺ���hL���q����Z/ѻ4R���!�u�Y`!�����`#0��d��>U0ENU�8g���`ue�z	Im�$�����
j�b3�n���x�s��i�䈱q_Z�������C�p-���M���t�ܷ�ڐf�kDu�%�>9&�X-iBd��
�&)�F��#�E!0���;� ��	@f,V#v�T�:���ɝCNv�fS�~kk+�\ھD�k�h�	*��A���������S�'	(~��|�TP~�����{�������-/,BP���Rlrn3`���v�V�X���{�*���d;�s3!���V��ш�����[�~���U�EF�������CUW̦�XiGayB���Z�Y�*.ʸ$�c=���4��s���Kי5`]�oj:���}?��{Y�)���p��+�z���aks�K;�X'�a�0Y�����\����>9���E��"�M
����0��ʀ`O*n��c2������7���X!7��:j��E#�c>s6I�i��%��l��۷���Te������6
ب��i�
h�9j~��pig���v��G�����$F��D���7�D�9pp0fw���zVF���W.��Q�؀CɌM
]���}K���~[�fa�����A
��(g����}NGc���D�㭍
�6ֱ.b?l2�Bu�X�zO�d9��a��X�Ѕ���@n��x
���֕@�4�[�#��_��1�1򺷮��dZQ�g`C't�ŗ����ɘ^^���˥�K�l���B���4����}Cտ늆��ɯ��#�����?����<���{�f�)���v���	\H"�J��	�&��Q��X�����|i�a?O��^�Z����H�B�:��06�){�G��k,�X�VW��ؠWX�g���$$׈���Ng�&�9����@���Z+D#c"���T^x��'��6����d�$�+��=���>�1|p��Y����L'�B=��;�z����1�:[ %v(�\�/�D����G�G4u���7Yƥ�m++T(HC����Snݺz��"t�=|�*�k��
�:��(~r���PЄ�*8<:����Lg�e�ʒ^��C=��z|}g�!ٽ}���>�e(J<�<����f8��1�|H����e�`b�	�j(g��w���1�X0����X���/St���1��H�"PA�T����[����.�'K?'f��-���	�޼���pyAP���\����� �qF 
��w1I�{�B������P�9�.��iK��h�}�&j0)��`���t�n��uo�,(f:�Uc�Pё@�az<f��
�'g�aTp�q�҃lo�ń��]6�>����
��y��?������?��#���?�gh���3��O��vqĩ�?��\�PC�<MS�~�`k}������
M�cP�I�&s�]h (�&u-��rxrL@�t:�z��>�+=�Y�g.ڈ���Bt�k�,����]��E`Kj'��f �Ċ9sB����Wwy��k�S���^d|�#��~��E��K#��u3��.���;�z�K;kX��@r_� �B��'�"���4px|�dZ�ְX��݂KW����#�CM�+��F���1��dy�ˠ7���0tc"���6�_��a>Si���u(�l`<�8<8D���v�MC�?���W�t������go� JL�5�ill���mE}c��H,}�jZ ]��g�ڭj(+������DcR5+�������
�T
��!��
����m�b1K?/,��I����v�d4fwo����^�d4M��d>ʪL�����Lܠ>C}A�Uc�}4��Q��[F��v� �b�O&�dd⢲���%�ǹ��N��������5�,if����Y����tF��"*�F���am���ap6_`)�k |��X���x��*����0p?��3�	<��_������uM�Ӿ�DJ��|�]��$�ʼ�iL�y�	4ƃ
���j��.�Ʋ��Io�L �#�`j���6@�Q㩴�Ԉ�nO��R�).�(J���Ձ� )�c��ƺ,�@P�l�鬦	�!��&��S_YSoY�-�=�-����[�Oy���=8�V���0��V����<r���pt����k���uà����ʠg0�d�U�o��j�����
�$�
�u��d�����l�CX���1d��\A�1������O�f�	3:և+�ln���5�U`<b��F@9���0���!h3�#��rrz�l<!S%7B��6��27W�L<{���'5YV�l2f�ﰞ�&����l����A�(�k�z��f�P��x�)�	l�
�t�Wt
�4�]�_�%�)�]9����Pl�eM��W�\-P��)m�݃3�Ǩ8��C�8.
�X��/��Q�Ƒ̇bE�sc�n0��SrE��\�K\��E�-��4��������|�&�l��s7���� ���c2!��ʺ&ϻ��C��N����͠@1^if
���x=7j9�{�uo�~�]�[��_�W>�x��=���y���g-�1�U�:FZ�����3��4OD~h2P����Р��@,��g�u��3$�d�R75�J�������	�/d����6g��ʄ&���f�zC�Ź��/�ʵ믑u���stv�6�\�����"�ˡ[xT�8��xV�tBUW:�t]Ck��S��걡4G���
b���h��ͧ��+_��YIe��=�r��?�q>��mr�c�����	�����U�l<ȕ�U2�B�,,�\l\|CSa��z�j,��%�t�q��w�q6'3����:��]����o�����uB3�R19ڥ(���l�o�5L	�y P�x��0kQ\Rʫ:��+f���Q��a�k�oR����n2a�S�^t��~�<��i���kc����rt�CW�ypg3v�m��(�<�>E��S��b:L�
��<�rx|;ױ��ъf:��ƀG/���y�L����A$��R���K��x��Y�h� f�r��FH^-���wJ����w�ۛ�)ֱ��T������=��P)��(2�f�4
P?���%u$��=���[���[�	A,A�����A����FX�N	�]�]w�z:��j��"��r��x��!��g(��d��ʣ�<���*�BO�&(�tB]W�~���������
��Q�'� ������K ����U��?�{��,��f"�ֿ�W8,̢��d���X�J��r:�!Õ��x"��Q�
��$�p4R��hD8���ј��	��ѣ&˅�`����$.d�^�1\���h�o�:8|���f4bbB��([a^�y�����_���o?���&��LE ��{��z������lZ�{{���	�YL3�������َq�%zV���b�E���r �!��Ӛ��	
9���uC�(�\]c�퐙�u������3F�q�Lɲ��:��*�,�E"�ӄ��h��c;�Zj2�1̀�I��ш٬N��������������7-���qU"�⣖[�\�z��j7"���ۧ�o0X���>��C�9�Y�
�nL9O���a6;��q��t���H�(�d�Y�����
q�^.P�z��f�����h�q���	7T���1�U�����ε�x���iSH	?TL^Rm,&'U�o��-�n^������0O*昃��4�g�t��tٟH��11ɳJ�����	���F
�CQt�z���J��Bn
��>h�6e�9��X^���#}��C X�����/��ho��%Z�c��'?��d�?A3�O�.	�<䷽H��؞s�ä�"�N2:����l��Uf�R�$e���c���%��Y
�ᙲw0�ttF�UU#�.]bcck#�ڈ�w��آ�Y(=��f��J��c�}�P�Y`����ŷ��n�|����3/0�=�u!0��C�|�c8�"��%/��ǣ	��s����%��
�A�@�!�,v6}H�M�R'��R���ڝ	����	�1�L���q���U\��%�F%wOW��C�뭱u��6s��j�|)8��h��Q��up4*ӡIB1�n쎹v��qI��0����^fc�����M�˯��+7^�l6��S|�x��6.�`ra�^��6���K�I2�A��8�[��'ʵ�N�?�ј�
z��67�$e� �E�Ȅ?om���|&���Y-ܸ]rxxL�Ą�nj2gy�}���P˂���"&E�ޅsE<]��'!&=��_
���u���y���mv�m;������.�.~]|�`���v� �gS�N�5�ͺ�rlؼO��P�&���YЌ�ԉ��<X�U��u����H��ܮ��O���
���ۢ�}�H7}�S����$�~2s�J�U��J!̫�O�B2���D�;h��*�ڌNw@�3D
���d��U�b��%�=Q�D[�ۨ�l\!6gm����r6e��[[[X�&�X�C�b��<����q�x,���|!H�VWQf�k�F
�IO�x�׿�,�'cz���-x��+|�ß����Y`\���Wo�aV+b;���o�q�=�ސ)@��`߁!��R%,
u�����r<�������'�ء8+�<2����(�@�0����Sn�R���e��
��n㭡$���Yj��(��F��`4���p���l��L'�if�n���۬l8Q¬�p��+���C3�7cs6._am{���(X�B�.��q1�s��V��[(븯2�"�����LJ�F,��;l\�!/�@-��bm�ٸ7%��0�/��r7o�sxxH:��������#�+���?�M��zX�BF.�H�)mJ|8�m0WH@YsטC����\���j=�P�����Lc�`���A���F3l������]�}逍�،���T
i��{n�/� �{5��_q}�������=]29�� ��3�[�c���G��t��/T���]�{���c%[q�ҡQ�D��H[ZX�ԍr���zn@aj�YI�Ҳ+ђմmà���0-=X���k�q{�Fy�G5+�+Wv��D���yN��ř���<G�a�蔧���l<`�(C�mJd>��K�ڞ�T��`�<_���\���+z�!'gcV~�?�{�����kR���	�ǧ 6�B�����g�N��$V�9�@5�ck�%�;<eY���.�:v*�y�'�.�P{Ϭ�鯮���F��B��X�[��P{��:�JUn���gV�ZU2j>����T�Ti���1��p1LK�?(y��.�S� K0�ް���
yG�p��{��̚@e�
B�qCN*�yqBhJ2�Lh����h�F�"b	&c4��q�V����O���	��^ϱ����� �'��f�V2��1q��&% w_B�jb,�C��H�<88`49K��e6���1O�tH���~f�'sBᄪlҘ�}}�{1���:��'��"�_����i1���8L+��2�
-#��cߚA�H�<>)�:f!�[�����	���d� x/<��5��mG��qV~����ŚH�m3bo,�K�ׂ�s��n�T�d}����f?������m�{��oNn������K=���{�p�e�^I@ @N��c��'�V�7�؈8<>�k�x�7n��#�fLf��}E��]B�7:[�º[t9:;㥗_������z6c�����Ơ�"�0h�*�!�>&�)N�����/�3��1t��O�"�����~g�<��dY���x��k�Nk����M��Nx�#�G~�Q������5���R�%C��p�W��Mn���L������n�Ŋ$�"E��������ؼ���)/�r�F��A�
���
V�3��91-=w��Oc��B���S���g�}{��	�c���Ф�ߢ�A4f]��bA��*x��3vww�=<Ř,�u�acc��j?��4z��sxtH����͔ٴ��|�ߠ�,�)1�M�	�Ր��yK@��F3Φ
H������'<��5j��p�e�S�v.1v�BB�א:@5�����o"�&�Lh�ru8<<��M0(u5�}ʺ��_�Ͻ�
Fh��������lB�ec�(�&�iLB��d�t)��׊~>n2�ٿ�k<�
g���}Y��q/%@���o^Φ0Tz��;����2d�c1�O�x�XX67�?��5���l)�F'�BQm'�B���yw/�b��T���|�3��m����Dy����ة��g�=��U��~��v��RY��nc��-h�@��[�F�����<�"O==�Sb��#�-�	2o�F:S�}l��N��{��6��faV��-�vq���Wd� 1X
QjX�Nf�����#��a�)���C}R/��:2�������i���{r+���������G�ÏtX�D5=U8�?���넦ƐǙ���&L���ݿCYNh�	�Q8�6
uӠ&
)
N ��j:�>Y���d<��ŀ�+4T��tx��6��b0���GGX��.�i^�J�K/�ȭ/�S3�4��өoP�P��~K8k<�
�M0�½�I��2�jL�k�r�2k+����'ܹu���n�'3=fZ�k�ޝ��g��)��Ȭ%I=b�(����U���Y]�4����rtrJ���M�aks�+;��YQ2�@t��fY���w�Hۘ��EF��٘��;)�4���TU�K/����=����\�z6��3K9���ȴ&@�~��Jo�T���VZ�41Y'�剓�I��ҿ w~����y�r`�#�%�D��ZO��קќYm�`"3�XG�G�_{�iV�9��G����ȭRUJ�:�$�0A4��$��TT/�����ߟ���U~�s��Hs?��]��<�R��_��?N>�ձ�����X���@�YB��_!�P��S{e2��2��b5�Ŋ�>��X
BD6c�NeS�.���[M����ְG�$Y��Kf-þ���ӊ��L���	�
u�`�C�%HZ�p�RJֳ�RN����_8lf)�#2�������}��N�ԭ`�Gg�ݼ��	��5Yg@��x������W*��k|Y�2���Y'���!⨚�f4!o"ͫ����	���Aƃ��Y[�� N���5�7ts�hz����s�FGh�p&~�&:d���$�_��1��2�CS7_3�u�&09=ec����Y��(��tƝ�����KXud�;+�C9.��crl�p6[�0��K�Mbk�݂٬��Q����"×S�gG����Ð!����t���( \���\6p|tĝ[7��)�џ���.����<s���2[�!4�'#�vH�?�6���S�^.6�CzYp�E���E�7G�����H��y7*-��������R��W�fS��C��qE��w4��xM��B��#^��w����?����o�^�M�]#I�Re�>���\|y��)A\��X4���Z�������ӿ��_TP����l�ǰ�T��n�g�G�$�`�D���w�JK^���s�N�QSƙ`
�h2EQ��$@"5c�\UM�TS2R+�ٌ>���m��V�z���Ahrak�O��Ƿ)2�PB�bm�5�2��8�l *6���Vit�S:�#�S2���������������dFȭ�,���.���j�1��*B�m4z(:pV�M\�sW`rKSW�%sc�.>V�p֒��_��Ʉ���k9�l�(�ܾ~��;7����
W�qY�K�
)��g�`@ո/bk7��Y+�!��iSS�c�i���t�;+]V!S%S�<s|g���UU�����2�V��&:y��j^?����m&TzF��p� ����n����6��]GG���Ȓ�M;���L�@�-#~2��s|�O9G�=�,&��]�51��I#�0.G�%E¶���M v��|lq=ч#j{��H%i$���ġ&bAH�Pm�,��-� ��A�9E>���3��q�d}p=�jFY�dN���#7=��)/]�M��<���6b��Ǿ�jt0���e��e7I97�\�g��]j��m���:�W��Өu��KoަΟ	���8���zW��?��ƭ�74e�h��ߢ1L`q+�s5����G��倏5�hRF� )�I�#�F
&�,��;�}��7�`�=f嘲Y���?p���a��
�(�BF&���xxg�ٸ���F��&��4��if�D�� /��8�tň�+:�K&'[~�c��|�K+����� ��2>����QN���Bw��hV1�b��~�Ð�B\D��ơI�������н�jY�g��<��J��G�h�'�_��^��NqJ�g���dLʚ�V�n^���>�c�1K{K�8���
mX)24� ��s���?���j/�k��*Ƈgغag}�0t��� ��Wұ�n���^G0�^�l)4*GC���	�J�4������*�7s��8׍�R��?�b���'�HO!��fkbB3����F�j2G�B����䅢�B��l�)���`��q+,I���>���uxju4�`υ�$&>�,#�s�*e9��k�ì����
�e�U�hVQVM��2	*�^��1K�?B�q�f����i���i�b��"���Y=��K:Y�<7��?�W?��&��?Ç^c�P����7kEf$2,�^�Q�||�V/]J	d�ݦ�2�B4�R�{�T-����Q����+.�g�4�g�����9�ٷ�ύ{�F�'~��S���#�������I��Ǐ�.V1���
6�N�J�MLD- n��ƁE��74�!� �`L��
ց��x����yN 7HŤ�0�r.m��3?�|�#3Ԛ���>^�"������T!ņ6�Y�jM��Xm��ұ
z�C|�}�����z%�����!���Y�`u��;���F��Ӊҵ&Z�&d��J��G$ʟZ
�Dj�����΀3��P8�G��0ﹺA�B�P��YǏ�#\��'g4���EI��K����dĈ��}!�`<Pc��%�ir��T�U
�h�)�+���ݔ��˸��Ï���?�����t�?��uH������R-g�`J�9�K�!؅{�/)��<��j���d��`�Ɓ݉��7ϗ��,���"s<�ȃ������G�d�>��u�L��Ťz��	���B�f������;۹�"��!(Y���3�MQ�,/Ȳ� ��d�|A-}lQ��w���{����f�y��j<gS,2OK0>%CQ	1xeWZeBe�Ahm���
�ܑ�����;�^d}u
�#�n�6�4К�o�M���Y��f�yi;A�y�<�瀆���w�V���LrC=�զ�����o[a;���qyJ��c��S����|�51��6?�@Y��D~2/���hҋ�7I`Ԡ�LB�~߼})1�*x5�WhT}�3�������b�Q�
��/,�}h���Z\ MTô����i��1���Ǫ)Hai��m������Z?gs5'3�xO3�2��Z�O~�C<���4��{A�Ӊ#d�(~��$N�bVQ��6�$�Y�����qEІ�A�V�C')��а�2�~��L�#����F��щ.w&��!�!m/2�W�0 �s�9$�Ǌ� F�u�����n��Qa�V/m���磟�� �.$�_���l��'������F�u1
��:K��x�	2�]����_8V9ݬ]�ͼ�E�'
+�������ؗ���W�|����G�R��C��j$v�,sƃm����Zy~�R�I��׹�U���$J �*.7`u�Є8��Yt�
�R�q���v�+_1���S5u��Z�o�Fu�L�JJp�`~babP�4�k=mV�<�f�t	RScק�^�y�o�����+�����7��D/q?���_�ȅb_��D�m՜u��z�N��_�M������i�
 /�����g������y��$	��`��4"�.|���;��T�e:��}� 6&�	,b}

!(u��vs^�v�����c��J'�F
�3
_��_0����/�=���n��K{�g�4O����=��pF#��(k+��gm����a�yA���SL��|�2,D����
4��a@�HX��ȰNX]ɒ�b<j��e�wX�sǎz�x}�TY�(d�$,$��g0V��ZgC�F���,羻|����:�y�]~5s��cd�Y��z�ɛ��/�Re(�畹��3F��l~��tl��>�XΙ�=�w��T~�|�7�%-p��sT,T�Ʃ��?�_���|�ݽ�$#�L�U	�T�.L+�2�4�_�.h�S�� �+���8�r�4X0=�m8�U�z��/|�I��Ώ�{t���V}��\�I�����[��^������W?�vn��3 ����)����_�_���9q�?���1?�� �/=:�Do����L���.�j4-�8�/M�1���fA��1	�iM�l����?�C���}��}�.�whT��HX0�5�2W�Z��gi�MmuI
�:G1G�Z���c;޹��45�V��@�A5��IFBB�|Z�5�,���]���$�:�C�|>i�|��|v��1M WĠ�hl�����H�Il��&mzQI���V8f!Ek�I��R��:Rɜ�:�i��M�Z����tP�%x(�
2'#r7�+�%��o��������:k��n�5ր11�Q�8�o:��|Bv��Y���:�(>IE;?s��Ui��%��tm̻�g��E⚒VM1ɉ\����A�QJ�
�I�>nT�Ηw��_��x���
�Y�&ú��� �{�|����w�zN!��P������{tz��y�|�Uƣc�Zj>��s��]�%��w�;`
�f�+���o���;' �Hd��GKC�5c\/���G	l��t���;���
h3}��ZD�,٤HK1+i��RK�׆٬"3&U��뫼p�y���O�S?�ֆ=�V\�ٶ�-���a҉ ��*X�KY��Q�Z�LtN�.��y~�Gh���@����=�R��0����j��R+�|�~&+��0e��l�FŶdkӨFT"K���(���BJ@ܼ��(K��h+����DzeD��&�H�ؘ^ߠA1�c�
$S�ym?�Y�d{�]m�k���E+�)b2��H�3B4;�ƾ���3��c2��	8�cH��Hi�i�@��HZ`���h� v��Ѻڶ�%��!��(���G�GR,L���?:aw��}�:O���\{u�zV�:Q!ҙ�,s`\�`�\`(��e1`I�Z���Cҹi�AMhȍ�IN05b��5y��s:�͓ϽJ~�Y����O�#�v�9
�M@�R2��w���흛 ��](G����˻��w�y��N؞xB��/Z�O>~�>�gN%��i�'AT�>y��ܻ����sPO�x��4��%���c\�����E�v���$3󠞠Q�D��D)Ք!�����2���q�5O�i|E��gke� �HM�Qq��
kj�(�H�~@0[�F�OC�Y��&�*�g¼���)2�I48�%:�S��@|�C|]K��(�bEb�#�����}?��%|[����6��7Z�(���N��'�B��x�D%�4��a��H��1!0���Ŵ	����DIC�Ǡ'C�n9�,��:��]�<��R���$&;)�\��?�H�XŤD-�6)3FO
y��;.󑀈,n$����t�M<NU���O�w��E�0����}���2�g�����-�~�OԦ�q8S`$�M,��8�r{���|�)�x�|᷿������� ���a]i�~�QA��h=��S�BX��/�CRUB��\��.	8e�q�}j%O�0x?������+l�m��
��9�s~���s�Erv��`�|�I�$`p��T��K�|���l�:�8ב4�B��Z\&��3L��V��|�=>���������O�wB,y�џ���)���ÿ����J���3/�B�x �)0����h)O��d��Z�QM���n�K �VL҅)mB!�r4���Q�L��]P"�ut�]J?��d���;�Gg������ d���+D�XI��?�f�>y�7I��I7?�'i�GY����Q�ѫǫ�(-v��nqg��U5����b7@�;5B��w	�Ֆ��S,��M�nhq��0�l�,��Q�����MLr$��^\(�������0Dm��w�EE�&j��#J�zMۆA�!��YbF
(j��=5L2Kr�yhϤ�j��bӶD����Xi4M�C�,&@j��	�y���7�I�J�O&��5D����Ԅ@sP7g,H���Ҿj��ֹQ\j��`npool��Q���Z�!�p2�g_<෾�5~�7�/��Jl�B���6�{C���8�F�.1q��/Y�K�܉i�2�J��OV[�)8ci��nBT<4��	T�G�2�9��4P�3&�3���t�=z����tm�P-��.y�.�� lf��Z���/|b�/�����O ��$ �ߠ��S����"������$ BD��
1,e������` �s
�˵��}�(�ML���	!j����C]�F�;9������<����;!�+�WY[u�zw��r�Q�i��j�/}�6�;8
x
44�$ʹ�8lg�>-�)v�P�����6sg�6�ʹE�� ��Հ$䢴a?1L�1ϱOmNf�[+��4u���q��,�5��֦
��Ȣ�Z�z���I��M4x�X�27��9���)ОE�GX:	�h̜:�V�m��ԔB��$�i)���9��+��q50�73\z�75��m����;�o`��x�]�tQAK��b�4h.���D���40i�[��=u������>�%�y�&US�_��-V9;�1���2������k]H�"�DJL�#�_��]�6����b��UUQ75F��C :Y�oJ2k��>g�)7o���� ks�׷X[-�F��Z�PM0�s�M�	��XBJ�=&�kW��/�I	@ ۡ�B��3�b3�~�����_�&;�����)��������~��}�ϼj��c�(�^�_��
0���%;���FR%��AY��d��|32�Ho���r�ы���r�qQ;:�:gV&c���G�%��YA�_���S5�	����h JK&��&8h�ye)�2k�y~t\ɢ�O�h��Ϻ���u7E�ZFD��X��I�e�m���$�bR�``���������4v8�a��t,���K�MV�.����ߖBv����\�-&D�lѦI�͋V���9���-��Ȣ
^vz[��E�/#m<�)�>�����{�.��m�~>��Ij7�8�	�k��_w�����~)9�4n��� ��:x���f3Q�	�����x�K�����kO��k�f:$>@�VUB�/�`��(���$6�sM�0=-�g~1���8w	e�]${�l�O����9����Al��Ɍ��X~�
+�H{mB�..Ê�)~6�X�����ڞG쉟'6i����^��O� ���Al�N]
�r�S�Fo�C�O@��O5��ƿ����wR��� ,F�?������?�/}D�����	��RC��F�U��yQ��-���� �*�sD��Ve�%1YT{$s+k㌽�=���ـ,�4�l\�wx���S��诬P�c��hb�4ۗTE�Ř
���I���,J�R������sU���x����F[�-��.<v�2_����6�p��3z,��\�ö�nA���my_��߷�u�~q�?�/�����{h�N����[�ᛌ����|����v����1	h�0M�V��H���6�\¤4���J�1g��C>�~��z�N��o�ⷿ���y��=N&�V��Q�e�5l6�qh�wRpn�ϭz�0E�s~ݸ0(a^�������1�����4�
\�eZz�N��t�k7����ݳ
&\;���D݋��(��I� ��j� <��nL.L�c�I��% ��V���U_>١�w���w=���|��	��=	�E��/�͗��k�m����{�?$	�b��ݞ
>`��(
2����%pzz�+�����!�Y@����2�:rci<T��Y�3�Z5�ێG.��
����:�����V����˿�z��7�;��^��EZyӎ�Rf������|O/.o�/��5%ajX��_ �s�&Ψx��x��x�F��
�1�O�ۇ3>�;O�k��]����xm���c�>Y��JFY7q�d����(/��$�����1u�$������ͩ�r���E1`gk�A��$PV��;�q�r;P��5��� 3
���Ry��;|�[�1�)�i�'���	#�sHE@cƂՠӟ?�g����鏅wں�ԉ�w~�/����_��@���G�Vv?4���2�D�$sHj��UI�BU��'��������������Q�nv��xe���(8�ᬉ��@�@��5KצJj��Z1���,/���F���;%s}݇��[R���d)q���PΛ4
�!�Q�ј��`1���1k��uJ&���AɓO_���_�K_��^�ͤ�� ��" �:�NN��|���XD��
q�5I-R2�K�L�?>����݌a'�'>�;k�`�RC��\	�5�Y:*z�TX�9
�;�s:뛎�\�����/�����] �'>����\����W�����+?����a���[�I@:�i�$���ѡ��(:��]������8���%���t3��PS6M؉mZ�H����@�c�L�.���^M/�C���u�7�oM��9��Ű&���7ь&�E"�QO����\nPc8��S/���������=ŵ�L+KV���a�>U��eC��yd�x�]׸�r
l|)�Y�����i��
���1��yg@�?���(�8R�A���,A/�I�"�����菱�\�:��hG oF�M���|�B3��������9�xg�wv p�?�9W����{������x���O ޺���ؘ��Os<A��f�,�6�.�0�j��p���Φ��������V�<ɯX��uNY\�����ݮd� ��������"9}�cxWb���E�u�\%)[Y�j��6� �_ye���w��Jy�Nɗ��*��׿�o|�K<��-�&J
���
6���Rց��e�JBзUh�'�����M�\b):]N�F�2�L1Ʊ����0������㘳渥�[0��JN��2% �z�Qi�UJ $�N޴ 
b��~��������W�qs��흯����x>�i�}�����}Rl��*|�L��o����T�;kc#^P!x!���X�c���?����q�$<u����^��O��x��
;+z�$yTe�kJ�
Y�;]Br��cw/�K�~-��~���%|�߹+���U/m��C����*$#�#mJ1�8R���M�|�[<��5^}�#�vȺC2�q�!×�W�Y�^Ǡu�Q�1�~���%�o���'4
A#���sW�2���_`eu���{X-���Ƙ$�ܾ_xO�4�̈́��#��_�9�vl;*A�O��ɯ��#z��ǎ�	���S���9��ǎ"`%��}<�[��*��DEB��C�iA �iU�ڐ�.Y� j�Δ��_�Wop{�z�U>�#�����Z/ւ����7
}��Zu��qn��j�%�r�p�~�|{�w�
&wM��hM�&�ӦM�u�!�&;m�x�����+|�w�η��,�I�u��%�f�8�]�uxEv��ܐ9A��{BQb���[⓴s@�����xA*�W��\��숧��F��c���>�ڪŊ��e+�K����2W��úT���q�����/��/�����ۻ�P��Ǘ� �p*���h�U�o��-J�Fa������,�9�s�YM�x��TK�(�2�q̪��^|�7n�8�l�K�-��&Q�lB/U$i��,�s $r�&�l߳�q{�t����"_�zcF�P2�MZ���^b�Ĺw�0��3�W����7���������/�r����`�!

9HO�J��8민��5����}�l�~׳�D��3�4�
Eѣ��j���� dy�u���CnܼA�4�mn���B��L�H�^+U��z���������S�3*A]�2ؤ��l���>	�d���0��w���ݗ ���F<@��1���ˌ�߾�k���D=���QX��Fo�|.ø$�|i�qD2����tƝ�cn�9��h̴�`�n�^f"4�x��K��(2��^(�-y�����)$JG�����RV|#M�7�)�ߔzS��>)_瘶�B㗞o9���r�q��	�P��')eC�Pc�0��@#/��Lx��_�����'����I�|���S��l�
�����9A-^Ӝ!���F%���}
�q{����>j�\8���L��\��G]��u����YU2)ǜ�G�ؾ�J'��R�d��8��;�j������O�A�Y�Zj����?X��V}����O���˛{W�O����j�/�ÿQדZ���6�R����y�V�Rιԉ�����e�y_ի"�6G�Ru�W�W#N�#&/��{p�˯^����Ǐ�����G6Xt�]F�b�R�ШǪ'7+������HG�ب�/fn�,�+����B� %4��o�����W8gk0h�Z=>	DEOaꅓ1W\�v�׿�_��Sܼ���+e��v����:$�)2��@tI�2�ѕ(�\���]~�@���		�g�^�U���(s,<�d=\n9W|��/���`8��>t��B�|��^�ΒoIfZI��%�7���XUձ��c�_��G�x�nzwl������)����$��?�y���,ڗ�/�ނ4 ���$9ښ~�z�Kx�`UVr�ͩ89��w���1��1'�*Y�Y�,��F�����E�gɸ$ZG�1Q9-6	޺S�~��վ�$wT��	�fA��u�b��XUP1щO{��c�����=��|�)���3�zㄪɱ�5*��fM�8B��V1��bɎ�MB�ɛ.
�&\�-RI^%�LmGC�X�L���7�F^G�S�+<teH�!��*�2�$ �`��Ly�ڝ4�4�*�dS�� �����ƿ���������7]#��8������>��7���9�O~���o���}ι���yf�2�ɒ��Dg5_�b��"�wV7�&S�N�y�6G�g����y%�v�Gf�8f(�*P��N���5VTJL
�E�Y���7�p?x+�Gy�C؂Ăj4%
�}4�1&���
A�eUFUC�q�\+��<�vg|�k���/~����W���=�˯p6��ۣ�<��!�%�`�����Y6X��^V����zg�(*�K��H�lS�>�tX��x����񌣣C2q�����e�{)AIm�D��bh4���& a��N 4x)�.�N���?����i���N `	�羚���פ��h�:�������/6� �K����w��,,J
@�F1k)�]�nE�Lg�p��>�ݸ���}��f��H^`�!��mn0ЫD!�:z��AQ#X���f������oj��~�V& ��^x�u���r�al2�j
4��x�\�2K������k����^�_z��[_��|��_����7��Qt������'#����ª{�ݑ*jYf���'7o� �5��${A���P����Ɏu�r�����7�ӣ}f�	[�[l�w��&����+Рx�����w��S�2���O 4x�z6ԓ���_��|������F6������Y�O΍������/���b��������q�e�$��l�k[�R3���z4ʈ�݌jZ2-g��!��	*]�����;aw�Wo��s����/��=ʇ>�^���e.oX����"�t�[���z�M�ջ�E81D�S�-I�.��E��D�!�O��\����
 � �i��NƁk7���3/��S/�µ���;���b:t{[l�
�ij�lZa��99?���E�/N��ph��S�*s_e�Vg����0�
��FS�-� >�Πj�a�W��v�&�C�W�Ï��G���Ǳ�V��X"�_�����=�{�[X��.6�Y J�w����7ʧ����
���u��+���o��.M Z?oE�$[bZ'��ne�bTHO+�P����A���u	��d���Gܸy�׮����	gg5�Q�G�dNȭ VqN��d������k�ʜ{�wW��cu������Qӥ��JL7(��>�XhC���5d.q���O?w����<��o��/=�SϽʵ�'�5�b������Y����J���ڭ۠h��i���I�	�vX¢��Ӣ��: $?��ǣ�5@D��X�u&҄��P54Mr�Ԛrz���1U������V+0����
���+�y�[q��K"è=	�x@c��o�?9�g�9>���'~6�[��wyK<����٣��8�H}��������ےKBZ����<	0K������z��@�S���M��^���
�K��P�Y���ãn����k7�WhS3���-�ӑ�'�R��%j�/�2o���i���z�'���'�+6����8C��d�x�����K_}����W������}�Ó�J;(=pk��eR�Lf5M���qE����+�ɰ&� s U�尟'���,{#- P��[_Jd�.8W�\�"%�&�@�Oz�>@�#ch�utr�����)�����Q��@�k�#L*�WnG/�RQ�O �l�)y�	�xq�
M�7�����ʻ��C� � ������}��U�u�
��]���ۛ� ,@W�vѵi�/��$ׯ8烠>��5z	`"�ع��ԍR{�	q�/&ù.��ɤf������k�^a���ieR � �L�ȒPP+),���4ocD?1��
$K�����毳�~�	�����]v.�BW����G���1X���3�=��i�d�alMA��L�9��k���o>�~�����z�'���+��9U��:�|y��QyC$�P�#�Z���'�W�e�Q	����j�y'�{y#=��� Km��	h��h�Xkp��}@8���QBtr��q�*g�'`m���%67spqXb�0*�@�3� 5����@���Z���L~������/g��O5��u��ׂ�Ͼ����oK>�3��>3�M^��1��� ]��f��K����ul�W��FQU8.��İP�@^���rL���SP���1�n�s��/�����n���COj��S�8�%�JUE� u�#"�P��
5���0&��c�Q�D/ո؇f�Z�����{��)炰�oO;�\<�ޖP�d
kC��Ӛ�YzN��!,~��k��=�y	V]4U�`;%
t����@����B�1�RP�I	O�"A�	��i|���Bd��CE�TTM�'��ݞ B-�I)�>nx��_}����o���u~�s��w��2/ݩ83� �*�iL<�j5x,u��eXkS�;�}��Z���DQ���k&&�&�bZ��r�_ R�mIE���m��V1s�ֵ��b�
�4e�pvv�x:B-�!++� 3�!�t���>�,�Y@MάX�:�w/&��Hh�Xɴ:���/��������a��n^ܞ�نO}֎�����_���K�Q��}P����E^�_�\A�[�M/V�
M� �e1p��b��1���ŠD��0Ag,�aNS�����Wwo�gn�>|����?�A>��Gx��
.o�YXz����x���)�<����8��BT6�b��y2#�HT���B!�A=\����l�^������?�{��b��e�ý,W������|�wA⌷# ��}��Bxac�X��bꦢQ%�󤉟�(��4Dj_�>� `
#�
��'
����٫x��<��k�r�&�v8M�
�铭��M�h��>��LR�+yB�G�[����(�(q��]M��a�Q�˅4ο}{?�z�0��O�Y>6����Qڤ��kǤ��KVX����O|���c��O��5`�XCi�Y�ՓC�0&�w�EĿ�z��a��#Tx�òn�p���,��ϸ�W��?�>�7����L���U���w�Ʌy��%�v���m?ƛ"d.�ڨ��-P�*prr��;wx�~뀽�{fMl��̡VhD(�8��!&Cl��÷t'���Cf]�.���@kh�JaYv"L	�|��5"�q�ݣ!̲����wzn�o��ĥ�ZȒ�iG7�/Q:���v���]�,N�d��C$�}dbң��!}���l��u�D]x1�C���Q�G�..�b\N������^=�ٗ���7����:_����׾��Ͼƭ�13�a�U:�M����L�Ea�t���,!��F���r���ص�:��'����_wy=�m
X�&�A�F�N'������1�X����J���?��_y��,��c]�5���i��zVC��mN�����{g�����Y�+��|Z���?��2K�����$o��ۻ�#!4JT[�]�
Hh�dTO�p���n��+_�;Cy�*�}�!���\����K]6W2���\�
� 3Bn#S�ѐڸ:og��!QE�Q�$ut�;obp�rZ`�Q��۪c������ĊRh sn9�%��{-�\����>���{���GE�3��# YJ<4D�=%26��\��ཧ��r\��1G6Zԋ���8�0�6����=��<��u������	��g�g��4��b�Y�C�cZ+�z��cM���!|�<�oK�J�1j��!Ϻ�t99��sי;@���>I�F�t:뜍Ψ|�g@ܢ�t��р�D�z�>6����O}���c��iw���?�������'=�_�{4z�O�=}ì�� 8��F�L -Ѻ$��J'%g�\�s��/]ggk���
~�*^��=W׹�9�S��!s���&1D0b��֚dO��C��Po��m�0�D c�fwՍ����y��x���[N ����B�q�!�s�O9�r����=��9����>���4

qfnŶh
@i���
�A]O���� *��A�;)��w��ɘ۷��q�7n�r{�������4>|O���=\�e�0�M�|C�	�\즭���Y׮�*T����XK���CU�x��k���Wپt��p���Q�xR�Ƥѐ$-��V��o�\�,����[{�s���<��@����������<����G��H,AQy9����juaȣ�]��p ;3!����%���*#Vp��f��L?�㜽W>�s�=������{fzz����>���>g��z#ĉ��o�>�K�؉�vr��j�'n���x7�E`/a���]Z��LA��c/U�08�hP�Lt<�Sz�'-�s����Nt�LO�����x�?��+.��K�}W^y)339��
��~����WUГ�3��cL}�[��\�	��P�u��K�#��垵O�x�*�\ݲs�xQ�S��!
�Xv�+81�nWʝb�	*U�|M���ᝣ���*;��aLB��_������O������c�/�8z�y�{�8K=� H�̷�����I�ʥ�K��8�F�`LЯU�8�]� g5u��pfp�p*�� 
Z�29�i9(�K;�4�N����������_����3�����LNST�+��T�����=��k�_# �%o�؏�l�и�Xb$`��a��S�z(RKQ��)JIY��h �B��A#ŠO(K%S�go;rե{����k_�5W_��W��+.�K'�h'�w�N��Tu.&
Չ�v�֍��8�,-\�B8�T�h]�4?O�m��(Cvr>.ȵDPGJ	1�_k3�ZS���I��a
�t�Z���}S����.Y"
�A�7pr!r��<G�;�3��o��4�7Ñ���}����t�E��Z�Y�Vg���i�K�q-TS.zQ&��em�&���' ŹѳY7��@Q�xZ>#��%2)���yai�$�n��{�r�K�����o�5�KT2\��[-��e��lQA�N�e����w�h�o ��9�b����3��}H��P�B66ۜ �k!YQ(BAY���K�Y�����wx'8����EbbA^,�.�h����{vOqՕ�'����.�%�^I;�m��d����� � ����%���ߞ�ѐ�u0�B���
������%ú��j��*t�:�|S�D��
Z[U%,��Ga�Z�|,CJ��r���<�Q����<���L��)5s��O.qr��3G�s��<��G�w�g�>��/0����R�n����߅sm�O�R;�j䝧JYF�o�}V�(e�
�� �PVMlV�F 6� Ĩx����X�����ig��N�� ����4�{�9�<Y�E��cFz�.�;�>
��ε{����/sρ���S���؄P����>~�d��iًU���϶% �G�y�bI1�i�|�(à�.�	���@���p�3�wi���}�b@(2�LN��.ٽ��~�5욙����r�UWrՕ�r�e3��զ�rtr��Jw��԰D�꿻ʔ^�a���I�z�Кd�p-z�����]�Ժ`SD
�k��6��tqq�: 2�n�x4��Tm`���Dm�74�ZW[(`��݂��.�=�������9�=�=�O?}��'N�+"�>�A ��8�!.��	J� ��\�=U�!.��K�D"9Nܐ �tŀ7f)Y.�S �8k��c��".e�%(��P
���-N.,Оl�wD�\" uX�j��.��]|��{�5?���|��;�����}%�V]�mF @A���HY&��I����D�#�24��� D���BQP�i�L���"�BA(���K({H,ɜ2���=�a�.�t�]��K���nqɮ	���
�:-ڭ6��t�-Z���!���qj�^���vY������.�$��
tUp��, â<�h�TuK�U��Q���{CG����W*jT������/XX��]��-
���y�9�����;��Ʌ.�]N�/���'��ˉ�R�D2������Q�"�q���HH;� GM���Ҵ�;��#" ufø�o���&�� l�v�b��Q��i�Zx�(��0)MV!�@�V+gPp�b j�{!�!��|*�e����}�=̪cn�� p�7r�{M1u��������=^ ����kl@��x+98�q���8�r�)U/e	ź8�VU�4"�V>��#��b�~�r�MA����he��NΕ��e�����2���
.�d7�w�b�)f�3&;��{�d^p�w8I命g�����)�eY,�,�
�D��9NU�/������DBUV�@���.c*�3(b2����t�����'�x��<Ͽp�g���g����y^8�cq�`�;`q��`P��������&�y�R��{AI��B.	H�@�6�.5����r~�	�-���P]E�T�G6:꺁�KV&��STc�:9T/Ez�QWHkO����>{��S���h�ߞ��㦇=������w�s홻up�LW��" �Z��ajL
��p�U�b˰mQV��[[�W��۩��hJ�N��X���g�]��{������09�afj��{v�{���'�d�n��N+gf���T���t����g��3Z����F�g�85�!s��V��M�+-�I�r������6T�}���^P���R���%�z,-��A9��I��99���/.������XZ�����]��C��J��$�}Q�T�)�ј�c
�~��@݉.0��~-�]m�9!\�¨������& ZuETW��Z7ArU���_� �n��t�*�L"�N]��{3-���o���Ǚ���6WF V{�Y�9�S��>�O	؆�фl��k���@$'�W�eJ�Kjb��A-��y!�J����倲(���I�K���R�{�=�3ӓtZ-z�E�(��6Sm������dz�C�ݦ��e{��ꤖ�y��j�Z-�<'��o4˲l�y�s�/<5<��"5q�1��cL%tCH���,)%1F��d0�3(J���`@�JPp�y�E���qra1����@�"�U2����.K�Arˈ .K\�2d(�gdyF���U�D R��V�"�_Z}�:��zC28� Tm����.ӬճP7����E Fm��:,o]���N �.ߝ�B���;����Yg����H��C�Cw#ۗ ���Q��"ˌ�Z��uÚ��E)ye�NAa�*	�(��Gy��!1@��U�7M�u�y6�е,	�42��=Аj�:�	N�S(���yN���-ڭ�VN������L��9"UY���}�s��=^�6BU;��OQP���k ���	�Ժ���3��PF�_�"uwSM�y.K-w%P
QA<>�ɲ�啯���*~á�9�d�T!)6�,S_��pб���P��ʰ��X�Y�X���$ �@�\�4�I��p,�����S����y��w��O~1�o�H�N  �>_iz�p�T�!:
j��MTE�:�ˈd��q�#��K o��(˂ð7z�=y�����x'I3F��B�U��h%�|,�И�h���"u,W�_Eק��,	!4Z�z�U7��a>����U�_,S!�F,�k��k�*�|{���.~�:�.	o瓯����z�{��,u\���J֞�)�@������<�U�d+E�����\]��9TF�22�7z4�NS$yʾ�=b��9# i�j7LST5s[F%0�
i��OgZϋE�F ��T�P��	���]�ߤ��U�*��+����Oq�<�aG���IrE�l�������O�r���dM�UnUr�,)M-�Ѩh�����2�
�L�1֟�_ꪘR���#�494jE$�0��;���'5�u�D�ܰ�/�J��M����ּ��"�>C���+4�����R,ƑX�Z;��䑎+�˸�� ŎHMM�?�`D�Sp�6H�6�X��غ¤��ڕi�</O��7`$`' ���P�̧�`$�"�5[��9��\�R�y!����9��*��.��]�.c��C�{:S��t]�UÛ�hU!�'stT_��k�Wi����k*�ú=����@�o����fM�ZhkՌg��a���`f*uoDv�sCrB���q�13Iʽ��9x�B�G	��<Y8H54�y���	�JrJSbG��%��2�g��H�(����L��步V��� 
[E @���'��K�S��UZ�S���+�0x</c����7`$`g��c�Lgd*�a7��b����)N<e2�~�UT�'V��(�a�W�\�u�%����vJ��ax��	3j ��{`h�P�P]�4|�u��� "ʲ�9?�[
�ӡ֝�� ���~5YH������,h����D�<Kۤa���;�h�bPB�ܰ���d8�z1$���Ȩ�J$j���5D���0�YNH�T���v��
�U�i\��"�]�a8 K������a��҈����KTJ�we��ǳ�i�F ��cY	`e�`���v�a;ڱM�Ӎ�& HeB�z�K՟^GE^b�Qu��K�x"JQ�I��d:�\��#���ƀ87j�[���c�"2���*+�y!�X�Tu��<F�ۧ�{�1����V�M��ղj��x�F����M��>�	@�KBc�܃�a{�Pe%x��N�K�14���2�Dr���*5��Q�CÔs��O}�*��a��[�if*�" #+O���]u��RZ3)�|����sL����@�T�����{
�ԕaG1+���	Q������
�7������w�W"�+,*�zj�K����[S���1g��V3PYϛ�Lϲ�Vj���Z����.RHk*�r�xN��7pH@k���{!$��zl������7K�n�)8�Qm:	�l��^��kIk&Ӣk���y U����~�?�o�+
k d���\� �Z(�&2-����?g��������ӷ��d��i�h���
F � 0l��E!�<��`�6oCpx�rÁ|�Ȼo����H6q;DAc��b" ������#6F�������'��|��z�|���7��E�Jx��ߥ��a4���j��` � ��!��[NC�����ek�{a��;���䦇���w}�
�_r\��G�do��`0lD�G�!Y�i�ݳp��_f�AϜ��7p����'���Pv���ӒMxTK��`8S�.s�<h�t���>�
rݑ�k�fG�l�?�9tG��w�jי���?j����m.���O����Ox��8�����j�j��1�-H��[��ސ��=q�}Z.�@�VM�% �sG ��/%��4Ƨb��|��w=n������c.E���A3wk�DPUg� # 6ކ��^i�ʵXz���o8�Ż��*�͇E�o}Ta�1��^}8��[NH�yc���
�N�`��a��Q:�3-���{�����	{c��Ϫ0'q��O܁k�Wq~��]�0�Y l�
��.�П[|�{�+�]�X�Z�ٜDn8�/>��c�����l"�4A����W�ķ.�����w����>�g2�o��	U ˮ���%ab�����`�	���	�)��I�1<�ŷt��1n8��'�)lp�
,�\�;�G����\*�����[���|�G�EU��H��I �O6Q򧲾����U�/����{��Mg���X����;fܫ :}�'ߣ��hF��3Rf � �x_��?✓l-{O<��xt��`�����s���}ǁz7�<�Z���e�L�}_����B�뎭@ժhh\�����~�o4	���7���v��q�ئ+��V��I%�/�����}�������u2��݋��<zo`v֙�7���M��Ε3?������N��'��Eq��&,V�-�0����VУ�����J��O$-�N!���i�QI�4.ۦR	X������������Ս���?ʨ��miE�QPQ�:��᧨T����>��V�9�g{����Ƽ5�&6�D+�������Q����pl�D���jumB��WO�X�����t���g2������;u&��
�l��.��{����86,ߦg16�N	ښʈ�S����ɇ�~�����{� �l4�_S�|�^��Y%B,s	h��*��l,�kn[{Vܦ(Nd�O����P?����UJ$����W]��_�y�m��72�[=o��_���:o���99�{K�[��nUu��v������f���>7�s��pYǸ5����M2���\>M,{�����ʯ>g��� �_7a�^an.��c�T���o_���y�p�k�o��vz��u�����|F.�����KZ�og�ZB������r��`��DŌ'����S���O�ň*���eW��t��MD��o=���69���ͳ���smո]������ə_۹������Ͽ�gr{>758��}�c��]�0H>�OŲ�΅Ͽ�I������a-4��-�ߋoϢ�E	>�@��U^�ռ�͗�-۟U������MD����l��Ʒ���Yk!]Ͻ���g66��������6Z����6>o�׶�����t��^����q�Ҷ�������4���$
QD�|F(��=�����s3�0�f���\����}"��%k_��b	����0�͵ �����I�W��ؽm��l�v�5����l�0~�si���grkߩ�&�A 6������v���Wx���� 6�%0�߾F:���w�r		!��RT�J����5��̈҈�?�����ޟ���6����k���2��a��f�s�qkF�od�5����m���)c�|�6zo�7�����wj�罚ו�d���|�����*��5�4��4���u?w�יU�j&�֌�Bǣ�-��w�qx�ĭ���H�!�;�5tK�k�����ֶ��F�r��w=�~�L�3=��O=��9�����g;ok��F�n�mk����܌>e�ο�{�%�������	�?���~i��f3��L�f0lT�E��8��߻.��c�M���U5F��-3V�l���a���x�M1�6ϵ� ��7֘�����m���5o[�L^���d#׶|�*3M�5��q1�k顟�3�0�� 7ܓ������ �g���VY�bE�\!���7k1��W�-���7֚�
^�F���ۖ?�۝���l���h��2|���މ�w��KG��ts0�� �Vbv�1�Zefo�ԍ�;��}#�P
U8��`0l�RSm�ִ�08B,�_<t���o�p>�=�����,�~����<#,����pֈ%.�pm�������_~���7`8�h0��M�n���}#�h4k��`8�?����W��8�֤�W}Ll��/L8lw<yH+k@�|��ř]������@69A����րf������v��/߶���b3n��-�zϿ�k�{K׺ƍn�������}��f;��V�[1���'<�DC���_������1�z�<�ym��, ��ꘓ�R����s~�?���({�E�S�L�n��gg��z+�m���G?@�y����ml��_h��:潎#j�@��+�����E�0l4�n�[�׻T���'�a0�����`0Ʉ�l*#
��[�w�_��E�0l+k��c`.�O]Ck���N�A����rµ6q�Y����ټۼWu���<Y��+h�>�����o�p�Xx����o��o���C��竮��E݄��k]۶��=�h 񴦠�A¯��[>6Z;L�7`��=�G|]@�+��^$� YvE��-`1 `1 u���h���q � ���|�Ϣ*ܛ����i�p��i���O_�@>���Ⲝb1VeÜ���Tl�~��
�����ox�q���`�p����nH���q|�e?T$��
��"2��������ComT�>F ;e=�j�C?�k�*.{%��,�&h0\�_ēOA9x���D��8t� f�P�70�$�Φ�������-�����+(��P�
ڳb0l/����0���j��o�`h.�~�Jt򽨾��sE*+�F��"�Q!�r�A�.��8���f<:85b�`�����f|�-_ه@~��ݢX4"`0\��!D��  �IDATҡ4~�ȯ����`���J2J��ӯ��#Å.�c���{��KC���o���
F gF���F��#���=� Æ0;�x�z1"`0\ b_������`0`�r"P.A�VG�`��_��e��70\XD@x+��+�.KT\"�a�r?u�C���� h��`�pa�7|��d�nT�G6q������`X���H��OB� �.�>��?a��`�pa�[?{%�AԻ�'^��Pt��0��ɿ����0X|�?I�����F ��%�t��ѹ���G����
�_@��q��` b��@��Iu�%���8�q��۟,��`��]�@��@�
����x;Yga a���$"`Ϣa����AO���!*�K�������}7?M�� ������>6��Y|�r�d�hV���q�	IV��3��[C�~-��9X�>� �����)p0��6~���Ft�d;
�V�X�E#�Q�1m?��5�}�t���L��ڿ��� �E�������r��,�U �RM��������~UD<��P��x�'��Om� ��`��c����د�I<�*@|-��1$2�j.�v��
[p9����V���A���a�b�|�7|��x�F�_DÏ�Md�B?F�"C�4�8|����įO�"�A��'ǵ��5� +X ��W���� �.��Ȁ�� ��%�σ��{e�o0`0�+,��z��i�[����"b϶a�ɪ:ߘЏ���g���w���ͷo0`0l+�V#�M h��X6��D~�
x\[��
B��_xӸ�,��`�`���u�Aǳߔa���d@�	⏐O{4��	M��:`XEAF�����*>	<��b�ᕅ���
F ��C ���S�x3���lb�A�:����p%_Qih���Z�hTt�_���T��S�P&�
F ���f�7|�Ÿ�ǐ�V�F���'}�>�Xԁ��.�i_q���[��TĿŹo�<H��Ǣ�M�� 8fg�����8�M�_=�C��}��(����#��X�`B-�`�.�����p��rp9h	e�y�?ù?�ٟ��mKck�M{�8���70�p�>=��ۧ���$��~��Ո��l����LE�5+�v��<�	��:��>��ȷp�khx��|�����N��\�����p1=ﳳ�#7�J����t�u��qT�1�
���'<H��#��H����q�>c�d*�@�#����<���爕�芣j�}� �ag�Tk`5m�͇'q����F�����2�k�����	��Hg4�r����8�W�~�	(��$���'NY��f}�# ��IV� ����0]\���^5F
|���p���K.�T�*FB>
���2A���$�5V��8�-T��sB�3��7O��M�7� "��&���O�uw���ȳk�嫈�pٵ_�7u��Ixi��A�ȁ*B�N7zE����N��=i��o��VZ�걊��1A�����)��Fܷ����tt�5m���3�o006�J�) ��������������R|�b�2�]�۝�<�KVU ��"�,,א��h����O�K�jD+7H�>k-�����P�D�@��h8F�~-�C�o35��������� �� @�}�z����.o38�2\g��
�v�E��a����V:T��D����鹂o-[I��p�ե+��9�+ħA��j��Q{࿁�=�����`���r̪�G<W\o��`0`0lk�7��k��#��׊��2���KX*�r���ʥ��q9�A�^4*���C��I����Z��H}�Lf
-@��@2A�?E�8�R�`fW��'N{�uχ�>NZ=X�������L�8
Ȓ�}    IEND�B`�

