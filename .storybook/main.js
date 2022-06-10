module.exports = {
  stories: ['../packages/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    'storybook-addon-designs'
  ],
  framework: '@storybook/react',
  core: {
    builder: 'storybook-builder-vite'
  }
};
