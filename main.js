(() => {
  'use strict';
  const S = window.STORY;
  const $ = id => document.getElementById(id);
  if (!S) { document.body.insertAdjacentHTML('beforeend','<p style="color:red">story-data.js 파일을 확인하세요.</p>'); return; }
  const txt = (node, value) => { node.textContent = String(value ?? ''); return node; };
  let current='lock';
  const sections = [...document.querySelectorAll('.view')];
  function show(id) {
    if (!$(id)) return;
    sections.forEach(el => el.classList.toggle('active', el.id === id));
    current=id;
    $('darken').style.display = (id==='lock'||id==='home')?'block':'none';
    $('wall').style.display = (id==='lock'||id==='home')?'block':'none';
    document.querySelector('.status').style.color=(id==='lock'||id==='home')?'white':'#101215';
    if(id==='phone'||id==='messages'||id==='safari'||id==='photos'||id==='notes'||id==='music') $(id).querySelector('.content')?.scrollTo(0,0);
  }
  function renderTime() {
    const now=new Date(), v=S.liveClock;
    const time=v?`${now.getHours()}:${String(now.getMinutes()).padStart(2,'0')}`:S.lockTime;
    const days=['일','월','화','수','목','금','토'];
    const date=v?`${now.getMonth()+1}월 ${now.getDate()}일 (${days[now.getDay()]})`:S.lockDate;
    txt($('statusTime'),time);txt($('lockTime'),time);txt($('lockDate'),date);
    txt($('widgetDate'),date);txt($('widgetTime'),time);txt($('battery'),S.battery);
  }
  function avatar(name, profile) {const div=document.createElement('div');div.className='avatar';if(profile){const img=document.createElement('img');img.src=profile;img.alt='프로필';div.append(img)}else txt(div,String(name||'●').slice(0,2));return div;}
  function renderCalls(){const target=$('calls');target.replaceChildren();(S.calls||[]).forEach(call=>{
    const row=document.createElement('div');row.className='item';row.appendChild(avatar(call.avatar||call.name,call.profile));
    const info=document.createElement('div');info.className='iteminfo';const strong=document.createElement('strong');txt(strong,call.name);if(call.type==='부재중')strong.style.color='#ef4444';const sub=document.createElement('div');sub.className='sub';txt(sub,`${call.type==='발신'?'↗':call.type==='수신'?'↙':'↘'} ${call.detail||'휴대전화'}`);info.append(strong,sub);
    const time=document.createElement('span');time.className='time';txt(time,call.time);const phone=document.createElement('button');phone.className='circlecall';phone.type='button';phone.textContent='☎';phone.title='스토리 모형: 실제 발신 안 함';phone.onclick=()=>alert('이 전화는 소설용 기록입니다. 실제 통화는 연결되지 않습니다.');row.append(info,time,phone);target.append(row);
  });}
  function renderConversations(){const list=$('conversationList');list.replaceChildren();let count=0;(S.conversations||[]).forEach((room,i)=>{
    count+=(room.unread||0);const row=document.createElement('button');row.className='item';row.type='button';row.appendChild(avatar(room.avatar||room.name,room.profile));const info=document.createElement('div');info.className='iteminfo';const name=document.createElement('strong');txt(name,room.name);const last=(room.messages||[]).at(-1);const sub=document.createElement('div');sub.className='sub';txt(sub,last?.text||'');info.append(name,sub);const end=document.createElement('div');end.style.textAlign='right';const time=document.createElement('span');time.className='time';txt(time,room.time);end.append(time);if(room.unread){let badge=document.createElement('div');badge.style.cssText='background:#2f82ff;color:white;border-radius:13px;margin:5px 0 0 auto;padding:2px 8px;width:max-content;font-size:12px';txt(badge,room.unread);end.append(badge)}row.append(info,end);row.onclick=()=>openConversation(i);list.append(row);
  });$('messageBadge').textContent=count||'';$('messageBadge').hidden=!count;}
  function appendChatDate(container, label, kind){if(!label)return;const line=document.createElement('div');line.className='chat-date-separator '+kind;const span=document.createElement('span');txt(span,kind==='kakao-date'?label+' ›':label);line.append(span);container.append(line);}
  function openConversation(i){const room=S.conversations[i];txt($('conversationTitle'),room.name);const body=$('messageBubbles');body.replaceChildren();let lastDate=null;(room.messages||[]).forEach(msg=>{const date=msg.date??room.date??'';if(date!==lastDate){appendChatDate(body,date,'imessage-date');lastDate=date;}const el=document.createElement('div');el.className='bubble '+(msg.from==='me'?'mine':'theirs');const line=document.createElement('div');txt(line,msg.text);const time=document.createElement('small');txt(time,msg.time||'');el.append(line,time);body.append(el);});show('conversation');requestAnimationFrame(()=>body.scrollTop=body.scrollHeight);}
  function renderGoogle(){const list=$('googleQueries');list.replaceChildren();(S.googleSearches||[]).forEach(g=>{const row=document.createElement('div');row.className='query';const clock=document.createElement('span');clock.style.color='#aaa';clock.textContent='◷';const name=document.createElement('span');txt(name,g.query);const x=document.createElement('button');x.textContent='×';x.title='화면 장식 (편집은 story-data.js에서)';row.append(clock,name,x);list.append(row);});}
  function renderPhotos(){const grid=$('photosGrid');grid.replaceChildren();(S.photos||[]).forEach((p,i)=>{const btn=document.createElement('button');const img=document.createElement('img');img.src=p.path;img.alt=p.caption||`사진 ${i+1}`;btn.append(img);btn.onclick=()=>{const full=$('photoFull');full.src=p.path;txt($('photoTitle'),p.caption||'사진');txt($('photoDate'),p.date||'');show('photoDetail');};grid.append(btn);});}
  function renderNotes(){const list=$('noteList');list.replaceChildren();(S.notes||[]).forEach(n=>{const item=document.createElement('div');item.className='note';const title=document.createElement('strong');txt(title,n.title);const date=document.createElement('div');date.className='sub';txt(date,n.date);const para=document.createElement('p');txt(para,n.body);item.append(title,date,para);list.append(item);});}
  $('wall').style.backgroundImage=`url(${JSON.stringify(S.wallpaper||'assets/wallpaper.jpg')})`;
  renderTime();if(S.liveClock)setInterval(renderTime,30000);renderCalls();renderConversations();renderGoogle();renderPhotos();renderNotes();

  function renderKakao(){const list=$('kakaoRooms');list.replaceChildren();(S.kakaoRooms||[]).forEach((r,i)=>{const btn=document.createElement('button');btn.className='kakao-room';btn.append(avatar(r.name,r.profile));const body=document.createElement('div');body.className='iteminfo';const title=document.createElement('strong');txt(title,r.name);const desc=document.createElement('div');desc.className='sub';txt(desc,r.messages?.at(-1)?.text||'');body.append(title,desc);const right=document.createElement('div');right.style.cssText='display:flex;flex-direction:column;align-items:end;gap:9px';const time=document.createElement('span');time.className='time';txt(time,r.time||'');right.append(time);if(r.unread){const n=document.createElement('span');n.className='unread';txt(n,r.unread);right.append(n)}btn.append(body,right);btn.onclick=()=>openKakao(i);list.append(btn)})}
  function openKakao(i){const r=S.kakaoRooms[i];txt($('kakaoTitle'),r.name);const list=$('kakaoMessages');list.replaceChildren();let lastDate=null;(r.messages||[]).forEach(m=>{const date=m.date??r.date??'';if(date!==lastDate){appendChatDate(list,date,'kakao-date');lastDate=date;}const row=document.createElement('div');row.className='kakao-msg '+(m.from==='me'?'me':'them');if(m.from!=='me')row.append(avatar(r.name,r.profile));const body=document.createElement('div');body.className='msgbody';if(m.from!=='me'){const sender=document.createElement('span');sender.className='sender';txt(sender,r.name);body.append(sender)}const bubble=document.createElement('div');bubble.className='kakaobubble';txt(bubble,m.text);const time=document.createElement('small');txt(time,m.time||'');body.append(bubble,time);row.append(body);list.append(row)});show('kakaoDetail');requestAnimationFrame(()=>list.scrollTop=list.scrollHeight)}
  let instaAccount='main';function renderInsta(){const i=S.instagram?.[instaAccount];if(!i)return;txt($('instaHandle'),i.username);txt($('instaDisplay'),i.display);txt($('instaBio'),i.bio);txt($('instaFollowers'),i.followers);txt($('instaFollowing'),i.following);txt($('instaPostsCount'),i.posts?.length||0);$('instaProfileImg').src=i.profile||'assets/instagram.jpg';const grid=$('instaGrid');grid.replaceChildren();(i.posts||[]).forEach((post)=>{const btn=document.createElement('button');const img=document.createElement('img');img.src=post.image;img.alt=post.caption||'게시물';btn.append(img);btn.onclick=()=>{$('instaPostImg').src=post.image;txt($('instaPostCaption'),post.caption);show('instaPost')};grid.append(btn)})}
  let lastTap=0;let tapTimer;const av=$('instaAvatar');av.addEventListener('click',()=>{const now=Date.now();if(now-lastTap<420){instaAccount=instaAccount==='main'?'secret':'main';renderInsta();lastTap=0;clearTimeout(tapTimer)}else lastTap=now});av.addEventListener('dblclick',e=>{e.preventDefault();if(lastTap!==0){instaAccount=instaAccount==='main'?'secret':'main';renderInsta();lastTap=0}});
  renderKakao();renderInsta();
  // 간단한 터치 잠금 해제: 탭하거나 위로 스와이프
  let startY=0;$('lock').addEventListener('touchstart',e=>{startY=e.touches[0]?.clientY||0},{passive:true});$('lock').addEventListener('touchend',e=>{const y=e.changedTouches[0]?.clientY||0;if(startY-y>35)show('home')},{passive:true});
  $('lock').addEventListener('click',e=>{if(e.target.closest('button'))return;show('home')});
  document.querySelectorAll('[data-open]').forEach(el=>el.addEventListener('click',()=>show(el.dataset.open)));
  document.querySelectorAll('[data-home]').forEach(el=>el.addEventListener('click',()=>show('home')));
  // 카메라 앱 버튼은 disabled. 어떤 카메라 클릭 이벤트도 등록하지 않음.
  $('flashlight').addEventListener('click',()=>{});
  $('callEdit').addEventListener('click',()=>alert('이름과 통화기록은 story-data.js의 calls에서 수정하세요.'));
  $('msgEdit').addEventListener('click',()=>alert('문자는 story-data.js의 conversations에서 수정하세요.'));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'||e.key==='Backspace'&&e.target.tagName!=='INPUT'){if(current==='conversation')show('messages');else if(current==='photoDetail')show('photos');else if(current!=='lock')show('home');}});
})();
