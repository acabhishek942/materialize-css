function filterTable() {
  // Declare variables
  var input, filter, table, tr, td, i;
  input = document.getElementById("filter_value");
  filter = parseInt(input.value);
  table = document.getElementById("threshold_table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    td1 = tr[i].getElementsByTagName("td")[2];
    if (td && td1) {
      // modify this condition according to your requirement
      if (parseInt(td.innerHTML) < filter || parseInt(td1.innerHTML) < filter) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }

      if (parseInt(td.innerHTML) < filter)
        td.classList.add('red-text')
      if (parseInt(td1.innerHTML) < filter)
          td1.classList.add('red-text')
    }
  }
}

function resetTable() {
  table = document.getElementById("threshold_table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    tr[i].style.display = "";
  }
  var allRedTexts = document.getElementsByClassName("red-text");
  for (i = 0; i < allRedTexts.length; i++){
    allRedTexts[i].classList.remove("red-text");
  }
}
