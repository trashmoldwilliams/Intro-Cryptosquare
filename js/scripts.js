$(document).ready(function() {

  //Submit String
  $("#submit-button").click(function(event) {
    event.preventDefault();

    var textEntry = $("#code-entry").val().toLowerCase();
    var entryLength = textEntry.length;
    var alltext = "";

    //Format String
    for(var i = 0; i <= entryLength; i += 8) {
      var line = textEntry.slice([i], [i + 9]);

      //Pre-Encryption
      $("#result").append(line);
      $("#result").append("<br>");

      //Encryption
      alltext += line;
    }

    var alltextLength = alltext.length;

    // debugger;
    for (var i = 0; i <= 9; i++) {
      console.log("i: " + i);
      for (var j = 0; j <= 10 ; j += 9) {
        console.log("j: " + j);
        // debugger;
        var currentCharacter = alltext.charAt(0);
        $("#result-encryption").append(currentCharacter);
      }
    }

    //Show String
    // $("#result").text(textEntry);

  });
});
