const WhoToFollowListItem = (who) => {
    return (`
            <div class="row">
                <div class="col-9">
                    <div class="row">
                        <div class="col-auto">
                            <img src=${who['avatarIcon']} 
                                class="rounded-circle" width="50" height="50">
                        </div>
                        <div class="col overflow-hidden" style="margin-left: -15px">
                            <span class="fw-bold text-nowrap">${who['userName']}&nbsp;
                            <i class="fa fa-check-circle text-white"></i></span><br/>
                            <span class="text-nowrap">@${who['handle']}</span>
                        </div>
                    </div>
                </div>
                <div class="col-3 align-self-center">
                    <a href="#" class="btn btn-primary rounded-pill float-end">Follow</a>
                </div>
            </div>
`)
}
export default WhoToFollowListItem;