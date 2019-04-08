export const makeActionCreator = (type, ...subFields) => {
  return function(...args) {
    const action = { type };
    subFields.forEach((subFieldName, index) => {
      action[subFieldName] = args[index];
    })
    return action;
  }
}