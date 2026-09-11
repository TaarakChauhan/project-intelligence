#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"
PORT=8787
URL="http://127.0.0.1:${PORT}/"

if command -v python3 >/dev/null 2>&1; then
  if curl -sf -o /dev/null "$URL"; then
    echo "Project Intelligence is already running."
    open "$URL"
    exit 0
  fi
  echo "Starting Project Intelligence on $URL"
  echo "Leave this window open while you browse. Press Ctrl+C to stop."
  open "$URL" 2>/dev/null || true
  exec python3 "./serve.py" --bind 127.0.0.1 --port "$PORT"
else
  echo "python3 not found — opening index.html directly."
  open "index.html"
  read -r -p "Press Enter to close…"
fi
