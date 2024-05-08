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
<hr>
<h3>Build & Deploy the project to Github Pages:</h3>
<h5>Run the commands:</h5>
<ul>
  <li>Run <code>npm run build</code> to build the project to the <code>.dist</code> folder</li>
  <li>Run <code>npm run deploy</code> to deploy the code the the github pages to the <code>gh-pages</code> branch</li>
  <li>If you prefer to run both, use <code>npm run build-deploy</code> instead and it'll build then deploy</li>
</ul>
<h5>Configure the repository:</h5>
<ul>
  <li>Go to <strong>Settings</strong> -> Click on <strong>Pages</strong>. On the <strong>Build and deployment</strong> section, make sure <strong>Source</strong> is <strong>Deploy from a branch</strong>. Then, <strong>Branch</strong> should be "gh-pages" to the folder "/root" </li>
  <li>Check the live site on the url: https://{username}.github.io/{repo-name}/. <br/>Eg: https://lucianesantcs.github.io/vitets-sass/</li>
</ul>
