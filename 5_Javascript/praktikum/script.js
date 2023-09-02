function validation(){
    let product = document.getElementById("productName").value;
    let price = document.getElementById("productPrice").value;
    let image = document.getElementById("imageOfProduct").value;
    let category = document.getElementById("productCategory").value;
    let form = document.getElementById("formCheck").value;

    if (product == "" || price == "" || image == "" || category =="" ) {
        alert("isi dulu yang kosong dong");
      
    }else if (product.length>25) {
        alert("kebanyakan isi product namenya");
        
      
    }else if (product.includes("#") || product.includes("!") || product.includes("@") || product.includes("{}")) {
       
        document.getElementById("errMsg").innerHTML = "tidak boleh menggunakan karakter berikut: @, #, !, {}";
        
        
        
    }else{
        alert("Product Name: " + product + "\nProduct price: " + price + "\nimage of product: " + image + "\nProduct category: " + category + "\nProduct Freshness: " + form + "\nberhasil di input" );
    }

    
    
}