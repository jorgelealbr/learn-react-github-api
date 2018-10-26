import React from 'react'
import { Avatar } from 'antd'

const Card = props => {
  return (
    <div style={{ margin: '1em' }}>
      <Avatar size={75} shape="square" src={props.avatar_url} />
      <div style={{ display: 'inline-block', marginLeft: 10 }}>
        <div style={{ fontSize: '1.25em', fontWeight: 'bold' }}>
          {props.name}
        </div>
        <div>{props.company}</div>
      </div>
    </div>
  )
}

export default Card
