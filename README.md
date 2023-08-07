# Next.js Authentication with Keycloak

This is a project built in Next.js for authentication using Keycloak and MongoDb. It also has necessary route guards built on pages.

## Installation

Use the package manager [npm](https://registry.npmjs.org ) to install node modules.

```bash
npm install 
```
Set up [Keycloak](https://github.com/keycloak/keycloak/releases/download/22.0.1/keycloak-22.0.1.zip) server by downloading it from the link. Extract it into your desired directory and run following command in bin folder:

```bash
./kc.bat start-dev --db mysql --db-url-host localhost --db-username your-username --db-password your-pass --hostname-strict=false
```
Keycloak server will be up at [localhost:8080](http://localhost:8080). Create your realm and client inside. Upon creating a client for the application, make sure you put a valid redirect uri in the client configuration in the format as 'http://your-base-url/*' and your web origin uri as 'http://your-base-url'. See the documentation for it.

## Usage
Inside the components/constants lies keycloak configuration. Enter your keycloak server's configuration. Now add mongodb configuration in .env file and start the Next app using:
```bash
npm run dev
```
Also change your base uri in components/constants to your own if you are using other than 'http://localhost:3000/'

Login page will appear and it has two options for signing in. One option is using keycloak and other one using mongodb.

Same goes for Signing Up.


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
