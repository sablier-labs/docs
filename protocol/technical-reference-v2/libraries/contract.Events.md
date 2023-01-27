# Events
[Git Source](https://github.com/sablierhq/v2-core/blob/cc0ad3978d3901ec331d3c24fbc36ee2b5a297c0/src/libraries/Events.sol)

Library with events emitted across all contracts.


## Events
### ClaimProtocolRevenues
Emitted when the contract admin claims all protocol revenues accrued for the provided ERC-20 asset.


```solidity
event ClaimProtocolRevenues(address indexed admin, IERC20 indexed asset, uint128 protocolRevenues);
```

### SetComptroller
Emitted when the contract admin sets a new comptroller contract.


```solidity
event SetComptroller(address indexed admin, ISablierV2Comptroller oldComptroller, ISablierV2Comptroller newComptroller);
```

### SetFlashFee
Emitted when the admin sets a new flash fee.


```solidity
event SetFlashFee(address indexed admin, UD60x18 oldFlashFee, UD60x18 newFlashFee);
```

### SetProtocolFee
Emitted when the contract admin sets a new protocol fee for the provided ERC-20 asset.


```solidity
event SetProtocolFee(address indexed admin, IERC20 indexed asset, UD60x18 oldProtocolFee, UD60x18 newProtocolFee);
```

### ToggleFlashAsset
Emitted when the admin enables or disables an ERC-20 asset for flash loaning.


```solidity
event ToggleFlashAsset(address indexed admin, IERC20 indexed asset, bool newFlag);
```

### FlashLoan
Emitted when a flash loan is executed.


```solidity
event FlashLoan(
    address indexed initiator,
    IERC3156FlashBorrower indexed receiver,
    IERC20 indexed asset,
    uint256 amount,
    uint256 feeAmount,
    bytes data
);
```

### CancelLockupStream
Emitted when a lockup stream is canceled.


```solidity
event CancelLockupStream(
    uint256 indexed streamId,
    address indexed sender,
    address indexed recipient,
    uint128 senderAmount,
    uint128 recipientAmount
);
```

### CreateLockupLinearStream
Emitted when a lockup linear stream is created.


```solidity
event CreateLockupLinearStream(
    uint256 streamId,
    address indexed funder,
    address indexed sender,
    address indexed recipient,
    CreateLockupAmounts amounts,
    IERC20 asset,
    bool cancelable,
    Range range,
    address broker
);
```

### CreateLockupProStream
Emitted when a lockup pro stream is created.


```solidity
event CreateLockupProStream(
    uint256 streamId,
    address indexed funder,
    address indexed sender,
    address indexed recipient,
    CreateLockupAmounts amounts,
    Segment[] segments,
    IERC20 asset,
    bool cancelable,
    uint40 startTime,
    uint40 stopTime,
    address broker
);
```

### RenounceLockupStream
Emitted when a sender makes a lockup stream non-cancelable.


```solidity
event RenounceLockupStream(uint256 indexed streamId);
```

### WithdrawFromLockupStream
Emitted when assets are withdrawn from a lockup stream.


```solidity
event WithdrawFromLockupStream(uint256 indexed streamId, address indexed to, uint128 amount);
```

