// Home.js
import PropTypes from "prop-types";

function Home(props) {
    const handleClick = (arg) => console.log(arg);
    const handleInput = (arg, e) => console.log(`${arg} - ${e.target.value}`);
    return (
        <>
            <span style={props.style}>
                {props.blogPosts.map((value, idx) => (
                    <p key={idx}>
                        {value.id}-{value.title}
                    </p>
                ))}
            </span>
            <input type="text" onInput={(e) => handleInput("Hi!", e)} />
            <button onClick={() => handleClick("Hi")}>Say hi!</button>
            <button onClick={() => props.callParrentFunction({ value: "Message from child!" })}>
                Click to call parent's function
            </button>
        </>
    );
}

Home.defaultProps = { blogPosts: [{ id: 0, title: "Karbauskio dienoraštis" }], };
Home.propTypes = { blogPosts: PropTypes.array, };
export default Home;
