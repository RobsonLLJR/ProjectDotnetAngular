using AutoMapper;
using ProjectDotnet.Application.DTO.ProdutoDTO;
using ProjectDotnet.Data.Context;
using ProjectDotnet.Data.Repository.ProdutoRepository;
using ProjectDotnet.Domain.Entities;

namespace ProjectDotnet.Application.Service.ProdutoService
{
    public class ProdutoService(ContextBase context, IMapper mapper) : IProdutoService
    {
        private readonly IMapper _mapper = mapper;
        protected ProdutoRepository ProdutoRepository { get; init; } = new(context);

        public async Task<ServiceResponse<AddProdutoDto>> Add(AddProdutoDto addProdutoDto)
        {
            Produto newProduto = _mapper.Map<Produto>(addProdutoDto);
            if(!await ProdutoRepository.Add(newProduto))
                return new ServiceResponse<AddProdutoDto>() { Success = false, Message = "Erro inesperado." };
            return new ServiceResponse<AddProdutoDto>() { Message = "Sucesso! produto inserido." };
        }

        public IEnumerable<Produto> GetAll() => ProdutoRepository.GetAll();
    }
}
