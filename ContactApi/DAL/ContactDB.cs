using ContactApi.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ContactApi.DAL
{
    public class ContactDB :DbContext
    {
        public ContactDB() : base("ContactDB")
        {
                
        }

        public DbSet<Contact> Contacts { get; set; }
    }
}