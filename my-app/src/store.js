import { configureStore, createSlice } from "@reduxjs/toolkit";
import { isDocument } from "@testing-library/user-event/dist/utils";

let posts = createSlice({
  name : 'posts',
  initialState : [
    {id : 0, title : '밥먹기', date : '1월1일', content : '첫번째 글임' },
    {id : 1, title : '산책하기', date : '2월11일', content : '두번째 글임' },
    {id : 2, title : '코딩하기', date : '11월13일', content : '세번째 글임' }
  ],
  reducers : {
    addPosts(state, action){
      state.push(action.payload)
    },
    deletePosts(state, action){
      state.splice(action.payload, 1)
    },
  }
})

export let { addPosts, deletePosts } = posts.actions


let write = createSlice({
  name : 'write',
  initialState : { value : false },
  reducers : {
    setWrite(state){
      
      if(state.value == false){
        state.value = true
      }else{
        state.value = false
      }

      
    }
  }
})

export let { setWrite }  = write.actions


// let [postTitle, setPostTitle] = useState([)
//   let [postDate, setPostDate] = useState(['1월1일','2월13일','3월1일'])
//   let [postDetail, setPostDetail] = useState(['1번상세내용임 밥 맛있게먹기','2번상세내용임 산책 맛있게 하기','3번 상세내용임 데이트 하기'])
//   let [write,setWrite] = useState(false)

export default configureStore({
  reducer: { 
    posts : posts.reducer,
    write : write.reducer
  }
}) 
