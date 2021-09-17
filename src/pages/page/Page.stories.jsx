import React from 'react';

import { Page } from './Page';
import * as HeaderStories from '../../components/header/Header.stories';

export default {
  title: 'Application/Pages',
  component: Page,
};

const Template = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
