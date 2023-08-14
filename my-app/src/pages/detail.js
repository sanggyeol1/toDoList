import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Detail(props){
    let {id} = useParams()
    let navigate = useNavigate()

    return(
        <div className="postContainer">
            <h3>{props.postTitle[id]}</h3>
            <p>{props.postDate[id]}</p>
            <p>{props.postDetail[id]}</p>
            <Button onClick={()=>{ navigate("/edit/"+id)}}>수정</Button>
        </div>
    )
}

export {Detail}