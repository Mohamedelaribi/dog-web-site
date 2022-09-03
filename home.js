let categoyList = document.querySelector('.category');

let resutl


eventLiseteners();

function eventLiseteners(){
    window.addEventListener('DOMContentLoaded' ,() =>{
        loadFileJson();
    })
}
function loadFileJson(){
    fetch('dogs.json')
    .then(response => response.json())
    .then(data =>{
        let html = '';
        data.forEach(dogs => {
            html +=`
            <div class="card">
            <div class="imgCard">
                <div class="frontCard">
                    
                        <img src="${dogs.serviceImgSrc}" alt="">
                    <h2>${dogs.serviceName}</h2>
                </div>
                <div class="backCard">
                    <h2>${dogs.serviceName}</h2>
                    <p>${dogs.description}</p>
                    <a href="dogs.html">show more dogs</a>
                </div>
            </div>
        </div>`;
        });
        categoyList.innerHTML = html;
    })
    }
