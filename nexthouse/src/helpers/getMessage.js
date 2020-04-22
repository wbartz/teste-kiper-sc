
const getMessage = (code) => {
  switch(code) {
    case 'required-fields':
      return 'Verifique os campos obrigatórios';
    case 'user-not-found':
      return 'Usuário ou senha inválidos!';
    case 'auth-error':
      return 'Ocorreu um erro durante a autenticação';
    case 'list-residents-error':
      return 'Não foi possível listar os moradores.';
    case 'add-residents-error':
      return 'Não foi possível adicionar o morador';
    case 'resident-not-found':
      return 'Morador não encontrado!';
    case 'edit-residents-error':
      return 'Não foi possível editar o morador!';
    case 'delete-residents-error':
      return 'Não foi possível deletar o morador!';
    case 'list-apartments-error':
      return 'Não foi possível listar os apartamentos';
    case 'apartment-not-found':
      return 'Apartamento não encontrado!';
    case 'get-apartment-error':
      return 'Não foi possível buscar o apartamento';
    case 'add-apartment-error':
      return 'Não foi possível adicionar o apartamento';
    case 'edit-apartment-error':
      return 'Não foi possível editar o apartamento';
    case 'delete-apartment-error':
      return 'Não foi possível deletar o apartamento';
    case 'list-dashboard-error':
      return 'Não foi possível listar o dashboard';
    case 'list-block-error':
      return 'Não foi possível listar os blocos';
    default:
      return 'Ocorreu um erro durante a requisição. Por favor tente novamente!';
  }
};

export default getMessage;