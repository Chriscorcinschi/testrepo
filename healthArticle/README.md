# Health Articles Project

## CORS Policy Issue

When opening `health_article.html` directly in the browser using the `file:///` protocol, the XMLHttpRequest fails due to CORS (Cross-Origin Resource Sharing) policy restrictions. Modern browsers block cross-origin requests for local files as a security measure.

## Solution: Local Server Required

To run this project, you must use a local HTTP server. This allows the browser to load the JSON file without CORS restrictions.

### Steps to Run the Project

1. **Navigate to the project directory:**

```bash
   cd /path/to/healthArticle

    start a Python local server:
    python3 -m http.server 8000

    visit in browser
    http://localhost:8000/health_article.html

```

### Alternative Method

Using Node.js

```bash
bashnpx http-server
```
