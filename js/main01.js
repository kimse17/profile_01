//한 줄 주석문
/*여러줄 주석문 */


const header = document.querySelector(".header");
const headerReact = header.getBoundingClientRect();
const headerHeight = headerReact.height;
//const headerHeight = header.getBoundingClientRect().height; 가능. //

document.addEventListener("scroll", Function())
{
    console.log(window.scrollY);
    if (window.scrollY > headerHeight) { header.classList.add("header-dark"); }
    else { header.classList.remove("header-dark") }
}





{
    console.log(window.scrollY);
    if (window.scrollY > headerHeight) { header.classList.add("header-dark"); }
    else { header.classList.remove("header-dark") }
}

const aa = document.querySelector(".about_content")//".about_content"--변화시키고 싶은 부분 불러오기//
document.addEventListener('scroll', function () {


    console.log(window.scrollY);

    if (window.scrollY > 350) {

        aa.classList.add('about-01');//"aa"--변수값설정, 이후 common에 가서 opacity 설정//

    } else {

        aa.classList.remove('about-01');

    }

})


/*1. header 클래스를 추출하여 변수 header에 보관합니다.
2. 변수 header(header 클래스)의 가로, 세로 길이 값을 headerRect 변수에 보관합니다.
3. headerRect 변수 값에서 높이 값(height) 값만 headerHeight 변수에 보관합니다.
4. 마우스를 스크롤하면 function() 아래를 실행합니다. (중괄호 안에 내용)
5. 만약 화면(window)의 y축(scrollY) 값이 header의 높이 값 보다 크면 중괄호 안에는 실행합니다.
6. 조건이 만족되면 (header 높이 보다 사용자가 마우스 스크롤 값이 더 크면)
  header에 header-dark 클래스를 추가합니다.
7. 조건이 불만족이면
  header에 header-dark 클래스를 삭제합니다.*/




