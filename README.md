# 🧪 FakeGen

**FakeGen** is a customizable fake data generation service for developers. It's like JSONPlaceholder or Faker, but RESTful, schema-driven, and extensible — built for real-world testing needs.

Create your own fake APIs with realistic data by simply defining a schema. Use it in your frontend, backend, or testing suite — no setup or DB required.

---

## ⚙️ Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: Vite + React + Chakra UI (builder coming soon)
- **No database** — fully stateless
- **Planned Hosting**: [Railway](https://railway.app/)

---

## 📦 Installation

```bash
git clone https://github.com/alisherfw/fakegen.git
cd fakegen
npm install
npm run dev
```

> Default port is `3000`

---

## 🚀 Usage

### 🔧 Generate from predefined data types
**Endpoint format:** `POST /api/generate/:type`

**Examples:**
```bash
POST /api/generate/user
POST /api/generate/book
POST /api/generate/address
```

**Request Body:**
```json
{
  "count": 3
}
```

**Response:**
Returns an array of generated objects based on the type.

---

## 🧱 Project Structure

```bash
src/
├── generators/
│   ├── address.js
│   ├── article.js
│   ├── book.js
│   ├── comment.js
│   ├── company.js
│   ├── dynamicSchema.js
│   ├── job.js
│   ├── post.js
│   ├── product.js
│   ├── transaction.js
│   └── user.js
├── routes/
│   └── generate.js
├── utils/
│   └── fakeResolver.js
├── index.js
```

---

## 📚 API Documentation

Coming soon at: [`https://fakegen.alisherfw.me/documentation`](https://fakegen.alisherfw.me/documentation)

---

## 🔧 Planned Features

- [ ] Nested & array structures support
- [ ] CLI tool for local usage
- [ ] Schema Builder UI (`/builder`)
- [ ] More data types (books, jobs, companies, sensors, etc.)
- [ ] Fetch/Axios code snippet generation
- [ ] Swagger/OpenAPI or custom interactive docs

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

Made by [@alisherfw](https://alisherfw.me) — PRs welcome!
