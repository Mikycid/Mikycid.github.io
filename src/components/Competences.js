import React, { Component } from 'react';

class Competences extends Component {
    render() {
        return (
            <div className="jumbotron page">
                {this.props.lang === "fr" ? <div>
                    <h2>Mes compétences : </h2>
                    <p>
                        Je sais développer des applications, des sites webs dynamiques et responsifs avec un design moderne.<br/>
                        J'ai une bonne expérience avec les langages python (+ Django), HTML5, CSS3(+Bootstrap), javascript (+React), PHP, SQL.<br/>
                        Je sais créer et manipuler des bases de données SQL, CSV/XLSX.<br/>
                        Je met en oeuvre mes connaissances dans vos projets afin d'obtenir des résultats professionels.<br/>
                    </p> </div> : <div>
                        <h2>My skills : </h2>
                        <p>
                            I know how to develop applications, dynamic and responsive websites with a modern design. <br/>
                            I have a good experience with the languages ​​python (+ Django), HTML5, CSS3, javascript (+React), PHP, SQL. <br/>
                            I know how to create and manipulate SQL, CSV / XLSX databases. <br/>
                            I use my knowledge in your projects in order to obtain professional results.<br/>
                        </p>
                    </div>}
                <hr className="mr-4"/>
                {this.props.lang === "fr" ? 
                <h5>Voici la liste de mes connaissances : </h5>: <h5>Here is the list of my acquaintances : </h5>}<br/>
                <div className="row">
                    <div className="col-sm">
                        <ul className="list-none">
                            <li style={{fontSize: 22}}>
                                {this.props.lang === "fr" ?
                                <strong>Langages</strong> : <strong>Languages</strong> }
                            </li>
                            <li>HTML/CSS</li>
                            <li>Javascript</li>
                            <li>Python</li>
                            <li>PHP</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div className="col-sm">
                        <ul className="list-none">
                            <li style={{fontSize: 22}}>
                                {this.props.lang === "fr" ?
                                <strong>Frameworks / Systèmes / Librairies</strong> : <strong>Frameworks / Systems / Libraries</strong>
                                }
                            </li>
                            <li>Django</li>
                            <li>React</li>
                            <li>Pandas</li>
                            <li>Reportlab</li>
                            <li>Sklearn</li>
                            <li>Jquery</li>
                            <li>Bootstrap</li>
                            <li>Requests+bs4</li>
                            <li>Selenium</li>
                            <li>Linux shell</li>
                            <li>Git</li>
                        </ul>
                    </div>
                    {this.props.lang === "fr" ? 
                    <div className="col-sm">
                        <ul className="list-none">
                            <li style={{fontSize: 22}}><strong>Compétences</strong></li>
                            <li>Création de sites web</li>
                            <li>Création d'applications</li>
                            <li>Codage de scripts</li>
                            <li>Design d'applications</li>
                            <li>Manipulations de données (SQL/NoSQL)</li>
                            <li>Web scraping</li>
                            <li>Machine learning</li>
                        </ul>
                    </div> : <div className="col-sm">
                        <ul className="list-none">
                            <li style={{fontSize: 22}}><strong>Skills</strong></li>
                            <li> Website creation </li>
                            <li> Creating applications </li>
                            <li> Script coding </li>
                            <li> Application design </li>
                            <li> Data manipulation (SQL / NoSQL) </li>
                            <li> Web scraping </li>
                            <li> Machine learning </li>
                        </ul>
                    </div>}
                </div>
            </div>
        );
    }
}

export default Competences;