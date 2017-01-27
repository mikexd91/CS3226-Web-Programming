$(document).ready(function() {
  insertFooterContent();
});

function insertFooterContent() {
  var footer = $(".footerContainer");
  var content = "<p align='center'>&copy; 2017 Lab 2 Mike Zhang Xunda, Liu Kang Xin, Cheong Yuan Xiang - content from Steven</p>";
  footer.append(content);
}