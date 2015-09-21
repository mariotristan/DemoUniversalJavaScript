// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
	"use strict";

	var app = WinJS.Application;
	var activation = Windows.ApplicationModel.Activation;

	app.onactivated = function (args) {
		if (args.detail.kind === activation.ActivationKind.launch) {
			if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
				// TODO: This application has been newly launched. Initialize your application here.
			} else {
				// TODO: This application was suspended and then terminated.
				// To create a smooth user experience, restore application state here so that it looks like the app never stopped running.
			}

			args.setPromise(WinJS.UI.processAll().then(completed));

            // for readibility we change the code of the inline function 
		
		}
	};

	app.oncheckpoint = function (args) {
		// TODO: This application is about to be suspended. Save any state that needs to persist across suspensions here.
		// You might use the WinJS.Application.sessionState object, which is automatically saved and restored across suspension.
		// If you need to complete an asynchronous operation before your application is suspended, call args.setPromise().
	};

	function buttonClickHandler(eventInfo) {
	    var userName = document.getElementById("nameInput").value;
	    var greetingString = "Hello, " + userName + "!";
	    document.getElementById("greetingOutput").innerText = greetingString;
	}

	function ratingChanged(eventInfo) {

	    var ratingOutput = document.getElementById("ratingOutput");
	    ratingOutput.innerText = eventInfo.detail.tentativeRating;
	}

	function completed() {

	    // Retrieve the div that hosts the Rating control.
	    var ratingControlDiv = document.getElementById("ratingControlDiv");

	    // Retrieve the actual Rating control.
	    var ratingControl = ratingControlDiv.winControl;

	    // Register the event handler. 
	    ratingControl.addEventListener("change", ratingChanged, false);

	    //Retrieve the button and register our event handler. 
	    var helloButton = document.getElementById("helloButton");
	    helloButton.addEventListener("click", buttonClickHandler, false);

	}
	app.start();
})();
