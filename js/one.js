function prepareRawDataOne() {
	var component = ["Mini Contests", "Team Contests", "Homework", "Problem Bs", 
					"Kattis Sets", "Achievements"];
	var head = ["Components", "Sum", 01, 02, 03, 04, 05, 06, 07, 08, 09, 10,
				11, 12];
	var field = ["mc", "tc", "hm", "ps", "ks", "ac"];
	var raw = [
		[1, 1, 1, 1, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'], // mc
		[0, 0, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],  // tc
		[1, 1.5, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],  //hw
		[0, 1, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],  //ps
		[0, 1, 1, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],  //ks
		[2, 1, 1, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']  //ac
	];
	
	var i, j;
	
	var tbody=$('table.abyss');
	// create table head
	for (i = 1; i < raw.length; i++) {
		var table = '';
		table.append("<tr" + component[i] + "class = \"" + field[i] + "\"/>"); // component cell
		var sum = 0;
		table // sum cell
	}
}