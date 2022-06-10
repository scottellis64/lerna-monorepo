module.exports = {
  // Line length that the printer will wrap on
  //  (VSCode uses a "soft wrap" feature by using `option+Z`(mac) or `Alt+Z`(windows))
  printWidth: 120,

  // Number of spaces per indentation-level
  tabWidth: 2,

  // Indent lines with spaces
  useTabs: false,

  // Print semicolons at the ends of statements
  semi: true,

  // Use single quotes instead of double quotes
  singleQuote: true,

  // Use single quotes instead of double quotes in JSX
  jsxSingleQuote: true,

  // Don't put the > of a multi-line JSX element at the end of the last line
  //  (it will be alone on the next line)
  jsxBracketSameLine: false,

  // When properties in objects are quoted
  //  "as-needed" - Only add quotes around object properties where required
  //  "consistent" - If at least one property in an object requires quotes, quote all properties
  //  "preserve" - Respect the input use of quotes in object properties
  quoteProps: 'as-needed',

  // Print trailing commas wherever possible when multi-line
  //  "none" - No trailing commas.
  //  "es5" - Trailing commas where valid in ES5 (objects, arrays, etc.)
  //  "all" - Trailing commas wherever possible (including function arguments). This requires node 8 or a transform.
  trailingComma: 'none',

  // Print spaces between brackets in object literals
  bracketSpacing: true,

  // Include parentheses around a sole arrow function parameter (always|avoid)
  arrowParens: 'always'
};
