# Batch

[Git Source](https://github.com/sablier-labs/flow/blob/9bfe5d6fbfbd7dc60e142735dd3f492df756e0b9/src/abstracts/Batch.sol)

This contract implements logic to batch call any function.

_Forked from: https://github.com/boringcrypto/BoringSolidity/blob/master/contracts/BoringBatchable.sol_

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
