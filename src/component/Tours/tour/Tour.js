import './Tour.css'
const Tour = ( props ) => {
  // let {img,name}=props

 
  return (
    <>
    <div className="card" >
    <h4>{props.name}</h4>
      <img className='img1' src={props.image} alt={props.name} />
        
    </div>
  
    </>
    
  );
};

export default Tour; 