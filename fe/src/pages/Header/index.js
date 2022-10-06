import React from 'react';
import './styles.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default function App() {

  return (
    <div className="app">
      
        <nav class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block" id="templatemo_nav_top">
          <div class="container text-light">
              <div class="w-100 d-flex justify-content-between">
                  <div>
                      <i class="fa fa-envelope mx-2"></i>
                      <a class="navbar-sm-brand text-light text-decoration-none" href="#">hello@beclassy.vn</a>
                      <i class="fa fa-phone mx-2"></i>
                      <a class="navbar-sm-brand text-light text-decoration-none" href="#">0898 515 689</a>
                  </div>
                  <div>
                      <a class="text-light" href="#" target="_blank" rel="sponsored"><i class="fab fa-facebook-f fa-sm fa-fw me-2"></i></a>
                      <a class="text-light" href="#" target="_blank"><i class="fab fa-instagram fa-sm fa-fw me-2"></i></a>
                      <a class="text-light" href="#" target="_blank"><i class="fab fa-twitter fa-sm fa-fw me-2"></i></a>
                      <a class="text-light" href="#" target="_blank"><i class="fab fa-linkedin fa-sm fa-fw"></i></a>
                  </div>
              </div>
          </div>
        </nav>
       
        <nav class="navbar navbar-expand-lg navbar-light shadow">
          <div class="container d-flex justify-content-between align-items-center">
              <img class="logo" src={require("../../images/logo.png")} alt=""></img>
              {/* <a class="navbar-brand text-success logo h1 align-self-center" href="#">
                  Jassa */}
              {/* </a> */}

              <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>

              <div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                  <div class="flex-fill">
                      <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                          <li class="nav-item">
                              <a class="nav-link" href="#">TRANG CHỦ</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">GIỚI THIỆU</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">CỬA HÀNG</a>
                          </li>
                          <li class="nav-item">
                              <a class="nav-link" href="#">THƯƠNG HIỆU</a>
                          </li>
                      </ul>
                  </div>
                  <div class="navbar align-self-center d-flex">
                      <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                          <div class="input-group">
                              <input type="text" class="form-control" id="inputMobileSearch" placeholder="Tìm kiếm ..." />
                              <div class="input-group-text">
                                  <i class="fa fa-fw fa-search"></i>
                              </div>
                          </div>
                      </div>
                      <a class="nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                          <i class="fa fa-fw fa-search text-dark mr-2"></i>
                      </a>
                      <a class="nav-icon position-relative text-decoration-none" href="#">
                          <i class="fa fa-fw fa-cart-arrow-down text-dark mr-1"></i>
                          <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                      </a>
                      <a class="nav-icon position-relative text-decoration-none" href="#">
                          <i class="fa fa-fw fa-user text-dark mr-3"></i>
                          <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span>
                      </a>
                  </div>
              </div>

          </div>
        </nav>
       
        <div class="modal fade bg-white" id="templatemo_search" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg" role="document">
              <div class="w-100 pt-1 mb-5 text-right">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <form action="" method="get" class="modal-content modal-body border-0 p-0">
                  <div class="input-group mb-2">
                      <input type="text" class="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
                      <button type="submit" class="input-group-text bg-success text-light">
                          <i class="fa fa-fw fa-search text-white"></i>
                      </button>
                  </div>
              </form>
          </div>
        </div>

        <div id="template-mo-jassa-hero-carousel" class="carousel slide" data-bs-ride="carousel">
          <ol class="carousel-indicators">
              <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="0" class="active"></li>
              <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="1"></li>
              <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="2"></li>
              <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="3"></li>
              <li data-bs-target="#template-mo-jassa-hero-carousel" data-bs-slide-to="4"></li>
          </ol>
          <div class="carousel-inner">
              <div class="carousel-item active">
                  <div class="container">
                      <div class="row p-5">
                          <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                              <img class="img-fluid" src={require("../../images/slider_1.webp")} alt="" />
                          </div>
                      </div>
                  </div>
              </div>
              <div class="carousel-item">
                  <div class="container">
                      <div class="row p-5">
                          <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                              <img class="img-fluid" src={require("../../images/slider_2.webp")} alt="" />
                          </div>
                      </div>
                  </div>
              </div>
              <div class="carousel-item">
                  <div class="container">
                      <div class="row p-5">
                          <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                              <img class="img-fluid" src={require("../../images/slider_3.webp")} alt="" />
                          </div>
                      </div>
                  </div>
              </div>
              <div class="carousel-item">
                  <div class="container">
                      <div class="row p-5">
                          <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                              <img class="img-fluid" src={require("../../images/slider_4.webp")} alt="" />
                          </div>
                      </div>
                  </div>
              </div>
              <div class="carousel-item">
                  <div class="container">
                      <div class="row p-5">
                          <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                              <img class="img-fluid" src={require("../../images/slider_5.webp")} alt="" />
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <a class="carousel-control-prev text-decoration-none w-auto ps-2" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="prev">
              <i class="fas fa-chevron-left"></i>
          </a>
          <a class="carousel-control-next text-decoration-none w-auto pe-2" href="#template-mo-jassa-hero-carousel" role="button" data-bs-slide="next">
              <i class="fas fa-chevron-right"></i>
          </a>
        </div>
    </div>
  );
}