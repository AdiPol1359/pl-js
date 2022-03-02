export const replace = (text: string, start: number, end: number, replace: string, value: string, offset: number) => {
    return text.substring(0, start - offset) + replace + text.substring(end - offset + 1, text.length);
};
