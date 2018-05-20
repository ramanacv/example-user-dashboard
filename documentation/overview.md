
## Assimilation
The `assimilation` folder contains blockchain integrations uses a standard Component/Containers/Redux/Sagas for simple adding and removing of blockchain related logic. The blockchain specific logic is "assimilated" into the primary Application Redux configuration located in `src/interface/store/departments/` where it becomes assesible within the application state management store.

  - uport
  - ethers

For example the uPort and Firebase (Authentication/Database) state Sagas (async frontend state management) converge in components like `UPortAttestAddressForm` located in `/src/interface/features/uport/UPortAttestAddressForm` folder. uPort requires a backend service to privately issue attestations using the `SimpleSigner` function in `uport-js`. The container/component combination will pass decentralized identity, ensure authentication and finally communication with a Firebase database using channels (https://redux-saga.js.org/documentation/advanced/Channels.html) to transfer data transistion between frontend/backend seamlessly.

The BuidlBox attemps to hide a lot of the complexity associated with interacting with a blockchain and private service, so developers can more easily reason about application specific logic. We're still refining the naming conventions and strategy, but developers should be able to make modular Blockchain components, that interact easily with the blockchain and private database services.

## Contract Interaction
The contracts folder contains output of the `truffle compile` CLI command, so developers can easily import ABI, addresses, bytecode and other essential smart contract information directly into components. For example in the `MeetupEvent` container/component we import the MeetupEvent file using `import { MeetupEvent } from 'contracts'` which is then passed to our `contractCreate` and `uportRsvp` dispatch methods to instantiate the smart contracts wrappers using `ethers` and `uport-connect` respectively.


# uPort 
> uPort returns ownership of identity to the individual. uPort's open identity system allows users to register their own identity on Ethereum, send and request credentials, sign transactions, and securely manage keys & data.

#### Instantiating Smart Contracts via uPort
So users can more easily interact with Smart Contract methods/functions uPort "wraps" the smart contract ABI using `uport.contract(INSERT_ABI).at(INSERT_ADDRESS) method chain and generates transaction signing requests either by generating/displaying a new QR code or dispatching attestation request directly to users via the a pushToken (if available).


#### Event RSVP
Below is an example of a smart contract method call dispatch request initialized from the `MeetupEvent` component located in `/src/interface/features/MeetupEvent` folder.

The original code can be found at => https://github.com/emazurek/simple-meetup-dapp

The Smart Contract has been slightly altered. The `payable` parameter has been removed from the rsvpMe() smart contract method, so it's possible to register to an event without paying `ethers` in addition to the `gas costs` with signing the transaction. It's likely in the future a bounty will be issued to include the payable parameter, so it will be possible on `mainnet` to charge people for event event registration.

```
uPortRsvp: (name)=>dispatch(uPortSendTransactionRequest({
  payload: {
    contractABI: MeetupEvent.abi,
    contractAddress: props.contractAddress, // Easily swap out different smart contract addresses
    contractFunction: "rsvpMe",
    contractParams: [
      name
    ]
  },
  metadata: {
    delta: 'contract|transaction|rsvp'
  }
})),
```

The smart contact function call state request request will be "tracked" in the Redux store via the `uport` department using the delta identifier. The delta identifier allows calls to be easily monitored in within the entire application. For example if a component initializes a certain action (logging in with uPort) independent components/containers can decide how/when they should respond to update independently. The "abstracted" Sagas level provides modularity and uncoupled interface components, because components can declare exactly what "state" across the entire application they should listen and interact with. The end result *hopefully* being interoperable component development for a family of decentralized applictions using a standardized state management system for communication across Browser=>Smartphone=>Blockchain=>IPFS


#### Send A Blockchain Transcaction
```
/*---*--- Send Transaction | uPort ---*---*/
function* sendTransaction({payload, metadata}) {
  try {
    const { contractABI, contractAddress, contractFunction, contractParams } = payload
    const contractInstance = uPortConnection.contract(contractABI)
    const contract = contractInstance.at(contractAddress)
    const response = contractParams 
      ? yield contract[contractFunction](...contractParams) 
      : yield contract[contractFunction]()

    yield put(uPortSendTransactionSuccess({
      payload: response, 
      metadata
    }))
  } catch(e) {
    console.log(e)
    yield put(uPortSendTransactionFailure({payload: e, metadata}))
  }
}
```

The `metadata` contains the `delta` identifier which will monitor the `SUCCESS` or `FAILURE` of the blockchain transaction signing. If the Saga returns with a `SUCCESS` the user interface can respond accordingly and vice-verse with the `FAILURE` response. Predictable and modular response objects for the application interface.

```
const mapStateToProps = (state, props) => {
  return {
    // uPort
    identityData: fromUport.getDeltaData(state, `credentials`),
    identityStatus: fromUport.getDeltaStatus(state, `credentials`),
    rsvpData: fromUport.getDeltaData(state, 'contract|transaction|rsvp'),
    rsvpStatus: fromUport.getDeltaStatus(state, `contract|transaction|rsvp`),
    // Ethers
    contractState: fromEthers.getDeltaStatus(state,  `contract|${props.contractName}|${props.contractAddress}|create`),
    attendeeListData: fromEthers.getDeltaData(state, `contract|${props.contractName}|${props.contractAddress}|attendeeAddresses`),
    attendeeListStatus: fromEthers.getDeltaStatus(state, `contract|${props.contractName}|${props.contractAddress}|attendeeAddresses`),
    attendeeInformationList: fromEthers.getStartingData(state, `contract|item|${props.contractName}|${props.contractAddress}|`),
    attendeeData: fromEthers.getDeltaData(state, "contract|meetup|attendeeInformation"),
    attendeeStatus: fromEthers.getDeltaStatus(state, "contract|meetup|attendeeInformation"),
  }
}
```

Using the `fromUport` and `fromEthers` selector objects its easy to query the Redux Store Departments for active asynoronous request. Depending on the returned `status` and `data` queries multiple actions can be chained together in the `QueryLifecyle` function.

For example if the Redux Form is already being displayed, but a decentralized identity passes credentials to the Frontend the component will update the default name display with the information requested during the uPort `requestCredentials` monitored using `identityStatus:fromUport.getDeltaStatus(state, `credentials`)`

```
const QueryLifecycle = lifecycle({
  componentDidUpdate(prevProps) {
    if(this.props.identityStatus && !this.props.identityLoaded) {
      this.props.dispatch(change("FormMeetupEvent", "nameDisplay", this.props.identityData.name))
      this.props.identityLoadToggle(toggle=>!toggle)
    }
  }
})
```

# Private Attestations 
A primary feature of uPort is issuing attestations from a decentralized application to a decentralized identity. The attestation is cryptographically verifiable as originating from issuer. A decentralized application uses the `SimpleSigner` to sign attestations, which are passed back to the Frontend and displayed as a QR code.

The `UPortAttestAddressForm` component/container communicates directly with a Firebase Database to privately sign the form submission directly from the Firebase Cloud Functions.

```
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  const metadata = {
    branch: ['request', 'attestation'],
    delta: 'write|attestation|request',
    writeType: 'create',
  }

  dispatch(databaseWriteRequest({
  payload: {
    data,
    meta: {
      name: 'address',
      type: 'attestation',
      status: 'initialized',
      uid: props.uid
    }
  }, 
  metadata}))
})
```

When the Redux Form onSubmit() method is called the Form data (attestation information) is sent to the Firebase Database using a data structure which is mapped to a Firebase Cloud Function, which monitors for new database entries (attestation requests) and generates a data string required for the QR code being scanned by the uPort mobile application.


P.S. Yes we know we're exposing private keys in the SimpleSigner. Before deemed ready for production all hidden hardcoded instances will be replaced with environment variables. It's simply for demonstration purposes in this instance.

```
exports.attestationRequest = functions.database.ref('/request/attestation/{request}')
  /*--- Monitor User Create | Insert additional User data.   (DB Middleware?)   ---*/
  .onCreate(event => {
    const eventKey = event.data.key 
    const eventData = event.data.val()
    if(eventData.meta.status) {
      switch(eventData.meta.status) {
        case('initialized'):
              db.databaseSearch({
                branch: ["users"],
                boundaries: {
                  equalTo: eventData.meta.uid
                },
                order: {
                  orderByChild: "questKey"
                }
              }).then(lookup=>{
                var signer = SimpleSigner('d12d8a5c643ab7facc0a1815807aba1bed174762a2061b6b098b7bffd7462236')
                var credentials = new Credentials({
                  appName: 'Eidenai',
                  address: '2oo7fQjxR44MnKa8n4XKDZBBa2Buty4qrug',
                  signer: signer,
                  networks: {'0x4': {'registry' : '0x2cc31912b2b0f3075a87b3640923d45a26cef3ee', 'rpcUrl' : 'https://rinkeby.infura.io'}}
                }).attest({
                  sub: lookup[0].address,
                  claim: {
                    ...eventData.data
                  }
                }).then(attestation=>{
                    db.databaseWrite({
                      config: {writeType: 'update'},
                      entity: 'users',
                      branch: ["request", 'attestation', eventKey],
                      payload: {
                        ...eventData,
                        admin: {
                          attestation: `me.uport:add?attestations=${attestation}`,
                          issued: true
                        }
                      },
                    })

                }).catch(err=>console.log(err))
            })
          break;
          default:
          // TODO(@kamescg): Handle default use case. 
          break;
      }
    }
  })
