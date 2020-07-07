function check_Answers() {

	// for each question go to the document find quiz find question1 in quiz and get its value
	var question1 = document.quiz.question1.value;  
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;

	// declaring a variable called correct to hold the value of how many answers were correct
	// the current value of correct is zero but may be a higher number after the following if 
	// statement

	var correct = 0;

	// if the answer to the question is equal to the answer in quotes ie "Scoobert Doo" add one 
	// to the value of the variable called correct
	

	if (question1 == "Scoobert Doo") {
		correct++;                //if this is correct the variable correct now has a value of 1
	}
	if (question2 == "Four") {
		correct++;
	}
	if (question3 == "Lego") {
		correct++;
	}
	if (question4 == "Time and relative dimension in space") {
		correct++;
	}

	if (question5 == "Cat") {
		correct++;
	}

	if (question6 == "Blessing") {
		correct++;
	}

	// declare an array called pictures if score = 0 the image shown will be one with the index
	// of zero in the array
	var pictures = ["images/zero.png", "images/one.png", "images/two.png", "images/three.png", "images/four.png", "images/five.png", "images/six.png"];
	
	// declare an array called messages if score = 0 the message shown will be one with the index 
	// of zero in the array
	var messages = ["Thats not good!", "That's not great", "Thats ok", "You got half right", "Good job!", "Yay, nearly there", "WOW - Winner winner chicken dinner"];

	// the variable correct now holds the total number of questions guessed correctly make the 
	// variable score equal to the variable called correct
	var score = correct;

	// when button clicked go to the document get the element called "when_Clicked" and make it 
	// visible
	document.getElementById("when_Clicked").style.visibility = "visible";

	// go to the element called "quiz" and make it display nothing (invisible)
	document.getElementById("quiz").style.display = "none";

	// go to the element called "message" and make it print to screen whichever message in the 
	// messages array has an index which is equal to the value of score
	document.getElementById("message").innerHTML = messages[score];

	// go to the element called "total" and make it print to the screen the message in quotes 
	// where correct is equal to the number of correct answers 
	document.getElementById("total").innerHTML = `You got  ${correct}/6 questions right.`;

	// go to the element called images and print to the screen whichever picture in the pictures 
	// array has the same index as the value of score
	document.getElementById("images").src = pictures[score];
}