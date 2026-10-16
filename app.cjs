// Self-contained Node.js app for the Sensra acceptance run: no dependencies, no build.
module.exports = (req, res) => {
  res.statusCode = 200;
  res.setHeader('content-type', 'text/plain');
  res.end('SENSRA-ACCEPT release=v1 proto=' + (req.headers['x-forwarded-proto'] || 'none') + '\n');
};
