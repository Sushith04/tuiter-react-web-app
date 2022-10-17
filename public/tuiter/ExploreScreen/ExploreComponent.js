import PostSummaryList from "./PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
<div class="row">
    <div class="col-11">
        <div class="form-group has-search">
            <span class="fa fa-search form-control-feedback"></span>
            <input type="text" class="form-control rounded-pill"
                   placeholder="Search Twitter">
        </div>
    </div>
    <div class="col-1 align-self-center">
        <a href="#"><i class="fa fa-cog fa-2x float-end" style="color: rgb(29, 161, 242)"></i></a>
    </div>
</div
<div>
<ul class="nav nav-pills mt-2">
    <li class="nav-item">
        <a class="nav-link active" href="for-you.html">For You</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="trending.html">Trending</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="news.html">News</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="sports.html">Sports</a>
    </li>
    <li class="nav-item">
        <a class="nav-link d-none d-md-block" href="entertainment.html">Entertainment</a>
    </li>
</ul>
<div class="mt-2">
    <div class="position-relative">
        <img src="../../images/starship.jpg" width="100%" alt="starship">
            <h1 class="position-absolute bottom-0 start-0 fw-bold ms-2">SpaceX's
                Starship</h1>
    </div>
${PostSummaryList()}
</div>
`);
}

export default ExploreComponent;