# LOTR Database

A place for all things LOTR: movies, characters, and quotes.
A work in progress.

Live demo: https://lotr-ll.vercel.app/

## How to run

You'll need to create an API key from: https://the-one-api.dev/

Add a `.env` file to the root of the project and then run.

```
NEXT_PUBLIC_API_KEY=[your_key_here]
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
