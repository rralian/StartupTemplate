__author__ = 'robertralian'

# moving most of our import statements to their own file
from ext import *
from jinja2 import Environment, FileSystemLoader, TemplateNotFound
from jinja2.ext import autoescape
from google.appengine.ext.webapp.util import login_required


class BaseHandler(webapp.RequestHandler):


    # the following block sets up a context dictionary so you can pass
    # standard variables to all your pages if that floats your boat
    context = {}
    def __init__(self):
        self.populateContext()
        
    def populateContext(self):
        # this is where you would add your global stuff
        # e.g., self.context['config'] = config

        self.isAdmin = False
        self.context['isAdmin'] = False
        currentUser = users.get_current_user()

        if currentUser:
            self.context['greeting'] = ("Welcome, %s! (<a href=\"%s\">sign out</a>)" %
                        (currentUser.nickname(), users.create_logout_url("/")))
        else:
            self.context['greeting'] = ("<a href=\"%s\">Sign in or register</a>." %
                        users.create_login_url("/"))

        if (currentUser):
            self.context['currentUser'] = currentUser

            if users.is_current_user_admin():
                self.context['isAdmin'] = True
                self.isAdmin=True

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


class RestrictedHandler(BaseHandler):

    @login_required
    def get(self):

        self.render('restricted.html')

class AdminHandler(BaseHandler):

    @login_required
    def get(self):

        if(self.isAdmin):
            self.render('admin.html')

        else:
            self.render('index.html')

