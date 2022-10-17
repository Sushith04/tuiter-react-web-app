import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
           <div class="list-group">
           <div class="list-group-item list-group-item-action fw-bold">Who To Follow</div>
           <div class="list-group-item list-group-item-action">${WhoToFollowListItem(who[0])}</div>
           <div class="list-group-item list-group-item-action">${WhoToFollowListItem(who[1])}</div>
           <div class="list-group-item list-group-item-action">${WhoToFollowListItem(who[2])}</div>
           <div class="list-group-item list-group-item-action">${WhoToFollowListItem(who[3])}</div>
           <div class="list-group-item list-group-item-action">${WhoToFollowListItem(who[4])}</div>
           </div>
`); }

export default WhoToFollowList;