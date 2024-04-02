/**
 * 通过id获取对应的对象
 *
 * @param {string} id ID
 * @param {array} array 数据集
 * @return {object} id所在的对象
 */
const findByID = (id: string, array: Array<any>): object =>
  (array || []).find(({ id: itemID }) => itemID === id);

const findItemByKeyValue = (data = [], key = 'id', value = '') =>
  data.find(item => item[key] === value) || null;

/**
 * 通过id获取对应的对象的下标
 *
 * @param {string} id ID
 * @param {array} array 数据集
 * @return {number} id所在的对象的下标
 */
const findIndexByID = (id: string, array: Array<any> = []): number =>
  (array || []).findIndex(({ id: itemID }) => itemID === id);

/**
 * array1 包含 array2，并在 array1 中把所有的 array2 剔除
 *
 * @param {array} array1 数组A
 * @param {array} array2 数组B
 * @return {array} 剔除了所有 array2 的 array1
 */

const compare = (array1, array2) =>
  Object.keys(array1).length === Object.keys(array2).length &&
  Object.keys(array1).every(key => array1[key] === array2[key]);

/**
 * 数组根据key去重
 *
 * @param {array} array 数组A
 * @param {string} key 键
 * @return {array} 去重后的数组
 */
const unique = (array, key) => {
  const clone = [];
  array.filter(item => {
    if (clone.findIndex(x => x[key] === item[key]) <= -1) clone.push(item);
    return null;
  });
  return clone;
};

/**
 * 自身数组去重
 *
 * @param {array} array 数组
 * @return {array} 去重后的数组
 */
const selfUnique = array => {
  const oldArrStringf = [];
  array.forEach(item => {
    oldArrStringf.push(JSON.stringify(item));
  });
  const uniqueArr = Array.from(new Set(oldArrStringf));
  const newArrs = [];
  uniqueArr.forEach(item => {
    newArrs.push(JSON.parse(item));
  });
  return newArrs;
};

/**
 * 生成一个不重复的随机数组
 *
 * @param {number} len 数组长度
 * @param {number} min 最小随机数
 * @param {number} max 最大随机数
 * @return {array} 不重复的随机数组
 */
const randomUniqueArr = (len, min, max) => {
  if (max - min < len) {
    // 可生成数的范围小于数组长度
    return null;
  }
  const hash = [];

  while (hash.length < len) {
    const num = Math.floor(Math.random() * 100);

    if (hash.indexOf(num) === -1) {
      hash.push(num);
    }
  }
  return hash;
};

/**
 * 一个数组分割指定数量数组
 *
 * @param {array} dataList 原数组
 * @param {number} MOD 数组数量
 * @return {array} newList n个新数组
 */
const segmentArr = (dataList, MOD) => {
  const newList = [];
  let reli = [];
  (dataList || []).forEach((t, i, arr) => {
    reli.push(t);
    if (reli.length >= MOD || (i + 1 >= arr.length && reli.length)) {
      newList.push(reli);
      reli = [];
    }
  });
  return newList;
};

const transformTreeToArray = (tree, type) => {
  const values = [];
  const renderTree = (data, levelPath, idPath) => {
    data.map((item, index) => {
      const { id } = item;
      const clone = { ...item };
      clone.levelPath = levelPath ? `${levelPath},${index}` : `${index}`; // levelPath
      clone.idPath = idPath ? `${idPath},${id}` : `${id}`; // idPath
      if (clone) values.push(clone);
      if (clone.children && clone.children.length > 0) {
        renderTree(clone.children, clone.levelPath, clone.idPath);
        delete clone.children;
      }
      return clone;
    });
  };
  renderTree(tree);
  return type === 'tree' ? tree : values;
};

export {
  findByID,
  findIndexByID,
  compare,
  unique,
  selfUnique,
  randomUniqueArr,
  segmentArr,
  transformTreeToArray,
  findItemByKeyValue,
};
