import Header from './components/Header/Header';
import Content from './components/Content/Content';
import styles from './App.css'
import React from 'react'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount(){
    fetch("https://raw.githubusercontent.com/xsolla/xsolla-frontend-school-2021/main/events.json")
    .then(res=>res.json())
    .then(
      (res)=>{
        this.setState({
          isLoaded:true,
          items:res
        });
      },
      (error)=>{
        this.setState({
          isLoaded:true,
          error
        });
      }
    )
  }

  render(){
    const {error, isLoaded, items} = this.state

    if(error)
      return (<p>Ошибка, потворите позднее</p>)

    if(!isLoaded)
      return (<p>Загрузка...</p>)

    return (
      <div className="container">
        <Header />
        <Content  data={items}/>
      </div>
    )
  }
}

export default App;
