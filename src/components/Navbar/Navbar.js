import React from 'react';
import {Layout, Menu} from "antd";
import {DesktopOutlined, PieChartOutlined, UserOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import navbar from "./Navbar.module.css";

const {Sider} = Layout;
const {SubMenu} = Menu;

export class Navbar extends React.Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {


        const {collapsed} = this.state;

        return (
            <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                <div className="logo"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<PieChartOutlined/>}>
                        <NavLink to="/about"
                                 activeClassName={navbar.activeLink}>About Us</NavLink>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined/>} title="Courses">
                        <Menu.Item key="3"><NavLink to="/content/curses_a1"
                                                    activeClassName={navbar.activeLink}>A1 courses</NavLink></Menu.Item>
                        <Menu.Item key="4"><NavLink to="/content/curses_a2"
                                                    activeClassName={navbar.activeLink}>A2 courses</NavLink></Menu.Item>
                        <Menu.Item key="5"><NavLink to="/content/curses_b1"
                                                    activeClassName={navbar.activeLink}>B1 courses</NavLink></Menu.Item>
                        <Menu.Item key="6"><NavLink to="/content/curses_b2"
                                                    activeClassName={navbar.activeLink}>B2 courses</NavLink></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="2" icon={<DesktopOutlined/>}>
                        <NavLink to="/contact"
                                 activeClassName={navbar.activeLink}>Contact</NavLink>
                    </Menu.Item>
                </Menu>
            </Sider>
        )

    }
}


