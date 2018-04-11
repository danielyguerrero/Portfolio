# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

# Create your views here.
def index(request):
    
    return render(request, 'portfolio/index.html')


def about(request):

	return	render(request, 'portfolio/about.html')

def projects(request):

	return	render(request, 'portfolio/projects.html')

def resume(request):

	return	render(request, 'portfolio/resume.html')