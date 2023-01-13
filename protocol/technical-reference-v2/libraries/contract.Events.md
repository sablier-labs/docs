# Events
[Git Source](https://github.com/sablierhq/v2-core/blob/71a38f2401905d2762c14a7b36c2334909bdb760/src/libraries/Events.sol)

Library with events emitted across the core contracts.


## Events
### Cancel
Emitted when a stream is canceled.


```solidity
event Cancel(
    uint256 indexed streamId,
    address indexed sender,
    address indexed recipient,
    uint128 senderAmount,
    uint128 recipientAmount
);
```

### ClaimProtocolRevenues
Emitted when the contract owner claims all protocol revenues accrued for the provided token.


```solidity
event ClaimProtocolRevenues(address indexed owner, IERC20 indexed token, uint128 protocolRevenues);
```

### CreateLinearStream
Emitted when a linear stream is created.


```solidity
event CreateLinearStream(
    uint256 streamId,
    address indexed funder,
    address indexed sender,
    address indexed recipient,
    CreateAmounts amounts,
    IERC20 token,
    bool cancelable,
    Range range,
    address broker
);
```

### CreateProStream
Emitted when a pro stream is created.


```solidity
event CreateProStream(
    uint256 streamId,
    address indexed funder,
    address indexed sender,
    address indexed recipient,
    CreateAmounts amounts,
    Segment[] segments,
    IERC20 token,
    bool cancelable,
    uint40 startTime,
    uint40 stopTime,
    address broker
);
```

### Renounce
Emitted when a sender makes a stream non-cancelable.


```solidity
event Renounce(uint256 indexed streamId);
```

### SetComptroller
Emitted when the contract admin sets a new comptroller contract.


```solidity
event SetComptroller(address indexed admin, ISablierV2Comptroller oldComptroller, ISablierV2Comptroller newComptroller);
```

### SetProtocolFee
Emitted when the contract admin sets a new protocol fee for the provided token.


```solidity
event SetProtocolFee(address indexed admin, IERC20 indexed token, UD60x18 oldFee, UD60x18 newFee);
```

### Withdraw
Emitted when tokens are withdrawn from a stream.


```solidity
event Withdraw(uint256 indexed streamId, address indexed to, uint128 amount);
```

