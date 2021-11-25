# react shoppingmall page

직접 만들어보자.

- 레이아웃 참고는 브랜디나 다른 웹 사이트 참고.
- 카테고리 구성은 비교적 간단하게 작업하기.
- 실제 데이터를 받아올 수 없으니 가짜 데이터 파일을 만들어서 사용.
- 기본 페이지 기능 작업 이후에 디테일한 작업하기.
- SASS 사용

---

### 11/23

간단하게 index, list, detail페이지 세팅, Route 설정

react-router-dom은 5버전 이상으로 설치 해야 route오류가 생기지 않음

### 11.24

[datail page 작업]

- detail page tab 기능 구현
- 기본 css세팅. 반응형으로 작업할 것을 고려하여 작업
- 장바구니 기능 작업 시작!
- link to로 페이지를 이동하니 scroll top으로 이동되지 않고 이전의 스크롤 위치 그대로 이동되는 문제 발견
  ㄴ scrollToTop을 검색하여 hooks발견. 이 과정에서 withRouter과 Fragment의 존재를 알게 됨.
- redux reducer으로 데이터를 복수로 관리하는데에 있어서 제대로 복습할 필요를 느낌

- 장바구니 처리
  1 장바구니 버튼 클릭시 해당 상품의 데이터를 cart state에 담고 cart페이지로 이동
  2 클릭 하고 나서 장바구니에 있는 상품인지 조회 후에 없으면 담는 기능 구현
  3 클릭시 quantity 란 추가 /중복 클릭 시 quantity +1
  ㄴ quan input 관련된 것은 하나의 함수로 만들어서 진행
  4 수량 선택하는 버튼을 만들고 수량이 올라갈 경우 quantity state가 증가
  5 장바구니 버튼을 누를경우 quan data가 함께 전송되게 구현

> cart state에 담은 데이터 localstorage에 추가
> localstorage에 있는 데이터를 기반으로 cart page에 구현
> cart page에서 수량 증가 시 localstorage의 quan 도 수정
