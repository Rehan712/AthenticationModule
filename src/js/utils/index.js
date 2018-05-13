import jwtDecode from 'jwt-decode';

export function isTokenValid() {
	const token = localStorage.getItem('token');
	if (token) {
		const decoded = jwtDecode(token);
		return decoded.exp > Date.now() / 1000;
		console.log('decoded is', decoded);
	} else {
		return true;
	}
}
