document.getElementById("subButton").addEventListener("click", onSubButton)

function onSubButton(event)
{
	console.log("button clicked!");

	let emailField = document.getElementById("emailField");
	if(emailField.value == "")
	{
		return;
	}

	let theToastElem = document.getElementById("liveToast");
	let theToast = new bootstrap.Toast(theToastElem);
	theToast.show();
}