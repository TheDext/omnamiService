const TOKEN_KEY = "jwt-token";
const REFRESH_KEY = "jwt-refresh-token";
const EXPIRES_KEY = "jwt-expires";
const USERID_KEY = "user-local-id";

const setTokens = ({ refreshToken, idToken, localId, expiresIn = 3600 }) => {
    const expiresDate = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem(USERID_KEY, localId);
    localStorage.setItem(TOKEN_KEY, idToken);
    localStorage.setItem(REFRESH_KEY, refreshToken);
    localStorage.setItem(EXPIRES_KEY, expiresDate);
};
const getAccessToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};
const getRefreshToken = () => {
    return localStorage.getItem(REFRESH_KEY);
};
const removeAuthData = () => {
    localStorage.removeItem(USERID_KEY);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(EXPIRES_KEY);
};
const getTokenExpiresDate = () => {
    return localStorage.getItem(EXPIRES_KEY);
};
const getUserId = () => {
    return localStorage.getItem(USERID_KEY);
};

const setCart = (cart) => localStorage.setItem("cart", JSON.stringify(cart));

const localStorageService = {
    setTokens,
    getAccessToken,
    getRefreshToken,
    getTokenExpiresDate,
    getUserId,
    removeAuthData,
    setCart
};
export default localStorageService;
