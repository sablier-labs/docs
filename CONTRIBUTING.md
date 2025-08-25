# Contributing

Feel free to dive in! [Open](../../issues/new) an issue, [start](../../new/choose) a discussion or submit a PR. For any
informal concerns or feedback, please join our [Discord server](https://discord.gg/bSwRCwWRsT).

Contributions to Sablier Docs are welcome by anyone interested in improving readability, or adding new features.

## Prerequisites

- [Node.js](https://nodejs.org) (v20+)
- [Just](https://github.com/casey/just) (command runner)
- [Bun](https://bun.sh) (package manager)
- [Ni](https://github.com/antfu-collective/ni) (package manager resolver)

### Setup

```bash
git clone https://github.com/sablier-labs/docs.git sablier-docs
cd sablier-docs
bun install
```

### Available Commands

```bash
just --list                 # Show all available commands
just start                  # Build the docs site locally on localhost:3000
just full-check             # Run all code checks
```

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `just full-check` to verify code quality
5. Submit a pull request
