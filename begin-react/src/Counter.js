// import React, { useState } from "react";

// function Counter() {
//   const [number, setNumber] = useState(0);

//   const onIncrease = () => {
//     setNumber((prevNumber) => prevNumber + 1);
//   };

//   const onDecrease = () => {
//     setNumber((prevNumber) => prevNumber - 1);
//   };

//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>
//     </div>
//   );
// }

// export default Counter;

// 20. useReducer 를 사용하여 상태 업데이트 로직 분리하기
// Hook 함수를 사용하면 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리 가능
import React, { useReducer } from "react";

function reducer(state, action) {
  // reducer : 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수
  switch (action.type) {
    case "INCREMENT":
      return state + 1; // 반환하는 상태 : 컴포넌트가 지닐 새로운 상태
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function Counter() {
  // useReducer 함수
  const [number, dispatch] = useReducer(reducer, 0); //  첫번째 파라미터 : reducer 함수 / 두번째 파라미터 : 초기 상태
  // state : 우리가 앞으로 컴포넌트에서 사용 할 수 있는 상태
  // dispatch : 액션을 발생시키는 함수

  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
