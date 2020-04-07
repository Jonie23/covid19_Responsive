
// enable submit button
function manage(ticks) {
  let btn = document.getElementById('btn')

  let gender = document.getElementsByName("sex");
  let checkA = 0;
  for (i = 0; i < gender.length; i++) {
    if (gender[i].value != "") {
      checkA++;
      break;
    }
  }

  let age = document.getElementsByName("age");
  let checkB = 0;
  for (i = 0; i < age.length; i++) {
    if (age[i].value != "") {
      checkB++;
      break;
    }
  }

  let cough = document.getElementsByName("cough");

  let check1 = 0;
  for (i = 0; i < cough.length; i++) {
    if (cough[i].checked) {
      check1++;
      break;
    }
  }
  let fever = document.getElementsByName("fever");
  let check2 = 0;
  for (i = 0; i < fever.length; i++) {
    if (fever[i].checked) {
      check2++;
      break;
    }
  }

  let breathe = document.getElementsByName("breathe");
  check3 = 0;
  for (i = 0; i < breathe.length; i++) {
    if (breathe[i].checked) {
      check3++;
      break;
    }
  }

  let throat = document.getElementsByName("throat");
  check4 = 0;
  for (i = 0; i < throat.length; i++) {
    if (throat[i].checked) {
      check4++;
      break;
    }
  }

  let ache = document.getElementsByName("ache");
  check5 = 0;
  for (i = 0; i < ache.length; i++) {
    if (ache[i].checked) {
      check5++;
      break;
    }
  }

  let contact = document.getElementsByName("contact");
  check6 = 0;
  for (i = 0; i < contact.length; i++) {
    if (contact[i].checked) {
      check6++;
    }
  }

  let travel = document.getElementsByName("travel");
  check7 = 0;
  for (i = 0; i < travel.length; i++) {
    if (travel[i].checked) {
      check7++;
    }
  }

  if (
    check1 &&
    check2 &&
    check3 &&
    check4 &&
    check5 &&
    check6 &&
    check7 &&
    checkA &&
    checkB
  ) {
    //alert("Done. Please click the submit button to submit");
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

// submit button
function submitAnswers() {
    let yes_Total = 0;
  
    let options = document.getElementsByTagName("input");
    for (i = 0; i < options.length; i++) {
      if (options[i].checked) {
        if (options[i].value == "yes") {
          yes_Total++;
        }
      }
    }
  
    let new_Total = yes_Total;
  
    if (new_Total < 3) {
      document.getElementById("answer").innerText =
        "Low Risk Instance. Please stay at home and self isolate to avoid getting infected";
    } else if (new_Total > 3) {
      document.getElementById("answer").innerText =
        "High Risk Instance!! Please seek medical assistance to get tested as soon as possible ";
    } else {
      document.getElementById("answer").innerText =
        "Mild Risk Instance!. Please seek medical advice to check for a possible underlying health condition";
    }
  }
  
  //reset button
  function resetForm() {
    let selects = document.getElementsByTagName("select");
    for (i = 0; i < selects.length; i++) {
      selects[i].value = "";
    }
  
    let options = document.getElementsByTagName("input");
    for (i = 0; i < options.length; i++) {
      options[i].checked = false;
    }
  
    document.getElementByquerySelector("#answer").innerText =
      "Your recommendation will show up here";
  }
  