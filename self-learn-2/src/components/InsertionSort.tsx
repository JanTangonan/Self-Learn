import React, { useState } from 'react';

const InsertionSort: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([5, 3, 8, 4, 2]);

  const insertionSort = () => {
    const arr = [...numbers];
    const n = arr.length;

    for (let i = 1; i < n; i++) {
      const key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }

      arr[j + 1] = key;
    }

    setNumbers(arr);
  };

  return (
    <div>
      <button onClick={insertionSort}>Sort</button>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default InsertionSort;