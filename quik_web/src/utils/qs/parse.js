
export const parseQueryParams = (queryString = '') => {
  const params = new URLSearchParams(queryString);
  const entries = params.entries();

  let looped = false;
  let paramsPrased = {};

  while (!looped) {
    const entry = entries.next();
    const { done, value } = entry;
    looped = done;

    if (value && value.length) {
      const [key, keyValue] = value;
      paramsPrased[key] = keyValue;
    }
  }

  return paramsPrased;
};
