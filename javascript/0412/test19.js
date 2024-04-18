// test19.js(정규식 연습)
'use strict';

function regexCheck() {
  // 정규표현식변수를 미리 만들어 놓고 수행시켜준다.
  const regex1 = /atom/gm;  // 'atom'이라는 문자열이 포함되어 있으면 'true', 없으면 'false'반환
  const regex2 = /(123)/g;
  const regex3 = /홍길(동|순)/g;
  const regex4 = /[^a-z]/g;
  const regex5 = /^하이용$/g;
  const regex6 = /[^가-힣a-zA-Zㄱ-ㅎㅏ-ㅣ]/g;
  const regex7 = /[^a-zA-Z0-9|!@#$%^&*()_+~`]/g;
  const regex21 = /(^\.)/g;

  let content = document.getElementById("content").value.trim();

  if(content == "") {
    alert("문자열을 입력하세요");
    return false;
  } 

  // if(!content.match(regex1)) alert("본문에 atom문자열을 포함하고 있지 않습니다.");
  if(content.match(regex2)) alert("본문에 mbc,kbs,sbs 포함하고 있습니다.");
  // if(!content.match(regex3)) alert("본문에 홍길(동/순) 포함하고 있지 않습니다.");
  // if(content.match(regex4)) alert("본문에 영문소문자가 아닌 문자를 포함하고 있습니다.");
  // if(regex4.test(content)) alert("본문에 영문소문자가 아닌 문자를 포함하고 있습니다.");
  // if(!regex5.test(content)) alert("본문이 하이용으로 구성되어 있지 않습니다.");
  // if(regex6.test(content)) alert("본문에 영문자 완전한글로 구성되지 않았습니다.");
  // if(regex7.test(content)) alert("삐빅");
  // if(regex21.test(content)) alert("삐빅");
  else {
    alert("자료가 잘 입력되었습니다. 통과~~~");
    // location.href = "서버로 전송..." url?변수=값&변수2=값2......;
    // myform.submit();
  }
  document.getElementById("content").focus();
}