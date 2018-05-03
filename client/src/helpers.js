export const fileHelpers = {
  getImage: (path) => {
    return require('./uploads/' + path)
  }
};
