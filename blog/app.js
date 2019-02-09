let Header = () => {
    return <h1>Laurys Stormborn</h1>
}
let Article = () => {
    return  <div>
                <h3>The Time I Rode a Dragon</h3>
                <p>I tried to sacrifice myself in a fire while holding a dragon egg<br/> but instead of dying a dragon hatched out. I did lose all<br />my hair but thats fine. When the dragon grew up I said<br /> "Can I have a ride bud?" and he screeched and then let me ride!</p>
            </div>
}
let Footer = () => {
    return <footer>copyright 300 BTE</footer>
}

let Blog = () => {
    return  <div>
                <Header />
                <Article />
                <Footer />
            </div>
}


ReactDOM.render(<Blog />, document.getElementById('root'))