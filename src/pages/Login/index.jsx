import React,{useState} from 'react'
function Login(){
    const [name,setName] = useState('')
    const [pwd,setPwd] = useState('')
    return <div>
        Login
        账号 <input value={name} onChange={(e)=>{setName(e.target.value)}}></input>
        密码 <input value={pwd} onChange={(e)=>{setPwd(e.target.value)}}></input>
    </div>
}
export default {
    component:Login,
    path:'/login'
}