const { RobotstxtWriter } = require("../src/robotstxt-writer.cjs");

const writer = new RobotstxtWriter();
writer.addDirective("*", "Disallow", "/admin");
writer.addDirective("*", "Allow", "/public");
writer.addDirective("Googlebot", "Crawl-delay", "10");

console.log("CJS Test Output:\n", writer.write());