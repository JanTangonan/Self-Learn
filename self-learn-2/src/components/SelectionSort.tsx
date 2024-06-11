import React, { useState } from 'react';

const SelectionSort: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([5, 3, 8, 4, 2]);

  const selectionSort = () => {
    const arr = [...numbers];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        // Swap elements arr[i] and arr[minIndex]
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }

    setNumbers(arr);
  };

  return (
    <div>
      <button onClick={selectionSort}>Sort</button>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default SelectionSort;