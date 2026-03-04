/* types */
type TVowelsExtractRes = {input: string, extract: string[]};
type TInput = string;
type TOutput = TVowelsExtractRes;

/* module */
function extractAllVowelsFromString(arg: TInput): TOutput {
  if (arg.length <= 0) {
    throw new Error("[Bad]: Extract All Vowels From String - Argument length to be greater than zero");
  } else {
    return { input: arg, extract: arg.match(/[aeiou]/gi) || [] };
  }
}

/* exports */
export type { TVowelsExtractRes };
export { extractAllVowelsFromString };
