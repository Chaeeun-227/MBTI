
let q = {
    1:{ "title" : "Q1. 누군가 마음에 들면 어떻게 해?", "type" : "EI", "A":"일단 친해지려고 다가가기!!", "B":"혼자 좋아하다 끝내..","img": "assets/images/p1.png"},

    2:{"title" : "Q2.소개팅 제안이 들어오면? ", "type" : "EI", "A":"재밌겠다! 일단 만나보자~", "B":"괜히 부담돼서 걍 안 나가…","img": "assets/images/p2.png"},

    3:{"title" : "Q3. 상대가 내 속마음을 못 알아챌 때는?", "type" : "EI", "A":"바로 말해서 오해 없게 풀어버림!", "B":"표현은 잘 못하지만 서운함...","img": "assets/images/p3.png"},

    4:{"title" : "Q4. 썸 타다가 연락이 하루 안 오면?", "type" : "SN", "A":"그냥 그런가 보다~ 하고 넘긴다.", "B":" 갑자기 차였나? 별 생각 다 들어…","img": "assets/images/p4.png"},

    5:{"title" : "Q5. 좋아하는 사람이 생기면?", "type" : "SN", "A":" 일단 지금 잘 지내는 게 중요하지.", "B":"벌써 연애하면 어떨까 상상부터 해버려..!","img": "assets/images/p5.png"},

    6:{"title" : "Q6. 연애가 안 되는 이유는?", "type" : "SN", "A":"현실적인 문제들에 자꾸 부딪히는 것 같아.", "B":"감정이 너무 요동쳐서 관계가 어려워...","img": "assets/images/p6.png"},

    7:{"title" : "Q7. 연애할 때 제일 중요한 건 뭐라고 생각해?", "type" : "TF", "A":"믿음이랑 책임감, 그게 기본이지.", "B":"서로 마음 잘 통하고 공감해주는 거!","img": "assets/images/p7.png"},

    8:{"title" : "Q8. 어색한 침묵이 흐르면?", "type" : "TF", "A":"굳이 말 안 해도 편하면 그게 좋은 거지.", "B":"뭐라도 말해야 할 것 같아서 막 떠듦.","img": "assets/images/p8.png"},

    9:{"title" : "Q9. 연애할 때 나는?", "type" : "TF", "A":"감정 표현이 잘 안 돼서 자꾸 맘만 숨김...", "B":"좋아하면 좋아한다고 자주 표현하는 편!","img": "assets/images/p9.png"},

    10:{"title" : "Q10. 연락이 늦었다고 하면?", "type" : "JP", "A":"미리 말했어야지! 연락은 기본 매너잖아.", "B":"바빴겠지~ 뭐 그럴 수도 있지.","img": "assets/images/p10.png"},

    11:{"title" : "Q11. 이별 후 나는?", "type" : "JP", "A":"슬퍼도 나름 정리하면서 이겨내.", "B":"머릿속 엉망 되고 한동안 멘붕임…","img": "assets/images/p11.png"},

    12:{"title" : "Q12. 데이트 약속 전날 밤엔?", "type" : "JP", "A":"전날부터 뭐 입을지, 어디 갈지 다 정리함!!", "B":"설레는데 귀찮기도 해..","img": "assets/images/p12.png"}
}

