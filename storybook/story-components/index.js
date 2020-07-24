import { storiesOf } from '@storybook/react';

import DocText from './doc-text';
import DocCode from './doc-code';
import DocItem from './doc-item';
import DocExternalLink from './doc-external-link';
import DocSection from './doc-section';
import InlineCode from './inline-code';
import PropTable from './prop-table';
import StyleList from './style-list';
import TextList from './text-list';
import ThemeSwitcher from './theme-switcher';
import { DividerHorizontal, DividerVertical } from './dividers';
import StoryPage from './story-page';

export default StoryPage;

export {
  DocText,
  DocCode,
  DocItem,
  DocSection,
  DocExternalLink,
  InlineCode,
  PropTable,
  StyleList,
  TextList,
  ThemeSwitcher,
  DividerHorizontal,
  DividerVertical,
  storiesOf
};
