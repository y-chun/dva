import { Layout, Icon } from 'antd';
import { Link } from 'dva/router';
import { connect } from 'dva';
import PropTypes from 'prop-types'
const { Header, Sider, Content } = Layout;
import Sidebar from '../components/Sidebar';

const Index = ({dispatch,products,children}) => {
  
    return (
        <Layout>
            <Sider
                collapsible
            >
                <Sidebar></Sidebar>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon
                        className="trigger"
                    />

                </Header>
                <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                {children}
                </Content>

            </Layout>
        </Layout>
    )
}
// index.PropTypes = {
//     children: PropTypes.element.isRequired
// }
export default connect(({ products }) => ({
  products,
}))(Index);