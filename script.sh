#!/bin/bash
# Get directory where this script is located
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "🚀 Starting local web server at http://localhost:8000 ..."
echo "Press Ctrl + C to stop the server."
python3 -m http.server 8000 --directory "$DIR/landing_page"
