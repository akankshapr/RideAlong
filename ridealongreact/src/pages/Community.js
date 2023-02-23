import './App.css'

const Community = () => {
    return (<>
    <div>
      <h1>Join Our Community</h1>
      <p>Connect with fellow riders and share your experiences</p>
      <ul>
        <li>Join a local ridealong group</li>
        <li>Attend community events and meetups</li>
        <li>Share your ridealong stories and photos</li>
        <li>Get tips and advice from experienced riders</li>
      </ul>
      <form id="newsletterform">
        <h2>Sign Up for Our Newsletter</h2>
        <label id="newsletterlabel" htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label id="newsletterlabel" htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" /><br/>
        <button id="newsletterbtn" type="submit">Sign Up</button>
      </form>
    </div>

    </>);
}

export default Community;