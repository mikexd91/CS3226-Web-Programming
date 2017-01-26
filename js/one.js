

function createTable(name, data) {
	component = ["Mini Contests", "Team Contests", "Homework", "Problem Bs", 
					"Kattis Sets", "Achievements"];
	head = ["Components", "Sum", 01, 02, 03, 04, 05, 06, 07, 08, 09, 10,
				11, 12];
	field = ["mc", "tc", "hm", "ps", "ks", "ac"];
	
	var summary = [name];
	
	var i, j;
	
	var tbody=$("table."+name);
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
		// insert sum cell
		var position = getPosition(row, "<td>", 2);
   		row = [row.slice(0, position), "<td id=\"" + field[i] + "\">" + sum + "</td>", row.slice(position)].join('');
		summary.push(sum);
		tbody.append(row);
	}

	return summary;
}

function getPosition(string, subString, index) {
   return string.split(subString, index).join(subString).length;
}

      	
function hightlightCrosses() {
  var topVal = 0;
  var topCell = 0;
  var cols = $("#studentTable").find("tbody").find("td");
  console.log($("#studentTable"));
  var colLen = cols.length;
    
	for (j = 0; j < colLen; j++){                
    var cellVal = cols[j].innerHTML; 

    if (cellVal == "x") {
      $(cols[j]).addClass("pinkCol");
    } 
  }
}

