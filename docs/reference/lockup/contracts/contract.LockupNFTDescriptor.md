---
sidebar_position: 3
---

# LockupNFTDescriptor

[Git Source](https://github.com/sablier-labs/lockup/blob/463278dbb461b1733d6424cf0aeee3b8d6bc036a/src/LockupNFTDescriptor.sol)

**Inherits:** [ILockupNFTDescriptor](/docs/reference/lockup/contracts/interfaces/interface.ILockupNFTDescriptor.md)

See the documentation in
[ILockupNFTDescriptor](/docs/reference/lockup/contracts/interfaces/interface.ILockupNFTDescriptor.md).

## Functions

### tokenURI

Produces the URI describing a particular stream NFT.

_This is a data URI with the JSON contents directly inlined._

```solidity
function tokenURI(IERC721Metadata lockup, uint256 streamId) external view override returns (string memory uri);
```

**Parameters**

| Name       | Type              | Description                                              |
| ---------- | ----------------- | -------------------------------------------------------- |
| `lockup`   | `IERC721Metadata` |                                                          |
| `streamId` | `uint256`         | The ID of the stream for which to produce a description. |

**Returns**

| Name  | Type     | Description                               |
| ----- | -------- | ----------------------------------------- |
| `uri` | `string` | The URI of the ERC721-compliant metadata. |

### abbreviateAmount

Creates an abbreviated representation of the provided amount, rounded down and prefixed with ">= ".

The abbreviation uses these suffixes:

- "K" for thousands
- "M" for millions
- "B" for billions
- "T" for trillions For example, if the input is 1,234,567, the output is ">= 1.23M".

```solidity
function abbreviateAmount(uint256 amount, uint256 decimals) internal pure returns (string memory);
```

**Parameters**

| Name       | Type      | Description                                                    |
| ---------- | --------- | -------------------------------------------------------------- |
| `amount`   | `uint256` | The amount to abbreviate, denoted in units of `decimals`.      |
| `decimals` | `uint256` | The number of decimals to assume when abbreviating the amount. |

**Returns**

| Name     | Type     | Description                                                                      |
| -------- | -------- | -------------------------------------------------------------------------------- |
| `<none>` | `string` | abbreviation The abbreviated representation of the provided amount, as a string. |

### calculateDurationInDays

Calculates the stream's duration in days, rounding down.

```solidity
function calculateDurationInDays(uint256 startTime, uint256 endTime) internal pure returns (string memory);
```

### calculateStreamedPercentage

Calculates how much of the deposited amount has been streamed so far, as a percentage with 4 implied decimals.

```solidity
function calculateStreamedPercentage(uint128 streamedAmount, uint128 depositedAmount) internal pure returns (uint256);
```

### generateAccentColor

Generates a pseudo-random HSL color by hashing together the `chainid`, the `sablier` address, and the `streamId`. This
will be used as the accent color for the SVG.

```solidity
function generateAccentColor(address sablier, uint256 streamId) internal view returns (string memory);
```

### generateAttributes

Generates an array of JSON objects that represent the NFT's attributes:

- Token symbol
- Sender address
- Status

_These attributes are useful for filtering and sorting the NFTs._

```solidity
function generateAttributes(
    string memory tokenSymbol,
    string memory sender,
    string memory status
)
    internal
    pure
    returns (string memory);
```

### generateDescription

Generates a string with the NFT's JSON metadata description, which provides a high-level overview.

```solidity
function generateDescription(
    string memory tokenSymbol,
    string memory lockupStringified,
    string memory tokenAddress,
    string memory streamId,
    bool isTransferable
)
    internal
    pure
    returns (string memory);
```

### isAllowedCharacter

Checks whether the provided string contains only alphanumeric characters, spaces, and dashes.

_Note that this returns true for empty strings._

```solidity
function isAllowedCharacter(string memory str) internal pure returns (bool);
```

### safeTokenDecimals

Retrieves the token's decimals safely, defaulting to "0" if an error occurs.

_Performs a low-level call to handle tokens in which the decimals are not implemented._

```solidity
function safeTokenDecimals(address token) internal view returns (uint8);
```

### safeTokenSymbol

Retrieves the token's symbol safely, defaulting to a hard-coded value if an error occurs.

_Performs a low-level call to handle tokens in which the symbol is not implemented or it is a bytes32 instead of a
string._

```solidity
function safeTokenSymbol(address token) internal view returns (string memory);
```

### stringifyFractionalAmount

Converts the provided fractional amount to a string prefixed by a dot.

```solidity
function stringifyFractionalAmount(uint256 fractionalAmount) internal pure returns (string memory);
```

**Parameters**

| Name               | Type      | Description                                |
| ------------------ | --------- | ------------------------------------------ |
| `fractionalAmount` | `uint256` | A numerical value with 2 implied decimals. |

### stringifyPercentage

Converts the provided percentage to a string.

```solidity
function stringifyPercentage(uint256 percentage) internal pure returns (string memory);
```

**Parameters**

| Name         | Type      | Description                                |
| ------------ | --------- | ------------------------------------------ |
| `percentage` | `uint256` | A numerical value with 4 implied decimals. |

### stringifyStatus

Retrieves the stream's status as a string.

```solidity
function stringifyStatus(Lockup.Status status) internal pure returns (string memory);
```

## Structs

### TokenURIVars

_Needed to avoid Stack Too Deep._

```solidity
struct TokenURIVars {
    address token;
    string tokenSymbol;
    uint128 depositedAmount;
    string json;
    ISablierLockup lockup;
    string lockupStringified;
    string status;
    string svg;
    uint256 streamedPercentage;
}
```
