const faker = require("faker")
// sut - system uner test
const sut = require("./index")

// 입력되는 문자열을 다르게해서 테스트
// test('sut trasnforms "hello  world" to "hello world', () => {
//     const actual = sut("hello  world");
//     expect(actual).toBe("hello world");
// });

// test('sut trasnforms "hello    world" to "hello world', () => {
//     const actual = sut("hello    world");
//     expect(actual).toBe("hello world");
// });

// test('sut trasnforms "hello   world" to "hello world', () => {
//     const actual = sut("hello   world");
//     expect(actual).toBe("hello world");
// });

/**
 * 반복되는 코드를 줄이고싶다
 * for문을 사용해서 줄인다.
 * 
 * 문제점
 * - 어떤 소스에대한 실패인지 알수 없다.
 * - 테스트가 실패하면 이후 테스트는 진행하지 않기 때문에 이후 테스트가 성공인지 실패인지 알수 없다.
 * - 코드량이 줄어든다고 무조건 좋은것이 아니다.
 */
// test('sut correctly works', () => {
//     for(const source of ['hello  world', 'hello   world', 'hello    world']) {
//         const actual = sut(source);
//         expect(actual).toBe("hello world");
//     }
// });

/**
 * Jest - Parameterized Test 사용
 * 
 * Parameterized Test
 * - 동일한 테스트 코드를 여러개의 소스 데이터를 변경해가면서 테스트하는 기법
 * 
 * 코드 중복 제거
 * 피드백 품질 향상
 */
test.each`
    source                  | expected
    ${"hello  world"}       | ${"hello world"}
    ${"hello   world"}      | ${"hello world"}
    ${"hello    world"}     | ${"hello world"}
    ${"hello     world"}    | ${"hello world"}
    ${"hello      world"}   | ${"hello world"}
    ${"hello       world"}  | ${"hello world"}
`('sut transforms "$source" to "$expected"', ({ source, expected }) => {
    const actual = sut(source);
    expect(actual).toBe(expected);
});

test.each`
    source              | expected
    ${"hello\t world"}  | ${"hello world"}
    ${"hello \tworld"}  | ${"hello world"}
`('sut transforms "$source" that contains tab character to "$expected"', ({ source, expected }) => {
    const actual = sut(source);
    expect(actual).toBe(expected);
});

test.each`
    source | bannedWords | expected
    ${"hello mockist"} | ${["mockist", "purist"]} | ${"hello *******"}
    ${"hello purist"} | ${["mockist", "purist"]} | ${"hello ******"}
`('sut transforms "$source" to $"expected"', ({ source, bannedWords, expected}) => {
    const actual = sut(source, { bannedWords });
    expect(actual).toBe(expected)
});

describe('given banned word', () => {
    const bannedWord = faker.lorem.word();
    const source = "hello " + bannedWord;
    const expected = "hello " + "*".repeat(bannedWord.length);

    test(`${bannedWord} when invoke sut hent it returns ${expected}`, () => {
        const actual = sut(source, { bannedWords: [bannedWord] });
        expect(actual).toBe(expected);
    });
});