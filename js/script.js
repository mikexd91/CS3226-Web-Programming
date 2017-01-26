$(document).ready(function() {
  processData();
  $('table.sortable').tablesorter({
    sortList: [[11,1]]
	});

  $('table.sortable').bind("sortEnd", function() {
    $(".dataRow").css("height", "20");
  })
});

$(document).ready(function() {
  hightlightCrosses();
});

function processData() {
  var students = [
    { r: 1, flag: "img/SGP.png", name: "Abyss", mc : 4, tc: 0, spe:0, hw: 2.5, bs:1, ks:2, ac: 4, dil: 0, sum: 0 },
    { r: 2, flag: "img/IDN.png", name: "Raff", mc : 0, tc: 0, spe:0, hw: 2.5, bs:1, ks:2, ac: 4, dil: 0, sum: 0 },
    { r: 3, flag: "img/CHN.png", name: "Statik", mc : 0, tc: 0, spe:0, hw: 2.5, bs:1, ks:2, ac: 4, dil: 0, sum: 0 },
    { r: 4, flag: "img/VNM.png", name: "Noire", mc : 0, tc: 0, spe:0, hw: 6, bs:1, ks:2, ac: 4, dil: 0, sum: 0 },
    { r: 5, flag: "img/MYS.png", name: "Claude", mc : 0, tc: 5, spe:0, hw: 2.5, bs:3, ks:2, ac: 4, dil: 0, sum: 0 },
    { r: 6, flag: "img/SGP.png", name: "Neko", mc : 2, tc: 0, spe:0, hw: 2.5, bs:1, ks:2, ac: 4, dil: 0, sum: 0 },
    { r: 7, flag: "img/CHN.png", name: "xJugo", mc : 0, tc: 3, spe:0, hw: 6, bs:4, ks:2, ac: 4, dil: 0, sum: 0 },
    { r: 8, flag: "img/VNM.png", name: "Ragnar", mc : 0, tc: 0, spe:0, hw: 2.5, bs:1, ks:2, ac: 4, dil: 0, sum: 0 },
    { r: 9, flag: "img/SGP.png", name: "Cleo", mc : 3, tc: 8, spe:0, hw: 2.5, bs:1, ks:2, ac: 4, dil: 0, sum: 0 },
    { r: 10, flag: "img/MYS.png", name: "Ariel", mc : 0, tc: 3, spe:0, hw: 2.5, bs:1, ks:2, ac: 4, dil: 0, sum: 0 }];

  for (var i = 0; i < students.length; i++) {
    findSum(students[i]);
  }

  createRanklistTable(students);
  highlightRows();
  highlightCols();
}

function findSum(student) {
  student.spe = student.mc + student.tc;
  student.dil = student.hw + student.bs + student.ks + student.ac;
  student.sum = student.spe + student.dil; 
}

function createRanklistTable(students) {
  students.sort(function(a, b) {
    return b.sum - a.sum;
  });

  //console.log(students);
  var table = $("#ranklistTable");

  const headers = ["R", "Flag", "Name", "MC", "TC", "SPE", "HW", "Bs", "KS", "Ac", "DIL", "Sum"];
  var head = table.find("thead").find("tr");
  var body = table.find("tbody");

  for (i = 0; i < headers.length; i++) {
    var header = "<th>".concat(headers[i]).concat("</th>");
    head.append(header);
  }

  for (i = 0; i < students.length; i++) {
    var R = students[i].r;
    var Name = students[i].name;
    var MC = students[i].mc;
    var TC = students[i].tc;
    var SPE = students[i].spe;
    var HW = students[i].hw;
    var Bs = students[i].bs;
    var KS = students[i].ks;
    var Ac = students[i].ac;
    var DIL = students[i].dil;
    var Sum = students[i].sum;
    var Image = students[i].flag;

    var img = "<img height= '20px' src=".concat(Image).concat(">");
    var nameTag;
    if (Name === "Abyss") {
      nameTag = "<td id ='test'><a href='student1.html'>".concat(Name).concat("</a>");
    } else if (Name === "Raff") {
      nameTag = "<td id ='test'><a href='student2.html'>".concat(Name).concat("</a>");
    } else if (Name === "Noire") {
      nameTag = "<td id ='test'><a href='student3.html'>".concat(Name).concat("</a>");
    } else {
      nameTag = "<td id ='test'>".concat(Name);
    }

    var id = "row_".concat(R);
    var row = "<tr class='dataRow' id='".concat(id).concat("'><td>").concat(R).concat("</td><td>").concat(img).concat("</td>").concat(nameTag).concat("</td><td>").concat(MC).concat("</td><td>").concat(TC).concat("</td><td>").concat(SPE).concat("</td><td>").concat(HW).concat("</td><td>").concat(Bs).concat("</td><td>").concat(KS).concat("</td><td>").concat(Ac).concat("</td><td>").concat(DIL).concat("</td><td>").concat(Sum).concat("</td></tr>");
    body.append(row);

    if(i < students.length - 1) {
      var sumToCompare = students[i + 1].sum;
      var diff = Sum - sumToCompare;
      var height = 20 + diff * 20;
      //console.log("diff: ", diff);
      //console.log("height: ", height);
      $("#".concat(id)).css('height', height.toString());
    }
  }
}

