import React, { useState } from 'react';

const MergeSort: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([5, 3, 8, 4, 2]);

  const mergeSort = (arr: number[]): number[] => {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
  };

  const merge = (left: number[], right: number[]): number[] => {
    const merged: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] <= right[rightIndex]) {
        merged.push(left[leftIndex]);
        leftIndex++;
      } else {
        merged.push(right[rightIndex]);
        rightIndex++;
      }
    }

    while (leftIndex < left.length) {
      merged.push(left[leftIndex]);
      leftIndex++;
    }

    while (rightIndex < right.length) {
      merged.push(right[rightIndex]);
      rightIndex++;
    }

    return merged;
  };

  const handleSort = () => {
    const sortedNumbers = mergeSort([...numbers]);
    setNumbers(sortedNumbers);
  };

  return (
    <div>
      <button onClick={handleSort}>Sort</button>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default MergeSort;