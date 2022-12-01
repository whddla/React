import React from 'react'
import "./Board.css"
const Board = () => {
  return (
    <div class="board-wrap">
        <div class="admin">
            <div><h3>공지사항</h3></div>
            <div class="admin-board">
                <a href="">
                    <span>[공지]가입하세요.</span>
                </a>
                <span>2022/11/12</span>
            </div>
            <div class="admin-board">
                <a href="">
                    <span>[공지]가입하세요.</span>
                </a>
                <span>2022/11/12</span>
            </div>
            <div class="admin-board">
                <a href="">
                    <span>[공지]가입하세요.</span>
                </a>
                <span>2022/11/12</span>
            </div>
        </div>
        <div class="user">
            <div><h3>유저게시판</h3></div>
            <div class="user-board">
                <a href="">
                    <span>안녕하세요</span>
                </a>
                <span>2022/11/12</span>
            </div>
            <div class="user-board">
                <a href="">
                    <span>안녕하세요</span>
                </a>
                <span>2022/11/12</span>
            </div>
            <div class="user-board">
                <a href="">
                    <span>안녕하세요</span>
                </a>
                <span>2022/11/12</span>
            </div>
        </div>
    </div>
  )
}

export default Board