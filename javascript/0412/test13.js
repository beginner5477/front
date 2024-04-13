'use strict';

let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let text2 = '     ABC     BCABC    HJI    jadjsjd..... ABC... KBJQ... abc';

//length : 길이
//substring(): 특정 문자열 출력
//indexOf(): 해당문자열 검색 (인덱스번지값을 반환 없으면 -1)
//includes(): 문자열 포함 유무 true/false
//concat(): 문자열 결합
//slice(): 지정된 인덱스 위치부터 문자열가져오기
//trim(): 문자열 앞뒤의 공백 삭제
//replace(): 처음 발견한 자료만 치환
//replaceAll(): 모두 치환  필요
//toUpperCase(): 대문자로 변환
//toLowerCase(): 소문자로 변환
//charAt(): 문자열중 1개 문자 가져오기
//charCodeAt(): 지정된 인덱스번지의 영문자의 아스키 코드값을 가져옴
//split(): 지정된 문자를 기준으로 쪼개서 배열로 리턴해줌
//join(): 지정문자로 결합???

let str="01034910491039410934091409194019340913409134<br/>";
str += text1 + '<br/>';
str += text2 + '<br/><br/>';

str += text1.substring(5) + "<br/>";
str += text1.substring(5,10) + "<br/>";
str += text1.indexOf("abc") + "<br/>";
str += text1.slice(5) + "<br/>";
str += text1.slice(5,10) + "<br/>";
str += text2.replace('ABC','ppp') + "<br/>";
str += text2.replaceAll('ABC','ppp') + "<br/>";
str += text1.charAt(3) + "<br/>";
str += text1.charCodeAt(3) + "<br/>";

str += text1.substr(3,1) + "<br/>";

let tel = '010-1234-5678';
let tels = tel.split("-");
for(let tel of tels)
{
    console.log(tel);
}

demo.innerHTML = str;