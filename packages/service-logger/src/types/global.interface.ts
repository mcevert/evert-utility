export interface ILoggerOptions {
  prefix?: string;
  withDate?: boolean;
}

export type LogMessage = string | object | unknown;
