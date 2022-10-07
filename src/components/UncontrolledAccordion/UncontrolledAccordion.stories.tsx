import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';

import {UncontrolledAccordion} from './UncontrolledAccordion';
import {action} from '@storybook/addon-actions';

export default {
  title: 'UncontrolledAccordion',
  component: UncontrolledAccordion,
} as ComponentMeta<typeof UncontrolledAccordion>;

const callback = action('clicked');

export const ModeChanging = () => {
  return <UncontrolledAccordion titleValue={'Users'}/>;
};


