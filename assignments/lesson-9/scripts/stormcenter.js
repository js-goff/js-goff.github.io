function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function openInNewTab(url) {
  var win = window.open(url, 'https://js-goff.github.io/assignments/lesson-9/thank-you.html');
  win.focus();
}