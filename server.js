var restify = require('restify');
var auth = require('http-auth');

var basic = auth.basic({
    realm: "AGM" // Project Name
}, function (username, password, callback) { // Custom authentication method.
    callback(username === "username" && password === "password");
});

var server = restify.createServer();
server.use(auth.connect(basic));

server.get('/', function(req, res) {
	res.send('You Are Authorized.')
});

server.listen(8080, function() {
    console.log('%s listening at %s', server.name, server.url);
});