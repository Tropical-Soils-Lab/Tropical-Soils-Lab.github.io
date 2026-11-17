# Sustainable Tropical Soil Management Lab website

Live website: https://tropical-soils-lab.github.io/

A plain HTML, CSS, and JavaScript website hosted by GitHub Pages from the main branch.

## Pages

Home; About; Biography; Team; Media; News; Research Projects; Publications; Soil Health Data; Tools; gSHAPE Guide; Teaching and Extension; Opportunities; Contact; Credits. News items have their own full article pages.

## Updating content

- Edit `build_site.py` for shared navigation, layout, team members, and page content.
- Edit `news-content.json` to add news. Each item has a unique slug, ISO date, category, title, summary, paragraphs, source label, and source URL. Keep the list newest first. Use confirmed announcements only.
- Run `python build_site.py` (Python 3; no third-party packages required).
- Commit the generator, news content, and generated HTML together. GitHub Pages automatically publishes changes on main.
- Visual styles are in `assets/site.css`; navigation and news pagination are in `assets/site.js`.
- The site does not include a form-based content editor yet.

## News behavior

The homepage and News page use the same source. Visitors can browse three cards per page, filter the News page by category, and open full articles with newer/older article navigation. All articles remain available with JavaScript disabled.

## Details to complete

Project 1–3 are clearly marked outlines. Data resources do not offer downloads yet. Editorial appointments require the director's updated CV. Training dates and funded positions are not advertised as available. Team photos and individual biographies can be added later.

## Credits and privacy

See `credits.html` for source and image credits. The agricultural photograph is illustrative, not a lab research site. The gSHAPE screenshot is the actual public interface, without assessment inputs. No analytics, tracking scripts, or contact form are included. Fonts are loaded from Google Fonts with local font fallbacks.
