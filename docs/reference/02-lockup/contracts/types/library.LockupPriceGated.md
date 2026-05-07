# LockupPriceGated

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/8b6823c019ff7556ac9ad24cbb5ac62821854d2f/src/types/LockupPriceGated.sol)

Namespace for the structs used only in LPG streams.

## Structs

### UnlockParams

Struct encapsulating the unlock parameters for LPG streams.

```solidity
struct UnlockParams {
    AggregatorV3Interface oracle;
    uint128 targetPrice;
}
```

**Properties**

| Name          | Type                    | Description                                                                                                |
| ------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------- |
| `oracle`      | `AggregatorV3Interface` | The price feed oracle address used to retrieve the latest price.                                           |
| `targetPrice` | `uint128`               | The price that must be reached to unlock the tokens, denominated in Chainlink's 8-decimal, where 1e8 = $1. |
