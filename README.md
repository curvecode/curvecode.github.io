# CurveCode Jekyll site

Quick start

1. Install Ruby (>= 3.0) and Bundler
2. Install dependencies:

```pwsh
gem install bundler
bundle install
```

3. Serve locally:

```pwsh
bundle exec jekyll serve --livereload
```

Deploy via GitHub Actions

This repo includes a workflow at `.github/workflows/gh-pages.yml` which builds the site and publishes the `public` folder to a Pages branch on pushes to `master`.

- **Default publish branch:** `gh-pages`.
- **Override publish branch:** Set a repository secret named `PAGES_BRANCH` to change the target branch (the workflow falls back to `gh-pages` when the secret is not set).

To change the branch trigger, edit `on.push.branches` in the workflow. Also ensure GitHub Pages repo settings are set to serve from the published branch if necessary.

Customize

- Edit `_config.yml` for site title and URLs.
- Edit `assets/css/style.css` and `_layouts/default.html` for theme changes.
