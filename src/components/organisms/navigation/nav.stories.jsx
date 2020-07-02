import React from 'react';
// import { Platform } from 'react-native';
// import { storiesOf as web } from '@storybook/react';
// import { storiesOf as native } from '@storybook/react-native';

// const storiesOf = Platform.OS === 'web' ? web : native;

import Nav from './nav';

// import { Button } from '@storybook/react/demo';

// export default { title: 'Button' };

// export const withText = () => <Button>Hello Button</Button>;

// export const withEmoji = () => (
//   <Button>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );

export default {
  title: 'Nav'
};

export const Default = () => <Nav />;

// storiesOf('Nav', module).add('Default', () => <Nav/>);
