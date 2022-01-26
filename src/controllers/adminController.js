const controller = {
    index: (req, res) => {
        res.send("INDEX ADMIN")
    }, 
    listProducst: (req, res) => {
        res.send("LIST-PRODUCTS ADMIN")
    },
    search: (req, res) => {
        res.send("RESULTADO DE BUSQUEDA ADMIN")
    },
    createProduct: (req, res) => {
        res.send("FORM CREATE-PRODUCTO ADMIN")
    },
    storeProduct: (req, res) => {
        res.send("GUARDAR DATOS-PRODUCTO ADMIN")
    },
    editProduct: (req, res) => {
        res.send("FORM EDIT-PRODUCTO ADMIN")
    }, 
    updateProduct: (req, res) => {
        res.send("ACTUALIZAR-DATOS-PRODUCTO ADMIN")
    }, 
    deleteProduct: (req, res) => {
        res.send("DELETE-PRODUCT ADMIN")
    }, 
    listCategories: (req, res) => {
        res.send("LISTADO DE CATEGORIAS ADMIN")
    },
    createCategory: (req, res) => {
        res.send("FORM CREATE-CATEGORIA ADMIN")
    }, 
    storeCategory: (req, res) => {
        res.send("GUARDAR-NUEVA-CATEGORIA ADMIN")
    }, 
    editCategory: (req, res) => {
        res.send("FORM EDIT-CATEGORIA ADMIN")
    }, 
    updateCategory: (req, res) => {
        res.send("ACTUALIZAR-CATEGORIA ADMIN")
    }, 
    deleteCategory: (req, res) => {
        res.send("DELETE CATEGORIA ADMIN")
    }, 
    listCustomers: (req, res) => {
        res.send("LISTADO DE CLIENTES/CUENTAS")
    }, 
    listUserAdmin: (req, res) => {
        res.send("LISTADO USUARIOS CON ROL ADMIN")
    }, 
    createUserAdmin: (req, res) => {
        res.send("FORM CREATE-USER ADMIN")
    }, 
    storeUserAdmin: (req, res) => {
        res.send("GUARDAR-NUEVO-USUARIO ADMIN")
    }, 
    editUserAdmin: (req, res) => {
        res.send("FORM EDIT-USER ADMIN")
    }, 
    updateUserAdmin: (req, res) => {
        res.send("ACTUALIZAR USER-DATOS-ADMIN")
    }, 
    deleteUserAdmin: (req, res) => {
        res.send("ELIMINAR USER ADMIN")
    }
}
export default controller;