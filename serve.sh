#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")/public"
PORT="${PORT:-3000}"
exec python3 -m http.server "$PORT" --bind 0.0.0.0
