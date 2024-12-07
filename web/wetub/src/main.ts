import './style.css'


interface Video {
  id : number,
  title :string,
  description :string| null,
  mediaPath : string,
  status : boolean,
  userId :number,
}

//créer une seule card
function buildVideoCard(_video:Video): string{
  return `
  <div class="space-y-3 w-full">
    <div class="w-full bg-red-600 rounded-lg">
        <video src="http://127.0.0.1:3000/videos/stream/${_video.id}" controls></video>
    </div>
    <div class="flex space-x-2">
        <div>
            <img src="./assets/logo.png" class="w-10 h-10 rounded-full bg-red-600" alt="">
        </div>
        <div class="flex flex-col">
            <span class="font-semibold w-[200px]">${_video.title}</span>
            <span class="text-gray-500">${_video.description} </span>
        </div>
    </div>
  </div>`;
}



//créer plusieurs card
function buildVideosCards(_videos: Video[]) : string {
  let html : string ="";
  for(const video of _videos){
    html+=buildVideoCard(video);
  }
  return html;
}



function injectVideosCards(_vidoes : Video[]) :void{
  const listTage=document.getElementById('list');
  if(listTage !== null){
    listTage.innerHTML=buildVideosCards(_vidoes);

  }
  return ;
}


try {
  const reponse =await fetch('http://localhost:3000/videos');
  if(reponse.status===200){
    const videos : Video[]=await reponse.json();
    console.log(videos); 
    injectVideosCards(videos)
  }else if(reponse.status===500){
    console.log("error");
    
  }
  console.log(reponse);
  
} catch (error) {
  console.error(error);
}