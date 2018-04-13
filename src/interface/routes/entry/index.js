/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch, Route } from 'react-router';
import { ToastContainer } from 'react-toastify';
/* ------------------------- External Dependencies -------------------------- */
import Block from 'atoms/Block'

import DialogFactory from 'containers/dialog/DialogFactory'
import DrawerFactory from 'containers/drawer/DrawerFactory'
import MenuDrawer from 'components/menus/MenuDrawer'

import SiteEntry from 'layout/entry/Site'
import DashboardEntry from 'layout/entry/Dashboard'

import {
  EthersInfuraConnect,
  EthersGanacheConnect,
} from 'containers'

const EthereumConnection = props => ({
  ganache: <EthersGanacheConnect/>,
  infura: <EthersInfuraConnect chain="rinkeby" />
}['infura'])


const ToastSetting = {
  position: 'top-right',
  type: 'default',
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  pauseOnHover: true,
}

export default () => (
<div>
  <EthereumConnection/>
  <Block z={[500]} >
    <DialogFactory/>
    <DrawerFactory>
      <MenuDrawer/>
    </DrawerFactory>
    <ToastContainer {...ToastSetting}/>
  </Block>
  <Block z={[300]} o={0.999999} >
    <Switch>
      <Route path="/dashboard" component={DashboardEntry} />
      <Route path="/" component={SiteEntry} />
    </Switch>
  </Block>
</div>
);
