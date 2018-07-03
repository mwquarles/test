var pageContent = document.getElementById("pageContent");
var html = "";

fetch('https://test.dubosewebgroup.com/test/1').then(function(response) {

    console.log(response.status);
    if (response.status == 200) {

        response.json().then(function(json) {
            console.log(json);
            for (i = 0; i < json.sections.length; i++) {

                var section = json.sections[i];

                if (section.type == "hero") {

                    html += "<div id=\"hero\">" +
                            "<h1 id=\"heroHeader\">" + section.headline + "</h1>" +
                            "<h3 id=\"heroSubHeader\">" + section.subHeadLine + "</h3>" +
                            "<button>Let's Get Started &#9658;</button></div>"

                } else if (section.type == "stats") {

                    html += "<div id=\"stats\"><img src=\"" + section.img + "\">" +
                            "<span>" + section.content + "</span></div>";

                } else if (section.type == "contentBlock") {

                    html += "<div id=\"contentBlock\">" +
                            "<h1>" + section.headline + "</h1>" +
                            "<p>" + section.content + "</p></div>";

                } else if (section.type == "cards") {

                    html += "<div id=\"cards\">";

                    for (j = 0; j < section.items[0].length; j++) {

                        var card = section.items[0][j];

                        html += "<div class=\"card\">" +
                                "<img src=\"" + card.img + "\">" +
                                "<h3>" + card.headline + "</h3>" +
                                "<p>" + card.content + "</p>" +
                                "<button><a href=\"" + card.cta.url + "\">" + card.cta.content + " &#9658;</a></button></div>"
                    }

                    html += "</div>";

                } else if (section.type == "info") {

                    html += "<footer><span>" + section.content + "</span></footer>";

                }
            }
            pageContent.innerHTML = html;
        });
    } else if (response.status == 500) {
        pageContent.innerHTML = "<p>Page content could not be loaded right now. Please <a href=\"#\" onclick=\"window.location.reload(true);\">Try Again </a></p>";
    }
});