const Home = () => {
    return (<>
      <div className="jumbotron text-center">
    <h1>Ride Along</h1>
    <p>Find like-minded riders and explore new destinations together.</p>
</div>
<div className="container">
    <h2>How it Works</h2>
    <div className="row">
        <div className="col-sm-4">
            <h3>Step 1</h3>
            <p>Enter your destination and date of travel.</p>
        </div>
        <div className="col-sm-4">
            <h3>Step 2</h3>
            <p>Browse other riders travelling to the same destination.</p>
        </div>
        <div className="col-sm-4">
            <h3>Step 3</h3>
            <p>Connect with riders and plan your trip together.</p>
        </div>
    </div>
</div>
<div className="container-fluid bg-light">
    <h2>Features</h2>
    <div className="row">
        <div className="col-sm-4">
            <h3>Community</h3>
            <p>Get advice and tips from other riders who have travelled the same route.</p>
        </div>
        <div className="col-sm-4">
            <h3>Navigation</h3>
            <p>Get turn-by-turn directions to your destination and must-visit locations along the way.</p>
        </div>
        <div className="col-sm-4">
            <h3>Resources</h3>
            <p>Find fuel stations, accommodation, restaurants, and mechanic shops along your route.</p>
        </div>
    </div>
</div></>

    )
  };
  
  export default Home;