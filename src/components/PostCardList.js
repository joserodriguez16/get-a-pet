import '../styles/PostCardList.css';
import PostCard from './PostCard';

function PostCardList (props){
	// body...
	let component;

	if(props.posts.length === 0){
		component = (
			<div>

				<h1 className='mt5 no-pets'>Sorry, there are no pets available and/or You have no reservatations</h1>
				<img className='no-pets-img'src='https://i0.wp.com/freepngimages.com/wp-content/uploads/2015/11/sad-puppy-transparent-background.png?fit=350%2C300' alt='sad puppy'/>

			</div>
		);
	}
	else{
	
		component = props.posts.map((post,i) => {
			return(
				<div key={post.id}>
					<PostCard  
					user ={props.user} 
					route={props.route}
					post={post}
					onEditClick={()=>props.onEditClick(post.id)}
					onDeleteClick={()=>props.onDeleteClick(post.id)}
					onReserveClick={()=>props.onReserveClick(post.id)}
					onRemoveClick={()=>props.onRemoveClick(post.id)}/>
				</div>
			);
		})
	}	

	return(
		<div>
			<div className='pcl-container'>
				{component}
			</div>
		</div>
	);

}
export default PostCardList;