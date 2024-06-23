const loadComponents = () => {
  const context = require.context("../pages", true, /\.jsx?$/);
  const components = {};

  context.keys().forEach((key) => {
    const componentName = key.replace("./", "").replace(".jsx", "");
    components[componentName] = context(key).default;
  });

  return components;
};

export default loadComponents;
