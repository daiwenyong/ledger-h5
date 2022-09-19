import React from 'react';
import { Button } from 'zarm';
import './index.less'
function Index(){
    return <div className='index'>    
        <Button theme="primary">Hello World!</Button>
        账单     
        <span>123</span>    
    </div>
}
export default {
    path:'/',
    component:Index,
    title:'home',
    iconType:'zhangdan',
    isNav:true,
    sort:1
}
