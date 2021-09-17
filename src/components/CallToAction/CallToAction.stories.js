import React from 'react';
import CallToAction from './CallToAction';

export default {
  title: 'Application/Components/CallToAction',
  component: CallToAction,
  controls: {
    hideNoControlsWarning: true
  }
}

const Template = () => <CallToAction />

export const Default = Template.bind({})
Default.parameters = {
    controls: { hideNoControlsWarning: true }
}