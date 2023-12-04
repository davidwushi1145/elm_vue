import { ref } from 'vue';

// Reactive reference for the token


export const getToken = (): string | null => {
    return localStorage.getItem('userToken');
}
const tokenRef = ref(getToken());
export const extractToken = (response: any): string | null => {
    return response.data.data?.JWT || null;
};

// Save JWT to localStorage and update the reactive reference
export const saveToken = (token: string) => {
    localStorage.setItem('userToken', token);
    tokenRef.value = token; // Update the reactive variable
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
