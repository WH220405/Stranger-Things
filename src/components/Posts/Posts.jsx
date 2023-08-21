import { useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import NavBar from '../pages/NavBar';
import { getPosts } from '../../util/api';
import ItemCard from '../Cards/ItemCard';

const Posts = () => {
    const [error, setError] = useState();
    const [posts, setPosts] = useState();
    const [searchPost, setSearchPost] = useState();
    const [AddPosts, setAddPosts] = useState();
    const [isLoading, setIsLoading] = useState(false);
    

    useEffect(()=> {
        async function loadPosts(){
            setIsLoading(true);
            try{
                const posts = await getPosts();
                setPosts(posts)

            }catch(error){
                console.log(error)
            }
            setIsLoading(false);
        }
        loadPosts();
    }, []);

    function searchPosts(e){
        e.preventDefault();
        setSearchPost(e.traget.value)
    }


    function AddPost(e){
        e.preventDefault();
        setAddPosts(e.traget.value)

    }
;  return (
    <div className="Posts">
        <NavBar />
        
        <h1>POST</h1>
        {isLoading && <p>Loading posts...</p>}
        {error && <p>{error}</p>}
     <Button onClick={searchPosts} variant="outline-primary">SearCh Posts</Button>{' '}
     <Button onClick={AddPost} as="input" type="submit" value="AddPost">ADD POST</Button>{' '}

     <ItemCard />
    </div>
  )
}

export default Posts;

























// POSTS, search Posts(button), (ADD POST) link to somewhere

// inside block
// Golden Retriever Puppies
// Not looking for money, just want to find a good home for these four beatiful pups
//Price: free
// Seller: jane 1234
// Location:[On Request]
//SEND MESSAGE(button)


// after click EDIT button in Profile page will see
// and type in search post ex. pups, will see message match all posts beneth
// will see, message, price, seller:, location and VIEW (button)

// click, ADD POST will link to ADD NEW POST, will have Title, Description, Price, Location, check box, willing to Deliver? and CREATE(button)
// click create will see message pop up, green color, Success
// this page will be posts/add
// inside post you will see the new message and able to delete or Editing
// click EDITING (button) will see, Edit Post, Title, Description, price, Location, check box, Willing to Deliver? SAVE button, after click save will see alert message said, success

// can click send a message will go to SEND MESSAGE
// will see message, Message User About This Post, Title, SEND MESSAGE (button) and will see message alert success
