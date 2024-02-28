using AutoMapper;
using ProjectDotnet.Application.DTO.ProdutoDTO;
using ProjectDotnet.Domain.Entities;

namespace ProjectDotnet.Core
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<AddProdutoDto, Produto>();
        }
    }
}
