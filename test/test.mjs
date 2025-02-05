import { RobotsTxt } from "../src/robots-txt-writer.mjs";

const writer = new RobotsTxt();
writer.addDirective("*", "Disallow", "/admin");
writer.addDirective("*", "Allow", "/public");
writer.addDirective("Googlebot", "Crawl-delay", "10");

console.log("ESM Test Output:\n", writer.write());