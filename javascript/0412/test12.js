'use strict';

let arr1 = [
    "문자자료",
    5,
    [2,4,5,6],
    {tel : '010-1234-5678'},
    function() {console.log("안녕하세요");}
];

console.log(arr1[2]);
console.log(arr1[4]);
arr1.push(25);
console.log(arr1);
console.log("=======================");

let arr2 = new Array();
arr2[0] = '감자';
arr2[1] = 15;
arr2[2] = [1,3,4,5,6];
arr2[3] = {name:'감자'};
arr2[4] = function() {console.log("감사합니다");};
arr2.push(25);

console.log(arr2);
console.log();

//배열 join메소드 문자로 각 요소 구분해서 꺼내줌 문자열로 리턴
let str1 = arr2.join("-");
console.log(str1);
console.log(typeof(str1));
console.log();

arr2.forEach((data,i) => {
    console.log(data,i);
});
console.log();
arr2.map((data,i) => console.log(data, i));
console.log();

//걸러내기 filter()
arr2.filter(function(data,i) {
    console.log(data, i);
});
console.log();

//filter는 조건을 지정한 추출이 가능함
//짝수번 인덱스 자료만 가져오기
arr2.filter((data,i)=> i % 2 == 0).map((data)=>{console.log(data);});

//홀수번 인덱스만 가져오기
let res1 = arr2.filter((data,i)=> i % 2 != 0);
console.log(res1);

let arr3 = [10, 8, 6, 33, 77, 47, 32];
console.log(arr3);
arr3.forEach((data,i) => console.log(data,i));

//오름차순정렬: sort();
let res3 = arr3.sort();
console.log(res3);
res3.forEach((data,i) => console.log(i, data));

//sort((a,b)=> ㅁ); ㅁ 부분이 양수이면 내림차순이고 반대는 오름차순임 현실적으로 그리고 그리스도 수직선마냥 a < b 상태임
res3 = arr3.sort((a,b) => a-b);   //즉 이건 오름차순으로 나옴
console.log(res3);

//배열을 역순으로 리턴해주고 원본자체도 뒤집어버림: reverse();
let res4 = arr3.reverse();
console.log(res4);
console.log(arr3);

res4.forEach((data,i)=> {
    console.log(data,i);
});

//최대 최소 max(), min()
let max = Math.max(10,30,40,13,10,30,50);
console.log(max);
let min = Math.min(10,30,40,13,10,30,50);
console.log(min);
console.log("");

let max2 = Math.max(...arr3);
console.log(max2);