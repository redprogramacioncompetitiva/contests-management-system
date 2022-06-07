let handleClick = async e => {
    e.preventDefault();
    let config = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
    }
    let response = await fetch('http://localhost:3000/api/selectExample',config)
}

const Select = () => {
    return (
        <div>
            <input type="submit" onClick={handleClick} value="run selects"></input>
        </div>
    )
}

export default Select