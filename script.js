// script.js
function dynamicTabTitle() {
  const titleElement = document.getElementById("dynamic-title");
  const text = "THE LINK_";
  let index = 0;
  let isBlinking = true;

  function updateTitle() {
    titleElement.textContent = text.substring(0, index);
    if (index === text.length) {
      isBlinking = !isBlinking;
      if (isBlinking) {
        titleElement.textContent = text;
      } else {
        titleElement.textContent = text.substring(0, text.length - 1);
      }
    }
    index++;
    if (index <= text.length) {
      setTimeout(updateTitle, 200); // Adjust typing speed as needed
    }
  }

  updateTitle();
}

// Call the dynamicTabTitle function to start the effect
dynamicTabTitle();
