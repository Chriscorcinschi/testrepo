const performClassListOperations = () => {
	const paragraph = document.getElementById("myParagraph");
	if (!paragraph) return;

	const { classList } = paragraph;
	// add, remuve e toggle class
	classList.add("italic");
	// Check if a class exists
	console.log(`Has italic class: ${classList.contains("italic")}`);
	classList.remove("highlight");
	classList.toggle("underline", true);

	// Replace a class after 2 seconds and log in the current classes
	setTimeout(() => {
		classList.replace("underline", "strike");
		console.log(`Current classes: ${[...classList].join(" ")}`);
	}, 2000);
};
