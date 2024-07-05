---
sidebar_position: 3
---

# SablierV2NFTDescriptor

[Git Source](https://github.com/sablier-labs/v2-core/blob/36b49d3bf2a396d19083d28247e8e03d7a3a2ee1/src/SablierV2NFTDescriptor.sol)

**Inherits:**
[ISablierV2NFTDescriptor](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2NFTDescriptor.md)

See the documentation in
[ISablierV2NFTDescriptor](/docs/contracts/v2/reference/core/interfaces/interface.ISablierV2NFTDescriptor.md).

## Functions

### tokenURI

Produces the URI describing a particular stream NFT.

_This is a data URI with the JSON contents directly inlined._

```solidity
function tokenURI(IERC721Metadata sablier, uint256 streamId) external view override returns (string memory uri);
```

**Parameters**

| Name       | Type              | Description                                                    |
| ---------- | ----------------- | -------------------------------------------------------------- |
| `sablier`  | `IERC721Metadata` | The address of the Sablier contract the stream was created in. |
| `streamId` | `uint256`         | The ID of the stream for which to produce a description.       |

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

- Asset symbol
- Sender address
- Status

_These attributes are useful for filtering and sorting the NFTs._

```solidity
function generateAttributes(
    string memory assetSymbol,
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
    string memory sablierModel,
    string memory assetSymbol,
    string memory sablierStringified,
    string memory assetAddress,
    string memory streamId,
    bool isTransferable
)
    internal
    pure
    returns (string memory);
```

### generateName

Generates a string with the NFT's JSON metadata name, which is unique for each stream.

_The `streamId` is equivalent to the ERC-721 `tokenId`._

```solidity
function generateName(string memory sablierModel, string memory streamId) internal pure returns (string memory);
```

### isAllowedCharacter

Checks whether the provided string contains only alphanumeric characters, spaces, and dashes.

_Note that this returns true for empty strings._

```solidity
function isAllowedCharacter(string memory str) internal pure returns (bool);
```

### mapSymbol

Maps ERC-721 symbols to human-readable model names.

_Reverts if the symbol is unknown._

```solidity
function mapSymbol(IERC721Metadata sablier) internal view returns (string memory);
```

### safeAssetDecimals

Retrieves the asset's decimals safely, defaulting to "0" if an error occurs.

_Performs a low-level call to handle assets in which the decimals are not implemented._

```solidity
function safeAssetDecimals(address asset) internal view returns (uint8);
```

### safeAssetSymbol

Retrieves the asset's symbol safely, defaulting to a hard-coded value if an error occurs.

_Performs a low-level call to handle assets in which the symbol is not implemented or it is a bytes32 instead of a
string._

```solidity
function safeAssetSymbol(address asset) internal view returns (string memory);
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
    address asset;
    string assetSymbol;
    uint128 depositedAmount;
    bool isTransferable;
    string json;
    bytes returnData;
    ISablierV2Lockup sablier;
    string sablierModel;
    string sablierStringified;
    string status;
    string svg;
    uint256 streamedPercentage;
    bool success;
}
```
