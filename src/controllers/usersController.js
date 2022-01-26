let controller = {
    signin: (req, res) => {
        res.send("FORM SIGN IN")
    }, 
    processSignin: (req, res) => {
        res.send("GUARDAR DATOS USUARIO")
    }, 
    login: (req, res) => {
        res.send("FORM LOG IN USUARIO")
    },
    processLogin: (req, res) => {
        res.send("INICIAR SESSION USUARIO")
    }, 
    profile: (req, res) => {
        res.send("PERFIL DE USUARIO")
    },
    editProfile: (req, res) => {
        res.send("EDITAR PERFIL DE USUARIO")
    }, 
    updateProfile: (req, res) => {
        res.send("ACTUALIZAR DATOS")
    }, 
    deleteProfile: (req, res) => {
        res.send("ELIMINA USUARIO")
    }, 
    allLikesProducts: (req, res) => {
        res.send("TODOS LOS PRODUCTOS CON LIKE")
    }, 
    recommended: (req, res) => {
        res.send("LISTA DE RECOMENDACION")
    }
}

export default controller;