```

The `UPortAttestAddressForm` component will monitor the recently added database entry using a `channel`, so when the private attestation has been generated it can directly streamed backed to the Web Application interface for consumption by the uPort Mobile App

```
const mapDispatchToProps = (dispatch, props) => ({
  databaseChannel: (eid) =>dispatch(databaseChannelRequest({
    payload: {},
    metadata: {
      branch: [
        'request', 'attestation', eid
      ],
      delta: 'write|attestation|channel',
    }
  }))
})
```

The Firebase database backend streams database queries changes to an authenticated Frontend. Currently decentralized identities use a `questKey` identifier, which is generated during initial application authentication as the system UID. The UID generation/management system requires additional logic and proper planning for better maintainbility and security. For example users should be able to generate multiple QuestKeys and potentially manage several different accounts at varying times.

Once the attestation has been verified, the signed JWT is sent back to the Redux Store, where it can be easily be consumed by a QR code generator.

![Resources](documentation/assets/images/redux-channels-database.png)

```
import { QRCode } from 'react-qr-svg'

<QRCode
  bgColor="#FFFFFF"
  fgColor="#000000"
  level="Q"
  style={{ width: 400 }}
  value={props.attestationRequest.admin.attestation}
/> 
```
TODO: We need a better naming convention to store/reference returned responses. Perhaps a bounty, but also a problem that needs to be thought about more thoroughly for all contexts.

## Ethers (https://ethers.io)
The Eidenai Application can communicate directly with the Blockchain. The Ethereum Blockchain is available via the Ethers Module and the Infura (Scalable Blockchain Infrastructure).

Eidenai provides direct access to blockchain information via declarative React Containes/Components. For example developers can easily display any block information (hash, timestramp, gas, transactions, etc...) by simply placing the ```BlockchainBlockGet``` component in the render tree.

### Instantiating Smart Contracts via Ethers
```
contractCreate: ()=>dispatch(ethers.contractCreate('REQUEST')(
    {
      ethAddress: props.contractAddress,
      ethAbi: MeetupEvent.abi,
      contractName: props.contractName
    },
    {
      delta: `contract|${props.contractName}|${props.contractAddress}|create`,
      network: {
        provider: 'infura',
        chain: props.chain || 'rinkeby',
      }
    }
  )),   
