var getGPA = function () {
    var dataTable=Array.prototype.slice.call(document.getElementsByClassName("linkDescList grid"))

    var dataArray = [];

// Convert table to array
$(dataTable).each(function() {
    var arrayOfThisRow = [];
    var tableData = $(this).find('td');
    if (tableData.length > 0) {
        tableData.each(function() { arrayOfThisRow.push($(this).text()); });
        dataArray.push(arrayOfThisRow);
    }
});

Object.defineProperty(Array.prototype, 'chunk', {
    value: function(chunkSize) {
        var array=this;
        return [].concat.apply([],
            array.map(function(elem,i) {
                return i%chunkSize ? [] : [array.slice(i,i+chunkSize)];
            })
            );
    }
});
dataArray=dataArray[0].chunk(16)

console.log(dataArray);
console.log("Number of rows: "+dataArray.length)


var numclasses = 0;
for (var i=0;
    !(isNaN(parseInt(dataArray[i][12][0])));
    i++,numclasses++){}

    console.log("Number of classes: "+numclasses)

for (var gpa = 0, i = 0; numclasses > i; i++) {
    gpa += parseInt(dataArray[i][12][0]);
}

return gpa / numclasses;
}

var main = function ()
{
    var change = document.getElementsByTagName("tbody")[2];
    var gpa_display = "<p style='font-family:HelveticaNeue-Light, Helvetica Neue, Helvetica;font-size: 20px;text-align:center; margin-bottom:-5px;'>(S1) GPA: " + getGPA().toFixed(3)+"<br></p>";
    change.innerHTML = gpa_display;
}
main();

