# Number Guessing

## Parameterized Test
Junit 5 에서 파라미터라이즈 테스트 지원

### Gradle Dependencies
```
testImplementation 'org.junit.jupiter:junit-jupiter-params:5.6.0'
```

### ParameterizedTest
```
@ParameterizedTest
```

**파라미터를 제공하는 수단**

@CsvSource
```
@ParameterizedTest
@CsvSource({ "50, 40", "30, 20"})
void some_test(int first, int second)
```
- 따옴표(")로 테스트 파라미터 세트 지정
- 콤마(,) 로 각 파라미터 구분


@ValueSource
```
@ParameterizedTest
@ValueSource(ints = { 1, 2, 3, 4, 5 })
void some_test(int answer)
```
- 파라미터가 하나인경우 사용

## VS Code - shortcut

**mac 기준**

Java Run All Test:
1. cmd + p 
2. > Java Run All Test 입력 or 숏컷 등록

자동 정렬: alt + shift + F



