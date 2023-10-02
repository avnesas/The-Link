// script.js
function dynamicTabTitle() {
  const titleElement = document.getElementById("dynamic-title");
  const text = "THE LINK_";
  let index = 0;
  let isBlinking = true;

  function updateTitle() {
    titleElement.textContent = text.substring(0, index);
    if (index === text.length) {
      setTimeout(reverseTitle, 4000); // Wait for 4 seconds before reversing
    } else {
      index++;
      setTimeout(updateTitle, 200); // Typing speed
    }
  }

  function reverseTitle() {
    if (index === 0) {
      index++;
      isBlinking = true;
      setTimeout(updateTitle, 200); // Typing speed
    } else {
      titleElement.textContent = text.substring(0, text.length - index) + "_";
      index--;
      setTimeout(reverseTitle, 100); // Reversing speed
    }
  }

  updateTitle();
}

// Call the dynamicTabTitle function to start the effect
dynamicTabTitle();