let result = {
    "ISTJ" : {"resultTitle":"<span style=color:#708090>ISTJ</span>", 

        "explain":"<span style=\"color:#FF7BA0;font-size:30px;font-size:30px\">“ 슬레이트 그레이의 정석연애 ”</span> <br>연애에도 매뉴얼이 있어야 안심되는 스타일<br>다 계획했는데 상대가 즉흥적이면 당황해버림. <br><br><br><br>#직진보단계획 #연애도절차대로 #현실중심",

        "img": "assets/images/ISTJ.png"},

    "ISFJ" : {"resultTitle":"<span style=color:#EFDCC1>ISFJ</span>",

         "explain":"<span style=\"color:#FF7BA0;font-size:30px\">“ 크림 베이지의 배려형 ”</span><br>상대를 먼저 생각하고 배려하지만, <br>나 자신은 자주 놓쳐버려요.너무 참다 서운해짐.<br><br><br><br>#배려왕 #속앓이전문 #착해서문제야",
         
         "img": "assets/images/ISFJ.png"},

    "INFJ" : {"resultTitle":"<span style=color:#B9AEDC>INFJ</span>",
        
        "explain":"<span style=\"color:#FF7BA0;font-size:30px\">“ 라벤더빛 내면형 연애 ”</span><br>진심으로 사랑하지만 표현이 어려워.<br>머릿속 시나리오와 현실은 늘 어긋나 있어요.<br><br><br><br>#감정시뮬레이터 #연애철학자 #속깊은사람",
        
        "img": "assets/images/INFJ.png"},

    "ISTP" : {"resultTitle":"<span style=color:#4682B4>ISTP</span>",

         "explain":"<span style=\"color:#FF7BA0;font-size:30px\">“ 스틸 블루의 무심한 감정 ”</span><br>관계에 크게 집착하지 않지만,<br> 상대는 그게 무심함으로 느껴질 수 있어요.<br><br><br><br>#무심한관심 #쿨한척진지 #혼자가편해",
         
         "img": "assets/images/ISTP.png"},

    "INTJ" : {"resultTitle":"<span style=color:#2F2F2F>INTJ</span>", 

        "explain":"<span style=\"color:#FF7BA0;font-size:30px\">“ 차콜 블랙의 전략적 연애 ”</span><br>연애도 전략적으로 접근하지만,<br>감정의 흐름에는 약해요. <br>감정 표현,진심 어려움.<br><br><br><br>#연애로직충 #쿨한척 #실은쑥스러움",
        
        "img": "assets/images/INTJ.png"},

    "ISFP" : {"resultTitle":"<span style=color:#E7BFB1>ISFP</span>", 

        "explain":"<span style=\"color:#FF7BA0;font-size:30px\">“ 더스티 핑크의 조용한 감성 ”</span><br>좋아하는 감정은 진짜 깊지만<br>표현하는 건 어려워요.<br>분위기와 감성에 약한 순정파.<br><br><br><br>#순정러 #눈치백단 #다가가줘",
        
        "img": "assets/images/ISFP.png"},

    "INFP" : {"resultTitle":"<span style=color:#F4AAB9>INFP</span>", 

        "explain":"<span style=\"color:#FF7BA0;font-size:30px\">“ 블러시 로즈의 상상 연애 ”</span><br>머릿속에선 이미 연애 중인데 <br>현실에선 말 한마디 못 꺼냄.<br>감정선이 너무 깊어요.<br><br><br><br>#혼자연애중 #상상은자유 #말못하는로맨티스트",
        
        "img": "assets/images/INFP.png"},

    "INTP" : {"resultTitle":"<span style=color:#6C7DAB>INTP</span>", 
        
        "explain":"<span style=\"color:#FF7BA0;font-size:30px\">“ 아이스 인디고의 논리적 연애 ”</span><br>감정보다는 논리가 먼저 움직이는 타입.<br>타이밍 놓치기 일쑤예요.<br><br><br><br>#머리로연애함 #감정처리딜레이 #표현약함",
        
        "img": "assets/images/INTP.png"},

    "ESTJ" : {"resultTitle":"<span style=color:#8B5E3C>ESTJ</span>", 
        
        "explain":"<span style=\"color:#FF7BA0;font-size:30px\">“ 어스 브라운의 목표 지향형 ”</span><br>연애도 목표와 책임이 중요하다고 생각해요. <br>명확한 관계, 불확실한 건 싫어요!<br><br><br><br>#연애리더십 #직설적인사랑 #계획형연애",
        
        "img": "assets/images/ESTJ.png"},

    "ESFJ" : {"resultTitle":"<span style=color:#FFB9CF>ESFJ</span>",
        
        "explain":"<span style=\"color:#FF7BA0;font-size:30px\">“ 소프트 핑크의 세심한 배려 ”</span><br>표현도 잘하고, 상대 기분도 잘 챙겨줘요. <br>하지만 너무 헌신적이면 지치기도 해요.<br><br><br><br>#애정폭발 #케어마스터 #다주는연애",
        
        "img": "assets/images/ESFJ.png"},

    "ENFJ" : {"resultTitle":"<span style=color:#D65A79>ENFJ</span>",
        
        "explain":"<span style=\"color:#FF7BA0;font-size:30px\">“ 로즈 레드의 헌신 연애 ”</span><br>배려심 깊고 헌신적인 연애를 해요. <br>하지만 상대가 그만큼 안 돌아오면<br>상처받기 쉬워요.<br><br><br><br>#연애리더 #희생형사랑 #기대금지",
        
        "img": "assets/images/ENFJ.png"},

    "ENTJ" : {"resultTitle":"<span style=color:#223A5E>ENTJ</span>",
        
        "explain":"<span style=\"color:#FF7BA0;font-size:30px\">“ 네이비 블루의 주도적 스타일 ”</span><br>열정 있고 추진력도 넘치지만, <br>감정 조절엔 미숙할 때가 있어요.<br>연애도 성과처럼 생각할 때가 있죠.<br><br><br><br>#사랑도목표 #연애에계획서 #표현은어색",
        
        "img": "assets/images/ENTJ.png"},

    "ESTP" : {"resultTitle":"<span style=color:#FF4D4D>ESTP</span>",
        
        "explain":"<span style=\"color:#FF7BA0;font-size:30px\">“ 비비드 레드의 즉흥 연애 ”</span><br>순간의 감정에 충실하고 즉흥적인 연애를 즐겨요. <br>다만 깊은 관계는 잘 안 이어질 수도.<br><br><br><br>#불도저연애 #직진스타일 #깊이보다속도",
        
        "img": "assets/images/ESTP.png"},

    "ESFP" : {"resultTitle":"<span style=color:#FFAD94>ESFP</span>",
        
        "explain":"<span style=\"color:#FF7BA0;font-size:30px\">“ 코랄 피치의 활기찬 감성 ”</span><br>감정표현이 능숙하고 매력도 넘치지만,<br>감정 기복도 커요. 사랑도 자유롭게 즐김.<br><br><br><br>#핫한감성 #감정롤러코스터 #사랑꾼",
        
        "img": "assets/images/ESFP.png"},

    "ENFP" : {"resultTitle":"<span style=color:#FF8855>ENFP</span>", 
        
        "explain":"<span style=\"color:#FF7BA0;font-size:30px\">“ 선셋 오렌지의 열정 연애 ”</span><br>새로운 사람과의 설렘을 즐기고 표현도 잘해요. <br>근데 감정이 너무 왔다갔다 할 때도.<br><br><br><br>#썸마스터 #열정과자유 #표현과다",
        
        "img": "assets/images/ENFP.png"},

    "ENTP" : {"resultTitle":"<span style=color:#>ENTP</span>",
        
        "explain":"<span style=\"color:#FF7BA0;font-size:30px\">“ 레몬 옐로우의 유쾌한 대화형 ”</span><br>대화 잘하고 매력적인데, <br>진심을 헷갈리게 만드는 <br>장난스러운 스타일.<br><br><br><br>#말빨장인 #웃다가혼나기 #애매한경계",
        
        "img": "assets/images/ENTP.png"},

}
function start(){
    $('.start').hide();
    $('.sub').show();
    $('.question').show();

    next();
}

