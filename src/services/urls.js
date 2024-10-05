export const appUrls = {
    //AUTH ENDPOINTS
    LOGIN_URL: "/auth/admin-signin",

    //PRODUCT ENDPOINTS
    GET_PRODUCT_URL: "/product",
    DELETE_PRODUCT_URL: "/product/delete",

    //CATEGORIES ENDPOINT
    GET_CATEGORIES_URL: "/category",
    CREATE_CATEGORIES_URL: "/category",
    UPDATE_CATEGORIES_IMAGE_URL: "/category/upload-image",
    DELETE_CATEGORY_URL: "/category/delete",


    //USER MANAGEMENT ENDPOINTS
    GET_ALL_ADMINS: "/user/admins",
    GET_ALL_PRINCIPALS: "/user/principals",
    GET_ALL_MERCHANTS: "/user/merchants",
    GET_ALL_SHOPPERS: "/user/shoppers",
    ENABLE_DISABLE_USER: "/user/activate-deactivate",
    CREATE_PRINCIPAL: "/user/principal/admin-register",

    //FINANCIALS ENDPOINTS
    GET_ALL_TRANSACTIONS: "/transactions",
    GET_ALL_SUBSCRIPTIONS: "/subscription",

    //ORDERS ENDPOINTS
    GET_ALL_ORDERS: "/order"

};
