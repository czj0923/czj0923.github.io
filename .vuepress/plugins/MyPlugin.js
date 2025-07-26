export const MyPlugin = () => {
  return () => {
    return {
      name: 'my-plugin',
      onInitialized: function () {
        //console.log(111);
      }
    };
  };
};
