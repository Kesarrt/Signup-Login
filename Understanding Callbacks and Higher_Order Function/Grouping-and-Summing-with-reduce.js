function countAndSortCategories(categories) {
  const categoryCount = categories.reduce(function (acc, category) {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const sortedCategories = Object.entries(categoryCount)
    .sort(function (a, b) {
      return b[1] - a[1];
    })
    .map(function (item) {
      return item[0];
    });

  return {
    counts: categoryCount,
    sorted: sortedCategories
  };
}

const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(countAndSortCategories(input));

