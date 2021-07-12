using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelListFinal.Models;

namespace TravelListFinal.Controllers
{
    [Route("category")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private TravelDAL dal;

		public CategoryController(TravelDAL dal)
		{
            this.dal = dal;
		}
        [HttpPost("add")]
        public Category AddCategory(string category)
        {
            return TravelDAL.AddCategory(category);
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

        [HttpDelete("remove/{id}")]
        public void RemoveCategory(int id)
        {
            dal.RemoveCategory(id);
        }

        [HttpGet]
        public List<Category> GetCategories()
        {
           return dal.GetCategories();
        }

        [HttpGet("{id}")]
        public Category GetOneCategory(int id)
        {
            Category cat = dal.GetOneCategory(id);
            return cat;
        }
        
        [HttpPut]
        public void EditCategory (Category catg)
        {
            dal.EditCategory(catg);
        }


    }
}
