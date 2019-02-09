let ProfilePic = () => {
    return <img src="./lauren-optimized.jpg"/>
}

let CommentBody = (props) => {
    return  <div>
                <strong>{props.userName}</strong>
                <p>Here's the comment underneath my username</p>
            </div>
}

let Comment = () => {
    return  <div>
                <ProfilePic />
                <CommentBody userName="Lauren" />
            </div>
}

let Comments = () => {
    return  <div>
                <Comment />
            </div>
}

ReactDOM.render(<Comments />, document.getElementById('root'))