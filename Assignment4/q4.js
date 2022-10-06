function GetVideo(){
    return new Promise(()=>{
        setTimeout(()=>{
            console.log("get video")
        },3000)
    })
}
function AddIntro(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Intro added")
        },3000)
    })
}

function AddSummary(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Summary added")
        },3000)
    })
}
GetVideo();
AddIntro();
AddSummary();