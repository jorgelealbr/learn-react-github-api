import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import NavBar from './NavBar'

//import './app-layout.css'

const { Header, Footer, Content } = Layout

const AppLayout = props => (
  <Layout>
    <Header>
      <NavBar />
    </Header>
    <Content className="app-content">{props.children}</Content>
    <Footer>made with love on the beach</Footer>
  </Layout>
)

AppLayout.propTypes = {
  children: PropTypes.array
}

export default AppLayout
