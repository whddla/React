import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className='header-member'>
        <div className='logo'>
            <a href="/">
                <img src="https://img.etoday.co.kr/pto_db/2019/04/600/20190407100254_1317721_860_392.png" alt=""/>
            </a>
        </div>
        <div className='addr'>
            <input type="text" placeholder='주소입력'/>
            <button>주소검색</button>
        </div>
        <div className='login'>
            <a href="/member/login">로그인</a>
            <a href="/member/signup">회원가입</a>
        </div>
    </div>
  )
}

export default Header