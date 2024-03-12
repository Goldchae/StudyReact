import React from "react";

function User({ user, onRemove, onToggle }) {
  //재사용용 (반복 방지) 함수
  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black", //active 값에 따라 색깔 바꾸기
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>

      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
      {/*삭제 버튼 추가 */}
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  // 배열 렌더링
  // const users = [
  //   {
  //     id: 1,
  //     username: "velopert",
  //     email: "public.velopert@gmail.com",
  //   },
  //   {
  //     id: 2,
  //     username: "tester",
  //     email: "tester@example.com",
  //   },
  //   {
  //     id: 3,
  //     username: "liz",
  //     email: "liz@example.com",
  //   },
  // ];

  return (
    <div>
      {users.map(
        // map 함수 사용하기
        (
          user // 각 배열 항목 => user
        ) => (
          <User
            user={user}
            key={user.id}
            onRemove={onRemove}
            onToggle={onToggle}
          /> // 배열을 렌더링 할 때에는 key 라는 props 를 설정해야 함
        )
      )}
    </div>
  );
}

export default UserList;
