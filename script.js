const genresDiv = document.getElementById("genres");
const themesDiv = document.getElementById("themes");
const themeSection = document.getElementById("theme-section");
const recommendBtn = document.getElementById("recommend-btn");
const recommendation = document.getElementById("recommendation");

let selectedGenre = "";
let selectedTheme = "";

// Generate Genre Buttons
Object.keys(books).forEach((genre) => {
  const button = document.createElement("button");
  button.textContent = genre;
  button.addEventListener("click", () => {
    selectedGenre = genre;
    generateThemes(genre);
  });
  genresDiv.appendChild(button);
});

// Generate Theme Buttons
function generateThemes(genre) {
  themesDiv.innerHTML = ""; // Clear previous themes
  themeSection.style.display = "block";

  Object.keys(books[genre]).forEach((theme) => {
    const button = document.createElement("button");
    button.textContent = theme;
    button.addEventListener("click", () => {
      selectedTheme = theme;
      recommendBtn.style.display = "block";
    });
    themesDiv.appendChild(button);
  });
}

// Show Recommendation
recommendBtn.addEventListener("click", () => {
  const bookList = books[selectedGenre][selectedTheme];
  const randomBook = bookList[Math.floor(Math.random() * bookList.length)];
  recommendation.textContent = `We recommend: "${randomBook}" from ${selectedGenre} (${selectedTheme})`;
});
