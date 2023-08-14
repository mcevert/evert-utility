import { format } from 'date-fns';

/**
 * Formats an object as a pretty-printed JSON string.
 * @param {object} obj - The object to format.
 * @returns {string} The formatted JSON string.
 */
export const formatObj = (obj: object): string => {
  const formattedObj = JSON.stringify(obj, null, 4);
  return formattedObj.slice(1, formattedObj.length - 1);
};

/**
 * Returns the current time as a formatted string.
 * @returns {string} The current time in the format "DD MMM HH:mm:ss.ms".
 */
export const currentTime = (opts: Partial<{ withDate: boolean }>): string => {
  return format(new Date(), `${opts.withDate ? 'dd MMM ' : ''}HH:mm:ss.ms`);
};
