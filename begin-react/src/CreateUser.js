import React from "react";

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

//export default CreateUser;
export default React.memo(CreateUser); // 컴포넌트에서 리렌더링이 필요한 상황에서만 리렌더링을 하도록 설정 ( 컴포넌트의 리렌더링 성능 최적화 )
