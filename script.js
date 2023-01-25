function currenttime() {
  var rightNow = dayjs().format('MMMM DD, YYYY [at] hh:mm:ss A');
  $("#currentDay").text(rightNow);
  }
currenttime() 
setInterval (currenttime, 1000)
  