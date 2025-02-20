import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TestPage = () => {
  const [state, setState] = useState(0);
  const [state2, setState2] = useState(0);

  console.log(state);

  useEffect(() => {
    const setData = async () => {
      try {
      } catch (err) {
        console.log(err);
      }
    };
    setData();

    const array = [1, 2, 3, 4, 5];

    // array.forEach((item, index) => {
    //   setTimeout(() => {
    //     setState((prev) => {
    //       setState2((prev) => prev + item);
    //       return prev + item;
    //     });
    //   }, 0);
    // });
  }, []);

  useEffect(() => {
    console.log(state2);
  }, [state2]);

  const handleTest = async () => {
    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Button onClick={handleTest}>Test</Button>
    </>
  );
};

const Button = styled.button`
  margin: 30px;
  width: 100px;
  height: 40px;
`;

export default TestPage;
