import React from 'react';
import {ComponentMeta} from '@storybook/react';

import {UncontrolledOnOff} from './UncontrolledOnOff';
import {action} from '@storybook/addon-actions';

export default {
  title: 'UncontrolledOnOff',
  component: UncontrolledOnOff,
} as ComponentMeta<typeof UncontrolledOnOff>;

const callback = action('clicked');

export const OnMode = () => <UncontrolledOnOff defaultOn={true} onChange={callback}/>;
export const OffMode = () => <UncontrolledOnOff defaultOn={false} onChange={callback}/>;
export const BugMode = () => <div>Unsync when change defaultValue when already rendered</div>;


