module.exports = {
  "stories": [
    '../src/docs/Introduction.stories.mdx',
    '../src/docs/Typography.stories.mdx',
    '../src/docs/Colors.stories.mdx',
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "storybook-builder-vite"
  }
}