function uniquifyEmails(emails) {
  // We maintain an array to store ordered emails since javascript objects
  // do not guarantee that keys will be returned in insertion order.
  // (Although it does work in most modern browsers.)

  var indexedEmails = {};
  var orderedEmails = [];

  for(var i=0; i<emails.length; i++) {
    thisEmail = emails[i];
    lowerCaseEmail = thisEmail.toLowerCase();

    if(!indexedEmails[lowerCaseEmail]) {
      indexedEmails[lowerCaseEmail] = true;
      orderedEmails.push(thisEmail);
    }
  }

  return orderedEmails;
}
