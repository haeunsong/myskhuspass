const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type:String,
    unique: true
    
  },
  password: {
    type: String,
    minlength: 5
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: {
    type: Number,
    default: 0
  },
  image: String,
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
})

// user정보를 저장하기 전에 하는 것
userSchema.pre('save', function (next) {

  // this = 위의 userSchema
  var user = this;

  // 다른 정보가 아닌 'password' 변경 시에만 이 과정을 거친다!!
  if (user.isModified('password')) {
    // 비밀번호를 암호화 시킨다.(bcrypt)
    // salt 생성
    bcrypt.genSalt(saltRounds, (err, salt) => {
      // next 하면 index.js 에서의 user.save로 바로 들어간다.
      if (err) return next(err);

      bcrypt.hash(user.password, salt, (err, hash) => {
        // hash 변수 => 암호화된 비밀번호
        if (err) return next(err);
        // 성공시 hash된 비번으로 바꿔준다.
        user.password = hash;
        next();

      })
    })
  } else {
    next();
  }
})

const User = mongoose.model('User', userSchema)

// 다른 곳에서도 사용하게 하려고.
module.exports = { User }