function Button() {

    const handleClick = (e) => e.target.textContent = "ouch!";

    return(
        <>
            <button onDoubleClick={(e) => handleClick(e)}> DOUBLE CLICK ME </button>
            <button onClick={(e) => handleClick(e)}> CLICK ME </button> 
        </>
       
    );
}

export default Button;

/*    const styles = {
        backgroundColor: "hsl(200, 1%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    let count = 0 ;
    // Inner function
    const handleClick = (name) =>  {
        if (count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        } else {
            console.log(`${name} stop clicking me!!`);
        }
    };

    //const handleClick2 = (name) => console.log(`${name} stop clicking me!`);
    return(
        <button className={styles} onClick={() => handleClick("Sara")}>Click me </button>
    );
*/