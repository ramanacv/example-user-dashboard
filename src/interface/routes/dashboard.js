import React from 'react'
import {
  Box, 
} from 'atomic'

import MenuSmartContracts from 'components/menus/MenuSmartContracts'

import Home from 'views/dashboard/main/Home'
import Settings from 'views/dashboard/main/Settings'
import EthereumContracts from 'views/dashboard/main/EthereumContracts'
import EnsScan from 'views/dashboard/main/EnsScan'
import AdminUserList from 'views/dashboard/main/UserList'


import MeetupEvent from 'features/MeetupEvent'

/**
 * Entity
 */
import People from 'views/dashboard/main/People'
import PeoplePanelLeft from 'views/dashboard/panelLeft/People'
import PeoplePanelRight from 'views/dashboard/panelRight/People'

/* Projects */
import Projects from 'views/dashboard/main/Project'
import ProjectAdd from 'views/dashboard/main/ProjectAdd'
/* Events */
import EventsList from 'views/events/EventsList'
import EventAdd from 'views/events/EventAdd'

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

  /* ------------------------- Projects -------------------------- */
  {
    path: "/dashboard/projects",
    main: Projects,
  },
  {
    path: "/dashboard/project/add",
    main: ProjectAdd
  },

  /* ------------------------- Events  -------------------------- */
  {
    path: "/dashboard/events",
    main: EventsList,
    panelRight: EventAdd,
  },
  {
    path: "/dashboard/event/add",
    main: EventAdd,
    panelRight: MeetupEventWrapper,
  },
  /* ------------------------- Users -------------------------- */
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
    path: "/dashboard/people",
    main: People,
    panelLeft: PeoplePanelLeft,
    panelRight: PeoplePanelRight
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