import React from "react";
import User from "./User";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const user = {
    id: 1,
    username: "velopert",
  };
  return (
    <ErrorBoundary>
      {" "}
      {/*에러처리 */}
      <User user={user} />
    </ErrorBoundary>
  );
}

export default App;
