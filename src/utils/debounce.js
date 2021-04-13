export default (func, inst, time = 500) => {
  let timeid;
  return (...args) => {
    if (timeid) clearTimeout(timeid);
    timeid = setTimeout(() => {
      func.apply(inst, args);
    }, time);
  };
};
