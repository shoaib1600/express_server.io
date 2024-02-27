const getAllProducts = async (req,res)=>{
    res.status(200).json({
        msg : "i am getallproducts"
    })
}

const getAllProductsTesting = async (req,res)=>{
    res.status(200).json({
        msg : "i am getallproductstesting"
    })
};

module.exports = {getAllProducts , getAllProductsTesting}