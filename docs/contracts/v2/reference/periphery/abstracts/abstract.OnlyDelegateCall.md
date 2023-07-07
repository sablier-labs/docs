# OnlyDelegateCall

[Git Source](https://github.com/sablier-labs/v2-periphery/blob/0c389e73d0b3467ccfab52e98140aad7c099aacf/docs/contracts/v2/reference/periphery/abstracts)

This contract implements logic to allow only delegate calls.

## State Variables

### \_original

_The address of the original contract that was deployed._

```solidity
address private immutable _original;
```

## Functions

### constructor

_Sets the original contract address._

```solidity
constructor();
```

### onlyDelegateCall

Allows only delegate calls.

```solidity
modifier onlyDelegateCall();
```

### \_allowOnlyDelegateCall

This function checks whether the current call is a delegate call, and reverts if it is not.

- A private function is used instead of inlining this logic in a modifier because Solidity copies modifiers into every
  function that uses them. The `_original` address would get copied in every place the modifier is used, which would
  increase the contract size. By using a function instead, we can avoid this duplication of code and reduce the overall
  size of the contract.

```solidity
function _allowOnlyDelegateCall() private view;
```
