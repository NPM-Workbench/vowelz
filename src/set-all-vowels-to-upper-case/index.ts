/* types */
type TVowelsUpperRes = {input: string, upper: string};
type TInput = string;
type TOutput = TVowelsUpperRes;

/* module */
function setAllVowelsToUpperCase(arg: TInput): TOutput {
  if (arg.length <= 0) {
    throw new Error("[Bad]: Set All Vowels To Uppercase - Argument length to be greater than zero");
  } else {
    const upper = arg.replace(/[aeiou]/gi, (match) => {
      return match.toUpperCase();
    });
    return {input: arg, upper};
  }
}

/* exports */
export type { TVowelsUpperRes };
export { setAllVowelsToUpperCase };
