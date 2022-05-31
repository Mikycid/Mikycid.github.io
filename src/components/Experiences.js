import React, { Component } from 'react';

class Experiences extends Component {
    render() {
        return (
            <main className='p-3'>
                {this.props.lang === "fr" ?
                    <div>
                        <h2>Mes expériences</h2>
                        <p>Je travaillais précedemment dans le secteur de la restauration en temps qu'employé polyvalent et je cherche à me reconvertir professionnellement, 
                        dans quelque chose que j'aime vraiment, c'est pourquoi je suis en ce moment une formation de développeur web et web mobile chez ESECAD.
                        </p>
                        <p><strong>1 Juin 2022 - 31 août 2022 : </strong>Stage chez Infotel (Blagnac) - Secteur logiciel</p>
                        <p>
                            Vous pouvez consulter <a href="https://github.com/Mikycid/InvestCar">mon github</a> pour voir certains de mes projets.
                        </p>
                    </div>
                    :
                    <div>
                        <h2>Experiences</h2>
                        <p>I've been lastly working in the catering sector as a versatile employee and I am looking to retrain myself professionally, in a field I'm interested in,
                        this is why I am now training as a web and mobile web developer with ESECAD.</p>
                        <p><strong>June 1st 2022 - August 31th 2022 : </strong>Internship at Infotel (Blagnac) - Software sector</p>
                        <p>
                            If you're interested you can have a look at <a href="https://github.com/Mikycid/InvestCar">my github</a> page and look for some of my projects. 
                        </p>
                    </div>
                }
                
            </main>
        );
    }
}

export default Experiences;