import { addons } from '@storybook/addons';
import e2eTheme from './e2e';

addons.setConfig({
  theme: e2eTheme,
  showNav: true,
  showPanel: true,
  panelPosition: 'right',
  previewTabs: {
  'storybook/docs/panel': { index: -1 }
  }
});
