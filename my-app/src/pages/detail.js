import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

function Detail(props){
    let {id} = useParams()
    let navigate = useNavigate()
    let state = useSelector((state)=>{ return state })
    let dispatch = useDispatch()

    return(
        <div className="postContainer">
            <h3>{state.posts[id].title}</h3>
            <p>{state.posts[id].date}</p>
            <p>{state.posts[id].content}</p>
            <Button onClick={()=>{ navigate("/edit/"+id)}}>수정</Button>
        </div>
    )
}

export {Detail}