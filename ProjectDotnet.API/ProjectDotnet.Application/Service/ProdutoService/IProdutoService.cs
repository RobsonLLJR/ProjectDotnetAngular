using ProjectDotnet.Application.DTO.ProdutoDTO;
using ProjectDotnet.Domain.Entities;

namespace ProjectDotnet.Application.Service.ProdutoService
{
    public interface IProdutoService
    {
        IEnumerable<Produto> GetAll();
        Task<ServiceResponse<AddProdutoDto>> Add(AddProdutoDto addProdutoDto);
    }
}
