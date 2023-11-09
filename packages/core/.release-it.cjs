module.exports = {
  npm: {
    publish: true,
  },
  github: {
    release: true,
  },
  git: {
    requireCleanWorkingDir: false,
    addFiles: ["package.json", "CHANGELOG.md"],
    commitMessage: ":bookmark: release @vumdoc/core@${version}",
  },
  plugins: {},
};
