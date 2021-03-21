using ContactApi.DAL;
using ContactApi.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace ContactApi.Controllers
{
    
    public class ContactController : ApiController
    {
        private readonly ContactDB _contactDb;
        public ContactController()
        {
            _contactDb = new ContactDB();
        }

        [HttpGet]      
        public List<Contact> List()
        {
            var list = _contactDb.Contacts.ToList();
            return list;
        }

        [HttpPost]       
        public async Task<HttpResponseMessage> AddContactAsync([FromBody]Contact contact)
        {
            if (await UserExist(contact)) return new HttpResponseMessage(HttpStatusCode.BadRequest);
            if (contact == null)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }

            _contactDb.Contacts.Add(contact);
            await _contactDb.SaveChangesAsync();

            return new HttpResponseMessage(HttpStatusCode.OK);
        }

        public async Task<bool> UserExist(Contact contact)
        {
            return await _contactDb.Contacts.AnyAsync(x => x.FirstName == contact.FirstName && x.LastName == contact.LastName && x.PhoneNumber == contact.PhoneNumber);
        }

        [HttpPut]       
        public HttpResponseMessage EditContact([FromBody]Contact contact)
        {
            if (contact == null)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
            else
            {
                var ContactInDb = _contactDb.Contacts.Where(x => x.Id == contact.Id).SingleOrDefault();
                if (contact == null)
                {
                    return new HttpResponseMessage(HttpStatusCode.BadRequest);
                }               
                ContactInDb.FirstName = contact.FirstName;
                ContactInDb.LastName = contact.LastName;
                ContactInDb.PhoneNumber = contact.PhoneNumber;
                ContactInDb.Status = contact.Status;
            }
            _contactDb.SaveChanges();

            return new HttpResponseMessage(HttpStatusCode.OK);
        }

        [HttpDelete]       
        public HttpResponseMessage DeleteContact(int Id)
        {
            if (Id == 0)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
            else
            {
                try
                {
                    var contact = _contactDb.Contacts.Where(x => x.Id == Id).SingleOrDefault();
                    if (contact == null)
                    {
                        return new HttpResponseMessage(HttpStatusCode.BadRequest);
                    }
                    _contactDb.Contacts.Remove(contact);
                    _contactDb.SaveChanges();
                    return new HttpResponseMessage(HttpStatusCode.OK);
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                    return new HttpResponseMessage(HttpStatusCode.InternalServerError);
                }

            }
        }
    }
}
