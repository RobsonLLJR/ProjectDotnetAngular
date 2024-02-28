using Microsoft.AspNetCore.Mvc;
using ProjectDotnet.Application;
using ProjectDotnet.Application.DTO.ProdutoDTO;
using ProjectDotnet.Application.Service.ProdutoService;
using ProjectDotnet.Domain.Entities;

namespace ProjectDotnet.Core.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProdutoController(IProdutoService produtoService) : ControllerBase
    {
        private readonly IProdutoService _produtoService = produtoService;

        [HttpGet("Get")]
        public IEnumerable<Produto> Get() => _produtoService.GetAll();
        [HttpPost]
        public async Task<IActionResult> AddProduto(AddProdutoDto addProdutoDto)
        {
            ServiceResponse<AddProdutoDto> serviceResponse = await _produtoService.Add(addProdutoDto);
            if (serviceResponse.Success is false)
                return BadRequest(serviceResponse);
            return Ok(serviceResponse);
        }
    }
}
