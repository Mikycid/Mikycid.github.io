import React, { Component } from 'react'

import banner from '../imgs/banner.jpg';
import banner2 from '../imgs/banner-2.jpg';
import banner3 from '../imgs/banner-3.jpg';

export class Header extends Component {
  render() {
    return (
        <header>
            
            {this.props.lang === "fr" ?
                <nav className='navbar navbar-expand-lg navbar-dark bg-dark-custom text-white'>
                <a onClick={() => this.props.switchTab('main')} className="navbar-brand" href="#">Accueil</a>
                    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li onClick={() => this.props.switchTab('exp')} className="nav-item"><a className="nav-link" href="#">Expériences</a></li>
                            <li onClick={() => this.props.switchTab('cpm')} className="nav-item"><a className="nav-link" href="#">Compétences</a></li>
                            <li onClick={() => this.props.switchTab('con')} className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                            <li className="nav-item nav-link">{this.props.lang === "fr" ? <span className="underline">Français</span> : <span className='pointer' onClick={() => this.props.switchLang()}>French</span>} / {this.props.lang === "en" ? <span className="underline">English</span> : <span className='pointer' onClick={() => this.props.switchLang()}>Anglais</span>}</li>
                        </ul>
                    </div>
                </nav>
                 : 
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark-custom text-white">
                    <a onClick={() => this.props.switchTab('main')} className="navbar-brand" href="#">Home</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li onClick={() => this.props.switchTab('exp')} className="nav-item"><a className="nav-link" href="#">Experiences</a></li>
                            <li onClick={() => this.props.switchTab('cpm')} className="nav-item"><a className="nav-link" href="#">Skills</a></li>
                            <li onClick={() => this.props.switchTab('con')} className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                            <li className="nav-item nav-link">{this.props.lang === "fr" ? <span className="underline">Français</span> : <span className='pointer' onClick={() => this.props.switchLang()}>French</span>} / {this.props.lang === "en" ? <span className="underline">English</span> : <span className='pointer' onClick={() => this.props.switchLang()}>Anglais</span>}</li>
                
                        </ul>
                    </div>
                   </nav>
            }
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                {this.props.lang === "fr" ?
                    <div className="carousel-inner" height="200">
                        <div className="carousel-item active">
                            <img src={banner} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Développeur web</h5>
                                <p>Un métier, une passion.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={banner2} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Mes compétences</h5>
                                <p>Cliquez <button className="btn btn-primary" onClick={() => this.props.switchTab("cpm")}>ici</button> pour les consulter.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={banner3} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Je réalise vos projets</h5>
                                <p>Contactez moi.</p>
                            </div>
                        </div>
                    </div> : <div className="carousel-inner" height="200">
                        <div className="carousel-item active">
                            <img src={banner} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Web developer</h5>
                                <p>A job, a passion</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={banner2} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>My skills</h5>
                                <p>Click <button className="btn btn-primary" onClick={() => this.props.switchTab("cpm")}>here</button> to view.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={banner3} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>I realize your projects</h5>
                                <p>Contact me.</p>
                            </div>
                        </div>
                    </div>}
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </header>
    )
  }
}

export default Header