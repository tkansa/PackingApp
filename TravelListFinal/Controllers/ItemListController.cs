using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelListFinal.Models;

namespace TravelListFinal.Controllers
{
    [Route("itemlist")]
    [ApiController]
    public class ItemListController : ControllerBase
    {
        private TravelDAL dal;
		public ItemListController(TravelDAL dal)
		{
            this.dal = dal;
		}
        [HttpPost("add")]
        public ItemList AddItemToList(string itemname, string itemcategory, int userlistsId)
        {
           return dal.AddItemToList(itemname, itemcategory, userlistsId);
        }

        [HttpDelete("remove/{id}")]
        public void RemoveItemFromList(int id)
        {
            dal.RemoveItemFromList(id);
        }

        [HttpGet]
        public List<ItemList> GetAllItemLists()
        {
            return dal.GetAllItemLists();
        }

        [HttpGet("{id}")]
        public ItemList GetOneItemList(int id)
        {
            ItemList ilist = dal.GetOneItemList(id);
            return ilist;
        }

        [HttpPut]
        public void EditItemList(ItemList ilist)
        {
            dal.EditItemList(ilist);
        }

    }
}
