// useEffect를 사용하여 마운트/언마운트/업데이트시 할 작업 설정하기
import React, { useEffect } from "react";

const User = React.memo(function User({ user, onRemove, onToggle }) {
  // 리렌더링 최적화
  // useEffect 사용시 : 함수/ 의존값이 들어있는 배열
  /*
  useEffect(() => {
    console.log('user 값이 설정됨');
    console.log(user);
    return () => { // 정리 함수 실행 
      console.log('user 가 바뀌기 전..');
      console.log(user);
    };
  }, [user]); // useEffect 안에서 사용하는 상태나 prop 가 있다면, useEffect 의 deps 에 넣어주어야 함 
 */

  useEffect(() => {
    console.log(user);
  }); // deps 파라미터를 생략한다면, 컴포넌트가 리렌더링 될 때마다 호출
  // + 부모컴포넌트가 리렌더링되면 자식 컴포넌트 또한 리렌더링
  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      &nbsp;
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

//export default UserList;
export default React.memo(UserList); // 리렌더링 최적화
