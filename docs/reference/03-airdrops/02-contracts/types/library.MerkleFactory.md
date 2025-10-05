# MerkleFactory

[Git Source](https://github.com/sablier-labs/airdrops/blob/f9a358c0a5bccfec77601d4490ef9117e0488068/src/types/DataTypes.sol)

## Structs

### CustomFee

Struct encapsulating the custom fee details for a given campaign creator.

```solidity
struct CustomFee {
    bool enabled;
    uint256 fee;
}
```

**Properties**

| Name      | Type      | Description                                                                                                       |
| --------- | --------- | ----------------------------------------------------------------------------------------------------------------- |
| `enabled` | `bool`    | Whether the fee is enabled. If false, the default fee will be applied for campaigns created by the given creator. |
| `fee`     | `uint256` | The fee amount.                                                                                                   |
