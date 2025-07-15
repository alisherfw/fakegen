<!-- README.md -->
<h1 align="center">
  🧪 FakeGen — Instant Mock API Generator
</h1>

<p align="center">
  <b>FakeGen lets developers generate fake JSON APIs in seconds</b><br/>
  Customize schema, get realistic data, and test your apps with zero setup.<br/>
  <a href="https://fakegen.alisherfw.me">🌐 Visit Live Site</a> | 
  <a href="https://fakegen.alisherfw.me/documentation">📘 Read Documentation</a>
</p>

<hr/>

<h2>🚀 What is FakeGen?</h2>

FakeGen is a developer tool that allows you to generate structured fake data using a simple HTTP request. Ideal for:

<ul>
  <li>🧑‍💻 Frontend developers building UIs without a ready backend</li>
  <li>🔬 Testing data ingestion pipelines</li>
  <li>🧱 Mocking realistic API responses during prototyping</li>
</ul>

You define the <b>structure</b>, FakeGen gives you the <b>data</b>. Fully customizable. Fully programmable.

<hr/>

## 🧠 Architecture Overview

<img src="https://i.imgur.com/W3AcG1O.png" alt="Architecture Diagram" width="700"/>

> Express.js server with modular generator handlers → schema parser → faker resolver → JSON response.

---


<h2>📦 Example Usage</h2>

<pre>
<b>Request:</b>
curl -X POST https://fakegen.alisherfw.me/generate \
  -H "Content-Type: application/json" \
  -d '{
    "count": 1,
    "schema": {
      "long": "address.longitude",
      "lat": "address.latitude",
      "company": "company.name",
      "owner": "person.fullName"
    }
  }'

<b>Response:</b>
[
  {
    "long": "-73.5872",
    "lat": "74.5987",
    "company": "Shields, Lesch and Swaniawski",
    "owner": "Joanne Mayert"
  }
]
</pre>

<hr/>

<h2>🧰 Key Features</h2>

<ul>
  <li>📘 <strong>Schema-based fake data</strong> with <code>Faker.js</code> support</li>
  <li>🧑‍🎨 Visual schema builder (Coming soon!)</li>
  <li>📡 Hosted API & Self-host option</li>
  <li>⚙️ RESTful endpoints with clean interface</li>
  <li>🧪 Supports curl, Fetch, Axios, Postman etc.</li>
</ul>

<hr/>

<h2>🌐 Endpoints</h2>

<table>
  <thead>
    <tr>
      <th>Endpoint</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>/generate</code></td>
      <td>Send custom schema to get fake data</td>
    </tr>
    <tr>
      <td><code>/generate/user</code></td>
      <td>Predefined random user data</td>
    </tr>
    <tr>
      <td><code>/generate/product</code></td>
      <td>Random product data</td>
    </tr>
    <tr>
      <td><code>/generate/transaction</code></td>
      <td>Simulated transaction entries</td>
    </tr>
    <tr>
      <td><code>/generate/comment</code></td>
      <td>Fake comment/message content</td>
    </tr>
    <tr>
      <td><code>/generate/book</code></td>
      <td>Book information (title, author, genre, etc.)</td>
    </tr>
    <tr>
      <td><code>/generate/address</code></td>
      <td>Street address, city, zip, coordinates</td>
    </tr>
    <tr>
      <td><code>/generate/article</code></td>
      <td>News article-style entries</td>
    </tr>
    <tr>
      <td><code>/generate/company</code></td>
      <td>Company profiles</td>
    </tr>
    <tr>
      <td><code>/generate/job</code></td>
      <td>Job listings (title, department, salary)</td>
    </tr>
    <tr>
      <td><code>/generate/post</code></td>
      <td>Social media-style posts</td>
    </tr>
  </tbody>
</table>

<hr/>

<h2>🧱 Stack</h2>
<ul>
  <li><b>Backend</b>: Node.js, Express, TypeScript</li>
  <li><b>Data engine</b>: Faker.js (custom types supported)</li>
  <li><b>Frontend</b>: Vite + React + Tailwind (for Builder)</li>
</ul>

<hr/>

<h2>💾 Self Hosting</h2>

<pre>
git clone https://github.com/alisherfw/fakegen.git
cd fakegen
npm install
npm run dev

# Visit http://localhost:3000
</pre>

<hr/>

<h2>📈 Roadmap</h2>
<ul>
  <li>[ ] Builder GUI for schema creation (WIP)</li>
  <li>[ ] Save schema presets with user auth</li>
  <li>[ ] Deploy as npm CLI package</li>
  <li>[ ] Add CSV, XML, and YAML output formats</li>
</ul>

<hr/>

<h2>📣 Shoutout</h2>
<p>Built by <a href="https://alisherfw.me">@alisherfw</a> to solve a real problem — building UI without a working backend.<br/>
If you like it, ⭐️ star the repo, share it, or just use it in your next prototype.</p>

<hr/>

<h2>🧠 Philosophy</h2>
<p>FakeGen exists for one reason: <b>to save developers time.</b> If you’re building something cool and don’t want to be blocked by server availability, FakeGen is your guy. Customize your API. Move fast. Ship.</p>

<p align="center"><b>Let's fake it 'til we build it.</b> 🚀</p>
