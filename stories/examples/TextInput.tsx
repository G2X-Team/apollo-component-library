import React from 'react';
import type { SampleStory } from './util';
import { TextInput } from '../../src';

export const StandardTextInput: SampleStory = (args) => <TextInput {...args} />;

export const DisabledTextInput: SampleStory = (args) => <TextInput {...args} />;

export const PasswordTextInput: SampleStory = (args) => <TextInput {...args} />;

export const RequiredTextInput: SampleStory = (args) => <TextInput {...args} />;
