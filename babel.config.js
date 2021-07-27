module.exports = {
  presets: [
    'babel-preset-gatsby',
    [
      '@linaria',
      {
        evaluate: true,
        displayName: process.env.NODE_ENV !== 'production',
      },
    ],
  ],
};
