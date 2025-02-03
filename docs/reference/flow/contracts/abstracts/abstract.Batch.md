# Batch

[Git Source](https://github.com/sablier-labs/flow/blob/a0fa33d2843af0817e34970cdc05822ead31daaa/src/abstracts/Batch.sol)

**Inherits:** [IBatch](/docs/reference/flow/contracts/interfaces/interface.IBatch.md)

See the documentation in [IBatch](/docs/reference/flow/contracts/interfaces/interface.IBatch.md).

## Functions

### batch

Allows batched calls to self, i.e., `this` contract.

_Since `msg.value` can be reused across calls, be VERY CAREFUL when using it. Refer to
https://paradigm.xyz/2021/08/two-rights-might-make-a-wrong for more information._

```solidity
function batch(bytes[] calldata calls) external payable override returns (bytes[] memory results);
```

**Parameters**

| Name    | Type      | Description                       |
| ------- | --------- | --------------------------------- |
| `calls` | `bytes[]` | An array of inputs for each call. |

**Returns**

| Name      | Type      | Description                                                                      |
| --------- | --------- | -------------------------------------------------------------------------------- |
| `results` | `bytes[]` | An array of results from each call. Empty when the calls do not return anything. |
