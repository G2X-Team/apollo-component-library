import React from 'react';
import type { SampleStory } from './util';
import { Switch } from '../../src';

export const StandardSwitch: SampleStory = (args) => <Switch {...args} />;

export const SwitchStates: SampleStory = (args) => {
    return (
        <>
            <Switch checked {...args} />
            <span style={{ paddingRight: 10 }} />
            <Switch {...args} />
        </>
    );
};

export const DisabledSwitch: SampleStory = (args) => {
    return (
        <>
            <Switch checked {...args} />
            <span style={{ paddingRight: 10 }} />
            <Switch {...args} />
        </>
    );
};

export const SwitchVariant: SampleStory = (args) => {
    return (
        <>
            <Switch {...args} />
            <span style={{ paddingRight: 10 }} />
            <Switch variant="secondary" {...args} />
        </>
    );
};
