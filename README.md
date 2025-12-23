# Reddit Lite

Reddit Lite is a lightweight, fast Reddit client built with React and Redux. It provides a minimal, focused UI for searching Reddit and viewing results via Reddit's public JSON API.

**Features**

- **Search:** Query Reddit and retrieve relevant posts using the Reddit JSON API.
- **Search history:** Keeps recent searches for quick recall.
- **Lightweight UI:** Small, responsive interface built with Vite + React.
- **Client-only:** No backend required — all requests go directly to Reddit's public endpoints.

**Getting Started**

Clone the repo and install dependencies:

```bash
git clone https://your-repo.example/reddit-lite.git
cd reddit
npm install
```

Run the development server (Vite):

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

**Usage**

- Open the app in your browser (Vite will show the local URL).
- Use the search input in the navbar to query Reddit (subreddit or keywords).
- Click results to view basic post information. Recent searches are available in the search history panel.

**Project Structure**

- **Source:** [src/](src/) — main application code.
- **Entry:** [src/App.jsx](src/App.jsx) and [src/main.jsx](src/main.jsx).
- **State:** [src/store.js](src/store.js) — Redux store and slices live under [src/features/](src/features/).
- **API helpers:** [src/api/search.js](src/api/search.js).
- **UI components:** [src/components/](src/components/) (e.g., [src/components/Navbar.jsx](src/components/Navbar.jsx), [src/components/Body.jsx](src/components/Body.jsx)).

**Notes**

- The app uses Reddit's public JSON endpoints. For heavy usage or authenticated requests, consider adding a backend to manage rate limits and OAuth flows.
- This project is scaffolded with Vite — see `vite.config.js` for build settings.

**Contributing**

Contributions are welcome. Open an issue to discuss changes or submit a pull request with a clear description of your changes and why they help the project.

**License**

This project is provided without a license in the repository. Add a `LICENSE` file if you want to specify reuse terms.

---
