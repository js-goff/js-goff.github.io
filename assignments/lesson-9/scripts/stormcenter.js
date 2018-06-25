function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

function openInNewTab(url) {
  var win = window.open(url, '_thank-you.html');
  win.focus();
}