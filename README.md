# Robots.txt Writer

A **lightweight**, **modular**, and **professional-grade** utility for generating `robots.txt` files.
Designed for **server-side rendering (SSR)**, **static site generation (SSG)**, and **custom rule management**.

## Features

✅ **Easy-to-use API** – Simple methods for adding directives.
✅ **Supports all standard `robots.txt` directives** – `User-agent`, `Allow`, `Disallow`, `Crawl-delay`, `Sitemap`, etc.
✅ **Automates formatting** – Ensures correct spacing and structure.
✅ **Works with both CommonJS (`require`) and ESM (`import`)**.

---

## Installation

```sh
npm install robots-txt-writer
```

or using Yarn:

```sh
yarn add robots-txt-writer
```

---

## Usage

### **Basic Example**
```js
import { RobotsTxt } from "robots-txt-writer";

const robots = new RobotsTxt();
robots.addDirective("*", "Disallow", "/private");
robots.addDirective("Googlebot", "Allow", "/public");
robots.addDirective("*", "Sitemap", "https://example.com/sitemap.xml");

console.log(robots.write());
```

**➡ Outputs:**
```txt
User-agent: *
Disallow: /private

User-agent: Googlebot
Allow: /public

User-agent: *
Sitemap: https://example.com/sitemap.xml
```

---

## API Reference

### **🔹 Class: `RobotsTxt`**
Handles `robots.txt` rule creation and formatting.

#### **Method: `addDirective(userAgent: string, directive: string, value: string)`**
Adds a rule to the `robots.txt` file.

#### **Example:**
```js
robots.addDirective("Bingbot", "Crawl-delay", "10");
```

---

#### **Method: `write(): string`**
Generates the formatted `robots.txt` content as a string.

#### **Example:**
```js
console.log(robots.write());
```

---

## Best Practices
- Group rules by `User-agent` to maintain clarity.
- Use `*` for directives applying to all bots.
- Include a `Sitemap` entry to assist search engines.

---

## License

Released under the **MIT License**.

