import React, { useState } from 'react';

const BubbleSort: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([5, 3, 8, 4, 2]);

  const bubbleSort = () => {
    const arr = [...numbers];
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements arr[j] and arr[j + 1]
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    setNumbers(arr);
  };

  return (
    <div>
      <button onClick={bubbleSort}>Sort</button>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default BubbleSort;