import React, { Component } from 'react'
import "../css/footer.css";

export class Footer extends Component {
  render() {
    return (
        <footer className="footer bg-dark-custom">
        {this.props.lang === "fr" ?
        <div className="row">
            <ul className="col-sm-12 col-lg-6 p-0 list-none text-center">
              <li style={{fontSize:22}}><strong>Liens</strong></li>
              <br/>
              <li><i className="fa fa-linkedin-square"></i>&nbsp;<a href="https://www.linkedin.com/in/mike-le-pavec-89017a1b8">Mon LinkedIn</a></li>
              <li><i className="fa fa-github-square"></i>&nbsp;<a href="https://www.github.com/Mikycid">Mon github</a></li>
            </ul>
            <ul className="col-sm-12 col-lg-6 p-0 list-none text-center">
              <li style={{fontSize:22}}><strong>Navigation</strong></li>
              <br/>
              <li><a href="#" onClick={()=>this.switchTab('main')}>Accueil</a></li>
              <li><a href="#" onClick={()=>this.switchTab('exp')}>Expériences</a></li>
              <li><a href="#" onClick={()=>this.switchTab('cpm')}>Compétences</a></li>
              <li><a href="#" onClick={()=>this.switchTab('con')}>Contact</a></li>
            </ul>
        </div> : 
        <div className="row">
            <ul className="col-sm-12 col-lg-6 p-0 list-none text-center">
              <li style={{fontSize:22}}><strong>Links</strong></li>
              <br/>
              <li><i className="fa fa-linkedin-square"></i>&nbsp;<a href="https://www.linkedin.com/in/mike-le-pavec-89017a1b8">My LinkedIn</a></li>
              <li><i className="fa fa-github-square"></i>&nbsp;<a href="https://www.github.com/Mikycid">My github</a></li>
            </ul>
            <ul className="col-sm-12 col-lg-6 p-0 list-none text-center">
              <li style={{fontSize:22}}><strong>Navigation</strong></li>
              <br/>
              <li><a href="#" onClick={()=>this.switchTab('main')}>Home</a></li>
              <li><a href="#" onClick={()=>this.switchTab('exp')}>Experiences</a></li>
              <li><a href="#" onClick={()=>this.switchTab('cpm')}>Skills</a></li>
              <li><a href="#" onClick={()=>this.switchTab('con')}>Contact</a></li>
            </ul>
        </div> }
      </footer>
    )
  }
}

export default Footer