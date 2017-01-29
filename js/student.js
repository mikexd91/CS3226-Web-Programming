function generateComponentScore(name) {
	var id = "#" + name + "ComponentScoreContainer"
	var container = $(id);
	var score = componentScores[name];
	//console.log(score);
	var speRow = "<p><b>SPE</b>(ed) component: <b>" + score.mc + " + " + score.tc + " = " + score.spe + "</b><br>";
	var dilRow = "<b>DIL</b>(igence) component: <b>" + score.hw + " + " + score.bs + " + " + score.ks + " + " + score.ac + " = " + score.dil + "</b><br>";
	var sumRow = "<b>Sum = SPE + DIL = " + score.spe + " + " + score.dil + " = " + score.sum + "</b><br>";
	
	container.append(speRow + dilRow + sumRow);
}

function createTable(name, data) {
	var summary = [name];
	var i, j;
	var tbody=$("table."+name);
	// create table head
	tbody.append("<thead><tr>");
	for (i in studentTableHeadTitles)
		tbody.append("<th>"+studentTableHeadTitles[i]+"</th>");
	tbody.append("</tr></thead>");
	//console.log(tbody);

	// insert table values
	tbody.append("<tbody>");
	for (i = 0; i < data.length; i++) {
		var row = "";
		row = row.concat("<tr class=\"" + studentTableField[i] + "\">"); // component cell
		row = row.concat("<td>" + studentTableFieldTitles[i] + "</td>");
		var sum = 0;
		for (j = 0; j < data[i].length; j++) {
			if (typeof(data[i][j]) == "number")
				sum += data[i][j];
			row = row.concat("<td>" + data[i][j] + "</td>");
		}
		row = row.concat("</tr>");
		// insert sum cell
		var position = getPosition(row, "<td>", 2);
   		row = [row.slice(0, position), "<td id=\"" + studentTableField[i] + "\">" + sum + "</td>", row.slice(position)].join('');
		summary.push(sum);
		tbody.append(row);
	}
	tbody.append("</tbody>");
    hideTable(name);
	return summary;
}
function hideTable(name){
	var i = 11;
	//$('table.'+name).find('td:nth-child(16),th:nth-child(16)').addClass('unused');
	$('table.'+name).find('td:nth-child(15),th:nth-child(15)').addClass('unused');
	$('table.'+name).find('td:nth-child(14),th:nth-child(14)').addClass('unused');
	$('table.'+name).find('td:nth-child(13),th:nth-child(13)').addClass('unused');
	$('table.'+name).find('td:nth-child(12),th:nth-child(12)').addClass('unused');
	$('table.'+name).find('td:nth-child(11),th:nth-child(11)').addClass('unused');
	$('table.'+name).find('td:nth-child(10),th:nth-child(10)').addClass('unused');
	$('table.'+name).find('td:nth-child(9),th:nth-child(9)').addClass('unused');
	$('table.'+name).find('td:nth-child(8),th:nth-child(8)').addClass('unused');
	$('table.'+name).find('td:nth-child(7),th:nth-child(7)').addClass('unused');
	$('table.'+name).find('td:nth-child(6),th:nth-child(6)').addClass('unused');
	$('table.'+name).find('td:nth-child(5),th:nth-child(5)').addClass('unused');
	$('table.'+name).find('td:nth-child(4),th:nth-child(4)').addClass('unused');
	$('table.'+name).find('td:nth-child(3),th:nth-child(4)').addClass('unused');	

}
function getPosition(string, subString, index) {
   return string.split(subString, index).join(subString).length;
}

function hightlightCrosses() {
  var topVal = 0;
  var topCell = 0;
  var cols = $("#studentTable").find("tbody").find("td");
  //console.log($("#studentTable"));
  var colLen = cols.length;
    
	for (j = 0; j < colLen; j++){                
    var cellVal = cols[j].innerHTML; 

    if (cellVal == "x") {
      $(cols[j]).addClass("pinkCol");
    } 
  }
}

