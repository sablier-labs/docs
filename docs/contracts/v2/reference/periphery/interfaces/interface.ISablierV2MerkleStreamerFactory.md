# ISablierV2MerkleStreamerFactory

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/release/src/interfaces/ISablierV2MerkleStreamerFactory.sol)

_Deploys new Lockup Linear Merkle streamers via CREATE2._

## Functions

### createMerkleStreamerLL

Creates a new Merkle streamer that uses Lockup Linear.

Emits a {CreateMerkleStreamerLL} event.

```solidity
function createMerkleStreamerLL(
        address initialAdmin,
        ISablierV2LockupLinear lockupLinear,
        IERC20 asset,
        bytes32 merkleRoot,
        uint40 expiration,
        LockupLinear.Durations memory streamDurations,
        bool cancelable,
        bool transferable,
        string memory ipfsCID,
        uint256 aggregateAmount,
        uint256 recipientsCount
    )
        external
        returns (ISablierV2MerkleStreamerLL merkleStreamerLL);
```

**Parameters**

| Name              | Type                     | Description                                                     |
| ----------------- | ------------------------ | --------------------------------------------------------------- |
| `initialAdmin`    | `address`                | The initial admin of the Merkle streamer contract.              |
| `lockupLinear`    | `ISablierV2LockupLinear` | The address of the {SablierV2LockupLinear} contract.            |
| `asset`           | `IERC20`                 | The address of the `ERC-20` asset.                              |
| `merkleRoot`      | `bytes32`                | The Merkle root of the claim data.                              |
| `expiration`      | `uint40`                 | The expiration of the streaming campaign, as a Unix timestamp.  |
| `streamDurations` | `LockupLinear.Durations` | The durations for each stream due to the recipient.             |
| `cancelable`      | `bool`                   | Indicates if each stream will be cancelable.                    |
| `transferable`    | `bool`                   | Indicates if each stream NFT will be transferable.              |
| `ipfsCID`         | `string`                 | Metadata parameter emitted for indexing purposes.               |
| `aggregateAmount` | `uint256`                | Total amount of ERC-20 assets to be streamed to all recipients. |
| `recipientsCount` | `uint256`                | Total number of recipients eligible to claim.                   |

## Events

### CreateMerkleStreamerLL

Emitted when a Sablier V2 Lockup Linear Merkle streamer is created.

```solidity
event CreateMerkleStreamerLL(
    ISablierV2MerkleStreamerLL merkleStreamer,
    address indexed admin,
    ISablierV2LockupLinear indexed lockupLinear,
    IERC20 indexed asset,
    bytes32 merkleRoot,
    uint40 expiration,
    LockupLinear.Durations streamDurations,
    bool cancelable,
    bool transferable,
    string ipfsCID,
    uint256 aggregateAmount,
    uint256 recipientsCount
);
```
