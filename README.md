![v2-banner](https://github.com/user-attachments/assets/ca5a02f2-8e99-4f7c-9108-97d9a068bd90)
![npm](https://img.shields.io/npm/v/vowelz)
![downloads](https://img.shields.io/npm/dw/vowelz)
![license](https://img.shields.io/npm/l/vowelz)

# Vowelz

A tiny, tested, type-safe vowel processing toolkit for modern JavaScript. Supports ES6 style imports, Node.js 18+ with named exports. Fully unit tested with Jest.<br/>
<br/>
🚨 Vowelz 3.x.x is a complete rewrite. If you were using a previous version (2.0.0 or older), you must migrate your imports and usage. This version introduces breaking changes:

1. Switched from class-based API → functional API
2. Switched from CommonJS → ES Modules (ESM)
3. Node.js version requirement is now 18+
4. Flat named exports instead of instance methods

### 📦 Installation

```console
npm install vowelz
```

### 🎒 Features

1. Tiny and dependency-free
2. Fully unit tested with Jest
3. Type-safe (TypeScript support out of the box)
4. Focused vowel manipulation utilities

### 💻 Available Functions

1. `countAllVowels`
2. `getTotalCount`
3. `getCountOfUniqueVowels`
4. `extractAllVowelsFromString`
5. `getPositionsOfVowels`
6. `setAllVowelsToUpperCase`
7. `setAllVowelsToLowerCase`
8. `replaceVowelsWithCharacter`
9. `removeAllVowelsFromString`
10. `encryptAllVowels`

### 🔤 Example Usage

1. 📁 Count All Vowels

```javascript
/* Counts every vowel occurrence in a string. */
import { countAllVowels } from 'vowelz';
const result = countAllVowels('hello');
console.log(result);

/*
Expected Output:
{
  input: "hello",
  count: {
    a: 0,
    e: 1,
    i: 0,
    o: 1,
    u: 0
  }
}
*/
```

2. 📁 Encrypt All Vowels

```javascript
import { encryptAllVowels } from 'vowelz';
const result = encryptAllVowels('hello');
console.log(result);

/*
Expected Output:
{ input: "hello", encrypted: "h3ll0" }
*/
```

3. 📁 Extract All Vowels From String

```javascript
import { extractAllVowelsFromString } from 'vowelz';
const result = extractAllVowelsFromString('hello');
console.log(result);

/*
Expected Ouput:
{
  input: "hello",
  extract: ["e", "o"]
}
*/
```

4. 📁 Get Count Of Unique Vowels

```javascript
import { getCountOfUniqueVowels } from 'vowelz';
const result = getCountOfUniqueVowels('beautiful');
console.log(result);

/*
Expected Output:
{ input: "beautiful", unique: 4 }
*/
```

5. 📁 Get Position Of Vowels

```javascript
import { getPositionsOfVowels } from 'vowelz';
const result = getPositionsOfVowels('hello');
console.log(result);

/*
Expected Output:
{
  input: "hello",
  positions: [1, 4]
}
*/
```

6. 📁 Get Total Count

```javascript
import { getTotalCountOfVowels } from 'vowelz';
const result = getTotalCountOfVowels('hello');
console.log(result);

/*
Expected Output:
{
  input: "hello",
  total: 2
}
*/
```

7. 📁 Remove All Vowels From String

```javascript
import { removeAllVowelsFromString } from 'vowelz';
const result = removeAllVowelsFromString('hello');
console.log(result);

/*
Expected Output:
{
  input: "hello",
  removed: "hll"
}
*/
```

8. 📁 Replace Vowels With Character

```javascript
import { replaceVowelsWithCharacter } from 'vowelz';
const result = replaceVowelsWithCharacter('hello', '*');
console.log(result);

/*
Expected Output:
{
  input: "hello",
  mutated: "h*ll*"
}
*/
```

9. 📁 Set All Vowels To Lower Case

```javascript
import { setAllVowelsToLowerCase } from 'vowelz';
const result = setAllVowelsToLowerCase('HELLO');
console.log(result);

/*
Expected Output:
{
  input: "HELLO",
  lower: "HeLLo"
}
*/
```

10. 📁 Set All Vowels To Upper Case

```javascript
import { setAllVowelsToUpperCase } from 'vowelz';
const result = setAllVowelsToUpperCase('hello');
console.log(result);

/*
Expected Output:
{
  input: "hello",
  upper: "hEllO"
}
*/
```

### 📗 Test Coverage

```
PASS tests/count-all-vowels.test.ts
PASS tests/encrypt-all-vowels.test.ts
PASS tests/extract-all-vowels-from-string.test.ts
PASS tests/get-count-of-unique-vowels.test.ts
PASS tests/get-positions-of-vowels.test.ts
PASS tests/get-total-count.test.ts
PASS tests/remove-all-vowels-from-string.test.ts
PASS tests/replace-vowels-with-character.test.ts
PASS tests/set-all-vowels-to-lower-case.test.ts
PASS tests/set-all-vowels-to-upper-case.test.ts

Test Suites: 10 passed, 10 total
Tests:       50 passed, 50 total
Snapshots:   0 total
```

```
--------------------------------|---------|----------|---------|---------|-------------------
File                            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------------------------|---------|----------|---------|---------|-------------------
All files                       |     100 |    97.67 |     100 |     100 |
 count-all-vowels               |     100 |      100 |     100 |     100 |
  index.ts                      |     100 |      100 |     100 |     100 |
 encrypt-all-vowels             |     100 |       80 |     100 |     100 | 21
  index.ts                      |     100 |       80 |     100 |     100 | 21
 extract-all-vowels-from-string |     100 |      100 |     100 |     100 |
  index.ts                      |     100 |      100 |     100 |     100 |
 get-count-of-unique-vowels     |     100 |      100 |     100 |     100 |
  index.ts                      |     100 |      100 |     100 |     100 |
 get-positions-of-vowels        |     100 |      100 |     100 |     100 |
  index.ts                      |     100 |      100 |     100 |     100 |
 get-total-count                |     100 |      100 |     100 |     100 |
  index.ts                      |     100 |      100 |     100 |     100 |
 remove-all-vowels-from-string  |     100 |      100 |     100 |     100 |
  index.ts                      |     100 |      100 |     100 |     100 |
 replace-vowels-with-character  |     100 |      100 |     100 |     100 |
  index.ts                      |     100 |      100 |     100 |     100 |
 set-all-vowels-to-lower-case   |     100 |      100 |     100 |     100 |
  index.ts                      |     100 |      100 |     100 |     100 |
 set-all-vowels-to-upper-case   |     100 |      100 |     100 |     100 |
  index.ts                      |     100 |      100 |     100 |     100 |
--------------------------------|---------|----------|---------|---------|-------------------
```

### 📘 Contributing

Contributions, suggestions, and improvements are welcome.<br/>
Feel free to open issues or pull requests.

### ❤️ Support

Like this project? Support it with a github star, it would mean a lot to me! Cheers and Happy Coding.
