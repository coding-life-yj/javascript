function proc(sel_val) {
  //alert(val);
  let calVal = document.querySelector("#output").value;
  if (sel_val == "=") {
    calVal = eval(calVal);
  } else if (sel_val == "C") {
    calVal = "";
  } else {
    calVal = calVal + sel_val;
  }
  document.querySelector("#output").value = calVal;
}
