export class RobotstxtWriter {
    constructor() {
      this.directives = [];
    }
  
    /**
     * Adds a directive to the robots.txt file.
     * @param {string} userAgent - The user agent to apply the rule to.
     * @param {string} directive - The directive (e.g., Allow, Disallow, Crawl-delay).
     * @param {string} value - The value associated with the directive.
     */
    addDirective(userAgent, directive, value) {
      this.directives.push({ userAgent, directive, value });
    }
  
    /**
     * Outputs the formatted robots.txt content as a string.
     * @returns {string} - The robots.txt content.
     */
    write() {
      let output = "";
      let currentAgent = null;
  
      this.directives.forEach(({ userAgent, directive, value }) => {
        if (userAgent !== currentAgent) {
          if (currentAgent !== null) output += "\n"; // Add a newline between groups
          output += `User-agent: ${userAgent}\n`;
          currentAgent = userAgent;
        }
        output += `${directive}: ${value}\n`;
      });
      return output;
    }
  }
  
export default {RobotstxtWriter};
  