export interface RequestData {
    // Define the structure of the request data
    userId: string;
    action: string;
    payload?: any; // Optional payload for additional data
}

export interface ResponseData {
    // Define the structure of the response data
    success: boolean;
    message: string;
    data?: any; // Optional data to return
}