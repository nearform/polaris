import registerRootComponent from 'expo/build/launch/registerRootComponent';
import App from './src/App';
import Storybook from './storybook';

registerRootComponent(process.env.RUN_STORYBOOK ? Storybook : App);
