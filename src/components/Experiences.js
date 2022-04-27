import React, { Component } from 'react';

class Experiences extends Component {
    render() {
        return (
            <main className='p-3'>
                {this.props.lang === "fr" ?
                    <div>
                        <h2>Mes expériences</h2>
                        <p>Je n'ai aucune expérience professionnelle avec une entreprise pour l'instant dans le domaine de l'informatique.</p>
                        <p>Je travaillais précedemment dans le secteur de la restauration en temps qu'employé polyvalent et je cherche à me reconvertir professionnellement, 
                        dans quelque chose que j'aime vraiment, c'est pourquoi je suis en ce moment une formation de développeur web et web mobile chez ESECAD.

                        </p>
                        <p>
                            Je n'ai pas de projet que j'aime assez à montrer, vous pouvez consulter <a href="https://github.com/Mikycid/InvestCar">mon github</a> pour voir un projet que j'ai arrêté (InvestCar)
                            sans le rendre publique, pour diverses raisons techniques.
                        </p>
                    </div>
                    :
                    <div>
                        <h2>Experiences</h2>
                        <p>I don't have a professionnal experience in the field of IT.</p>
                        <p>I've been lastly working in the catering sector as a versatile employee and I am looking to retrain myself professionally, in a field I'm interested in,
                        this is why I am now training as a web and mobile web developer with ESECAD.</p>
                        <p>
                            I don't have any deployed project to show you at the moment, but if you're interested you can check <a href="https://github.com/Mikycid/InvestCar">my github</a> page and look for the InvestCar 
                            project, I stopped the development of this applications due to technical matters. 
                        </p>
                    </div>
                }
                
            </main>
        );
    }
}

export default Experiences;