import fs from "node:fs";

function capitalizeFile(fileName, callback) {
	let contents;

	// 1. Read contents from the file
	fs.readFile(fileName, (readFileError, data) => {
		if (readFileError) {
			callback(readFileError);
			return;
		}

		contents = data.toString();
		console.log("Read contents:", contents);
	});

	setTimeout(() => {
		const uppercased = contents.toUpperCase();

		// 2. Write uppercased contents to the file
		fs.writeFile(fileName, uppercased, (writeFileError) => {
			console.log("Finished writing:", uppercased);
			callback(writeFileError);
		});
	});
}

capitalizeFile("./example.txt", (error) => {
	if (error) {
		console.error(error);
		process.exitCode = 1;
	}
});
