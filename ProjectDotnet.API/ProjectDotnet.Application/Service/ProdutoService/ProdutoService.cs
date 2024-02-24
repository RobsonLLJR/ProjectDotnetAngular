using ProjectDotnet.Data.Context;
using ProjectDotnet.Data.Repository.ProdutoRepository;
using ProjectDotnet.Domain.Entities;

namespace ProjectDotnet.Application.Service.ProdutoService
{
    public class ProdutoService(ContextBase context) : IProdutoService
    {
        protected ProdutoRepository ProdutoRepository { get; init; } = new(context);
        public IEnumerable<Produto> GetAll() => ProdutoRepository.GetAll();
    }
}
