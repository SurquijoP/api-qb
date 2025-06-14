import { ConsoleLogger, Injectable } from '@nestjs/common';

export const LOGGER = {
  INIT: '[INIT]',
  DATA: '[DATA]',
  END: '[END]',
  ERROR: '[ERROR]',
  DEAD: '[TASK DEAD]',
  RETRY: '[TASK RETRY]',
  REDIS_ERROR: '[ERROR]',
  REDIS_OK: 'REDIS CONNECT OK',
  REDIS_CONNECTION_EXIST: 'This user has an open connection: ',
};

@Injectable()
export class LoggerCustomService extends ConsoleLogger {
  private readonly nameClazz: string;

  constructor(clazz: string) {
    super();
    this.nameClazz = clazz;
  }

  /**
   * Custom information log configuration for the application.
   *
   * @param {string} method name of the method to be logged
   * @param {string} [message] optional log message
   * @param {*} [data] data associated with the log.
   * @memberof LoggerCustomService
   */
  public info(method: string, message?: string, data?: any): void {
    let logger = `: [${method}] `;
    if (message !== null) {
      logger += `-> ${message}`;
    }
    if (data !== null && data !== undefined) {
      logger += ` -> data = ${JSON.stringify(data)}`;
    }
    super.log(logger, this.nameClazz);
  }

  /**
   * Custom information log configuration for the application.
   *
   * @param {string} method name of the method to be logged
   * @param {string} [message] optional log message
   * @param {*} [data] data associated with the log.
   * @memberof LoggerCustomService
   */
  public debug(method: string, message?: string, data?: any): void {
    let logger = `: [${method}] `;
    if (message !== null) {
      logger += `-> ${message}`;
    }
    if (data !== null && data !== undefined) {
      logger += ` -> data = ${JSON.stringify(data)}`;
    }
    super.debug(logger, this.nameClazz);
  }

  /**
   * Custom error log configuration for the application.
   *
   * @param {string} method name of the method to be logged
   * @param {*} [message] message of the error or exceptions.
   * @param {*} [trace] trace of the error or exceptions.
   * @memberof LoggerCustomService
   */
  public errors(method: string, message?: any, trace?: any): void {
    super.error(
      `[${method}] -> ${LOGGER.ERROR} -> ${JSON.stringify(message)}`,
      `${trace}`,
      this.nameClazz,
    );
  }
}
