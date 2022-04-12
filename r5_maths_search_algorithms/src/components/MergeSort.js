import {useEffect, useRef} from 'react';

export default function MergeSort(){
  const inputNum = useRef();

  useEffect(()=>{
    inputNum.current.focus();
  }, []);

  return (
    <div>
      <div>
        Enter number to be converted into array: <input type='text' ref={inputNum} />
      </div>
    </div>
  );
}

