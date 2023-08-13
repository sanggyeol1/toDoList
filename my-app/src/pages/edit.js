import { useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Edit({postTitle, setPostTitle, postDate, setPostDate}){

    let {id} = useParams()
    let navigate = useNavigate()

    let changedTitle
    let changedDate
    return(
        <div className="postContainer">
            <h3><input onChange={(e)=>{changedTitle=e.target.value}} type="text" placeholder={postTitle[id]}/></h3>
            <p><input onChange={(e)=>{changedDate=e.target.value}} type="text" placeholder={postDate[id]}/></p>
            <p><input type="text" placeholder="상세내용"/></p>
            <Button onClick={()=>{ 
                let copy = [...postTitle]
                copy[id] = changedTitle
                setPostTitle(copy)

                let copy2 = [...postDate]
                copy2[id] = changedDate
                setPostDate(copy2)

                navigate('/')
             }}>완료</Button>
        </div>
    )
}


export default Edit