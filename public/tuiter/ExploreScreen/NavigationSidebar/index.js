const NavigationSidebar = (active) => {
    return (`
        <div class="list-group wd-navigation">
            <a href="#"
               class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-1">
                        <i class="fab fa-twitter"></i>
                    </div>
                </div>
            </a>
            <a href = "../HomeScreen/index.html"
               class="list-group-item list-group-item-action ${active === 'home' ? "active" : ""}">
                <div class="row">
                    <div class="col-1">
                        <i class="fa-solid fa-house-chimney"></i>
                    </div>
                    <div class="col-2">
                        <span class="d-none d-xl-block">Home</span>
                    </div>
                </div>
            </a>
            <a href="../ExploreScreen/index.html"
               class="list-group-item list-group-item-action ${active === 'explore' ? "active" : ""}">
                <div class="row">
                    <div class="col-1">
                        <i class="fa fa-hashtag"></i>
                    </div>
                    <div class="col-2">
                        <span class="d-none d-xl-block">Explore</span>
                    </div>
                </div>
            </a>
            <a href="#"
               class="list-group-item list-group-item-action ${active === 'notifications' ? "active" : ""}">
                <div class="row">
                    <div class="col-1">
                        <i class="fa fa-bell"></i>
                    </div>
                    <div class="col-2">
                        <span class="d-none d-xl-block">Notifications</span>
                    </div>
                </div>
            </a>
            <a href="#"
               class="list-group-item list-group-item-action ${active === 'messages' ? "active" : ""}">
                <div class="row">
                    <div class="col-1">
                        <i class="fa fa-envelope"></i>
                    </div>
                    <div class="col-2">
                        <span class="d-none d-xl-block">Messages</span>
                    </div>
                </div>
            </a>
            <a href="#"
               class="list-group-item list-group-item-action ${active === 'bookmarks' ? "active" : ""}">
                <div class="row">
                    <div class="col-1">
                        <i class="fa fa-bookmark"></i>
                    </div>
                    <div class="col-2">
                        <span class="d-none d-xl-block">Bookmarks</span>
                    </div>
                </div>
            </a>
            <a href="#"
               class="list-group-item list-group-item-action ${active === 'lists' ? "active" : ""}">
                <div class="row">
                    <div class="col-1">
                        <i class="fa fa-list"></i>
                    </div>
                    <div class="col-2">
                        <span class="d-none d-xl-block">Lists</span>
                    </div>
                </div>
            </a>
            <a href="#"
               class="list-group-item list-group-item-action ${active === 'profile' ? "active" : ""}">
                <div class="row">
                    <div class="col-1">
                        <i class="fa fa-user"></i>
                    </div>
                    <div class="col-2">
                        <span class="d-none d-xl-block">Profile</span>
                    </div>
                </div>
            </a>
            <a href="#"
               class="list-group-item list-group-item-action ${active === 'more' ? "active" : ""}">
                <div class="row">
                    <div class="col-1">
                        <span class="fa-stack small">
                            <i class="fas fa-circle fa-stack-2x"></i>
                            <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
                    <div class="col-2">
                        <span class="d-none d-xl-block">More</span>
                    </div>
                </div>
            </a>
            <a href="#" class="btn btn-primary mt-2 rounded-pill p-2 d-grid">Tweet</a>
        </div>
 `);
}

export default NavigationSidebar;