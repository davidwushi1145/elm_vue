import {ref} from 'vue';
import * as CryptoJS from 'crypto-js';
import axios from 'axios';
// Function to get AES key
export const getRsaPublicKey = async ()=> {
    try {
        const response = await axios.get('http://localhost:1145/api/user/rsa-pks');
        if (response.data.code === 200) {
            return response.data.data;
        } else {
            throw new Error(response.data.message);
        }
    } catch (error) {
        console.error("获取密钥时出错:", error);
        return '114514';
    }
};

// ...
// Reactive reference for the token
const SECRET_KEY = await getRsaPublicKey();
// 加密后转换为 Base64
export const encryptToken = (token: string): string => {
    return CryptoJS.AES.encrypt(token, SECRET_KEY).toString();
}

// 从 Base64 转换回来并解密
export const decryptToken = (encryptedToken: string): string => {
    const bytes = CryptoJS.AES.decrypt(encryptedToken, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
}

export const getToken = (): string | null => {
    const encryptedToken = localStorage.getItem('userToken');
    if (!encryptedToken) {
        // 如果没有加密的 token，直接返回 null
        return null;
    }
    try {
        // 尝试解密 token
        return decryptToken(encryptedToken);
    } catch (error) {
        console.error("解密 token 时出错:", error);
        return null;
    }
};

const tokenRef = ref(getToken());
export const extractToken = (response: any): string | null => {
    return response.data.data?.JWT || null;
};

// Save JWT to localStorage and update the reactive reference
export const saveToken = (token: string) => {
    const encryptedToken = encryptToken(token);
    localStorage.setItem('userToken', encryptedToken);
    tokenRef.value = token; // 更新响应式变量
};

// Clear JWT from localStorage and update the reactive reference
export const clearToken = () => {
    localStorage.removeItem('userToken');
    tokenRef.value = null; // Update the reactive variable
};

// A reactive wrapper around the localStorage token getter
export const useToken = () => {
    return tokenRef; // Return the reactive variable
};
