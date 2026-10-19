/* ✍️ 여기의 텍스트와 배열만 수정하세요. 모든 인물과 기록은 예시입니다.
   쉼표와 따옴표를 지켜 주세요. 이미지는 assets/ 폴더에 업로드하세요. */
window.STORY = {
  owner: '강슬기',
  carrier: 'KT',
  lockDate: '10월 19일 (월)',
  lockTime: '9:12',
  battery: '78',
  // true면 기기 현재 날짜/시간으로 바뀝니다. false면 위 소설 시간 유지.
  liveClock: true,
  wallpaper: 'assets/wallpaper.jpg',
  // 홈화면 앱에는 중복 없이 아이콘만 배치, 하단 4개는 고정.
  calls: [
    {name:'엄마❤️', type:'수신', detail:'휴대전화', time:'오후 9:13', avatar:'엄마❤️'},
    {name:'주현언니', type:'부재중', detail:'휴대전화', time:'오전 11:16', avatar:''},
    {name:'승와니', type:'발신', detail:'휴대전화 · 2분 18초', time:'어제', avatar:'승'}
  ],
  // 문자 목록: 마지막 메시지로 자동 미리보기가 생성됩니다.
  // 날짜: 각 메시지에 date:'2026년 10월 19일 월요일'을 적으세요.
  // 같은 날짜가 연속되면 하루에 한 번만 날짜 구분선이 나옵니다.
  conversations: [
    {id:'주', name:'주현언니', avatar:'주', time:'오후 8:54', unread:1,
      messages:[
        {from:'them', text:'집에 도착했어?', date:'2026년 10월 18일 일요일', time:'오후 8:49'},
        {from:'me', text:'응. 아까 그 얘기 다시 해줘요.', date:'2026년 10월 18일 일요일', time:'오후 8:50'},
        {from:'them', text:'문자로는 설명 못 해.', date:'2026년 10월 19일 월요일', time:'오후 8:54'}
      ]},
    {id:'엄마', name:'엄마❤️', avatar:'엄마❤️', time:'토요일', unread:0,
      messages:[
        {from:'them', text:'일본이야?', time:'토요일 오후 6:11'},
        {from:'me', text:'잘 도착했어 걱정하지 마 ㅎㅎ', time:'토요일 오후 6:12'}
      ]},
    {id:'택배', name:'+82 10-1111-0000', avatar:'', time:'금요일', unread:0,
      messages:[{from:'them', text:'[Web발신][CJ대한통운_배송완료]

일요일에도 신속하게!!
모두를 위한 매일매일 배송
CJ대한통운 매일오네(O-NE)

고객님의 상품이 배송 완료되었습니다.
ㆍ보내는분 : WEVERSE COMPANY
ㆍ상품명 : 생활용품 외 1건
ㆍ인수자(위탁장소) : 문앞
ㆍ운송장번호 : 2028377281

언제든,어디서든,무엇이든 확인할 건 오네(O-NE)! 

※ CJ대한통운 고객센터 : 1588-1255.', time:'금요일 오전 10:22'}]}
  ],
  // Google을 모방한 소설용 Safari 시작 화면입니다. 실제 Google 기록과 연결되지 않습니다.
  googleSearches: [
    {query:'30대 여자 선물'},
    {query:'동성 연애'},
  ],
  // 사진 파일을 assets/ 폴더에 추가한 뒤 path를 변경하세요.
  photos: [
    {path:'assets/wallpaper.jpg', caption:'0210', date:'10월 18일'},
    {path:'assets/wallpaper.jpg', caption:'🐰', date:'10월 17일'},
  ],
  notes: [
    {title:'해야 할 일', date:'10월 19일', body:'호텔 예약하기, 안무연습 일정 확인'},
  ],
  // 카톡 날짜도 각 메시지에 date:'2026년 10월 19일 월요일'을 적으면 됩니다.
  // 프로필 사진: assets/에 파일을 추가하고 경로를 적으세요.
  kakaoRooms: [
    {id:'1', name:'주현언니', profile:'', time:'오후 9:00', unread:0, messages:[
      {from:'them', text:'어디야?', date:'2026년 10월 16일 금요일', time:'오후 9:19'},
{from:'me', text:'저 연습실이용', date:'2026년 10월 16일 금요일', time:'오후 9:19'},
{from:'them', text:'이따가 너네 집 가도 돼?', date:'2026년 10월 16일 금요일', time:'오후 9:19'},
      {from:'me', text:'무슨 일 있어요?', date:'2026년 10월 16일 금요일', time:'오후 9:20'},
      {from:'them', text:'그냥 별 거 아냐 이따가 이야기하자', date:'2026년 10월 16일 금요일', time:'오후 9:25'}
    ]},
      {from:'them', text:'일본 가면 호텔에서 룸서비스 시켜 먹을 거야?', date:'2026년 10월 17일 토요일', time:'오전 8:09'},
{from:'me', text:'도착하면 내 방으로 올래요?', date:'2026년 10월 17일 토요일', time:'오전 9:21'},
{from:'them', text:'알겠엉', date:'2026년 10월 17일 토요일', time:'오전 10:19'},
      {from:'me', text:'다 씻었어요?', date:'2026년 10월 17일 토요일', time:'오후 8:43'},
      {from:'them', text:'지금 갈게', date:'2026년 10월 17일 토요일', time:'오후 8:50'},     {from:'them', text:'할 얘기도 있구', date:'2026년 10월 17일 토요일', time:'오후 8:51'},
      {from:'me', text:'저번에도 할 얘기 있다고 해놓고 안 했으면서 ㅋㅋㅋㅋ', date:'2026년 10월 17일 토요일', time:'오후 8:56'},      {from:'me', text:'오늘은 진짜예요?', date:'2026년 10월 17일 토요일', time:'오후 8:56'},
      {from:'them', text:'ㅋㅋㅋㅋㅋㅋ몰라', date:'2026년 10월 17일 토요일', time:'오후 9:00'}
    ]},
kakaoRooms: [
    {id:'2', name:'승와니', profile:'', time:'오후 9:00', unread:0, messages:[
      {from:'them', text:'야 뭐해?', date:'2026년 10월 16일 금요일', time:'오후 8:49'},
{from:'me', text:':마지막 연습 중', date:'2026년 10월 16일 금요일', time:'오후 9:19'},
{from:'them', text:'저녁 먹을래?', date:'2026년 10월 16일 금요일', time:'오후 9:19'},
      {from:'me', text:'이따가 집에 주현언니 온대', date:'2026년 10월 16일 금요일', time:'오후 9:20'},
      {from:'them', text:'아직 주현언니가 얘기 안 했어?', date:'2026년 10월 16일 금요일', time:'오후 9:23'},
    {from:'them', text:'둘이 삽질 레전드다', date:'2026년 10월 16일 금요일', time:'오후 9:23'},
{from:'me', text:'별 얘기 안 했어', date:'2026년 10월 16일 금요일', time:'오후 9:25'},
{from:'them', text:'나한텐 얘기했는데', date:'2026년 10월 16일 금요일', time:'오후 9:29'},
      {from:'me', text:'무슨 얘기?', date:'2026년 10월 16일 금요일', time:'오후 9:20'},
      {from:'them', text:'주현언니한테 직접 들어 ㅋㅋㅋ', date:'2026년 10월 16일 금요일', time:'오후 9:25'}
    ]},
      {from:'them', text:'일본?', date:'2026년 10월 17일 토요일', time:'오전 10:17'},
{from:'me', text:'엉 준비중', date:'2026년 10월 17일 토요일', time:'오전 10:21'},
{from:'them', text:'어제 말해봤어?', date:'2026년 10월 17일 토요일', time:'오전 10:29'},
      {from:'me', text:'아무 얘기도 안 했어....', date:'2026년 10월 17일 토요일', time:'오후 8:43'},
      {from:'them', text:'오늘 얘기하겠네', date:'2026년 10월 17일 토요일', time:'오후 8:50'},     {from:'me', text:'할 얘기 있대', date:'2026년 10월 17일 토요일', time:'오후 8:51'},
      {from:'me', text:'어제도 그냥 밥만 먹었는데', date:'2026년 10월 17일 토요일', time:'오후 8:51'},      {from:'them', text:'아니 같은 마음이면 니가 먼저 해', date:'2026년 10월 17일 토요일', time:'오후 8:56'},
      {from:'me', text:'그냥 생각이 많아서ㅠ', date:'2026년 10월 17일 토요일', time:'오후 8:56'},
    ]},
      {from:'me', text:'이런 고민 하는 사람들이 많나? 너도 해봤잖아', date:'2026년 10월 17일 토요일', time:'오후 9:09'},
{from:'them', text:'별거 아냐', date:'2026년 10월 17일 토요일', time:'오후 9:21'},
{from:'them', text:'그리고 주현언니랑 너는 다르지 그런지 오래됐잖아', date:'2026년 10월 17일 토요일', time:'오후 9:21'},
      {from:'me', text:'지금 얘기중 언니 화장실 갔어', date:'2026년 10월 17일 토요일', time:'오후 9:43'},
      {from:'them', text:'언니가 뭐라는데?', date:'2026년 10월 17일 토요일', time:'오후 9:50'},     {from:'them', text:'고백했어?', date:'2026년 10월 17일 토요일', time:'오후 9:51'},
    {id:'3', name:'별이언니', profile:'', time:'오후 7:00', unread:1, messages:[
      {from:'them', text:'공연 잘 다녀와❤️', time:'어제'},
    ]},
  ],
  instagram: {
    main: {username:'hi_sseulgi', display:'슬기 Seulgi', bio:'끄적끄적 취미 공간 👀', followers:'1,198만', following:'25', profile:'assets/wallpaper.jpg', posts:[
      {image:'assets/wallpaper.jpg',caption:'첫 번째 게시물'},
      {image:'assets/wallpaper.jpg',caption:'두 번째 게시물'}
    ]},
    secret: {username:'xanxseul', display:'🔒', bio:'🐻', followers:'12', following:'13', profile:'assets/wallpaper.jpg', posts:[
      {image:'assets/wallpaper.jpg',caption:'비계 게시물. 자유롭게 수정해 줘.'}
    ]}
  }
};
