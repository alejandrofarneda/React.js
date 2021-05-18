function Home({data}){
    return(

        <div>
            <h1>Hola! {data.username}</h1>
            <img src={data.avatar}/>
        </div>
    )
}

export default Home;