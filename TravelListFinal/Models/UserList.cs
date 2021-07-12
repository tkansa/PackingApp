using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;

namespace TravelListFinal.Models
{
    [Table("userlists")]
    public class UserList
    {
        [Key]
        public int userlistsId { get; set; }
        public string username { get; set; }
        public string userlisttitle { get; set; }
    }
}
