// https://raw.githubusercontent.com/SauravKanchan/NewsAPI/master/sources.json


// Grap the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://raw.githubusercontent.com/SauravKanchan/NewsAPI/master/sources.json', true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText);
        // console.log(json);
        let sources = json.sources;
        console.log(sources);


        let newsHtml = "";
        sources.forEach(function (element, index) {
            // console.log(element, index);
            let news = `
                    <div class="card">
                        <div class="card-header" id="heading${index}">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}"><b>Breaking News ${index + 1}: </b> ${element.name}
                                </button>
                            </h2>
                        </div>

                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                            <div class="card-body">${element.description}</div>
                        </div>
                    </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured");
    }
}

xhr.send();

