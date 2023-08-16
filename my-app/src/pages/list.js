import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { addTitle } from '../store';

function List(props){
    let dispatch = useDispatch()
    let state = useSelector((state)=>{ return state })
    let navigate = useNavigate()
    let [list, setList] = useState(['오늘','예정','전체','깃발표시','완료됨', '기타'])
    let listIcon = [
        "https://img.icons8.com/?size=512&id=23&format=png",
        "https://img.icons8.com/?size=512&id=23&format=png",
        "https://img.icons8.com/?size=1x&id=11353&format=png",
        "https://img.icons8.com/?size=1x&id=2754&format=png",
        "https://img.icons8.com/?size=1x&id=11697&format=png",
        "https://img.icons8.com/?size=512&id=12581&format=png"
    ]

    return(
        <>
        <InputGroup className="mb-3 search-box">
            <Form.Control
            placeholder="🔎 검색"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
            검색
            </Button>
        </InputGroup>
        <div className="listBox">
        {
            list.map((a, i)=>{
                return(
                    <div className='box'>
                        <div>
                            <div style={{display : 'flex', justifyContent : 'space-between'}}>
                                <img src={listIcon[i]}/>
                                <div><h2>2</h2></div>
                            </div>
                            <div>{list[i]}</div>
                        </div>
                    </div>
                )
            })
        }
            
        </div>

        <div style={{margin : '25px'}}>
        <h3>나의 목록</h3>
        <div className='my-box' style={{display : 'flex', justifyContent : 'space-between'}} onClick={()=>{
            navigate('/todo')
        }}>
            <div>
            <img src="https://img.icons8.com/?size=512&id=12581&format=png" width={'30px'}/> <strong> 할일 </strong>  
            </div>
            <div><h2> {state.posts.length}> </h2></div></div>
        </div>
        </>
    )
}

export default List