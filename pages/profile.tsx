import React from 'react'
import { NextPageContext } from 'next'
import { UserInfo } from '../lib/types/user'



export default class Page extends React.Component<UserInfo> {
  render() {
    const { name } = this.props
    return <main>Your user name: {name}</main>
  }
}

export async function getServerSideProps({ req }: NextPageContext) {
  // let userResp = await UseUser("1") as UserInfo
  return { props: { name : "Marry" } }
}

