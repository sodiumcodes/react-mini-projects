class ApiError extends Error {
    constructor(
        statusCode,
        message= "There was an error",
        errors = [],
        stack=""
    ){
        super(message);
        statusCode = this.statusCode;
        message = this.message;
        errors = this.error;
        if(stack){
            this.stack = stack;
        }else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiError