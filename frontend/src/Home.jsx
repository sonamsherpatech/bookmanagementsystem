import { useState } from "react";

function Home() {
  // let meroNumber = 0;
  // function increaseMeroNumber() {
  //   meroNumber++;
  // }

  // function decreaseMeorNumber() {
  //   meroNumber--;
  // }

  // let something = useState(0);
  // let myValue = something[0];
  // let myFunction = something[1];
  const [myValue, setMyValue] = useState(0);

  function increaseMyValue() {
    setMyValue(myValue + 1);
  }

  function decreaseMyValue() {
    setMyValue(myValue - 1);
  }

  return (
    <>
      <h1>{myValue}</h1>
      <button onClick={increaseMyValue}>+</button>
      <button onClick={decreaseMyValue}>-</button>

      {/* <h1>Learning useState hook</h1> */}
    </>
  );
}

export default Home;
