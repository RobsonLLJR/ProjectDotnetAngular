using ProjectDotnet.Domain.Entities;

namespace ProjectDotnet.Application.Service.ProdutoService
{
    public interface IProdutoService
    {
        IEnumerable<Produto> GetAll();
    }
}
