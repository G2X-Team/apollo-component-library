import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

import { Radio } from '../src';

describe('Radio', () => {
    it('complies with WCAG 2.0', async () => {
        // given
        const { container: validRadio } = render(<Radio value="something">radio</Radio>);
        const { container: invalidRadio } = render(
            <Radio value="something" invalid>
                radio
            </Radio>
        );
        const { container: invalidRadioWithMessage } = render(
            <Radio value="something" invalid errorMessage="failed" id="something-1">
                radio
            </Radio>
        );

        // when
        const results = [];
        results[0] = await axe(validRadio);
        results[1] = await axe(invalidRadio);
        results[2] = await axe(invalidRadioWithMessage);

        // then
        results.forEach((result: any) => expect(result).toHaveNoViolations());
    });

    it('renders star when it is required', () => {
        // given
        render(
            <Radio value="something" required>
                Hello World
            </Radio>
        );

        // when then
        expect(screen.getByLabelText(/Hello World */)).toBeInTheDocument();
    });

    it('renders error message when conditions are met', () => {
        // given
        render(
            <Radio value="something" invalid errorMessage="failed" id="something-1">
                Hello World
            </Radio>
        );

        // when then
        expect(screen.getByText(/failed/i)).toBeInTheDocument();
    });

    it('renders correctly', () => {
        // given
        render(<Radio value="something">Hello World!</Radio>);

        // when then
        expect(screen.getByText(/hello world!/i)).toBeInTheDocument();
    });

    it('triggers onChange method when clicked', () => {
        // given
        const onChange: jest.Mock<any, any> = jest.fn();
        render(
            <Radio value="something" onChange={onChange}>
                Hello World!
            </Radio>
        );
        const radio: HTMLElement = screen.getByRole('radio');

        // when
        userEvent.click(radio);

        // then
        expect(onChange).toHaveBeenCalled();
    });

    it('will not trigger onChange when disabled', () => {
        // given
        const onChange: jest.Mock<any, any> = jest.fn();
        render(
            <Radio value="something" disabled onChange={onChange}>
                Hello World!
            </Radio>
        );
        const radio: HTMLElement = screen.getByRole('radio');

        // when
        userEvent.click(radio);

        // then
        expect(onChange).not.toHaveBeenCalled();
    });
});
