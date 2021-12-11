# Rarity Interface

## Development

Build docker image

```sh
docker build -t rarity .
```

Run docker container

```sh
docker run --rm -it -v ${PWD}:/app -p 3000:3000 --name rarity rarity npm start
```