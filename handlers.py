__author__ = 'robertralian'

# moving most of our import statements to their own file
from ext import *



class BaseHandler(webapp.RequestHandler):

    # the following block sets up a context dictionary so you can pass
    # standard variables to all your pages if that floats your boat
    context = {}
    def __init__(self):
        self.populateContext()
    def populateContext(self):
        # this is where you would add your global stuff
        # e.g., self.context['config'] = config

        currentUser = users.get_current_user()
        if (currentUser):
            self.context['currentUser'] = currentUser

            if users.is_current_user_admin():
                self.context['isAdmin'] = True

            userProfile = db.GqlQuery("SELECT * FROM UserProfile WHERE users = :1",currentUser)
            if (userProfile):
                self.context['userProfile'] = userProfile
        return


    # this is a shorcut method you can use so you can skip some of this code
    def render(self, template_file):
        path = os.path.join(os.path.dirname(__file__), 'templates/', template_file)
        self.response.out.write(template.render(path, self.context))

class MainHandler(BaseHandler):
    def get(self):

        # you can append to the context dictionary here
        self.render('index.html')