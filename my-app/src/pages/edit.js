import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { addPosts, deletePosts, editPosts } from "../store";
import { useDispatch, useSelector } from 'react-redux'

function Edit(props){

    let {id} = useParams()
    let navigate = useNavigate()
    let state = useSelector((state)=>{ return state })
    let dispatch = useDispatch()

    let changedTitle
    let changedDate
    let changedDetail
    return(
        <div className="postContainer">
            <h3><input onChange={(e)=>{changedTitle=e.target.value}} type="text" /></h3>
            <p><input onChange={(e)=>{changedDate=e.target.value}} type="text" /></p>
            <p><input onChange={(e)=>{changedDetail=e.target.value}} type="text" /></p>
            <Button onClick={()=>{ 
                dispatch(editPosts({
                   id : state.posts[id].id,
                   title : changedTitle,
                   date : changedDate,
                   content : changedDetail
                }))
                navigate(-1)
            }}>완료</Button>
        </div>
    )
}


export default Edit