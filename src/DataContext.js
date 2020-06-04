import React, { useState, createContext } from "react";

export const DataContext = createContext();

export const DataProvider = props => {
  const [texts, setTexts] = useState([
    {
      name: "Map",
      text: `The map method creates a new array, populated with the
       results of calling a provided function on every element in the calling array.`,
      example: `arr = [1, 2, 3]; \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 arr.map(num => num * 3);
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 arr2 = [3, 6, 9]`
    },
    {
      name: "Slice",
      text: `The slice method copies a portion of an array
       into a new array, selected from start index to end index (end not included).`,
      example: `arr = ["a", "b", "c", "d", "e"]; \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 arr.slice(1, 4);
        \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 arr2 = ["b", "c", "d"]`
    },
    {
      name: "Filter",
      text: `Filter calls a provided callback function once for each element in an array,
      and constructs a new array of all the values for which callback returns true.`,
      example: `arr = ["red", "blue", "green", "white"]; \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                arr.filter(word => word.length > 4); \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                arr2 = ["green", "white"];`
    },
    {
      name: "Splice",
      text: `Splice changes an array by removing elements and/or adding new elements.
            1st parameter is the start index, 2nd is the amount of elements to remove,
            and 3rd is the new element to add.`,
      example: `arr = ["red", "blue", "green"]; \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                arr.splice(1, 2, "white"); \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                arr2 = ["red", "white"];`
    },
    {
      name: "Concat",
      text: `Concat is used to merge two or more arrays. This method
       does not change the existing arrays, but instead returns a new array.`,
      example: `arr1 = [1, 2],\xa0 arr2 = [3, 4]; \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                arr1.concat(arr2); \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                arr3 = [1, 2, 3, 4];`
    },
    {
      name: "Sort",
      text: `The sort method sorts the elements of an array in place and
      returns the sorted array. The default sort order is ascending.`,
      example: `arr = ['b', 'd', 'a', 'c']; \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                arr.sort(); \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                arr = ["a", "b", "c", "d"];`
    },
    {
      name: "From",
      text: `From() creates a new Array instance from
       an array-like or iterable object. (An optional 2nd parameter is a
       Map function to call on every element of the array.)`,
      example: `arr = Array.from("abc"); \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                arr = ["a", "b", "c"];`
    },
    {
      name: "IsArray",
      text: `The isArray method determines whether the passed value is
        an array.`,
      example: `Array.isArray( [1, 2, 3] );  // true \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                Array.isArray( { key: 123 } ); // false \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                Array.isArray('hello');   // false;`
    },
    {
      name: "Of",
      text: `The Array.of() method creates a new Array instance from a variable number of arguments.
      `,
      example: `Array.of(1, 2, 3); // [1, 2, 3]`
    },
    {
      name: "copyWithin",
      text: `The copyWithin() method copies part of an array to another
       location in the same array. 1st parameter (required) is the index at which to copy
       the sequence to, 2nd is the index at which to start copying elements
        from, and 3rd is the index at which to end copying elements from (up to but not including it).`,
      example: `arr = ['a', 'b', 'c', 'd', 'e']; \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                arr.copyWithin(0, 3, 4); \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                Array ["d", "b", "c", "d", "e"]`
    },
    {
      name: "Entries",
      text: `The entries() method returns a new Array Iterator object that
      contains the key/value pairs for each index in the array.`,
      example: `arr = ['a', 'b', 'c']; \xa0\xa0\xa0 arr.entries(); \xa0\xa0\xa0
               // [0, "a"], [1, "b"], [2, "c"]`
    },
    {
      name: "Every",
      text: `Every() tests whether all elements in the array pass the
       test implemented by the provided function, and returns a Boolean value.`,
      example: `[9, 10, 11, 12, 13].every(x => x >= 10);   // false \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                 [10, 11, 12, 13, 14].every(x => x >= 10); // true​ \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`
    },
    {
      name: "Fill",
      text: `The fill() method changes all elements in an array to a static
      value, from a start index (default 0) to an end index (default array.length).
       It returns the modified array.`,
      example: `arr = [1, 2, 3, 4]; \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                arr.fill (0, 2, 4) // fill with 0 from position 2 until position 4; \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                arr = [1, 2, 0, 0]`
    },
    {
      name: "Find",
      text: `The find() method returns the value of the first element in the
            provided array that satisfies the provided testing function.`,
      example: `arr = [1, 2, 3, 4, 5]; \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                const found = arr.find(el => el > 2); \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                found = 3;`
    },
    {
      name: "FindIndex",
      text: `The findIndex() method returns the index of the first element in the
       array that satisfies the provided testing function. Otherwise, it returns
       -1, indicating that no element passed the test.`,
      example: `spices = ["saffron", "parsley", "turmeric", "cilantro"]; \xa0\xa0\xa0\xa0\xa0\xa0
                spices.findIndex(spice => spice === "cilantro"); \xa0\xa0\xa0\xa0\xa0\xa0
                // 3`
    },
    {
      name: "Flat",
      text: `The flat() method creates a new array with all sub-array elements
       concatenated into it recursively up to the specified depth.`,
      example: `arr = [1, 2, [3, 4]]; \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                arr.flat(); \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                // [1, 2, 3, 4];\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`
    },
    {
      name: "FlatMap",
      text: `The flatMap() method first maps each element using a mapping function,
       then flattens the result into a new array. It is identical to a map()
        followed by a flat() of depth 1`,
      example: `arr.flatMap(x => [x * 2]); \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                // [2, 4, 6, 8] \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`
    },
    {
      name: "ForEach",
      text: `The forEach() method executes the callback function once for each array element;
       unlike map() or reduce() it always returns the value undefined and is not
       chainable. The typical use case is to execute side effects at the end of a chain.`,
      example: `arr = ['a', 'b']; \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
      arr.forEach(el => console.log(el)); \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
      // expected output: "a", "b" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`
    },
    {
      name: "Includes",
      text: `The includes() method determines whether an array includes a certain
       value among its entries, returning true or false as appropriate.`,
      example: `arr = ["rose", "snowdrop", "marigold"]; \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                console.log(arr.includes("rose")) \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                // true`
    },
    {
      name: "indexOf",
      text: `The indexOf() method returns the first index at which a given
       element can be found in the array, or -1 if it is not present.`,
      example: `arr = ["parsley", "basil", "saffron"]; \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                console.log(arr.indexOf("saffron")) \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                // expected output: 2`
    },
    {
      name: "join",
      text: `The join() method creates and returns a new string by concatenating
       all of the elements in an array, separated by
        commas or a specified separator string.`,
      example: `['Fire', 'Air', 'Water'].join("-")   // "Fire-Air-Water" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                ['Fire', 'Air', 'Water'].join("")   // "FireAirWater" \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`
    },
    {
      name: "keys",
      text: `The keys() method returns a new Array Iterator object that contains
       the keys for each index in the array.`,
      example: `const iterator = ['a', 'b', 'c'].keys() \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                for (const key of iterator) { console.log(key) } \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                // expected output: 0, 1, 2`
    },
    {
      name: "lastIndexOf",
      text: `The lastIndexOf() method returns the last index at which a given element
       can be found in the array, or -1 if it is not present. The array is searched
        backwards, starting at fromIndex.`,
      example: `arr = ['saffron', 'parsley', 'cilantro', 'saffron']; \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                arr.lastIndexOf('saffron'); \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                // expected output: 3`
    },
    {
      name: "pop",
      text: `The pop() method removes the last element from an array and returns
       that element. This method changes the length of the array.`,
      example: `arr = ['rose', 'snowdrop', 'bluebell', 'marigold']; \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                arr.pop(); \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                // expected output: 'marigold'`
    },
    {
      name: "push",
      text: `The push() method adds one or more elements to the end of an array
       and returns the new length of the array.`,
      example: `const colors = ['blue', 'white', 'red']; \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                const count = colors.push('orange'); \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                // expected output: 4`
    },
    {
      name: "reduce",
      text: `The reduce() method executes a reducer function (that you provide)
       on each element of the array, resulting in single output value.`,
      example: `arr = [1, 2, 3, 4]; \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
      const reducer = (accumulator, currentValue) => accumulator + currentValue; \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
              arr.reduce(reducer));  // expected output: 10`
    },
    {
      name: "reverse",
      text: `The reverse() method reverses an array in place. The first array
      element becomes the last, and the last array element becomes the first.`,
      example: `arr = ['one', 'two', 'three', 'four'].reverse(); \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                console.log(arr); \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
                // ["four", "three", "two", "one"]`
    }
  ]);

  return (
    <DataContext.Provider value={[texts, setTexts]}>
      {props.children}
    </DataContext.Provider>
  );
};
