console.log('Starting up');

function onInit(){
    renderModal()
    renderPortfolio()
}


function renderPortfolio() {
    var strHtml = ''
  
    var elprotfolio = document.getElementById('portfolio');
    console.log(elprotfolio);

    gProjs.forEach(function(proj) {
        strHtml += `<div class="col-md-4 col-sm-6 portfolio-item">
                        <a class="portfolio-link" data-toggle="modal" href="#${proj.id}">
                     <div class="portfolio-hover">
                        <div class="portfolio-hover-content">
                         <i class="fa fa-plus fa-3x"></i>
                         </div>
                     </div>
                      <img class="img-fluid protfolioImg" src="img/myimg/${proj.id}.png" alt="">
                     </a>
                      <div class="portfolio-caption">
                         <h4>${proj.name}</h4>
                          <p class="text-muted">${proj.desc}</p>
                      </div>
              </div>`

    })

    elprotfolio.innerHTML = strHtml;
    
}


function renderModal(){
    var strHtml = ''
    gProjs.forEach(function(proj){
        strHtml += `  <div class="portfolio-modal modal fade" id="${proj.id}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <!-- Project Details Go Here -->
                    <h2>${proj.name}</h2>
                    <p class="item-intro text-muted">${proj.title}</p>
                    <img class="img-fluid d-block mx-auto" src="img/myimg/${proj.id}.png" alt="">
                    <p>${proj.desc}</p>
                    <ul class="list-inline">
                      <li>${proj.publishedAt}</li>
                      <li> ${'Client: Threads'}</li>
                      <li>${'Category: Illustration'}</li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                        <i class="fa fa-times"></i>
                        Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
    })
    var elModal = document.querySelector('.modal-container');
    console.log(elModal);
    elModal.innerHTML = strHtml;
}



{/* <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="close-modal" data-dismiss="modal">
      <div class="lr">
        <div class="rl"></div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="modal-body">
            <!-- Project Details Go Here -->
            <h2>Project Name</h2>
            <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
            <img class="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="">
            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis
              dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
              maiores repudiandae, nostrum, reiciendis facere nemo!</p>
            <ul class="list-inline">
              <li>Date: January 2017</li>
              <li>Client: Threads</li>
              <li>Category: Illustration</li>
            </ul>
            <button class="btn btn-primary" data-dismiss="modal" type="button">
                <i class="fa fa-times"></i>
                Close Project</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

 */}
