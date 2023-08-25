from django.shortcuts import render


# Create your views here.

def Home(request):
    return render(request ,'home.html'  )

def About(request):
    return render(request ,'about.html'  )

def Work(request):
    return render(request ,'work.html'  )

def Skills(request):
    return render(request ,'skills.html'  )

def Orgs(request):
    return render(request ,'orgs.html'  )

def Contact(request):
    return render(request ,'contact.html'  )

