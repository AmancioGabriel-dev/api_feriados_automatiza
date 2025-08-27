import { Request, Response, NextFunction } from "express";
declare class HolidayCxController {
    index(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    create(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    delete(request: Request, response: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
export { HolidayCxController };
//# sourceMappingURL=holidays-cx-controller.d.ts.map