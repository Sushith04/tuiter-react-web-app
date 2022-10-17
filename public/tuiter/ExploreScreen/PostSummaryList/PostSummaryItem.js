const PostSummaryItem = (post) => {
    return (`
                
                    <p><span class="text-secondary">${post['topic']}</span><br/>
                        <span class="fw-bold">${post['userName']}</span><span class="ps-1 text-secondary"><i
                                class="fa fa-check-circle text-white"></i> - ${post['time']}</span><br/>
                        <span class="fw-bold">${post['title']}</span>
                    </p>
                    <div>
                        <img class="rounded ms-2"
                             src=${post['image']}
                             width="80vw">
                    </div>
`)
}
export default PostSummaryItem;