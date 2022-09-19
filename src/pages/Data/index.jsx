import React from 'react';
import { Button } from 'zarm';
function Data(){
    return <div className='Data'>    
        <Button theme="primary">Hello World!</Button>
        <span>统计</span>    
    </div>
}
export default {
    component:Data,
    path:'/data',
    title:'data',
    iconType:'tongji',
    isNav:true,
    sort:2
}