# RobotstxtWriter

## Description
**RobotstxtWriter** is a lightweight and efficient library for generating `robots.txt` files programmatically in Node.js. It allows adding directives dynamically and outputting the final robots.txt content as a string.

## Installation
```sh
npm install robotstxt-writer
```

## Usage
```javascript
import { RobotstxtWriter } from "robotstxt-writer";

const writer = new RobotstxtWriter();
writer.addDirective("*", "Disallow", "/admin");
writer.addDirective("*", "Allow", "/public");
writer.addDirective("Googlebot", "Crawl-delay", "10");

console.log(writer.write());
```

### Output
```
User-agent: *
Disallow: /admin
Allow: /public

User-agent: Googlebot
Crawl-delay: 10
```

## API
### `addDirective(userAgent: string, directive: string, value: string): void`
Adds a directive to the robots.txt file.

### `write(): string`
Outputs the formatted robots.txt content as a string.

## License
MIT License

