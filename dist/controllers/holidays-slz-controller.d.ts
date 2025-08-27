import { Request, Response, NextFunction } from "express";
declare class HolidaySlzController {
    index(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    create(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    delete(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
export { HolidaySlzController };
//# sourceMappingURL=holidays-slz-controller.d.ts.map