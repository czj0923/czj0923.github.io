export const MyPlugin = (options) => {
  return (app) => {
    return {
      name: 'my-plugin',
      onInitialized: function () {
        //console.log(111);
      }
    };
  };
};
