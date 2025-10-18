# SablierMerkleLockup

[Git Source](https://github.com/sablier-labs/airdrops/blob/077c6b9766ef7693ba9e82a9e001dc0097709c01/src/abstracts/SablierMerkleLockup.sol)

**Inherits:** [ISablierMerkleLockup](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleLockup.md),
[SablierMerkleBase](/docs/reference/airdrops/contracts/abstracts/abstract.SablierMerkleBase.md)

See the documentation in
[ISablierMerkleLockup](/docs/reference/airdrops/contracts/interfaces/interface.ISablierMerkleLockup.md).

## State Variables

### SABLIER_LOCKUP

The address of the [SablierLockup](/reference/lockup/contracts/contract.SablierLockup.md) contract.

```solidity
ISablierLockup public immutable override SABLIER_LOCKUP;
```

### STREAM_CANCELABLE

A flag indicating whether the streams can be canceled.

_This is an immutable state variable._

```solidity
bool public immutable override STREAM_CANCELABLE;
```

### STREAM_TRANSFERABLE

A flag indicating whether the stream NFTs are transferable.

_This is an immutable state variable._

```solidity
bool public immutable override STREAM_TRANSFERABLE;
```

### streamShape

Retrieves the shape of the Lockup stream created upon claiming.

```solidity
string public override streamShape;
```

### \_claimedStreams

_A mapping between recipient addresses and Lockup streams created through the claim function._

```solidity
mapping(address recipient => uint256[] streamIds) internal _claimedStreams;
```

## Functions

### constructor

_Constructs the contract by initializing the immutable state vars, and max approving the Lockup contract._

```solidity
constructor(
    address campaignCreator,
    string memory campaignName,
    uint40 campaignStartTime,
    bool cancelable,
    address comptroller,
    ISablierLockup sablierLockup,
    uint40 expiration,
    address initialAdmin,
    string memory ipfsCID,
    bytes32 merkleRoot,
    string memory shape_,
    IERC20 token,
    bool transferable
)
    SablierMerkleBase(
        campaignCreator,
        campaignName,
        campaignStartTime,
        comptroller,
        expiration,
        initialAdmin,
        ipfsCID,
        merkleRoot,
        token
    );
```

### claimedStreams

Retrieves the stream IDs associated with the airdrops claimed by the provided recipient. In practice, most campaigns
will only have one stream per recipient.

```solidity
function claimedStreams(address recipient) external view override returns (uint256[] memory);
```
