import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
        <footer className="footer bg-dark-custom">
        {this.props.lang === "fr" ?
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
    )
  }
}

export default Footer