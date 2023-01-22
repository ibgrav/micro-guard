export let isArray = <T = unknown>(value: unknown): value is Array<T> => Array.isArray(value);
