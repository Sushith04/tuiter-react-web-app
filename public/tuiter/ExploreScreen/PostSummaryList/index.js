import PostSummaryItem from "./PostSummaryItem.js";
import post from "./posts.js"

const PostSummaryList = () => {
    return (`
    <ul class="list-group">
    <li class="list-group-item d-flex justify-content-between pb-0">${PostSummaryItem(post[0])}</li>
    <li class="list-group-item d-flex justify-content-between pb-0">${PostSummaryItem(post[1])}</li>
    <li class="list-group-item d-flex justify-content-between pb-0">${PostSummaryItem(post[2])}</li>
    <li class="list-group-item d-flex justify-content-between pb-0">${PostSummaryItem(post[3])}</li>
    </ul>
`);
}

export default PostSummaryList;