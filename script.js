/* ============ IMAGE FILE MAP ============ */
const IMG = {
  1:'1.JPG',2:'2.JPG',3:'3.JPG',4:'4.JPG',5:'5.JPG',6:'6.JPG',7:'7.JPG',8:'8.JPG',
  9:'9.jpeg',10:'10.png',11:'11.jpg',12:'12.jpg',13:'13.jpg',14:'14.jpg',15:'15.jpeg',
  16:'16.JPG',17:'17.JPG',18:'18.JPG',19:'19.jpeg',20:'20.JPG',21:'21.JPG',22:'22.JPG',
  23:'23.JPG',24:'24.JPG',25:'25.JPEG',26:'26.JPG',27:'27.JPG',28:'28.JPG',29:'29.JPG',
  30:'30.JPG',31:'31.JPG'
};
function src(n){ return 'assets/' + IMG[n]; }
function img(n, cls){
  return `<div class="photo-frame ${cls}"><img src="${src(n)}" alt="photo ${n}"
    onerror="this.parentElement.innerHTML='<div class=photo-missing style=display:flex;align-items:center;justify-content:center;height:100%;text-align:center;padding:10px;font-family:Quicksand,sans-serif;color:#b23a5c;background:linear-gradient(135deg,#ffe3ec,#ffd6e8)>💌<br>photo ${n}<br>coming soon</div>'"></div>`;
}
/* curved arrow helper */
function arrow(top,left,w,h,rotate,flip){
  const f = flip ? 'scaleX(-1)' : '';
  return `<svg class="arrow-svg" style="top:${top};left:${left};width:${w}px;height:${h}px;transform:rotate(${rotate}deg) ${f};" viewBox="0 0 140 90">
    <path d="M8,78 Q70,-15 132,45" stroke="#ffe1ea" stroke-width="10" fill="none" stroke-linecap="round"/>
    <path d="M8,78 Q70,-15 132,45" stroke="#e63970" stroke-width="5" fill="none" stroke-linecap="round" marker-end="url(#ah)"/>
  </svg>`;
}

