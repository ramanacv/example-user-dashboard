# Communicate With The Blockchain
The biggest hurdle when developing decentralized applications is communicating with the Ethereum Blockchain: request data or send transaction requests. The Ethereum Blockchain might be considered a `universal state management system` and developers can decide how they interact with this universal state management system in a way that increases an applications value-proposition. Depending on the decentralized applications the Etheruem Blockchain might be a very thin layer (ex. reading data) or the core functionality (e.x decentralized exchange), but both will require predictable patterns for encapsulating input/output requests to the blockchain.

> As a Javascript Developer I like to think about the Etheruem Blockchain as an extension of my application's Redux Store. Both are primarily responsible for managing important state transitions within my application, which are broadcast to interested users/components.
>
>I try and avoid writing complicated application logic in both layers, instead primarily writing async state requests and nested data structures in my Blockchain/Redux logic.
>
> -Kames

## The Application Architecture
The BuidlBox takes advantage of React's composability and hierarchy of needs to maintain seperation of concerns when it comes to sending/requesting data to/from the blockchain. All of interactions with the Blockchain should be handled in the Redux Store Department Sagas using a predictable structure. 

React containers and components should also be concerned with `dispatching` or using `selectors` to communicate with the underlying architecture.

#### Observe Application State Across Components
The Redux Store Departments use the `delta` identifier, so it's possible monitor any and all state requests across the application interface.

Suppose I login to my decentralized identity using the `UPortCredentialsRequest` container, which utilizes the "credential" delta when dispatching state management transistion requests. Other React component can "hook" into this `delta` identifier and implement unique and encapsulated logic without the `UPortCredentialsRequest` component responsible for dispatching the initial state request having to know about it. Other containers/components i.e.e the `MeetupEvent` container/component, which prevents form submission until a decentralized identity has logged, can simply monitor the Redux Store Department containing the `credentials` delta identifier and trigger the `onComponentDidUpdate()` lifecycle method has changed.

##### A Real Example
To demonstate blockchain and interface state management patterns let's start with the `uPortCredentialsRequest` component, which is responsible for initializing communication with a decentralized identity using the uPort smartphone application.

```
/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux';
/* ------------------------- Internal Dependencies -------------------------- */
import { fromUport } from 'assimilation/store/selectors'
import { uPortGetCredentialsRequest } from 'assimilation/store/actions'
import UPortIdentityDisplay from 'assimilation/components/uport/UPortIdentityDisplay'
/* ---------------------------- Module Package ------------------------------ */

/*-* Redux *-*/
const mapStateToProps = (state, props) => ({
    data: fromUport.getDeltaData(state, `credentials`),
    status: fromUport.getDeltaStatus(state, `credentials`)
  }
)

const mapDispatchToProps = (dispatch, props) => ({
  uPortGetCredentialsRequest: ()=>dispatch(uPortGetCredentialsRequest({
    payload: {
      requested: [props.requested],
      notifications: true
    },
    metadata: {
      delta: 'credentials',
      dialog: 'ViewDialogWelcome'
    }
  })),
})

export default connect(mapStateToProps, mapDispatchToProps)(UPortIdentityDisplay);
```

The `delta` parameter is nested within the dispatched action `metadata`. The metadata parameter contains any information which is secondary to the state tranistion request. Put another way, primary dispatched data is stored in the `payload` parameter, and anything responsible for assisting with the state management request or initializes another side-effect request is sent within the metadata parameter.

For example, below the `delta` parameter, which dispatches a secondary "side-effect" opens a Dialog Component (via the DialogFactory) containing a component name `ViewsDialogWelcome` located in the `foundry` folder, but we can worry about state management side-effects at another point in time. Right now, we're focused on understanding the `delta` parameter as it's used to manage state transition requests across the application using predictable patterns.

```
metadata: {
  delta: 'credentials',
  dialog: 'ViewDialogWelcome'
}
```

The `delta` identifier is used when requesting data using the Redux Store Department `selectors`. Each Redux Store Department (uport, dialog, ethers, etc...) at a minimum all contain the following Redux selectors.

```
export const getDeltaData = (state,delta) => (state[delta] && state[delta].data) || null
export const getDeltaStatus = (state,delta) => (state[delta] && state[delta].status) || null
```

Other components dependent on the `uPortCredentialsRequest` component being monitor for the state `delta credentials` transistion `status` which is either `REQUESTED`, `SUCCESS` or `FAILURE`.

Using the `fromuPort` parent selector object it's simply a matter of using the `getDeltaData` selector with the correct `delta` identifier to monitor when a decentralized identity is succesfully logged in.

`import { fromUport } from 'assimilation/store/selectors'`

The `fromUport` parent selector object will be added to the containers/component unique `mapStateToProps` function, so it can monitor for application state transitions, which are passed directly to the display component for rendering.

```
const mapStateToProps = (state, props) => ({
    data: fromUport.getDeltaData(state, `credentials`),
    status: fromUport.getDeltaStatus(state, `credentials`)
  }
)
```

The `data` and `status` are passed to the display component (or used for component update logic) and accesible via the `props.data` and `props.status` which can dictate what's being rendered to the user.

For example the `UPortAvatar` component uses simple `ternary` logic to prevent the component from rendering unless a decentralized identity has succesfully logged and a `avatar` param was part of the requested information


```
export default props => props.status && !props.data.avatar ? null :
<Flex align="center" {...props.styled} >
  <Box
    borderRadius={9999999}
    bc="white"
    b="2px solid #FFF"
    boxShadow={2}
    mr={15}
    of="hidden"
    h={50}
    w={50}
  >
    <BackgroundImage 
      src={idx(props, _=>_.data.avatar.uri)}
    />
  </Box>
  <Heading level={[3]} f={[3]} m={0}>
    {idx(props, _=>_.data.name)}
  </Heading>
</Flex>
```
