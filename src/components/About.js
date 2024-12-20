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
            <h1 className='my-3' style={{color: props.mode === 'dark'? 'white': '#042743'}}>About Us</h1>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item" >
                    <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" style={textStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Analyze your text
                    </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={textStyle} >
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" style={textStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Free to use
                    </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={textStyle}>
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" style={textStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Browse compatible
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body" style={textStyle}>
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
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
