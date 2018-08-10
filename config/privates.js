// export appropriate file depending on environment
const privates = process.env.NODE_ENV === 'production' ? require('./prod') : require('./dev');

module.exports = { privates };