/* ============ SLIDE DATA ============ */
const SLIDES = [
{ // 1
  font:'f1', bg:'bg1', transition:'fade',
  html:`<div class="stage">
    ${img(16,'portrait frame-heart')}
    <div class="caption-card f1"><p>I'm sorry for making you angry, hurting your feelings, and upsetting you. I know I'm not perfect, but I will always try to become the perfect guy you want me to be.</p></div>
  </div>`
},
{ // 2
  font:'f2', bg:'bg2', transition:'rise',
  html:`<div class="stage">
    <div style="position:relative;display:flex;gap:1rem;align-items:center;">
      ${img(1,'small frame-tape')}
      ${img(12,'portrait frame-heart')}
      ${arrow('62%','-6%',150,95,-8,false)}
    </div>
    <div class="caption-card f2"><p>iim uzesgelentei minii naiz ohin udur bur harsan ch gerel gereltdeg, udur bur durladag, yaj iim uzesgelentei ohiniig uuriin bolgoj chadsan ym boloo gej urgelj gaihdag 💗</p></div>
  </div>`
},
{ // 3
  font:'f3', bg:'bg3', transition:'wipe',
  html:`<div class="stage reverse">
    ${img(3,'portrait frame-teddy')}
    ${arrow('30%','-8%',150,100,20,true)}
    <div class="caption-card f3"><p>airtai ohintoigoo uulzsan anhnii udur baihaa, uulzhaas umnu sandarj baisan ch cool vibetai ohintoi hamt baigaad ehelsen chn cool boltson shd 😜</p></div>
  </div>`
},
{ // 4
  font:'f4', bg:'bg4', transition:'pop',
  html:`<div class="stage">
    ${img(4,'portrait frame-heart')}
    <div class="caption-card f4"><p>egeed l ter udruus hoish udur bolgon hamt baihiig husdeg bolson doo, anh udaa manaid irsen ter uyd tseverhen baisan ch geree dahiad neg tsembiitel tseverleej avaad naiz ohiniigoo urisan daa. bas l evguu sanagduulhvii gej aimar aij hurhees ch hair hurdeg baisan 💞</p></div>
  </div>`
},
{ // 5
  font:'f5', bg:'bg5', transition:'drift',
  html:`<div class="stage">
    <div style="position:relative;">${img(18,'square frame-tape')}${arrow('-14%','30%',130,80,120,false)}</div>
    <div class="caption-card f5"><p>tegeed l fucking long distance ghde, still naiz ohinoo hairlaad ym hun avchih geel guriideg baisan.</p></div>
    <div style="position:relative;">${img(19,'landscape frame-ribbon')}${arrow('-16%','-6%',130,80,-120,true)}</div>
  </div>`
},
{ // 6
  font:'f6', bg:'bg6', transition:'sleek',
  html:`<div class="stage">
    <div style="position:relative;">${img(20,'portrait frame-heart')}${arrow('70%','62%',140,90,45,false)}</div>
    <div class="caption-card f6"><p>ajil hiichiheed uuruu hool avj idehees umnu naiz ohindoo tsetseg avj ughiig husdeg 😜</p></div>
    <div style="position:relative;">${img(13,'portrait frame-tape')}${arrow('70%','-4%',140,90,135,true)}</div>
  </div>`
},
{ // 7 - title / reunion banner
  font:'f7', bg:'bg7', transition:'fun',
  html:`<div class="title-banner">
    <div class="confetti">
      <span style="top:10%;left:12%;animation-delay:.1s;">💗</span>
      <span style="top:18%;left:80%;animation-delay:.3s;">🧸</span>
      <span style="top:70%;left:15%;animation-delay:.5s;">💞</span>
      <span style="top:75%;left:78%;animation-delay:.2s;">✨</span>
      <span style="top:40%;left:6%;animation-delay:.6s;">💖</span>
      <span style="top:44%;left:90%;animation-delay:.4s;">🎀</span>
    </div>
    <h2 class="f7">tegeed l fucking long distance duusaj ehnerteigee uulzsaa yeaayyy 🥹💗</h2>
  </div>`
},
{ // 8
  font:'f8', bg:'bg8', transition:'fade',
  html:`<div class="stage reverse">
    ${img(5,'portrait frame-heart')}
    ${arrow('35%','-8%',150,100,15,true)}
    <div class="caption-card f8"><p>bid 2 iig muulval ingej l harna 👀💗</p></div>
  </div>`
},
{ // 9
  font:'f9', bg:'bg9', transition:'rise',
  html:`<div class="stage">
    ${img(7,'portrait frame-teddy')}
    ${arrow('40%','-8%',150,100,-10,false)}
    <div class="caption-card f9"><p>bid 2 bol diva, bid 2oos busad n mia, bid 2 mog busad n hog 💅✨</p></div>
  </div>`
},
{ // 10
  font:'f10', bg:'bg10', transition:'wipe',
  html:`<div class="stage reverse">
    ${img(14,'landscape frame-ribbon')}
    ${arrow('30%','-6%',150,90,25,true)}
    <div class="caption-card f10"><p>If we played football, we would probably be the most professional players. ⚽💗</p></div>
  </div>`
},
{ // 11
  font:'f11', bg:'bg11', transition:'pop',
  html:`<div class="stage">
    ${img(6,'landscape frame-heart')}
    ${arrow('80%','60%',150,90,50,false)}
    <div class="caption-card f11"><p>2 months anniversaryyyy, but Mrs. Egshiglen forgot that day and is trying to make it up afterward 😅💗</p></div>
  </div>`
},
{ // 12
  font:'f12', bg:'bg12', transition:'drift',
  html:`<div class="stage reverse">
    ${img(11,'portrait frame-tape')}
    ${arrow('35%','-8%',150,95,18,true)}
    <div class="caption-card f12"><p>gehdee l bi ehnertei buh zuilees iluu hairtaiioo 💍💗</p></div>
  </div>`
},
{ // 13
  font:'f13', bg:'bg13', transition:'sleek',
  html:`<div class="stage">
    <div style="position:relative;">${img(17,'portrait frame-heart')}${arrow('68%','62%',140,90,45,false)}</div>
    <div class="caption-card f13"><p>iim innocent tsaraitai murtluu freaky baisan ch 🙈💗</p></div>
    <div style="position:relative;">${img(15,'landscape frame-teddy')}${arrow('68%','-4%',140,90,135,true)}</div>
  </div>`
},
{ // 14
  font:'f14', bg:'bg14', transition:'fun',
  html:`<div class="stage">
    <div style="position:relative;">${img(21,'portrait frame-tape')}${arrow('70%','62%',140,90,45,false)}</div>
    <div class="caption-card f14"><p>iim muuhai aristai baisan ch 🙊</p></div>
    <div style="position:relative;">${img(23,'portrait frame-ribbon')}${arrow('70%','-4%',140,90,135,true)}</div>
  </div>`
},
{ // 15
  font:'f15', bg:'bg15', transition:'fade',
  html:`<div class="stage">
    <div style="position:relative;">${img(22,'portrait frame-heart')}${arrow('70%','62%',140,90,45,false)}</div>
    <div class="caption-card f15"><p>iim tsarai muutai, us n segsger baisan ch 😵‍💫</p></div>
    <div style="position:relative;">${img(24,'portrait frame-tape')}${arrow('70%','-4%',140,90,135,true)}</div>
  </div>`
},
{ // 16
  font:'f16', bg:'bg16', transition:'rise',
  html:`<div class="stage">
    ${img(25,'portrait frame-heart')}
    ${arrow('35%','-8%',150,95,15,true)}
    <div class="caption-card f16"><p>iim targan baisan ch 🍔💗</p></div>
  </div>`
},
{ // 17
  font:'f17', bg:'bg17', transition:'wipe',
  html:`<div class="stage reverse">
    ${img(26,'portrait frame-teddy')}
    ${arrow('30%','-8%',150,95,20,true)}
    <div class="caption-card f17 tiny"><p>namaig iim boltol uiluulj baisan...<br><br>iim boltol uiluuldag ch 😢😢😢😢😢😢</p></div>
  </div>`
},
{ // 18 - kiss animation
  font:'f18', bg:'bg18', transition:'pop',
  html:`<div class="kiss-wrap">
    <div class="kiss-photo-main"><img src="${src(8)}" alt="photo 8"></div>
    <div class="kiss-photo-mover"><img src="${src(2)}" alt="photo 2"></div>
    <div style="position:absolute;bottom:6%;left:6%;max-width:60vw;">
      <div class="caption-card f18"><p>chi bol minii huvid iim joohnooroo hairtai ohin baih bolno. uchir n... 💋</p></div>
    </div>
  </div>`
},
{ // 19
  font:'f19', bg:'bg19', transition:'drift',
  html:`<div class="stage">
    ${img(30,'portrait frame-heart')}
    ${arrow('30%','-8%',150,95,15,true)}
    <div class="caption-card f19"><p>chi bol minii hamgiin hairtai ohin, nadad uur busad ohin yamar ch hamaagui, minii nudend zuvhun chi l haragddag, chamtai baihad delhiid chi bid 2oos uur hun baihgui ym shig sanagddag 💗</p></div>
  </div>`
},
{ // 20
  font:'f20', bg:'bg20', transition:'sleek',
  html:`<div class="stage reverse">
    ${img(31,'portrait frame-ribbon')}
    ${arrow('35%','-8%',150,95,18,true)}
    <div class="caption-card f20"><p>chi bol minii hamgiin hundeldeg ohin, chamaig alhuulhiig ch husdeggui, buh gazar n urguj yvaad urguj taviad hooliig n hurtel halbagdaj iduulmeer sanagddag 🥹</p></div>
  </div>`
},
{ // 21
  font:'f21', bg:'bg21', transition:'fun',
  html:`<div class="stage">
    ${img(29,'portrait frame-heart')}
    ${arrow('35%','-8%',150,95,15,true)}
    <div class="caption-card f21"><p>chi bol minii hamgiin sain cool naiz, chamtai yug ch yarij boldog, chamtai buh galzuu zuilsiig hamt hiij ineeldej huurj yvhiig husdeg 😄💗</p></div>
  </div>`
},
{ // 22
  font:'f22', bg:'bg22', transition:'fade',
  html:`<div class="stage reverse">
    ${img(28,'portrait frame-tape')}
    ${arrow('35%','-8%',150,95,18,true)}
    <div class="caption-card f22"><p>chi bol minii egch eej, chamtai setgel sanaanii asuudlaa yarihad nadad tusalj demjdeg. chi bol minii uvchin namdaagch, setgeld baigaa bugiig avaad yvchihdag hetsuu ym bolhod chamd l tevruuleed hevtej baimaar sanagddag, ymar ch physical uvchin chamd huruulehed unsuulehed edgechih ym shig l sanagddag 🥺💗</p></div>
  </div>`
},
{ // 23 - big finale letter
  font:'f23', bg:'bg23', transition:'rise',
  html:`<div class="stage">
    ${img(27,'portrait frame-heart')}
    ${arrow('20%','-8%',150,95,10,true)}
    <div class="caption-card tiny" style="max-width:44ch;"><p class="f23">Finally, you are the best girlfriend I could ever have. I dream of making you my wife in the future. I imagine waking up with you every day, cleaning our home together, taking you to work, picking you up after work, going on dates, traveling around the world, and even when we fight, I'll still cook for you and wait for you. I can't wait for the day we move out and live together. Until then, I will keep working hard and make you the happiest girl.<br><br>I'm always grateful that I met you. Sometimes I wonder, who would I even be without you?<br><br>I love you so much. Like I always say, I'm ready to jump into fire for you. I love you so much that if my soul left my body, I would run to you first and get caught haha. I love you so much that if we were dying of thirst in the desert, I would give you the last drop of water. I love you so much that if we were crossing a road, I would protect you and take the hit first.<br><br>My love for you is bigger than this universe, greater than every grain of sand in the desert, deeper than the ocean, and hotter than the sun.<br><br>I love you so much. 💗</p></div>
  </div>`
},
{ // 24 - final apology, picture 16 again
  font:'f24', bg:'bg24', transition:'wipe',
  html:`<div class="stage reverse">
    ${img(16,'portrait frame-heart')}
    ${arrow('20%','-8%',150,95,15,true)}
    <div class="caption-card tiny" style="max-width:44ch;"><p class="f24">chi min namaig medne shuudee, namaig yamar tenegiig, namaig chamaig yamar ih haramldgiig, namaig ymar muuhai aashtaig. I truly want to fix all of those things and become someone perfect for you, from the bottom of my heart.<br><br>Thank you for understanding me, loving me, and respecting me even when I'm like this. I really hope we can stay like this forever.<br><br>I'm sorry if until now I have made you angry, hurt you, made you tired, or broken your heart. I'm truly, deeply sorry.<br><br>I love you so, so much. 💗🥹</p></div>
  </div>`
}
];

