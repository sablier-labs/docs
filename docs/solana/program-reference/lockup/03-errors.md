---
id: "errors"
sidebar_position: 3
title: "Errors"
---

## Errors

### StreamDepleted

**Message log:** Can't perform the action on a depleted stream!

| Name           | Code Num | Code Hex |
| -------------- | :------: | :------: |
| StreamDepleted |   6000   |  0x1770  |

### StreamCanceled

**Message log:** Can't renounce an already-renounced Stream!

| Name           | Code Num | Code Hex |
| -------------- | :------: | :------: |
| StreamCanceled |   6001   |  0x1771  |

### StreamIsNotCancelable

**Message log:** Can't cancel a non-cancelable Stream!

| Name                  | Code Num | Code Hex |
| --------------------- | :------: | :------: |
| StreamIsNotCancelable |   6002   |  0x1772  |

### StreamSettled

**Message log:** Can't cancel a settled Stream!

| Name          | Code Num | Code Hex |
| ------------- | :------: | :------: |
| StreamSettled |   6003   |  0x1773  |

### CantCollectZeroFees

**Message log:** Can't collect zero fees!

| Name                | Code Num | Code Hex |
| ------------------- | :------: | :------: |
| CantCollectZeroFees |   6004   |  0x1774  |

### CliffTimeNotLessThanEndTime

**Message log:** Invalid cliff time of the Stream!

| Name                        | Code Num | Code Hex |
| --------------------------- | :------: | :------: |
| CliffTimeNotLessThanEndTime |   6005   |  0x1775  |

### CliffTimeZeroUnlockAmountNotZero

**Message log:** Cliff time zero but unlock amount not zero!

| Name                             | Code Num | Code Hex |
| -------------------------------- | :------: | :------: |
| CliffTimeZeroUnlockAmountNotZero |   6006   |  0x1776  |

### DepositAmountZero

**Message log:** Invalid deposit amount!

| Name              | Code Num | Code Hex |
| ----------------- | :------: | :------: |
| DepositAmountZero |   6007   |  0x1777  |

### StartTimeNotLessThanCliffTime

**Message log:** Start time must be less than cliff time!

| Name                          | Code Num | Code Hex |
| ----------------------------- | :------: | :------: |
| StartTimeNotLessThanCliffTime |   6008   |  0x1778  |

### StartTimeNotLessThanEndTime

**Message log:** Start time must be less than end time!

| Name                        | Code Num | Code Hex |
| --------------------------- | :------: | :------: |
| StartTimeNotLessThanEndTime |   6009   |  0x1779  |

### StartTimeZero

**Message log:** Start time can't be zero!

| Name          | Code Num | Code Hex |
| ------------- | :------: | :------: |
| StartTimeZero |   6010   |  0x177A  |

### UnlockAmountsSumTooHigh

**Message log:** Unlock amounts sum is greater than deposit amount!

| Name                    | Code Num | Code Hex |
| ----------------------- | :------: | :------: |
| UnlockAmountsSumTooHigh |   6011   |  0x177B  |

### StreamAlreadyNonCancelable

**Message log:** Can't renounce a non-cancelable Stream!

| Name                       | Code Num | Code Hex |
| -------------------------- | :------: | :------: |
| StreamAlreadyNonCancelable |   6012   |  0x177C  |

### Overdraw

**Message log:** Attempting to withdraw more than available in the stream!

| Name     | Code Num | Code Hex |
| -------- | :------: | :------: |
| Overdraw |   6013   |  0x177D  |

### WithdrawAmountZero

**Message log:** Can't withdraw a zero amount!

| Name               | Code Num | Code Hex |
| ------------------ | :------: | :------: |
| WithdrawAmountZero |   6014   |  0x177E  |
