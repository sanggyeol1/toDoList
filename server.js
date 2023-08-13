const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'my-app/build')));

app.listen(8080, function () {
  console.log('listening on 8080')
}); 


app.get('/',(요청, 응답)=>{
    응답.sendFile(path.join(__dirname, '/my-app/build/index.html'))
})

app.get('/cat',(요청, 응답)=>{
    응답.send('fdfㅗㅗf')
})


//리액트로 라우팅 다 해놓았을 때 서버 하단에 추가
app.get('*', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/my-app/build/index.html'));
});