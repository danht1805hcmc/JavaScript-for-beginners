/**
 * A function that logs messages if shouldPrint is true.
 *
 * @param {boolean} shouldPrint - Determines whether to print the messages.
 * @param {...any} messages - The messages to be logged.
 * @return {void}
 */
export const printLog = (shouldPrint, ...messages) => {
  if (shouldPrint) {
    console.log(...messages);
  }
};

/**
 * A function that prints a group of messages if shouldPrint is true.
 *
 * @param {boolean} shouldPrint - Determines whether to print the group.
 * @param {function} callback - The function to be executed within the group.
 * @param {...any} labels - The labels to be displayed in the group.
 * @return {void}
 */
export const printGroup = (shouldPrint, callback, ...labels) => {
  if (shouldPrint) {
    console.group(...labels);
    callback();
    console.groupEnd();
  }
};
