import React from 'react';
 import { Slide } from 'react-slideshow-image';
 import 'react-slideshow-image/dist/styles.css';


const Home= [
    {
    url:'https://taaac.ca/sites/default/files/styles/landscape_3_2_1500/public/ET_Addis_asv2018-01_img13_University_gate.jpg?itok=nITEsSj6',
    capion:'this your universtiy'
    },
    {
        url:'https://th.bing.com/th/id/R.f1a711b58eb29f8507330a236e7eee7e?rik=9PlfAlkKECVicA&riu=http%3a%2f%2fwww.rocapply.com%2fassets%2fUNIVERSITY%2fGreater+University+of+San+Simon%2fawasa-var.jpeg&ehk=adCp9tsHYRYxFXNATzOqHOQRJu2MVJ6EtCQu7tYDnoM%3d&risl=&pid=ImgRaw&r=0',
        capion:'this your universtiy'
        },
        {
            url:'https://i.pinimg.com/originals/9f/84/74/9f8474d335257332e88b50ec6d74da1c.jpg',
            capion:'this your universtiy'
            },
];
const divstyle={
    display:'flex',
    alignItems:"center",
    justifycontent:"center",
    height:"400px",
    background:'cover'
    }


const spanStyle= {
    fontsize: "28p",
    background:"#efefef",
    color:'#0000',


}
function ImagesSlider(){
    return (
        <div className='slide-contaner'>
            <fade>
                {slideImage.map((image,index)=>(
                    <div key={index}>
                        <div style={{...divstyle, backgroundImage:'url(${image.url})'}}>
                            <span style={{spanStyle}}>{image.capion}</span>

                    </div>
                </div>
                ))}
                </fade>
                </div>
)}
             export default Home ;    