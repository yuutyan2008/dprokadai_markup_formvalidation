function emailValidation() {
  const form = document.getElementById("form");
  const email_confirm = form.email_confirm;
  const email = form.email;
  const tr_content = document.getElementById("tr_content");
  const resetButton = document.getElementById("reset_btn");  

  let newRow; // 値が変化するのでletとして定義

  //
  // イベントの登録
  //

  // メール入力を確認するイベント登録
  // 入力時にエラーが表示されていたら消す
  // email.addEventListener("input", resetError);

  // 確認欄の入力を確認するイベント登録
  //メールが一致するかをチェックする関数を呼び出す
  email_confirm.addEventListener("input", checkEmail);

  //リセットボタンを押した時のイベントを登録
  resetButton.addEventListener("click", function () {
    // // エラーメッセージを全て削除する
    // resetForm(email);
    // resetForm(email_confirm);
    resetError();
  });

  //
  // イベントに対する処理の定義
  //

  // エラーメッセージを表示
  function showError() {
    // newRowが表示されていなければ(一回目の文字入力)
    if (!newRow) {
      const trNode = document.createElement("tr"); // tr要素のノードを生成
      const tableBody = tr_content.parentNode; // parentNodeプロパティで、自動生成された<tbody>を取得
      newRow = tableBody.insertBefore(trNode, tr_content); // 作成したノードをcontentノードの直前に挿入
      newRow.style.color = "#d14539";
      newRow.textContent = "Eメールが一致しません";
      email_confirm.style.backgroundColor = "rgba(230,169,171,.5)"; // Eメール(確認)の背景色を赤にする
    }
  }


  // エラー文字を消す
  function resetError() {
    // debugger
    newRow.remove(); //エラーを消す
    email_confirm.style.backgroundColor = ""; // 背景色をリセットして元に戻す
  }

  // メールが一致するかをチェックする
  function checkEmail() {
    // debugger
    //不一致ならエラーメッセージを表示
    if (email_confirm.value !== email.value) {
      if(!newRow) {// 一回目の文字入力
      showError();
      } 
      // 二回目以降は何もしない
      }else {//一致する場合
      resetError();
    }
  }

  // フォームをリセットする
  function resetForm(){
    form.reset()
  }

//
// 関数の実行
//
}
// サイトにアクセスしたときにemailValidationという関数を実行する
window.onload = emailValidation;