/* ============ BUILD DECK ============ */
const slidesContainer = document.getElementById('slides');
const TRANSITIONS = ['fade','wipe','pop','rise','drift','sleek','fun'];
SLIDES.forEach((s,i)=>{
  const el = document.createElement('div');
  el.className = 'slide';
  el.innerHTML = `<div class="bgpattern"></div>${s.html}`;
  el.classList.add(s.bg);
  slidesContainer.appendChild(el);
});
const slideEls = Array.from(slidesContainer.children);
let currentIndex = 0;
let animating = false;
slideEls[0].classList.add('active');
slideEls[0].style.zIndex = 5;

document.getElementById('pageTotal').textContent = SLIDES.length;
function updateUI(){
  document.getElementById('pageNum').textContent = currentIndex+1;
  document.getElementById('prevBtn').disabled = currentIndex===0;
  document.getElementById('nextBtn').disabled = currentIndex===SLIDES.length-1;
}
updateUI();

function applyEnterStart(el,type,dir){
  el.style.transition='none';
  let tf='none', op=0;
  switch(type){
    case 'fade': tf='none'; break;
    case 'wipe': tf = dir==='next' ? 'translateX(100%)' : 'translateX(-100%)'; op=1; break;
    case 'pop': tf='scale(.55)'; break;
    case 'rise': tf='translateY(90px)'; break;
    case 'drift': tf=(dir==='next'?'translateX(70px)':'translateX(-70px)')+' rotate(4deg)'; break;
    case 'sleek': tf='skewX(-10deg) translateX('+(dir==='next'?'90px':'-90px')+')'; break;
    case 'fun': tf='rotate(-10deg) scale(.6)'; break;
  }
  el.style.transform = tf;
  el.style.opacity = op;
}
function applyExitEnd(el,type,dir){
  let tf='none';
  switch(type){
    case 'fade': tf='none'; break;
    case 'wipe': tf = dir==='next' ? 'translateX(-100%)' : 'translateX(100%)'; break;
    case 'pop': tf='scale(.55)'; break;
    case 'rise': tf='translateY(-90px)'; break;
    case 'drift': tf=(dir==='next'?'translateX(-70px)':'translateX(70px)')+' rotate(-4deg)'; break;
    case 'sleek': tf='skewX(10deg) translateX('+(dir==='next'?'-90px':'90px')+')'; break;
    case 'fun': tf='rotate(10deg) scale(.6)'; break;
  }
  el.style.transform = tf;
  el.style.opacity = 0;
}

