const contactModel = require('../models/contactModel');
const userModel = require('../models/userModel');
const Response = require('../helpers/response');
const { transError, transSuccess } = require('../constants');

const sendInvition = async (currentUser, emailContact) => {
  if (currentUser.email === emailContact) {
    return new Response(400, transError.not_invited, null, null);
  }

  let user = await userModel.findByEmail(emailContact);

  if (!user) {
    return new Response(404, transError.email_not_exists, null, null);
  }

  let data = {
    userId: currentUser._id,
    contactId: user._id
  }

  let contact = await contactModel.addNewContact(data);

  return new Response(201, transSuccess.send_invition_success, contact, null);
}

const getAllFriends = async (currentUserId) => {
  let contacts = await contactModel.getAllFriends(currentUserId);
  

  let friends = contacts.map(async (contact) => 
    contact.contactId == currentUserId ? 
    await userModel.getNormalUserDataById(contact.userId) : 
    await userModel.getNormalUserDataById(contact.contactId)
  );

  return new Response(200, transSuccess.get_all_friends_success, await Promise.all(friends), null);
}

module.exports = {
  sendInvition,
  getAllFriends
}
