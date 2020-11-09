# Authentication in Polaris

Polaris includes an authentication example via [Auth0](https://auth0.com/). To connect to your Auth0 app you need to:

- Create your own native application on Auth0
- Log in with your expo account via expo cli
- Add the AppSession's auth URL to `Allowed Callback URLs` on Auth0. Each Expo user has it's own URL for different projects, the basic structure of this URL is `https://auth.expo.io/@your-username/your-expo-app-slug`. You can read more about the format [here](https://docs.expo.io/versions/latest/sdk/auth-session/#it-makes-redirect-url-allowlists-easier-to). For web you need to add your environment url.
- Replace environment variables in .env file with your Auth0 client ID and domain.
