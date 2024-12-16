---
id: "coding-practices"
sidebar_position: 11
title: "Coding Practices"
---

# Coding Practices

We adhere to the following best practices to the extent possible.

## Solidity Smart Contracts

### Development and Deployment

- All contracts are built, tested, and deployed with [Foundry](https://github.com/foundry-rs/foundry).
- We follow the best practices mentioned in the [Foundry Book](https://book.getfoundry.sh/tutorials/best-practices).

### Naming Conventions

The following naming conventions are used throughout the codebase:

- **Contracts, Interfaces, and Libraries**: `PascalCase`
- **Public functions and variables**: `camelCase`
- **Constants**: `SCREAMING_SNAKE_CASE`
- **Internal and Private Functions and Variables**: `_camelCase`
- **Function Parameters**: Have a trailing `_` to avoid shadowing state variables
- **Errors**: Follow the convention `<ContractName>_<ErrorName>`
- **Test Functions**: Follow the convention `test(Fork)?(Fuzz)?_(RevertWhen_){1})?\w{1,}`
  - A comprehensive list of valid and invalid examples can be found
    [here](https://github.com/ScopeLift/scopelint/blob/1857e3940bfe92ac5a136827374f4b27ff083971/src/check/validators/test_names.rs#L106-L143)
- **Directories**: `kebab-case`
- **Test and Script Files**: `PascalCase`
  - If test contracts represent function names, then they are in `camelCase`

### Security Patterns

- We use the [CEI](https://fravoll.github.io/solidity-patterns/checks_effects_interactions.html) and
  [FREI-PI](https://www.nascent.xyz/idea/youre-writing-require-statements-wrong) patterns for smart contract security.

### Testing

- Concrete tests are written using [Bulloak](https://bulloak.dev), adhering to the
  [Branching Tree Technique](https://x.com/PaulRBerg/status/1682346315806539776).
- Tests are generated using the `bulloak scaffold` command.

### Styling and Documentation

- All contracts are linted with [Solhint](https://github.com/protofire/solhint).
- Every contract, interface, library, function, and variable is documented with comprehensive
  [NatSpec comments](https://docs.soliditylang.org/en/latest/natspec-format.html).
- All codes are annotated with comments that explain what that bit of code does.
  - Some annotations might come across as verbose, but explicitness is important in financial software like smart
    contracts.
