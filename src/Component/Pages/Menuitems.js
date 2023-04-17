import React from 'react'

const MenuItems = (props) => {
  return (
      <>
    <div className="menu-items container-fluid mt-5">
    <div className="row">
      <div className="col-11 mx-auto">
        <div className="row my-5">
          {
          props.items.map((elem) => {
              const {id, name, One, price, description,category} = elem;
              return (

                <div className="Item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5">
                  <div className="row Item-inside">
                    <div className='col-12 col-12 col-lg-40 img-div'>
                    <img src={One} alt="menu-img" className='img-fluid' />    
                      </div>
                        <div className="col-12 col-md-12 col-lg-8">
                        <div className="mail-title pt-4 pb-3">
                            <h1>{name}</h1>
                            <p>{description}</p>
                        </div>
                        <div className="menu-price-hall">
                            <div className="price-hall-divide d-flex justify-content-between
                            align-items-center">
                        <h2>price: {price}</h2>
                        <a href="#">
                            <button className="btn btn-primary">Booked Now</button>
                        </a>
                        </div>
                        <p>Price may vary on selection date</p>
                    
                   
                        </div>
                    </div>
                    </div>
                     </div>
              )
          })
        }
        </div>
        </div>

  </div>
  </div>
  
  </>
  );
}

export default Menuitems
