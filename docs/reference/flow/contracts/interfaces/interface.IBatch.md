# IBatch

[Git Source](https://github.com/sablier-labs/flow/blob/ba8c67a35d9cfd4fe646c2ab7db2c40e93d7fd6f/src/interfaces/IBatch.sol)

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
