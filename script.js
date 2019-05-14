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
	else
}