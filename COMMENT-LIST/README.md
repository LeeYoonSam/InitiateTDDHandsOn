# COMMENT-LIST
코멘트 목록을 관리하는 React 응용프로그램 입니다.

> OCP(Open-closed principle) 개방 폐쇄 원칙

소프트웨어 엔터티(클래스, 모듈, 함수 등)는 확장에 열리고 수정에 닫혀야 한다.

- 확장 가능한 경우 모듈은 열려 있다고 말한다.
- 다른 모듈에 의해 사용될 수 있을 때 모듈은 닫혀 있다고 말한다.
- 상속을 염두 한 정의

## commentComposerFactory.js
- commentRefiner 를 객체 생성시 전달 받으므로 trimWhitespaces 라는 구체적인 클래스에 의존하지 않고 추상화된 결과에 의존

## 중복된 결과를 하나로 줄임
기능을 수정하지 않고 코드를 변경 가능해야한다.
- compactWhitespaces: 공백2개를 1개로 치환

## composite 패턴 사용
- Abstraction 에 composite 패턴을 사용해서 Abstraciton 의 구현체를 모은 composite 객체가 하위로 구현체를 가질수 있고 이렇게 되면 플러그인의 기능을 할 수도 있다.

- trimWhitespaces, compactWhitespaces 를 composite 패턴을 사용해서 추상화를 모은다.

## Test ablity
- 테스트 용이성(얼마나 테스트 하기 쉬운가?)
- 얼마나 테스트 하기 쉬운지를 표현

## 커다란 시스템의 일부 하위 시스템을 단위 테스트 하려면?
- 하위시스템을 잘 분리해야한다.
- 적응력이 높은 코드는 다른 코드로부터 분리가 쉽다. 코드 적응력이 오르면 테스트 어빌리티도 같이 올라간다.
- 적응력이 낮으면 테스트 어빌리티도 낮아진다.