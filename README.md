# Lab website: editing without code

Live site: https://tropical-soils-lab.github.io/

## Open the editor

1. Open https://app.pagescms.org/ and sign in with your GitHub account.
2. Select **Tropical-Soils-Lab → Tropical-Soils-Lab.github.io → main**.
3. Choose a form from the sidebar. If the repository is missing, an organization owner must approve Pages CMS access to this repository.

## How to add a news item

1. Open **News & Lab Highlights** and add an item.
2. Enter a unique slug (e.g. `soil-workshop-2026`), date, category, title, short summary, and article paragraphs.
3. Optionally upload an image and describe it in **Image alt**. Turn **Published** on, then save.
4. For a **Lab Highlight**, choose **Highlights**, add an image, and paste the full post link in **LinkedIn URL**.

The homepage shows two regular news items and the newest published highlight. Previous/Next browses regular news. The News page includes all categories and full articles. Dates sort newest first. New articles work immediately without creating an HTML file.

## How to add a team member

1. Open **Team**, expand the appropriate group, and add a member.
2. Enter their name and role. Photo, research interests, email, office, and biography are optional.
3. Save. Reorder members within the group as needed.

Other forms cover **Publications, Projects, Courses, Training, Tools, Homepage, Director biography, Page introductions & content, and Site settings & contact**. Images are stored in `/images/`; use the image picker to upload them.

Saving commits the JSON to GitHub. GitHub Pages then republishes automatically, usually within a few minutes. Refresh the live page after deployment completes. No Python, terminal, HTML editing, or manual rebuild is needed for content updates.

## For developers

All editable content is in `/data/*.json`. `/assets/site.js` renders it into content-free HTML route shells. `.pages.yml` defines the editing forms. The site uses browser JavaScript; opening HTML through `file://` will not load JSON, so use an HTTP server for previews. `python build_site.py` only refreshes route shells and legacy article aliases. Existing article links remain supported; new articles use `news.html?article=slug`.

The editor configuration is ready; a lab GitHub administrator must complete the one-time Pages CMS sign-in/installation. Only authorized repository editors can save changes. Use confirmed, public information in published content. See the Credits page for source and image acknowledgments.
