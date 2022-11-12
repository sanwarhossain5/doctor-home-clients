import React from 'react';

const AddService = () => {
const handleAddService = event =>{
  event.preventDefault()
  const form = event.target;
  const photoURL = form.photoURL.value;
  const name = form.title.value;
  const price = form.price.value;
  const description =form.description.value;
 
  const serviceAdd = {
    picture: photoURL,
    title: name,
    price,
    description

  }

  fetch('http://localhost:5000/service' , {
    method: 'POST',
    headers: {
      "content-type": "application/json"

    },
    body: JSON.stringify(serviceAdd)

  } )
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })

}
  return (
    <div>
     <form onSubmit={handleAddService}>
     <input className='input input-primary' type="text" name="photoURL" id="" /><br />
     <input className='input input-primary' type="text" name="title" id="" /> <br />
     <input className='input input-primary' type="text" name="price" id="" /> <br />
     <textarea  className='input input-primary' name="description" id="" cols="30" rows="10"></textarea> <br />
     <button className='btn' type="submit">Add Service</button>
     </form>
    </div>
  );
};

export default AddService;