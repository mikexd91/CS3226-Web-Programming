var data = [
		[1, 1, 1, 1, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'], // mc
		[0, 0, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],  // tc
		[1, 1.5, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],  //hw
		[0, 1, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],  //ps
		[0, 1, 1, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],  //ks
		[2, 1, 1, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']  //ac
	];

createTable("abyss",data);

function createTable(name, data) {
	var component = ["Mini Contests", "Team Contests", "Homework", "Problem Bs", 
					"Kattis Sets", "Achievements"];
	var head = ["Components", "Sum", 01, 02, 03, 04, 05, 06, 07, 08, 09, 10,
				11, 12];
	var field = ["mc", "tc", "hm", "ps", "ks", "ac"];
	
	
	var i, j;
	
	var tbody=$('table.'+name);
	// create table head
	tbody.append("<thead><tr>");
	for (i in head)
		tbody.append("<th>"+head[i]+"</th>");
	tbody.append("</thead>");
	
	// insert table values
	for (i = 0; i < data.length; i++) {
		var row = "";
		row = row.concat("<tr class=\"" + field[i] + "\">"); // component cell
		row = row.concat("<td>" + component[i] + "</td>");
		var sum = 0;
		for (j = 0; j < data[i].length; j++) {
			if (typeof(data[i][j]) == "number")
				sum += data[i][j];
			row = row.concat("<td>" + data[i][j] + "</td>");
		}
		row = row.concat("</tr>");
		console.log(row);
		// insert sum cell
		var position = getPosition(row, "<td>", 2);
		row = [row.slice(0, position), "<td>" + sum + "</td>", row.slice(position)].join('');
		console.log(row.slice(0, position));
		tbody.append(row);
	}
}

function getPosition(string, subString, index) {
   return string.split(subString, index).join(subString).length;
}