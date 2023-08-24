// ContextInterface.jsx

// 定义一个上下文方法返回值组件
function ContextMethodReturnValue(code, data = null) {
  // 检查code参数是否为整数，如果不是，则抛出错误
  if (!Number.isInteger(code)) {
    // 创建一个错误对象，包含code和message属性
    const error = new Error(`Invalid code: ${code}`);
    error.code = code;
    // 抛出错误对象
    throw error;
  }
  // 定义一个私有的属性对象，包含code和data属性
  const _properties = {
    code: code,
    data: data,
  };
  // 定义一个公开的方法对象，包含获取返回值、获取code和获取data的方法
  const _methods = {
    // 获取返回值方法，返回一个和属性对象一样的对象，但是不包含方法部分
    getReturnValue: function () {
      return { ..._properties };
    },
    // 获取code方法，返回code属性的值
    getCode: function () {
      return _properties.code;
    },
    // 获取data方法，返回data属性的值
    getData: function () {
      return _properties.data;
    },
  };
  // 返回方法对象作为组件的实例
  return _methods;
}

export { ContextMethodReturnValue };