//@flow
require( 'dotenv' ).config();

const extensionConfig = require( '../extension.json' );
const cli = require( 'contentful-extension-cli' );
const fs = require( 'fs' );

const client = cli.createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
  spaceId: process.env.SPACE_ID,
  host: 'https://api.contentful.com', // optional, default value shown
});

const handleFound = ( extension ) => {
  // We need the version in case this was already saved.
  const version = extension.sys.version;
  save({
    version,
    ...extensionConfig,
  });
};

const handleNotFound = () => {
  save( extensionConfig );
};

const save = ( config ) => {
  if ( config.srcdoc ) {
    fs.readFile( config.srcdoc, 'utf8', ( err, data ) => {
      if ( err ) {
        return console.log( err );
      }
      client.save( Object.assign({}, config, { srcdoc: data }));
    });
  }
};

client.get( extensionConfig.id ).then( handleFound, handleNotFound );
