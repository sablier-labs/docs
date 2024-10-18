# NFTSVG

[Git Source](https://github.com/sablier-labs/v2-core/blob/73356945b53e8dd4112f34f3e2c63c278c4a5239/src/libraries/NFTSVG.sol)

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
    string memory sablierAddress,
    string memory sablierModel,
    string memory assetAddress,
    string memory assetSymbol
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
    string assetAddress;
    string assetSymbol;
    string duration;
    string progress;
    uint256 progressNumerical;
    string sablierAddress;
    string sablierModel;
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
