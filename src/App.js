import React from 'react'
import './App.css'
import Dummy from './dummy.json'
import ListUser from './ListUser'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {pengguna : Dummy}
  }

    render(){
        return(
          <>
            <div className="header">
                <h1>Daftar Pengguna</h1>
            </div>
           <div>
           <ListUser users = {this.state.pengguna}/>
           </div>
          </>
        )
    }
}

export default App