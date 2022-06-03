from django.test import TestCase
from django.urls import reverse
from django.contrib.auth.models import User


class HomeRouteTest(TestCase):

    def setUp(self):
        test_user1 = User.objects.create_user(username='testuser1', password='4321fdsasd')
        test_user1.save()

    
    def test_redirect_if_not_logged_in(self):
        response = self.client.get(reverse('home'))

        self.assertRedirects(response, '/accounts/login/?next=/')



    def test_logged_in_user_access(self):
        login = self.client.login(username='testuser1', password='4321fdsasd')

        response = self.client.get(reverse('home'))

        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'frontend/index.html')
