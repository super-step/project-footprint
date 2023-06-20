/*
node index.js

npm(https://www.npmjs.com/)
필요한 툴이 있으면 다운받아 쓸 수 있음
어떤 프레임워크나 자바스크립트로 구현된 다양한 것들을 npm 에서 다운받아 쓸 수 있음

npm init
내가 설치한 모듈 정리
package.json 파일 생성됨
모듈설치하면 package-lock.json이 생성되고
package.json에서 설치한 모듈을 볼수 있음
package.json 은 내용을 대략적으로 확인이 가능하고
package-lock.json 은 내용을 상세하게 확인이 가능하다.
node_modules 폴더도 생성됨 -> 설치한 모듈이 다 기록됨

figlet 모듈을 삭제하려면?
npm uninstall figlet
*/

var figlet = require("figlet");

figlet("FootPrint", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
