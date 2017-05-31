import { Popover, NavBar, Icon } from 'antd-mobile';

const Item = Popover.Item;

export default class App extends React.Component {
  state = {
    visible: false,
    selected: '',
  };
  onSelect = (opt) => {
    // console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  render() {
    let offsetX = -10; // just for pc demo
    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
      offsetX = -26;
    }
    return (<div style={{boxShadow:'0 1px 5px #eee',position:'relative',zIndex:'2'}}>
      <NavBar iconName={false} mode="light" rightContent={
        <Popover mask
          visible={this.state.visible}
          overlay={[
            (<Item key="4" value="scan"   data-seed="logId">扫一扫</Item>),
            (<Item key="5" value="special"   style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
            (<Item key="6" value="button ct">
              <span style={{ marginRight: 5 }}>帮助</span>
            </Item>),
          ]}
          popupAlign={{
            overflow: { adjustY: 0, adjustX: 0 },
            offset: [offsetX, 15],
          }}
          onVisibleChange={this.handleVisibleChange}
          onSelect={this.onSelect}
        >
          <div style={{
            height: '100%',
            padding: '0 0.3rem',
            marginRight: '-0.3rem',
            display: 'flex',
            alignItems: 'center',
          }}
          >
            <Icon type="ellipsis" />
          </div>
        </Popover>
      }
      >
        NavBar
      </NavBar>
    </div>);
  }
}