import React from 'react';

const Store = ({store}: any) => {
    const {img, description} = store;
    return (
        <div className="my-4">
      <div className="card bg-base-100 w-56 cursor-pointer hover:shadow-2xl rounded-none">
        <div className="relative">
          <figure>
            <img className="h-52" src={img} alt="Shoes" />

            <button
              className=" btn btn-outline btn-secondary px-12 absolute text-gray-100"
             
            >
              Quick View
            </button>
          </figure>
        </div>

        <div className="p-2 ">
          {/* <h2 class="card-title">
                        {name}!
                        <div class="badge badge-secondary">NEW</div>
                    </h2> */}
          <p className="">{description}</p>
          <div className="gap-y-0">
            <p className="text-red-500 font-medium text-xl">
              <span className="text-3xl">৳</span> 520
            </p>
            <p className="">
              <span className="line-through text-gray-500">
                <span className="text-2xl">৳</span> 700
              </span>{' '}
              <span className="text-gray-900">-57%</span>
            </p>
          </div>
        </div>
      </div>
   
    </div>
    );
};

export default Store;