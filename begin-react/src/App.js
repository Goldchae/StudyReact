import React, { useRef, useState, useMemo } from "react";
import Hello from "./Hello";
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./inputSample";
import UserList from "./userList2";
import CreateUser from "./CreateUser";

// 17. useMemo 를 사용하여 연산한 값 재사용하기
function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    // CreateUser 컴포넌트에게 필요한 props
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const onChange = useCallback((e) => {
    //
    const { name, value } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  }, []);

  const [users, setUsers] = useState([
    //배열을 apps에서 선언하고 userlist에게 props로 전달
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: false,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);

  const nextId = useRef(4); // useRef 사용 : 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리하기 , 파라미터를 넣어주면, 이 값이 .current 값의 기본값
  const onCreate = useCallback(() => {
    // 새로운 값 생성 함수
    const user = {
      // 배열 항목 추가 로직
      id: nextId.current,
      username,
      email,
    };

    setUsers([...users, user]); // 불변성을 지키면서 배열에 새 항목을 추가 : spread 연산자를 사용
    setUsers((users) => users.concat(user)); // 또는 concat 사용
    // 연속된 상태 업데이트 호출은 React에 의해 최적화되어 마지막 상태만 반영!

    setInputs({
      username: "",

      email: "",
    });
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback((id) => {
    // 제거 함수
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter((user) => user.id !== id));
  }, []);
  const onToggle = useCallback((id) => {
    // 함수형 업데이트
    // 수정 함수
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

  // const count = countActiveUsers(users); // 활성 사용자 : input 값이 바뀔 때마다 리렌더링
  const count = useMemo(() => countActiveUsers(users), [users]); //useMemo 라는 Hook 함수 : 이전에 계산 한 값을 재사용한다는 의미
  // 첫번째 파라미터: 어떻게 연산할지 정의하는 함수 두번째 파라미터 :deps 배열
  // deps 배열 안에 넣은 내용이 바뀌면, 우리가 등록한 함수를 호출해서 값을 연산해주고, 만약에 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

// function App() {
//   return (
//     <Wrapper>
//       <Hello name="react" color="red" isSpecial={true} />
//       <Hello name="react" color="red" isSpecial />{" "}
//       {/* props 값 설정 생략 시 true */}
//       <Hello color="pink" />
//     </Wrapper>
//   );
// }

// function App() {
//   return <Counter />;
// }

export default App;
