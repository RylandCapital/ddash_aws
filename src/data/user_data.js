import jwt_decode from "jwt-decode";


export default function userDb() {

	if (localStorage.jwtToken) {
		// Set auth token header auth
		const token = localStorage.jwtToken;
		// Decode token and get user info and exp
		const decoded = jwt_decode(token);
		console.log(decoded)
	    // Check for expired token
        return decoded.id
        
} else {

	return ""
}

      }
      
