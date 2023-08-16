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
            <h3><input onChange={(e)=>{changedTitle=e.target.value}} type="text" /></h3>
            <p><input onChange={(e)=>{changedDate=e.target.value}} type="text" /></p>
            <p><input onChange={(e)=>{changedDetail=e.target.value}} type="text" /></p>
            <Button onClick={()=>{ 
                
             }}>완료</Button>
        </div>
    )
}


export default Edit