## Usage

0. Install the [Squid CLI](https://docs.subsquid.io/squid-cli/):

```sh
npm i -g @subsquid/cli
```

1. Run `sqd generate squidgen.yaml` with the appropriate flags. [schema](https://github.com/subsquid/squid-gen/blob/master/src/schema.json)\
To avoid rate limiting set `ETHERSCAN_API_KEY` env variable.

2. Build and run the squid

```bash
sqd build
sqd up
sqd migration:generate
sqd process
```

The indexing will start.

For more details on how to build and deploy a squid, see the [docs](https://docs.subsquid.io).
