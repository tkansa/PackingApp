using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;

namespace TravelListFinal.Models
{

    [Table("categories")]
    public class Category
    {
        [Key]
        public int id { get; set; }
        public string category { get; set; }
    }
}
