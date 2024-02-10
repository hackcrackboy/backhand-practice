class ApiError extends Error{
    constructor(
        statusCode,
        message= "SOMETHING went wrong",
errors=[],
stack=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null,
        this.message= message,
        this.success= false;
        this.errors=errors

        if (stack){
            this.stack=statck
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    } 
    }
   export {ApiError}