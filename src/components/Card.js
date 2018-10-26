import React from 'react'
import { Avatar } from 'antd'

const Card = ({ props }) => {
  return (
    <div style={{ margin: '1em' }}>
      <Avatar
        size={75}
        shape="square"
        src="https://avatars3.githubusercontent.com/u/15630421?v=4"
      />
      <div style={{ display: 'inline-block', marginLeft: 10 }}>
        <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>Name</div>
        <div>Company</div>
      </div>
    </div>
  )
}

export default Card
