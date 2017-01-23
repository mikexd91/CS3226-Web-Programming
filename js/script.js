$(document).ready(function(){
  processData(); 
	$('table.sortable').tablesorter({
		sortList: [[11,1]] 
	});
});

$(document).ready(function(){
	hightlightCrosses();	
});

function processData(){
      
   var student = [
       { mc : 4, tc: 0, spe:3, hw: 2.5, bs:1, ks:2, ac: 4, dil: 9, sum: 0 },
       { mc : 0, tc: 0, spe:3, hw: 2.5, bs:1, ks:2, ac: 4, dil: 4, sum: 0 },
       { mc : 0, tc: 0, spe:3, hw: 2.5, bs:1, ks:2, ac: 4, dil: 4, sum: 0 },
       { mc : 0, tc: 0, spe:3, hw: 6, bs:1, ks:2, ac: 4, dil: 7.5, sum: 0 },
       { mc : 0, tc: 5, spe:1, hw: 2.5, bs:3, ks:2, ac: 4, dil: 5, sum: 0 },
       { mc : 2, tc: 0, spe:3, hw: 2.5, bs:1, ks:2, ac: 4, dil: 1.5, sum: 0 },
       { mc : 0, tc: 3, spe:3, hw: 6, bs:4, ks:2, ac: 4, dil: 8.5, sum: 0 },
       { mc : 0, tc: 0, spe:2, hw: 2.5, bs:1, ks:2, ac: 4, dil: 9, sum: 0 },
       { mc : 3, tc: 8, spe:3, hw: 2.5, bs:1, ks:2, ac: 4, dil: 9.5, sum: 0 },
       { mc : 0, tc: 3, spe:3, hw: 2.5, bs:1, ks:2, ac: 4, dil: 10, sum: 0 }];
   
   for(var i = 0; i< student.length; i++){
      findSum(student[i]);
    }
    
   for(var i = 0; i< student.length; i++){
     fillCells(student[i],i+1);
   }
   highestThreeSum();
   individualScores();

}

function findSum(student_list){
  student_list.sum =  student_list.mc + student_list.tc + student_list.spe + student_list.hw +
  student_list.bs + student_list.ks + student_list.ac + student_list.dil;
}

function fillCells(student_list,row){
  //consolde.log(student);
  var list = [];
  for (var key in student_list) {
      list.push(student_list[key]);
      //console.log(key + " -> " + student_list[key]);
  }

  var theTable = document.getElementById("colorTable");
  var theRows = theTable.getElementsByTagName("tr");
  var rowLength = theTable.rows.length;
  //gets cells of current row  
  var theCells = theTable.rows.item(row).cells;
  //gets amount of cells of current row     
  var colLength = theCells.length;
  for (j = 3; j< colLength; j++){
      theCells.item(j).innerHTML = list[j-3];
      console.log(key + " -> " + student_list[key]);
  } 
}

function highestThreeSum () {
	     
    var theTable = document.getElementById("colorTable");
    var theRows = theTable.getElementsByTagName("tr");
           
    //gets rows of table
     var rowLength = theTable.rows.length;
     var goldVal = 0;
    var silverVal = 0;
    var bronzeVal = 0;
    var goldRow = 0;
    var silverRow = 0;
    var bronzeRow = 0;
    //loops through rows    
    for (i = 1; i < rowLength; i++){
      //gets cells of current row  
       var theCells = theTable.rows.item(i).cells;
       //gets amount of cells of current row     
       var cellLength = theCells.length;
       var cellVal = theCells.item(cellLength-1).innerHTML;
       if(cellVal > goldVal){
        //if current gold is bigger than current silver, move silver to bronze
          if(goldVal > silverVal){
            bronzeVal = silverVal;
            bronzeRow = silverRow;
          }
       	   silverVal = goldVal;
       	   silverRow = goldRow;
       	   goldVal = cellVal;
       	   goldRow = i;

       }else if(cellVal > silverVal){
       	   bronzeVal = silverVal;
       	   bronzeRow = silverRow;
       	   silverVal = cellVal;
       	   silverRow = i;

       }else if(cellVal > bronzeVal){
       	   bronzeVal = cellVal;
       	   bronzeRow = i;
       }
    } 
    
    // find equivalent rank
    for (i = 1; i < rowLength; i++){
      //gets cells of current row  
       var theCells = theTable.rows.item(i).cells;
       //gets amount of cells of current row     
       var cellLength = theCells.length;
       var cellVal = theCells.item(cellLength-1).innerHTML;
       
       if(cellVal == goldVal){
       	    theRows[i].style.backgroundColor = "gold";
       }else if(cellVal == silverVal){
       	   theRows[i].style.backgroundColor = "silver";
       }else if(cellVal == bronzeVal){
       	   theRows[i].style.backgroundColor = "#cd7f32";
       }
    } 
    
	  theRows[goldRow].style.backgroundColor = "gold";
    theRows[silverRow].style.backgroundColor = "silver";
    theRows[bronzeRow].style.backgroundColor = "#cd7f32"; 
}

function individualScores () {   

    for (i = 0; i < 9; i++){                
    
    	var topVal = 0;
    	var topCell = 0;
    	var theTable = document.getElementById("colorTable");   
    	var theColumns = theTable.getElementsByTagName("td");
    	var columnLength = theColumns.length; 
    
		for (j = i+3; j < columnLength; j+=12){                
          var cellVal = theColumns[j].innerHTML; 
      	   if(cellVal > topVal){
       	   	  topVal = cellVal;
       	   	  topCell = j;        
      	   }      	     	  
    	}
    	theColumns[topCell].style.backgroundColor = "orange";

    	//find same value as top value   
    	for (k = i+3; k < columnLength; k+=12){                
          var cellVal = theColumns[k].innerHTML;  	
      	   if(cellVal == topVal){
       	   	  theColumns[k].style.backgroundColor = "orange";       
      	   }      	     	  
      	}
   	} 
}       
      	
function hightlightCrosses () {   

    	var topVal = 0;
    	var topCell = 0;
    	var theTable = document.getElementById("studentTable");   
    	var theColumns = theTable.getElementsByTagName("td");
    	var columnLength = theColumns.length; 
    
		for (j = 0; j < columnLength; j++){                
          var cellVal = theColumns[j].innerHTML; 	
      	   if(cellVal == "x"){
       	   	  theColumns[j].style.backgroundColor = "pink";    
      	   }      	     	  
    	}
   
   	
} 