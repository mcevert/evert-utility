import chalk from 'chalk';
import { ILoggerOptions, LogMessage } from './types/global.interface';
import { currentTime, formatObj } from './utils';

/**
 * Represents a logger.
 */
class Logger {
  /**
   * The options of the logger.
   * @type {ILoggerOptions | undefined}
   * @readonly
   */
  public readonly options?: ILoggerOptions;

  /**
   * Creates a new instance of the Logger class.
   * @param {ILoggerOptions | undefined} options - The options of the logger.
   */
  constructor(options?: ILoggerOptions) {
    this.options = options;
  }

  /**
   * Logs an ready message.
   * @param {LogMessage} message - The message to log.
   * @return {void}
   */
  public ready(message: LogMessage): void {
    if (typeof message === 'object' && message !== null) {
      return console.log(
        `[${currentTime({ withDate: this.options?.withDate })}] ${chalk.green('READY')} (${
          this.options?.prefix ? `${this.options.prefix}/` : ''
        }${process.pid}): \n ${formatObj(message)}`
      );
    }

    return console.log(
      `[${currentTime({ withDate: this.options?.withDate })}] ${chalk.green('READY')} (${
        this.options?.prefix ? `${this.options.prefix}/` : ''
      }${process.pid}): ${message}`
    );
  }

  /**
   * Logs an info message.
   * @param {LogMessage} message - The message to log.
   * @return {void}
   */
  public info(message: LogMessage): void {
    if (typeof message === 'object' && message !== null) {
      return console.log(
        `[${currentTime({ withDate: this.options?.withDate })}] ${chalk.magenta('INFO')} (${
          this.options?.prefix ? `${this.options.prefix}/` : ''
        }${process.pid}): \n ${formatObj(message)}`
      );
    }

    return console.log(
      `[${currentTime({ withDate: this.options?.withDate })}] ${chalk.magenta('INFO')} (${
        this.options?.prefix ? `${this.options.prefix}/` : ''
      }${process.pid}): ${message}`
    );
  }

  /**
   * Logs an error message.
   * @param {LogMessage} message - The message to log.
   * @return {void}
   */
  public error(message: LogMessage): void {
    if (typeof message === 'object' && message !== null) {
      return console.log(
        `[${currentTime({ withDate: this.options?.withDate })}] ${chalk.red('ERROR')} (${
          this.options?.prefix ? `${this.options.prefix}/` : ''
        }${process.pid}): \n ${formatObj(message)}`
      );
    }

    return console.log(
      `[${currentTime({ withDate: this.options?.withDate })}] ${chalk.red('ERROR')} (${
        this.options?.prefix ? `${this.options.prefix}/` : ''
      }${process.pid}): ${message}`
    );
  }

  /**
   * Logs an warning message.
   * @param {LogMessage} message - The message to log.
   * @return {void}
   */
  public warn(message: LogMessage): void {
    if (typeof message === 'object' && message !== null) {
      return console.log(
        `[${currentTime({ withDate: this.options?.withDate })}] ${chalk.yellow('WARNING')} (${
          this.options?.prefix ? `${this.options.prefix}/` : ''
        }${process.pid}): \n ${formatObj(message)}`
      );
    }

    return console.log(
      `[${currentTime({ withDate: this.options?.withDate })}] ${chalk.yellow('WARNING')} (${
        this.options?.prefix ? `${this.options.prefix}/` : ''
      }${process.pid}): ${message}`
    );
  }
}

export default Logger;
