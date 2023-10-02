// script.js
function dynamicTabTitle() {
  const titleElement = document.getElementById("dynamic-title");
  const text = "THE LINK_";
  let index = 0;
  let isTyping = true;

  function updateTitle() {
    if (isTyping) {
      titleElement.textContent = text.substring(0, index);
      if (index === text.length) {
        isTyping = false;
        setTimeout(updateTitle, 4000); // Wait for 4 seconds before reversing
      }
      index++;
    } else {
      titleElement.textContent = text.substring(0, index);
      if (index === 0) {
        isTyping = true;
        setTimeout(updateTitle, 0); // Start typing immediately
      }
      index--;
    }
  }

  updateTitle();
}

// Call the dynamicTabTitle function to start the effect
dynamicTabTitle();
