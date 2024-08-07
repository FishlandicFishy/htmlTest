function doStuff() {
	let the = document.getElementById("keyboard").value
	the = the.replace("Now, ", "");
	the = the.replace("First things first, ", "");
	the = the.replace("Firstly, ", "");
	the = the.replace("Next, ", "");
	the = the.replace("First, ", "");
	the = the.replace("Finally, ", "");
	the = the.replace("Last but not least, ", "");
	the = the.replace("need to", "");
	the = the.replace("we'll", "you");
	the = the.replace("our", "the");
	the = the.replace("within", "in");
	the = the.replace("also", "");
	the = the.replace("free", "");
	the = the.replace("Click the link below", "");
	the = the.replace("to get started", "");
	the = the.replace("step-by-step", "");
	the = the.replace("This will help you", "You could");
	the = the.replace("in this case, ", "");
	the = the.replace("", "");
	console.log(the);
	event.preventDefault();
}