// Call this function for getting from object and nested child objects same key values
const getRecurrsiveValue = (
    findArray = [],
    childKey = "",
    searchKey = ""
  ) => {
    let list = [];
    function getList(array) {
      for (var i = 0; i < array.length; i++) {
        list = [...list, array[i][searchKey]];
        if (array[i][childKey] && array[i][childKey].length > 0) {
          getList(array[i][childKey]);
        }
      }
      return list;
    }
    return getList(findArray);
  };

// Use below sample function to call above common function
// which required actual nested array, which key is having nested same object and which key you want to print
  const makeSimpleList = (arr) => {
    return getRecurrsiveValue(arr, "children", "text");
  };
