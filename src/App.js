import React from 'react'
import './App.css'
import Dummy from './dummy.json'
import ListUser from './ListUser'

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {pengguna : Dummy, isLogin : true}
  }

    render(){
      const isLoginclass = (this.state.isLogin) ? "sulogin" : "belogin";
       
        return(
          <>
            <div className="header" >
                <h1 className={isLoginclass}>Daftar Pengguna</h1>
            </div>
           <div>
           <ListUser users = {this.state.pengguna}/>
           </div>
          </>
        )
       
      
    }
}

export default App