/* types */
type TEncryptedVowelRes = {input: string, encrypted: string};
type TInput = string;
type TOutput = TEncryptedVowelRes;

/* module */
function encryptAllVowels(arg: TInput): TOutput {
  if (arg.length <= 0) {
    throw new Error("[Bad]: Encrypt All Vowels - Argument length to be greater than zero");
  } else {
    /* ref */
    const encryptionMap: Record<string, string> = {
      a: '@',
      e: '3',
      i: '!',
      o: '0',
      u: '*'
    };

    /* enc */
    const encrypted = arg.replace(/[aeiou]/gi, vowel => encryptionMap[vowel.toLowerCase()] || vowel);

    /* end */
    return {input: arg, encrypted };
  }
}

/* exports */
export type { TEncryptedVowelRes };
export { encryptAllVowels };
