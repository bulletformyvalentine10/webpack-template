// Transpile Code
export const transpileCode = () => ({
  module: {
    rules: [
      {
        exclude: /(node_modules|bower_components)/,
        test: /\.(js|jsx)/,
        use: 'babel-loader',
      },
      {
        exclude: /(node_modules|bower_components)/,
        test: /\.(ts|tsx)/,
        use: 'ts-loader',
      },
    ],
  },
});
