var haystackText = "";
function findMyText(needle, replacement) {
	if (haystackText.length == 0) {
		haystackText = document.getElementById("haystack").innerHTML;
	}
	var match = new RegExp(needle, "ig");
	var replaced = "";
	if (replacement.length > 0) {
		replaced = haystackText.replace(match, replacement);
	}
	else {
		var boldText = "<div style=\"background-color: yellow; display: inline; font-weight: bold;\">" + needle + "</div>";
		replaced = haystackText.replace(match, boldText);
	}
	document.getElementById("haystack").innerHTML = replaced;
}

function textColorChange() {
	document.getElementById("text").addEventListener('click', function(event) {
			document.body.style.color = "blue";
		}
	);
}

