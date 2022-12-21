const axios = require('axios').default;
const env = require('dotenv').config();

module.exports = async (user, password) => {
    const API_KEY = process.env.FIREBASE_API_KEY || '';
    const data = {
        "email": user,
        "password": password,
        "returnSecureToken": true
    };

    const config = {
      method: 'post',
      url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : JSON.stringify(data)
    };
    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        return error;        
    }
    
}

