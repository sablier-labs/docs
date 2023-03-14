# SablierV2FlashLoan

[Git Source](https://github.com/sablierhq/v2-core/blob/dd92abb9f3f01149a5be0e13eb517772181c5081/docs/contracts/v2/reference/core/abstracts)

**Inherits:** IERC3156FlashLender,
[SablierV2Config](/docs/contracts/v2/reference/core/abstracts/abstract.SablierV2Config.md)

This contract implements the ERC-3156 standard to enable flash loans.

_See https://eips.ethereum.org/EIPS/eip-3156._

## State Variables

### CALLBACK_SUCCESS

```solidity
bytes32 internal constant CALLBACK_SUCCESS = keccak256("ERC3156FlashBorrower.onFlashLoan");
```

## Functions

### flashFee

The amount of fees to charge for a hypothetical flash loan amount.

\*You might notice a bit of a terminology clash here, since the ERC-3156 standard refers to the "flash fee" as an
amount, whereas the flash fee queried from the comptroller is a percentage. In this code base, the "amount" suffix is
typically appended to variables that represent amounts, but in this context, the name be kept unchanged to comply with
the ERC. Requirements:

- The ERC-20 asset must be flash loanable.\*

```solidity
function flashFee(address asset, uint256 amount) public view override returns (uint256 fee);
```

**Parameters**

| Name     | Type      | Description                         |
| -------- | --------- | ----------------------------------- |
| `asset`  | `address` | The ERC-20 asset to flash loan.     |
| `amount` | `uint256` | The amount of `asset` flash loaned. |

**Returns**

| Name  | Type      | Description                                                                    |
| ----- | --------- | ------------------------------------------------------------------------------ |
| `fee` | `uint256` | The amount of `asset` to charge for the loan on top of the returned principal. |

### maxFlashLoan

The amount of ERC-20 assets available to be flash loaned.

_If the ERC-20 asset is not flash loanable, this function returns zero._

```solidity
function maxFlashLoan(address asset) external view override returns (uint256 amount);
```

**Parameters**

| Name    | Type      | Description                                            |
| ------- | --------- | ------------------------------------------------------ |
| `asset` | `address` | The address of the ERC-20 asset to make the query for. |

**Returns**

| Name     | Type      | Description                                     |
| -------- | --------- | ----------------------------------------------- |
| `amount` | `uint256` | The amount of `asset` that can be flash loaned. |

### flashLoan

Allows smart contracts to access the entire liquidity of the Sablier V2 contract within one transaction as long as the
principal plus a flash fee is returned.

\*Emits a {FlashLoan} event. Requirements:

- All from {flashFee}.
- `amount` must be less than 2^128.
- `fee` must be less than 2^128.
- `amount` must not exceed the liquidity available for `asset`.
- `msg.sender` must allow this contract to spend at least `amount + fee` assets.
- `receiver` implementation of {IERC3156FlashBorrower-onFlashLoan} must return `CALLBACK_SUCCESS`.\*

```solidity
function flashLoan(IERC3156FlashBorrower receiver, address asset, uint256 amount, bytes calldata data)
    external
    override
    returns (bool success);
```

**Parameters**

| Name       | Type                    | Description                                                                |
| ---------- | ----------------------- | -------------------------------------------------------------------------- |
| `receiver` | `IERC3156FlashBorrower` | The receiver of the flash loaned assets, and the receiver of the callback. |
| `asset`    | `address`               | The address of the ERC-20 asset to use for flash borrowing.                |
| `amount`   | `uint256`               | The amount of `asset` to flash loan.                                       |
| `data`     | `bytes`                 | Arbitrary data structure, intended to contain user-defined parameters.     |

**Returns**

| Name      | Type   | Description        |
| --------- | ------ | ------------------ |
| `success` | `bool` | `true` on success. |

## Events

### FlashLoan

Emitted when a flash loan is executed.

```solidity
event FlashLoan(
    address indexed initiator,
    IERC3156FlashBorrower indexed receiver,
    IERC20 indexed asset,
    uint256 amount,
    uint256 feeAmount,
    bytes data
);
```
