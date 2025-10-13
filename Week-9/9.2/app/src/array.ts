function maxValue(arr: any[]): any {
  if (arr.length === 0) {
    throw new Error("Array is empty");
  }

  let max: any = arr[0];  // ✅ start from first element
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;

}

maxValue([1, 2, 3, 4, 5]);