// Core
import { merge } from 'webpack-merge';

// Constants
import { DIST_DIR } from '../utils/constants';

// Development Configuration
export default () => ({
  output: {
    filename: '[name].[contenthash].js',
    path: DIST_DIR,
  },
});
