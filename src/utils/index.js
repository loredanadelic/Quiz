export const swap = (i, array) => {
    [array[array.length - 1], array[i]] = [
      array[i],
      array[array.length - 1],
    ];
  };