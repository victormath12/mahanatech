// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDODpHx7nwavqht-QmjGL5OplfMI5rJQMU',
    authDomain: 'mahanatech-app.firebaseapp.com',
    databaseURL: 'https://mahanatech-app.firebaseio.com',
    projectId: 'mahanatech-app',
    storageBucket: 'mahanatech-app.appspot.com',
    messagingSenderId: '421050240247'
  }
};
