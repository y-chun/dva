import React, { PropTypes } from 'react';
import { Link } from 'dva/router';
import { Menu, Icon } from 'antd';
const list = [
  {
    name: '一',
    key: '1',
    children: [
      {
        name: '一一',
        key: '1-1',
        router: '/Products',
      },
      {
        name: '一二',
        key: '1-2',
        router: '/2',
      },
    ],
  }, {
    name: '二',
    key: '2',
    children: [
      {
        name: '二一',
        key: '2-1',
        router: '/3',
      },
      {
        name: '二二',
        key: '2-2',
        router: '/4',
      },
    ],
  },
];
const Sidebar = () => {
  const getItem = (list) => {
    return list.map((item) => {
      if (item.children) {
        return (
          <Menu.SubMenu title={item.name} key={item.key}>
            {getItem(item.children)}

          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item key={item.key}><Link to={item.router}>{item.name}</Link></Menu.Item>
      );

    });
  };
  return (
    <Menu style={{ background: 'fff' }} theme="dark">
      {getItem(list)}
    </Menu>
  );
};

export default Sidebar;
