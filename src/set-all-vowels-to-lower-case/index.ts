/* types */
type TVowelsLowerRes = {input: string, lower: string};
type TInput = string;
type TOutput = TVowelsLowerRes;

/* module */
function setAllVowelsToLowerCase(arg: TInput): TOutput {
  if (arg.length <= 0) {
    throw new Error("[Bad]: Set All Vowels To Lowercase - Argument length to be greater than zero");
  } else {
    const lower = arg.replace(/[aeiou]/gi, (match) => {
      return match.toLowerCase();
    });
    return {input: arg, lower};
  }
}

/* exports */
export type { TVowelsLowerRes };
export { setAllVowelsToLowerCase };
