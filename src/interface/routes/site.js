import FrontHeader from 'views/site/header/Front'
import FrontMain from 'views/site/main/Front'

import SmartContractHeader from 'views/site/header/SmartContracts'
import SmartContractMain from 'views/site/main/SmartContracts'

import UPortSolutionsMain from 'views/site/main/UPortSolutions'
/**
 * Verify | Trust Manager
 * 
 * The following Routes correspond with the Trust Manager Prototype
 */

// // Email
// import VerifyEmailHeader from 'views/site/header/VerifyEmail'
// import VerifyEmailMain from 'views/site/main/VerifyEmail'
// // Twitter
// import VerifyTwitterHeader from 'views/site/header/VerifyTwitter'
// import VerifyTwitterMain from 'views/site/main/VerifyTwitter'
// // Github
// import VerifyGithubHeader from 'views/site/header/VerifyGithub'
// import VerifyGithubMain from 'views/site/main/VerifyGithub'
// // Reddit
// import VerifyRedditHeader from 'views/site/header/VerifyReddit'
// import VerifyRedditMain from 'views/site/main/VerifyReddit'

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
  
]