import React, { useState } from "react";
import { TabBar, Icon } from "zarm";
import { useNavigate as useHistory } from "react-router-dom";
import CustomIcon from "../CustomIcon";
import { navBars } from "../../router";


export default function NavBar({visible}) {
    const [activeKey, setActiveKey] = useState('/')
    const navigate = useHistory()
    const handleChange = (path) => {
        setActiveKey(path)
        navigate(path)
    }
    return (
        <TabBar visible={visible} activeKey={activeKey} onChange={handleChange}>
            {
                navBars.map(nav=>{
                    return <TabBar.Item
                    key={nav.path}
                    itemKey={nav.path}
                    title={nav.title}
                    icon={<CustomIcon type={nav.iconType} />}
                />
                })
            }
            {/* <TabBar.Item
                itemKey="/"
                title="home"
                icon={<CustomIcon type="zhangdan" />}
            />
            <TabBar.Item
                itemKey="/data"
                title="data"
                icon={<CustomIcon type="tongji" />}
            />
            <TabBar.Item
                itemKey="/about"
                title="about"
                icon={<CustomIcon type="wode" />}
            /> */}
        </TabBar>
    )
}