const { v4: uuidv4 } = require("uuid");
const Perfil = require("./perfil.entity.js");
const PerfilDTO = require("./perfil.dto");

const perfils = [
  {
    user_id: "1",
    address_id: "1",
    profile_endereco: "rua sem nome sem numero",
    profile_cidade: "sao paulo",
    country_id: "br",
  },
  {
    user_id: "1",
    address_id: "2",
    profile_endereco: "rua da esquina",
    profile_cidade: "rio de janeiro",
    country_id: "br",
  },
  {
    user_id: "2",
    address_id: "1",
    profile_endereco: "rua manuel da silva",
    profile_cidade: "uberlandia",
    country_id: "br",
  },
];

class PerfilService {
  findAll() {
    return perfils.map((perfil) => new PerfilDTO(perfil));
  }

  findAllEnd(user_id) {
    return perfils.filter((perfil) => {
      return perfil.user_id === user_id;
    });
  }

  findOndEnd(user_id, address_id) {
    return perfils.find(
      (perfil) => perfil.user_id === user_id && perfil.address_id === address_id
    );
  }

  create(user_id, address_id, profile_endereco, profile_cidade, country_id) {
    address_id = uuidv4();
    const newPerfil = new Perfil( 
        user_id,
        address_id,
        profile_endereco,
        profile_cidade,
        country_id)
    perfils.push(newPerfil);
    return newPerfil;
  }
}

module.exports = PerfilService;
