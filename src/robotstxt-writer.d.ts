export declare class RobotsTxt {
    private directives: { userAgent: string; directive: string; value: string }[];

    constructor();

    /**
     * Adds a directive to the robots.txt file.
     * @param userAgent - The user agent to apply the rule to.
     * @param directive - The directive (e.g., Allow, Disallow, Crawl-delay).
     * @param value - The value associated with the directive.
     */
    addDirective(userAgent: string, directive: string, value: string): void;

    /**
     * Outputs the formatted robots.txt content as a string.
     * @returns The robots.txt content.
     */
    write(): string;
}

/**
 * Default export for CommonJS compatibility.
 */
declare const _default: { RobotsTxt: typeof RobotsTxt };
export default _default;
