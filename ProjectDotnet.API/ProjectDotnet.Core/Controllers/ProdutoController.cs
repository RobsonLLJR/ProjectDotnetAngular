using Microsoft.AspNetCore.Mvc;
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
    }
}
