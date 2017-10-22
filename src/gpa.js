var getGPAs = function () {
  // Turns an array into an array of sub-arrays with a specified length
  // from https://stackoverflow.com/a/10456644
  Object.defineProperty(Array.prototype, 'chunk', {
    value: function (chunkSize) {
      var array = this;
      return [].concat.apply([], array.map(function (elem, i) {
        return i % chunkSize ? [] : [array.slice(i, i + chunkSize)];
      }));
    }
  });
  
  // Convert table to array without jQuery
  // from https://stackoverflow.com/a/34349561
  var dataArray = Array.prototype.map.call(document.getElementsByClassName('linkDescList grid'),
    function (tr) {return Array.prototype.map.call(tr.querySelectorAll('td'), function (td) {
      return td.innerHTML;
    });
  });

  dataArray = dataArray[0].chunk(16);

  console.log(dataArray);
  console.log('Number of rows: ' + dataArray.length);
  var numclasses = 0;
  var gpa2 = 0;

  // Convert 1-7 scale to traditional GPA
  var dictionary = {
    7 : 4.3,
    6 : 4,
    5 : 3.3,
    4 : 2.3,
    3 : 1.3,
    2 : 0,
    1 : 0
  };

  for (var gpa = 0, i = 0; i < dataArray.length; i++) {
    var gradeData = dataArray[i][12];
    var current = gradeData.match(/<a\s+href="[\S\s]*?">[\S\s]*?<\/a>/gi);
    if (current === null) {
      break;
    }
    var current = parseInt(current[0].replace(/(<\/?[^>]+>)/gi, ''));
    numclasses++;
    gpa2 += dictionary[current];
    if ((dataArray[i][11].substring(0, 2) == 'IB' || dataArray[i][11].substring(0, 2) == 'AP')
      && dataArray[i][11].substring(0, 15) != 'IB Math Studies') {
      gpa2 += 0.5;
    }
    gpa += current;
  }

  return [gpa / numclasses, gpa2 / numclasses];
};

var main = function () {
  // Element of webpage to change
  var GPAs = getGPAs();
  var gpa_display = '(S1) GPA: ' + GPAs[0].toFixed(3);
  var gpa_display2 = 'Traditional GPA: ' + GPAs[1].toFixed(3);

  // Create a <p> block with the text
  var disp = document.createElement('p');
  disp.style.fontSize = '20px';
  disp.style.fontFamily = 'Roboto';
  disp.style.textAlign = 'center';
  disp.style.marginBottom = '-5px';

  disp.appendChild(document.createTextNode(gpa_display));
  disp.appendChild(document.createElement('br'));
  disp.appendChild(document.createTextNode(gpa_display2));
  document.getElementsByTagName('tbody') [2].appendChild(disp);
};

main();
