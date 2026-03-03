/* type */
type TTotalCountRes = {input: string, total: number};
type TInput = string;
type TOutput = TTotalCountRes;

/* module */
function getTotalCountOfVowels(arg: TInput): TOutput {
  if (arg.length <= 0) {
    throw new Error("[Bad]: Get Total Count Of Vowels - Argument length to be greater than zero");
  } else {
    const matches = arg.match(/[aeiou]/gi);
    return {
      input: arg,
      total: matches ? matches.length : 0,
    };
  }
}

/* exports */
export type { TTotalCountRes };
export { getTotalCountOfVowels };
