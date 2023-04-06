$(document).ready(function () {
  let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  let timerRef = document.querySelector(".timerDisplay");
  let int = null;
  const timerData = document.getElementById("time");

  $("#btnStart").on("click touchstart", function () {
    if (int !== null) {
      clearInterval(int);
    }
    int = setInterval(displayTimer, 10);

    var pieces = $(".droppable_container p");
    pieces.each(function () {
      var leftPosition = Math.floor(Math.random() * 290) + "px";
      var topPosition = Math.floor(Math.random() * 290) + "px";
      $(this).addClass("draggablePiece").css({
        position: "absolute",
        left: leftPosition,
        top: topPosition,
      });
      $("#pieceContainer").append($(this));
    });
    $(this).hide();
    $("#btnReset").show();
    implementLogic();
  });

  function CheckIfPuzzleIsSolved() {
    if ($("#puzzleContainer .droppedPiece").length != 8) {
      return false;
    }
    for (var k = 0; k < 7; k++) {
      var item = $("#puzzleContainer .droppedPiece:eq(" + k + ")");
      var order = item.data("order");
      if (k != order) {
        clearInterval(int);
        swal("ohh no!", "Try again!", "error");
        return false;
      }
    }
    clearInterval(int);
    const result1 = timerData.textContent;
    swal(
      "Good job!",
      "Hurray you have completed the puzzle in " + result1 + " seconds",
      "success"
    );
    return true;
  }

  function implementLogic() {
    $(".draggablePiece").draggable({
      revert: "invalid",
      start: function () {
        if ($(this).hasClass("droppedPiece")) {
          $(this).removeClass("droppedPiece");
          $(this).parent().removeClass("piecePresent");
        }
      },
    });
    $(".droppable_container").droppable({
      accept: function () {
        return !$(this).hasClass("piecePresent");
      },
      drop: function (event, ui) {
        var draggableElement = ui.draggable;
        var droppedOn = $(this);
        droppedOn.addClass("piecePresent");
        $(draggableElement)
          .addClass("droppedPiece")
          .css({
            top: 0,
            left: 0,
            position: "relative",
          })
          .appendTo(droppedOn);
        CheckIfPuzzleIsSolved();
      },
    });
  }
  function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
      milliseconds = 0;
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
          minutes = 0;
          hours++;
        }
      }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms =
      milliseconds < 10
        ? "00" + milliseconds
        : milliseconds < 100
        ? "0" + milliseconds
        : milliseconds;

    timerRef.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
  }
});
