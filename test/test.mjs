import { RobotstxtWriter } from "../src/robotstxt-writer.mjs";

const writer = new RobotstxtWriter();
writer.addDirective("*", "Disallow", "/admin");
writer.addDirective("*", "Allow", "/public");
writer.addDirective("Googlebot", "Crawl-delay", "10");

console.log("ESM Test Output:\n", writer.write());