import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Response } from "express";


@Catch(HttpException)
export class HttpExceptionFilter<T extends HttpException>
implements ExceptionFilter {
    catch(exception: T, host: ArgumentsHost) {
        const context = host.switchToHttp()
        const response = context.getResponse<Response>()

        const status = exception.getStatus()
        const errorResponse = exception.getResponse()
        const stackTrace = exception.stack

        response.status(status).json({
            stackTrace: stackTrace,
            error: errorResponse,
            occuredAt: new Date().getTime()
        
        })
        
    }
}