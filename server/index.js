var express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 5000;

const config = require('./config/key');
// user model 가져오기
const { User } = require("./models/User");

// bodyParser에 옵션주기
// bodyParser: client에서 오는 정보를 서버에서 분석할 수 있게 해주는 것

// application/x-www-form-urlencoded 분석할 수 있게 해줌.
app.use(bodyParser.urlencoded({ extended: true }));

// application/json 분석할 수 있게 해줌.
app.use(bodyParser.json());

const mongoose = require('mongoose');

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

  app.get('/', (req, res) => res.send('Hello world!! '))

  app.get('/greet', (req, res) =>
  res.send({ greeting: 'Hello haeun, Be happy :)' })
);

app.post('/register', (req, res) => {
  // 회원가입 할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 db에 넣어준다.
  const user = new User(req.body)
  // 이 사이에서 비번 암호화 => bcrypt 과정
  user.save((err, userInfo) => {
    if (err) {
      return res.json({ success: false, err })
    }
    // 성공하면
    return res.status(200).json({
      success: true
    })
  })


})

app.listen(port,()=>console.log(`Listening on port ${port}`));
