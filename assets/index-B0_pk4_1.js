(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <main class="container">
    <section class="content">
      <h1>Vite + TS + Sass Boilerplate</h1>
      <p>This is a boilerplate to create simple HTML CSS/SCSS TS pages.</p>
      <h3>Before using:</h3>
      <ul>
        <li>If it's just a plain HTML CSS TS page, delete everything on <code>main.ts</code> file and use only the <code>index.html</code> file to structure your code.
          <ul>
            <li>
              Start coding replacing div app with your HTML.
            </li>
            <li>You will have to import your <code>style.scss</code> and any other <code>.ts</code> file in the HTML</li>
          </ul>
        </li>
        <li>If it's a more structured project that will use a lot of typescript, keep the structure as it is.</li>
      </ul>
      <h3>Pre-settings:</h3>
      <ul>
        <li><a href="https://prettier.io/" target="_blank">Prettier</a></li>
        <li><a href="https://eslint.org/" target="_blank">Eslint</a></li>
        <li><a href="https://typicode.github.io/husky/" target="_blank">Husky</a></li>
        <li><a href="https://github.com/lint-staged/lint-staged" target="_blank">Lint Staged</a></li>
      </ul>
      <h3>Run the project:</h3>
      <ul>
        <li>
          Use Node.js v18 or higher
          <ul>
            <li><a href="https://nodejs.org/en/about/previous-releases">Older versions</a></li>
          </ul>
        </li>
        <li>Run the command <code>npm install</code> to install the dependencies.</li>
        <li>
          Run the command <code>npm run dev</code> to install open the project.
          <ul>
            <li>Check the terminal to see the URL of the project. Eg: <strong>Local:http://localhost:5173/</strong></li>
          </ul>
        </li>
      </ul>
      <h3>Start coding! 🎉</h3>
    </section>
    <footer class="footer">
      <p>© <strong><a href="https://github.com/lucianesantcs">lucianesantcs</a></strong> 2024 /
      Vite + TS + Sass Boilerplate v1.0.0</p>
    </footer>
  </main>
`;
