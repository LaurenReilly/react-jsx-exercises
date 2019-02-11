let ListGroupItem = () => {
    const style = {
        borderBottom: "1px solid grey",
        padding: "5px"
    }
    return  <li style={style}>List Group Item</li>
}

let ListGroup = () => {
    const style = {
        width: "200px",
        border: "1px solid grey",
        borderRadius: "5px",
        listStyleType: "none",
        margin: "0",
        padding: "0"
    }
    return  <ul style={style}>
                <ListGroupItem/>
                <ListGroupItem/>
                <ListGroupItem/>
                <ListGroupItem/>
                <ListGroupItem/>
                <ListGroupItem/>
            </ul>
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))