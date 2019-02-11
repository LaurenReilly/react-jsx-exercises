let TextInput = () => {
    const style = {
        border: "10px solid green",
        margin: "2em",
        width: "200px",
        height: "100px"
    }
    return <input type="text" style={style}/>
}

let YesNoRadio = () => {
    const style = {
        color: 'green',
        marginRight: "5em"
    }
    return  <div style={{margin: "0 auto", width: "30%"}}>
                <input type="radio" id="yes" name="answer" value="yes"/>
                <label htmlFor="yes" style={style}>YES</label>
                <input type="radio" id="no" name="answer" value="no"/>
                <label htmlFor="no" style={style}>NO</label>
            </div>
}

let SubmitButton = () => {
    const style = {
        borderRadius: "5px",
        border: "10px solid green",
        backgroundColor: "orchid",
        padding: "1em",
        fontWeight: "bold",
        color: "white"
    }
    return  <button type="submit" style={style}>SUBMIT</button>
}

let Form = () => {
    return  <div style={{margin: "0 auto", width: "90%", display: "flex", justifyContent:"center"}}>
                <form>
                    <div style={{margin:"0 auto", display: "flex", justifyContent: "space-around"}}>
                        <TextInput/>
                        <TextInput/>
                        <TextInput/>
                    </div>
                    <YesNoRadio/>
                    <div style={{margin:"0 auto", display: "flex", justifyContent: "center"}}>
                        <SubmitButton/>
                    </div>
                </form>
            </div>
}


ReactDOM.render(<Form />, document.getElementById('root'))