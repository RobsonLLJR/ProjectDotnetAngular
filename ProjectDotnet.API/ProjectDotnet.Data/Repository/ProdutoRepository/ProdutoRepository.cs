using ProjectDotnet.Data.Context;
using ProjectDotnet.Domain.Entities;

namespace ProjectDotnet.Data.Repository.ProdutoRepository
{
    public class ProdutoRepository(ContextBase contextoSQL) : RepositoryBase<Produto>(contextoSQL)
    {

    }
}
