import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(`[RUN_INIT]`);
    next();
    res.on('finish', () => {
      this.logger.log(
        `[StatusCodeResponse]: ${res.statusCode.toString()} | [URL]: ${req.originalUrl} | [BODY]: ${JSON.stringify(req.body)}`,
      );
      this.logger.log(`[RUN_FIN_OK]`);
    });
  }
}
