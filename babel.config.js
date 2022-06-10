module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic'
      },
    ],
    '@babel/preset-typescript'
  ],
  env: {
    build: {
      ignore: [
        '**/*.test.tsx',
        '**/*.story.tsx'
      ],
    },
  },
  plugins: ['babel-plugin-inline-react-svg'],
  ignore: ['**/dist/', '**/node_modules/']
}
