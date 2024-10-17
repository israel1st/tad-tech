import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
  },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }, // Supports both browser and Node.js globals
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "no-unused-vars": "warn", // Change to "off" to completely ignore unused vars warnings
      "no-undef": "off",        // Turn off the 'no-undef' rule if you don't want undefined variable warnings
      // Add other rules as needed
    },
  },
];
