# ProStream
[Git Source](https://github.com/sablierhq/v2-core/blob/71a38f2401905d2762c14a7b36c2334909bdb760/src/types/Structs.sol)

Pro stream struct used in the SablierV2Pro contract.

*The fields are arranged like this to save gas via tight variable packing.*


```solidity
struct ProStream {
    Amounts amounts;
    Segment[] segments;
    address sender;
    uint40 startTime;
    uint40 stopTime;
    bool isCancelable;
    bool isEntity;
    IERC20 token;
}
```

