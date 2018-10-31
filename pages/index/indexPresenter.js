import {Layout, Carousel, Row, Col, Button} from 'antd';
import './index.less';

const {Content} = Layout;

export default ({data}) => (
    <>
    <Content>
        <Carousel autoplay>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
        </Carousel>
        <Row>
            <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                <p>어쩌고저쩌고 당신의 아바타를 만들어보세요!</p>
            </Col>
            <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                <Button type="primary" size='large' style={{marginTop: '100px'}}>시작하기</Button>
            </Col>
            <style jsx>{`
                p {
                    margin-top: 100px
                }
            `}
            </style>
        </Row>
    </Content>
    </>
);