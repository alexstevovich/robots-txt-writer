const { RobotsTxt } = require("../src/robots-txt-writer.cjs");

const writer = new RobotsTxt();
writer.addDirective("*", "Disallow", "/admin");
writer.addDirective("*", "Allow", "/public");
writer.addDirective("Googlebot", "Crawl-delay", "10");

console.log("CJS Test Output:\n", writer.write());