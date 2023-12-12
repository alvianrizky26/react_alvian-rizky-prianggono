export default function Button () {
    return (
        <section id='create-product'>
            <div className="container-fluid">
            <div className="container2">
                <form action="#">
                    <div className="form-group">
                    <p className="text"> Detail Product</p>
                    <label for="text">Product Name</label>
                    <input id="productName" className="form-control" type="text" placeholder="Product name"/>
                    <small id="errMsg" className="form-text text-muted">masukan minimal 25 karakter</small>
                    </div>
                </form>
                
                
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Product category</label>
                    <select className="form-control" id="productCategory">
                    <option>Choose...</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
                <form>
                    <div className="form-group">
                    <label for="exampleFormControlFile1">Image of Product</label>
                    <input type="file" className="form-control-file" id="imageOfProduct"/>
                    </div>
                </form>
                <div className="form-check">
                    <p>productfreshness</p>
                    
                    
                    <input className="form-check-input" type="checkbox" value="" id="formCheck"/>
                    <label className="form-check-label" for="defaultCheck1">
                    Brand New
                    </label>
                </div>
                <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="formCheck"/>
                    <label className="form-check-label" for="defaultCheck2">
                    Second Hand
                    </label>
                </div>
                <div class="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="formCheck"/>
                    <label className="form-check-label" for="defaultCheck2">
                    Refublished
                    </label>
                </div>
                <div className="form-group" >
                <br />
                    <label for="exampleFormControlTextarea1">additional Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Product Price</label>
                    <input type="number" className="form-control" id="productPrice" placeholder="$ 1"/>
                </div>
                <button type="submit" className="btn btn-primary" onclick="validation()">Submit</button>
    
            </div>
            </div>
        </section>
     
    )
}