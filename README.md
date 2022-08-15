# Maker your photo diary!

리액트와 파이어베이스, 클라우디너리, fullcalendar를 사용해 만든 포토 일기와 달력 웹 서비스 <br>
(use react & firebase & cloudinary & fullcalendar) <br> <br>
reference: dreamcoding react basic
<br><br>
<img src="https://img.shields.io/badge/React Router-CA4245?style=flat&logo=React Router&logoColor=white"/>
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=Firebase&logoColor=white"/>
 <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=white"/> 
<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/> 
<img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=Yarn&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"/> 
& cloudinary & fullcalendar


##  Demo
🔗link: https://my-diary-git-master-ejaman.vercel.app/

<br />

###  로그인
1. 소셜 로그인: 구글, 깃허브
2. 아이디, 비밀번호 로그인 -> 구현 예정
<img width="900" alt="스크린샷 2022-08-16 오전 3 07 41" src="https://user-images.githubusercontent.com/82802784/184691018-67e2da34-d629-48c6-bfa0-2277b17f29fc.png">

<br />

###  메인 페이지 1. 다이어리 파트
- 다이어리 목록 불러오기
- 다이어리 추가
- 다이어리 삭제
- 다이어리 수정
<img width="900" alt="스크린샷 2022-08-16 오전 2 43 12" src="https://user-images.githubusercontent.com/82802784/184687388-a88848f4-76c1-4f92-97b7-c37212ca44c2.png">

<img width="900" alt="스크린샷 2022-08-16 오전 2 46 59" src="https://user-images.githubusercontent.com/82802784/184687943-9f3c2088-3d62-4fc4-a967-c8b4511f6198.png">

<br />

###  메인 페이지 2. 달력 파트
- 달력 원하는 날짜 클릭으로 이벤트 추가 가능
- 이벤트 색상 선택 가능
- 이벤트 클릭으로 이벤트 삭제 가능
- 한 주의 이벤트만 weekly list에서 확인 가능
<img width="900" alt="스크린샷 2022-08-16 오전 2 44 42" src="https://user-images.githubusercontent.com/82802784/184687595-9f17c749-e800-4773-b296-665b96a64c9d.png">

<img width="500" alt="스크린샷 2022-08-16 오전 2 44 57" src="https://user-images.githubusercontent.com/82802784/184687628-cbf8023d-c52d-4324-9f58-30532861895f.png">

<img width="500" alt="스크린샷 2022-08-16 오전 2 45 11" src="https://user-images.githubusercontent.com/82802784/184687667-f55757c8-0e7c-4158-a4ab-7ba00db53257.png">

<br />
<br />

##  어려웠던 점
1. fulcalendar 사용
- 데이터 형식이 달라서 파이어베이스에 저장된 이벤트가 달력에 적용되지 않았음 -> event에 넣는 데이터는 형식을 객체로 바꿔서 문제를 해결함
```js
  return (
    <CalendarForm>
      <Div>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          editable={true}
          droppable={true}
          selectable={true}
          select={handleDateSelect}
          eventClick={handleEventClick}
          events={Object.values(schedules)}
          nowIndicator
        />
      </Div>
    </CalendarForm>
  );
```
- 드래그 앤 드랍 
: 드래그와 드랍으로 이벤트 날짜를 수정할 수 있게 만드는 것 -> 시도했지만 실패 추후 리팩토링 때 보완해보기!

2. UI, modal
- styled-componets 사용
- modal 밖 클릭 시 모달 닫히게 만들기
: 기존에는 react-modal를 사용해서 만들었는데 삭제하고 컴포넌트로 만듦 -> 더 높은 자유도, 내맘대로 커스텀 가능!

-> 공부할 점: 보기에도 좋고 사용하기 편한 UI짜기, styled-components 위치

3. vercel에 배포
: 요즘은 vercel에 많이 배포한다길래 시도해봤는데 cannot fine file 에러가 뜸 
```
One possible cause for this issue is the fact that HFS+, the file system used in Macs, is case-insensitive. 
Because of this, it is possible that when you change the letter-casing in filenames on your local machine, Git will only pick up changes in your respective static import statements. 
This would mean that your repository is now syntactically incorrect, resulting in a build error when deploying the repository on the Vercel platform.
```
그래서 how to resolve를 보고 변수명, 파일명을 모두 확인했지만 해결되지 않음
-> cli로 배포 시도 
같은 코드인데 cli로는 배포에 성공함 

-> 공부할 점: 원인찾아보기 왜지..?왤까..?????

<br><br>

##  리팩토링/ 추후 구현할 기능
- [ ] 변수명, 컴포넌트명 수정
- [ ] 기본 이미지 수정
- [ ] 아이디 비밀번호 로그인 구현
- [ ] 달력 주 리스트 컴포넌트로 직접 구현해보기
- [ ] 달력 드래그 앤 드롭
- [ ] 다이어리 양이 많아지면 사용자가 일기 리스트에서 원하는 일기를 찾기 어려워짐 -> 검색 또는 월별기록 
- [ ] 달력 이벤트 제목, 색상 모달로 만들어 색상을 이벤트 적용전 사용자가 볼 수 있도록 만들기

<br><br>


##  느낀점
1. 그래도 조금은 성장했구나!
: 처음 만들었을 때는 전에 들었던 강의를 베이스를 따라하기 + 이해 시도하기였다면 이번엔 hook을 이해하고 코드를 수정해 훨씬 수월했다

2. Vercel
: 확실히 사용자가 할 일이 줄어 이용하기 편했다. 추후 블로그에 배포 방법과 netlfy와 차이를 찾고 기록해 두어야겠다.

3. 리팩토링!
: 처음 코드를 짜는것보다 수정하는 것이 훨씬 어렵고 헷갈린다
-> 변수명을 수정하자
-> 주석으로 설명을 달아두자
-> 커밋 메시지를 알아보기 편하게 형식대로 작성하자


