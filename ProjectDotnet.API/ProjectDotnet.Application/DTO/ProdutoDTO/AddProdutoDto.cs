using ProjectDotnet.Domain.Enums;
namespace ProjectDotnet.Application.DTO.ProdutoDTO
{
    public class AddProdutoDto
    {
        public CategoriaEnum Categoria { get; set; }
        public string Descricao { get; set; } = string.Empty;
        public decimal Valor { get; set; }
    }
}
