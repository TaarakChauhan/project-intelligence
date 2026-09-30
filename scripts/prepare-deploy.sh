#!/usr/bin/env bash
# Assemble a clean static output tree for Vercel (no node_modules / app source).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/deploy"

need_dir() {
  local path="$1"
  if [[ ! -d "$path" ]]; then
    echo "prepare-deploy: missing required directory: $path" >&2
    echo "Run the app builds first (npm run build)." >&2
    exit 1
  fi
}

need_dir "$ROOT/money-atlas/dist"
need_dir "$ROOT/Marketing-Signal/dist"

rm -rf "$OUT"
mkdir -p "$OUT"

# Root static files used by the live hub.
for f in index.html favicon.svg robots.txt sitemap.xml og-image.png og-image.svg \
  google94283142f23c1ceb.html site.config.json; do
  if [[ -f "$ROOT/$f" ]]; then
    cp "$ROOT/$f" "$OUT/$f"
  fi
done

# Copy a site directory, then strip junk that must never ship.
copy_tree() {
  local name="$1"
  if [[ -d "$ROOT/$name" ]]; then
    cp -a "$ROOT/$name" "$OUT/$name"
  fi
}

copy_tree css
copy_tree js
copy_tree media
copy_tree offers
copy_tree public
copy_tree Speak-Well
copy_tree Fit-Meaning
copy_tree Founder-Path
copy_tree Business-Decision-Principles
copy_tree "Gold and silver"
copy_tree Public-Speaking-Resources
copy_tree "Survival of the Fittest"
copy_tree drafts

# Vite apps: only the built dist folders, under the same URLs as today.
mkdir -p "$OUT/money-atlas" "$OUT/Marketing-Signal"
cp -a "$ROOT/money-atlas/dist" "$OUT/money-atlas/dist"
cp -a "$ROOT/Marketing-Signal/dist" "$OUT/Marketing-Signal/dist"

# Safety: never ship node_modules / build caches even if something slipped above.
find "$OUT" \( -type d -name node_modules -o -type d -name .git -o -type d -name .vite \) -prune -exec rm -rf {} + 2>/dev/null || true
find "$OUT" -type f \( -name '.DS_Store' -o -name '*.command' \) -delete 2>/dev/null || true

echo "prepare-deploy: wrote $(du -sh "$OUT" | awk '{print $1}') to $OUT"
du -sh "$OUT"/* 2>/dev/null | sort -hr | head -20

if find "$OUT" -type d -name node_modules 2>/dev/null | grep -q .; then
  echo "prepare-deploy: ERROR node_modules still present in output" >&2
  exit 1
fi

# Rough sanity: required entrypoints exist.
for p in \
  index.html \
  Speak-Well/index.html \
  money-atlas/dist/index.html \
  Marketing-Signal/dist/index.html \
  Fit-Meaning/index.html \
  Founder-Path/index.html
do
  if [[ ! -f "$OUT/$p" ]]; then
    echo "prepare-deploy: ERROR missing $p in output" >&2
    exit 1
  fi
done

echo "prepare-deploy: entrypoint checks OK"
