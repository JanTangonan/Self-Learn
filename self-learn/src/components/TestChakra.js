import React from 'react';
import { Button } from '@chakra-ui/react';

const MyButton = () => {
  const handleClick = () => {
    console.log('Button clicked!');
    // Perform any desired actions here
  };

  return (
    <Button colorScheme="blue" onClick={handleClick}>
      Click Me
    </Button>
  );
};

export default MyButton;