# ISablierLockupRecipient

[Git Source](https://github.com/sablier-labs/evm-monorepo/blob/8b6823c019ff7556ac9ad24cbb5ac62821854d2f/src/interfaces/ISablierLockupRecipient.sol)

**Inherits:** IERC165

**Title:** ISablierLockupRecipient

Interface for recipient contracts capable of reacting to cancellations and withdrawals. For this to be able to hook into
Sablier, it must fully implement this interface and it must have been allowlisted in the Lockup contract.

See [IERC165-supportsInterface](https://eips.ethereum.org/EIPS/eip-165
