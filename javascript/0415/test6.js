'use strict';
        class Member {
            // 필드명은 생략가능

            //생성자
            constructor(name, age, job)
            {
                this.name = name;
                this.age = age;
                this.job = job;
            }

            // 필드값의 읽기 쓰기
            //js에서 getter setter 쓰는 이유는 유효성 검사하려는 목적이 주됨.
            // 겟터로 얻어올때 변화주면 필드에 직접 접근시에 겟터가 개입하게 됨.
            get name() {
                return this._name;
            }
            get age() {
                return this._age - 1;
            }
            set name(name) {
                this._name = name;
            }
            set age(age) {
                if(age < 0)
                {
                    age = 0;
                }
                this._age = age;
            }
            get job() {
                return this._job;
            }
            set job(job) {
                if(job == "중학생"||job == "고등학생"||job == "대학생"||job == "초등학생")
                job = "학생";
                this._job = job;
            }
        }
        let member = new Member("김도완",5555,"대천사장");
        console.log(member);
        console.log(member.age);    
