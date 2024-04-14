function Apiresponce() {
    // Return an object with success and error methods
    return {
        // Method to send a success response with a 200 status code
        success: (res, data, message) => {
            // Send a JSON response with status: true, message, and data
            res.status(200).json({
                status: true,
                message: message,
                data: data
            });
        },
        // Method to send an error response with a 400 status code
        error: (res, message) => {
            // Send a JSON response with status: false and the error message
            res.status(400).json({
                status: false,
                message: message,
            });
        }
    };
}

// Export the Apiresponce function
export { Apiresponce };
