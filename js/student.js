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
	for (i in studentTableHeadTitles){
		if(i==0 || i==1){
			tbody.append("<th>"+studentTableHeadTitles[i]+"</th>");
		}else{
			tbody.append("<th class='unused'>"+studentTableHeadTitles[i]+"</th>");
		}
	}
	tbody.append("</tr></thead>");
	//console.log(tbody);

	// insert table values
	tbody.append("<tbody>");
	for (i = 0; i < data.length; i++) {
		var row = "";
		row = row.concat("<tr class=\"" + studentTableField[i] + "\">"); // component cell
		row = row.concat("<td>" + studentTableFieldTitles[i] + "</td>");
		var sum = 0;
		row = row.concat("<td id='addsum'>" + sum + "</td>");
		for (j = 0; j < data[i].length; j++) {
			if (typeof(data[i][j]) == "number")
				sum += data[i][j];
			row = row.concat("<td class ='unused'>" + data[i][j] + "</td>");
		}
		$('#addsum').html(sum);
		row = row.concat("</tr>");
       
		// insert sum cell
		//var position = getPosition(row, "<td>", 2);
   		//row = [row.slice(0, position), "<td id=\"" + studentTableField[i] + "\">" + sum + "</td>", row.slice(position)].join('');
		summary.push(sum);
		tbody.append(row);
	}
	tbody.append("</tbody>");

	return summary;
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

