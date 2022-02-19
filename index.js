const table = document.querySelector("table"); // 表
const todo = document.getElementById("todo"); // TODO
const submit = document.getElementById("submit"); // 登録ボタン

numOfAddedRows = 0;
const lastRowIndex = -1;
const lastCellIndex = -1;

// TODO登録ボタン
submit.addEventListener("click", () => {
  /* 表にタスクを追加する */

  // 1行を追加
  numOfAddedRows++;
  table.tBodies[0].insertRow(lastRowIndex);

  // 追加した行にセルを2つ追加(※行にセルを追加しなければならないことに気づかずハマった)
  table.tBodies[0].rows[numOfAddedRows].insertCell(lastCellIndex);
  table.tBodies[0].rows[numOfAddedRows].insertCell(lastCellIndex);

  // 追加したセルに入力ボックスの内容とチェックボックスを追加
  table.tBodies[0].rows[numOfAddedRows].cells[0].innerHTML = todo.value;

  const ch = Object.assign(document.createElement("input"), {
    type: "checkbox",
    name: "ch",
    value: "0",
  });

  table.tBodies[0].rows[numOfAddedRows].cells[1].appendChild(ch);
});
