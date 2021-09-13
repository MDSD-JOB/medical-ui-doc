module.exports = {
  types: [
    { value: "feat", name: "feat:     A new feature" },
    { value: "fix", name: "fix:      A bug fix" },
  ],
  scopes: [{ name: "accounts" }, { name: "admin" }],
  messages: {
    type: "Select the type of change that you're committing:",
    scope: "\nDenote the SCOPE of this change (optional):",
    customScope: "Denote the SCOPE of this change:",
    // used if allowCustomScopes is true
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
};
