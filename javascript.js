// This binds the image's mouse-over event to the function changeOver
document.getElementById("hamtaro").onmouseover = changeOver;

// This binds the image's mouse-out event to the function changeOver
document.getElementById("hamtaro").onmouseout = changeOut;

function changeOver(website_number)
{
	var website_name = "web"+ website_number

	// Changes the original image to a new image when the mouse is over it
	document.getElementById(website_name).src = "images/"+ website_name + ".gif";
}

function changeOut(website_number)
{
	var website_name = "web"+ website_number

	// Changes back to the original image when the mouse moves away
	document.getElementById(website_name).src = "images/"+website_name+".png";
}
