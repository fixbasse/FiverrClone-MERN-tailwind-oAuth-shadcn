import { newRequest } from "./newRequest"

export const getAllGigs = async () => {
    try {
        const res = await newRequest.get('/gig');
        console.log(res.data);

    } catch (error) {
        console.log(error);
    }
};
