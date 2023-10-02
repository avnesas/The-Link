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
        setTimeout(reverseTitle, 4000); // Pause before reversing (4 seconds)
      } else {
        setTimeout(updateBlink, 4000); // Blink every 4 seconds
      }
    } else {
      index++;
      setTimeout(updateTitle, 100); // Typing speed
    }
  }

  function updateBlink() {
    titleElement.textContent = text + "_";
    setTimeout(updateTitle, 4000); // Pause before typing (4 seconds)
  }

  function reverseTitle() {
    index = text.length;
    setTimeout(updateReverse, 4000); // Backspace speed (4 seconds)
  }

  function updateReverse() {
    titleElement.textContent = text.substring(0, index) + "_";
    if (index === 0) {
      index = text.length;
      setTimeout(updateTitle, 4000); // Pause before typing (4 seconds)
    } else {
      index--;
      setTimeout(updateReverse, 100); // Backspace speed (typing speed)
    }
  }

  // Initial call to start the animation
  updateTitle();
}

// Call the dynamicTabTitle function to start the effect
dynamicTabTitle();
