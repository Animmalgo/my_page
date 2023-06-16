// 일부 활용 변수
var nav = false;

// id, pw 입력 및 로그인 버튼
function login() {
    document.getElementById("log_id");
    document.getElementById("log_pw");

    var input_id = log_id.value;
    var input_pw = log_pw.value;

    if ( input_id == "cat" && input_pw == "1234" ) {
        alert("로그인 성공");
        document.getElementById("login_input").innerHTML = input_id + "회원님 반갑습니다.";
    } else {
        alert("로그인 실패");
    }
}

// 회원가입 창으로 이동
function register() {
    location.href = "reg_member.html";
}

// 회원가입 완료 버튼
function reg_conf() {

    // 회원가입 폼
    document.getElementById("reg_form");

    // 입력값 선언
    var r_input_id = reg_id.value; // 아이디
    var r_input_pw = reg_pw.value; // 비밀번호
    var r_input_pw_re = reg_pw_re.value; // 비밀번호 확인
    var r_input_name = reg_name.value; // 이름

    // 성별 확인
    var ip_gender = document.getElementsByName("gender");

    // ip_gender.length[0] = 첫 번째 체크? [1]이면 두 번째 체크를 확인?
    for ( i = 0; i < ip_gender.length; i = i + 1 ) {
        if ( ip_gender[i].checked == true ) {
            gender = ip_gender[i].value;
            cl(gender) // 임시 확인용
        }
    }
    
    // 입력값 유효성 검사
    var suc = true; // 메시지창 중복 방지

    if ( r_input_id.length < 6 && suc == true ) {
        alert("아이디는 최소 6자리 이상 입력해야 합니다.");
        cl("id 길이 부적합");
        suc = false;
    } else {
        cl("id 길이 적합");
    }

    if ( r_input_pw.length < 6 && suc == true ) {
        alert("비밀번호는 최소 6자리 이상 입력해야 합니다.");
        cl("pw 길이 부적합");
        suc = false;
    } else if ( suc == true ) {
        cl("pw 길이 적합");
    }

    if ( r_input_pw_re.length < 6 && suc == true ) {
        alert("비밀번호 확인은 최소 6자리 이상 입력해야 합니다.");
        cl("pw_re 길이 부적합");
        suc = false;
    } else if ( suc == true ) {
        cl("pw_re 길이 적합");
    }

    if ( r_input_name.length < 2 && suc == true ) {
        alert("이름은 최소 2자리 이상 입력해야 합니다.");
        cl("이름 길이 부적합");
        suc = false;
    } else if ( suc == true ) {
        cl("이름 길이 적합");
    }

    if ( r_input_pw !== r_input_pw_re && suc == true ) {
        alert("비밀번호 확인을 알맞게 입력해주세요.");
        cl("비밀번호 확인 일치 여부 부적합");
        suc = false;
    } else if ( suc == true ) {
        cl("비밀번호 확인 일치 여부 적합");
    }

    // 회원가입 완료
    if ( suc == true ) {
        alert("회원가입 성공!");
        nav = true;
        location.href = "index.html";
        return nav;
    }
}

// 디지털 시계
window.onload = function() {
    const clock = document.querySelector("#clock");

// padStart를 통해 2자릿수로 만듦, "0"을 통해 앞에 0을 붙이게 됨
// padStart는 String일 때 사용이 가능해서 String 값으로 변환하였음
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${min}:${sec}`;
}

getClock(); // 브라우저 최초 로딩 시 1초 딜레이 방지
setInterval(getClock, 1000); // 1초마다 갱신되게
}

// 렙반감
function levCalc() {
    location.href = "levelCalc/levelCalc.html";
}
