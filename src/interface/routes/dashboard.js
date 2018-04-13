import React from 'react'
import MenuSmartContracts from 'components/menus/MenuSmartContracts'
import MenuAsideEthereumWallet from 'components/menus/MenuAsideEthereumWallet'

import Home from 'views/dashboard/main/Home'
import Settings from 'views/dashboard/main/Settings'
import EthereumContracts from 'views/dashboard/main/EthereumContracts'
import EnsScan from 'views/dashboard/main/EnsScan'
import AdminUserList from 'views/dashboard/main/UserList'


import MeetupEvent from 'features/MeetupEvent'

import {
  Box, 
} from 'atomic'
// Design Specific Layouts | TODO: Handle this better.
const MenuSmartContractsWrapper = props=>
<Box w={200} p={15} >
  <MenuSmartContracts/>
</Box>

const MeetupEventWrapper = props=>
<Box w={400} p={15} >
  <MeetupEvent
    contractAddress="0x311a70681f008d51f01e75032ee766718c9d74ba"
    contractName="MeetupEvent"
  />
</Box>

export default [
  {
    path: "/dashboard",
    main: Home,
    props: {
      exact: true,
    }
  },
  {
    path: "/dashboard/users",
    main: AdminUserList,
    panelRight: MeetupEventWrapper,
  },
  {
    path: "/dashboard/contracts",
    main: EthereumContracts,
    panelLeft: MenuSmartContractsWrapper,
  },
  {
    path: "/dashboard/settings",
    main: Settings,
  },
  {
    path: "/dashboard/ens",
    main: EnsScan,
  },
  {
    path: "/dashboard/settings",
    main: Home,
  },
]