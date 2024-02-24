import React, { useState } from 'react'
import './Sidebar.css'
import Logo from '../../imgs/logo.png'
import { SidebarData } from '../../Data/Data'
import { UilSignOutAlt } from '@iconscout/react-unicons'

const Sidebar = () => {

    const [selected, setSelected] = useState(0)

    return (
        <div className="Sidebar">
            <div className="logo">
                <img src={Logo} alt="" />
                <span>
                    Sh<span>o</span>ps
                </span>
            </div>

            {/* menu */}
            <div className="menu">
                {SidebarData.map((item, index) => {
                    return (
                        <div className={selected === index ? 'menuItem active' : 'menuItem'}
                            key={index}
                            onClick={() => setSelected(index)}
                        >

                            <item.icon />
                            <span>
                                {item.title}
                            </span>
                        </div>
                    )
                })}

                <div className="menuItem">
                    <UilSignOutAlt />
                    <span>
                        Logout
                    </span>
                </div>
            </div>
        </div >
    )
}

export default Sidebar