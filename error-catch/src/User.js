import React from "react";

function Users({ users, onToggle }) {
  //if (!users) return null; // users가 undefined이면 배열의 내장함수 map 또한 존재하지 않아 오류

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} onClick={() => onToggle(user.id)}>
          {user.username}
        </li>
      ))}
    </ul>
  );
}

Users.defaultProps = {
  // onToggle 을 props 로 넣어주는 것 까먹 방지
  onToggle: () => {
    console.warn("onToggle is missing!");
  },
};

function User({ user }) {
  if (!user) {
    // "null checking" : null 을 렌더링하게되면 아무것도 나타나지 않게 됨
    return null;
  }

  return (
    <div>
      <div>
        <b>ID</b>: {user.id}
      </div>
      <div>
        <b>Username:</b> {user.username}
      </div>
    </div>
  );
}

export default User;
