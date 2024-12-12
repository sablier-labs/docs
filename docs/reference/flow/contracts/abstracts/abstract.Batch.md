# Batch

[Git Source](https://github.com/sablier-labs/flow/blob/ba8c67a35d9cfd4fe646c2ab7db2c40e93d7fd6f/src/abstracts/Batch.sol)

**Inherits:** [IBatch](/docs/reference/flow/contracts/interfaces/interface.IBatch.md)

See the documentation in [IBatch](/docs/reference/flow/contracts/interfaces/interface.IBatch.md).

_Forked from: https://github.com/boringcrypto/BoringSolidity/blob/master/contracts/BoringBatchable.sol_

## Functions

### batch

Allows batched call to self, `this` contract.

```solidity
function batch(bytes[] calldata calls) external override;
```

**Parameters**

| Name    | Type      | Description                       |
| ------- | --------- | --------------------------------- |
| `calls` | `bytes[]` | An array of inputs for each call. |
