#!/bin/bash
cd "$(dirname "$0")" || exit 1

PORT=8765
URL="http://127.0.0.1:${PORT}/"

if command -v python3 >/dev/null 2>&1; then
  echo ""
  echo "  Business Decision Principles"
  echo "  Site running at ${URL}"
  echo "  Press Ctrl+C to stop"
  echo ""
  # Open browser shortly after the server starts listening
  ( sleep 0.6; open "${URL}" ) &
  python3 -m http.server "${PORT}"
else
  echo "python3 not found — opening index.html directly"
  open "index.html"
  echo "Press Enter to close this window."
  read -r _
fi
