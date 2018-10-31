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
            <Link to="/cards/new">
              <Icon type="user-add" />
              Add new card
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default NavBar
