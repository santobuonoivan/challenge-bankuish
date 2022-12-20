const admin = require('../firebase/firebase-config');
class Middleware {
	async decodeToken(req, res, next) {
		try {
			const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : '';
			if (token) {				
				const decodeValue = await admin.auth().verifyIdToken(token);
				if (decodeValue) {
					console.log(decodeValue);
					return next();
				}
			}
			return res.json({ message: 'Unauthorized' });
		} catch (e) {
			return res.json({ message: 'Internal Error,' + e.message });
		}
	}
}
module.exports = new Middleware();