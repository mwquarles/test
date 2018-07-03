var wrapper = document.getElementById("wrapper");
var logo = document.getElementById("logo");
var navItems = document.getElementById("navItems");
var html = "";

fetch('https://test.dubosewebgroup.com/test/1').then(function(response) {
    response.json().then(function(json) {

        logo.innerHTML = "<img src=''";

        var header= document.getElementById("header");

        for (i = 0; i < json.sections.length; i++) {
            html += "<span>This section type is " + json.sections[i].type + " </span><br>";
            console.log(json.sections[i]);
        }
        wrapper.innerHTML = html;
        console.log(json);
    });
});