# Redux Store Departments
The BuidlBox, being a React application, utilizes the Redux Store module (and accompanying patterns) for application layer state management. To compartmentalize and minimize cognitive overhead  the concept of "Departments" is used to encapsulate specific Redux Store logic into reasonable chunks. For example the logic used to initialize Dialog boxes is contained within the Dialog Redux Store Department.

The Redux Store Departments if placed within the `/src/interface/store/departments` folder will automatically be "integrated" with application Redux Store. The Store Department architecture is meant to provide developers with the ability to easily "drop-in" specific state management features. Why? The BuidlBox is focused on long-term interoperability across a diverse set of decentralized applications, so adding features/logic should be easy as copy/paste.

This architecture is particularily useful when used in conjuction to assimilate blockchain functinallity.

Which brings us to our next point... the Redux Store automatically integrates state management patterns from 2 locations. We promise there is a method to the madness. The core `src/interface/store/departments` and also the `/src/assimilation/store` folder. The `src/interface/store/departments` folder contains generic application state management like i.e. dialog, popovers, notifications, drawer, etc...
And the `/src/assimilation/store` contains the state management logic for interacting with decentralized solutions.

## Assimilating the Blockchain
The BuidlBox is all about creating symbiotic relationships across a diverse range of decentralized solutions, which requires "assimilating" API interfaces into the core state management system that connect with the universal state management system i.e. Ethereum Blockchain.

Currently the BuidlBox has taken the position that separating these different state management concerns is the best path forward for managing long-term interoperability across a growing number of decentralized application user interfaces. If you disagree, please open an issue and make a proposal for a better alternative or strategy for scalability in regards to sharing interface state management patterns.

#### Active Assimilations
The current decentralized assimilations are `uport` and `ethers`, but it's certainly plausbile a number of different Redux Store Departments could be included. Please reference the `resources/redux-store` to learn how you can auto-generate Redux Store Departments by mapping a Javascript library API if you're interested in writing state management logic to share across more decentralized applications.

Current Assimilations
 - uPort
 - Ethers

 Proposed Assimilations
  - IPFS
  - Dether
  - ShapeShift
  - Coinhive
  - Storj
  - 0x


#### Managing Unique State Transaction Requests
The `delta` parameter stored in the parent `metadata` parent object used to dispatch Redux actions is very important. It's the unique identifier used to manage "hook" into the an application state transistions. 

The BuidlBox Redux Store Departments utilize the `delta` identifier pattern to enable dispatching state management requests utilizing a single Reducer/Saga execution pattern. For example, imagine if we had to write unique Reducers/Selectors/Sagas for every single blockchain interaction request... No thank you! That would be redudant and infeasible for a modular architecture. Instead of writing unique reducers/selectors/sagas for every smart contract function callback, we interact with a single store action responsible for encapsulating general purpose transaction request logic and manage all the originating requests using the `delta` identifier. Simple. Sharable. Modular :)