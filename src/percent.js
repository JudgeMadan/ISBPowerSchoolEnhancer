
jQuery.get("termgrades.html", function(data) {
  data = data.match(/<td align.*\n.*\n.*\n.*\n.*S12.*/g);
  var names = [];
  var grades = [];
  //process
  for(var i=0; i < data.length; i++){
    names[i] = data[i].substring(17).match(/.*<\/td>/g)[0].slice(0, -5)
    grades[i] = data[i].match(/true">.*</g)[0].substring(6).slice(0,-1)
  }

  //create string
  var toReturn = "<p style='font-family:HelveticaNeue-Light, Helvetica Neue, Helvetica;font-size: 20px; padding-top:10px; text-align:center;'><strong>Percentages (Beta)</strong></p> <br> <table style='margin-left:0; width:100%'>"

  for(var i=0; i < names.length; i++){
    toReturn+="<tr>"
    toReturn += "<th>" + names[i] + "</th>" + "<th>" + grades[i] + "</th>"
    toReturn+="</tr>"

  }

  toReturn+="</table>"
  var change = document.getElementById("legend")
  change.innerHTML = toReturn + change.innerHTML;
  console.log(grades)
  console.log(names)
  console.log(data)
});
