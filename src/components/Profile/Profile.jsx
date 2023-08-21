import NavBar from '../pages/NavBar';
import { useState } from 'react';

const Profile = () => {
    const [userName, setUserName] = useState('');
  return (
    <div className="Profile">
      <NavBar />
      <div>
       <h1>{` Welcome, ${userName}`}</h1>
       <h5>Message to me:</h5>
      </div>

      <div>
      <h5>Message from me:</h5>

      </div>

    </div>
  );
}

export default Profile;






















// Welcome pwallace
//Message to Me:
//inside profile will see From: testy. Message: '.....', VIEW MY POST: '...' this is link to
// VIEW MY POST: QUITE RUSTY 57 CHEVY(link to posts)and thr Url changes
// will see message, price, Seller, Locatin, (DELETE, EDIT (button))
// under these will see,  Message regarding this post:
// click edit and will link to POSTS page.. 


// and, Message from Me:
//(Sent By Me)
//Hello(meassage)
//MESSAGE AGAIN:GOLDEN RETRIEVER PUPPIES(link)