function highlightRows() {
  var rows = $("#ranklistTable").find("tbody").find("tr");

  var goldVal = 0, silverVal = 0, bronzeVal = 0, pinkVal = 1000000000;
  var goldRow = 0, silverRow = 0, bronzeRow = 0, pinkRow = 0;

  for (i = 0; i < rows.length; i++) {
    var cells = rows[i].cells;
    var cellLen = cells.length;
    var cellVal = parseFloat(cells.item(cellLen - 1).innerHTML, 10);
    
    if (cellVal > goldVal) {
          //if current gold is bigger than current silver, move silver to bronze
      if (goldVal > silverVal) {
        bronzeVal = silverVal;
        bronzeRow = silverRow;
      }
      silverVal = goldVal;
      silverRow = goldRow;
      goldVal = cellVal;
      goldRow = i;
    } else if (cellVal > silverVal) {
      bronzeVal = silverVal;
      bronzeRow = silverRow;
      silverVal = cellVal;
      silverRow = i;
    } else if (cellVal > bronzeVal) {
      bronzeVal = cellVal;
      bronzeRow = i;
    } 

    if (cellVal < pinkVal) {
      pinkVal = cellVal;
      pinkRow = i;
    }
  }

  // find equivalent rank
  for (i = 0; i < rows.length; i++) {
    var cells = rows[i].cells;
    var cellLen = cells.length;
    var cellVal = parseFloat(cells.item(cellLen - 1).innerHTML, 10);
       
    if (cellVal == goldVal) {
      $(rows[i]).addClass("goldRow");
    } else if (cellVal == silverVal) {
      $(rows[i]).addClass("silverRow");
    } else if (cellVal == bronzeVal) {
      $(rows[i]).addClass("bronzeRow");
    } else if (cellVal == pinkVal) {
      $(rows[i]).addClass("pinkRow");
    }
  }
}

function highlightCols() {
  for (i = 0; i < 8; i++) {
    var cols = $("#ranklistTable").find("tbody").find("td");
    var colLen = cols.length;

    var topVal = 0, topCell = 0;

    for (j = i + 3; j < colLen; j += 12) {                
      var cellVal = parseFloat(cols[j].innerHTML, 10); 

      if (cellVal > topVal) {
        topVal = cellVal;
        topCell = j;        
      }               
    }

    //find same value as top value   
    for (k = i + 3; k < colLen; k += 12) {                
      var cellVal = parseFloat(cols[k].innerHTML, 10);

      if (cellVal == topVal) {
        $(cols[k]).addClass("orangeCol");
      }               
    }
  } 
}       
      	
function hightlightCrosses() {
  var topVal = 0;
  var topCell = 0;
  var cols = $("#studentTable").find("tbody").find("td");
  var colLen = cols.length;
    
	for (j = 0; j < colLen; j++){                
    var cellVal = cols[j].innerHTML; 

    if (cellVal == "x") {
      $(cols[j]).addClass("pinkCol");
    } 
  }
}

