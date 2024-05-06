

function NewsPad({imageLink,title,spanText,heading,paragraph}) {
    return (
        <div style={{
            display: "flex", // Set display to flex
            alignItems: "center" // Align items vertically in the center
        }}>
            <div>
                <img src={imageLink} alt={title} />
            </div>
            <div style={{ marginLeft: "20px" }}> {/* Add some margin for spacing */}
                <span>{spanText}</span>
                <h2>{heading}</h2>
                <p>{paragraph}</p>
            </div>
        </div>
    );
}

export default NewsPad;