// 課題
function emailValidation() {
  const email_confirm = document.getElementById("email_confirm");
  const email = document.getElementById("email");

  //確認フォームが入力フォームと一致しなければ,イベントを実施
  if (email_confirm.value !== email.value) {
    const existingErrorRow = document.getElementById("errorRow");
    if (!existingErrorRow) {
      // 親の<tr>要素を取得し、その親要素をたどって<table>全体を取得
      const emailRow = email_confirm.closest("tr"); // email_confirmを囲んでいる<tr>要素を取得
      const tableBody = emailRow.parentNode; // parentNodeプロパティで、自動生成された<tbody>を取得
      // 新しい行<tr>を挿入してエラーメッセージを表示
      //email_confirmを囲んでいる<tr>要素の親の、自動生成された<tbody>に対して、emailRowの次に行を追加
      // rowIndexは、新規挿入する行がテーブルの中で何番目にあるかを示す
      //insertRow()は新しい行のみを返す
      const newRow = tableBody.insertRow(emailRow.rowIndex + 1); // 何番目かを指定して、tbody要素全体を示すtableBodyに行を挿入する
      //errorRowという名前は、「エラーメッセージを表示するための行」であることを示すために命名

      newRow.setAttribute("id", "errorRow"); //setAttributeは、新しい<tr>(newRow)に新しいid属性(id=errorRow)を追加する
      const newCell = newRow.insertCell(0); //insertCell() メソッドは、新しいセル (<td>) を表の行 (<tr>) の最初のセルに挿入。その行全体を使うため0番目
      newCell.setAttribute("colspan", "2"); //colspan属性に2という値を入れ、2個のセルを連結。２個目を作ってなくても出来る
      newCell.style.color = "#d14539";
      newCell.textContent = "Eメールが一致しません";

      // Eメール(確認)の背景色を赤にする
      email_confirm.style.backgroundColor = "rgba(230,169,171,.5)";
    }
    // 確認フォームが入力フォームと一致する場合、
  } else {
    existingErrorRow.remove(); //エラーを消す
    email_confirm.style.backgroundColor = ""; // 背景色をリセットして元に戻す
  }
}

//inputイベントが発生したときにemailValidationという関数を実行する
//ユーザーが入力を行うたびにリアルタイムでバリデーションが行われる
document
  .getElementById("email_confirm")
  .addEventListener("input", emailValidation);
// document.getElementById("email").addEventListener("input", emailValidation);
