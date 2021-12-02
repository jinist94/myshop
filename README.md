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
  ㄴ 장바구니와 tab기능은 hook을 만들어서 하나의 파일에 넣고 꺼내쓰는 형식으로 설계함
- link to로 페이지를 이동하니 scroll top으로 이동되지 않고 이전의 스크롤 위치 그대로 이동되는 문제 발견
  ㄴ scrollToTop을 검색하여 hooks발견. 이 과정에서 withRouter과 Fragment의 존재를 알게 됨.
- redux reducer으로 데이터를 복수로 관리하는데에 있어서 제대로 복습할 필요를 느낌

- 장바구니 체크사항
  1 장바구니 버튼 클릭시 해당 상품의 데이터를 cart state에 담고 cart페이지로 이동
  2 클릭 하고 나서 장바구니에 있는 상품인지 조회 후 이미 장바구니에 있는 경우 기존에 들어있는 데이터에 quan만 변경 처리
  3 클릭시 quantity 란 추가 / input에 숫자만 입력되도록 체크 / 값이 1 아래로는 떨어지지 않게 처리
  ㄴ quan input 관련된 것은 하나의 함수로 만들어서 진행
  4 수량 선택하는 버튼을 만들고 수량이 올라갈 경우 quantity state가 증가
  5 장바구니 버튼을 누를경우 quan data가 함께 전송되게 구현
  6 cart page에서 수량 변경 시 cart state도 즉각변경

1,2,4,5까지 잔행 완료.
3번은 숫자만 입력되는 부분에서 코드가 안먹히는 오류 발생하여 대기

### 11.25

- datail page에서 quntity 추가시 문자열로 추가되지 않도록 +버튼을 눌렀을 때 number으로 변경.
  ㄴ 한글입력이 되었다 안되었다 하는 오류가 발생하여 onChange event인 event.nativeEvent.data와 정규식으로 해결

cart state에 담은 데이터를 loacalstorage에 추가하려 했지만
일단은 굳이 둘을 연동 시킬 필요성이 없다고 느낌.
local에 등록하려면 cartstate를 사용하는 의미가 없어지는 것 같다.
state에 대한 연습을 하기위해 이것을 state로 처리를 완벽하게 한 후에
localstorage로 진행을 하는게 맞는 것 같다.

- cart페이지 작업
  ㄴ 현재 cart state를 기반으로 cart page의 데이터가 표시되게 함.
- 장바구니 체크사항 6번 작업하면서 redux에 관한 지식 부족으로 전체 기본기 다시 잡기로 함.

### 11.26

store를 따로 관리를 해야 좋을 것 같다는 생각이 들어서 코드를 파일로 분리.
redux에 대해 부족한 부분이 느껴져 추가적으로 공부 진행.

- cart page에서 수량 변경 시 cart state도 즉각변경 완료
- 수량에 맞게 상품별 총 가격과 총 주문금액 / 배송비/ 총 결제금액 추출
  ㄴ state관리가 아닌 단순 계산 코드로 진행. 후에 변경될수도 있음을 대비하여 cart페이지 상단에 정리

reducer에서 장바구니 데이터를 변경하려면 id를 조회를 해야하기 때문에
중복되는 id 조회 코드가 발생하여 action으로 조회까지 완료된 index를 전송하는 코드로 변경.

### 11.27

- 장바구니 페이지 상품 지우기 완료
  ㄴ 지워야 할 index를 전달함으로써 수월하게 처리
- 체크 상품만 총 주문금액에 노출하는 기능/수량 부분 css처리

- 장바구니 선택상품 주문 기능 작업

장바구니 선택상품 주문 기능 체크해야 할 사항.

- 장바구니 상품 전체 선택 시 allselcet state on. 기본 default값: on
- allselect 클릭 시 전체 선택 해제
- 체크된 상품의 data를 select state에 넣고 가격\*수량 값의 총 합을 추출하여 총 주문 금액 란에 전달
  ㄴ 선택한 상품의 data는 이후에 주문서 작성란에서도 사용해야 하기 때문에 주문에 필요한 정보를 담아준다.

### 11.28

- 장바구니 전체상품 선택 기능 작업 시작

전체상품 선택 기능에서 체크해야 할 사항

1 allchecked버튼 클릭 시 전체 list상품 체크처리 / state: 전체 list item 담기
2 체크상태의 allchecked버튼 클릭시 전체 list상품 언체크 / state: 전체 list item 삭제
3 allchecked가 true인 상태에서 list의 언 체크시 allchecked버튼 또한 해제 / state: 클릭한 해당 item 삭제
4 체크된 상태에서 장바구니에서 상품 삭제 시 체크상품list에서도 삭제

- 문제발생 : 한 상품이라도 언 체크시 전체 언체크가 되는 상황 발생
  개별 선택 체크버튼의 활성화 기준이 전체선택 버튼이 아니라
  선택된 상품들이 담긴 state에 해당 id가 있는지 checked값에 조건을 할당 하여 코드를 수정하였다.

- 선택상품 삭제
  선택상품 삭제 버튼 클릭 시 선택한 상품들의 id만 담은 Array를 생성 후
  그 값을 dispatch를 이용해 action으로 전달하여 장바구니 상품들 중 해당 id를 포함하지 않은
  값들만 남겨서 state에 전달 하였다.
- 총 주문금액은
  let totalOrder = cartData.reduce((acc, elm) => acc + elm.price \* elm.quan, 0);
  이 코드에서 선택된 상품의 금액으로 변경

### 11.30

- 카테고리 체크사항

상품 데이터에 담긴 카테고리 number에 맞게 카테고리 이동 시 해당 상품이 보여야함.
카테고리는 중복 될 수 있다.

useParams로 카테고리의 number을 받아오고 카테고리 넘버를 포함하고 있는 상품들의 데이터를
catecoryItems라는 array에 담아주어 처리.

- 검색창 기능 체크사항
  상단 검색창에 검색어 입력 시 search page로 이동되며 검색한 키워드를 포함한 상품 나타내기.

### 12-02

- 검색창 기능 구현 완료. 상품 리스트가 출력되는 부분은 list page와 같기 때문에 listItem컴포넌트 재 사용
