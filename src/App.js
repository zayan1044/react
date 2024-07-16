import logo from './logo.svg';
import './App.css';
import img1 from'./OIP.jpg';


function App() {
//   const style ={
//     color:"red"
//   }
// const hit =()=>{
// alert("hit");
// }
// var a =0;
// if(a==0){
// console.log("hi")
// }
// else{
// console.log("no")
// }
// const x = a==0? "yes":"No";
//   var arr = ["hema", "goyal"];
//   const list = arr.map((val)=><p>{val}</p>);

const arr = [

  {
 
   id: 1,
 
   title: "Example Video 1",
 
   thumbnailUrl: "https://images.unsplash.com/photo-1721109890030-00faaa68981f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 
   likes: 1500,
 
   views: 25000,
 
   channelName: "Sample Channel 1",
 
   channelLogoUrl: "https://images.unsplash.com/photo-1712002641088-9d76f9080889?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 
  },
 
  {
 
   id: 2,
 
   title: "Example Video 2",
 
   thumbnailUrl: "https://images.unsplash.com/photo-1560950834-83fb29249ddc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 
   likes: 1200,
 
   views: 18000,
 
   channelName: "Sample Channel 2",
 
   channelLogoUrl: "https://images.unsplash.com/photo-1560950834-83fb29249ddc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 
  },
 
  {
 
    id: 3,
  
    title: "Example Video 2",
  
    thumbnailUrl: "https://plus.unsplash.com/premium_photo-1674374443275-20dae04975ac?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
    likes: 1200,
  
    views: 18000,
  
    channelName: "Sample Channel 2",
  
    channelLogoUrl: "https://plus.unsplash.com/premium_photo-1674374443275-20dae04975ac?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
   },
   {
 
    id: 4,
  
    title: "Example Video 2",
  
    thumbnailUrl: "https://images.unsplash.com/photo-1535480436112-07697fcbcbea?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
    likes: 1200,
  
    views: 18000,
  
    channelName: "Sample Channel 2",
  
    channelLogoUrl: "https://images.unsplash.com/photo-1535480436112-07697fcbcbea?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
   },
   {
 
    id: 5,
  
    title: "Example Video 2",
  
    thumbnailUrl: "https://img.freepik.com/premium-vector/youtube-thumbnail-template-video-presentation_812472-484.jpg",
  
    likes: 1200,
  
    views: 18000,
  
    channelName: "Sample Channel 2",
  
    channelLogoUrl: "https://img.freepik.com/premium-vector/youtube-thumbnail-template-video-presentation_812472-484.jpg",
  
   },
   {
 
    id: 6,
  
    title: "Example Video 2",
  
    thumbnailUrl: "https://plus.unsplash.com/premium_photo-1674374443275-20dae04975ac?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
    likes: 1200,
  
    views: 18000,
  
    channelName: "Sample Channel 2",
  
    channelLogoUrl: "https://plus.unsplash.com/premium_photo-1674374443275-20dae04975ac?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
   },
   {
 
    id: 7,
  
    title: "Example Video 2",
  
    thumbnailUrl: "https://images.unsplash.com/photo-1635514569146-9a9607ecf303?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
    likes: 1200,
  
    views: 18000,
  
    channelName: "Sample Channel 2",
  
    channelLogoUrl: "https://images.unsplash.com/photo-1635514569146-9a9607ecf303?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
   },
   {
 
    id: 8,
  
    title: "Example Video 2",
  
    thumbnailUrl: "https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
    likes: 1200,
  
    views: 18000,
  
    channelName: "Sample Channel 2",
  
    channelLogoUrl: "https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
   },
   {
 
    id: 9,
  
    title: "Example Video 2",
  
    thumbnailUrl: "https://images.unsplash.com/photo-1532501087002-0341b61f7e74?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
    likes: 1200,
  
    views: 18000,
  
    channelName: "Sample Channel 2",
  
    channelLogoUrl: "https://images.unsplash.com/photo-1532501087002-0341b61f7e74?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
   },
   {
 
    id: 10,
  
    title: "Example Video 2",
  
    thumbnailUrl: "https://images.unsplash.com/photo-1605287977617-ddd865d5f696?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
    likes: 1200,
  
    views: 18000,
  
    channelName: "Sample Channel 2",
  
    channelLogoUrl: "https://images.unsplash.com/photo-1605287977617-ddd865d5f696?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
   },
   {
 
    id: 11,
  
    title: "Example Video 2",
  
    thumbnailUrl: "https://images.unsplash.com/photo-1570087675221-b11fe80d1100?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
    likes: 1200,
  
    views: 18000,
  
    channelName: "Sample Channel 2",
  
    channelLogoUrl: "https://images.unsplash.com/photo-1570087675221-b11fe80d1100?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
   },
   {
 
    id: 12,
  
    title: "Example Video 2",
  
    thumbnailUrl: "https://images.unsplash.com/photo-1521063060117-7b0207e2c40f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
    likes: 1200,
  
    views: 18000,
  
    channelName: "Sample Channel 2",
  
    channelLogoUrl: "https://images.unsplash.com/photo-1521063060117-7b0207e2c40f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
   },

   {
 
    id: 13,
  
    title: "Example Video 2",
  
    thumbnailUrl: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=1767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
    likes: 1200,
  
    views: 18000,
  
    channelName: "Sample Channel 2",
  
    channelLogoUrl: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=1767&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
   },
   {
 
    id: 14,
  
    title: "Example Video 2",
  
    thumbnailUrl: "https://images.unsplash.com/photo-1581312453873-fdda0296e5f4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
    likes: 1200,
  
    views: 18000,
  
    channelName: "Sample Channel 2",
  
    channelLogoUrl: "https://images.unsplash.com/photo-1581312453873-fdda0296e5f4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
   },
   {
 
    id: 15,
  
    title: "Example Video 2",
  
    thumbnailUrl: "https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
    likes: 1200,
  
    views: 18000,
  
    channelName: "Sample Channel 2",
  
    channelLogoUrl: "https://plus.unsplash.com/premium_photo-1684508638760-72ad80c0055f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
   },
   {
 
    id: 16,
  
    title: "Example Video 2",
  
    thumbnailUrl: "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
    likes: 1200,
  
    views: 18000,
  
    channelName: "Sample Channel 2",
  
    channelLogoUrl: "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
   },
   {
 
    id: 17,
  
    title: "Example Video 2",
  
    thumbnailUrl: "https://images.unsplash.com/photo-1628426912481-b66c067fdf7a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
    likes: 1200,
  
    views: 18000,
  
    channelName: "Sample Channel 2",
  
    channelLogoUrl: "https://images.unsplash.com/photo-1628426912481-b66c067fdf7a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
   },
   {
 
    id: 18,
  
    title: "Example Video 2",
  
    thumbnailUrl: "https://images.unsplash.com/photo-1536259425322-a7dfc1eac345?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
    likes: 1200,
  
    views: 18000,
  
    channelName: "Sample Channel 2",
  
    channelLogoUrl: "https://images.unsplash.com/photo-1536259425322-a7dfc1eac345?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
   },
   {
 
    id: 19,
  
    title: "Example Video 2",
  
    thumbnailUrl: "https://plus.unsplash.com/premium_photo-1681488340523-0f9fdef6f0c7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
    likes: 1200,
  
    views: 18000,
  
    channelName: "Sample Channel 2",
  
    channelLogoUrl: "https://plus.unsplash.com/premium_photo-1681488340523-0f9fdef6f0c7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
   },
   {
 
    id: 20,
  
    title: "Example Video 2",
  
    thumbnailUrl: "https://plus.unsplash.com/premium_photo-1663054378169-8ffea2e11c42?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
    likes: 1200,
  
    views: 18000,
  
    channelName: "Sample Channel 2",
  
    channelLogoUrl: "https://plus.unsplash.com/premium_photo-1663054378169-8ffea2e11c42?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
   },
   

 
 // More Data to render at least 20 Youtube Card ( For better visual )
 
 ];
 const list =arr.map((val)=>val)
 const rows = 3;
  const columns = Math.ceil(arr.length / rows);

  return (
    <div className="App">
      <div className="heading">
        <h1>Youtube</h1>
      </div>
      <div className="main">
        {/* Outer map to create rows */}
        {[...Array(rows)].map((_, rowIndex) => (
          <div key={rowIndex} className="row">
            {/* Inner map to create columns */}
            {[...Array(columns)].map((_, colIndex) => {
              const dataIndex = colIndex * rows + rowIndex;
              if (dataIndex < arr.length) {
                const video = arr[dataIndex];
                return (
                  <div key={video.id} className="card">
                    <div className="thumbnail">
                      <img src={video.thumbnailUrl} alt={`Thumbnail for ${video.title}`} />
                    </div>
                    <div className="sidepanel">
                      <div className="logo">
                        <img src={video.channelLogoUrl} alt={`Logo for ${video.channelName}`} />
                      </div>
                      <div className="content">
                        <div className="title">{video.title}</div>
                        <div className="channelName">{video.channelName}</div>
                        <div className="details">
                          <p>Likes: {video.likes}</p>
                          <p>Views: {video.views}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return null; // Render empty cell if no data for this index
              }
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
// conditional statement: if else iternary statements

export default App;
