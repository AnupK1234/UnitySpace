import { createContext } from 'react';
import { Client, } from "appwrite";

export const AppwriteContext = createContext(null);

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('UnitySpace') // Your project ID
    ;

export { client };
