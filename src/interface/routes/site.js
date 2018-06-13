import FrontHeader from 'views/site/header/Front'
import FrontMain from 'views/site/main/Front'

import SmartContractHeader from 'views/site/header/SmartContracts'
import SmartContractMain from 'views/site/main/SmartContracts'

import UPortSolutionsMain from 'views/site/main/UPortSolutions'
import UPortLoginMain from 'views/site/main/UPortLogin'
import ERC20Main from 'views/site/main/ERC20Components'

import MeetupEventMain from 'views/site/main/MeetupEvent'
import PunchTheClockMain from 'views/site/main/PunchTheClock'
import EthereumNameSystem from 'views/site/main/EthereumNameSystem'



/* Twitter Verify */
import VerifyTwitterHeader from 'views/site/header/VerifyTwitter'
import VerifyTwitterMain from 'views/site/main/VerifyTwitter'


/* ------------------------- Core Pages -------------------------- */
/* Mission */
import MissionHeader from 'views/site/header/core/Mission'
import MissionMain from 'views/site/main/core/Mission'
/* About */
import AboutHeader from 'views/site/header/core/About'
import AboutMain from 'views/site/main/core/About'

export default [
  {
    path: "/",
    header: FrontHeader,
    main: FrontMain,
    meta: {
      exact: true,
    }
  },
  /* ------------------------- Core -------------------------- */
  {
    path: "/mission",
    header: MissionHeader,
    main: MissionMain,
    meta: {
      exact: true,
    }
  },
  {
    path: "/about",
    header: AboutHeader,
    main: AboutMain,
    meta: {
      exact: true,
    }
  },
  /* ------------------------- Solutions -------------------------- */
  
  /* uPort */
  {
    path: "/solutions/uport",
    main: UPortSolutionsMain,
    meta: {
      exact: true,
    }
  },
  {
    path: "/solutions/uport/login",
    main: UPortLoginMain,
    meta: {
      exact: true,
    }
  },

  /* ------------------------- Verify -------------------------- */
  {
    path: "/verify/twitter",
    header: VerifyTwitterHeader,
    main: VerifyTwitterMain,
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

  /* ------------------------- Features -------------------------- */
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