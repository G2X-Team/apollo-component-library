import React from 'react';
import type { SampleStory } from './util';
import { Radio } from '../../src';

export const StandardRadio: SampleStory = (args) => <Radio {...args} />;

export const RadioStates: SampleStory = (args) => {
    return (
        <>
            <Radio checked {...args} />
            <span style={{ paddingRight: 10 }} />
            <Radio {...args} />
        </>
    );
};

export const DisabledRadio: SampleStory = (args) => {
    return (
        <>
            <Radio checked {...args} />
            <span style={{ paddingRight: 10 }} />
            <Radio {...args} />
        </>
    );
};
