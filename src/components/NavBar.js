import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon } from 'antd'

class NavBar extends Component {
  state = {}
  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="user-add">
            <Icon type="user-add" />
            Add new card
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default NavBar
