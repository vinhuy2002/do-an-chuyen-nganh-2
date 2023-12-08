import TopbarIndex from "../topbar/TopbarIndex";
const Home = ({Toggle}) => {
    return(
        <div>
            <TopbarIndex Toggle={Toggle}/>
            <div className="container-fluid">
                <p>Hello</p>
            </div>
        </div>
    )
}
export default Home;