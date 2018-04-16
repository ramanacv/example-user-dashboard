## User Story
As a developer I want to look at existing code, so I can easily follow patterns and examples for interacting with the Etheruem Blockchain. It takes to long to reason about the entire application stack when creating non-trivial application, so as a Developer I would prefer to either review existing code or simply copy/paste existing solutions.

Since smart contract functions can contain function `params` so it would nice to see how other developers are passing data from Forms => Application State Management(Redux) => uPort/MetaMask => Blockchain => App State Management => User Interface. It requires understanding multiple technology stacks and libraries, so instead of reasoning about all the application logic it would be much more efficient to copy/paste existing data management components/containers and customize existing code to match my specific application requirements. 

For example the ERC20 specification has a `transfer` function, which requires an Ethereum public address as the input.

It's a common occurance to send standardized data to ERC specificaitons. As I developer why should I re-invent the wheel? Can't I just borrow code from all the other awwesome coders and codistas?

## Background/Objective
It would be great to crowd source all the common uses developers will experience when interacting with ERC specification.

Smart contracts generate ABIs, which dictate exactly what types of data can be input to the smart contract. Hence a list of the top 10 most common (existing/potential) smart contracts developers will interact with as the Ethereum Ecosystem matures is a great project for the BuidlBox, so we can standarized on patterns/strategies to easily manage input/output to the Ethereum blockchain.

An easy example is ERC20 with a single smart contract function.

An advanced example is scanning the Ethereum Blockchain for Ethereum Name System (ENS) transactions. Because recursively scanning the blockchain is probably something developers want to do, it would be great to standarize how we as developers complete such a task. 
https://github.com/uport-project/buidlbox/blob/master/src/interface/features/EnsScan/index.js

P.S. An added benefit of blockchain scanning in the User Interface is lower server costs, which is the recursive search pattern is important, because it enables distributed/decentralized blockchain querying. In the future the BuidlBox will also include WebWorker functionality to push this computationally expsensive task off the main Javascript thread.

## Acceptance Criteria
The winning entry will be determined by the issuer creator (@kamescg). In the future (once the community grows) I would like to use a voting mechanism to provide the community with the tools to decide best idea bounty submissions.

## Technical Details
Pleas reference an existing smart contract or write a new smart contract that is a good candidate for Frontend Javascript developers to easily create React Containers/Components/Form to encapsulate the logic in shareable code.