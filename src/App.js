import './App.css';
import Header from './components/Header/Header.js';
import Menu from './components/Menu/Menu.js';
import Hotels from './components/Hotels/Hotels.js';
import React,{ Component } from 'react';
import LoadingIcon from './components/UI/LoadingIcon/LoadingIcon';


class App extends Component{
  hotels = [
    {
      id: 1,
      name: 'Stołeczny',
      city: 'Warszawa',
      rating: 8.1,
      description: 'Sunt officia occaecat adipisicing et culpa ex anim. Ad duis sint quis aute labore eiusmod culpa ut aute minim officia laborum. Mollit esse anim officia aliquip nisi in tempor non veniam exercitation duis tempor.',
      image: ''
    },
    {
      id: 2,
      name: 'Ruben',
      city: 'Zielona Góra',
      rating: 8.8,
      description: 'Sunt officia occaecat adipisicing et culpa ex anim. Ad duis sint quis aute labore eiusmod culpa ut aute minim officia laborum. Mollit esse anim officia aliquip nisi in tempor non veniam exercitation duis tempor.',
      image: ''
    }
  ];
  state = {
        hotels: [],
        loading: true
    };

    searchHandler(term)  {
        console.log('szukaj z app', term)
        const hotels = [...this.hotels]
        .filter(x=>x.name.toLowerCase().includes(term.toLowerCase()));
        this.setState({hotels});
    }
    componentDidMount(){
      setTimeout(()=>{
        this.setState({
          hotels: this.hotels,
          loading: false
        })
      }, 1000)
    }

  
render(){
  return (
    <div className="App">
        <Header onSearch={this.searchHandler.bind(this)}/>
        <Menu/>
        {this.state.loading ? <LoadingIcon/> : <Hotels hotels={this.state.hotels}/>}
    </div>
  );
}
}

export default App;
