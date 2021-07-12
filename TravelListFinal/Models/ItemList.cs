using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;

namespace TravelListFinal.Models
{
    [Table("itemslist")]
    public class ItemList
    {
        [Key]
        public int itemslistId { get; set; }
        public string itemname { get; set; }
        public string itemcategory { get; set; }
        public int userlistsId { get; set; }
    }
}
