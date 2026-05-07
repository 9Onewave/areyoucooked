# 🔥 Are You Cooked?

A brutally honest, Gen Z chaos-themed life audit quiz. No backend. No API. No cost. Pure HTML/CSS/JS — host it for free on GitHub Pages.

## Features

- 8 character classes (Student, Worker, Entrepreneur, Trades, Creative, Unemployed, Parent, Gym Bro/Girl)
- 20+ universal questions across Sleep, Finance, Health, Productivity, Mental Health, Life Admin, Vibe Check
- 5 class-specific questions tailored to your life situation
- Randomised question order every time — fresh experience on retake
- Real-time heat bar that updates as you answer
- 5 result tiers with detailed breakdowns by category
- Category breakdown with animated bars showing what's cooking you
- Share to Twitter/X and WhatsApp
- Web Share API support (native share on mobile)
- Full SEO — meta tags, Open Graph, Twitter Card, JSON-LD structured data
- sitemap.xml and robots.txt included
- Custom 404 page with auto-redirect
- Fully responsive — works on mobile and desktop
- Zero dependencies, zero backend, zero cost

## File Structure

```
are-you-cooked/
├── index.html      # Structure + SEO meta tags
├── style.css       # Full Gen Z chaos theme
├── app.js          # All quiz logic
├── sitemap.xml     # For search engines
├── robots.txt      # For search engine crawlers
├── 404.html        # Custom 404 with redirect
└── README.md       # This file
```

## Deploying to GitHub Pages (Free)

### Step 1 — Create a GitHub repo

1. Go to [github.com](https://github.com) and log in
2. Click **New repository**
3. Name it `are-you-cooked` (or anything you like)
4. Set it to **Public**
5. Click **Create repository**

### Step 2 — Push your files

```bash
cd are-you-cooked
git init
git add .
git commit -m "Initial commit - Are You Cooked quiz"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/are-you-cooked.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. Go to your repo on GitHub
2. Click **Settings** → scroll to **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose **main** branch, **/ (root)** folder
5. Click **Save**

Your site will be live at:
`https://YOUR_USERNAME.github.io/are-you-cooked/`

Within a few minutes (sometimes up to 5–10 mins first time).

### Step 4 — Custom domain (optional)

If you have a domain (e.g. `areyoucooked.com`):

1. In repo **Settings → Pages**, add your custom domain
2. At your domain registrar, add a CNAME record pointing to `YOUR_USERNAME.github.io`
3. Update the URLs in `index.html`, `sitemap.xml` to your real domain

## Customising

### Change the domain in SEO tags
Search for `areyoucooked.com` in `index.html` and `sitemap.xml` and replace with your actual URL.

### Add more questions
In `app.js`, add to `UNIVERSAL_QUESTIONS` array or to a specific class in `CLASS_QUESTIONS`.

### Add more character classes
Add to `CHARACTER_CLASSES` array and add a matching key in `CLASS_QUESTIONS`.

### Change colours
Edit the CSS variables at the top of `style.css`:
```css
:root {
  --hot-pink: #FF2D78;
  --lime: #C8FF00;
  --orange: #FF6B00;
  --yellow: #FFE000;
  --cyan: #00E5FF;
  --cream: #FFFDF0;
}
```

## SEO Tips

- Share the link on Reddit (r/teenagers, r/GenZ, r/mildlyinfuriating etc.)
- Post your result on Twitter/X and tag friends
- Submit to Product Hunt
- Submit URL to Google Search Console for faster indexing: [search.google.com/search-console](https://search.google.com/search-console)

## License

MIT — do whatever you want with it.
