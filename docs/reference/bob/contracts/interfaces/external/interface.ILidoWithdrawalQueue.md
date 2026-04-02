# ILidoWithdrawalQueue

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/d6f6f1d4bb0a5bf508c1d0d7c1b59cd8879d56f9/src/interfaces/external/ILidoWithdrawalQueue.sol)

**Title:** ILidoWithdrawalQueue

Minimal interface for Lido's WithdrawalQueueERC721 contract.

Used as a fallback unstaking path when the Curve pool is unavailable.

## Functions

### MAX_STETH_WITHDRAWAL_AMOUNT

Maximum amount of stETH that can be withdrawn in a single request.

```solidity
function MAX_STETH_WITHDRAWAL_AMOUNT() external view returns (uint256);
```

### MIN_STETH_WITHDRAWAL_AMOUNT

Minimum amount of stETH that can be withdrawn in a single request.

```solidity
function MIN_STETH_WITHDRAWAL_AMOUNT() external view returns (uint256);
```

### findCheckpointHints

Finds the list of hints for the given `_requestIds` searching among the checkpoints with indices in the range
`[_firstIndex, _lastIndex]`.

- Array of request IDs should be sorted.
- `_firstIndex` should be greater than 0, because checkpoint list is 1-based array.
- `_lastIndex` should be less than or equal to `getLastCheckpointIndex()`.

```solidity
function findCheckpointHints(
    uint256[] calldata _requestIds,
    uint256 _firstIndex,
    uint256 _lastIndex
)
    external
    view
    returns (uint256[] memory hintIds);
```

**Parameters**

| Name          | Type        | Description                                                                                     |
| ------------- | ----------- | ----------------------------------------------------------------------------------------------- |
| `_requestIds` | `uint256[]` | IDs of the requests sorted in the ascending order to get hints for.                             |
| `_firstIndex` | `uint256`   | Left boundary of the search range. Should be greater than 0.                                    |
| `_lastIndex`  | `uint256`   | Right boundary of the search range. Should be less than or equal to `getLastCheckpointIndex()`. |

**Returns**

| Name      | Type        | Description                                                      |
| --------- | ----------- | ---------------------------------------------------------------- |
| `hintIds` | `uint256[]` | Array of hints used to find required checkpoint for the request. |

### getLastCheckpointIndex

Length of the checkpoint array. Last possible value for the hint.

```solidity
function getLastCheckpointIndex() external view returns (uint256);
```

### claimWithdrawals

Claim a batch of withdrawal requests if they are finalized sending locked ETH to the owner.

Reverts if any of the following conditions are met:

- `requestIds` and `hints` arrays length differs.
- Any `requestId` or `hint` in arguments are not valid.
- Any request is not finalized or already claimed.
- `msg.sender` is not an owner of the requests.

```solidity
function claimWithdrawals(uint256[] calldata _requestIds, uint256[] calldata _hints) external;
```

**Parameters**

| Name          | Type        | Description                                                               |
| ------------- | ----------- | ------------------------------------------------------------------------- |
| `_requestIds` | `uint256[]` | Array of request IDs to claim.                                            |
| `_hints`      | `uint256[]` | Checkpoint hint for each ID. Can be obtained with `findCheckpointHints()` |

### requestWithdrawals

Request the batch of stETH for withdrawal. Approvals for the passed amounts should be done before.

```solidity
function requestWithdrawals(
    uint256[] calldata _amounts,
    address _owner
)
    external
    returns (uint256[] memory requestIds);
```

**Parameters**

| Name       | Type        | Description                                                                                                              |
| ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------ |
| `_amounts` | `uint256[]` | Array of stETH amount values. The standalone withdrawal request will be created for each item in the passed list.        |
| `_owner`   | `address`   | Address that will be able to manage the created requests. If `address(0)` is passed, `msg.sender` will be used as owner. |

**Returns**

| Name         | Type        | Description                                  |
| ------------ | ----------- | -------------------------------------------- |
| `requestIds` | `uint256[]` | Array of the created withdrawal request IDs. |
