import React, { useState} from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Detail} from './pages/detail'
import Edit from './pages/edit';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import './App.css';

function App() {
  let navigate = useNavigate()
  let [postTitle, setPostTitle] = useState(['밥먹기','산책하기','데이트하기'])
  let [postDate, setPostDate] = useState(['1월1일','2월13일','3월1일'])
  let [write,setWrite] = useState(false)



  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">할일리스트</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">List</Nav.Link>
          <Nav.Link href="#features">Chat</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    
    <Routes>
      <Route path="/" element={<div>
        <h3 className='mt-2' style={{textAlign : 'center'}}>오늘할일</h3>
          {
            postTitle.map((a, i)=>{
              return(
                <div className='postContainer' key={i}>
                  <div onClick={()=>{
                    navigate("/detail/"+i)
                  }} className='postTitle'>{postTitle[i]}</div>
                  <div className='postDate'>{postDate[i]}</div>
                  <Button variant="danger" onClick={()=>{
                    let copy = [...postTitle]
                    copy.splice(i,1)
                    setPostTitle(copy)

                    let copy2 = [...postDate]
                    copy2.splice(i,1)
                    setPostDate(copy2)
                  }}>삭제</Button>    
                </div>
              )
            })
          }
      <Button className="writeBtn" variant="primary" onClick={()=>{
         if(write==false){
          setWrite(true)
        }else{
          setWrite(false)
        }
      }}>글쓰기</Button>

      {
        write == true ? 
        <Write postTitle={postTitle} setPostTitle={setPostTitle} setPostDate={setPostDate} postDate={postDate}/> : null
      }

      </div>}/>



      <Route path="/detail/:id" element={<Detail postTitle={postTitle} setPostTitle={setPostTitle} setPostDate={setPostDate} postDate={postDate}/>}/>
      <Route path="/edit/:id" element={<Edit postTitle={postTitle} setPostTitle={setPostTitle} setPostDate={setPostDate} postDate={postDate}/>}/>
    </Routes>

    </>
  );
}



function Write({postTitle, setPostTitle, postDate, setPostDate}){
  let 작성제목
  let 약속날짜

  return(
    <div className='writeBox'>
      <InputGroup size="lg" className="mb-3" onChange={(e)=>{
        작성제목 = e.target.value
      }}>
        <InputGroup.Text id="inputGroup-sizing-lg" >제목</InputGroup.Text>
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      <InputGroup className="mb-3" onChange={(e)=>{
        약속날짜 = e.target.value
      }}>
        <InputGroup.Text id="inputGroup-sizing-default">
          날짜
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>

      <Button onClick={()=>{

        if(작성제목!=null && 약속날짜!=null){
          let copy = [...postTitle]
          copy.push(작성제목)
          setPostTitle(copy)
  
          let copy2 = [...postDate]
          copy2.push(약속날짜)
          setPostDate(copy2)
        }else{
          
        }
        
      }} variant="outline-dark">글 발행</Button>
      
    </div>
    
  )
}


export default App;
