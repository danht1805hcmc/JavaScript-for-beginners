export const printLog = (flag = true, ...data) => {
  if (flag) console.log(...data);
};

export const printGroup = (label, callback, flag = true) => {
  if (flag) console.group(label);
  callback();
  if (flag) console.groupEnd();
};
