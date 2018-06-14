// export appropriate file depending on environment
module.exports = process.env.NODE_ENV === 'production' ? require('./prod') : require('./dev');
