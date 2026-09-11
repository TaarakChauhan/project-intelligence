#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

PORT=5173
URL="http://127.0.0.1:${PORT}/"

if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then
  echo "Node.js and npm are required."
  echo "Install from https://nodejs.org then double-click this file again."
  read -r -p "Press Enter to close…"
  exit 1
fi

if [[ ! -d node_modules ]]; then
  echo "Installing dependencies (first run)…"
  npm install
fi

if curl -sf -o /dev/null "$URL"; then
  echo "Money Atlas is already running."
  open "$URL"
  exit 0
fi

echo "Starting Money Atlas…"
npm run dev -- --host 127.0.0.1 --port "$PORT" &
DEV_PID=$!

for _ in $(seq 1 40); do
  if curl -sf -o /dev/null "$URL"; then
    open "$URL"
    echo "Opened $URL"
    echo "Leave this window open while you browse. Close it to stop the site."
    wait "$DEV_PID"
    exit 0
  fi
  sleep 0.25
done

echo "Server did not become ready. Check the messages above."
kill "$DEV_PID" 2>/dev/null || true
read -r -p "Press Enter to close…"
exit 1
