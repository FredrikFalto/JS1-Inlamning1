function submit() {
  //Skapar variabler för all input
  let textInput1 = document.getElementById("inputText1").value;
  let textInput2 = document.getElementById("inputText2").value;
  let passwordInput = document.getElementById("inputPassword").value;
  let numberInput = document.getElementById("inputNumber").value;
  let checkboxInput = document.getElementById("inputCheckbox").checked;

  //Skapar arrayen där de inmatade namnen sedan läggs till, om användaren trycker på knappen igen så kommer arrayen rensas.
  //Lägger sedan till Marcus och Cihan i arrayen och sorterar den i bokstavsordning
  let names = [];
  names.push("Marcus", "Cihan");
  names.sort();

  //Kollar så att minst ett textfält är ifyllt
  if (textInput1.length == 0 && textInput2.length == 0) {
    alert("Du måste fylla i namnet på minst en person.");
    return;
  }

  //Kollar så att lösenordet är "KYH", annars avbryts funktionen
  if (passwordInput != "KYH") {
    alert("Välj ett annat lösenord")
    return;
  }

  //Kollar vilket/vilka textfält som är ifyllda och lägger till namn i arrayen
  if (textInput1.length != 0 && textInput2.length == 0) {
    names.push(textInput1);
  } else if (textInput1.length == 0 && textInput2.length != 0) {
    names.push(textInput2);
  } else if (textInput1.length != 0 && textInput2.length != 0) {
    names.push(textInput1);
    names.push(textInput2);
  }

  //Skriver ut hälsning till alla namn i arrayen
  names.forEach((item, i) => {
    document.getElementById("output").innerHTML += "<p>" + "Hejsan " + item + "!" + "</p>";
  });

  //Kollar om checkboxen är ikryssad och fyller i så fall på med så många hälsningsmeddelanden som är skrivet i nummerfältet
  if (checkboxInput == true) {
    for (var i = 0; i < numberInput; i++) {
      names.forEach((item, i) => {
        document.getElementById("output").innerHTML += "<p>" + "Hejsan " + item + "!" + "</p>";
      });
    }
  }
}