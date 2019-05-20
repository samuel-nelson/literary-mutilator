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

function ColorChange() {
	document.getElementById("color").addEventListener('click', function(event) {
			document.body.style.color = "blue";
		}
	);
}

function shuffle() {
	var txt = document.getElementById("shuffle").textContent;

	var words = txt.split(" ");

	words.map(function(t) {
		for(i = (words.length - 1); i > 0; i--){

			var j = Math.floor(Math.random() * (i + 1));

			var temp = words[i];
			words[i] = words[j];
			words[j] = temp;
		}

		document.getElementById("shuffle").textContent = words.join(" ");
	});
}