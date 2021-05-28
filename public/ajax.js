//定义回调函数
function rollTheDice(fn) {
    setTimeout(() => {
        fn(parseInt(Math.random() * 6));
    }, 500);
    //return undefined;
}

//调用回调
rollTheDice(x => {
    console.log(x);
});