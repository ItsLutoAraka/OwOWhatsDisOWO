import './Post.css'

type PostProps = {
    text: string;
    img: string;
}
function Post({text, img}:PostProps){
    return(
        <div className="post" style={{border: "5px solid", background: "green"}}>
            <p style={{fontFamily: 'Comic Sans MS'}}>
                {text}
            </p>
            <img className='spinning-image' src={img}>
            </img>
        </div>
    )
}

export default Post;