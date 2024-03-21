const PerfilService = require("./perfil.service");
const perfilService = new PerfilService();

class PerfilController {
  getAllPerfil(req, res) {
    const perfils = perfilService.findAll();
    res.json(perfils);
  }

  getAllPerilEnd(req, res) {
    const user_id = req.params.user_id;
    const perfils = perfilService.findAllEnd(user_id);
    res.json(perfils);
  }

  getOneEnd(req, res) {
    const { user_id, address_id } = req.params;
    
    res.json(perfilService.findOndEnd(user_id, address_id));
  }

  createPerfil(req, res) {
    const {address_id, profile_endereco, profile_cidade, country_id } =
      req.body;
    const user_id = req.params.user_id; 
    const perfil = perfilService.create(
      user_id,
      address_id,
      profile_endereco,
      profile_cidade,
      country_id
    );
    res.json(perfil);
    
  }
}

module.exports = PerfilController;
