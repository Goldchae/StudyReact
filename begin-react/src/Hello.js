import React from "react"; // 리액트 불러오기

function Hello({ color, name, isSpecial }) {
  // props 를 통해 컴포넌트에게 값 전달
  return (
    <div style={{ color }}>
      {isSpecial ? <b>*</b> : null} {/* 조건부 렌더링 + 삼항연산자 */}
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  //컴포넌트에 props 를 지정하지 않았을 때 기본적으로 사용 할 값을 설정
  name: "이름없음",
};

export default Hello; // Hello 라는 컴포넌트를 내보내겠다
