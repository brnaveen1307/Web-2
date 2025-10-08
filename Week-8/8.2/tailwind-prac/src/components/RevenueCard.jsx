
export function RevenueCard({
    title,
    orderCount,
    amount
}){
    return <div className="bg-white rounded shadow-md p-4">
        <div className="text-gray">
            {title}
            ?
        </div>

        <div className="flex justify-between">
            <div>
                ₹ {amount}
            </div>
            {orderCount ? <div>
                {orderCount} order(s) {">"}
            </div> : null}
        </div>
    </div>    
}