import React, { Component } from 'react';

class Competences extends Component {
    render() {
        return (
            <main className="p-3">
                {this.props.lang === "fr" ? 
                    <div>
                        <h4>Mes compétences : </h4>
                        <p>
                            Je sais développer des applications, des sites webs dynamiques et responsifs avec un design moderne.<br/>
                            J'ai une bonne expérience avec les langages python (+ Django), HTML5, CSS3(+Bootstrap), javascript (+React), PHP, SQL.<br/>
                            Je sais créer et manipuler des bases de données SQL, CSV/XLSX.<br/>
                            Je met en oeuvre mes connaissances dans vos projets afin d'obtenir des résultats professionels.<br/>
                        </p>
                    </div>
                     : 
                    <div>
                        <h4>My skills : </h4>
                        <p>
                            I know how to develop applications, dynamic and responsive websites with a modern design. <br/>
                            I have a good experience with the languages ​​python (+ Django), HTML5, CSS3, javascript (+React), PHP, SQL. <br/>
                            I know how to create and manipulate SQL, CSV / XLSX databases. <br/>
                            I use my knowledge in your projects in order to obtain professional results.<br/>
                        </p>
                    </div>}
                <hr className="mr-4"/>
                {this.props.lang === "fr" ? 
                <h5>Voici la liste de mes connaissances : </h5> : <h5>Here is the list of my acquaintances : </h5>
                }<br/>
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        <div className='card'>
                            {this.props.lang === "fr" ?
                                <h5 className="card-header">Langages</h5> : <h5 className="card-header">Languages</h5> 
                            }

                            <ul className="list-group list-group-flush">
                                    
                                <li className="list-group-item">HTML/CSS</li>
                                <li className="list-group-item">Javascript</li>
                                <li className="list-group-item">Python</li>
                                <li className="list-group-item">PHP</li>
                                <li className="list-group-item">SQL</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                        <div className='card'>
                            {this.props.lang === "fr" ?
                                <h5 className='card-header'>Frameworks / Systèmes / Librairies</h5> : <h5 className='card-header'>Frameworks / Systems / Libraries</h5>
                            }
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Django</li>
                                <li className="list-group-item">React</li>
                                <li className="list-group-item">Pandas</li>
                                <li className="list-group-item">Reportlab</li>
                                <li className="list-group-item">Sklearn</li>
                                <li className="list-group-item">Jquery</li>
                                <li className="list-group-item">Bootstrap</li>
                                <li className="list-group-item">Requests+bs4</li>
                                <li className="list-group-item">Selenium</li>
                                <li className="list-group-item">Linux shell</li>
                                <li className="list-group-item">Git</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Competences;