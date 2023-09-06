import React, { useState} from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Detail} from './pages/detail'
import List from "./pages/list"
import Edit from './pages/edit';
import Login from './pages/login'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FloatingLabel from 'react-bootstrap/FloatingLabel';import { useDispatch, useSelector } from 'react-redux'
import { addPosts, deletePosts, setWrite } from './store';
import { useParams } from "react-router-dom"
import './App.css';

function App() {
  let state = useSelector((state)=>{ return state })
  let dispatch = useDispatch()
  let navigate = useNavigate()
  
  // let [write,setWrite] = useState(false)



  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">미리알림</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#features">Chat</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
        
      </Container>
    </Navbar>

    
    
    <Routes>

    <Route path="/" element={<List/>}/>


      <Route path="/todo" element={<div>
        <h3 className='mt-2' style={{textAlign : 'center'}}>할일</h3>
          {
            state.posts.map((a, i)=>{
              return(
                <div className='postContainer' key={i}>
                  <div onClick={()=>{
                    navigate("/detail/"+i)
                  }} className='postTitle'> {state.posts[i].title} 
                  </div>
                  <div> { state.posts[i].date } </div>
                  <div> { state.posts[i].id } </div>
                  
                  <Button onClick={()=>{
                    dispatch(deletePosts(state.posts[i].id))
                  }}>삭제</Button>
                </div>
              )
            })
          }
       <Button className="writeBtn" variant="primary" onClick={()=>{
         dispatch(setWrite())
      }}>글쓰기</Button>

      {
        state.write.value == true ? 
        <Write/> : null
      }

      </div>}/>

      <Route path="/login" element={<Login/>}/>
      <Route path="/detail/:id" element={<Detail/>}/>
      <Route path="/edit/:id" element={<Edit/>}/>


    </Routes>

    </>
  );
}

let 글번호 = 3
function Write(){
  let 작성제목
  let 약속날짜
  let 상세내용
  let state = useSelector((state)=>{ return state })
  let dispatch = useDispatch()
 


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
     
      
      <FloatingLabel controlId="floatingTextarea2" label="상세내용" onChange={(e)=>{
        상세내용 = e.target.value
      }}>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel><br/> 

      
      <Button onClick={()=>{
        dispatch(addPosts({
          id : 글번호++, 
          title : 작성제목,
          date : 약속날짜,
          content : 상세내용
        }))

        dispatch(setWrite())

        
      }}>글발행</Button>
      <br/><br/><br/><br/><br/><br/><br/>
      
    </div>
    
  )
}


export default App;