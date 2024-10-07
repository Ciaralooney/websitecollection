// Showing the sub menu function
function show() {
	var x = document.getElementById("expandingMenu");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

/* Add the JavaScript with the event handler for onchange to react to the bar changing value,
 and call the function “slide” */
document.getElementById("likeWebsite").onchange = slide;

function slide() {
	var x = document.getElementById("likeWebsite").value;
	// If the user rates it more than 60 display It's Great!
	if (x>60) {
		document.getElementById("opinion").innerHTML="It's Great!";
	}
	// If the user rates it more than 40 display It's Good!
	else if (x>40) {
		document.getElementById("opinion").innerHTML="It's Good";
	}
	// If the user rates it less than 40 display It's Okay
	else {
		document.getElementById("opinion").innerHTML="It's Okay";
	}
}

// This binds the image's mouse-over event to the function changeOver
document.getElementById("hamtaro").onmouseover = changeOver;

// This binds the image's mouse-out event to the function changeOver
document.getElementById("hamtaro").onmouseout = changeOut;

function changeOver()
{
	// Changes the original image to a new image when the mouse is over it
	// Image Source: https://gameation.wordpress.com/2014/10/31/spotlight-hamtaro-and-licensed-games/
	document.getElementById("hamtaro").src = "images/hamtaro_with_friends.jpg";
}

function changeOut()
{
	// Changes back to the original image when the mouse moves away
	document.getElementById("hamtaro").src = "images/hamtaro.jpg";
}

// This function gets the users input and displays it in a different text style
function changeText() {
	var name;
	// Get the value of the input field with id="favCharacter"
	name = document.getElementById("favCharacter").value;
	// making userEntry also equal the input
	document.getElementById("userEntry").innerHTML = name;
	// When displaying the users input this will make the font bigger
	document.getElementById('userEntry').style.fontSize='1.7em'
	// Change colour of font
	document.getElementById("userEntry").style.color = "orange";
	// Change font type
	document.getElementById("userEntry").style.fontFamily = "Impact,Charcoal,sans-serif";
}

/* Add the JavaScript with the event handler for onchange to react to buttons being pressed,
 and call the function "startGame" */
document.getElementById("startGame").onclick = playGame;

// playGame function used to load a new hamster picture and info when the button is pressed.
function playGame() {
	// generate a random number between 1 and 15
	var number = Math.floor((Math.random() * 15) + 1)

	// change the source of the image to the appropriate image
	document.getElementById("image").src = "images/hamster" + number + ".png";

	// If the number generated matches the first hamster
	if (number === 1) {
		// Updating the correct information for Hamtaro
		document.getElementById("name").innerHTML = "Hamtaro";
		document.getElementById("friend").innerHTML = "Oxnard and Boss";
		document.getElementById("fact").innerHTML = "He is brave, he once saved Penelope from a cat.";
	} else {
		// If the number generated matches the second hamster
		if (number === 2) {
			// Updating the correct information for Boss
			// Image Source: https://hamtaro.fandom.com/wiki/Boss_Runs_Away
			document.getElementById("name").innerHTML = "Boss";
			document.getElementById("friend").innerHTML = "Hamtaro";
			document.getElementById("fact").innerHTML = "He is a wild hamster. Since he doesn't have a " +
				"home, he lives in the Ham-Ham Clubhouse.";
		}
		// If the number generated matches the third hamster
		if (number === 3) {
			// Updating the correct information for Oxnard
			// Image Source: https://hamhamparadise.tumblr.com/post/184624359190/may-3rd-happy-birthday-oxnard-oxnard-is-one-of/amp
			document.getElementById("name").innerHTML = "Oxnard";
			document.getElementById("friend").innerHTML = "Hamtaro";
			document.getElementById("fact").innerHTML = "He is fond of food and always carries a sunflower" +
				" seed with him.";
		}
		// If the number generated matches the fourth hamster
		if (number === 4) {
			// Updating the correct information for Bijou
			// Image Source: https://hamtaro.fandom.com/wiki/Bijou%27s_Favorite_Ribbon
			document.getElementById("name").innerHTML = "Bijou";
			document.getElementById("friend").innerHTML = "Pashmina, Penelope and Sandy";
			document.getElementById("fact").innerHTML = "She moved from France to Hamtaro's neighbourhood.";
		}
		// If the number generated matches the fifth hamster
		if (number === 5) {
			// Updating the correct information for Pashmina
			// Image Source: https://hamhamparadise.tumblr.com/post/97658732360/today-is-pashminas-birthday-916-today-is-the/amp
			document.getElementById("name").innerHTML = "Pashmina";
			document.getElementById("friend").innerHTML = "Penelope";
			document.getElementById("fact").innerHTML = "She loves her pink wooly scarf more than anything.";
		}
		// If the number generated matches the sixth hamster
		if (number === 6) {
			// Updating the correct information for Penelope
			// Image Source: https://hamhamparadise.tumblr.com/post/183196326540/march-3rd-happy-birthday-penelope-penelope-is/amp
			document.getElementById("name").innerHTML = "Penelope";
			document.getElementById("friend").innerHTML = "Pashmina";
			document.getElementById("fact").innerHTML = 'Penelope can only say one word; "Ookwee!".';
		}

		// If the number generated matches the seventh hamster
		if (number === 7) {
				// Updating the correct information for Maxwell
				// Image Source: https://hamtaro.fandom.com/wiki/Maxwell%27s_Big_Scoop!
				document.getElementById("name").innerHTML = "Maxwell";
				document.getElementById("friend").innerHTML = "Sandy";
				document.getElementById("fact").innerHTML = "He lives in a bookshop and loves to read." +
					" He has a mutual crush on Sandy.";
		}

		// If the number generated matches the eight hamster
		if (number === 8) {
			// Updating the correct information for Sandy
			// Image Source: https://tenor.com/en-GB/view/hamster-hamtaro-gif-24211526
			document.getElementById("name").innerHTML = "Sandy";
			document.getElementById("friend").innerHTML = "Stan and Maxwell";
			document.getElementById("fact").innerHTML = "She loves gymnastics and she was seperated from " +
				"her brother, Stan when they were young.";
		}

		// If the number generated matches the ninth hamster
		if (number === 9) {
			// Updating the correct information for Stan
			// Image Source: https://hamhamparadise.tumblr.com/post/185415165515/june-6th-happy-birthday-stan-stan-is-part-of
			document.getElementById("name").innerHTML = "Stan";
			document.getElementById("friend").innerHTML = "Sandy";
			document.getElementById("fact").innerHTML = "He loves skateboarding and has a crush on " +
				"every girl he meets.";
		}

		// If the number generated matches the tenth hamster
		if (number === 10) {
			// Updating the correct information for Howdy
			// Image Source: https://www.pinterest.ie/pin/419186677815571166/
			document.getElementById("name").innerHTML = "Howdy";
			document.getElementById("friend").innerHTML = "Dexter";
			document.getElementById("fact").innerHTML = "He always wears an apron because he lives in a" +
				" corner shop.";
		}

		// If the number generated matches the eleventh hamster
		if (number === 11) {
			// Updating the correct information for Dexter
			// Image Source: https://hamhamparadise.tumblr.com/post/130964810340/hamtarogifs-october-11-happy-birthday-dexter
			document.getElementById("name").innerHTML = "Dexter";
			document.getElementById("friend").innerHTML = "Howdy";
			document.getElementById("fact").innerHTML = "He doesn't actually wear glasses." +
				" His markings just look like them.";
		}

		// If the number generated matches the twelfth hamster
		if (number === 12) {
			// Updating the correct information for Panda
			// Image Source: https://hamtaro.fandom.com/wiki/Panda/Gallery?file=Bscap0138.jpg
			document.getElementById("name").innerHTML = "Panda";
			document.getElementById("friend").innerHTML = "Cappy";
			document.getElementById("fact").innerHTML = "He loves to design and build things. " +
				"He designed the Fun Park. Panda's owner is a carpenter.";
		}

		// If the number generated matches the thirteenth hamster
		if (number === 13) {
			// Updating the correct information for Snoozer
			// Image Source: https://www.pinterest.nz/pin/626492998173026133/
			document.getElementById("name").innerHTML = "Snoozer";
			document.getElementById("friend").innerHTML = "Turtly";
			document.getElementById("fact").innerHTML = "He sleeps all the time but will sometimes mutter" +
				" advice for the Ham-Hams.";
		}

		// If the number generated matches the fourteenth hamster
		if (number === 14) {
			// Updating the correct information for Cappy
			// Image Source: https://hamtaro.fandom.com/wiki/Cappy/Gallery?file=9030.png
			document.getElementById("name").innerHTML = "Cappy";
			document.getElementById("friend").innerHTML = "Panda";
			document.getElementById("fact").innerHTML = "Cappy always wears a cap. Since Cappy loves to" +
				" hide he will put anything on his head.";
		}

		// If the number generated matches the fifteenth hamster
		if (number === 15) {
			// Updating the correct information for Jingle
			// Image Source: https://www.tumbex.com/hamhamparadise.tumblr/post/637320298307420160/december-12th-happy-birthday-jingle-jingle-is
			document.getElementById("name").innerHTML = "Jingle";
			document.getElementById("friend").innerHTML = "Herbert";
			document.getElementById("fact").innerHTML = "He is a Ham-poet and plays the guitar. " +
				"Jingle travels the world with Herbert. ";
		}
	}
}