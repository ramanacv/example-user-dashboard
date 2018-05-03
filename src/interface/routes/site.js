import FrontHeader from 'views/site/header/Front'
import FrontMain from 'views/site/main/Front'

import SmartContractHeader from 'views/site/header/SmartContracts'
import SmartContractMain from 'views/site/main/SmartContracts'

import UPortSolutionsMain from 'views/site/main/UPortSolutions'
import ERC20Main from 'views/site/main/ERC20Components'

import MeetupEventMain from 'views/site/main/MeetupEvent'
import PunchTheClockMain from 'views/site/main/PunchTheClock'
import EthereumNameSystem from 'views/site/main/EthereumNameSystem'

export default [
  {
    path: "/",
    header: FrontHeader,
    main: FrontMain,
    meta: {
      exact: true,
    }
  },
  {
    path: "/contracts",
    header: SmartContractHeader,
    main: SmartContractMain,
    meta: {
      exact: true,
    }
  },
  {
    path: "/solutions/uport",
    main: UPortSolutionsMain,
    meta: {
      exact: true,
    }
  },

  // Features
  {
    path: "/features/erc20",
    main: ERC20Main,
    meta: {
      exact: true,
    }
  },
  {
    path: "/features/meetup-event",
    main: MeetupEventMain,
    meta: {
      exact: true,
    }
  },
  {
    path: "/features/punch-the-clock",
    main: PunchTheClockMain,
    meta: {
      exact: true,
    }
  },
  {
    path: "/features/ens",
    main: EthereumNameSystem,
    meta: {
      exact: true,
    }
  },
  
]