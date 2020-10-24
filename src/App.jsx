import React from "react";

const getGitUsername = async () => {
  const message = "GitのユーザーIDは、";
  const url = "https://api.github.com/users/dev-mori";

  const json = await fetch(url)
    .then((res) => {
      console.log("これは非同期処理成功時のメッセージです。");
      return res.json();
    })
    .catch((error) => {
      console.error("これは非同期処理失敗時のメッセージです。", error);
      return null;
    });
  console.log(message + json.login);
};
export default function App() {
  getGitUsername();
  return <div>hoge</div>;
}
