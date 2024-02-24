using ProjectDotnet.Data.Context;

namespace ProjectDotnet.Data.Repository
{
    public class RepositoryBase<TEntity>(ContextBase contextoSQL) : IRepositoryBase<TEntity> where TEntity : class
    {
        protected readonly ContextBase _context = contextoSQL;
        public TEntity GetById(int id) => _context.Set<TEntity>().Find(id);
        public IEnumerable<TEntity> GetAll() => _context.Set<TEntity>().ToList();
    }
}
