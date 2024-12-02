# IBatch

[Git Source](https://github.com/sablier-labs/flow/blob/1090a29c0270daf46c6023cab5d4df76504abe34/src/interfaces/IBatch.sol)

This contract implements logic to batch call any function.

## Functions

### batch

Allows batched call to self, `this` contract.

```solidity
function batch(bytes[] calldata calls) external;
```

**Parameters**

| Name    | Type      | Description                       |
| ------- | --------- | --------------------------------- |
| `calls` | `bytes[]` | An array of inputs for each call. |
