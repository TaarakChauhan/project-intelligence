#!/usr/bin/env python3
"""Threaded local server for Project Intelligence. Serves markdown as readable text."""
from __future__ import annotations

import argparse
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class Handler(SimpleHTTPRequestHandler):
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".md": "text/plain",
        ".markdown": "text/plain",
        ".svg": "image/svg+xml",
        ".woff2": "font/woff2",
        ".json": "application/json",
    }

    def guess_type(self, path):
        if str(path).lower().endswith((".md", ".markdown")):
            return "text/plain; charset=utf-8"
        return super().guess_type(path)

    def end_headers(self):
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()

    def log_message(self, fmt, *args):
        super().log_message(fmt, *args)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--bind", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8787)
    args = parser.parse_args()
    httpd = ThreadingHTTPServer((args.bind, args.port), Handler)
    print(f"Serving Project Intelligence on http://{args.bind}:{args.port}/")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")


if __name__ == "__main__":
    main()
