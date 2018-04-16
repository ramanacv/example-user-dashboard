pragma solidity ^0.4.16;

contract PunchTheClock {

    function PunchTheClock() public {
        admin = msg.sender;
    }

    address public admin;
    uint public registrationCost;

    /**
     * Structs
     * @type entity
     * @type timestamp
    */
    struct entity {
        string name;
        bool isRegistered;
        bool isApproved;
        uint arrivals;
        uint departures;
    }

    struct timestamp {
        address eid;
        uint time;
    }

    /**
     * Mapping
     * @type entityList: Status of everyone registering with Smart Contract
     * @type arrivalList: List of times people arrived
     * @type departList: List of times people departed
    */
    mapping (address => entity) public entityList;
    mapping (uint => timestamp) public arrivalList;
    mapping (uint => timestamp) public departList;

    address[] public registeredList;

    /**
     * Events
     * Monitor smart contact events to push state changes
    */
    event EventRegister(    
      address indexed _from,
      string _name
    );
    event EventArrive(    
      address indexed _from,
      string _name
    );
    event EventDepart(    
      address indexed _from,
      string _name
    );
    

    event Error(address indexed _sender, bytes32 error);

    modifier isAdmin() {
        require(admin == msg.sender);
        _;
    }

    modifier isApproved() {
        require(entityList[msg.sender].isApproved == true);
        _;
    }

    function isRegistered(address _address) public view returns(bool isIndeed) {
        return entityList[_address].isRegistered;
    }

    /**
     * Administrator Privileges
     */
    function adminApprove(address _address) public isAdmin {
        entityList[msg.sender].isApproved = true;
    }

    function adminRevoke(address _address) public isAdmin {
        entityList[msg.sender].isApproved = false;
    }

    /**
     * Entity Privileges
     */
    function arrive() public isApproved {
        arrivalList[entityList[msg.sender].arrivals++].eid = msg.sender;
        arrivalList[entityList[msg.sender].arrivals++].time = now;
        EventArrive(msg.sender, entityList[msg.sender].name);
    }
    function depart() public isApproved {
        departList[entityList[msg.sender].departures++].eid = msg.sender;
        departList[entityList[msg.sender].departures++].time = now;
        EventDepart(msg.sender, entityList[msg.sender].name);
    }

    /**
     * Register Entity
     */
    function registerEntity(string _name) public {
        require(!isRegistered(msg.sender));
        entityList[msg.sender].name = _name;
        entityList[msg.sender].isRegistered = true;
        entityList[msg.sender].isApproved = false;
        entityList[msg.sender].arrivals = 0;
        entityList[msg.sender].departures = 0;
    }

    function getRegisteredAddresses() view public returns (address[]) {
        return registeredList;
    }

    function getEntityData(address _address) view public returns (string, bool, uint, uint) {
        return (
          entityList[_address].name,
          entityList[_address].isApproved,
          entityList[_address].arrivals,
          entityList[_address].departures
        );
    }

}
