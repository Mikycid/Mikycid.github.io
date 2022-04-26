import React, { Component } from 'react';
import pythonlogo from '../imgs/python.png';
import reactlogo from'../imgs/react.png';
import htmllogo from '../imgs/html.png';
import csslogo from '../imgs/css.png';
import linuxlogo from '../imgs/linux.png';
import djangologo from '../imgs/django.png';
import github from '../imgs/github.png'

class MainPage extends Component {
    count_years(){
        const birthday = new Date(1996, 8, 13);
        var ageDifMs = Date.now() - birthday;
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    render() {
        return (
            <div className="page">
                
                <div className="row">
                    <div className="col col-sm-12 col-md-4">
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
                    <div className="col col-sm-12 col-md-4">
                        <p>
                            Développeur autodidacte, j'ai une bonne maîtrise sur la création de sites web statiques et dynamiques, en data science et en web scraping.<br/>
                            <br/>Je suis actuellement en formation de développeur web et web mobile chez ESECAD avec pour objectif d'obtenir un titre professionel de niveau RNCP 4.<br/>
                            Je cherche un stage dans ce secteur pour le mois de mai 2022 dans le but de compléter cette formation.<br/>
                            <br/>J'ai commencé très jeune à coder, ça a toujours été une passion pour moi. Résoudre des problèmes est dans ma nature.<br/>
                            <br/>Toujours à l'écoute, je prend en compte l'avis des personnes avec ou pour qui je travaille, tout en restant performant.<br/>
                            <br/>Je cherche toujours à m'améliorer et à apprendre de nouvelles choses, je me tiens à jour sur l'actualité du numérique, grâce à une veille technologique régulière.<br/>
                            <br/>Pour toutes demandes n'hésitez pas à me <button className="btn btn-link btn-text" onClick={()=>this.props.switchTab('con')}>contacter</button>.
                        </p>
                    </div> : <div className="col col-sm-12 col-md-4">
                        <p>
                            Self-taught developer, I have a good command of the creation of static and dynamic websites, in data science and web scraping.<br/>
                            <br/>I am currently studying web and mobile web development with ESECAD, a french school, and I hope to graduate to a RNCP lvl III by 2023.<br/>
                            I am looking for an internship for may 2022 to complete this training.<br/>
                            <br/> I started coding very young, it has always been a passion for me. Solving problems is in my nature. <br/>
                            <br/> Always attentive, I take into account the preferences of the people I work with or for, and still remain efficient.<br/>
                            <br/> I love learning new things, I'm willing to get some opportunities to extend my IT knowledge in general. I'm up to work for web development, software development or as a tester.<br/>
                            <br/> For all inquiries do not hesitate to <button className = "btn btn-link btn-text" onClick = {() => this.props.switchTab ('con')}>contact me</button> .
                        </p>
                    </div>}
                    {this.props.lang === "fr" ?
                    <div className="col col-sm-12 col-md-4">
                        <div>
                            <h5 className="card-title">Qui suis-je ?</h5>
                            <p>
                            Mike Le Pavec<br/>
                            {this.count_years()} ans<br/>
                            167 avenue Maréchal Lyautey <br/>
                            06000, Nice<br/><br/>

                            Permis B<br/><br/>
                            Langues : Français, Anglais<br/><br/>
                            Disponibilité : disponible<br/><br/>
                            
                            </p>

                        </div>

                        
                    </div> : <div className="col col-sm-12 col-md-4">
                            <div>
                                <h5 className = "card-title"> Who am I? </h5>
                                <p>
                                Mike Le Pavec <br/>
                                {this.count_years ()} years <br/>
                                167 avenue Maréchal Lyautey <br/>
                                06000, Nice <br/> <br/>

                                B permit <br/> <br/>
                                Languages: French, English <br/><br/>
                                Availability: available <br/> <br/>
                                
                                </p>

                            </div>
                    </div>
                    }
                </div>
            </div>
        );
    }
}

export default MainPage;