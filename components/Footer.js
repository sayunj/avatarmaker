import {Layout, Row} from 'antd';
const {Footer} = Layout;

export default () => (
    <Footer style={{backgroundColor: '#333'}}>
        <Row>
            <footer class='container' style={{height: '150px', textAlign: 'center'}}>
                Copyright © 2018 AvatarMaker
            </footer>
        </Row>
    </Footer>
)