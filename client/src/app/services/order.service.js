import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const orderEndpoint = "order/";

const orderService = {
    // get: async () => {
    //     const { data } = await httpService.get(orderEndpoint);
    //     return data;
    // },
    create: async (payload) => {
        const { data } = await httpService.patch(orderEndpoint, payload);
        return data;
    },
    addOrderToUser: async (payload) => {
        console.log("patload", payload);
        const { data } = await httpService.put(
            `user/${localStorageService.getUserId()}/orders/${payload.id}`,
            payload
        );
        return data;
    }
    // update: async (payload) => {
    //     const { data } = await httpService.patch(
    //         orderEndpoint + localStorageService.getUserId(),
    //         payload
    //     );
    //     return data;
    // },
    // getCurrentUser: async () => {
    //     const { data } = await httpService.get(
    //         orderEndpoint + localStorageService.getUserId()
    //     );
    //     return data;
    // }
};
export default orderService;
