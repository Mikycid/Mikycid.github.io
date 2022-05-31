import React, { Component } from 'react';
import pythonlogo from '../imgs/python.png';
import reactlogo from'../imgs/react.png';
import htmllogo from '../imgs/html.png';
import linuxlogo from '../imgs/linux.png';
import djangologo from '../imgs/django.png';
import github from '../imgs/github.png'
import '../css/logolist.css';

class MainPage extends Component {
    count_years(){
        const birthday = new Date(1996, 8, 13);
        var ageDifMs = Date.now() - birthday;
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    render() {
        return (
            <main class="p-3">
                
                <div class="row">
                    <div className="col-sm-12 col-lg-4 logolist-container">
                        <ul className="logolist">
                            
                            <li><img src={pythonlogo} alt="logo python"/></li>
                            <li><img src={djangologo} alt="logo django"/></li>
                            <li><img src={htmllogo} alt="logo html"/></li>
                            <li><a href="http://www.github.com/Mikycid"><img src={github} alt="logo github"/></a></li>
                            <li><img src={reactlogo} alt="logo react"/></li>
                            <li><img src={linuxlogo} alt="logo linux"/></li>
                            <li><button onClick={()=>this.props.switchTab('cpm')} type="button" className="btn btn-primary">Voir toutes les compétences</button></li>
                            
                        </ul>
                        
                    </div>
                    {this.props.lang === "fr" ? 
                    <div className="col-sm-12 col-lg-4">
                        <h4>Présentation</h4>
                        <p>
                            Développeur autodidacte, j'ai une bonne maîtrise en création de sites web, d'applications ainsi que sur un système linux débian.<br/>
                            <br/>Je suis actuellement en formation de développeur web et web mobile chez ESECAD avec pour objectif d'obtenir un titre professionel de niveau RNCP 5 (bac + 2).<br/>
                            <br/>Je suis également en stage chez Infotel au secteur logiciel à Toulouse.<br/>
                            <br/>J'ai commencé très jeune à coder, ça a toujours été une passion pour moi. Résoudre des problèmes est dans ma nature.<br/>
                            <br/>Passionné d'informatique, je cherche toujours à m'améliorer et à apprendre de nouvelles choses, tout en restant à jour sur l'actualité du monde numérique.<br/>
                            <br/>Pour toutes question ou demande n'hésitez pas à me <a href="#" onClick={()=>this.props.switchTab('con')}>contacter</a>.
                        </p>
                    </div>
                     : 
                    <div className="col-sm-12 col-lg-4">
                        <h4>About me</h4>
                        <p>
                            Self-taught developer, I have a nice knowledge in the creation of websites, applications and also in a debian based linux system.<br/>
                            <br/>I am currently studying web and mobile web development with ESECAD, a french school, and I hope to graduate to a RNCP V (bac + 2) by 2023.<br/>
                            <br/>I am currently in an internship at Infotel in the software sector in Blagnac (France).<br/>
                            <br/>I started coding very young, it has always been a passion for me. Solving problems is in my nature. <br/>
                            <br/>I love learning new things, I'm willing to get some opportunities to extend my IT knowledge in general. I'm up to work for web development, software development or as a tester.<br/>
                            <br/>Don't hesitate to <button className = "btn btn-link btn-text" onClick = {() => this.props.switchTab ('con')}>contact me</button> for any question.
                        </p>
                    </div>}
                    {this.props.lang === "fr" ?
                    <div className="col-md-12 col-lg-4">
                        <div>
                            <h4>Qui suis-je ?</h4>
                            <p>
                            Mike Le Pavec<br/>
                            {this.count_years()} ans<br/>
                            23B rue Miramar <br/>
                            31200, Toulouse<br/><br/>

                            Permis B<br/><br/>
                            Langues : Français, Anglais<br/><br/>
                            Disponibilité : <span class="text-danger">en stage</span><br/><br/>
                            
                            </p>

                        </div>

                        
                    </div>
                     : 
                    <div className="col-md-12 col-lg-4">
                        <div>
                            <h4> Who am I? </h4>
                            <p>
                            Mike Le Pavec <br/>
                            {this.count_years ()} years old<br/>
                            31B rue Miramar <br/>
                            31200, Toulouse <br/> <br/>

                            Driving license <br/> <br/>
                            Languages: French, English <br/><br/>
                            Availability: <span class="text-danger">in an internship</span> <br/> <br/>
                            
                            </p>

                        </div>
                    </div>
                    }
                </div>
            </main>
        );
    }
}

export default MainPage;