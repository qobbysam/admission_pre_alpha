from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin

# Create your views here.
class HomeRoute(LoginRequiredMixin,TemplateView):
    template_name = 'frontend/index.html'

    # form = UserFileUploadForm

    # gaget_form = UserRegisterGadgetForm
    
    # def get_context_data(self, *args, **kwargs):
    #     context = super(HomeRoute, self).get_context_data(*args, **kwargs)
    #     context['form'] = self.form
    #     context['gaget_form'] = self.gaget_form
        
    #     return context

