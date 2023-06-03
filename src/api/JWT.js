import { useEffect } from "react";
import client from "./client";


export const JWT = () => {
    useEffect(() => {

        const getJWT = async () => {
            try {
                const response = await client.get('/users/test');
                console.log(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        getJWT();
    }, []);

}