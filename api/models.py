from django.db import models
from django.contrib.auth.models import User


class Forum(models.Model):
    subject = models.CharField(max_length=100)
    message = models.TextField()
    owner = models.ForeignKey(User, 
    related_name='Forum', on_delete=models.CASCADE, null=True)
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    datePost = models.DateField(auto_now=True)

    

class Post(models.Model):
    content = models.TextField()
    pdf_file = models.FileField(upload_to='pdf_file', max_length=255)
    date_post = models.DateField(auto_now=True)
