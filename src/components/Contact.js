import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="page">
                {this.props.lang === "fr" ? 
                <p>Pour toute demande, veuillez utiliser un des moyens ci-dessous pour me contacter.</p> : 
                <p>For any request, please use one of the means below to contact me.</p>}
                <address>
                    <ul className="list-none">
                        <li><i className="fas fa-phone"></i>&nbsp;06.50.22.81.66</li>
                        <li><i className="fas fa-envelope"></i>&nbsp;<a href="mailto:lepavecmike@hotmail.fr">lepavecmike@hotmail.fr</a></li>
                        <li><i class="fa fa-inbox" aria-hidden="true"></i>&nbsp;167 avenue Maréchal Lyautey<br/>06000, Nice</li>
                    </ul>
                </address>
            </div>
        );
    }
}

export default Contact;