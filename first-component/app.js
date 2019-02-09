let FirstComponent = () => {
    const style1 = {
        margin: '10px',
        width: '200px',
        height: '200px',
        backgroundColor: 'red',
        display: 'inline-block',
      };
    
      const style2 = {
        margin: '10px',
        width: '200px',
        height: '200px',
        backgroundColor: 'green',
        display: 'inline-block',
      };

      const style3 = {
        margin: '10px',
        width: '200px',
        height: '200px',
        backgroundColor: 'blue',
        display: 'inline-block',
      };

      const style4 = {
        margin: '10px',
        width: '200px',
        height: '200px',
        backgroundColor: 'yellow',
        display: 'inline-block',
      };

    return  <div>
                <div>
                    <div style={style1}></div>
                    <div style={style2}></div>
                </div>
                <div>
                    <div style={style3}></div>
                    <div style={style4}></div>
                </div>
            </div>
}

ReactDOM.render(<FirstComponent />, document.getElementById('root'))