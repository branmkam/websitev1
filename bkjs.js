var ts = document.getElementById(timestamp);
var d = new Date();
var start = new Date(2019, 9, 17, 0, 0, 0, 0);
var finald = d - start;
ts.innerHTML = "This site has been running for "" + finald + "days";
