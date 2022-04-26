import React, { Component } from 'react';

class Experiences extends Component {
    render() {
        return (
            <div className="page">
                {this.props.lang === "fr" ?
                <div>
                    <h2>Mes expériences</h2>
                    <p>Je n'ai aucune expérience professionnelle pour l'instant dans le domaine de l'informatique.<br/>
                    Je travaille actuellement dans le secteur de la restauration en temps qu'employé polyvalent et je cherche à me reconvertir professionnellement, 
                    c'est pourquoi je suis en ce moment une formation de développeur web et web mobile chez ESECAD.

                    </p>
                </div>: <div>
                    <h2>Experiences</h2>
                    <p>I don't have a professionnal experience in the field of IT.<br/>
                    I'm currently working in the catering sector as a versatile employee and I am looking to retrain myself professionally, 
                    this is why I am now training as a web and mobile web developer with ESECAD.</p>
                </div>}
                
            </div>
        );
    }
}

export default Experiences;