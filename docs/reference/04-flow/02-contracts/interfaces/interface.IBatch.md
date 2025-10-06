# IBatch

[Git Source](https://github.com/sablier-labs/flow/blob/a0fa33d2843af0817e34970cdc05822ead31daaa/src/interfaces/IBatch.sol)

This contract implements logic to batch call any function.

## Functions

### batch

Allows batched calls to self, i.e., `this` contract.

_Since `msg.value` can be reused across calls, be VERY CAREFUL when using it. Refer to
https://paradigm.xyz/2021/08/two-rights-might-make-a-wrong for more information._

```solidity
function batch(bytes[] calldata calls) external payable returns (bytes[] memory results);
```

**Parameters**

| Name    | Type      | Description                       |
| ------- | --------- | --------------------------------- |
| `calls` | `bytes[]` | An array of inputs for each call. |

**Returns**

| Name      | Type      | Description                                                                      |
| --------- | --------- | -------------------------------------------------------------------------------- |
| `results` | `bytes[]` | An array of results from each call. Empty when the calls do not return anything. |
