import React from 'react';
import type { SampleStory } from './util';
import { Section } from '../../src';

export const StandardSection: SampleStory = (args) => {
    return (
        <div style={{ display: 'flex', height: 300, width: 500 }}>
            <Section {...args} style={{ background: 'red' }}>
                1
            </Section>
            <Section
                style={{ background: 'blue' }}
                alignItems="center"
                justifyContent="space-around"
            >
                2
            </Section>
        </div>
    );
};

export const StylingSection: SampleStory = (args) => {
    return (
        <div style={{ display: 'flex', height: 300, width: 500 }}>
            <Section {...args} style={{ background: 'red' }}>
                1
            </Section>
            <Section
                style={{ background: 'blue' }}
                alignItems="center"
                justifyContent="space-around"
            >
                2
            </Section>
        </div>
    );
};

export const NavigationSection: SampleStory = (args) => {
    return (
        <div style={{ display: 'flex', height: 300, width: 500 }}>
            <Section {...args} style={{ background: 'red' }}>
                1
            </Section>
            <Section
                style={{ background: 'blue' }}
                alignItems="center"
                justifyContent="space-around"
                navigation={true}
                minWidth="750px"
            >
                2
            </Section>
        </div>
    );
};
