getDice.onclick = () => {
    const request = new XMLHttpRequest();

    request.open('GET', '/ajax.js');
    request.onload = () => {
        console.log(`request.response:\n${request.response}`);

        //创建script标签
        const javacript = document.createElement('script');
        //填写script内容
        javacript.innerHTML = request.response;
        //将script标签插入body
        document.body.appendChild(javacript);
    };

    request.onerror = () => {
        console.log('监听style.css失败！');
    };

    request.send();
};