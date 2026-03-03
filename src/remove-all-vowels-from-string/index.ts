/* type */
type TVowelsRemovedRes = {input: string, removed: string};
type TInput = string;
type TOutput = TVowelsRemovedRes;

/* module */
function removeAllVowelsFromString(arg: TInput): TOutput {
  if (arg.length <= 0) {
    throw new Error("[Bad]: Remove Vowels From String - Argument length to be greater than zero");
  } else {
    return {
      input: arg,
      removed: arg.replace(/[aeiou]/gi, '')
    };
  }
}

/* exports */
export type { TVowelsRemovedRes };
export { removeAllVowelsFromString };
