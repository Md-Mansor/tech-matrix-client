import axios from "axios";


const Cart = () => {


    const handelAdd = event => {
        event.preventDefault()
        const form = event.target;
        const Name = form.name.value;
        const Price = form.price.value;
        const Brand = form.brand.value;
        const Image = form.image.value;
        const Description = form.Features.value;
        const productDetails = { Name, Price, Brand, Image, Description, Featured: "false" };
        console.log(productDetails);
        axios.post('http://localhost:5000/products', productDetails)
            .then(data => {
                console.log(data.data);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="flex flex-col gap-5 ">

            <div>
                <h1 className="font-semibold text-3xl m-10 text-center uppercase">Add Item for this site </h1>
            </div>
            <div>
                <div className="bg-zinc-200 rounded mx-5">
                    <div className="">
                        <div className="card ">
                            <form onSubmit={handelAdd} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Brand</span>
                                    </label>
                                    <input type="text" name="brand" placeholder="Brand" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image</span>
                                    </label>
                                    <input type="text" name="image" placeholder="Image" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Description </span>
                                    </label>
                                    <textarea className="textarea textarea-error" name="Features" placeholder="Features"></textarea>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-outline btn-error" type="submit" value="Add Now" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;