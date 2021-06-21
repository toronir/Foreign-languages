import React from 'react';
import 'antd/dist/antd.css';

import {Row, Col, Layout, Button} from 'antd';


export const AppHeader = (props) => {

    const {Header} = Layout;

    return (
        <Header className="site-layout-background" style={{padding: 0}}>
            <Row>
                <Col span={9}>

                </Col>
                <Col span={12}>
                    <h1>
                        EMAIL|TELEPHONE
                    </h1>
                </Col>
                <Col span={1}>
                    <Button type="primary" shape="circle">
                        RU
                    </Button>
                </Col>
                <Col span={1}>
                    <Button type="primary" shape="circle">
                        EN
                    </Button>
                </Col>
                <Col span={1}>
                    <Button type="primary" shape="circle">
                        PL
                    </Button>
                </Col>
            </Row>
        </Header>
    )

}
