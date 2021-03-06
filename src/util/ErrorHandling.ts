/**
 * Will ensure that the component name is always correct, if it is not it will throw an error.
 *
 * @param props component properties
 * @param name expected name of component
 */
export const gaurdApolloName = (props: any, name: string): void => {
    if (props['data-apollo'] !== name) {
        throw new Error(`Apollo component name must be ${name}`);
    }
};