function goTo(newIndex,dir){
  if(animating || newIndex<0 || newIndex>=SLIDES.length || newIndex===currentIndex) return;
  animating = true;
  const curEl = slideEls[currentIndex];
  const nxtEl = slideEls[newIndex];
  const nxtType = SLIDES[newIndex].transition;
  const curType = SLIDES[currentIndex].transition;

  nxtEl.style.zIndex = 5;
  curEl.style.zIndex = 4;
  nxtEl.style.pointerEvents = 'none';

  applyEnterStart(nxtEl, nxtType, dir);
  void nxtEl.offsetWidth; // reflow

  requestAnimationFrame(()=>{
    nxtEl.style.transition = 'transform .9s cubic-bezier(.22,.9,.3,1), opacity .9s ease';
    curEl.style.transition = 'transform .9s cubic-bezier(.22,.9,.3,1), opacity .9s ease';
    nxtEl.classList.add('active');
    nxtEl.style.opacity = 1;
    nxtEl.style.transform = 'none';
    applyExitEnd(curEl, curType, dir);
  });

  setTimeout(()=>{
    curEl.classList.remove('active');
    curEl.style.pointerEvents = 'none';
    curEl.style.transition = 'none';
    nxtEl.style.pointerEvents = 'auto';
    currentIndex = newIndex;
    animating = false;
    updateUI();
  }, 950);
}

