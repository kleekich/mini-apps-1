
var app = {

	fileContent: 'NOT READ',

	readFile: function(event){

		console.log("HELHELHELELEHLEHLEHELEHLEHLE");
		// Check for the various File API support.
		// if (window.File && window.FileReader && window.FileList && window.Blob) {
		//   // Great success! All the File APIs are supported.
		// } else {
		//   alert('The File APIs are not fully supported in this browser.');
		// }

		
		var fileToLoad = document.getElementById("inputFile").files[0];

		var fileReader = new FileReader();
		fileReader.onload = function(fileLoadedEvent){
			
		      var textFromFileLoaded = fileLoadedEvent.target.result;
		      console.log("================");
		 	console.log(textFromFileLoaded);
		 	console.log("================");
		      document.getElementById('inputFile').name = textFromFileLoaded;
		 };
		 fileReader.readAsText(fileToLoad, "UTF-8");
		 //console.log(document.getElementById('inputFile').name);
	}


}