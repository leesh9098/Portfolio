function listblue() {
    document.getElementById('listbtn').style.color = "#0000ff";
    document.getElementById('gridbtn').style.color = "#000000";
}
function gridblue() {
    document.getElementById('listbtn').style.color = "#000000";
    document.getElementById('gridbtn').style.color = "#0000ff";
}
function setblue() {
    document.getElementById('listbtn').style.color = "#000000";
    document.getElementById('gridbtn').style.color = "#000000";
}
function subbtn() {
    document.getElementById('subscribe').style.fontWeight = "bold";
    document.getElementById('subscribe').style.color = "#000000";
    document.getElementById('all').style.fontWeight = "normal"
    document.getElementById('all').style.color = "#777777";
}
function allbtn() {
    document.getElementById('subscribe').style.fontWeight = "normal";
    document.getElementById('subscribe').style.color = "#777777";
    document.getElementById('all').style.fontWeight = "bold"
    document.getElementById('all').style.color = "#000000";
}

function product() {
    document.getElementById('product').style.color = "#00cc66"
    document.getElementById('product').style.borderBottom = "2px solid #00cc66"
    document.getElementById('shop').style.color = "#000000"
    document.getElementById('shop').style.borderBottom = "none"
    document.getElementById('gender').style.color = "#000000"
    document.getElementById('gender').style.borderBottom = "none"
}

function shop() {
    document.getElementById('product').style.color = "#000000"
    document.getElementById('product').style.borderBottom = "none"
    document.getElementById('shop').style.color = "#00cc66"
    document.getElementById('shop').style.borderBottom = "2px solid #00cc66"
    document.getElementById('gender').style.color = "#000000"
    document.getElementById('gender').style.borderBottom = "none"
}

function gender() {
    document.getElementById('product').style.color = "#000000"
    document.getElementById('product').style.borderBottom = "#none"
    document.getElementById('shop').style.color = "#000000"
    document.getElementById('shop').style.borderBottom = "none"
    document.getElementById('gender').style.color = "#00cc66"
    document.getElementById('gender').style.borderBottom = "2px solid #00cc66"
}
