
export const getQuery = () => typeof(window) !== 'undefined' ? require('query-string').parse(window.location.search) : {};