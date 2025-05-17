import React,{useState} from 'react'

export default function About(props) {

    let myStyle = {
        color:props.mode === 'dark'? 'white':'#17193e',
        backgroundColor: props.mode ==='dark'?'#17193e':'white',
        // border: '2px solid'

    }
    let textStyle = {
        color:props.mode === 'dark'? 'white':'rgb(47 49 88)',
        backgroundColor: props.mode ==='dark'?'rgb(47 49 88)':'white',
    }
    // let myStyle={
    //     color:'white',
    //     backgroundColor: '#17193e'
    // }

    // const [myStyle,setMyStyle] = useState({
    //     color:'#17193e',
    //     backgroundColor: 'white'
    // })
    // const[btntext,setbtntext] = useState("Enable Dark Mode")
    // const toggleStyle = () =>{
    //     if(myStyle.color=='white'){
    //         setMyStyle({
    //             color:'#17193e',
    //             backgroundColor: 'white'
    //         })
    //         setbtntext("Enable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor: '#17193e'
    //         })
    //         setbtntext("Enable Light Mode")
    //     }
    // }
  return (
    <div className="container " style={myStyle}>
            <h1 className='my-3' style={{color: props.mode === 'dark'? 'white': '#042743'}}>About TextUtils</h1>
            <p>TextUtils is a modern, utility-focused web application designed to streamline text editing and formatting tasks. It's perfect for students, professionals, and developers who frequently work with raw text and need a quick solution for text transformations.</p>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item" >
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" style={textStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Objective
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={textStyle} >
                        The <strong>primary objective of TextUtils</strong> is to offer a simple, fast, and accessible platform where users can perform common text operations such as converting case, removing extra spaces, and more — directly in the browser, without installing any software.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" style={textStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                         Key Features
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={textStyle}>
                        <p><strong>🔠 Convert to Uppercase / Lowercase - </strong> Quickly change text case with one click.</p>
                        <p><strong>🧹 Remove Extra Spaces – </strong> Clean up redundant spaces for a tidy output.</p>
                        <p><strong>🧽 Clear Text – </strong> Instantly erase all content from the input box.</p>
                        <p><strong>🔢 Text Statistics –</strong>  View real-time word count, character count, and estimated reading time.</p>
                        
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" style={textStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        User Interface & Experience
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={textStyle}>
                        <p><strong>✅ Clean & Intuitive Layout –</strong> Easy-to-use interface suitable for all user levels.</p>
                        <p><strong>🌙 Dark/Light Mode Support – </strong> Toggle between themes for better readability.</p>
                        <p><strong>📱 Responsive Design – </strong> Optimized for use on desktops, tablets, and mobile devices.</p>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" style={textStyle} data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Platform Compatibility
                    </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={textStyle}>
                        <p><strong>🌐 Browser-Based –</strong> No installation required. Works seamlessly on all modern browsers (Chrome, Firefox, Safari, Edge, etc.).</p>
                        <p><strong>💸 Completely Free to Use –  </strong>  No subscriptions, no hidden fees.</p>
                        <p><strong>🔒 Friendly – </strong> All processing is done client-side.</p>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                    <button class="accordion-button collapsed" type="button" style={textStyle} data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Use Cases
                    </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={textStyle}>
                        <p><strong>✍️ Writers – </strong> Format and clean draft content quickly.</p>
                        <p><strong>👨‍🎓 Students – </strong> Analyze essays and assignments before submission.</p>
                        <p><strong>👨‍💻 Developers – </strong> Perform quick string operations during coding.</p>
                        <p><strong>🧠 General Users – </strong>Use it as a fast, web-based notepad and analyzer.</p>
                    </div>
                    </div>
                </div>
            </div>
            {/* <div className='container my-3'>
            <button type="button" class="btn btn-primary" onClick={toggleStyle}>{btntext}</button>
            </div> */}
    </div> 
  )
}
