module.exports = (req, res) => {
	console.log('request received');
	//res.sendFile(path.join(__dirname, '../../dist/index.html'));
	res.json({ one: 'hello world' });
};
