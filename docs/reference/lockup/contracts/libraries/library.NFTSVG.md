# NFTSVG

[Git Source](https://github.com/sablier-labs/lockup/blob/463278dbb461b1733d6424cf0aeee3b8d6bc036a/src/libraries/NFTSVG.sol)

## State Variables

### CARD_MARGIN

```solidity
uint256 internal constant CARD_MARGIN = 16;
```

## Functions

### generateSVG

```solidity
function generateSVG(SVGParams memory params) internal pure returns (string memory);
```

### generateDefs

```solidity
function generateDefs(
    string memory accentColor,
    string memory status,
    string memory cards
)
    internal
    pure
    returns (string memory);
```

### generateFloatingText

```solidity
function generateFloatingText(
    string memory lockupAddress,
    string memory tokenAddress,
    string memory tokenSymbol
)
    internal
    pure
    returns (string memory);
```

### generateHrefs

```solidity
function generateHrefs(
    uint256 progressXPosition,
    uint256 statusXPosition,
    uint256 amountXPosition,
    uint256 durationXPosition
)
    internal
    pure
    returns (string memory);
```

## Structs

### SVGParams

```solidity
struct SVGParams {
    string accentColor;
    string amount;
    string tokenAddress;
    string tokenSymbol;
    string duration;
    string lockupAddress;
    string progress;
    uint256 progressNumerical;
    string status;
}
```

### SVGVars

```solidity
struct SVGVars {
    string amountCard;
    uint256 amountWidth;
    uint256 amountXPosition;
    string cards;
    uint256 cardsWidth;
    string durationCard;
    uint256 durationWidth;
    uint256 durationXPosition;
    string progressCard;
    uint256 progressWidth;
    uint256 progressXPosition;
    string statusCard;
    uint256 statusWidth;
    uint256 statusXPosition;
}
```
