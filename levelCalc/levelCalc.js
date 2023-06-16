// HTML 초기 로드 완료 시 스크립트 불러옴
document.addEventListener("DOMContentLoaded", function() {
    // 사전 변수 선언
    var mobLvInput = document.getElementById("mobLv");
    var charLvInput = document.getElementById("charLv");
    var resultEle = document.getElementById("result");
    var select = document.getElementsByName("select");
    
    var selCheck = false; // 체크 여부 확인
    var dmgResult = -1;
    var expResult = -1;
    var mesoResult = -1;
    var calcMode;

    // 입력값 변동 시 실시간으로 계산 | calc라는 함수를 호출함
    mobLvInput.addEventListener("input", calc);
    charLvInput.addEventListener("input", calc);
    for (var i = 0; i < select.length; i ++) {
        select[i].addEventListener("change", calc);
    }

    // 계산식 함수
    function calc() {

        // 체크박스 확인
        selCheck = false;
        for ( var i = 0; i < select.length; i++ ) {
             if ( select[i].checked ) {
            calcMode = select[i].value;
            selCheck = true; // 체크 여부
            break;
           }
        }

        // 입력받은 레벨값을 숫자열로 재선언
        var mobLv = parseInt(mobLvInput.value);
        var charLv = parseInt(charLvInput.value);

        var lvCalc = charLv - mobLv; // 렙차 계산

        if (selCheck) {
            // 데미지
            if (calcMode === "damage") {
                switch(true) {
                    case lvCalc >= 5:
                        dmgResult = 120;
                        break;
                    case lvCalc == 4:
                        dmgResult = 118;
                        break;
                    case lvCalc == 3:
                        dmgResult = 116;
                        break;
                    case lvCalc == 2:
                        dmgResult = 114;
                        break;
                    case lvCalc == 1:
                        dmgResult = 112;
                        break;
                    case lvCalc == 0:
                        dmgResult = 110;
                        break;
                    case lvCalc == -1:
                        dmgResult = 105;
                        break;
                    case lvCalc == -2:
                        dmgResult = 100;
                        break;
                    case lvCalc == -3:
                        dmgResult = 95;
                        break;
                    case lvCalc == -4:
                        dmgResult = 90;
                        break;
                    case lvCalc == -5:
                        dmgResult = 87.5;
                        break;
                    case lvCalc == -6:
                        dmgResult = 85;
                        break;
                    case lvCalc == -7:
                        dmgResult = 82.5;
                        break;
                    case lvCalc == -8:
                        dmgResult = 80;
                        break;
                    case lvCalc == -9:
                        dmgResult = 77.5;
                        break;
                    case lvCalc == -10:
                        dmgResult = 75;
                        break;
                    case lvCalc == -11:
                        dmgResult = 72.5;
                        break;
                    case lvCalc == -12:
                        dmgResult = 70;
                        break;
                    case lvCalc == -13:
                        dmgResult = 67.5;
                        break;
                    case lvCalc == -14:
                        dmgResult = 65;
                        break;
                    case lvCalc == -15:
                        dmgResult = 62.5;
                        break;
                    case lvCalc == -16:
                        dmgResult = 60;
                        break;
                    case lvCalc == -17:
                        dmgResult = 57.5;
                        break;
                    case lvCalc == -18:
                        dmgResult = 55;
                        break;
                    case lvCalc == -19:
                        dmgResult = 52.5;
                        break;
                    case lvCalc == -20:
                        dmgResult = 50;
                        break;
                    case lvCalc == -21:
                        dmgResult = 47.5;
                        break;
                    case lvCalc == -22:
                        dmgResult = 45;
                        break;
                    case lvCalc == -23:
                        dmgResult = 42.5;
                        break;
                    case lvCalc == -24:
                        dmgResult = 40;
                        break;
                    case lvCalc == -25:
                        dmgResult = 37.5;
                        break;
                    case lvCalc == -26:
                        dmgResult = 35;
                        break;
                    case lvCalc == -27:
                        dmgResult = 32.5;
                        break;
                    case lvCalc == -28:
                        dmgResult = 30;
                        break;
                    case lvCalc == -29:
                        dmgResult = 27.5;
                        break;
                    case lvCalc == -30:
                        dmgResult = 25;
                        break;
                    case lvCalc == -31:
                        dmgResult = 22.5;
                        break;
                    case lvCalc == -32:
                        dmgResult = 20;
                        break;
                    case lvCalc == -33:
                        dmgResult = 17.5;
                        break;
                    case lvCalc == -34:
                        dmgResult = 15;
                        break;
                    case lvCalc == -35:
                        dmgResult = 12.5;
                        break;
                    case lvCalc == -36:
                        dmgResult = 10;
                        break;
                    case lvCalc == -37:
                        dmgResult = 7.5;
                        break;
                    case lvCalc == -38:
                        dmgResult = 5;
                        break;
                    case lvCalc == -39:
                        dmgResult = 2.5;
                        break;
                    case lvCalc <= -40:
                        dmgResult = 0;
                        break;
                    default:
                        dmgResult = -1;
                        break;
                }
                if (dmgResult == -1) {
                    resultEle.textContent = "레벨 입력 시 결과 출력";
                    // console.log(selCheck);
                } else {
                    resultEle.textContent = "최종 데미지: " + dmgResult + "%";
                }
                expResult = -1;
                mesoResult = -1;
            }

            // 경험치 40 이하는 고정 '100'만 획득함 | expResult = -11
            if (calcMode === "exp") {
                switch(true) {
                    case lvCalc >= 40:
                        expResult = 70;
                        break;
                    case lvCalc == 39:
                        expResult = 71;
                        break;
                    case lvCalc == 38:
                        expResult = 72;
                        break;
                    case lvCalc == 37:
                        expResult = 73;
                        break;
                    case lvCalc == 36:
                        expResult = 74;
                        break;
                    case lvCalc == 35:
                        expResult = 75;
                        break;
                    case lvCalc == 34:
                        expResult = 76;
                        break;
                    case lvCalc == 33:
                        expResult = 77;
                        break;
                    case lvCalc == 32:
                        expResult = 78;
                        break;
                    case lvCalc == 31:
                        expResult = 79;
                        break;
                    case lvCalc == 30:
                        expResult = 80;
                        break;
                    case lvCalc == 29:
                        expResult = 81;
                        break;
                    case lvCalc == 28:
                        expResult = 82;
                        break;
                    case lvCalc == 27:
                        expResult = 83;
                        break;
                    case lvCalc == 26:
                        expResult = 84;
                        break;
                    case lvCalc == 25:
                        expResult = 85;
                        break;
                    case lvCalc == 24:
                        expResult = 86;
                        break;
                    case lvCalc == 23:
                        expResult = 87;
                        break;
                    case lvCalc == 22:
                        expResult = 88;
                        break;
                    case lvCalc == 21:
                        expResult = 89;
                        break;
                    case lvCalc == 20 || lvCalc == 19:
                        expResult = 95;
                        break;
                    case lvCalc == 18 || lvCalc == 17:
                        expResult = 96;
                        break;
                    case lvCalc == 16 || lvCalc == 15:
                        expResult = 97;
                        break;
                    case lvCalc == 14 || lvCalc == 13:
                        expResult = 98;
                        break;
                    case lvCalc == 12 || lvCalc == 11:
                        expResult = 99;
                        break;
                    case lvCalc == 10:
                        expResult = 100;
                        break;
                    case lvCalc == 9 || lvCalc == 8 || lvCalc == 7 || lvCalc == 6 || lvCalc == 5:
                        expResult = 105;
                        break;
                    case lvCalc == 4 || lvCalc == 3 || lvCalc == 2:
                        expResult = 110;
                        break;
                    case lvCalc == 1 || lvCalc == 0 || lvCalc == -1:
                        expResult = 120;
                        break;
                    case lvCalc == -2 || lvCalc == -3 || lvCalc == -4:
                        expResult = 110;
                        break;
                    case lvCalc == -5 || lvCalc == -6 || lvCalc == -7 || lvCalc == -8 || lvCalc == -9:
                        expResult = 105;
                        break;
                    case lvCalc == -10:
                        expResult = 100;
                        break;
                    case lvCalc == -11:
                        expResult = 99;
                        break;
                    case lvCalc == -12:
                        expResult = 98;
                        break;
                    case lvCalc == -13:
                        expResult = 97;
                        break;
                    case lvCalc == -14:
                        expResult = 96;
                        break;
                    case lvCalc == -15:
                        expResult = 95;
                        break;
                    case lvCalc == -16:
                        expResult = 94;
                        break;
                    case lvCalc == -17:
                        expResult = 93;
                        break;
                    case lvCalc == -18:
                        expResult = 92;
                        break;
                    case lvCalc == -19:
                        expResult = 91;
                        break;
                    case lvCalc == -20:
                        expResult = 90;
                        break;
                    case lvCalc == -21:
                        expResult = 70;
                        break;
                    case lvCalc == -22:
                        expResult = 66;
                        break;
                    case lvCalc == -23:
                        expResult = 62;
                        break;
                    case lvCalc == -24:
                        expResult = 58;
                        break;
                    case lvCalc == -25:
                        expResult = 54;
                        break;
                    case lvCalc == -26:
                        expResult = 50;
                        break;
                    case lvCalc == -27:
                        expResult = 46;
                        break;
                    case lvCalc == -28:
                        expResult = 42;
                        break;
                    case lvCalc == -29:
                        expResult = 38;
                        break;
                    case lvCalc == -30:
                        expResult = 34;
                        break;
                    case lvCalc == -31:
                        expResult = 30;
                        break;
                    case lvCalc == -32:
                        expResult = 26;
                        break;
                    case lvCalc == -33:
                        expResult = 22;
                        break;
                    case lvCalc == -34:
                        expResult = 18;
                        break;
                    case lvCalc == -35:
                        expResult = 14;
                        break;
                    case lvCalc == -36 || lvCalc == -37 || lvCalc == -38 || lvCalc == -39:
                        expResult = 10;
                        break;
                    case lvCalc <= -40:
                        expResult = -11;
                        break;
                    default:
                        expResult = -1;
                        break;
                }
                if (expResult == -1) {
                    resultEle.textContent = "레벨 입력 시 결과 출력";
                    // console.log(selCheck);
                } else if (expResult == -11) {
                    resultEle.textContent = "40렙 이상은 100 고정";
                } else {
                    resultEle.textContent = "경험치 획득량: " + expResult + "%";
                }
                dmgResult = -1;
                mesoResult = -1;
            }

            // 메소
            if (calcMode === "meso") {
                switch(true) {
                    case lvCalc >= 30:
                        mesoResult = -100;
                        break;
                    case lvCalc == 29:
                        mesoResult = -97;
                        break;
                    case lvCalc == 28:
                        mesoResult = -84;
                        break;
                    case lvCalc == 27:
                        mesoResult = -76;
                        break;
                    case lvCalc == 26:
                        mesoResult = -65;
                        break;
                    case lvCalc == 25:
                        mesoResult = -55;
                        break;
                    case lvCalc == 24:
                        mesoResult = -46;
                        break;
                    case lvCalc == 23:
                        mesoResult = -38;
                        break;
                    case lvCalc == 22:
                        mesoResult = -31;
                        break;
                    case lvCalc == 21:
                        mesoResult = -25;
                        break;
                    case lvCalc == 20:
                        mesoResult = -20;
                        break;
                    case lvCalc == 19:
                        mesoResult = -18;
                        break;
                    case lvCalc == 18:
                        mesoResult = -16;
                        break;
                    case lvCalc == 17:
                        mesoResult = -14;
                        break;
                    case lvCalc == 16:
                        mesoResult = -12;
                        break;
                    case lvCalc == 15:
                        mesoResult = -10;
                        break;
                    case lvCalc == 14:
                        mesoResult = -8;
                        break;
                    case lvCalc == 13:
                        mesoResult = -6;
                        break;
                    case lvCalc == 12:
                        mesoResult = -4;
                        break;
                    case lvCalc == 11:
                        mesoResult = -2;
                        break;
                    case lvCalc == 10 || lvCalc == 9 || lvCalc == 8 || lvCalc == 7 || lvCalc == 6 || lvCalc == 5 || lvCalc == 4 || lvCalc == 3 || lvCalc == 2 || lvCalc == 1 || lvCalc == 0 || lvCalc == -1 || lvCalc == -2 || lvCalc == -3 || lvCalc == -4 || lvCalc == -5 || lvCalc == -6 || lvCalc == -7 || lvCalc == -8 || lvCalc == -9 || lvCalc == -10:
                        mesoResult = 0;
                        break;
                    case lvCalc == -11:
                        mesoResult = -3;
                        break;
                    case lvCalc == -12:
                        mesoResult = -6;
                        break;
                    case lvCalc == -13:
                        mesoResult = -9;
                        break;
                    case lvCalc == -14:
                        mesoResult = -12;
                        break;
                    case lvCalc == -15:
                        mesoResult = -15;
                        break;
                    case lvCalc == -16:
                        mesoResult = -18;
                        break;
                    case lvCalc == -17:
                        mesoResult = -21;
                        break;
                    case lvCalc == -18:
                        mesoResult = -24;
                        break;
                    case lvCalc == -19:
                        mesoResult = -27;
                        break;
                    case lvCalc == -20:
                        mesoResult = -30;
                        break;
                    case lvCalc == -21:
                        mesoResult = -35;
                        break;
                    case lvCalc == -22:
                        mesoResult = -40;
                        break;
                    case lvCalc == -23:
                        mesoResult = -45;
                        break;
                    case lvCalc == -24:
                        mesoResult = -50;
                        break;
                    case lvCalc == -25:
                        mesoResult = -55;
                        break;
                    case lvCalc == -26:
                        mesoResult = -60;
                        break;
                    case lvCalc == -27:
                        mesoResult = -65;
                        break;
                    case lvCalc == -28:
                        mesoResult = -70;
                        break;
                    case lvCalc == -29:
                        mesoResult = -75;
                        break;
                    case lvCalc == -30:
                        mesoResult = -80;
                        break;
                    case lvCalc == -31:
                        mesoResult = -85;
                        break;
                    case lvCalc == -32:
                        mesoResult = -90;
                        break;
                    case lvCalc == -33:
                        mesoResult = -95;
                        break;
                    case lvCalc <= -34:
                        mesoResult = -100;
                        break;
                    default:
                        mesoResult = -1;
                        break;
                }
                if (mesoResult == -1) {
                    resultEle.textContent = "레벨 입력 시 결과 출력";
                    // console.log(selCheck);
                } else {
                    resultEle.textContent = "메소 패널티: " + mesoResult + "%";
                }
                dmgResult = -1;
                expResult = -1;
            }
        } else if (!selCheck) {
            resultEle.textContent = "계산식 체크 확인";
        }
        // console.log("렙차" + lvCalc);
    }
});
