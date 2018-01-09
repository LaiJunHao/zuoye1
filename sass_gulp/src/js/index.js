/* 
* @Author: Marte
* @Date:   2018-01-03 15:09:42
* @Last Modified by:   Marte
* @Last Modified time: 2018-01-06 10:15:10
*/

(function(){
    let focus = document.querySelector('.focus');
             let ul = focus.querySelector('ul');

             // 把第一张复制到最后
             ul.appendChild(ul.children[0].cloneNode(true));

             let len = ul.children.length;//5

             // 索引值
             let index = 0;

             let imgWidth = focus.clientWidth;

             // 1）设置ul宽度，达到水平排列的效果
             ul.style.width = imgWidth*len + 'px';


             // 生成页码
             let page = document.createElement('div');
             page.classList.add('page');
             for(let i=1;i<len;i++){
                let span = document.createElement('span');
                span.innerText = i;
                if(i===1){
                    span.classList.add('active');
                }
                page.appendChild(span);
             }
             focus.appendChild(page);

            // 2）水平轮播效果
            /*
                index       left
                0           0
                1           -810
                2           -1620
                3           -2430

                推导公式：left = index*width
             */
            let timer = setInterval(autoPlay,1000);


            // 鼠标移入移出
            focus.onmouseenter = ()=>{
                clearInterval(timer);
            }

            focus.onmouseleave = ()=>{
                timer = setInterval(autoPlay,1000);
            }

            focus.onclick = e=>{
                if(e.target.parentNode.className === 'page'){
                    // 把index改成当前页码对应的索引值
                    index = e.target.innerText-1;

                    show();
                }
            }

            function autoPlay(){
                index++;

                show();
            }

            function show(){
                if(index>=len){//0,1,2,3,4
                    ul.style.left = 0;
                    index = 1;
                }
                animate(ul,{left:-index*imgWidth});

                // 页码高亮
                // 先清除所有高亮
                for(var i=0;i<len-1;i++){
                    page.children[i].className = '';
                }

                if(index==len-1){
                    page.children[0].classList.add('active')
                }else{
                    page.children[index].classList.add('active');
                }
            }

    var endDate = '2018-11-24 10:21:56';

    var endTime = Date.parse(endDate);

    var daojishi =document.getElementsByClassName('xsqggoodswz')[0];

    var daojishi1 =document.getElementsByClassName('xsqggoodswz1')[0];

    var daojishi2 =document.getElementsByClassName('xsqggoodswz2')[0];

    var daojishi3 =document.getElementsByClassName('xsqggoodswz3')[0];

    showTime();

    var timer1 = setInterval(showTime,1000);

    function showTime(){

        var now = Date.now();

        var offset = Math.floor((endTime - now)/1000);

        if(offset <=0){

            clearInterval(timer1);
        };

        var secLeft = offset%60;

        var minLeft = Math.floor(offset/60)%60;

        var hourLeft = Math.floor(offset/60/60);

        secLeft = secLeft<10 ? '0'+secLeft : secLeft;

        minLeft = minLeft<10 ? '0'+minLeft : minLeft;

        hourLeft = hourLeft<10 ? '0'+hourLeft : hourLeft;

        daojishi.innerHTML = `剩余 <span>${hourLeft}</span> 时 <span>${minLeft}</span> 分 <span>${secLeft}</span> 秒`;

        daojishi1.innerHTML = `剩余 <span>${hourLeft}</span> 时 <span>${minLeft}</span> 分 <span>${secLeft}</span> 秒`;

        daojishi2.innerHTML =`剩余 <span>${hourLeft}</span> 时 <span>${minLeft}</span> 分 <span>${secLeft}</span> 秒`;

        daojishi3.innerHTML = `剩余 <span>${hourLeft}</span> 时 <span>${minLeft}</span> 分 <span>${secLeft}</span> 秒`;
    }

    var xsqggoodsul = document.querySelector('.xsqggoods ul');

    console.log(xsqggoodsul);

    var status = [200,304]

    var xhr = new XMLHttpRequest();

    xhr.onload = ()=>{

        if(status.includes(xhr.status)){

            var res = JSON.parse(xhr.responseText);

            var ul = document.createElement('ul')

            ul.innerHTML = res.map(item = ()=>{

                return `
                    <li data-id=${item.id}>

                        <a>
                            <p class="xsqggoodswz"></p>
                            
                            <img src="${item.imgurl}"> 

                            <p>${item.text}</p>

                            <p>${item.price}<p>
                        </a>
                    </li>
                    `
            }).join('');

            xsqggoods.appendChild(ul);
        }
    }

    xhr.open('get','http://localhost:1234/sass_gulp/src/api/goods.php');

    xhr.send();
})();