``` 

#### Communicate with the Ethereum Blockchain (via Infura)
<strong>Multiple providers are available:</strong> <em>Infura, Etherscan, and JsonRpc (Geth && Parity).</em>

React Components are available to easily sync information from the blockchain directly to the interface.

```

<Heading level={[3,5]} f={[3]} ta='center' mb={15} >
  Current Block Number: #<BlockchainBlockNumber/>
</Heading>
![Resources](documentation/assets/images/eidenaiEthers.png)
![Resources](documentation/assets/images/eidenaiEthers.png)
<Heading level={[3,5]} f={[3]} ta='center' mb={15} >
  Gas Price: <BlockchainGasPrice/>
</Heading>
<BlockchainBlockGet />
<BlockchainBlockGet blockNumber={4540119} />
<BlockchainBlockGet blockNumber={763123} />
```

![Resources](documentation/assets/images/eidenaiEthers.png)

#### Example: uPort Credential Request
The following snippet initializes and monitors the **"status"** and **"data"** of a uPort Credential request.

```
import { fromUport } from 'store/departments/selectors'
import { uPortGetCredentialsRequest } from 'store/departments/actions'

const mapStateToProps = (state, props) => ({
    data: fromUport.getDeltaData(state, `credentials`),
    status: fromUport.getDeltaStatus(state, `credentials`)
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  uPortGetCredentialsRequest: ()=>dispatch(uPortGetCredentialsRequest({
    payload: {
      requested: ['name', 'avatar', 'country', 'phone'],
      notifications: true
    },
    metadata: {
      delta: 'credentials'
    }
  })),
})
```



#### Example: Ethers Blockchain Block
```
/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
// Redux Store
import { fromEthers } from 'store/departments/selectors'
import { ethersBlockchainGetBlockRequest } from 'store/departments/actions'

