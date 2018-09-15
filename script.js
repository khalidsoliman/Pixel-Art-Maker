var table = document.getElementById("pixel_canvas");
var sub = document.getElementById("input_submit");
var ref = document.getElementById("RefreshPage");

// Add click listener to submit button
sub.addEventListener('click', function (e) {
    e.preventDefault();
    makeGrid();
});
ref.addEventListener('click', function (e) {
    window.location.reload()
});

// When size is submitted by the user, call makeGrid()
function makeGrid() {

    table.innerHTML = '';
    // Get height and width of the table
    var h = document.getElementById("input_height").value;
	var w = document.getElementById("input_width").value;
	// Get the value of the color we have to put on click
    var color = document.getElementById("colorPicker");
    //A function which fills color in the cell that was clicked and changes the color
    var addColor = function (cell) {
    	// Put the selected color on click
        cell.addEventListener('click', function () {
            cell.style.backgroundColor = color.value;
        });
    };
	//An event listener such that whenever any cell is clicked it calls addEvent function and changes it's color.
    for (var i = 0; i < h; i++) {
        var row = table.insertRow(i);
        for (var j = 0; j < w; j++) {
            var cell = row.insertCell(j);
            cell.addEventListener('click', addColor(cell));
        }
    }
}
