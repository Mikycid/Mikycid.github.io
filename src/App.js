import React, {Component} from 'react';
import './css/main.css';
import MainPage from './components/MainPage';
import Contact from './components/Contact';
import Competences from './components/Competences';
import Experiences from './components/Experiences';
import banner from './imgs/banner.jpg';
import banner2 from './imgs/banner-2.jpg';
import banner3 from './imgs/banner-3.jpg';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        tab: 'main',
        lang: 'fr',
    };
}
  switchTab(tab){
    this.setState({tab:tab});
  }
  switchLang(){
    if(this.state.lang === "fr") {
      this.setState({lang:"en"});
    } else {
      this.setState({lang:"fr"});
    }

  }
  render(){
    return(
    <div className="container d-flex flex-column text-justify">
        <div className="">
          {this.state.lang === "fr" ? 
          <ul className="nav justify-content-center nav-pill nav-justified">
            <li onClick={()=>this.switchTab('main')} className="nav-item active"><a className="nav-link active" href="#page">Accueil</a></li>
            <li onClick={()=>this.switchTab('exp')} className="nav-item"><a className="nav-link" href="#page">Expériences</a></li>
            <li onClick={()=>this.switchTab('cpm')} className="nav-item"><a className="nav-link" href="#page">Compétences</a></li>
            <li onClick={()=>this.switchTab('con')} className="nav-item"><a className="nav-link" href="#page">Contact</a></li>
            <li className="nav-item nav-link">{this.state.lang === "fr" ? <span className="underline">Français</span> : <span className='pointer' onClick={()=>this.switchLang()}>French</span> } / {this.state.lang === "en" ? <span className="underline">English</span> : <span className='pointer' onClick={()=>this.switchLang()}>Anglais</span> }</li>
          </ul> : <ul className="nav justify-content-center nav-pill nav-justified">
            <li onClick={()=>this.switchTab('main')} className="nav-item active"><a className="nav-link active" href="#page">Home</a></li>
            <li onClick={()=>this.switchTab('exp')} className="nav-item"><a className="nav-link" href="#page">Experiences</a></li>
            <li onClick={()=>this.switchTab('cpm')} className="nav-item"><a className="nav-link" href="#page">Skills</a></li>
            <li onClick={()=>this.switchTab('con')} className="nav-item"><a className="nav-link" href="#page">Contact</a></li>
            <li className="nav-item nav-link">{this.state.lang === "fr" ? <span className="underline">Français</span> : <span className='pointer' onClick={()=>this.switchLang()}>French</span> } / {this.state.lang === "en" ? <span className="underline">English</span> : <span className='pointer' onClick={()=>this.switchLang()}>Anglais</span> }</li>
          </ul>}
        </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        {this.state.lang === "fr" ? 
        <div className="carousel-inner" height="200">
          <div className="carousel-item active">
            <img src={banner} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Développeur web</h5>
              <p>Un métier, une passion.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Mes compétences</h5>
              <p>Cliquez <button className="btn btn-primary" onClick={()=>this.switchTab("cpm")}>ici</button> pour les consulter.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Je réalise vos projets</h5>
              <p>Contactez moi.</p>
            </div>
          </div>
        </div> : <div className="carousel-inner" height="200">
          <div className="carousel-item active">
            <img src={banner} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Web developer</h5>
              <p>A job, a passion</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>My skills</h5>
              <p>Click <button className="btn btn-primary" onClick={()=>this.switchTab("cpm")}>here</button> to view.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100" alt="..."/>
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
      <div>
        {this.state.tab === 'main' ?
          <MainPage switchTab={(tab)=>this.switchTab(tab)} lang={this.state.lang}/> : ''
        }
        {this.state.tab === 'exp' ? 
          <Experiences lang={this.state.lang}/> : ""
        }
        {this.state.tab === 'cpm' ? 
          <Competences lang={this.state.lang}/> : ""
        }
        {this.state.tab === 'con' ?
          <Contact lang={this.state.lang}/> : ""
        }
      </div>
      <footer className="footer">
        {this.state.lang === "fr" ?
        <div className="row">
          <div className="col-sm">
            <ul className="list-none text-center">
              <li style={{fontSize:22}}><strong>Liens</strong></li>
              <br/>
              <li><i className="fa fa-linkedin-square"></i>&nbsp;<a href="https://www.linkedin.com/in/mike-le-pavec-89017a1b8">Mon LinkedIn</a></li>
              <li><i className="fa fa-github-square"></i>&nbsp;<a href="https://www.github.com/Mikycid">Mon github</a></li>
            </ul>
          </div>
          <div className="col-sm">
            <ul className="list-none text-center">
              <li style={{fontSize:22}}><strong>Navigation</strong></li>
              <br/>
              <li><button href="#" className="btn btn-link footer-btn" onClick={()=>this.switchTab('main')}>Accueil</button></li>
              <li><button href="#" className="btn btn-link footer-btn" onClick={()=>this.switchTab('exp')}>Expériences</button></li>
              <li><button href="#" className="btn btn-link footer-btn" onClick={()=>this.switchTab('cpm')}>Compétences</button></li>
              <li><button href="#" className="btn btn-link footer-btn" onClick={()=>this.switchTab('con')}>Contact</button></li>
            </ul>
          </div>
        </div> : <div className="row">
          <div className="col-sm">
            <ul className="list-none text-center">
              <li style={{fontSize:22}}><strong>Links</strong></li>
              <br/>
              <li><i className="fa fa-linkedin-square"></i>&nbsp;<a href="https://www.linkedin.com/in/mike-le-pavec-89017a1b8">My LinkedIn</a></li>
              <li><i className="fa fa-github-square"></i>&nbsp;<a href="https://www.github.com/Mikycid">My github</a></li>
            </ul>
          </div>
          <div className="col-sm">
            <ul className="list-none text-center">
              <li style={{fontSize:22}}><strong>Navigation</strong></li>
              <br/>
              <li><button href="#" className="btn btn-link footer-btn" onClick={()=>this.switchTab('main')}>Home</button></li>
              <li><button href="#" className="btn btn-link footer-btn" onClick={()=>this.switchTab('exp')}>Experiences</button></li>
              <li><button href="#" className="btn btn-link footer-btn" onClick={()=>this.switchTab('cpm')}>Skills</button></li>
              <li><button href="#" className="btn btn-link footer-btn" onClick={()=>this.switchTab('con')}>Contact</button></li>
            </ul>
          </div>
        </div> }
      </footer>

    </div>
    )}
}

export default App;
