import axios from "axios";


const Cart = () => {


    const handelAdd = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const brand = form.brand.value;
        const image = form.image.value;
        const description = form.description.value;
        const productDetails = { name, price, brand, image, description, featured: "false", status: "pending" };
        console.log(productDetails);
        axios.post('https://tech-matrix-server.vercel.app//products', productDetails)
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
                                    <textarea className="textarea textarea-error" name="description" placeholder="Features"></textarea>
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