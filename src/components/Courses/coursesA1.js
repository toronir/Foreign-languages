import React from 'react';

import 'antd/dist/antd.css';
import {Layout, Breadcrumb} from 'antd';


export const CoursesA1 = (props) => {

    const { Content} = Layout;

    return (
        <Content style={{margin: '0 16px'}}>
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item>   </Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                Very good courses
            </div>
        </Content>
    )

}