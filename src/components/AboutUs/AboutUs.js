import React from 'react';
import 'antd/dist/antd.css';
import {Layout, Breadcrumb} from 'antd';
import {useSelector} from "react-redux";
//import I18n from "src/i18n/i18n";
import {selectPlText, selectRuText} from "../../Redux/aboutUs-selector";
import Text from "antd/es/typography/Text";
import {useTranslation} from "react-i18next";


export const AboutUs = (props) => {
    const {t, i18n} = useTranslation();

    const plText = useSelector(selectPlText)
    const ruText = useSelector(selectRuText)

    const {Content} = Layout;

    return (
        <Content style={{margin: '0 16px'}}>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item> </Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                <Text>'greeting'</Text>
            </div>
        </Content>
    )

}