// Components
import { 
  BlockchainBlockCard
} from 'foundry'
/* ---------------------------- Module Package ------------------------------ */
/*-* Recompose *-*/
const QueryLifecycle = lifecycle(
{
  componentDidMount()
  {
    if(!this.props.blockNumber) return null 
    this.props.ethersBlockchainGetBlockRequest({
      payload: {
        block: this.props.blockNumber,
      },
      metadata: {
        delta: `BlockchainBlockGet|${this.props.blockNumber}`
      }
    })
  },
  componentDidUpdate(prevProps)
  {
    if (this.props.blockNumber != prevProps.blockNumber) {
      if(!this.props.blockNumber) return null 
      this.props.ethersBlockchainGetBlockRequest({
        payload: {
          block: this.props.blockNumber,
        },
        metadata: {
          delta: `BlockchainBlockGet|${this.props.delta}`
        }
      })
    }
  }
})

/*-* Redux Store *-*/
const mapStateToProps = (state, props) => ({
    data: props.blockNumber ? fromEthers.getDeltaData(state, `BlockchainBlockGet|${props.blockNumber}`) : fromEthers.getDeltaData(state, `BlockchainBlockGet|${props.delta}`),
    blockNumber: props.blockNumber ? props.blockNumber : fromEthers.getDeltaData(state, 'BlockchainBlockNumber')
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  ethersBlockchainGetBlockRequest: (settings)=>dispatch(ethersBlockchainGetBlockRequest(settings)),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  QueryLifecycle,
)(BlockchainBlockCard);
```

#### Redux Store
Redux Store Departments, at a minimum, will include ```getDeltaData``` and ```getDeltaStatus``` selectors. In other words, check the status of the request and get the returned data payload.

```
export const getDeltaData = (state,delta) =>state[delta] && state[delta].data || null
export const getDeltaStatus = (state,delta) =>state[delta] && state[delta].status || null
```

## Backend (Firebase)
The Firebase sector provides the scalable infrastructure for application development right now. Mananging authentication, *"serverless"* functions, 

-  Firebase (NoSQL)
-  Authentication (OAuth + Phone Verification)
-  Realtime Database (Data Structure)

## The Component Architecture
Multiple design and developments philosphies/ideas are experimented and implemented within the Application, to achieve the mission  rapid, scalable user experience/interface prototyping for distrubted autonomous organizations functionality. The boilerplate is meant to be adaptaive, so overtime solutions will be added/pruned accomodate more cross-application composability.

1. Component/Container Seperation
2. Atomic Design Philosophy
3. Functional State Management  

## Containers
#### Manage Data Flow 
Containers are primarily responsible for fetching and managing State with Redux. That being said, there may be a few instances where containers are responsible for interacting with different application mechanisms, besides just Redux. For example the Mining container  interacts with the coin hive application by loading the Javascript mining tool asynchronously, when a user requests the feature.

The primary Application containers are Ethers, Firestore and Graph.

### Ethers Container Example
The ```BlockchainBlockGet``` container queries the Blockchain by dispatching an action request, which is registered by the Ethers Saga Department. After the request is complete and verified within the Saga, the data will be returned to Redux. The requested Ethereum Block information is passed dkrectly from the Redux store into the display component props.

```
/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose'
/* ------------------------- Internal Dependencies -------------------------- */
import { 
  BlockchainBlockCard
} from 'foundry'
import { fromEthers } from 'store/departments/selectors'
import { ethersBlockchainGetBlockRequest } from 'store/departments/actions'
/* ---------------------------- Module Package ------------------------------ */
/*-* Recompose *-*/
const queryLifecycle = lifecycle(
{
  componentDidMount()
  {
    if(!this.props.blockNumber) return null 
    this.props.ethersBlockchainGetBlockRequest({
      payload: {
        block: this.props.blockNumber,
      },
      metadata: {
        delta: `BlockchainBlockGet|${this.props.blockNumber}`
      }
    })
  },
  componentDidUpdate(prevProps)
  {
    if (this.props.blockNumber != prevProps.blockNumber) {
      if(!this.props.blockNumber) return null 
      this.props.ethersBlockchainGetBlockRequest({
        payload: {
          block: this.props.blockNumber,
        },
        metadata: {
          delta: `BlockchainBlockGet|${this.props.delta}`
        }
      })
    }
  }
})

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
    data: props.blockNumber ? fromEthers.getDeltaData(state, `BlockchainBlockGet|${props.blockNumber}`) : fromEthers.getDeltaData(state, `BlockchainBlockGet|${props.delta}`),
    blockNumber: props.blockNumber ? props.blockNumber : fromEthers.getDeltaData(state, 'BlockchainBlockNumber')
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  ethersBlockchainGetBlockRequest: (settings)=>dispatch(ethersBlockchainGetBlockRequest(settings)),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(BlockchainBlockCard);

```
