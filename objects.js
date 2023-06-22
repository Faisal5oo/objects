// objects in javascript
// object.keys()

const keyObjects = (obj) => {
  return Object.keys(obj);
};
// object.values()
const keyValue = (obj) => {
  return Object.values(obj);
};
// Object.entrie
const keyEntrie = (obj) => {
  return Object.entries(obj);
};
// object.hasOwnProperty
const keyProperty = (obj) => {
  return obj.hasOwnProperty("name");
};
const keyMerged = (obj, obj2) => {
  return Object.assign(obj, obj2);
};
const keyFreeze = (obj) => {
  return Object.freeze(obj);
};

module.exports = {
  keyObjects,
  keyValue,
  keyEntrie,
  keyProperty,
  keyMerged,
  keyFreeze,
};
