using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;
using Dapper;
using Microsoft.Extensions.Configuration;
using MySql.Data.MySqlClient;

namespace TravelListFinal.Models
{
    public class TravelDAL
    {
        public static IDbConnection db;

        private string connectionString;

		public TravelDAL(IConfiguration config)
		{
            connectionString = config.GetConnectionString("db");
		}

        //Category table methods
        public static Category AddCategory(string category)
        {
            Category cat = new Category() {category = category};
            db.Insert(cat);
            return cat;
        }

        public void RemoveCategory(int theid)
        {
            Category cat = new Category() { id = theid };
            db.Delete(cat);
        }

        public List<Category> GetCategories()
		{
            List<Category> cats = new List<Category>();
            MySqlConnection conn = null;
            try
			{
                conn = new MySqlConnection(connectionString);
                cats = conn.GetAll<Category>().ToList();
            }
            catch(Exception e)
			{

			}
			finally
			{
                if (conn != null)
                {
                    conn.Close();
                }
            }

            return cats;
        }

        public Category GetOneCategory(int id)
        {
            return db.Get<Category>(id);
        }

        public void EditCategory(Category catg)
        {
            db.Update(catg);
        }


        //UserLists table methods
        public UserList AddUserList(string username, string userlisttitle)
        {
            UserList list = new UserList() { username = username, userlisttitle = userlisttitle };
            db.Insert(list);
            return list;
        }

        public void RemoveUserList(int theid)
        {
            UserList list = new UserList() { userlistsId = theid };
            db.Delete(list);

        }
        public List<UserList> GetAllUserLists()
        {
           
            List<UserList> users = new List<UserList>();
			MySqlConnection conn = null;
            try
            {
                conn = new MySqlConnection(connectionString);
                users = conn.GetAll<UserList>().ToList();
            }
			catch (Exception e)
			{

			}
			finally
			{
                if (conn != null)
                {
                    conn.Close();
                }
            }
            return users;
        }

        public UserList GetOneUserList(int id)
        {
            return db.Get<UserList>(id);
        }

        public void EditUserList(UserList ulist)
        {
            db.Update(ulist);
        }


        //Itemslist table methods
        public ItemList AddItemToList(string itemname, string itemcategory, int userlistsId)
        {
            ItemList list = new ItemList() { itemname = itemname, itemcategory = itemcategory, userlistsId = userlistsId };
            db.Insert(list);
            return list;
        }

        public void RemoveItemFromList(int theid)
        {
            ItemList list = new ItemList() { itemslistId = theid };
            db.Delete(list);

        }

        public List<ItemList> GetAllItemLists()
        {
            List<ItemList> users = new List<ItemList>();
            MySqlConnection conn = null;
            try
            {
                conn = new MySqlConnection(connectionString);
                users = conn.GetAll<ItemList>().ToList();
            }
            catch (Exception e)
            {

            }
            finally
            {
                if (conn != null)
                {
                    conn.Close();
                }
            }
            return users;
           
        }

        public ItemList GetOneItemList(int id)
        {
            return db.Get<ItemList>(id);
        }

        public void EditItemList(ItemList ilist)
        {
            db.Update(ilist);
        }




    }
}
