import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Edit(props){

    let {id} = useParams()
    let navigate = useNavigate()

    let changedTitle
    let changedDate
    let changedDetail
    return(
        <div className="postContainer">
            <h3><input onChange={(e)=>{changedTitle=e.target.value}} type="text" placeholder={props.postTitle[id]}/></h3>
            <p><input onChange={(e)=>{changedDate=e.target.value}} type="text" placeholder={props.postDate[id]}/></p>
            <p><input onChange={(e)=>{changedDetail=e.target.value}} type="text" placeholder={props.postDetail[id]}/></p>
            <Button onClick={()=>{ 
                let copy = [...props.postTitle]
                copy[id] = changedTitle
                props.setPostTitle(copy)

                let copy2 = [...props.postDate]
                copy2[id] = changedDate
                props.setPostDate(copy2)

                let copy3 = [...props.postDetail]
                copy3[id] = changedDetail
                props.setPostDetail(copy3)

                navigate('/')
             }}>완료</Button>
        </div>
    )
}


export default Edit