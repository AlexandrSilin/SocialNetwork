export const requiredField = (value) => {
    return value ? undefined : "Field is required";
}

export const maxLengthCreator = (maxLength) => (value) => {
    return value && value.length > maxLength ? "Max length is " + maxLength + " symbols" : undefined;
}

export const minLengthCreator = (minLength) => (value) => {
    return value && value.length < minLength ? "Min length is " + minLength + " symbols": undefined;
}