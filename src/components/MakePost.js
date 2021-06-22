import '../styles/MakeEditPost.css';

function MakePost (props){
	// body...
	return(
		
		<div>
			<div className='shadow-5 form-container'>
		        <h1 className=''>Make Post</h1>
		        <h3 className="">Pet Race</h3>
		        <input id='ep-race'className="nc-input" type="text"></input>
		        <h3 className="">Pet Image URL</h3>
		        <input id='ep-url'className="nc-input" type="text"></input>
		        <h3 className="">Pet Description</h3>
		        <textarea id='ep-description'className='nc-ta' placeholder='Enter description here'></textarea>
		        <button onClick = {()=>console.log('click')}className='nc-btn'>Save Changes</button>
		    </div>
		</div>
	);

}
export default MakePost;