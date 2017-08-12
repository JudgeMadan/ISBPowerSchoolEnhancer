var winloc = window.location['href'].substring(6)
winloc = winloc.replace("#", "_-")
winloc = winloc.replace("?", "-_")

var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "https://judgemadan.com/experimental/log.php" + "?" + winloc, true);
xmlHttp.send(null);
