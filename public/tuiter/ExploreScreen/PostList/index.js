import PostItem from "./PostItem.js";
import posts from "./posts.js"
const PostList = () => {
    return (`
           <ul class="list-group">
           <li class="list-group-item justify-content-between pb-0">${PostItem(posts[0])}</li>
           <li class="list-group-item justify-content-between pb-0">${PostItem(posts[1])}</li>
           </ul>
`); }

export default PostList;