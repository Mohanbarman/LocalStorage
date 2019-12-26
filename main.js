const key_in = document.getElementById("key_input");
const value_in = document.getElementById("value_input");
const submit_btn = document.querySelector(".btn");
const clear_btn = document.querySelector(".clear-btn");

clear_btn.onclick = function() {
  localStorage.clear();
  fetchData();
};

function showData() {
  document.querySelector("tbody").innerHTML = null;

  for (let i = 0; i <= localStorage.length; i++) {
    const row_tr = document.createElement("tr");
    const key_td = document.createElement("td");
    const value_td = document.createElement("td");

    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    if (key && value) {
      key_td.textContent = key;
      value_td.textContent = value;

      row_tr.appendChild(key_td);
      row_tr.appendChild(value_td);

      document.querySelector("table tbody").appendChild(row_tr);
    }
  }
}

function saveData(key, value) {
  localStorage.setItem(key, value);
}

function fetchData() {
  for (let i = 0; i <= localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);

    showData(key, value);
  }
}

submit_btn.onclick = function() {
  if (key_in && value_in) {
    const key = key_in.value;
    const value = value_in.value;

    saveData(key, value);
    showData();
  }
};

showData();
