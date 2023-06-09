# LOTR Database - Liblab

A place for all things LOTR: movies, characters, and quotes.
A work in progress.

Link: 

## How to run

You'll need to create your an API key from: https://the-one-api.dev/

Add an `.env` file to the root of the project and then run.

```
NEXT_PUBLIC_API_KEY=[your_key_here]
NEXT_PUBLIC_API_URL=https://the-one-api.dev/v2
```

To run locally: 
```bash
yarn
yarn dev
```

## Run Jest Tests

```bash
yarn test
```

## Axe core

Accessibility considerations have been checked using axe-core.
You can check accessibility tests are passed by going to the console in dev tools. Set up can be found in `utils/reportAccessibility`
