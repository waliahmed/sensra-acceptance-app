// Self-contained Node.js app for the Sensra acceptance run: no dependencies, no build.
module.exports = (req, res) => {
  res.statusCode = 500;
  res.setHeader('content-type', 'text/plain');
  res.end('SENSRA-ACCEPT release=v3-bad proto=' + (req.headers['x-forwarded-proto'] || 'none') + '\n');
};
