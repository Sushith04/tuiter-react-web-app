const PostItem = (post) => {
    return (`
        <div class="row pb-2">
            <div class="col-1">
        <img class="rounded-circle" src=${post['profile_image']} width="50" height="50" alt="profilepic">
</div>
            <div class="col-11 ps-4">
            <p><span>${post['userName']} 
            <i class="fa fa-check-circle text-white"></i></span>
            <span class="text-secondary">@${post['handle']} &middot; ${post['time']}</span>
            <span class="float-end text-secondary" style="margin-top: -5px">&hellip;</span>
            </p>
            <p style="margin-top: -15px">${post['post_description']} 
            <span style="color: rgb(29, 161, 242)">${post['link']}</span></p>
            <div class="wd-rounded-corners-top wd-rounded-corners-bottom wd-border-thin-lgray">
                <div class="wd-border-bottom-thin-lgray">
                <img class = "wd-rounded-corners-top" src=${post['post_image']} width="100%"/>
                </div>
                <div class="p-3">
                <p><span>${post['image_title']}</span><br/>
                <span class="text-secondary">${post['image_content']}</span></p>
</div>
            </div>
            <div class="row pt-2">
                    <div class="col-3">
                        <a href=""><span class="pe-2"><i class="fa fa-regular fa-comment"></i></span></a>${post['comments']}
                    </div>
                    <div class="col-3">
                        <a href="#"><span class="pe-2"><i class="fa fa-retweet"></i></span></a>${post['retweets']}
                    </div>
                    <div class="col-3">
                        <a href="#"><span class="pe-2"><i class="fa fa-regular fa-heart"></i></span></a>${post['likes']}
                    </div>
                    <div class="col-3">
                        <a href="#"><span><i class="fa fa-regular fa-share-from-square"></i></span></a>
                    </div>
                </div>       
</div>
</div>
`)
}
export default PostItem;