var GetPocket = require('node-getpocket');
 
var config = {
    consumer_key: 'YOUR-CONSUMER-KEY',
    redirect_uri: 'http://localhost:8080/redirect'
};
 
var pocket = new GetPocket(config);
var params = {
    redirect_uri: config.redirect_uri
};
pocket.getRequestToken(params, function(err, resp, body) {
    if (err) {
        console.log('Oops; getTokenRequest failed: ' + err);
    }
    else {
        // your request token is in body.code 
        var json = JSON.parse(body);
        var request_token = json.code;
    }
});