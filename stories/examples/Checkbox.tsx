import React from 'react';
import type { SampleStory } from './util';
import { Checkbox } from '../../src';

export const StandardCheckbox: SampleStory = (args) => <Checkbox {...args} />;

export const CheckboxStates: SampleStory = (args) => {
    return (
        <>
            <Checkbox checked {...args} />
            <span style={{ paddingRight: 10 }} />
            <Checkbox {...args} />
        </>
    );
};

export const DisabledCheckbox: SampleStory = (args) => {
    return (
        <>
            <Checkbox checked {...args} />
            <span style={{ paddingRight: 10 }} />
            <Checkbox {...args} />
        </>
    );
};
