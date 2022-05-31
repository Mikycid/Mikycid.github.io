import React, { Component } from 'react';
import '../css/skills.css';

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
                            Je sais créer et manipuler des bases de données SQL et NoSQL.<br/>
                            Je peux créer des scripts automatisants certaines tâches lourdes.<br/>
                        </p>
                    </div>
                     : 
                    <div>
                        <h4>My skills : </h4>
                        <p>
                            I know how to develop applications, dynamic and responsive websites with a modern design. <br/>
                            I have a good experience with the languages python (+ Django), HTML5, CSS3, javascript (+React), PHP, SQL. <br/>
                            I know how to create and manipulate SQL and NoSQL. <br/>
                            I can write automated scripts to overcome some heavy work.<br/>
                        </p>
                    </div>}
                <hr className="mr-4"/>
                {this.props.lang === "fr" ? 
                <h5>Voici la liste de mes connaissances : </h5> : <h5>Here is the list of my acquaintances : </h5>
                }<br/>
                <div className="row">
                    <div className="col-sm-12 col-lg-6">
                        <div className='card bg-light'>
                            {this.props.lang === "fr" ?
                                <h5 className="card-header">Langages</h5> : <h5 className="card-header">Languages</h5> 
                            }

                            <ul className="list-group list-group-flush">
                                    
                                <li className="list-group-item">HTML/CSS</li>
                                <li className="list-group-item">Javascript</li>
                                <li className="list-group-item">Python</li>
                                <li className="list-group-item">PHP</li>
                                <li className="list-group-item">SQL</li>
                                <li className='list-group-item'>C/C++</li>
                                <li className='list-group-item'>Shell</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 mt-4 mt-lg-0">
                        <div className='card bg-light'>
                            <h5 className='card-header'>Frameworks</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Django</li>
                                <li className="list-group-item">React</li>
                                <li className='list-group-item'>Symfony</li>
                                <li className='list-group-item'>Angular</li>
                                <li className="list-group-item">Jquery</li>
                                <li className="list-group-item">Bootstrap</li>
                                <li className="list-group-item">Git</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col mt-4'>
                        <div className='card bg-light'>
                            {this.props.lang === "fr" ?
                                <h5 className='card-header'>Que puis-je créer ?</h5> : <h5 className='card-header'>What can I build ?</h5>
                            }
                            {this.props.lang ==="fr" ? 
                            <ul className="list-group list-group-flush">
                                <li className='list-group-item'>
                                    <div className='row'>
                                        <div className='col-md-3 border-right border-dark title-sm font-weight-bold'>Sites web</div>
                                        <div className='col-md-9'>
                                            <ul className='list-group list-group-flush'>
                                                <li className='list-group-item font-italic'>E-commerce, business, catalogues, site vitrine...</li>
                                                <li className='list-group-item'>D'une page statique à la création d'une boutique en ligne, je suis capable de créer, de déployer, et de maintenir un site web.</li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className='row'>
                                        <div className='col-md-3 border-right border-dark title-sm font-weight-bold'>Des APIs</div>
                                        <div className="col-md-9">
                                            <ul className='list-group list-group-flush'>
                                                <li className='list-group-item font-italic'>REST, CRUD, XML-RPC</li>
                                                <li className='list-group-item'>Je sais créer et utiliser des apis orientées fichier ou objet.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className='list-group-item'>
                                    <div className='row'>
                                        <div className='col-md-3 border-right border-dark title-sm font-weight-bold'>Automations</div>
                                        <div className="col-md-9">
                                            <ul className='list-group list-group-flush'>
                                                <li className='list-group-item font-italic'>Tests unitaires, navigateur piloté...</li>
                                                <li className='list-group-item'>Je sais utiliser les outils de test du langage python, ainsi que sélénium.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className='list-group-item'>
                                    <div className='row'>
                                        <div className='col-md-3 border-right border-dark title-sm font-weight-bold'>Bases de données</div>
                                        <div className="col-md-9">
                                            <ul className='list-group list-group-flush'>
                                                <li className='list-group-item font-italic'>SQL, NoSQL (MongoDB par exemple)</li>
                                                <li className='list-group-item'>Je sait créer des structures organisées et performantes pour stocker des données, et les utiliser dans une application.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            : 
                            <ul className="list-group list-group-flush">
                                <li className='list-group-item'>
                                    <div className='row'>
                                        <div className='col-md-3 border-right border-dark title-sm font-weight-bold'>Websites</div>
                                        <div className='col-md-9'>
                                            <ul className='list-group list-group-flush'>
                                                <li className='list-group-item font-italic'>Ecommerce, business, catalogues, showcase...</li>
                                                <li className='list-group-item'>From static pages to your online store, I can build, deploy and maintain websites projects.</li>
                                            </ul>
                                        </div>
                                        
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className='row'>
                                        <div className='col-md-3 border-right border-dark title-sm font-weight-bold'>APIs</div>
                                        <div className="col-md-9">
                                            <ul className='list-group list-group-flush'>
                                                <li className='list-group-item font-italic'>REST, CRUD, XML-RPC</li>
                                                <li className='list-group-item'>I know how to create and manipulate APIs in a set of architectural constraints.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className='list-group-item'>
                                    <div className='row'>
                                        <div className='col-md-3 border-right border-dark title-sm font-weight-bold'>Automations</div>
                                        <div className="col-md-9">
                                            <ul className='list-group list-group-flush'>
                                                <li className='list-group-item font-italic'>Unit tests, headless browser...</li>
                                                <li className='list-group-item'>I'm experienced in using python's test tools and selenium to automate tasks.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className='list-group-item'>
                                    <div className='row'>
                                        <div className='col-md-3 border-right border-dark title-sm font-weight-bold'>Databases</div>
                                        <div className="col-md-9">
                                            <ul className='list-group list-group-flush'>
                                                <li className='list-group-item font-italic'>SQL, NoSQL (MongoDB for example)</li>
                                                <li className='list-group-item'>I know how to create organized and efficient structures to store data, and use them in an application.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            }
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Competences;