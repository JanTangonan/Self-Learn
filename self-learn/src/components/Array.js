import { Button, ButtonGroup } from '@chakra-ui/react'
import React from 'react';
import MyButton from './TestChakra';


export default function Array(){
    // Declare an array
    let myArray = [10, 20, 30, 40, 50];

    // Access and modify array elements
    myArray[0] = 100;
    let element = myArray[1];

    return (
        <>
        <MyButton />
        <div>
            <Button>Array elements: {element}</Button>
        </div>
        </>
    )
};
