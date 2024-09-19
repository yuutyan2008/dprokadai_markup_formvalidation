function emailValidation() {
  const email_confirm = document.getElementById("email_confirm");
  const email = document.getElementById("email");

  const tr_content = document.getElementById("tr_content");

  // 確認欄の入力を確認するイベント登録
  //メールが一致するかをチェックする関数を呼び出す
  email_confirm.addEventListener("input", checkEmail);

  // 関数の定義：エラーが表示されていたらリセットする
  function resetError() {
    newRow.remove(); //エラーを消す
    email_confirm.style.backgroundColor = ""; // 背景色をリセットして元に戻す
  }

  // メールが一致するかをチェックする関数の定義
  function checkEmail() {
    // debugger
    //不一致なら行挿入
    if (email_confirm.value !== email.value) {
      // newRow.setAttribute("id", "newRow"); //setAttributeは、新しい<tr>(newRow)に新しいid属性(id=errorRow)を追加する
      const trNode = document.createElement("tr"); // tr要素のノードを生成
      const tableBody = tr_content.parentNode; // parentNodeプロパティで、自動生成された<tbody>を取得

      const newRow = tableBody.insertBefore(trNode, tr_content); // 作成したノードをcontentノードの直前に挿入

      newRow.style.color = "#d14539";
      newRow.textContent = "Eメールが一致しません";

      // Eメール(確認)の背景色を赤にする
      email_confirm.style.backgroundColor = "rgba(230,169,171,.5)";
    } else {
      resetError();
    }
  }
}
// サイトにアクセスしたときにemailValidationという関数を実行する
window.onload = emailValidation;
