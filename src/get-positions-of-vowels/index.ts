/* types */
type TVowelPosRes = {input: string, positions: number[]};
type TInput = string;
type TOutput = TVowelPosRes;

/* module */
function getPositionsOfVowels(arg: TInput): TOutput {
  if (arg.length <= 0) {
    throw new Error("[Bad]: Get Positions Of Vowels - Argument length to be greater than zero");
  } else {
    /* get */
    const positions: number[] = [];
    arg.replace(/[aeiou]/gi, (match, index) => {
      positions.push(index);
      return match;
    });

    /* end */
    return {input: arg, positions};
  }
}

/* exports */
export type { TVowelPosRes };
export { getPositionsOfVowels };
