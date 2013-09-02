import requests as reqs

from django import http
from django.views.decorators.csrf import csrf_protect
from django.shortcuts import render

@csrf_protect
def index(request):
    if request.method == 'POST':
        url = request.POST.get('txt-web-page', None)
        if not 'http' in url:
            url = 'http://' + url
        r = reqs.get(url)
        if r.status_code == 200:
            return http.HttpResponse('success')
        else:
            return http.HttpResponse('failed')

    c = {}
    return render(request, "index.html", c)

def success(request):
    if request.method == 'POST':
        print 'need to store: ' + request.POST['txt-your-email-sign-in']

    return render(request, "success.html", {})
