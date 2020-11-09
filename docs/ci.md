# CI

Polaris has a simple continuous integration pipeline built in with [Github Actions](https://docs.github.com/en/actions) that lints, run tests and builds js bundles for each target. Note that GitHub has a [free plan](https://docs.github.com/en/github/setting-up-and-managing-billing-and-payments-on-github/about-billing-for-github-actions) included for every account type and you shouldn't be billed for additional usage until a spending limit has been set for the account.

To adjust the pipeline see [integration.yml file](.github/workflows/integration.yml).
