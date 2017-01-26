const students = [
    { r: 1, flag: "img/SGP.png", name: "Abyss", mc: 4, tc: 0, spe:0, hw: 2.5, bs:1, ks:2, ac: 4, dil: 0, sum: 0 },
    { r: 2, flag: "img/IDN.png", name: "Raff", mc: 0, tc: 0, spe:0, hw: 2.5, bs:1, ks:2, ac: 4, dil: 0, sum: 0 },
    { r: 3, flag: "img/CHN.png", name: "Statik", mc: 0, tc: 0, spe:0, hw: 2.5, bs:1, ks:2, ac: 4, dil: 0, sum: 0 },
    { r: 4, flag: "img/VNM.png", name: "Noire", mc: 0, tc: 0, spe:0, hw: 6, bs:1, ks:2, ac: 4, dil: 0, sum: 0 },
    { r: 5, flag: "img/MYS.png", name: "Claude", mc: 0, tc: 5, spe:0, hw: 2.5, bs:3, ks:2, ac: 4, dil: 0, sum: 0 },
    { r: 6, flag: "img/SGP.png", name: "Neko", mc: 2, tc: 0, spe:0, hw: 2.5, bs:1, ks:2, ac: 4, dil: 0, sum: 0 },
    { r: 7, flag: "img/CHN.png", name: "xJugo", mc: 0, tc: 3, spe:0, hw: 6, bs:4, ks:2, ac: 4, dil: 0, sum: 0 },
    { r: 8, flag: "img/VNM.png", name: "Ragnar", mc: 0, tc: 0, spe:0, hw: 2.5, bs:1, ks:2, ac: 4, dil: 0, sum: 0 },
    { r: 9, flag: "img/SGP.png", name: "Cleo", mc: 3, tc: 8, spe:0, hw: 2.5, bs:1, ks:2, ac: 4, dil: 0, sum: 0 },
    { r: 10, flag: "img/MYS.png", name: "Ariel", mc: 0, tc: 3, spe:0, hw: 2.5, bs:1, ks:2, ac: 4, dil: 0, sum: 0 }];

const data = { abyss:[[1, 1, 1, 1, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'], // mc
                  [0, 0, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],  // tc
                  [1, 1.5, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],  //hw
                  [0, 1, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],  //ps
                  [0, 1, 1, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],  //ks
                  [2, 1, 1, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']  //ac
	              ],
             
             raff:[[0, 0, 0, 0, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'], // mc
                  [0, 0, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],  // tc
                  [1, 1.5, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],  //hw
                  [0, 1, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],  //ps
                  [0, 1, 1, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],  //ks
                  [2, 1, 1, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']  //ac
	              ],
             noire:[[0, 0, 'x', 'x' , 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'], // mc
                  [0, 0, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],  // tc
                  [1, 1.5, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],  //hw
                  [0, 1, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],  //ps
                  [0, 1, 1, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'],  //ks
                  [2, 1, 1, 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x']  //ac
]};

var componentScores = {};

// student.html
const studentTableFieldTitles = ["Mini Contests", "Team Contests", "Homework", "Problem Bs", "Kattis Sets", "Achievements"];
const studentTableHeadTitles = ["Components", "Sum", 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12];
const studentTableField = ["mc", "tc", "hm", "ps", "ks", "ac"];
