import os

import handlers

from google.appengine.ext import webapp

import unittest

from webtest import TestApp
from gaetestbed import WebTestCase

class HandlersTest(WebTestCase,unittest.TestCase):
    def setUp(self):
        self.application = webapp.WSGIApplication(
            [('/',handlers.MainHandler)],
            debug=True)

    def test_default_page(self):
        os.environ['AUTH_DOMAIN'] = 'example.com'
        app = TestApp(self.application)
        response = app.get('/')
        self.assertOK(response)

    
