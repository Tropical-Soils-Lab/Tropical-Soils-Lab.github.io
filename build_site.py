#!/usr/bin/env python3
"""Refresh content-free route shells. Content edits require no build step."""
from pathlib import Path
import json
ROOT=Path(__file__).resolve().parent
shell='''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content=""><meta name="theme-color" content="#0021a5"><title></title><link rel="icon" href="images/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="assets/site.css?v=3"><script src="assets/site.js?v=3" defer></script></head><body><main id="main" aria-busy="true"></main></body></html>
'''
routes={'index','news'}|{p['slug'] for p in json.loads((ROOT/'data/pages.json').read_text())['items']}
# Existing incoming article links remain functional; new articles need only JSON.
routes|={'news-'+n['slug'] for n in json.loads((ROOT/'data/news.json').read_text())['items']}
for route in routes:(ROOT/(route+'.html')).write_text(shell)
print(f'Wrote {len(routes)} content-free route shells.')
