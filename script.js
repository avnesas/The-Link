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
    if (isBlinking && index === 0) {
      index = text.length;
    } else {
      index--;
    }
    setTimeout(updateTitle, 100); // Adjust speed as needed
  }

  updateTitle();
}

// Call the dynamicTabTitle function to start the effect
dynamicTabTitle();
