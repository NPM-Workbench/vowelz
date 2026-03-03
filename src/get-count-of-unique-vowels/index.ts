/* types */
type TUniqueCountRes = {unique: number, input: string};
type TInput = string;
type TOutput = TUniqueCountRes;

/* module */
function getCountOfUniqueVowels(arg: TInput): TOutput {
  if (arg.length <= 0) {
    throw new Error("[Bad]: Get Count of Unique Vowels - Argument length to be greater than zero");
  } else {
    const uniqueVowels = new Set(arg.toLowerCase().match(/[aeiou]/g));
    return {input: arg, unique: uniqueVowels.size};
  }
}

/* exports */
export type { TUniqueCountRes };
export { getCountOfUniqueVowels };
