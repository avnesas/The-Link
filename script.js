// script.js
function dynamicTabTitle() {
  const titleElement = document.getElementById("dynamic-title");
  const text = "THE LINK";
  let index = 0;
  let blinkCount = 0;

  function updateTitle() {
    titleElement.textContent = text.substring(0, index) + (blinkCount % 2 === 0 ? "_" : "");
    if (index === text.length) {
      blinkCount++;
      if (blinkCount === 8) { // Blink four times and then stop
        setTimeout(reverseTitle, 500); // Pause before reversing
      } else {
        setTimeout(updateBlink, 500); // Blink every 500ms
      }
    } else {
      index++;
      setTimeout(updateTitle, 100); // Typing speed
    }
  }

  function updateBlink() {
    titleElement.textContent = text + "_";
    setTimeout(updateTitle, 500); // Pause before typing
  }

  function reverseTitle() {
    index = text.length;
    setTimeout(updateReverse, 100); // Backspace speed
  }

  function updateReverse() {
    titleElement.textContent = text.substring(0, index) + "_";
    if (index === 0) {
      index = text.length;
      setTimeout(updateTitle, 500); // Pause before typing
    } else {
      index--;
      setTimeout(updateReverse, 100); // Backspace speed
    }
  }

  // Initial call to start the animation
  updateTitle();
}

// Call the dynamicTabTitle function to start the effect
dynamicTabTitle();