document.getElementById('nextBtn').addEventListener('click', ()=>goTo(currentIndex+1,'next'));
document.getElementById('prevBtn').addEventListener('click', ()=>goTo(currentIndex-1,'prev'));
document.addEventListener('keydown', (e)=>{
  if(document.getElementById('deck').classList.contains('hidden')) return;
  if(e.key==='ArrowRight') goTo(currentIndex+1,'next');
  if(e.key==='ArrowLeft') goTo(currentIndex-1,'prev');
});

/* ============ PASSCODE GATE ============ */
const PASSCODE = '0427';
const input = document.getElementById('passcodeInput');
const unlockBtn = document.getElementById('unlockBtn');
const hintBtn = document.getElementById('hintBtn');
const hintText = document.getElementById('hintText');
const errorMsg = document.getElementById('errorMsg');

hintBtn.addEventListener('click', ()=>{
  hintText.classList.toggle('show');
});
function tryUnlock(){
  if(input.value.trim() === PASSCODE){
    document.getElementById('passcode-screen').style.transition = 'opacity .6s ease';
    document.getElementById('passcode-screen').style.opacity = 0;
    setTimeout(()=>{
      document.getElementById('passcode-screen').style.display='none';
      document.getElementById('deck').classList.remove('hidden');
    },600);
  } else {
    errorMsg.textContent = "hmm, that's not quite it... try again 💗";
    input.value='';
    input.focus();
  }
}
unlockBtn.addEventListener('click', tryUnlock);
input.addEventListener('keydown', (e)=>{ if(e.key==='Enter') tryUnlock(); });
input.addEventListener('input', ()=>{ input.value = input.value.replace(/[^0-9]/g,'').slice(0,4); });

/* falling hearts on lock screen */
const heartfall = document.querySelector('.heartfall');
for(let i=0;i<18;i++){
  const s = document.createElement('span');
  s.textContent = ['💗','💕','💖','🧸'][Math.floor(Math.random()*4)];
  s.style.left = Math.random()*100+'%';
  s.style.animationDuration = (6+Math.random()*8)+'s';
  s.style.animationDelay = (Math.random()*8)+'s';
  s.style.fontSize = (1+Math.random()*1.4)+'rem';
  heartfall.appendChild(s);
}

/* ambient floating hearts across whole app */
const ambient = document.getElementById('ambientHearts');
for(let i=0;i<14;i++){
  const s = document.createElement('span');
  s.textContent = ['💗','💕','💖','✨'][Math.floor(Math.random()*4)];
  s.style.left = Math.random()*100+'%';
  s.style.animationDuration = (10+Math.random()*10)+'s';
  s.style.animationDelay = (Math.random()*12)+'s';
  s.style.fontSize = (0.9+Math.random()*1.2)+'rem';
  ambient.appendChild(s);
}
