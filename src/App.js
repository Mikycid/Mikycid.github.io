import React, {Component} from 'react';
import './css/main.css';
import MainPage from './components/MainPage';
import Contact from './components/Contact';
import Competences from './components/Competences';
import Experiences from './components/Experiences';
import Header from './components/Header';
import Footer from './components/Footer';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        tab: 'main',
        lang: 'fr',
    };
}
  switchTab(tab){
    this.setState({tab:tab});
  }
  switchLang(){
    if(this.state.lang === "fr") {
      this.setState({lang:"en"});
    } else {
      this.setState({lang:"fr"});
    }

  }
  render(){
    return(
    <div className="container container-fluid d-flex flex-column text-justify">
          <Header switchTab={(tab)=>this.switchTab(tab)} lang={this.state.lang} switchLang={()=>this.switchLang()}/>
      
        {this.state.tab === 'main' ?
          <MainPage switchTab={(tab)=>this.switchTab(tab)} lang={this.state.lang}/> : ''
        }
        {this.state.tab === 'exp' ? 
          <Experiences lang={this.state.lang}/> : ""
        }
        {this.state.tab === 'cpm' ? 
          <Competences lang={this.state.lang}/> : ""
        }
        {this.state.tab === 'con' ?
          <Contact lang={this.state.lang}/> : ""
        }
      
      
        <Footer lang={this.state.lang} />
    </div>
    )}
}

export default App;
