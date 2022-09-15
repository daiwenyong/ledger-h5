import React, { useState } from "react";
import { TabBar, Icon } from "zarm";
import { useNavigate as useHistory } from "react-router-dom";

const TabIcon = Icon.createFromIconfont('//at.alicdn.com/t/font_1340918_mk657pke2hj.js');

export default function NavBar(visible) {
    const [activeKey, setActiveKey] = useState('/')
    const navigate = useHistory()
    const handleChange = (path) => {
        setActiveKey(path)
        navigate(path)
    }
    return (
        <TabBar visible={visible} activeKey={activeKey} onChange={handleChange}>
            <TabBar.Item
                itemKey="/"
                title="home"
                icon={<TabIcon type="insurance" />}
                badge={{ shape: 'circle', text: '3' }}
            />
            <TabBar.Item
                itemKey="/about"
                title="about"
                icon={<TabIcon type="user" />}
                badge={{ shape: 'dot' }}
            />
        </TabBar>
    )
}