import convict from 'convict';

const config = convict({
  port: {
    doc: 'The port for the server',
    env: 'PORT',
    format: 'port',
    default: 3000
  }
})

export default config;