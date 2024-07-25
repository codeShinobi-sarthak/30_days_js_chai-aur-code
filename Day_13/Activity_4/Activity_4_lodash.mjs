import { chunk, flatten } from 'lodash-es';

const chunkedArray = chunk([1, 2, 3, 4, 5, 6], 2);
console.log(chunkedArray); 

const flattenedArray = flatten([1, [2, [3, [4]], 5]]);
console.log(flattenedArray); 