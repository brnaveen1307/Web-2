
export function VideoCard(props: any) {
  return <div className="p-3">
    <img src={props.image} className="rounded-xl w-100 h-50"></img>
    <div className="grid grid-cols-12 pt-2">
        <div className="col-span-1">
            <img className="rounded-full size-5" src={props.thumbImage}></img>
        </div>
        <div className="col-span-11 pl-2">
            <div>
                {props.title} 
            </div>

           <div className="col-span-11 text-gray-400 text-base">
                <div>
                    {props.author}
                </div>
           </div> 

           <div className="col-span-11 text-gray-400 text-base">
                <div>
                    {props.views} | {props.timestamp}
                </div>
            </div>
        </div>
            
        
        
        
    </div>
  </div>;
}
