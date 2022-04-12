import React, {useRef, useState} from "react";

function App() {
  // useRef hook
  // All hooks are functions only
  let num1Ref = React.useRef();
  let num2Ref = React.useRef();
  let sum = 0;
  // let sumResult = 0;
  const [result, setResult] = React.useState(0);

  // use as event listener for button
  // Not first time load, you don't want to upload this.
  function calculateSum() {
    let n1 = num1Ref.current.value;
    let n2 = num2Ref.current.value;
    let sum = Number(n1) + parseInt(n2);
    setResult(sum);
    // return sumResult;
  }
  // ref={num1} // it is an expression
  return (
    <div>
      <div>
        <h2>Sum</h2>
        <p>
          <b>Enter number 1 : </b> <input type='text' ref={num1Ref} />
        </p>
        <p>
          <b>Enter number 1 : </b> <input type='text' ref={num2Ref} />
        </p>
        <p>
          <button onClick={calculateSum}>Find Sum</button>
        </p>
        <h3> Sum is : {result}</h3>
      </div>
      <div>
        <h2>Prime Numbers </h2>
        <p>
          <b>Enter number 1 : </b> <input type='text' ref={num1Ref} />
        </p>
        <p>
          <button onClick={calculateSum}>Find prime number</button>
        </p>
        <h3> Sum is : {result}</h3>
      </div>
      <div>
        <h2>Find whether the number is the perfect cube?</h2>
        <p>
          <b>No. 1</b> <input type='text' ref={num1Ref} />
        </p>
        <p>
          <button onClick={calculateSum}>Binary Search</button>
        </p>
      </div>

      
    </div>
  );

  // // ===========================================================
  const countRef = useRef(0);
  const handle =()=>{
    countRef.current++;
    console.log(`Clicked ${countRef.current} times`)
  }
  // Clicking multiple times does not trigger component re-rendering. It is only rendered only once.
  console.log("I rendered")
  return (
    <div>
      <button onClick={handle}>Click me</button>
      <p>Clicked : </p>
    </div>
  );
  //==========================================================
  // const [count, setCount] = useState(0);
  // const handle=()=>{
  //   const updatedCount = count + 1;
  //   console.log(`Clicked ${updatedCount} times`);
  //   setCount(updatedCount);
  // }
  // console.log('I rendered!');
  // return(
  //   <div>
  //     <button onClick={handle}>Click me</button>
  //   </div>
  // )

}

export default App;
