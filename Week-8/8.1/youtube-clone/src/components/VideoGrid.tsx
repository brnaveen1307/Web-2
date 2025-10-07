import { VideoCard } from "./VideoCard"

const VIDEOS = [{
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    title:"Idli Kottu | Official Trailer (Telugu)",
    author: "Dhanush",
    views: "46M views",
    timestamp: "2 weeks ago",
}, {
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    title:"Idli Kottu | Official Trailer (Tamil)",
    author: "Dhanush",
    views: "4M views",
    timestamp: "1 week ago",
}, {
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    title:"Idli Kottu | Official Trailer (Malayalam)",
    author: "Dhanush",
    views: "2M views",
    timestamp: "2 days ago",
},{
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    title:"Idli Kottu | Official Trailer (Hindi)",
    author: "Dhanush",
    views: "2M views",
    timestamp: "2 days ago",
},{
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    title:"Idli Kottu | Official Trailer (Kannada)",
    author: "Dhanush",
    views: "2M views",
    timestamp: "2 days ago",
},{
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    title:"Idli Kottu | Official Trailer (Urdu)",
    author: "Dhanush",
    views: "2M views",
    timestamp: "2 days ago",
},{
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    title:"Idli Kottu | Official Trailer (Konkani)",
    author: "Dhanush",
    views: "2M views",
    timestamp: "2 days ago",
},{
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    title:"Idli Kottu | Official Trailer (Tulu)",
    author: "Dhanush",
    views: "2M views",
    timestamp: "2 days ago",
},{
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    title:"Idli Kottu | Official Trailer (Lambani)",
    author: "Dhanush",
    views: "2M views",
    timestamp: "2 days ago",
},{
image: "photo.jpg",
    thumbImage: "thumb.jpg",
    title:"Idli Kottu | Official Trailer (Marathi)",
    author: "Dhanush",
    views: "2M views",
    timestamp: "2 days ago",
},{
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    title:"Idli Kottu | Official Trailer (Punjabi)",
    author: "Dhanush",
    views: "2M views",
    timestamp: "2 days ago",
},{image: "photo.jpg",
    thumbImage: "thumb.jpg",
    title:"Idli Kottu | Official Trailer (Malayalam)",
    author: "Dhanush",
    views: "2M views",
    timestamp: "2 days ago",
},{
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    title:"Idli Kottu | Official Trailer (Malayalam)",
    author: "Dhanush",
    views: "2M views",
    timestamp: "2 days ago",
},{
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    title:"Idli Kottu | Official Trailer (Malayalam)",
    author: "Dhanush",
    views: "2M views",
    timestamp: "2 days ago",
},{
    image: "photo.jpg",
    thumbImage: "thumb.jpg",
    title:"Idli Kottu | Official Trailer (Malayalam)",
    author: "Dhanush",
    views: "2M views",
    timestamp: "2 days ago",
},{
    image: "photo.jpg", 
    thumbImage: "thumb.jpg",
    title:"Idli Kottu | Official Trailer (Malayalam)",
    author: "Dhanush",
    views: "2M views",
    timestamp: "2 days ago",
}]

export function VideoGrid(){
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
            <VideoCard
                image={video.image}
                thumbImage={video.thumbImage}
                title={video.title} 
                author={video.author}
                views = {video.views} 
                timestamp = {video.timestamp}
            ></VideoCard>
        </div>)}
    </div>
}