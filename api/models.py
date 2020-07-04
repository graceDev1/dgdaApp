from django.db import models
from django.contrib.auth.models import User


class Forum(models.Model):
    subject = models.CharField(max_length=100)
    message = models.TextField()
    user = models.ForeignKey(User, related_name="api", on_delete=models.CASCADE, null=True)
    datePost = models.DateField(auto_now=True)

    

class Post(models.Model):
    content = models.TextField()
    pdf_file = models.FileField(upload_to='pdf_file', max_length=255)
    date_post = models.DateField(auto_now=True)
