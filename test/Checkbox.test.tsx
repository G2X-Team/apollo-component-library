import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations);

import { Checkbox } from '../src';

describe('Checkbox', () => {
    it('complies with WCAG 2.0', async () => {
        // given
        const { container: validCheckbox } = render(
            <Checkbox value="something">Checkbox</Checkbox>
        );
        const { container: invalidCheckbox } = render(
            <Checkbox value="something" invalid>
                Checkbox
            </Checkbox>
        );
        const { container: invalidCheckboxWithMessage } = render(
            <Checkbox value="something" invalid errorMessage="failed" id="something-1">
                Checkbox
            </Checkbox>
        );

        // when
        const results = [];
        results[0] = await axe(validCheckbox);
        results[1] = await axe(invalidCheckbox);
        results[2] = await axe(invalidCheckboxWithMessage);

        // then
        results.forEach((result: any) => expect(result).toHaveNoViolations());
    });

    it('renders star when it is required', () => {
        // given
        render(
            <Checkbox value="something" required>
                Hello World
            </Checkbox>
        );

        // when then
        expect(screen.getByLabelText(/Hello World */)).toBeInTheDocument();
    });

    it('renders error message when conditions are met', () => {
        // given
        render(
            <Checkbox value="something" invalid errorMessage="failed" id="something-1">
                Hello World
            </Checkbox>
        );

        // when then
        expect(screen.getByText(/failed/i)).toBeInTheDocument();
    });

    it('renders correctly', () => {
        // given
        render(<Checkbox value="value">Hello World!</Checkbox>);

        // when then
        expect(screen.getByText(/hello world!/i)).toBeInTheDocument();
    });

    it('triggers onChange event when checked', () => {
        // given
        const onChange: jest.Mock<any, any> = jest.fn();
        render(
            <Checkbox value="value" onChange={onChange}>
                Hello World!
            </Checkbox>
        );
        const checkbox: HTMLElement = screen.getByRole('checkbox');

        // when
        userEvent.click(checkbox);

        // then
        expect(onChange).toHaveBeenCalled();
    });

    it('will not trigger onChange when disabled', () => {
        // given
        const onChange: jest.Mock<any, any> = jest.fn();
        render(
            <Checkbox value="value" onChange={onChange} disabled>
                Failed
            </Checkbox>
        );
        const checkbox: HTMLElement = screen.getByRole('checkbox');

        // when
        userEvent.click(checkbox);

        // then
        expect(onChange).not.toHaveBeenCalled();
    });
});
