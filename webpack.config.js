module.exports = {
    resolve: {
        fallback:  { 
            //"stream": require.resolve("stream-browserify"),
            //"crypto": require.resolve("crypto-browserify"),
            //"path": require.resolve("path-browserify"),
            //"util": require.resolve("util/"),
            //"assert": require.resolve("assert/"),
            assert: require.resolve('assert'),
            buffer: require.resolve('buffer'),
            console: require.resolve('console-browserify'),
            constants: require.resolve('constants-browserify'),
            crypto: require.resolve('crypto-browserify'),
            domain: require.resolve('domain-browser'),
            events: require.resolve('events'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            os: require.resolve('os-browserify/browser'),// problem
            path: require.resolve('path-browserify'),
           // path: false,
            punycode: require.resolve('punycode'),
            process: require.resolve('process/browser'),
            querystring: require.resolve('querystring-es3'),
            stream: require.resolve('stream-browserify'),
            string_decoder: require.resolve('string_decoder'),
            sys: require.resolve('util'),
            timers: require.resolve('timers-browserify'),
            tty: require.resolve('tty-browserify'),
            url: require.resolve('url'),
            util: require.resolve('util'),
            vm: require.resolve('vm-browserify'),
            zlib: require.resolve('browserify-zlib'),
                    
        }
    },
   
}


//the real one /home/austin/projects/byte/node_modules/react-scripts/config/webpack.config.js
//line 310