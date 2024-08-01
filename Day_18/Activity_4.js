//  array algorithms

function rotateArray(arr, k) {
    for (let i = 0; i < k; i++) {
      const poppedElement = arr.pop();
      arr.unshift(poppedElement);
    }
    return arr;
  }
  
  const arr = [1, 2, 3, 4, 5, 6, 7];
  console.log(rotateArray(arr, 3));
  
  function mergeSortedArrays(arr1, arr2) {
    let i = 0,
      j = 0;
    const result = [];
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }
  
    // Add remaining elements from arr1
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }
  
    // Add remaining elements from arr2
    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }
  
    return result;
  }
  
  const arr1 = [1, 3, 5, 7];
  const arr2 = [2, 4, 6, 8];
  console.log(mergeSortedArrays(arr1, arr2));
  