import { Request, Response, NextFunction } from "express";
declare class HolidayTheController {
    index(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    create(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    delete(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
export { HolidayTheController };
//# sourceMappingURL=holidays-the-controller.d.ts.map