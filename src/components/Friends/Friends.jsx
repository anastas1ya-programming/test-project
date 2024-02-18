import c from './Friends.module.css'
const Friends = (props) => {
    return (
        <div> My friends
            <ul>
                <li>Octavia</li> <img className={c.profilePic} src = "https://i.pinimg.com/564x/a4/a8/64/a4a864e4a25249634cdcf1890681dd38.jpg"/>
                <li>Clarke</li>
                <li>Bellamy</li>
            </ul>
        </div>
    )
}
export default Friends;