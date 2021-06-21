import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {Navbar} from "./components/Navbar/Navbar";
import {AppHeader} from "./components/AppHeader/AppHeader";
import {AboutUs} from "./components/AboutUs/AboutUs";
import {BrowserRouter,Switch} from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import {CoursesA1} from "./components/Courses/coursesA1";
import {useSelector} from "react-redux";
import {selectLanguage} from "./Redux/language-selector";
import {useParams} from "react-router";


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function App () {


    let {language} = useParams();

        return (
            <Layout style={{ minHeight: '100vh' }}>

                <Navbar/>
                <Layout className="site-layout">
                    <AppHeader/>
                    <Switch>
                        <Router exact path='/:language/'>
                            <AboutUs/>
                        </Router>
                        <Router exact path="/:language/about">
                            <AboutUs/>
                        </Router>
                        <Router exact path="/:language/content/curses_a1">
                            <CoursesA1/>
                        </Router>
                    </Switch>
                    <Footer style={{ textAlign: 'center' }}>Some information</Footer>
                </Layout>

            </Layout>
        );

}

export default App;

