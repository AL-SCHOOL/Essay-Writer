function submit() {
  var book = document.getElementById("book").value;
  var author = document.getElementById("author").value;
  
  document.getElementById("title").innerHTML = title;
  document.getElementById("text").innerHTML = "Inside of the book " + book + " by " + author + "...";
}
