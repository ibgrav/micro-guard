export let isArray = <T = unknown>(value?: unknown): value is T[] => {
  return Array.isArray(value);
};

export let isEmptyArray = (value?: unknown): value is never[] => {
  return isArray(value) && value.length === 0;
};
