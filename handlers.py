__author__ = 'robertralian'

# moving most of our import statements to their own file
from ext import *
from jinja2 import Environment, FileSystemLoader, TemplateNotFound
from jinja2.ext import autoescape


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

    def render(self, template_name):

        env = Environment(loader = FileSystemLoader([os.path.join(os.path.dirname(__file__), 'templates')]),
                          autoescape=True,
                          extensions=['jinja2.ext.autoescape'])
        try:
            template = env.get_template(template_name)
        except TemplateNotFound:
            raise TemplateNotFound(template_name)
        content = template.render(self.context)
        self.response.out.write(content)

class MainHandler(BaseHandler):
    def get(self):

        # you can append to the context dictionary here
        #self.context['testEscape']='<script type="javascript">alert("hi");</script>'
        #self.render('index.html')

        self.render('index.html')