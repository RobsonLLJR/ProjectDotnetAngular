using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ProjectDotnet.Domain.Entities;

namespace ProjectDotnet.Data.Mapping.ProdutoMapping
{
    public class ProdutoMapping : IEntityTypeConfiguration<Produto>
    {
        public void Configure(EntityTypeBuilder<Produto> builder)
        {
            builder
                .HasKey(x => x.Id);
            builder
                .Property(x => x.Categoria)
                .IsRequired();
            builder
                .Property(x => x.Valor)
                .HasColumnType("money")
                .IsRequired();
            builder
                .Property(x => x.Descricao)
                .IsRequired(false);
            builder
                .HasData
                (
                    new Produto { Id = 1, Categoria = Domain.Enums.CategoriaEnum.TV, Valor = 1500m, Descricao = "Smart TV LED 45 Samsung" },
                    new Produto { Id = 2, Categoria = Domain.Enums.CategoriaEnum.Eletrodomestico, Valor = 100m, Descricao = "Sanduicheira Grill 750W" },
                    new Produto { Id = 3, Categoria = Domain.Enums.CategoriaEnum.Celulares, Valor = 1000m, Descricao = "Smartphone Samsung Galaxy A34 128GB Preto" }
                );
        }
    }
}
