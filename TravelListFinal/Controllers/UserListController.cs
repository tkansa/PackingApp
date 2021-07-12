using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TravelListFinal.Models;

namespace TravelListFinal.Controllers
{
    [Route("userlist")]
    [ApiController]
    public class UserListController : ControllerBase
    {
        private TravelDAL dal;

        public UserListController(TravelDAL dal)
        {
            this.dal = dal;
        }
        [HttpPost("add")]
        public UserList AddUserList(string username, string userlisttitle)
        {
           return dal.AddUserList(username, userlisttitle);
        }

        [HttpDelete("remove/{id}")]
        public void RemoveUserList(int id)
        {
            dal.RemoveUserList(id);
        }

        [HttpGet]
        public List<UserList> GetAllUserLists()
        {
            return dal.GetAllUserLists();
        }

        [HttpGet("{id}")]
        public UserList GetOneUserList(int id)
        {
            UserList ulist = dal.GetOneUserList(id);
            return ulist;
        }

        [HttpPut]
        public void EditUserList(UserList ulist)
        {
            dal.EditUserList(ulist);
        }

    }

    }
