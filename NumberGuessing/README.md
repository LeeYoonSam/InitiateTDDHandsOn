# Number Guessing
1 ~ 100 사이 정수를 추측해서 맞추는 콘솔 게임

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


## TDD 로 개발

> Red -> Green -> Refactor 의 반복

- 테스트 해야 할 부분을 생각하고 이것을 테스트 코드로 먼저 작성
- 테스트 코드 실패(Red) > 운영코드 작성
- 테스트를 통과하도록 운영코드 작성(Green) > 실패시 운영코드 계속 수정
- 중복되거나 지저분한 코드들을 분리 가능하다면 수정(Refactor)
- 리팩토링 및 운영코드 작성을 하면서 계속해서 모든 테스트코드가 잘 통과 하는지 확인하며 진행

### 어려운 부분
1. 테스트 작성을 할때 어떤것을 어떻게 테스트 코드로 작성해야 하는지 선정하기 어려움.


## 인수 테스트

> 개발이 완료 되고 실제로 실행해보며 전체 수동 테스트를 진행하는 것.

- 유닛 테스트가 통과했음에도 불구하고 변경해야 하는 일이 발생
- 간단한 수정이라도 관련된 테스트 코드가 있으면 해당 테스트를 수정하고 리팩토링
- 완전 새로운 문제라면 테스트 코드를 추가로 작성하고 운영코드 리팩토링
- 인수 테스트를 다시 실행할때도 처음부터 다시 테스트


## VS Code - shortcut

**mac 기준**

Java Run All Test:
1. cmd + p 
2. > Java Run All Test 입력 or 숏컷 등록


코드 리팩터: (로컬 변수, 메소드 추출 등)
- cmd + . 

자동 정렬: 
- alt + shift + F



