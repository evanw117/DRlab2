// Define the Content functional component
const Content = ()=>{

    // Return jsx to render the component
    return(
        <div>
             <h1>Hello World </h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}

// Export the Content component for use in other files
export default Content;