// ContextInterface.jsx

function ContextMethodReturnValue(code, data = null) {
  if (!Number.isInteger(code)) {
    // 创建一个错误对象，包含code和message属性
    const error = new Error(`Invalid code: ${code}`);
    error.code = code;
    // 抛出错误对象
    throw error;
  }
  const _properties = {
    code: code,
    data: data,
  };
  const _methods = {
    getReturnValue: function () {
      return { ..._properties };
    },
    getCode: function () {
      return _properties.code;
    },
    getData: function () {
      return _properties.data;
    },
  };
  return _methods;
}

export { ContextMethodReturnValue };