// Core
import { merge } from 'webpack-merge';

// Constants
import { BUILD_DIR } from '../utils/constants';

// Production Configuration
export default () => ({
  output: {
    filename: '[name].[contenthash].js',
    path: BUILD_DIR,
  },
});
