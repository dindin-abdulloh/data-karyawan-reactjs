import React from 'react'
import './App.css'
import Female from './img/girl.png'
import Male from './img/man.png'
const User = ({user}) => 
(
    <>
    <div className="user">
        <div>
            <img src={(user.gender === "male" ? Male : Female)} width="50px"/>
        </div>
        Nama : {user.name} <br/>
        Usia : {user.age} <br/>
        Jenis Kelamin : {user.gender} <br/>
        Alamat : {user.address} <br/>
        Nama Perusahaan : {user.company}
        
    </div>
   
</>
)

export default User