let num=1;

$('#A').click(function(){
    let type = $("#type").val();
    let preValue =$("#"+type).val();
    $("#"+type).val(parseInt(preValue)+1)
    
    next();
})
$('#B').click(function(){
    next();
})

function next(){
    if(num==13){
        $(".question").hide();
        $('.result').show();
        let mbti = "";
        mbti += $("#EI").val() >2 ? "E" : "I";
        mbti += $("#SN").val() >2 ? "S" : "N";
        mbti += $("#TF").val() >2 ? "T" : "F";
        mbti += $("#JP").val() >2 ? "J" : "P";

       

        $("#result_img").attr("src",result[mbti]["img"])
        $("#resultTitle").html(result[mbti]["resultTitle"]);
        $('#explain').html(result[mbti]["explain"]);
    } else{
        $(".progress-bar").attr('style','width: calc(100/12*'+ num + '%)');
        $("#title").html(q[num]["title"]);
        $("#type").val(q[num]["type"]);
        $("#img").attr("src", q[num]["img"])
        
        console.log("EI:",$("#EI").val())
        console.log("SMN:",$("#SN").val())
        console.log("TF:",$("#TF").val())
        console.log("JP:",$("#JP").val())
        $("#A").html(q[num]["A"]);
        $("#B").html(q[num]["B"]);
        num++;
    }
}




