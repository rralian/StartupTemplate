__author__ = 'robertralian'

from ext import *

class UserProfile(db.Model):

    users = db.ListProperty(users.User)
    joined = db.DateTimeProperty(auto_now_add=True)
    firstName = db.StringProperty()
    lastName = db.StringProperty()
    email = db.EmailProperty()
    status = db.IntegerProperty()

class emailInvite(db.Model):

    inviter = db.UserProperty()
    email = db.EmailProperty()
    name = db.StringProperty(indexed=False)
    firstName = db.StringProperty(indexed=False)
    lastName = db.StringProperty(indexed=False)
    message = db.TextProperty(indexed=False)

    # method mail invite

    # method accept invite