# Batch

[Git Source](https://github.com/sablier-labs/flow/blob/b01cc2daf6493ae792a858d6179facc6250403e2/src/abstracts/Batch.sol)

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
