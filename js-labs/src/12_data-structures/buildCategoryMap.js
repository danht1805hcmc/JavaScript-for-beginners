// using object
function buildCategoryMapV1(categoryList) {
  // your code here
  if (!Array.isArray(categoryList) || categoryList.length === 0) return {};

  return categoryList.reduce((map, category) => {
    map[category.id] = category;
    return map;
  }, {});
}

// using Map
function buildCategoryMapV2(categoryList) {
  // your code here
  const map = new Map();

  categoryList.forEach((category) => {
    map.set(category.id, category);
  });

  return map;
}

const consoleGroup = (categoryList) => {
  console.group(categoryList);

  console.group('buildCategoryMapV1');
  console.log(buildCategoryMapV1(categoryList));
  console.groupEnd();

  console.group('buildCategoryMapV2');
  console.log(buildCategoryMapV2(categoryList));
  console.groupEnd();

  console.groupEnd();
};

consoleGroup([
  { id: 1, name: 'iphone' },
  { id: 2, name: 'macBook' },
]);
