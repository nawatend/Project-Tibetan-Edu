let stories = document.getElementsByClassName("story");
let titleBook = document.getElementById("title_book");
let readingModeBox = document.getElementById("reading_mode");
let readingModeActive = false;
let selectedStory = "";

//selecting one story goes to reading mode
for (let i = 0; i < stories.length; i++) {
  stories[i].addEventListener("click", function() {
    selectedStory = stories[i].textContent
      .replace(/[\n\r]+|[\s]{2,}/g, " ") //replace spaces, enter, whites spaces
      .trim();

    //insert title
    titleBook.textContent = selectedStory;

    //turn on reading mode
    readingModeActive = true;
    if (readingModeActive === true) {
      readingModeBox.style.display = "block";
    } else {
      readingModeBox.style.display = "none";
    }

    console.log(selectedStory);
  });
}
