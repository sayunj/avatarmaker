import {Layout, Button} from 'antd';

const {Content} = Layout;

export default ({data}) => (
    <>
    <Content>
    {
            data &&
            data.categories && 
            data.categories.map((category) => (
                
                <Button>{category.name}</Button>
            ))
        }
    </Content>
    </>
);