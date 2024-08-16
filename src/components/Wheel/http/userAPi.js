import {$host, $authHost} from "./index.js"
import { jwtDecode } from "jwt-decode";

console.log(process.env.REACT_APP_API_URL);

export const login = async (id, tgData) => {
  try {
    const {data} = await $host.post('http://localhost:5000/api/user/login', {
      id: id,
      telegramInitData: tgData
      
    });

  return jwtDecode(data.token);
  }
  catch(e) {
    console.log(e);
  }
    
}

export const check = async () => {
    const response = await $host.post('api/user/login');
    return response;
}

export const twist = async (id) => {
  try {
    const response = await $host.post('http://localhost:5000/api/update', {
      id: id,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  );
    return response;
  }
  catch(e) {
    console.log(e);
  }
 
}
