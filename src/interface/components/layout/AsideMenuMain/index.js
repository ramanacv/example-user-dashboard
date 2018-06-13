/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { MenuAsideItem } from 'foundry'
import { MenuMain } from 'static/menus'
/* ------------------------------- Component -------------------------------- */
export default props => <div>{MenuMain.map(item=> <MenuAsideItem {...props} {...item}/> )}</div>