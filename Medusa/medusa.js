
// turn on the consent form asking for permisison to access the camera
function on() {
    document.getElementById("consent-form").style.display = "block";
}
// turn off the consent form asking for permission to access the camera
function off() {
    document.getElementById("consent-form").style.display = "none";
}

function start_webgazer(){
    webgazer.setRegression('ridge') 
  	    .setTracker('clmtrackr')
  	    .setGazeListener(function(data, elapsedTime) {
            if (data == null) {
                return;
            }
            var xprediction = data.x; //these x coordinates are relative to the viewport 
            var yprediction = data.y; //these y coordinates are relative to the viewport
            console.log(elapsedTime); //elapsed time is based on time since begin was called
        })
    	.begin()
}

window.onbeforeunload = function() {
    webgazer.end(); 
}

// create the overlay for calibration and validation
function create_overlay(){
    var canvas = document.createElement('canvas');
    canvas.id     = "canvas-overlay";
    // style the newly created canvas
    canvas.style.zIndex   = 10;
    canvas.style.position = "fixed";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.backgroundColor = "black";
    // add the canvas to web page
    document.body.appendChild(canvas);
}

// delete the overlay used for calibration and validation
function delete_overlay(){
    var elem = document.getElementById("canvas-overlay");
    elem.parentNode.removeChild(elem);
}