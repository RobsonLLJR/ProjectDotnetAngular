using ProjectDotnet.Domain.Enums;

namespace ProjectDotnet.Domain.Entities
{
    public class Produto
    {
        public int Id { get; set; }
        public string Descricao { get; set; }
        public CategoriaEnum Categoria { get; set; }
        public decimal Valor { get; set; }
    }
}
