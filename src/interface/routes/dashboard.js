import React from 'react'
import {
  Box, 
} from 'atomic'


import Home from 'views/dashboard/main/Home'
/**
 * Entity
 */
import People from 'views/dashboard/main/People'
import PeoplePanelLeft from 'views/dashboard/panelLeft/People'
import PeoplePanelRight from 'views/dashboard/panelRight/People'

export default [
  {
    path: "/dashboard",
    main: Home,
    props: {
      exact: true,
    }
  },

  {
    path: "/dashboard/people",
    main: People,
    panelLeft: PeoplePanelLeft,
    panelRight: PeoplePanelRight
  },
]