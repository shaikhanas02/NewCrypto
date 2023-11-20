function SelectType({setType}){
    return(
        <>
        <div>
            <button onClick={()=> setType('prices')}>PRICE</button>{" "}
            <button onClick={()=> setType('market_caps')}>MARKET CAP</button>{" "}
            <button onClick={()=> setType('total_volumes')}>TOTAL VOLUME</button>
        </div>
        </>
    )
}


export default SelectType ;