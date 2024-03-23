

const Option = ({name, label, value}) => {
    return(
        <div>
            <input type="radio" name={name} value={value} style={{marginRight: "25px"}}/>
            <label for="html">{label}</label><br></br>
        </div>
    );
}

export default Option;