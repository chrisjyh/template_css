window.onload = function () {
    // 버튼 선택자
    const btn = document.querySelectorAll('.btn');
    const side_nav = document.getElementById('side_nav')
    
    // 버튼 클릭함수 버튼일때 전부 여기서 실행
    btn.forEach((target) => target.addEventListener('click', function(){ 
        let parent_this = this;
        temp = parent_this.className.split(' ')
        // 버거 클릭할때
        if(temp.includes('burger')){
            parent_this.classList.toggle('clicked');
            side_nav.classList.toggle('show');
        }


     }));


}

