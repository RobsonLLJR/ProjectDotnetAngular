using ProjectDotnet.Domain.Enums;
namespace ProjectDotnet.Application.DTO.ProdutoDTO
{
    public class AddProdutoDto
    {
        public string Descricao { get; set; } = string.Empty;
        public CategoriaEnum Categoria { get; set; }
        public decimal Valor { get; set; }
    }
}
