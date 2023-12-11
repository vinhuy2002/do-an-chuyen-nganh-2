import TopbarIndex from "../topbar/TopbarIndex";
const Home = ({Toggle}:{Toggle:string}) => {
    return(
        <div>
            <TopbarIndex Toggle={Toggle}/>
            
        </div>
    )
}
export default Home;