from django.db import models

class User(models.Model):
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)



class Forum(models.Model):
    subject = models.CharField(max_length=100)
    message = models.TextField()
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    datePost = models.DateField(auto_now=True)

    

class Post(models.Model):
    content = models.TextField()
    pdf_file = models.FileField(upload_to='pdf_file', max_length=255)
    date_post = models.DateField(auto_now=True)
