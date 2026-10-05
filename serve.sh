#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")"
PORT="${PORT:-3000}"
exec python3 -m http.server "$PORT" --bind 0.0.0.0
