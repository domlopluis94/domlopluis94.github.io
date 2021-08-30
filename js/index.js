class Index {

    constructor(){
        //set Html
        this.setHeaderHtml();
        fetch('./data/es-text.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(json => {
            this.data = json;
            const $this = this;
            $this.sethtml();  
        })
        .catch(function () {
            this.dataError = true;
        });
    }

    setHeaderHtml(){
        this.setNavBar();
        this.setPresentationImg();
        this.setAboutsection();
    }

    async sethtml(){
        this.setServiceSection();
        this.setStats();
        this.setWorkExp();
        this.setTestimonials();
        this.setBlog();
        this.setContactFooter();
    }

    setNavBar(){
        this.insertInBody(`<nav class="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
                            <div class="container">
                            <a class="navbar-brand js-scroll" href="#page-top">LDL</a>
                            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
                                aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div class="navbar-collapse collapse justify-content-end" id="navbarDefault">
                                <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link js-scroll active" href="#about">Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link js-scroll" href="template/CVonline.html">CV Online</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link js-scroll" href="#service">Experiencia</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link js-scroll" href="#work">Trabajos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link js-scroll" href="#blog">Blogs</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link js-scroll" href="#contact">Contacto</a>
                                </li>
                                </ul>
                            </div>
                            </div>
                        </nav>`);
    }

    setPresentationImg(){
        this.insertInBody(`<!--/ Intro Skew Star /-->
        <div id="home" class="intro route bg-image" style="background-image: url(img/intro-bg.jpg)">
          <div class="overlay-itro"></div>
          <div class="intro-content display-table">
            <div class="table-cell">
              <div class="container">
                <!--<p class="display-6 color-d">Hello, world!</p>-->
                <h1 class="intro-title mb-4">Luis Domínguez López</h1>
                <p class="intro-subtitle"><span class="text-slider-items">Computer Science,University Master in Software and Systems,Data Science, Full Stack, Embeded Ingeniering</span><strong class="text-slider"></strong></p>
                <!-- <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> -->
              </div>
            </div>
          </div>
        </div>`);
    }

    setAboutsection(){
        this.insertInBody(`  <section id="about" class="about-mf sect-pt4 route">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="box-shadow-full">
                <div class="row">
                  <div class="col-md-6">
                    <div class="row">
                      <div class="col-sm-6 col-md-5">
                        <div class="about-img">
                          <picture class="img-fluid rounded b-shadow-a">
                            <source srcset="img/testimonial-2.jp2" type="image/jp2">
                            <img src="img/testimonial-2.jpg" class="img-fluid rounded b-shadow-a">
                          </picture>
                          <!-- <img src="img/testimonial-2.jp2" onerror=""  alt=""> -->
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-7">
                        <div class="about-info">
                          <p><span class="title-s">Nombre: </span> <span>Luis Domínguez López</span></p>
                          <p><span class="title-s">Perfil: </span> <span>Ingeniero Informático</span></p>
                          <p><span class="title-s">Email: </span> <span>domlopluis@gmail.com</span></p>
                        </div>
                      </div>
                    </div>
                    <div class="skill-mf">
                      <p class="title-s">KNOWLEDGE BARS</p>
                      <span>Ingeniero Informático por la UPM</span> <span class="pull-right">100%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0"
                          aria-valuemax="100"></div>
                      </div>
                      <span>Master Universitario en Software y Sistemas por la UPM</span> <span class="pull-right">100%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0"
                          aria-valuemax="100"></div>
                      </div>
                      <span>Data Science</span> <span class="pull-right">60%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0"
                          aria-valuemax="100"></div>
                      </div>
                      <span>DevOps</span> <span class="pull-right">70%</span>
                      <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0"
                          aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="about-me pt-4 pt-md-0">
                      <div class="title-box-2">
                        <h5 class="title-left">
                          About me
                        </h5>
                      </div>
                      <p class="lead">
                        ¿Sobre mi? Soy Ingeniero Informático, con un Master en Software y Sistemas. 
                        Y esta página la tengo para ir subiendo los distintos trabajos/blogs que quiero ofrecer de cara al público, y,
                        además, para facilitar información profesional a reclutadores. 
    
                      </p>
                      <p class="lead">
                        
                      </p>
                      <p class="lead">
                        
                      </p>
                    </div>
                    <div class="socials">
                      <ul>
                        <li><a href="https://www.linkedin.com/in/luisdominguezlopezinformatico/"><span class="ico-circle"><i class="ion-social-linkedin"></i></span></a></li>
                        <li><a href="https://www.instagram.com/luisdomlop94/"><span class="ico-circle"><i class="ion-social-instagram"></i></span></a></li>
                        <li><a href="https://twitter.com/luismasterlu"><span class="ico-circle"><i class="ion-social-twitter"></i></span></a></li>
                        <li><a href="https://github.com/domlopluis94"><span class="ico-circle"><i class="ion-social-github"></i></span></a></li>
                        <li><a href="archivos/LuisDominguezLopez-CV-ES.pdf"><span class="ico-circle"><i class="ion-clipboard"></i></span></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`);
    }

    getservice(){
        let data = ""
        this.data.ServiceSection.forEach((element) =>{
            data += `<div class="col-md-4">
            <div class="service-box">
              <div class="service-ico">
                <span class="ico-circle"><i class="${element.icon}"></i></span>
              </div>
              <div class="service-content">
                <h2 class="s-title">${element.title}</h2>
                <p class="s-description text-center">
                    ${element.Content}
                </p>
              </div>
            </div>
          </div>`;
        });
        return data;
    }

    setServiceSection(){
        this.insertInBody(`  <section id="service" class="services-mf route">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="title-box text-center">
                <h3 class="title-a">
                  Experiencia
                </h3>
                <p class="subtitle-a">
                  Tanto en empresa como de freelance
                </p>
                <div class="line-mf"></div>
              </div>
            </div>
          </div>
          <div class="row">
            ${this.getservice()}
          </div>
        </div>
      </section>`);
    }

    getStatsValues(){
        let data = ""
        this.data.Stats.forEach((element) =>{
            data += `<div class="col-sm-3 col-lg-3">
            <div class="counter-box">
              <div class="counter-ico">
                <span class="ico-circle"><i class="${element.icon}"></i></span>
              </div>
              <div class="counter-num">
                <p class="counter">${element.value}</p>
                <span class="counter-text">${element.title}</span>
              </div>
            </div>
          </div>`;
        });
        return data;
    }

    setStats(){
        this.insertInBody(`  <div class="section-counter paralax-mf bg-image" style="background-image: url(img/counters-bg.jpg)">
        <div class="overlay-mf"></div>
        <div class="container">
          <div class="row">
            ${this.getStatsValues()}
          </div>
        </div>
      </div>`)
    }

    getWorkExp(){
        let data = ""
        this.data.Work.forEach((element) =>{
            data += `<div class="col-md-4">
            <div class="work-box">
              <a href="${element.link}">
                <div class="work-img">
                  <img src="${element.imgLink}" alt="" class="img-fluid">
                </div>
                <div class="work-content">
                  <div class="row">
                    <div class="col-sm-8">
                      <h2 class="w-title">${element.title}</h2>
                      <div class="w-more">
                        <span class="w-ctegory">${element.description}</span>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="w-like">
                        <span class="ion-ios-plus-outline"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>`;
        });
        return data;
    }

    setWorkExp(){
        this.insertInBody(`  <section id="work" class="portfolio-mf sect-pt4 route">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="title-box text-center">
                <h3 class="title-a">
                  Trabajos Públicos
                </h3>
                <p class="subtitle-a">
                  Tanto univesitarios como de freelance
                </p>
                <div class="line-mf"></div>
              </div>
            </div>
          </div>
          <div class="row">
            ${this.getWorkExp()}
          </div>
        </div>
      </section>`);
    }

    getTestimonials(){
        let data = ""
        this.data.Testimonials.forEach((element) =>{
            data += `<div class="testimonial-box">
            <div class="author-test">
              <img src="${element.imgLink}" alt="" class="rounded-circle b-shadow-a">
              <span class="author">${element.name} ${element.job}</span>
            </div>
            <div class="content-test">
              <p class="description lead">
                ${element.description}
              </p>
              <span class="comit"><i class="fa fa-quote-right"></i></span>
            </div>
          </div>`;
        });
        return data;
    }

    setTestimonials(){
        this.insertInBody(`  <!--/ Section Testimonials Star /-->
        <div class="testimonials paralax-mf bg-image" style="background-image: url(img/overlay-bg.jpg)">
          <div class="overlay-mf"></div>
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div id="testimonial-mf" class="owl-carousel owl-theme">
                    ${this.getTestimonials()}
                </div>
              </div>
            </div>
          </div>
        </div>`);
    }
    
    getBlog(){
      let data = ""
        this.data.Blogs.forEach((element) =>{
            data += `<div class="col-md-4">
            <div class="card card-blog">
              <div class="card-img">
                <a href="${element.link}"><img src="${element.imgLink}" alt="" class="img-fluid"></a>
              </div>
              <div class="card-body">
                <div class="card-category-box">
                  <div class="card-category">
                    <h6 class="category">${element.tema}</h6>
                  </div>
                </div>
                <h3 class="card-title"><a href="blog-single.html">${element.title}</a></h3>
                <p class="card-description">
                ${element.description}
                </p>
              </div>
            </div>
          </div>`;
        });
        return data;
    }

    setBlog(){
        this.insertInBody(`  <section id="blog" class="blog-mf sect-pt4 route">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="title-box text-center">
                <h3 class="title-a">
                  Blog
                </h3>
                <p class="subtitle-a">
                  Blogs de opinión y de apuntes sobre Informática
                </p>
                <div class="line-mf"></div>
              </div>
            </div>
          </div>
          <div class="row">
            ${this.getBlog()}
          </div>
        </div>
      </section>`);
    }

    setContactFooter(){
        this.insertInBody(`  <section class="paralax-mf footer-paralax bg-image sect-mt4 route" style="background-image: url(img/overlay-bg.jpg)">
        <div class="overlay-mf"></div>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="contact-mf">
                <div id="contact" class="box-shadow-full">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="title-box-2">
                        <h5 class="title-left">
                          Contacto
                        </h5>
                      </div>
                      <div>
                          <form class="contactForm">
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfueJShgTL2IQroV8eBLFUhNAZcbxaxNyn56xVPZyGp6Ub6RA/viewform?embedded=true" width="100%" height="677" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                        </form>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="title-box-2 pt-4 pt-md-0">
                        <h5 class="title-left">
                          Datos
                        </h5>
                      </div>
                      <div class="more-info">
                        <p class="lead">
                          ¿ Quieres contacar conmigo ? Rellena el formulario o contacta directamente a mi correo.
                        </p>
                        <ul class="list-ico">
                          <li><span class="ion-ios-location"></span> Madrid</li>
                          <li><span class="ion-email"></span> domlopluis@gmail.com</li>
                        </ul>
                      </div>
                      <div class="socials">
                        <ul>
                          <li><a href="https://www.linkedin.com/in/luisdominguezlopezinformatico/"><span class="ico-circle"><i class="ion-social-linkedin"></i></span></a></li>
                          <li><a href="https://www.instagram.com/luisdomlop94/"><span class="ico-circle"><i class="ion-social-instagram"></i></span></a></li>
                          <li><a href="https://twitter.com/luismasterlu"><span class="ico-circle"><i class="ion-social-twitter"></i></span></a></li>
                          <li><a href="https://github.com/domlopluis94"><span class="ico-circle"><i class="ion-social-github"></i></span></a></li>
                          <li><a href="archivos/LuisDominguezLopez-CV-ES.pdf"><span class="ico-circle"><i class="ion-clipboard"></i></span></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-sm-12">
                <div class="copyright-box">
                  <p class="copyright">&copy; Copyright <a style="color: aliceblue;" href="https://github.com/domlopluis94"><b>Domlopluis94</b></a>. All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>`);
    }

    insertInBody(tag){
        document.getElementsByTagName("body")[0].innerHTML += tag;
    }

}

let mainProcess = new Index();